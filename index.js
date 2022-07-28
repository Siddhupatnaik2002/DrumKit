var btnList = document.querySelectorAll("button.btns");

for(var i=0;i<btnList.length;i++){
    btnList[i].addEventListener("click",
    function() {
        var Key=this.textContent;
        makeSound(Key);
        buttonAnimation(Key);
    }
    );//anonymus function.
}

document.addEventListener("keypress",
function(event) {
    makeSound(event.key);
    buttonAnimation(event.key);
});

function makeSound(currentKey){
    if(currentKey==='w'){
        var music = new Audio("sounds/crash.mp3");
        music.play();
    }else if(currentKey==='a'){
        var music = new Audio("sounds/kick-bass.mp3");
        music.play();
    }else if(currentKey==='s'){
        var music = new Audio("sounds/snare.mp3");
        music.play();
    }else if(currentKey==='d'){
        var music = new Audio("sounds/tom-1.mp3");
        music.play();
    }else if(currentKey==='j'){
        var music = new Audio("sounds/tom-2.mp3");
        music.play();
    }else if(currentKey==='k'){
        var music = new Audio("sounds/tom-3.mp3");
        music.play();
    }else if(currentKey==='l'){
        var music = new Audio("sounds/tom-4.mp3");
        music.play();
    }
}


function buttonAnimation(key){
    var buttonPressed = document.querySelector("."+key);
    buttonPressed.classList.add("pressed");
    setTimeout(function (buttonPressed){
        buttonPressed.classList.remove("pressed");
    },100);
}






//bt1 crash
//bt2 kick
//bt3 snare
//b4 tom-1
//b5 tom-2
// b6 tom-3
//b7 tom-4