function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}
recognition.oneresult = function(event){

    var content= event.results[0][0].transcript;
    document.getElementById("textbbox").innerHTML= Content;
}