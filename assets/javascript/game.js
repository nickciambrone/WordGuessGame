var letterOptions = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var correctLetter
for(i=0; i<letterOptions.length;i++){
    correctLetter=letterOptions[Math.floor(Math.random()*26)]
}
console.log(correctLetter)
var guessesLeft=10;
var guessesSoFar=[]
var wins=0
var losses=0
document.onkeydown=function(event){
    guessesLeft--
    if (guessesLeft<-1){
    return}
    console.log(guessesLeft)
    document.getElementById("guessesLeft").innerHTML=guessesLeft
    event=event.key
    guessesSoFar.push(event)
    document.getElementById("guessesSoFar").innerHTML=guessesSoFar
    if (guessesSoFar.indexOf(correctLetter)!=-1){
        wins++
        document.getElementById("wins").innerHTML=wins
        guessesSoFar=[]
        alert("you won! the letter was "+correctLetter)
        correctLetter=letterOptions[Math.floor(Math.random()*26)]
        console.log(correctLetter)
        guessesLeft=10
        document.getElementById("guessesLeft").innerHTML=guessesLeft
        
       
    
    }
    if(guessesLeft==0){
        guessesSoFar=[]
        losses++
        document.getElementById("losses").innerHTML=losses
        alert("you lose! the letter was "+correctLetter)
        correctLetter=letterOptions[Math.floor(Math.random()*26)]
        console.log(correctLetter)
        guessesLeft=10
        
    }
}
