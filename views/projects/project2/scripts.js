//When the window loads it will call the anonymous arrow function that will select all elements of class sound and divs in .pads
window.addEventListener('load', () => {
    const sounds = document.querySelectorAll(".sound");
    const pads = document.querySelectorAll(".pads div");
    const visual = document.querySelector('.visual');
    const colors = [
        "#60d394",
        "antiquewhite",
        "blueviolet",
        "deeppink",
        "firebrick",
        "#aacc11"
    ];
    
    
    //Here we are adding an event listener to each pad while using normal function notation so that we can access each pad individually with the "this" keyword.
    pads.forEach((pad,index) =>{
        pad.addEventListener('click', function(){
            sounds[index].currentTime = 0;
            sounds[index].volume = 0.8;
            sounds[index].play();
            
            createBalls(index);
        });
    });
    
    //Create a visuals for music.
    const createBalls = index =>{
        const bubble = document.createElement("div");
        // this adds a new element to the parent element.
        visual.appendChild(bubble); 
        bubble.style.backgroundColor = colors[index];
        bubble.style.animation = 'jump 1s ease';
        bubble.addEventListener('animationend', function(){
            visual.removeChild(this);
        });
        
    }
});