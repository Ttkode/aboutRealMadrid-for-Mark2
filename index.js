var readlineSync = require('readline-sync')

function welcome()
{  
console.log("Welcome to the Real Madrid Quiz")
console.log(".......................")

var userName = readlineSync.question('Hola Blanco, Como estas? Whats you name? ');
console.log('Bien ' + userName + ' ,now lets begin!!');
console.log("........................")
}


var score = 0
var highScore = [
  {
    name: "Thameem",
    score: 5
  },
  {
    name: "Anas",
    score: 4
  }
]

var right ="Hala Madrid"
var wrong ="No you dont know about Los Blancos"

function madrid(question, answer)
  { var ans = readlineSync.question(question)

   // answer check and score update
  if  (ans === answer) {
    console.log(right)
    score = score + 1
    console.log("UCL points: ", score)
    console.log("............................") 
    
  } else {
    console.log(wrong)
    console.log("UCL Points: ", score)
    console.log("..............................")
    
  }
  }

var roundOne = [{
  question: "How Many UCL tropies for Real Madrid ",
  answer: "14"
  }, {
  question: "Who is the president of Real Madrid ",
  answer: "Santiago Bernabeu"
   } , {
question: "Who is the manager of RM Castilla ",
  answer: "Raul"  
    } , {
 question: "Who was the captain of Real Madrid in 21/22 season ",
  answer: "Marcelo"
    }, {
 question: "Who is the manager of RM Juvenil A ",
  answer: "Arbeloa"
   }
 ] // array


function hereItIs()  
{
for (var i=0; i<roundOne.length; i++)
  { var roundNow = roundOne[i]
questys(roundNow.question, roundNow.answer)
  }  
}

function finalGoal()
   {
console.log(" Total UCL points: ", score, "/5")
highScore.map(score => console.log(score.name, " : ", score.score))
console.log("If you scored 5, inform me via mail or socials, i will update it here")
  
console.log("Thank you for playing this game")

}

welcome()
hereItIs()
finalGoal()