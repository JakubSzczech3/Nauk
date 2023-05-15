function walidacja(form) {
email1=email.value;
has=haslo.value
imie=imie.value
if (imie.value==""){
imie.value.setCustomValidity("Podaj imię")
}

else if (nazwisko.value == ""){
}
else if (email.value == ""){
}
else if (email1.includes("@")== false){

}
else if (haslo.value == "" || has.length < 8 ){
}
else if ((form.plec[0].checked == false) && (form.plec[1].checked == false)){
}
else alert("Formularz jest poprawny")
}