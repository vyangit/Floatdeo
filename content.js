$(document).ready(function() {
    var videos = $("video");
    videos.hover(
        function() {
            showFloatdeoButton(this, event);
        }, function(event) {
            hideFloatdeoButton(this, event);
        });
});

/**
 * 
 * @param {HTMLElement} video 
 * @param {MouseEvent} event 
 */
function showFloatdeoButton(video, event) {
    // Prevents double button set up
    if (stillRelativeToRect(video, event)) return;

    // Setup and create the button
    let imgSrc = chrome.runtime.getURL("assets/pip.png");
    let imgSvgSrc = chrome.runtime.getURL("assets/pip.svg");

    let pipImg = $('<img/>').attr({
        'src':imgSrc,
        'alt':"picture in picture icon",
        'width':"24px",
        'height':"24px"
    }).css({
        'vertical-align': 'middle'
    });

    let pipTxt = $('<span/>', {
        text: 'Picture-in-picture'
    }).css({
        'vertical-align': 'middle',
        'padding-left': "4px"
    });

    let floatdeoButton = $('<button/>', {
        "class": 'floatdeoPopupButton',
    }).append(pipImg, pipTxt)
    .appendTo(document.body)[0]; // append to get the client height and width

    // Position the button relative to the video's bounds
    let videoBounds = video.getBoundingClientRect();
    let x = window.scrollX+videoBounds.right-floatdeoButton.clientWidth;
    let y = window.scrollY+videoBounds.bottom+(floatdeoButton.clientHeight/2)-(video.clientHeight/2);

    let xPixels = x.toString()+'px';
    let yPixels = y.toString()+'px';
    $(floatdeoButton).css({
        "display": 'none',
        "left": xPixels,
        "top": yPixels,
        "z-index": "10000"
    }).mouseleave((event, video) => {
        hideFloatdeoButton(video, event)
    }).show();
}

/**
 * 
 * @param {HTMLElement} video 
 * @param {MouseEvent} event 
 */
function hideFloatdeoButton(video, event){
    /**  
     * Check if mouse has actually left the video view.
     * Addresses the case where the button is hovered over and 
     * causes the browser to interpret the hover as a leaving 
     * of the initial video bounds
     * */
    let isRelative = stillRelativeToRect(video, event)

    if (!isRelative){ 
        // Clear all buttons
        $(document.body).find('.floatdeoPopupButton').hide();
        $(document.body).find('.floatdeoPopupButton').remove();
    }
}

/**
 * 
 * @param {HTMLElement} video Represents the relative video 
 * @param {MouseEvent} event
 * 
 * The function considers the relative video dom element or
 * floatdeo button as relative and anything else not 
 * (i.e video overlays, exterior of video bounds)
 */
function stillRelativeToRect(video, event) {
    if (video == null || event == null) return false;
    let intoTarget = event.relatedTarget;
    let bounds = video.getBoundingClientRect();
    let cursorX = event.pageX;
    let cursorY = event.pageY;

    return ((intoTarget == video || 
        intoTarget == $('.floatdeoPopupButton')[0])
        && (cursorX >= bounds.left && cursorX <= bounds.right && cursorY >= bounds.top && cursorY <= bounds.bottom)
    );
}