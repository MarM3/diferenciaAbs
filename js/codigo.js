function diferencia(){
    var num = document.getElementById("numero").value;
    var patron = /^[0-9]+$/;

    if (!patron.test(num)){
        alert("El número introducido no es correcto.");
        return false;
    }

    if (num>13){
        var tot;
        tot = 2*(Math.abs(num - 13));
        var res = document.getElementById("mostrar");
        res.style.display = "block";
        document.getElementById("resultado").innerHTML = tot;
        return true;
    }

    if (num<13){
        alert("El número introducido es inferior a 13.");
        return true;
    }

    if (num==13){
        alert("El número introducido es 13.");
        return true;
    }
}

var calc = document.getElementById("calcular");
calc.onclick = diferencia;