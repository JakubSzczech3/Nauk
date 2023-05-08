function walidacja() {
email1=email.value;
has=haslo.value
if (imie.value == "")
alert("Podaj poprawne imie")
else if (nazwisko.value == "")
alert("Podaj poprawne nazwisko")
else if (email.value == "")
alert("Podaj poprawny email")
else if (email1.includes("@")== false){
alert("Podaj poprawny email")
}
else if (haslo.value == "" || has.length < 8 )
alert("Podaj poprawne hasło dłuższe niż 8 znaków")
console.log(kob.value)
console.log(men.value)
}