$(document).ready(function() {

  let modal = document.getElementById('myModal');
  let imgSeven = document.getElementById('app-img-seven');
  let imgEight = document.getElementById('app-img-eight');
  let imgNine = document.getElementById('app-img-nine');
  let imgTen = document.getElementById('app-img-ten');
  let imgEleven = document.getElementById('app-img-eleven');
  let imgTwelve = document.getElementById('app-img-twelve');

  let modalImg = document.getElementById("img01");

  $(document).on("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
  });
  $(document).on("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
  });
  $(document).on("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
  });
  $(document).on("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
  });
  $(document).on("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
  });
  $(document).on("click", function() {
      modal.style.display = "block";
      modalImg.src = this.src;
  });

  var span = document.getElementsByClassName("close")[0];

  $(document).on("click", function() {
    modal.style.display = "none";
  });
});
