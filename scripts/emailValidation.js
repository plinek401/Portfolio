function ValidateEmail() 
{
    let email = document.getElementById('email').value;
    console.log(email);
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
    {
        return (true);
    }
    showPopup();
    setTimeout(showPopup, 4000);
    return (false);
}

function showPopup(){
    let popup = document.getElementsByClassName('warn');

    for(let i = 0; i < popup.length; i++){
        
        if(popup[i].style.display == "block"){
            popup[i].style.display = "none";
        }
        else{
            popup[i].style.display = "block";
        }
    }
}