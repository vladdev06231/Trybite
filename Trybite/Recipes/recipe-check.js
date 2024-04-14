const likeIcon = document.getElementsByClassName("likeIcon");
const dislikeIcon = document.getElementsByClassName("dislikeIcon");

const likeBtn = document.getElementsByClassName("likeBtn");
const dislikeBtn = document.getElementsByClassName("dislikeBtn");

function addClass() {
  var likeBtn = document.getElementsByClassName("likeBtn")[0];
  return (likeBtn[0].className += " test123");
}
