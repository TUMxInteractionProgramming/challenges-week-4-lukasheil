/* #6 start the #external #action and say hello */
console.log("App is alive");

/**
 * #6 #Switcher function for the #channels name in the right app bar
 * @param channelName Text which is set
 */


// #7 GLOBAL VARIABLES
var currentChannel = {}

var currentLocation = {
    longitude: 48.1390971,
    latitude: 11.6095345,
    what3words: 'dichterin.übungen.ausfällt'
}

function switchChannel(channelName) {
    //Log the channel switch
    console.log("Tuning in to channel", channelName);

    // #7 Write the new channel to the right app bar
    $('#channel-name').html(channelName.name);

    //#6 change the #channel #location
    $("#channel-location").html('by <a href="http://w3w.co/upgrading.never.helps" target="_blank"><strong>upgrading.never.helps</strong></a>');

    /* #7 star depending on object property */
    if (channelName.starred == true){
        // $('#channel-star').removeClass('far fa-star');
        // $('#channel-star').addClass('fas fa-star');

    } else{
        // $('#channel-star').removeClass('fas fa-star');
        // $('#channel-star').addClass('far fa-star');
        $('#channel-star').toggleClass('fas fa-star far fa-star');
    }

    /* #6 #highlight the selected #channel.
       This is inefficient (jQuery has to search all channel list items), but we'll change it later on */
    $('#channels li').removeClass('selected');
    $('#channels li:contains(' + channelName.name + ')').addClass('selected');

    // #7 Setting channelName to currentChannel variable
    currentChannel = channelName;
    
    // Test console logs 
    // console.log("Current Channel", currentChannel);
    // console.log("Current location", currentLocation);
}

/* #7 #liking a channel on #click */
function star() {
    $('#channel-star').toggleClass('fas fa-star far fa-star');
    
    // #7 writing new Status of Star in the refering object
    currentChannel.starred = !currentChannel.starred
}

// #7 function starList() {
//     // jQuery to display correct star in channel list
//     $('.fas').toggleClass('fas fa-star far fa-star');
    
//     // writing Status of Star in the refering object
//     currentChannel.starred = !currentChannel.starred
// }

/**
 * #6 #taptab selects the given tab
 * @param tabId #id of the tab
 */
function selectTab(tabId) {
    // #6 #taptab #remove selection from all buttons...
    $('#tab-bar button').removeClass('selected');

    //...#6 #taptab #log the new tab on change...
    console.log('Changing to tab', tabId);

    //...#6 #taptab #add selection to the given tab button, its id is passed via the #argument tabId
    $(tabId).addClass('selected');
}

/**
 * #6 #toggle (show/hide) the emojis menu #smile
 */
function toggleEmojis() {
    /* $('#emojis').show(); // #show */
    $('#emojis').toggle(); // #toggle
}
