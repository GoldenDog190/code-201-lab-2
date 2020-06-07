'use strict';

//=====Greeting to User=====
function helloTo() {
  var userGreeting = prompt ('What is your name?');
   alert('Hello ' + userGreeting + ', welcome to my web page!')
   return userGreeting;
  }
  
  helloTo();

//=========Question 1============

function jsLanguage() {
  var languageStudy = prompt('Has Amelia studied Japanese?').toLowerCase();

  if(languageStudy ==='yes' || languageStudy ==='y'){
    
    alert('Yes, she has.');
  } else if (languageStudy ==='no' || languageStudy ==='n'){
    
    alert('Wrong!');
  }
}

jsLanguage();

//========Question 2=================

function northWest() {
  var liveWa = prompt('Does Amelia live in WA?').toLowerCase();

  if(liveWa ==='yes' || liveWa === 'y'){
    
    alert('Yes, she lives in WA.');
  } else if (liveWa ==='no' || liveWa === 'n'){
    
    alert('You are wrong.');
  }
}

northWest();

// //==========Question 3===============

function japanAbroad() {
  var liveJapan = prompt('Has Amelia lived in Japan').toLowerCase();

  if(liveJapan ==='yes' || liveJapan === 'y'){
    
    alert('Yes, she has lived in Tokyo, Japan.');
  } else if (liveJapan ==='no' || liveJapan === 'n') {
    
    alert('She hasn\'t just lived in the United States');
  }
}

japanAbroad();

// // //=========Question 4============

function catDog() {
  var loveAnimals = prompt('Does Amelia love animals?').toLowerCase();

  if(loveAnimals ==='yes' || loveAnimals ==='y'){
    
    alert('Yes, of course she does.');
  } else if (loveAnimals === 'no' || loveAnimals === 'n'){
    
    alert('Sorry, that is incoreect.');
  }
}

catDog();

// // //=========Question 5============

function animalVol() {
  var haveVolunteered = prompt('Has Amelia volunteered before?').toLowerCase();

  if(haveVolunteered ==='yes' || haveVolunteered ==='y'){
    
    alert('Yes, at a animal shelter and at church.');
  } else if (haveVolunteered ==='no' || haveVolunteered ==='n') {
   
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

// ================Question 7===========
function placesTraveled() {

  var counter = 0;
  
  while(counter < 5){
    var japanPlace, jLen;
    japanPlace = ['tokyo','kyoto','nara','osaka','kumamoto','kamakura'];
    jLen = japanPlace.length;
    var answerGuess = prompt('Guess what cities I have been to in Japan?');
    for(var i = 0; i < jLen; i++) { 
      if(answerGuess === japanPlace[i]){
        alert(japanPlace[i] + ' is correct.')
        alert('You answered correctly' + 'These are all the ' + japanPlace + ", I have been in Japan.");
        return;

      } else {
        
      }
      alert ('I have been there before.');
    }
  }
  
  

}

placesTraveled();

//====Score ===
function scoreNum() {

  var correctAns = '7';
  var counter = 0;
  while(counter < 5){
    var numberGuess = prompt('How many quesions did you answer correctly?');
    console.log('chances guess', typeof numberGuess);
    if(numberGuess === correctAns){
      alert('Good job! You guessed all of the answers correctly');
      break;
    } else if (numberGuess < correctAns){
      alert('Too bad you didn\'t get them all correct.');
      counter++;
    }
  }
}

scoreNum();

//=====Final Goodbye to User=====
function goodByeTo() {
  var userName = prompt ('What is your name?');
   alert('Hello ' + userName + ', thanks for playing my game!')
   return userName;
  }
  
  goodByeTo();
  