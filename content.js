var floatdeoPopupButton;

$(document).ready(function() {
    if ('pictureInPictureEnabled' in document) {
        $(this).mousemove(
            function() {
                /** Base check: Check if we are directly over a video
                 * already so we don't fire another event that is taken
                 * care by the video on hover function {showFloatdeoVideo}
                 */
                let element = event.toElement;
                if (element.nodeName == "VIDEO" || element.classList.contains("floatdeoPopupButton")){
                    // Do nothing, will be handled from another event listener
                } else {
                    let video = findRelativeVideoRect(event);
                    if (video == null) {
                        hideFloatdeoButton();
                    } else {
                        showFloatdeoButton(video);
                    }
                }
            }
        );
    } else {
        // TODO: add no support actions
    }

    var videos = $("video");
    videos.hover(
        function() {
            showFloatdeoButton(this);
        }, function(event) {
            /**  
             * Check if mouse has actually left the video view.
             * Addresses the case where the button is hovered over and 
             * causes the browser to interpret the hover as a leaving 
             * of the initial video bounds
             * */
            if (!isRelativeToRect(this, event)){ 
                hideFloatdeoButton(); 
            }
        });
    }
);

/**
 * Determines if the mouse cursor is over a video html element
 * and returns the corresponding video element.
 * 
 * @param {MouseEvent} event 
 * 
 * @returns {HTMLElement} If the mouse cursor is positioned over a video, the video else null
 */
function findRelativeVideoRect(event) {
    var relativeVideo = null;
    $("video").each( (_, video) => {
        // Should only find one
        // TODO: Look into if multiple videos overlays cause problems and add check if it does 
        if (isRelativeToRect(video, event)) {
            relativeVideo = video;
        }
    });

    return relativeVideo;
}

/**
 * 
 * @param {HTMLElement} video 
 */
function showFloatdeoButton(video) {
    // Prevents double button set up
    if ( floatdeoPopupButton != null) return;

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

    floatdeoPopupButton = $('<button/>', {
        "class": 'floatdeoPopupButton',
    }).append(pipImg, pipTxt)
    .appendTo(document.body)[0]; // append to get the client height and width

    // Position the button relative to the video's bounds
    let videoBounds = video.getBoundingClientRect();
    let x = window.scrollX+videoBounds.right-floatdeoPopupButton.clientWidth-5; // 5 is padding
    let y = window.scrollY+videoBounds.bottom+(floatdeoPopupButton.clientHeight/2)-(video.clientHeight/2);

    let xPixels = x.toString()+'px';
    let yPixels = y.toString()+'px';
    $(floatdeoPopupButton).css({
        "display": 'none',
        "left": xPixels,
        "top": yPixels,
        "z-index": "10000"
    }).click(() => {
        requestPictureInPictureScreen(video);
    }).mouseleave((event, video) => {
        hideFloatdeoButton(video, event)
    }).show();
}

/**
 * Hides the floatdeoButtons
 */
function hideFloatdeoButton(){
    $(document.body).find('.floatdeoPopupButton').hide();
    $(document.body).find('.floatdeoPopupButton').remove();
    
    floatdeoPopupButton = null;
}

/**
 * 
 * @param {HTMLElement} video Represents the relative video 
 * @param {MouseEvent} event
 * 
 * The function considers the video dom bounds or
 * floatdeo button as relative and anything else not 
 */
function isRelativeToRect(video, event) {
    if (video == null || event == null) return false;
    let intoTarget = event.toElement;
    let bounds = video.getBoundingClientRect();
    let cursorX = event.pageX;
    let cursorY = event.pageY;

    return (intoTarget == floatdeoPopupButton)
        || (cursorX >= bounds.left && cursorX <= bounds.right && cursorY >= bounds.top && cursorY <= bounds.bottom);
}

/**
 * 
 * @param {HTMLElement} video The reference dom video 
 */
async function requestPictureInPictureScreen(video) {
    try {
        if (video !== document.pictureInPictureElement) {
            await video.requestPictureInPicture();
            console.log("request");
        } else {
            await document.exitPictureInPicture();
            console.log("leave");
        }
    } catch (error) {
        console.log(error);
    } finally {
        // Add safeguard
    }
}