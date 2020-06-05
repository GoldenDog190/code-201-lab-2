'use strict';
//Question 1

function jsLanguage() {
  var languageStudy = prompt('Has Amelia studied Japanese?').toLowerCase();

  if(languageStudy ==='yes' || languageStudy ==='y'){
    //   /*console.log('Yes, she has.');*/
    alert('Yes, she has.');
  } else if (languageStudy ==='no' || languageStudy ==='n'){
    //  /*console.log('Try again');*/
    alert('Wrong!');
  }
}

jsLanguage();

//========Question 2=================

function northWest() {
  var liveWa = prompt('Does Amelia live in WA?').toLowerCase();

  if(liveWa ==='yes' || liveWa === 'y'){
    //   /*console.log('Yes, she lives in WA.');*/
    alert('Yes, she lives in WA.');
  } else if (liveWa ==='no' || liveWa === 'n'){
    //  /*console.log('You are wrong, try again');*/
    alert('You are wrong.');
  }
}

northWest();

// //==========Question 3===============

function japanAbroad() {
  var liveJapan = prompt('Has Amelia lived in Japan').toLowerCase();

  if(liveJapan ==='yes' || liveJapan === 'y'){
    //   /*console.log('Yes, she has lived in Tokyo, Japan.');*/
    alert('Yes, she has lived in Tokyo, Japan.');
  } else if (liveJapan ==='no' || liveJapan === 'n') {
    //  /*console.log('She hasn\'t just lived in the United States.');*/
    alert('She hasn\'t just lived in the United States');
  }
}

japanAbroad();

// // //=========Question 4============

function catDog() {
  var loveAnimals = prompt('Does Amelia love animals?').toLowerCase();

  if(loveAnimals ==='yes' || loveAnimals ==='y'){
    //   /*console.log('Yes, of course she does.');*/
    alert('Yes, of course she does.');
  } else if (loveAnimals === 'no' || loveAnimals === 'n'){
    // /*console.log('Who doesn\'t love animals?');*/
    alert('Sorry, that is incoreect.');
  }
}

catDog();

// // //=========Question 5============

function animalVol() {
  var haveVolunteered = prompt('Has Amelia volunteered before?').toLowerCase();

  if(haveVolunteered ==='yes' || haveVolunteered ==='y'){
    //   /*console.log('Yes, at a animal shelter and at church.');*/
    alert('Yes, at a animal shelter and at church.');
  } else if (haveVolunteered ==='no' || haveVolunteered ==='n') {
    //   /*console.log('Its good to volunteer.');*/
    alert('Its good to volunteer.');
  }
}

animalVol();

// //==========Question 6==============

function twentyEight() {

  var ameliaAge = '28';
  var counter = 0;
  while(counter < 4){
    var chancesGuess = prompt('Guess my age?');
    console.log('chances guess', typeof chancesGuess);
    if(chancesGuess === ameliaAge){
      alert('You are correct. Amelia is 28 years old.');
      break;
    } else if (chancesGuess < ameliaAge){
      alert('You are too low');
      counter++;
    } else if (chancesGuess > ameliaAge){
      alert('You are too high');
      counter++;
    } else{
      alert('You are correct');
      counter++;
    }
  }
}

twentyEight();

// // //=========Question 7=============
function placesTraveled() {
  var japanArray = ['tokyo', 'kyoto', 'nara', 'osaka', 'mt. fuji','kamakura'];

  for (var i = 0; i < 7; i++){
    var japans = propmpt('What cities do you think Amelia has been to?').toLowerCase(); 
    if(japans === japanArray[0] || japans === japanArray[1] || japans === japanArray[2] || japans === japanArray[3] || japans === japanArray[4] || japans === japanArray[5] || japans === japanArray[6]){
      console.log('yes');
      score++;
      alert('correct');
    } else {
      console.log('no');
      alert('wrong');
    }
  }
}
placesTraveled();
alert('You answered' + score + 'correcty.');
alert('Good job!');

// Other question 7 
// function placesTraveled() {

//   var counter = 0;
//   place: while(counter < 6){
//     var japanPlace, jLen;
//     japanPlace = ['Tokyo','Kyoto','Nara','Osaka','Sapporo','Kamakura'];
//     jLen = japanPlace.length;
//     for(var i = 0; i < jLen; i++) {
//       var answerGuess = prompt('Guess which places I have been to?');
//       //alert(japanPlace[i]);
//       if(answerGuess === japanPlace[i]){
//         alert(japanPlace[i] + 'is correct.')
//         break place;
//       } else {
//         alert ('Guess Again');
//       }
//     }
//   }
  
//   alert('You answered correctly' + 'These are all the places I have been to' + japanPlace + ' in Japan.');

// }

//placesTraveled();

//====Score===

function answerNow(){
 var questionsArray = ['question 1','question 2','question 3','question 4','question 5','question 6','question 7'];

for (var i = 0; i , 7; i++){
  var questions = prompt('Which questions did you answer correctly?').toLowerCase();
  if(questions === questionsArray[0] || questions === questionsArray[1] || questions === questionsArray[2] || questions === questionsArray[3] || questions === questionsArray[4] || questions === questionsArray[5] || questions === questionsArray[6]){
   console.log('yes');
   score++;
   alert('Correct');
  } else {
    console.log('no');
    alert('Wrong!');
  }
}
}
answerNow();
alert('You answered' + score + 'correctly');

// //======Final Message========
var userName = prompt('What\'s your name?').toLowerCase();
//   /*console.log('Have a nice day!' + userName);*/
 alert('Have a nice day! ' + userName + '!');