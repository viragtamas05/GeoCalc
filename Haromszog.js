function szamolT() {
    var aoldalT = parseInt(document.getElementById("aoldalT").value);
    var amagassag =  parseInt(document.getElementById("amagasság").value);
    
    var terulet = aoldalT * amagassag / 2;
    document.getElementById("eredmenyT").value = terulet + " cm2";
    
}

function szamolK() {
    var aoldalK = parseInt(document.getElementById("aoldalK").value);
    var boldalK = parseInt(document.getElementById("boldalK").value);
    var coldalK = parseInt(document.getElementById("coldalK").value);

    var kerulet = aoldalK + boldalK + coldalK;
    document.getElementById("eredmenyK").value = kerulet + " cm";

}