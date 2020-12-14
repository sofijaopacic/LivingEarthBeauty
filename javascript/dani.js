function danasnjiDan(){
    var danas= new Date();
    var dan=danas.getDate();
    var mesec=danas.getMonth()+1;
    var godina=danas.getFullYear();

    document.write(dan+"."+mesec+"."+godina+".");
}

function danIsporuke(){
    var isporuka = new Date();
    var trajanje = 2; //u danima
    isporuka.setTime(isporuka.getTime() +  (trajanje * 24 * 60 * 60 * 1000)); //dodajemo vreme u sekundama na trenutno vreme
    var dan= isporuka.getDate();
    var mesec= isporuka.getMonth()+1;
    var godina= isporuka.getUTCFullYear();

   document.write(dan+"."+mesec+"."+godina+".");
}