var defaultMessage = "Hover over or focus on an image below to display it here.";

function upDate(previewPic) {
  console.log("upDate: showing " + previewPic.alt);
  var big = document.getElementById("image");
  big.style.backgroundImage = "url('" + previewPic.src + "')";
  big.innerHTML = '<span class="caption">' + previewPic.alt + '</span>';
}

function unDo() {
  console.log("unDo: back to default");
  var big = document.getElementById("image");
  big.style.backgroundImage = "none";
  big.innerHTML = defaultMessage;
}

function addTabFocus() {
  console.log("onload triggered: addTabFocus is running");

  var images = document.getElementsByClassName("preview");

  for (var i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0");
    console.log("tabindex added to image " + (i + 1));
  }
}
