function rollingShowImg()
{
  var randomNumber1 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber2 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber3 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber4 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber5 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber6 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber7 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber8 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber9 = Math.floor(Math.random()* 8)+ 1;

      document.querySelector(".img1").setAttribute("src" + randomNumber1 + ".png");
      document.querySelector(".img2").setAttribute("src" + randomNumber2 + ".png");
      document.querySelector(".img3").setAttribute("src" + randomNumber1 + ".png");
      document.querySelector(".img4").setAttribute("src" + randomNumber2 + ".png");
      document.querySelector(".img5").setAttribute("src" + randomNumber1 + ".png");
      document.querySelector(".img6").setAttribute("src" + randomNumber2 + ".png");
      document.querySelector(".img7").setAttribute("src" + randomNumber1 + ".png");
      document.querySelector(".img8").setAttribute("src" + randomNumber2 + ".png");
      document.querySelector(".img9").setAttribute("src" + randomNumber2 + ".png");

}
function rollingHideImg()
{
  var randomNumber1 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber2 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber3 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber4 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber5 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber6 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber7 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber8 = Math.floor(Math.random()* 8)+ 1;
  var randomNumber9 = Math.floor(Math.random()* 8)+ 1;

      document.querySelector(".img1").setAttribute("src" + randomNumber1 + ".png").classList("invisible");
      document.querySelector(".img2").setAttribute("src" + randomNumber2 + ".png").classList("invisible");
      document.querySelector(".img3").setAttribute("src" + randomNumber1 + ".png").classList("invisible");
      document.querySelector(".img4").setAttribute("src" + randomNumber2 + ".png").classList("invisible");
      document.querySelector(".img5").setAttribute("src" + randomNumber1 + ".png").classList("invisible");
      document.querySelector(".img6").setAttribute("src" + randomNumber2 + ".png").classList("invisible");
      document.querySelector(".img7").setAttribute("src" + randomNumber1 + ".png").classList("invisible");
      document.querySelector(".img8").setAttribute("src" + randomNumber2 + ".png").classList("invisible");
      document.querySelector(".img9").setAttribute("src" + randomNumber2 + ".png").classList("invisible");

    document.querySelector("img").classList("invisible");

}
