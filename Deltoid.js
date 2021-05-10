function szamolT() {
    var eatlo = parseInt(document.getElementById("eatlo").value);
    var fatlo = parseInt(document.getElementById("fatlo").value);
    
    var terulet = eatlo * fatlo / 2;
    document.getElementById("eredmenyT").value = terulet + " cm2";

}

function szamolK() {
    var aoldal = parseInt(document.getElementById("aoldal").value);
    var boldal =  parseInt(document.getElementById("boldal").value);
    
    var kerulet = 2 * aoldal + 2 * boldal;
    document.getElementById("eredmenyK").value = kerulet + " cm";

}