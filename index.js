let sound = speechSynthesis;
sound.cancel();


document.querySelector("#play").addEventListener("click",function(){
    const s = document.querySelector("#tx").value;
    if(s!=""){

    let language = document.querySelector("select").value;
    let vol = document.querySelector("#Volume").value;
    let Pitch = document.querySelector("#Pitch").value;
    
    if(language== "English")
    language = "en-US";
    else language = "hi-IN";

    const utterThis = new SpeechSynthesisUtterance(s);
    utterThis.lang=language;
    utterThis.volume=vol;
    utterThis.pitch = Pitch;
    console.log(utterThis);
    sound.speak(utterThis);

    utterThis.addEventListener("end",function(){
        closeall();
    });
    
    document.querySelector("#play").style.display="none"
    document.querySelector(".btn-secondary").style.display="block";
    document.querySelector(".btn-warning").style.display="block";
    document.querySelector("#tx").disabled=true;
    document.querySelector("#Pitch").disabled=true;
    document.querySelector("#Volume").disabled=true;
    }
});

document.querySelector(".btn-secondary").addEventListener("click",function(){
    if(document.querySelector(".btn-secondary").innerHTML=="Pause")
    {
        sound.pause();
        document.querySelector(".btn-secondary").innerHTML="Resume";
    }
    else{
        sound.resume();
        document.querySelector(".btn-secondary").innerHTML="Pause";
    }
});

document.querySelector("#cancel").addEventListener("click",function(){
    closeall();
});

function closeall(){
    document.querySelector("#tx").value="";
    document.querySelector("#tx").disabled=false;
    sound.cancel();
    document.querySelector("#play").style.display="block"
    document.querySelector(".btn-secondary").style.display="none";
    document.querySelector(".btn-warning").style.display="none";
    document.querySelector("#Pitch").disabled=false;
    document.querySelector("#Volume").disabled=false;
};

