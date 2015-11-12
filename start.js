function start() {
    var naam = prompt("Wat is uw naam?");
    if (naam == "") {
        start();
    }
    if (naam == null) {
        start();
    }
    var modem = prompt("Wat is het merk en type van uw modem?");

    var date = new Date();
    var day = date.getDate();
    var mo = date.getMonth() + 1;
    var y = date.getFullYear();

    if (day <9) {
        day = "0"+day;
    }
    if (mo <9) {
        mo = "0"+mo;
    }

    document.getElementById('msg').innerHTML="De klant "+ naam + " heeft gebeld op: "+ day +"/" + mo +"/"+y;
    document.getElementById('msg2').innerHTML="Modem van klant: "+ modem +".";
}
