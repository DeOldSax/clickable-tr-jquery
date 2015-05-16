$(document).ready(function() {
    $('.clickable-table').clickableTable({
        eventC : Cplaceholder
    });
});

function eventA( e ) {
    console.log("Running eventA: ");
}

function anotherOne( e ) {
    console.log("I am another function");
}

function Cplaceholder( e ) {
    console.log("I am functionC");
}
