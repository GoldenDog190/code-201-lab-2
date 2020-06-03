'use strict'

/*
User Stories: As a programmer, I want to greet the user and ask them questions about myself, so that they can know that I am a friendly person and they can know a little bit about me. Finally, I want to tell them goodbye.

Feature Tasks:
Greetings to user

Questions: about Amelia, and how they will be answered

Has Amelia studied Japanese?
if they are right
  yes, she has
else
 prompt try again

Does Amelia live in WA?
if they are right 
  Yes, she lives in WA
else 
prompt wrong

Has Amelia lived in Japan?
if they are right
  yes, she has lived in Japan
else
prompt She hasn't just lived in the U.S.

Does Amelia love animals?
if they are right
 of course she does
else
prompt who doesn't love animals

Has Amelia volunteered before?
if they are right 
  yes she has
else
prompt everyone should volunteer at least once

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

//======Final Message========
var userName = prompt('What\'s your name?');
  /*console.log('Have a nice day!' + userName);*/
  alert('Have a nice day! ' + userName);