//Random Number
var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;

var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;

//---------changing image src with randomNumber1-----------
//-----------IMG 1---------
var randomImage1 = "images/dice"+ randomNumber1 +".png";
document.querySelector("img.img1").setAttribute("src", randomImage1);

//-----------IMG 2-----------
var randomImage2 = "images/dice"+ randomNumber2 +".png";
document.querySelector("img.img2").setAttribute("src", randomImage2);


//------------Heading changing code--------------
//Heading when 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML= "🚩Player 1 wins";
}    
//Heading when 2 wins
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML= "Player 2 wins🚩";
}    
else{
    document.querySelector("h1").innerHTML= "Draw";
}    


// ---------if else method----------
// var imgNo1= images/dice1.png
// var imgNo2= images/dice2.png
// var imgNo3= images/dice3.png
// var imgNo4= images/dice4.png
// var imgNo5= images/dice5.png
// var imgNo6= images/dice6.png

// if(randomNumber1==1){
//     document.querySelector("img1").setAttribute("src", imgNo1);
// }
// else if (randomNumber1==2){
//     document.querySelector("img1").setAttribute("src", imgNo2);
// }
// else if (randomNumber1==3){
//     document.querySelector("img1").setAttribute("src", imgNo3);
// }
// else if (randomNumber1==4){
//     document.querySelector("img1").setAttribute("src", imgNo4);
// }
// else if (randomNumber1==5){
//     document.querySelector("img1").setAttribute("src", imgNo5);
// }
// else{
//     document.querySelector("img1").setAttribute("src", imgNo6);
// }


