function szamolA() {
    var aoldalA = parseInt(document.getElementById("aoldalA").value);
    var boldalA = parseInt(document.getElementById("boldalA").value);
    var coldalA = parseInt(document.getElementById("coldalA").value);
    
    var felszin = 2 * (aoldalA * boldalA + aoldalA * coldalA + boldalA * coldalA);
    document.getElementById("eredmenyF").value = felszin + " cm2";
    
}

function szamolV() {
    var aoldalV = parseInt(document.getElementById("aoldalV").value);
    var boldalV = parseInt(document.getElementById("boldalV").value);
    var coldalV = parseInt(document.getElementById("coldalV").value);
    
    var terfogat = aoldalV * boldalV * coldalV;
    document.getElementById("eredmenyT").value = terfogat + " cm3";

}