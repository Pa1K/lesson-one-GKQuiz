// ex13: put a list of questions together

// var questionOne = {
//   question: "Who is my favorite superhero?",
//   answer: "Shiva"
// };

// var questionTwo = {
//   question: "Which is my favorite sad song?",
//   answer: "nee pransa ki evaru badulu"
// };
var readlineSync = require('readline-sync');

var userName = readlineSync.question("what's your name?");


var questionList = [
{q:"Bellary is in which state?", a:"karnataka"},
{q:"Andhra Pradesh Capital?", a:"amaravati"},
{q:"Number of times KXIP won IPL?",a:"0"},
];

var questionList2 = [
  {q:"What is always coming, but never arrives?", a:"Tomorrow"},
  {q:"What is in middle of Italy?",a:"a"},
  {q:"What does come down but never goes up?",a:"rain"}
]
var score = 0;
function quiz(question,answer){
 if(readlineSync.question(question).toUpperCase() === answer.toUpperCase() ){
   console.log("Right Answer...")
    ++score;
 }
 else{
   console.log("oops.. wrong answer");
 }

}

for(var i=0;i<questionList.length;i++){
  quiz(questionList[i].q,questionList[i].a);
}





if(score<3){
  console.log("score 3 out of 3 to reach level2");
  finalScore(score);
}
else{
  console.log("yahoo ... you progressed to level 2... FUNNY questions");
  for(var i=0;i<questionList2.length;i++){
  quiz(questionList2[i].q,questionList2[i].a);
}
finalScore(score);
}



function finalScore(){
  console.log("your score ::"+score);
}


//console.log(questionList);

// ex15: print the final score to the user

// var highscores=[0,1];
// if(highscores.length == 0){
//   highscores[0] = score;
//   console.log("highest scores are "+highscores);
// }
// else{
//   highscores[highscores.length] = score;
  
//   // to print max score 
//   //console.log(Math.max(...highscores));

//   // ascending order
//   //console.log(highscores.sort());

//   //descending order
//   console.log(highscores.sort(function(a,b){ return b-a }));
// }

var highscores=[{name:"pavan", score:"0"},
                {name:"chitti",score:"6"},
                {name:"hary",score:"1"}];
var nameObj={
  name: userName,
  score: score
}
if(highscores.length == 0){
  highscores[0] = nameObj;
  console.log("highest scores are "+highscores[0].name+"::"+highscores[0].score);
}
else{
  highscores[highscores.length] = nameObj;
  highscores.sort(function(a,b){return b.score-a.score });
}


console.log("highest score are-------");
for(var i=0;i<highscores.length;i++){
  console.log(highscores[i].name+"::"+highscores[i].score);
}

console.log("please, screenshot your score and send it to me ");