function goto(link, bool) {
    if(bool == true){
        window.open(link, "_self")
    }
    else{
        window.open(link, "_blank")
    }
}

function choose(choices) {
    var index = Math.floor(Math.random() * choices.length);
    return choices[index];
  }

function random_splash() {

    var splashes = ["programmo da quando ho 12 anni", "mi sono approciato con l'informatica tramite i file .bat", "il mio primo vero linguaggio è stato ruby", "il mio primo script pubblico e funzionante è stato jspam", "ho creato uno script in python che tiene premuto il tasto sinitro solo perchè mi serviva su minecraft", "la prima volta che mi sono approciato con java ho scritto un Hello World in 50 minuti"]

    let splash = choose(splashes);

    document.getElementById("splash").innerHTML = '"' + splash + '"';

    console.log(splash);
}