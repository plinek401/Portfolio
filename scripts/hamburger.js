function ExpandNav(){
    let toggle = "navbar-toggled";
    let untoggle = "navbar";
    
    let navbar = document.getElementById("navbar");
    
    console.log(navbar);
    if(navbar.classList.contains(toggle)){
        navbar.classList.remove(toggle);
    }
    else{
        navbar.classList.add(toggle);
    }
}