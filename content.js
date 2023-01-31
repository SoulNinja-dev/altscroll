const unbias = () => {
  // removing pfps
  var pfps = document.querySelectorAll('[data-testid="Tweet-User-Avatar"]');
  if (pfps.length > 0) {
    for (var i = 0, l = pfps.length; i < l; i++) {
      pfps[i].remove();
    }
  }

  // removing usernames
  var usernames = document.querySelectorAll('[data-testid="User-Names"]');
  if (usernames.length > 0) {
    for (var i = 0, l = usernames.length; i < l; i++) {
      usernames[i].remove();
    }
  }

  // removing liked by, reply lines, show thread
  var tweets = document.querySelectorAll('[data-testid="tweet"]');
  for (var i = 0, l = tweets.length; i < l; i++) {
    // liked by
    if (tweets[i].children[0].children[0].children[0].children.length == 2) {
      tweets[i].children[0].children[0].children[0].children[0].remove();
    }

    // weird lines
    if (
      tweets[i].children[0].children[0].children[0].children[0].children
        .length == 2
    ) {
      tweets[
        i
      ].children[0].children[0].children[0].children[0].children[0].remove();
    }

    // show thread
    if (tweets[i].children[0].children.length == 2) {
      tweets[i].children[0].children[1].remove();
    }

    // stats
    if (
      tweets[i].children[0].children[0].children[0].children[0].children[0]
        .children[1].children.length == 3
    ) {
      tweets[
        i
      ].children[0].children[0].children[0].children[0].children[0].children[1].children[2].remove();
    } else {
      tweets[
        i
      ].children[0].children[0].children[0].children[0].children[0].children[1].children[1].remove();
    }
  }
};

const filterpage = () => {
  if (window.location.href == "https://twitter.com/home") {
    unbias();
  }
};

// listen to scroll and load event
window.addEventListener("scroll", filterpage);