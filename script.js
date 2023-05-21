y=true
function walidacjaimie(form) {
if (imie.value ==""){
	imie.setCustomValidity("Wprowadź imie")
	je1.innerHTML="Wprowadź poprawne imie"
    y=false
}
else {
    imie.setCustomValidity('')
	}
}
function walidacjanazwisko(form){
	if (nazwisko.value ==""){
	nazwisko.setCustomValidity("Wprowadź nazwisko")
	je2.innerHTML="Wprowadź poprawne nazwisko"
	y=false
}
	else {
    nazwisko.setCustomValidity('')

	}
}
function walidacjatelefon(form){
	if ((telefon.value=="") || (telefon.length!=9)){
	telefon.setCustomValidity("Wprowadź poprawny numer telefonu")
	je5.innerHTML="Wprowadź poprawny numer telefonu"
	y=false
}
	else {
    telefon.setCustomValidity('')

	}
}
function walidacjaemail(form){
	if (email.value.includes("@")){
	email.setCustomValidity('')
    y=true
	
}
	else {
    email.setCustomValidity("Wprowadź poprawny adres Email")
	je3.innerHTML="Wprowadź poprawny adres Email"
	y=false
	}
}
function walidacjahaslo(form){
	if (haslo.value.length>=8 && /[a-z]/.test(haslo.value) && /[A-Z]/.test(haslo.value) && /[0-9]/.test(haslo.value)){
	haslo.setCustomValidity('')

	
}
	else {
    haslo.setCustomValidity("Wprowadź poprawne hasło zawierające duży i mały znak oraz cyfrę")
	je4.innerHTML="Wprowadź poprawne hasło zawierające duży i mały znak oraz cyfrę"
	y=false
	}
} 
function walidacjahaslo2(form){
	if (haslo.value=haslo2.value){
	haslo.setCustomValidity('')

	
}
	else {
    haslo.setCustomValidity("Wprowadź takie same hasła")
	jedod.innerHTML="Wprowadź takie same hasła"
	y=false
	}
} 
function walidacjadata(form){
uro = document.getElementById("data").value; 
dzis = new Date(); // Obecna data
popr = new Date(uro);
wiek = dzis.getFullYear() - popr.getFullYear();
	if (wiek>=18 ){
	data.setCustomValidity('')

}
	else {
    data.setCustomValidity("Musisz być pełnoletnim by wejść an stronę")
	je6.innerHTML="Musisz być pełnoletnim by wejść an stronę"
	y=false
	}
} 
function krajj(form){
	kraj1 = document.getElementById("kraj")
	if (kraj1.value=="polska" ){
	woj.innerHTML="<select oninput='kyk(this)' id='brbr'><option value='puste'>-wybierz-</option> <option value='dolnoslaskie'>dolnośląskie</option><option value='lubelskie'>lubelskie</option><option value='lubuskie'>lubuskie</option><option value='lodzkie'>łódzkie</option><option value='malopolskie'>małopolskie</option><option value='mazowieckie'>mazowieckie</option><option value='opolskie'>opolskie</option><option value='podkarpackie'>podkarpackie</option><option value='podlaskie'>podlaskie</option><option value='pomorskie'>pomorskie</option><option value='slaskie'>śląskie</option><option value='swietokrzyskie'>świętokrzyskie</option><option value='warminsko-mazurskie'>warmińsko-mazurskie</option><option value='wielkopolskie'>wielkopolskie</option><option value='zachodniopomorskie'>zachodniopomorskie</option> </select>"
}
	else if (kraj.value=="" ){
	kraj.setCustomValidity('Wpisz kraj')
	je7.innerHTML='Wpisz poprawny kraj'

}
	else {
    kraj.setCustomValidity("")
	y=false
	}
} 
function pap(form){
	if (y==true){
	wal.innerHTML="Formularz poprawny"
}
	else {
    wal.innerHTML="Formularz niepoprawny"
	}

} 
function klik(form){
  if (addr.checked == false) {
    adr1.innerHTML = "<input type='text' id='adresik1' readonly />";
  }
	else {
	adr1.innerHTML=""
	}
	
}
function tyk(form){
	if (!/[0-9]/.test(telefon.value)){
	je5.innerHTML="WPROWADŹ NUMER TELEFONU"	
	}
	else {
	je5.innerHTML=""
	}
}
function kyk(form){
	if (brbr.value!="" && (addr.checked == false)){
		adr1.innerHTML = "<input type='text' id='adresik1'/>";
		pierw.innerHTML = "<input type='text' id='adresik2'/>"
	}
	else if (brbr.value!="" && (addr.checked == true)){
	pierw.innerHTML = "<input type='text' id='adresik2'/>"
	}
}