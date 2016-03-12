var flashBox = function(boxId) {
  $(boxId).fadeOut().fadeIn();
}

$(function() {
  $(".box").on("click", function(event) {
    var boxId = "#"+event.target.id;
    flashBox(boxId);
  });
});
