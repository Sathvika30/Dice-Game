var randomNumber1=Math.floor((Math.random()*6))+1;
var randomImage1="images/dice"+randomNumber1+".png";
var image1=document.querySelector(".img1").setAttribute("src",randomImage1);


var randomNumber2=Math.floor((Math.random()*6))+1;
var randomImage2="images/dice"+randomNumber2+".png";
var image2=document.querySelector(".img2").setAttribute("src",randomImage2);


if(randomNumber1===randomNumber2)
{
  document.querySelector("h1").innerHTML = "🎁DRAW🎁"
}
else if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML = "🎁Player 1 WINS!!"
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector("h1").innerHTML = "Player 2 WINS!!🎁"
}
