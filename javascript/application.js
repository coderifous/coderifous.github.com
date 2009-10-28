$(document).ready(function() {

  $("#twitter").getTwitter({
    userName: "coderifous",
    numTweets: 3,
    loaderText: "Loading tweets...",
    slideIn: false,
    showHeading: true,
    headingText: "Latest Tweets",
    showProfileLink: true
  });

  $('a[rel*=facebox]').facebox()

});

