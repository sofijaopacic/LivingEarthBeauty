function provera(){
    var ime=document.getElementById("ime").value;
    var prezime=document.getElementById("prezime").value;
    var adresa=document.getElementById("adresa").value;
    var brojAdrese=document.getElementById("brojAdresa").value;
    var broj=document.getElementById("broj").value;
    var x=0;


    if(ime.length<3){
        alert("Greska ime mora da bude duze od 3 karaktera!");
        x++;
    }
    

    if(prezime.length<5){
        alert("Greska prezime mora da bude duze od 5 karaktera!");
        x++;
    }

    if(adresa.length<5){
        alert("Greska adresa mora da bude duze od 5 karaktera!");
        x++;
    }

    if(brojAdrese<0){
        alert("Greska, adresa ne moze biti manja od nule");
        x++;
    }

    if(broj.length!=10){
        alert("Greska broj mora da ima 10 karaktera!");
        x++;
    } 

    if(x!=0){
        console.log("Greska pri unosu");
    }
    else{
        window.open("potvrda.html")
    }
}
