// מכניסים את הנתיב של השמע לתוך משתנים 
const GreenSound =new Audio('./sounds/green.mp3');
const RedSound = new Audio('./sounds/red.mp3');
const YellowSound = new Audio('./sounds/yellow.mp3');
const BlueSound = new Audio('./sounds/blue.mp3');
const WrongSound = new Audio('./sounds/wrong.mp3');
const heading = document.querySelector('h2');

let buttonColours = ["Green", "Red", "Blue", "Yellow"];
let gamePattern = [];
let user_arry = [];
let game_on = false;
let level = 0;



$(document).keydown(function(event) {
    if (event.keyCode === 13 && !game_on) { // 13 הוא קוד המקש של ENTER
        game_on = true;
        startgame();
    }
});


function startgame(){
    level ++;
    $("h2").text("Level " + level);
    const randomNumber = Math.floor(Math.random() * 4 );
    switch(randomNumber){

        case 0:
        GreenSound.play()
        $("#bGreen").fadeOut(100).fadeIn(100);
        gamePattern.push("Green");
        break;

        case 1:
        RedSound.play()
        $("#bRed").fadeOut(100).fadeIn(100);
        gamePattern.push("Red");
        break;

        case 2:
        BlueSound.play()
        $("#bBlue").fadeOut(100).fadeIn(100);
        gamePattern.push("Blue");
        break;

        case 3:
        YellowSound.play()
        $("#bYellow").fadeOut(100).fadeIn(100);
        gamePattern.push("Yellow");
        break;
    }
    console.log("gamePattren: " + gamePattern);
}

$(".Color button").click(function() {
    let buttonId = $(this).attr("id");
    console.log(buttonId);
    switch(buttonId){

        case "bGreen":
        GreenSound.play()
        $("#bGreen").fadeOut(100).fadeIn(100);
        user_arry.push("Green");
        break;

        case "bRed":
        RedSound.play()
        $("#bRed").fadeOut(100).fadeIn(100);
        user_arry.push("Red");
        break;

        case "bBlue":
        BlueSound.play()
        $("#bBlue").fadeOut(100).fadeIn(100);
        user_arry.push("Blue");
        break;

        case "bYellow":
        YellowSound.play()
        $("#bYellow").fadeOut(100).fadeIn(100);
        user_arry.push("Yellow");
        break;
    }
    console.log("user arry after that user pick button [" + user_arry +"]");
    console.log("user_arry length after that user pick button " + user_arry.length);
    if(user_arry.length == gamePattern.length){
        console.log("user_arry.length == gamePattern.length");
    CheckAnswer();
    }
});

function CheckAnswer(){
    let check = true ;
    for(let i = 0; i<= user_arry.length; i++)
    {
        if(user_arry[i] !== gamePattern[i]){
            check = false;  
        }
    }
    if (check){
        user_arry = [];
        setTimeout(function() {
            startgame();  // מתחילים סיבוב חדש
        }, 1000);
    }
    else{
        user_arry = [];
        gamePattern = [];
        level = 0;
        WrongSound.play();
        $("h2").text("To restart press Enter.")
        game_on = false;
            
        };
    }
    


