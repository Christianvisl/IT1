var tall1 = Number(prompt("Gi et tall"));
var operator = prompt("+, -, *, /");
var tall2 = Number(prompt("Gi et tall til"));
var resultat;

if (operator == "+"){
    resultat = tall1 + tall2;
    document.write("<p>Resultatet er lik</p>" + resultat)
}

else if (operator == "-"){
    resultat = tall1 - tall2;
    document.write("<p>Resultatet er lik</p>" + resultat)
}

else if (operator == "*"){
    resultat = tall1 * tall2;
    document.write("<p>Resultatet er lik</p>" + resultat)
}

else if (operator == "/"){
    resultat = tall1 / tall2;
    document.write("<p>Resultatet er lik</p>" + resultat)
}

else{
    document.write('<p style="color = red">Du skrev ikke inn en operator</p>');
}