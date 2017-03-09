$(document).ready(function() {
  // Get the modal
  var modal = document.getElementById('myModal');
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var imgOne = document.getElementById('app-img-one');
  var imgTwo = document.getElementById('app-img-two');
  var imgThree = document.getElementById('app-img-three');
  var imgFour = document.getElementById('app-img-four');
  var imgFive = document.getElementById('app-img-five');
  var imgSix = document.getElementById('app-img-six');

  var modalImg = document.getElementById("img01");

  imgOne.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
  }
  imgTwo.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
  }
  imgThree.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
  }
  imgFour.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
  }
  imgFive.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
  }
  imgSix.onclick = function() {
      modal.style.display = "block";
      modalImg.src = this.src;
  }
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
})
