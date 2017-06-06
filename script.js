"use strict";

function mouseMove (event) {
    console.log(event.pageX, event.pageY);
    const windowWidth = $(window).width();
    const windowHeight = $(window).height();
    const windowCenter = {
        left: windowWidth/2,
        top: windowHeight/2 
    };
    const centeredMouse = {
        left: event.pageX - windowCenter.left,
        top: event.pageY - windowCenter.top
    };
    console.log(centeredMouse);
    $('#sideTiger>img').css(centeredMouse); // .css remembers its initial position from parents like anchor point
    $('#pika>img').css(centeredMouse);
    $('#tigerFront>img').css(centeredMouse);
}


function windowLoadHandler() {
    console.log('window loaded');
    $('body').mousemove(mouseMove); // mouseMove function getscalled
}
$(windowLoadHandler);
