function proveraKontakt(){
    var ime=document.getElementById("ime").value;
    var prezime=document.getElementById("prezime").value;
    var poruka=document.getElementById("poruka").value;

    var x=0;


    if(ime.length<3){
        alert("Greska ime mora da bude duze od 3 karaktera!");
        x++;
    }
    

    if(prezime.length<5){
        alert("Greska prezime mora da bude duze od 5 karaktera!");
        x++;
    }

    if(poruka.length<5){
        alert("Greska poruka mora da bude duze od 5 karaktera!");
        x++;
    }

    if(x!=0){
        alert("Neuspesno slanje poruke!");
    }
    else{
        alert("Uspesno poslata poruka!");
    }
}