'use strict'
//Question 1
var languageStudy = prompt('Has Amelia studied Japanese?');
var languageStudyLowerCase = languageStudy.toLowerCase();

if(languageStudy ==='yes' && languageStudy ==='y' || languageStudy ==='no' && languageStudy ==='n'){
//   /*console.log('Yes, she has.');*/
   alert('Yes, she has.');
   } else {
//  /*console.log('Try again');*/
   alert('Try Again!');
   }

//========Question 2=================
var liveWa = prompt('Does Amelia live in WA?');
var liveWaLowerCase = liveWa.toLowerCase();

if(liveWa ==='yes' && liveWa === 'y'|| liveWa ==='no' && liveWa === 'n'){
//   /*console.log('Yes, she lives in WA.');*/
 alert('Yes, she lives in WA.');
  } else {
//  /*console.log('You are wrong, try again');*/
alert('You are wrong, try again');
   }

// //==========Question 3===============
var liveJapan = prompt('Has Amelia lived in Japan');
var liveJapanLowerCase = liveJapan.toLowerCase();

if(liveJapan ==='yes' && liveJapan === 'y' || liveJapan ==='no' && liveJapan === 'n'){
//   /*console.log('Yes, she has lived in Tokyo, Japan.');*/
alert('Yes, she has lived in Tokyo, Japan.');
   } else {
//  /*console.log('She hasn\'t just lived in the United States.');*/
alert('She hasn\'t just lived in the United States');
   }

// //=========Question 4============
 var loveAnimals = prompt('Does Amelia love animals?');
 var loveAnimalsLowerCase = loveAnimals.toLowerCase();

if(loveAnimals ==='yes' && loveAnimals ==='y' || loveAnimals === 'no' && loveAnimals === 'n'){
//   /*console.log('Yes, of course she does.');*/
  alert('Yes, of course she does.');
  } else {
// /*console.log('Who doesn\'t love animals?');*/
  alert('Sorry, that is incoreect.');
   }

// //=========Question 5============
var haveVolunteered = prompt('Has Amelia volunteered before?');
var haveVolunteeredLowerCase = haveVolunteered.toLowerCase();

if(haveVolunteered ==='yes' && haveVolunteered ==='y' || haveVolunteered ==='no' && haveVolunteered ==='n'){
//   /*console.log('Yes, at a animal shelter and at church.');*/
alert('Yes, at a animal shelter and at church.');
} else {
//   /*console.log('Its good to volunteer.');*/
alert('Its good to volunteer.');
     }

//==========Question 6==============

var ameliaAge = '28';
var counter = 0;
while(counter < 4){
   var chancesGuess = prompt('Guess my age?');
   console.log('chances guess', typeof chancesGuess);
   if(chancesGuess === ameliaAge){
     alert('You are correct. Amelia is 28 years old.');
     break;
   } else if (chancesGuess > ameliaAge){
    alert('You are too low');
    counter++;
   } else if (chancesGuess < ameliaAge){
    alert('You are too high');
    counter++;
    } else{
      alert('You are correct');
      counter++;
    }
 }
// //=========Question 7=============
var counter = 0;
place: while(counter < 6){
  var japanPlace, jLen;
  japanPlace = ['Tokyo','Kyoto','Nara','Osaka','Sapporo','Kamakura'];
  jLen = japanPlace.length;
  
  for(var i = 0; i < jLen; i++) {
  var answerGuess = prompt('Guess which places I have been to?');
  //alert(japanPlace[i]);
  if(answerGuess === japanPlace[i]){
  alert(japanPlace[i] + 'is correct.')
  break place;
  } else {
  alert ('Guess Again');
         }
  }
}

//====Score===
var haveScored = prompt('Did you get all the answers right?');
var haveScoredLowerCase = haveScored.toLowerCase();

if(haveScored ==='yes' || haveScored ==='no'){
  alert('Good job! 7 out of 7!');
  } else {
  alert('Too bad!.');
       }

// //======Final Message========
var userName = prompt('What\'s your name?');
//   /*console.log('Have a nice day!' + userName);*/
 alert('Have a nice day! ' + userName);
