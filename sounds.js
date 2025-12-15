function play()
{
    mySound = new sound("Assets/timer-clock-ticking-313948.mp3");
    mySound.play();
}
//helper function internal - this code will never change
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    {this.sound.play();}
    
}

function stop()
{
    window.location.reload();
    
}