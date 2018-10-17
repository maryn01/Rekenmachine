/*deze functie zorgt ervoor dat de getallen worden ingevoerd zodra deze worden ingevuld
  op één of andere manier werkt dit ook voor de komma, de plus, de keer en gedeeld door.
*/
function insert(num){
  document.form.uitkomst.value = document.form.uitkomst.value+num
}

/*
deze functie zorgt ervoor dat kloppende berekeningen worden uitgerekend en geeft
een error (in de console) zodra de berekening niet uitgevoerd kan worden
*/
function equal(){
  var exp = document.form.uitkomst.value;
  if(exp){
    document.form.uitkomst.value = eval(exp);
  }
}

//deze functie maakt het input veld leeg

function clean(){
document.form.uitkomst.value = "";
}

//deze functie haalt per keer dat er op wordt geklikt 1 teken weg uit het input veld
function back(){
  var exp = document.form.uitkomst.value;
  document.form.uitkomst.value = exp.substring(0,exp.length-1);
}

//deze functie zorgt ervoor dat de min knop een min invoerd in het input veld
function minus(){
  document.form.uikomst.value = "-"
}
