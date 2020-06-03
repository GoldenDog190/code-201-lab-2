'use strict';

/*
User Stories: As a programmer, I want to greet the user and ask them questions about myself, so that they can know that I am a friendly person and they can know a little bit about me. Finally, I want to tell them goodbye.

Feature Tasks:
Greetings to user

Questions: about Amelia, and how they will be answered

#1
Has Amelia studied Japanese?
if they are right
  yes, she has
else
 prompt try again

 #2
Does Amelia live in WA?
if they are right 
  Yes, she lives in WA
else 
prompt wrong

#3
Has Amelia lived in Japan?
if they are right
  yes, she has lived in Japan
else
prompt She hasn't just lived in the U.S.

#4
Does Amelia love animals?
if they are right
 of course she does
else
prompt who doesn't love animals

#5
Has Amelia volunteered before?
if they are right 
  yes she has
else
prompt everyone should volunteer at least once

#6
How old is Amelia?
Using a for loop give 4 chances, and give correct answer at the end.

#7
What are the top sites to see in Japan?
Use a loop and an array to guess 6 attempts. Display possible correct answers to user at the end.


Changed all the prompts to alerts.

Final message to user
*/

//=============Greeting===============
var userGreeting = prompt('Hello, and Welcome to this website!').toLowerCase();
/*console.log('Have a nice day!' + userGreeting);*/
alert('Have a nice day!' + userGreeting);

//==============Question 1============
var languageStudy = prompt('Has Amelia studied Japanese?');
var languageStudyLowerCase = languageStudy.toLowerCase();

if(languageStudy ==='yes' || languageStudy ==='no'){
  /*console.log('Yes, she has.');*/
  alert('Yes, she has.');
} else {
/*console.log('Try again');*/
  alert('Try Again!');
}

//========Question 2=================
var liveWa = prompt('Does Amelia live in WA?');
var liveWaLowerCase = liveWa.toLowerCase();

if(liveWa ==='yes' || liveWa ==='no'){
  /*console.log('Yes, she lives in WA.');*/
  alert('Yes, she lives in WA.');
} else {
 /*console.log('You are wrong, try again');*/
  alert('You are wrong, try again');
}

//==========Question 3===============
var liveJapan = prompt('Has Amelia lived in Japan');
var liveJapanLowerCase = liveJapan.toLowerCase();

if(liveJapan ==='yes' || liveJapan ==='no'){
  /*console.log('Yes, she has lived in Tokyo, Japan.');*/
  alert('Yes, she has lived in Tokyo, Japan.');
} else {
 /*console.log('She hasn\'t just lived in the United States.');*/
  alert('She hasn\'t just lived in the United States');
}

//=========Question 4============
var loveAnimals = prompt('Does Amelia love animals?');
var loveAnimalsLowerCase = loveAnimals.toLowerCase();

if(loveAnimals ==='yes' || loveAnimals ==='no'){
  /*console.log('Yes, of course she does.');*/
  alert('Yes, of course she does.');
} else {
/*console.log('Who doesn\'t love animals?');*/
  alert('Who doesn\'t love animals?');
}

//=========Question 5============
var haveVolunteered = prompt('Has Amelia volunteered before?');
var haveVolunteeredLowerCase = haveVolunteered.toLowerCase();

if(haveVolunteered ==='yes' || haveVolunteered ==='no'){
  /*console.log('Yes, at a animal shelter and at church.');*/
  alert('Yes, at a animal shelter and at church.');
} else {
  /*console.log('Its good to volunteer.');*/
  alert('Its good to volunteer.');
}

//==========Question 6==============

var ameliaAge = '28';
var chancesGuess = 4;
var numberGame = prompt('What is Amelia\'s age?');
for(var i =24; i < chancesGuess; i++){
  var chancesGuess = prompt('Guess my age?')
  if(numberGame === ameliaAge){
    alert('You are correct. Amelia is 28 years old.');
  } else {
    alert('Try Again');
  }
}
//=========Question 7=============
var firstPlace = ['Tokyo','Kyoto','Nara','Osaka','Sapporo','Kamakura'];

for(var index = 0; index < 6; index++){
  if(firstPlace[index]=== 'Tokyo'){
    alert(firstPlace[index] + ' is a anmazing place to go visit!');
}

for(var i = 0; i < firstPlace.length; itt){
  alert(firstPlace[i]);
}


//======Final Message========
var userName = prompt('What\'s your name?');
  /*console.log('Have a nice day!' + userName);*/
 alert('Have a nice day! ' + userName);