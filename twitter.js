$(".pagehead-actions").each(function(index){
  var tweetURL = "https://twitter.com/share/?url=" + document.URL;
  var twitterButton = $("<li></li>").append("<a href=" + tweetURL + " class=\"twitter-share-button\" data-lang=\"en\">Tweet</a>").append("<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=\"https://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>");
  $(this).append(twitterButton);
});
