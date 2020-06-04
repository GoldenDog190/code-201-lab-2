'use strict'
//Question 1
var languageStudy = prompt('Has Amelia studied Japanese?');
var languageStudyLowerCase = languageStudy.toLowerCase();

if(languageStudy ==='yes' || languageStudy ==='y'){
//   /*console.log('Yes, she has.');*/
   alert('Yes, she has.');
   } else if (languageStudy ==='no' || languageStudy ==='n'){
//  /*console.log('Try again');*/
   alert('Try Again!');
   }

//========Question 2=================
var liveWa = prompt('Does Amelia live in WA?');
var liveWaLowerCase = liveWa.toLowerCase();

if(liveWa ==='yes' || liveWa === 'y'){
//   /*console.log('Yes, she lives in WA.');*/
 alert('Yes, she lives in WA.');
  } else if (liveWa ==='no' || liveWa === 'n'){
//  /*console.log('You are wrong, try again');*/
alert('You are wrong, try again');
   }

// //==========Question 3===============
var liveJapan = prompt('Has Amelia lived in Japan');
var liveJapanLowerCase = liveJapan.toLowerCase();

if(liveJapan ==='yes' || liveJapan === 'y'){
//   /*console.log('Yes, she has lived in Tokyo, Japan.');*/
alert('Yes, she has lived in Tokyo, Japan.');
   } else if (liveJapan ==='no' || liveJapan === 'n') {
//  /*console.log('She hasn\'t just lived in the United States.');*/
alert('She hasn\'t just lived in the United States');
   }

// //=========Question 4============
 var loveAnimals = prompt('Does Amelia love animals?');
 var loveAnimalsLowerCase = loveAnimals.toLowerCase();

if(loveAnimals ==='yes' || loveAnimals ==='y'){
//   /*console.log('Yes, of course she does.');*/
  alert('Yes, of course she does.');
  } else if (loveAnimals === 'no' || loveAnimals === 'n'){
// /*console.log('Who doesn\'t love animals?');*/
  alert('Sorry, that is incoreect.');
   }

// //=========Question 5============
var haveVolunteered = prompt('Has Amelia volunteered before?');
var haveVolunteeredLowerCase = haveVolunteered.toLowerCase();

if(haveVolunteered ==='yes' || haveVolunteered ==='y'){
//   /*console.log('Yes, at a animal shelter and at church.');*/
alert('Yes, at a animal shelter and at church.');
} else if (haveVolunteered ==='no' || haveVolunteered ==='n') {
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
var questionOne = '1 point';
var questionTwo = '2 points';
var questionThree = '3 points';
var questionFour = '4 points';
var questionFive = '5 points';
var questionSix = '6 points';
var questionSeven = '7 points';

//=====Score1======
var nowScoreOne = prompt('Did you get question 1 correct?');
var nowScoredOneLowerCase = nowScoredOne.toLowerCase();

if(nowScoredOne ==='yes' || nowScoreOne ==='y'){
  alert('You got ' + questionOne + '!');
  } else if (nowScoredOne ==='no' && nowScoreOne === 'n'){
  alert('0 points');
       }

//======Score2=====
var nowScoreTwo = prompt('Did you get question 2 correct?');
var nowScoredTwoLowerCase = nowScoredTwo.toLowerCase();
       
if(nowScoredTwo ==='yes' || nowScoreTwo ==='y'){
 alert('You got ' + questionTwo + '!');
} else if (nowScoredTwo ==='no' || nowScoreTwo === 'n'){
 alert('0 points');
     }

 //======Score3=====    
var nowScoreThree = prompt('Did you get question 3 correct?');
var nowScoredThreeLowerCase = nowScoredThree.toLowerCase();
            
if(nowScoredThree ==='yes' || nowScoreThree ==='y'){
alert('You got ' + questionThree + '!');
} else if (nowScoredThree ==='no' || nowScoreThree === 'n'){
alert('0 points');
    }

 //======Score4=====    
 var nowScoreFour = prompt('Did you get question 4 correct?');
 var nowScoredFourLowerCase = nowScoredFour.toLowerCase();
             
 if(nowScoredFour ==='yes' || nowScoreFour ==='y'){
 alert('You got ' + questionFour + '!');
 } else if (nowScoredFour ==='no' || nowScoreFour === 'n'){
 alert('0 points');
     }

 //======Score5=====    
 var nowScoreFive = prompt('Did you get question 5 correct?');
 var nowScoredFiveLowerCase = nowScoredFive.toLowerCase();
             
 if(nowScoredFive ==='yes' || nowScoreFive ==='y'){
 alert('You got ' + questionFive + '!');
 } else if(nowScoredFive ==='no' || nowScoreFive === 'n'){
 alert('0 points');
     }

 //======Score6=====    
 var nowScoreSix = prompt('Did you get question 6 correct?');
 var nowScoredSixLowerCase = nowScoredSix.toLowerCase();
             
 if(nowScoredSix ==='yes' || nowScoreSix ==='y'){
 alert('You got ' + questionSix + '!');
 } else if(nowScoredSix ==='no' || nowScoreSix === 'n') {
 alert('0 points');
     }

 //======Score7=====    
 var nowScoreSeven = prompt('Did you get most of question 7 correct?');
 var nowScoredSevenLowerCase = nowScoredSeven.toLowerCase();
             
 if(nowScoredSeven ==='yes' || nowScoreSeven ==='y'){
 alert('You got ' + questionSeven + '!');
 } else if (nowScoredSeven ==='no' || nowScoreSeven === 'n'){
 alert('0 points');
     }

 //======Final Score=====    
 var nowScoreFinal = prompt('Did you get all the answers correct?');
 var nowScoredFinalLowerCase = nowScoredFinal.toLowerCase();
             
 if(nowScoredFinal ==='yes' || nowScoreFinal ==='y'){
 alert('If you got all the questions correct ' + questionSeven + ' ! You have won!');
 } else if (nowScoredFinal ==='no' || nowScoreFinal === 'n'){
 alert('You have lost! You needed ' + questionSeven + ' to win.');
     }

// //======Final Message========
var userName = prompt('What\'s your name?');
//   /*console.log('Have a nice day!' + userName);*/
 alert('Have a nice day! ' + userName);
