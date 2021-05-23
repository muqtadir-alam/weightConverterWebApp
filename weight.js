
document.getElementById('output').style.visibility = "hidden";
document.getElementById('input').addEventListener('input', function (e) {
    document.getElementById('output').style.visibility = "visible";
    let val = e.target.value;
    document.getElementById('gramsoutput').innerHTML = val / 0.0022046;
    document.getElementById('kgoutput').innerHTML = val / 2.205;
    document.getElementById('ounoutput').innerHTML = val*16;
    

}); 