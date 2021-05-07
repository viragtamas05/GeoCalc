function szamolA() {
    var alapteruletA = parseInt(document.getElementById("alapTA").value);
    var palastterulet = parseInt(document.getElementById("palástTA").value);
    
    var felszin = alapteruletA + palastterulet;
    document.getElementById("eredmenyF").value = felszin + " cm2";
    
}

function szamolV() {
    var alapteruletV = parseInt(document.getElementById("alapTV").value);
    var magassag = parseInt(document.getElementById("gulaMV").value);
    
    var terfogat = alapteruletV * magassag / 3;
    document.getElementById("eredmenyT").value = terfogat + " cm3";

}