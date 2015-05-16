// TODO: 
//
// * build a tag only once if needed and only exchange params!
// * think about using $.getScript() instead of a hidden a tag
// * copy all attributes to a tag (maybe it is not a good idea if functionality breaks if two tags have these attributes)
//
(function ( $ ) {

    $.fn.clickableTable = function( options ) {
        var rows = this.find('tr[data-href], tr[data-event]');
        addHoverClass(rows);
        addClickEvent(rows);

        settings = options;
        buildPreviewTag();

        return this;
    };

    function addHoverClass(rows) {
        rows.hover(function() {
            $(this).css("cursor", "pointer");
            var href = $(this).data('href');
            if (href) {
               showPreviewTag(href, true);
            }
        }, function() {
            showPreviewTag("", false);
        });
    }

    function addClickEvent(rows) {
        rows.click(function(e) {
            e.preventDefault();

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

    function showPreviewTag(href, show) {
        if ( show ) $('.preview-tag').text(href).fadeIn();
        else $('.preview-tag').hide();
    }

    function buildPreviewTag() {
        var tag = $('<p>www.deoldsax.de</p>');
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
        var aTag = $('<a></a>');
        aTag.css('display', 'none');
        aTag.attr('data-remote', isRemote);
        aTag.attr('href', dataHref);
        aTag.attr('id', id);
        aTag.insertAfter($("body"));
        return aTag;
    }
 
}( jQuery ));
