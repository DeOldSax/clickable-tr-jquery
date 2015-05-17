/*
 *  Project: https://github.com/DeOldSax/clickable-tr-jquery
 *  Version: 0.0.1
 *  License: MIT
 *
 *  TODO
 *  build aTag only once if needed and only exchange params!
 *  think about using $.getScript() instead of a hidden a tag
 *  copy all attributes to a tag (maybe it is not a good idea if functionality breaks if two tags have these attributes)
 */
;(function ( $ ) {

    var disableClickClass = 'disable-row-click';
    var defaults = {
        showPreviewTag : false
    };
    var settings;

    $.fn.clickableTable = function( options ) {
        settings = $.extend( defaults, options);

        var rows = this.find('tr[data-href], tr[data-event]');

        rows.css("cursor", "pointer");
        rows.find("td." + disableClickClass).css("cursor", "default");

        addClickEvent(rows);

        if (settings.showPreviewTag) {
            buildPreviewTag();
            addHoverClass(rows);
        }

        return this;
    };

    function addHoverClass(rows) {
        rows.hover(function(e) {
            if (notClickable(e)) {
                return;
            }
            var href = $(this).data('href');
            if (href && !notClickable(e)) {
               showPreviewTag(href, true);
            }

        }, function() {
            if (settings.showPreviewTag) {
                showPreviewTag("", false);
            }
        });

    }

    function addClickEvent(rows) {
        rows.click(function(e) {
            if (notClickable(e)) {
                return;
            }

            dataEvent = $(this).data("event");
            if ( dataEvent ) {
                if (settings && settings[dataEvent]) {
                   settings[dataEvent].call( this, e );
                } else {
                    var fun = window[dataEvent];
                    if ( typeof fun === "function" ) {
                        fun.call( this, e );
                    }
                }
            }

            dataHref = $(this).data("href");
            if ( dataHref ) {
                isRemote = $(this).data("remote");

                if (typeof isRemote == "undefined") {
                    window.location.href = $(this).data("href");
                } else {
                    var id = "uniquy-id-id";
                    var aTag = buildATag(id);
                    document.getElementById(id).click();
                    aTag.remove();
                }
            }
        });
    }

    function notClickable(e) {
        var target = $(e.target);
        return e.target.localName == "a" ||
            e.target.localName == 'button' ||
            target.hasClass(disableClickClass) ||
            target.closest('td').hasClass(disableClickClass);
    }

    function showPreviewTag(href, show) {
        var prevEl = $('.preview-tag');
        if ( show ) prevEl.text(href).fadeIn();
        else prevEl.hide();
    }

    function buildPreviewTag() {
        var tag = $('<p></p>');
        tag.addClass("preview-tag");
        tag.css({
            position: "absolute",
            bottom: 0,
            padding: "2px 4px 2px 4px",
            margin: 0,
            background: "linear-gradient(white, #F5F5F5)",
            border: "1px solid lightgrey",
            "font-size": "12px",
            "font-family": "arial",
            display: "none"
        });
        tag.insertAfter($("body"));
    }

    function buildATag(id) {
        var tag = $('<a></a>');
        tag.css('display', 'none');
        tag.attr('data-remote', isRemote);
        tag.attr('href', dataHref);
        tag.attr('id', id);
        tag.insertAfter($("body"));
        return tag;
    }

}( jQuery ));
