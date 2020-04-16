const texts= ["I am a Developer.", "I am Creative.", 
            "I Love Design."];
let count=0;
let index=0;
let nowText="";
let letter="";

(function type(){
    if (count===texts.length){
        count=0;
    }
    nowText = texts[count];
    letter = nowText.slice(0,++index);

    document.querySelector('.typing').textContent=letter;
    if(letter.length===nowText.length){
        count++;
        index=0;
    }
    setTimeout(type,225);

}());