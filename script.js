function isi(){
    const masukan = document.getElementById('jawab').value;
    const option = document.getElementById('pilihan').value;
    if(masukan.toUpperCase()==option){
            if(option == 'TARAWEH'){
                duaMendatar();
            }else if(option == "RAMADAN"){
                empatMendatar();
            }else if (option == "HAUS"){
                limaMendatar();
            }else if(option == "SAHUR"){
                enamMendatar();
            }else if(option == "TAKJIL"){
                satuMenurun();
            }else if(option == "TADARUS"){
                duaMenurun();
            }else if(option == "EIDALFITR"){
                tigaMenurun();
            }
    }else{
        alert("SALAH!");
    }
}

function duaMendatar(){
    document.getElementsByClassName('d2-1').innerHTML="T";
    document.getElementById('d2-2').innerHTML="A";
    document.getElementById('d2-3').innerHTML="R";
    document.getElementById('d2-4').innerHTML="A";
    document.getElementById('d2-5').innerHTML="W";
    document.getElementById('d2-6').innerHTML="E";
    document.getElementById('d2-7').innerHTML="H";
}

function empatMendatar(){
    document.getElementById('d4-1').innerHTML="R";
    document.getElementById('d4-2').innerHTML="A";
    document.getElementById('d4-3').innerHTML="M";
    document.getElementById('d4-4').innerHTML="A";
    document.getElementById('d4-5').innerHTML="D";
    document.getElementById('d4-6').innerHTML="A";
    document.getElementById('d4-7').innerHTML="N";
}

function limaMendatar(){
    document.getElementById('d5-1').innerHTML="H";
    document.getElementById('d5-2').innerHTML="A";
    document.getElementById('d5-3').innerHTML="U";
    document.getElementById('d5-4').innerHTML="S";
}

function enamMendatar(){
    document.getElementById('d6-1').innerHTML="S";
    document.getElementById('d6-2').innerHTML="A";
    document.getElementById('d6-3').innerHTML="H";
    document.getElementById('d6-4').innerHTML="U";
    document.getElementById('d6-5').innerHTML="R";
}

function satuMenurun(){
    document.getElementById('m1-1').innerHTML="T";
    document.getElementById('d2-4').innerHTML="A";
    document.getElementById('m1-3').innerHTML="K";
    document.getElementById('m1-4').innerHTML="J";
    document.getElementById('m1-5').innerHTML="I";
    document.getElementById('m1-6').innerHTML="L";
}

function duaMenurun(){
    document.getElementById('d2-1').innerHTML="T";
    document.getElementById('m2-2').innerHTML="A";
    document.getElementById('m2-3').innerHTML="D";
    document.getElementById('d4-6').innerHTML="A";
    document.getElementById('m2-5').innerHTML="R";
    document.getElementById('d5-3').innerHTML="U";
    document.getElementById('m2-7').innerHTML="S";
}

function tigaMenurun(){
    document.getElementById('d2-6').innerHTML="E";
    document.getElementById('m3-2').innerHTML="I";
    document.getElementById('m3-3').innerHTML="D";
    document.getElementById('m3-4').innerHTML="A";
    document.getElementById('m3-5').innerHTML="L";
    document.getElementById('m3-6').innerHTML="F";
    document.getElementById('m3-7').innerHTML="I";
    document.getElementById('m3-8').innerHTML="T";
    document.getElementById('d6-5').innerHTML="R";
}

