//Atividade 1
var Yx1 = 0;
var Yx2 = 0;
var Yx3 = 0;
var Yx4 = 0;

$(document).keypress(function(e)
{
    var botão = (e.botão ? e.botão : e.which);
    if(botão==13)
    {
        Ca(Xi=3);
        Cb(Xi=3);
        Cc(Xi=3);
        Cd(Xi=3);
        tt();
    }
});
function Ca(Xi)
{
    var j = parseInt(document.getElementById("C1").value) || 0;
    if(j<0)
    {
        j=0;
    }
    if(Xi==0)
    {
        j = j-1;
    }
    else if(Xi==1)
    {
        j = j+1;
    }
    document.getElementById("C1").value = j;
    Yx1 = j * 100;
    document.getElementById("R1").innerHTML = "R$"+(parseInt(document.getElementById("C1").value) * 100)+",00"; 
}
function Cb(Xi)
{
    var j = parseInt(document.getElementById("C2").value) || 0;
    if(j<0)
    {
        j=0;
    }
    if(Xi==0)
    {
        j = j-1;
    }
    else if(Xi==1)
    {
        j = j+1;
    }
    document.getElementById("C2").value = j;
    Yx1 = j * 200;
    document.getElementById("R2").innerHTML = "R$"+(parseInt(document.getElementById("C2").value) * 200)+",00";
}
function Cc(Xi)
{
    var j = parseInt(document.getElementById("C3").value) || 0;
    if(j<0)
    {
        j=0
    }
    if(Xi==0)
    {
        j = j-1;
    }
    else if(Xi==1)
    {
        j = j+1;
    }
    document.getElementById("C3").value = j;
    Yx1 = j * 50;
    document.getElementById("R3").innerHTML = "R$"+(parseInt(document.getElementById("C3").value) * 50)+",00"
}
function Cd(Xi)
{
    var j = parseInt(document.getElementById("C4").value) || 0;
    if(j<0)
    {
        Cd(Xi=0)
    }
    if(Xi==0)
    {
        j = j-1;
    }
    else if(Xi==1)
    {
        j = j+1;
    }
    document.getElementById("C4").value = j;
    Yx1 = j * 60;
    document.getElementById("R4").innerHTML = "R$"+(parseInt(document.getElementById("C4").value) * 60)+",00"
}
function tt()
{
    var x1 = parseInt(document.getElementById("C1").value) || 0;
    var x2 = parseInt(document.getElementById("C2").value) || 0;
    var x3 = parseInt(document.getElementById("C3").value) || 0;
    var x4 = parseInt(document.getElementById("C4").value) || 0;
    document.getElementById("C5").innerHTML = x1+x2+x3+x4;
    var y1 = Yx1 || 0;
    var y2 = Yx2 || 0;
    var y3 = Yx3 || 0;
    var y4 = Yx4 || 0;
    document.getElementById("R5").innerHTML = "R$"+(y1+y2+y3+y4)+",00";
}
//Atividade 2
var Yx12 = 0;
var Yx22 = 0;
var Yx32 = 0;
var Yx42 = 0;
var Yx52 = 0;

$(document).keypress(function(e)
{
    var botão = (e.botão ? e.botão : e.which);
    if(botão==13)
    {
        Ca2(Xi2=3);
        Cb2(Xi2=3);
        Cc2(Xi2=3);
        Cd2(Xi2=3);
        Ce2(Xi2=3);
        tt2();
    }
});
function Ca2(Xi2)
{
    var j = parseInt(document.getElementById("Cz1").value) || 0;
    if(j<0)
    {
        j=0;
    }
    if(Xi2==0)
    {
        j = j-1;
    }
    else if(Xi2==1)
    {
        j = j+1;
    }
    document.getElementById("Cz1").value = j;
    Yx12 = j * 1139;
    document.getElementById("Rr1").innerHTML = "R$"+(parseInt(document.getElementById("Cz1").value) * 1139)+",00"; 
}
function Cb2(Xi2)
{
    var j = parseInt(document.getElementById("Cz2").value) || 0;
    if(j<0)
    {
        j=0;
    }
    if(Xi2==0)
    {
        j = j-1;
    }
    else if(Xi2==1)
    {
        j = j+1;
    }
    document.getElementById("Cz2").value = j;
    Yx12 = j * 225;
    document.getElementById("Rr2").innerHTML = "R$"+(parseInt(document.getElementById("Cz2").value) * 225)+",00";
}
function Cc2(Xi2)
{
    var j = parseInt(document.getElementById("Cz3").value) || 0;
    if(j<0)
    {
        j=0
    }
    if(Xi2==0)
    {
        j = j-1;
    }
    else if(Xi2==1)
    {
        j = j+1;
    }
    document.getElementById("Cz3").value = j;
    Yx12 = j * 1434;
    document.getElementById("Rr3").innerHTML = "R$"+(parseInt(document.getElementById("Cz3").value) * 1434)+",00"
}
function Cd2(Xi2)
{
    var j = parseInt(document.getElementById("Cz4").value) || 0;
    if(j<0)
    {
        Cd(Xi2=0)
    }
    if(Xi2==0)
    {
        j = j-1;
    }
    else if(Xi2==1)
    {
        j = j+1;
    }
    document.getElementById("Cz4").value = j;
    Yx12 = j * 422;
    document.getElementById("Rr4").innerHTML = "R$"+(parseInt(document.getElementById("Cz4").value) * 422)+",00"
}
function Ce2(Xi2)
{
    var j = parseInt(document.getElementById("Cz5").value) || 0;
    if(j<0)
    {
        Cd(Xi2=0)
    }
    if(Xi2==0)
    {
        j = j-1;
    }
    else if(Xi2==1)
    {
        j = j+1;
    }
    document.getElementById("Cz5").value = j;
    Yx52 = j * 175;
    document.getElementById("Rr5").innerHTML = "R$"+(parseInt(document.getElementById("Cz5").value) * 175)+",00"
}
function tt2()
{
    var x1 = parseInt(document.getElementById("Cz1").value) || 0;
    var x2 = parseInt(document.getElementById("Cz2").value) || 0;
    var x3 = parseInt(document.getElementById("Cz3").value) || 0;
    var x4 = parseInt(document.getElementById("Cz4").value) || 0;
    var x5 = parseInt(document.getElementById("Cz5").value) || 0;
    document.getElementById("Cz6").innerHTML = x1+x2+x3+x4;
    var y1 = Yx12 || 0;
    var y2 = Yx22 || 0;
    var y3 = Yx32 || 0;
    var y4 = Yx42 || 0;
    var y5 = Yx52 || 0;
    var shdw = (y1+y2+y3+y4+y5)
    document.getElementById("Rr6").innerHTML = "R$"+shdw+",00";
}
//Fundo Index
var i = 1;
function VI()
{
    i++;
    if(i%2==0)
    {
        document.getElementById("logo").className = "logo logoN";
        document.getElementById("nv").className = "navbar sticky-top navbar-expand-lg navbar-dark bg-delta";
        document.getElementById("btN1").className = "btn btn-charlie t-rob shadow-none";
        document.getElementById("btN2").className = "btn btn-charlie t-rob shadow-none";
        document.getElementById("BtN3").className = "btn btn-link T-aRob btn-block shadow-none text-decoration-none";
        document.getElementById("Rodapé").className = "py-4 bg-delta";
        document.getElementById("click").className = "btn btn-charlie t-rob shadow-none";
        document.getElementById("rodP").className = "m-0 text-center T-rob ";
        document.getElementById("headC").content = "#2b2b2b";
        document.getElementById("bd").className = "bg-charlie";
        document.getElementById("He1").className = "card-header bg-delta text-white rounded-0";
        document.getElementById("He2").className = "card-header bg-delta text-white rounded-0";
        document.getElementById("He3").className = "card-header bg-delta text-white rounded-0";
        document.getElementById("He4").className = "card-header bg-delta text-white rounded-0";
        document.getElementById("He5").className = "card-header bg-delta text-white rounded-0";
        document.getElementById("HB1").className = "btn btn-link shadow-none text-decoration-none T-aRob rounded-0";
        document.getElementById("HB2").className = "btn btn-link shadow-none text-decoration-none T-aRob rounded-0";
        document.getElementById("HB3").className = "btn btn-link shadow-none text-decoration-none T-aRob rounded-0";
        document.getElementById("HB4").className = "btn btn-link shadow-none text-decoration-none T-aRob rounded-0";
        document.getElementById("HB5").className = "btn btn-link shadow-none text-decoration-none T-aRob rounded-0";
        document.getElementById("HeB1").className = "card-body bg-venus t-rob text-white";
        document.getElementById("HeB2").className = "card-body bg-venus t-rob text-white";
        document.getElementById("HeB3").className = "card-body bg-venus t-rob";
        document.getElementById("HeB4").className = "card-body bg-venus t-rob text-white";
        document.getElementById("HeB5").className = "card-body bg-venus t-rob";
        document.getElementById("Cad1").className = "card border-ATn rounded-0";
        document.getElementById("Cad2").className = "card border-ATn rounded-0";
        document.getElementById("Cad3").className = "card border-ATn rounded-0";
        document.getElementById("Cad4").className = "card border-ATn rounded-0";
        document.getElementById("Cad5").className = "card border-ATn rounded-0";
        document.getElementById("MD-h").className = "modal-header rounded-0 T-rob text-white bg-delta border-ATn"
        document.getElementById("MD-f").className = "modal-footer rounded-0 bg-delta border-ATn"
        document.getElementById("MD-b").className = "btn btn-delta2 border-ATn btn-block shadow-none"
        document.getElementById("MD-c").className = "modal-body bg-venus";
        document.getElementById("MD-t").className = "table-dark table-sm table-bordered table-striped text-center text-white"
        document.getElementById("Tb-AT1").className = "table table-dark table-striped T-rob text-white";
        document.getElementById("TbB-AT1").className = "btn btn-link T-aRob shadow-none text-decoration-none";
        document.getElementById("Tb-AT2").className = "table table-dark table-striped T-rob text-white";
        document.getElementById("TbB1-AT2").className = "btn btn-link T-aRob shadow-none text-decoration-none";
        document.getElementById("TbB2-AT2").className = "btn btn-link T-aRob shadow-none text-decoration-none";
    }
    if(i%2==1)
    {
        document.getElementById("logo").className = "logo logoD";
        document.getElementById("nv").className = "navbar sticky-top navbar-expand-lg navbar-light bg-alpha";
        document.getElementById("btN1").className = "btn btn-alpha t-rob shadow-none";
        document.getElementById("btN2").className = "btn btn-alpha t-rob shadow-none";
        document.getElementById("BtN3").className = "btn btn-link T-aRobM btn-block shadow-none text-decoration-none";
        document.getElementById("Rodapé").className = "py-4 bg-alpha";
        document.getElementById("click").className = "btn btn-alpha t-rob shadow-none";
        document.getElementById("rodP").className = "m-0 text-center T-rob text-black";
        document.getElementById("headC").content = "#ebe8e8";
        document.getElementById("bd").className = "bg-beta";
        document.getElementById("He1").className = "card-header bg-alpha text-white rounded-0";
        document.getElementById("He2").className = "card-header bg-alpha text-white rounded-0";
        document.getElementById("He3").className = "card-header bg-alpha text-white rounded-0";
        document.getElementById("He4").className = "card-header bg-alpha text-white rounded-0";
        document.getElementById("He5").className = "card-header bg-alpha text-white rounded-0";
        document.getElementById("HB1").className = "btn btn-link shadow-none text-decoration-none T-aRobM text-black";
        document.getElementById("HB2").className = "btn btn-link shadow-none text-decoration-none T-aRobM text-black";
        document.getElementById("HB3").className = "btn btn-link shadow-none text-decoration-none T-aRobM text-black";
        document.getElementById("HB4").className = "btn btn-link shadow-none text-decoration-none T-aRobM text-black";
        document.getElementById("HB5").className = "btn btn-link shadow-none text-decoration-none T-aRobM text-black";
        document.getElementById("HeB1").className = "card-body bg-beta";
        document.getElementById("HeB2").className = "card-body bg-beta";
        document.getElementById("HeB3").className = "card-body bg-beta";
        document.getElementById("HeB4").className = "card-body bg-beta";
        document.getElementById("HeB5").className = "card-body bg-beta";
        document.getElementById("Cad1").className = "card border-ATd rounded-0";
        document.getElementById("Cad2").className = "card border-ATd rounded-0";
        document.getElementById("Cad3").className = "card border-ATd rounded-0";
        document.getElementById("Cad4").className = "card border-ATd rounded-0";
        document.getElementById("Cad5").className = "card border-ATd rounded-0";
        document.getElementById("MD-h").className = "modal-header rounded-0 T-rob text-black bg-alpha border-ATd"
        document.getElementById("MD-f").className = "modal-footer rounded-0 bg-alpha border-ATd"
        document.getElementById("MD-b").className = "btn btn-beta2 btn-block shadow-none"
        document.getElementById("MD-c").className = "modal-body bg-beta";
        document.getElementById("MD-t").className = "table-sm table-bordered table-striped text-center text-black"
        document.getElementById("Tb-AT1").className = "table table-striped T-rob text-black";
        document.getElementById("TbB-AT1").className = "btn btn-link T-aRobM shadow-none text-decoration-none";
        document.getElementById("Tb-AT2").className = "table table-striped T-rob text-black";
        document.getElementById("TbB1-AT2").className = "btn btn-link T-aRobM shadow-none text-decoration-none";
        document.getElementById("TbB2-AT2").className = "btn btn-link T-aRobM shadow-none text-decoration-none";
    }
}
//Fundo Tabela
var i = 1;
function VT() {
    i++;
    if (i % 2 == 0) {
        document.getElementById("logo").className = "logo logoN";
        document.getElementById("nv").className = "navbar sticky-top navbar-expand-lg navbar-dark bg-delta";
        document.getElementById("btN1").className = "btn btn-charlie t-rob shadow-none";
        document.getElementById("btN2").className = "btn btn-charlie t-rob shadow-none";
        document.getElementById("Rodapé").className = "py-4 bg-delta";
        document.getElementById("click").className = "btn btn-charlie t-rob shadow-none";
        document.getElementById("rodP").className = "m-0 text-center T-rob ";
        document.getElementById("headC").content = "#2b2b2b";
        document.getElementById("bd").className = "bg-charlie";
        document.getElementById("MD-h").className = "modal-header rounded-0 T-rob text-white bg-delta border-ATn"
        document.getElementById("MD-f").className = "modal-footer rounded-0 bg-delta border-ATn"
        document.getElementById("MD-b").className = "btn btn-delta2 border-ATn btn-block shadow-none"
        document.getElementById("MD-c").className = "modal-body bg-venus";
        document.getElementById("MD-t").className = "table-dark table-sm table-bordered table-striped text-center text-white"
    }
    if (i % 2 == 1) {
        document.getElementById("logo").className = "logo logoD";
        document.getElementById("nv").className = "navbar sticky-top navbar-expand-lg navbar-light bg-alpha";
        document.getElementById("btN1").className = "btn btn-alpha t-rob shadow-none";
        document.getElementById("btN2").className = "btn btn-alpha t-rob shadow-none";
        document.getElementById("Rodapé").className = "py-4 bg-alpha";
        document.getElementById("click").className = "btn btn-alpha t-rob shadow-none";
        document.getElementById("rodP").className = "m-0 text-center T-rob text-black";
        document.getElementById("headC").content = "#ebe8e8";
        document.getElementById("bd").className = "bg-beta";
        document.getElementById("MD-h").className = "modal-header rounded-0 T-rob text-black bg-alpha border-ATd"
        document.getElementById("MD-f").className = "modal-footer rounded-0 bg-alpha border-ATd"
        document.getElementById("MD-b").className = "btn btn-beta2 btn-block shadow-none"
        document.getElementById("MD-c").className = "modal-body bg-beta";
        document.getElementById("MD-t").className = "table-sm table-bordered table-striped text-center text-black"
    }
}
//Fundo Contato
var j = 1;
function VC()
{
    j++;
    if(j%2==0)
    {
        document.getElementById("logo").className = "logo logoN";
        document.getElementById("Cc").className = "container bg-delta text-white rounded";
        document.getElementById("nv").className = "navbar sticky-top navbar-expand-lg navbar-light bg-delta";
        document.getElementById("btN1").className = "btn btn-charlie t-rob shadow-none";
        document.getElementById("btN2").className = "btn btn-charlie t-rob shadow-none";
        document.getElementById("Rodapé").className = "py-4 bg-delta";
        document.getElementById("click").className = "btn btn-charlie t-rob shadow-none";
        document.getElementById("rodP").className = "m-0 text-center T-rob ";
        document.getElementById("headC").content = "#2b2b2b";
        document.getElementById("Ct").className =  "text-white";
        document.getElementById("ETa").className = "text-decoration-none T-aRob";
        document.getElementById("lc1").className = "T-rob text-white";
        document.getElementById("lc2").className = "T-rob text-white";
        document.getElementById("lc3").className = "T-rob text-white";
        document.getElementById("lc4").className = "T-rob text-white";
        document.getElementById("Ent").className = "btn btn-delta1 shadow-none";
        document.getElementById("Res").className = "btn btn-delta2 shadow-none";
        document.getElementById("bd").className = "bg-charlie";
    }
    if(j%2==1)
    {
        document.getElementById("logo").className = "logo logoD";
        document.getElementById("Cc").className = "container bg-alpha text-black rounded";
        document.getElementById("nv").className = "navbar sticky-top navbar-expand-lg navbar-dark bg-alpha";
        document.getElementById("btN1").className = "btn btn-alpha t-rob shadow-none";
        document.getElementById("btN2").className = "btn btn-alpha t-rob shadow-none";
        document.getElementById("Rodapé").className = "py-4 bg-alpha";
        document.getElementById("click").className = "btn btn-alpha t-rob shadow-none";
        document.getElementById("rodP").className = "m-0 text-center T-rob text-black";
        document.getElementById("headC").content = "#ebe8e8";
        document.getElementById("Ct").className =  "text-black";
        document.getElementById("ETa").className = "text-decoration-none T-aRobM";
        document.getElementById("lc1").className = "T-rob text-black";
        document.getElementById("lc2").className = "T-rob text-black";
        document.getElementById("lc3").className = "T-rob text-black";
        document.getElementById("lc4").className = "T-rob text-black";
        document.getElementById("Ent").className = "btn btn-beta1 shadow-none";
        document.getElementById("Res").className = "btn btn-beta2 shadow-none";
        document.getElementById("bd").className = "bg-beta";
    }
}
//contato
var eCTjs = 0 ;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 var criador = "Weider H. Alves Thenorio";
function CTjs()
{
    var eRCTn = 0;
    var eRCTt = 0;
    var eRCTe = 0;
    var eRCTm = 0;
    var En = document.getElementById("nomeCF").value;
    var Et = document.getElementById("telefoneCF").value;
    var Ee = document.getElementById("emailCF").value;
    var Em = document.getElementById("mensagemCF").value;
    if(En.length===0)
    {
        document.getElementById("EN").innerHTML = "Escreva algo aqui!";
        document.getElementById("EN").focus();
        eRCTn = 1;
    }
    else if(En.length!=0)
    {
        document.getElementById("EN").innerHTML = "<br>";
        eRCTn = 0;
    }
    if(Et.length===0)
    {
        document.getElementById("ET").innerHTML = "Escreva algo aqui!";
        eRCTt = 1;
        document.getElementById("ET").focus();
    }
    else if(Et.length!=0)
    {
        document.getElementById("ET").innerHTML = "<br>";
        eRCTt = 0;
    }
    if(Ee.length===0)
    {
        document.getElementById("EE").innerHTML = "Escreva algo aqui!";
        eRCTe = 1;
        document.getElementById("EE").focus();
    }
    else if(Ee.length!=0)
    {
        document.getElementById("EE").innerHTML = "<br>";
        eRCTe = 0;
    }
    if(Em.length===0)
    {
        document.getElementById("EM").innerHTML = "Escreva algo aqui!";
        eRCTm = 1;
        document.getElementById("EM").focus();
    }
    else if(Em.length!=0)
    {
        document.getElementById("EM").innerHTML = "<br>";
        eRCTm = 0;
    }
    eCTjs = eCTjs - (eRCTe + eRCTm + eRCTn + eRCTt);
    if(eCTjs>=0)
    {
        alert("Mensagem enviada");
    }
}
//Tabela Periodica
//x = número atomico, y = valor da cor
function tp(x,y)
{
    switch(x)
    {
        case 1:
            document.getElementById("PdT-E").innerHTML = "<sup>1<br></sup><b>H</b>";
            document.getElementById("Ndt").innerHTML = "Hidrogénio";
            document.getElementById("Edt").innerHTML = "H";
            document.getElementById("Adt").innerHTML = "1";
            document.getElementById("Nadt").innerHTML = "1 u";
            break;
        case 2:
            document.getElementById("PdT-E").innerHTML = "<sup>2<br></sup><b>He</b>";
            document.getElementById("Ndt").innerHTML = "Hélio";
            document.getElementById("Edt").innerHTML = "He";
            document.getElementById("Adt").innerHTML = "2";
            document.getElementById("Nadt").innerHTML = "4,002602 u";
            break;
        case 3:
            document.getElementById("PdT-E").innerHTML = "<sup>3<br></sup><b>Li</b>";
            document.getElementById("Ndt").innerHTML = "Lítio";
            document.getElementById("Edt").innerHTML = "Li";
            document.getElementById("Adt").innerHTML = "3";
            document.getElementById("Nadt").innerHTML = "6,941 u";
            break;
        case 4:
            document.getElementById("PdT-E").innerHTML = "<sup>4<br></sup><b>Be</b>";
            document.getElementById("Ndt").innerHTML = "Berílio";
            document.getElementById("Edt").innerHTML = "Be";
            document.getElementById("Adt").innerHTML = "4";
            document.getElementById("Nadt").innerHTML = "9,0122 u";
            break;
        case 5:
            document.getElementById("PdT-E").innerHTML = "<sup>5<br></sup><b>B</b>";
            document.getElementById("Ndt").innerHTML = "Boro";
            document.getElementById("Edt").innerHTML = "B";
            document.getElementById("Adt").innerHTML = "5";
            document.getElementById("Nadt").innerHTML = "10,81 u";
            break;
        case 6:
            document.getElementById("PdT-E").innerHTML = "<sup>6<br></sup><b>C</b>";
            document.getElementById("Ndt").innerHTML = "Carbono";
            document.getElementById("Edt").innerHTML = "C";
            document.getElementById("Adt").innerHTML = "6";
            document.getElementById("Nadt").innerHTML = "12,011 u";
            break;
        case 7:
            document.getElementById("PdT-E").innerHTML = "<sup>7<br></sup><b>N</b>";
            document.getElementById("Ndt").innerHTML = "Azoto";
            document.getElementById("Edt").innerHTML = "N";
            document.getElementById("Adt").innerHTML = "7";
            document.getElementById("Nadt").innerHTML = "14,007 u";
            break;
        case 8:
            document.getElementById("PdT-E").innerHTML = "<sup>8<br></sup><b>O</b>";
            document.getElementById("Ndt").innerHTML = "Oxigénio";
            document.getElementById("Edt").innerHTML = "O";
            document.getElementById("Adt").innerHTML = "8";
            document.getElementById("Nadt").innerHTML = "15,999 u";
            break;
        case 9:
            document.getElementById("PdT-E").innerHTML = "<sup>9<br></sup><b>F</b>";
            document.getElementById("Ndt").innerHTML = "Flúor";
            document.getElementById("Edt").innerHTML = "F";
            document.getElementById("Adt").innerHTML = "9";
            document.getElementById("Nadt").innerHTML = "18,998 u";
            break;
        case 10:
            document.getElementById("PdT-E").innerHTML = "<sup>10<br></sup><b>Ne</b>";
            document.getElementById("Ndt").innerHTML = "Neon";
            document.getElementById("Edt").innerHTML = "Ne";
            document.getElementById("Adt").innerHTML = "10";
            document.getElementById("Nadt").innerHTML = "20,180 u";
            break;
        case 11:
            document.getElementById("PdT-E").innerHTML = "<sup>11<br></sup><b>Na</b>";
            document.getElementById("Ndt").innerHTML = "Sódio";
            document.getElementById("Edt").innerHTML = "Na";
            document.getElementById("Adt").innerHTML = "11";
            document.getElementById("Nadt").innerHTML = "22,990 u";
            break;
        case 12:
            document.getElementById("PdT-E").innerHTML = "<sup>12<br></sup><b>Mg</b>";
            document.getElementById("Ndt").innerHTML = "Magnésio";
            document.getElementById("Edt").innerHTML = "Mg";
            document.getElementById("Adt").innerHTML = "12";
            document.getElementById("Nadt").innerHTML = "24,305 u";
            break;
        case 13:
            document.getElementById("PdT-E").innerHTML = "<sup>13<br></sup><b>Al</b>";
            document.getElementById("Ndt").innerHTML = "Alumínio";
            document.getElementById("Edt").innerHTML = "Al";
            document.getElementById("Adt").innerHTML = "13";
            document.getElementById("Nadt").innerHTML = "26,982 u";
            break;
        case 14:
            document.getElementById("PdT-E").innerHTML = "<sup>14<br></sup><b>Si</b>";
            document.getElementById("Ndt").innerHTML = "Sílicio";
            document.getElementById("Edt").innerHTML = "Si";
            document.getElementById("Adt").innerHTML = "14";
            document.getElementById("Nadt").innerHTML = "28,085 u";
            break;
        case 15:
            document.getElementById("PdT-E").innerHTML = "<sup>15<br></sup><b>P</b>";
            document.getElementById("Ndt").innerHTML = "Fósforo";
            document.getElementById("Edt").innerHTML = "P";
            document.getElementById("Adt").innerHTML = "15";
            document.getElementById("Nadt").innerHTML = "30,974 u";
            break;
        case 16:
            document.getElementById("PdT-E").innerHTML = "<sup>16<br></sup><b>S</b>";
            document.getElementById("Ndt").innerHTML = "Enxofre";
            document.getElementById("Edt").innerHTML = "S";
            document.getElementById("Adt").innerHTML = "16";
            document.getElementById("Nadt").innerHTML = "32,06 u";
            break;
        case 17:
            document.getElementById("PdT-E").innerHTML = "<sup>17<br></sup><b>Cl</b>";
            document.getElementById("Ndt").innerHTML = "Cloro";
            document.getElementById("Edt").innerHTML = "Cl";
            document.getElementById("Adt").innerHTML = "17";
            document.getElementById("Nadt").innerHTML = "35,45 u";
            break;
        case 18:
            document.getElementById("PdT-E").innerHTML = "<sup>18<br></sup><b>Ar</b>";
            document.getElementById("Ndt").innerHTML = "Argônio";
            document.getElementById("Edt").innerHTML = "Ar";
            document.getElementById("Adt").innerHTML = "18";
            document.getElementById("Nadt").innerHTML = "39,948 u";
            break;
        case 19:
            document.getElementById("PdT-E").innerHTML = "<sup>19<br></sup><b>K</b>";
            document.getElementById("Ndt").innerHTML = "Potássio";
            document.getElementById("Edt").innerHTML = "K";
            document.getElementById("Adt").innerHTML = "19";
            document.getElementById("Nadt").innerHTML = "39,098 u";
            break;
        case 20:
            document.getElementById("PdT-E").innerHTML = "<sup>20<br></sup><b>Ca</b>";
            document.getElementById("Ndt").innerHTML = "Cálcio";
            document.getElementById("Edt").innerHTML = "Ca";
            document.getElementById("Adt").innerHTML = "20";
            document.getElementById("Nadt").innerHTML = "40,078 u";
            break;
        case 21:
            document.getElementById("PdT-E").innerHTML = "<sup>21<br></sup><b>Sc</b>";
            document.getElementById("Ndt").innerHTML = "Escândio";
            document.getElementById("Edt").innerHTML = "Sc";
            document.getElementById("Adt").innerHTML = "21";
            document.getElementById("Nadt").innerHTML = "44,956 u";
            break;
        case 22:
            document.getElementById("PdT-E").innerHTML = "<sup>22<br></sup><b>Ti</b>";
            document.getElementById("Ndt").innerHTML = "Titânio";
            document.getElementById("Edt").innerHTML = "Ti";
            document.getElementById("Adt").innerHTML = "22";
            document.getElementById("Nadt").innerHTML = "47,867 u";
            break;
        case 23:
            document.getElementById("PdT-E").innerHTML = "<sup>23<br></sup><b>V</b>";
            document.getElementById("Ndt").innerHTML = "Vanádio";
            document.getElementById("Edt").innerHTML = "V";
            document.getElementById("Adt").innerHTML = "23";
            document.getElementById("Nadt").innerHTML = "50,942 u";
            break;
        case 24:
            document.getElementById("PdT-E").innerHTML = "<sup>24<br></sup><b>Cr</b>";
            document.getElementById("Ndt").innerHTML = "Crômio";
            document.getElementById("Edt").innerHTML = "Cr";
            document.getElementById("Adt").innerHTML = "24";
            document.getElementById("Nadt").innerHTML = "51,996 u";
            break;
        case 25:
            document.getElementById("PdT-E").innerHTML = "<sup>25<br></sup><b>Mn</b>";
            document.getElementById("Ndt").innerHTML = "Manganês";
            document.getElementById("Edt").innerHTML = "Mn";
            document.getElementById("Adt").innerHTML = "25";
            document.getElementById("Nadt").innerHTML = "54,938 u";
            break;
        case 26:
            document.getElementById("PdT-E").innerHTML = "<sup>26<br></sup><b>Fe</b>";
            document.getElementById("Ndt").innerHTML = "Ferro";
            document.getElementById("Edt").innerHTML = "Fe";
            document.getElementById("Adt").innerHTML = "26";
            document.getElementById("Nadt").innerHTML = "55,845 u";
            break;
        case 27:
            document.getElementById("PdT-E").innerHTML = "<sup>27<br></sup><b>Co</b>";
            document.getElementById("Ndt").innerHTML = "Cobalto";
            document.getElementById("Edt").innerHTML = "Co";
            document.getElementById("Adt").innerHTML = "27";
            document.getElementById("Nadt").innerHTML = "58,933 u";
            break;
        case 28:
            document.getElementById("PdT-E").innerHTML = "<sup>28<br></sup><b>Ni</b>";
            document.getElementById("Ndt").innerHTML = "Níquel";
            document.getElementById("Edt").innerHTML = "Ni";
            document.getElementById("Adt").innerHTML = "28";
            document.getElementById("Nadt").innerHTML = "58,693 u";
            break;
        case 29:
            document.getElementById("PdT-E").innerHTML = "<sup>29<br></sup><b>Cu</b>";
            document.getElementById("Ndt").innerHTML = "Cobre";
            document.getElementById("Edt").innerHTML = "Cu";
            document.getElementById("Adt").innerHTML = "29";
            document.getElementById("Nadt").innerHTML = "63,546 u";
            break;
        case 30:
            document.getElementById("PdT-E").innerHTML = "<sup>30<br></sup><b>Zn</b>";
            document.getElementById("Ndt").innerHTML = "Zinco";
            document.getElementById("Edt").innerHTML = "Zn";
            document.getElementById("Adt").innerHTML = "30";
            document.getElementById("Nadt").innerHTML = "65,38 u";
            break;
        case 31:
            document.getElementById("PdT-E").innerHTML = "<sup>31<br></sup><b>Ga</b>";
            document.getElementById("Ndt").innerHTML = "Gálio";
            document.getElementById("Edt").innerHTML = "Ga";
            document.getElementById("Adt").innerHTML = "31";
            document.getElementById("Nadt").innerHTML = "69,723 u";
            break;
        case 32:
            document.getElementById("PdT-E").innerHTML = "<sup>32<br></sup><b>Ge</b>";
            document.getElementById("Ndt").innerHTML = "Germânio";
            document.getElementById("Edt").innerHTML = "Ge";
            document.getElementById("Adt").innerHTML = "32";
            document.getElementById("Nadt").innerHTML = "72,630 u";
            break;
        case 33:
            document.getElementById("PdT-E").innerHTML = "<sup>33<br></sup><b>As</b>";
            document.getElementById("Ndt").innerHTML = "Arsênio";
            document.getElementById("Edt").innerHTML = "As";
            document.getElementById("Adt").innerHTML = "33";
            document.getElementById("Nadt").innerHTML = "74,992 u";
            break;
        case 34:
            document.getElementById("PdT-E").innerHTML = "<sup>34<br></sup><b>Se</b>";
            document.getElementById("Ndt").innerHTML = "Selênio";
            document.getElementById("Edt").innerHTML = "Se";
            document.getElementById("Adt").innerHTML = "34";
            document.getElementById("Nadt").innerHTML = "78,971 u";
            break;
        case 35:
            document.getElementById("PdT-E").innerHTML = "<sup>35<br></sup><b>Br</b>";
            document.getElementById("Ndt").innerHTML = "Bromo";
            document.getElementById("Edt").innerHTML = "Br";
            document.getElementById("Adt").innerHTML = "35";
            document.getElementById("Nadt").innerHTML = "79,904 u";
            break;
        case 36:
            document.getElementById("PdT-E").innerHTML = "<sup>36<br></sup><b>Kr</b>";
            document.getElementById("Ndt").innerHTML = "Crípton";
            document.getElementById("Edt").innerHTML = "Kr";
            document.getElementById("Adt").innerHTML = "36";
            document.getElementById("Nadt").innerHTML = "83,798 u";
            break;
        case 37:
            document.getElementById("PdT-E").innerHTML = "<sup>37<br></sup><b>Rb</b>";
            document.getElementById("Ndt").innerHTML = "Rubídio";
            document.getElementById("Edt").innerHTML = "Rb";
            document.getElementById("Adt").innerHTML = "37";
            document.getElementById("Nadt").innerHTML = "85,468 u";
            break;
        case 38:
            document.getElementById("PdT-E").innerHTML = "<sup>38<br></sup><b>Sr</b>";
            document.getElementById("Ndt").innerHTML = "Estrôncio";
            document.getElementById("Edt").innerHTML = "Sr";
            document.getElementById("Adt").innerHTML = "38";
            document.getElementById("Nadt").innerHTML = "87,62 u";
            break;
        case 39:
            document.getElementById("PdT-E").innerHTML = "<sup>39<br></sup><b>Y</b>";
            document.getElementById("Ndt").innerHTML = "Itrio";
            document.getElementById("Edt").innerHTML = "Y";
            document.getElementById("Adt").innerHTML = "39";
            document.getElementById("Nadt").innerHTML = "88,906 u";
            break;
        case 40:
            document.getElementById("PdT-E").innerHTML = "<sup>40<br></sup><b>Zr</b>";
            document.getElementById("Ndt").innerHTML = "Zircônio";
            document.getElementById("Edt").innerHTML = "Zr";
            document.getElementById("Adt").innerHTML = "40";
            document.getElementById("Nadt").innerHTML = "91,224 u";
            break;
        case 41:
            document.getElementById("PdT-E").innerHTML = "<sup>41<br></sup><b>Nb</b>";
            document.getElementById("Ndt").innerHTML = "Nióbio";
            document.getElementById("Edt").innerHTML = "Nb";
            document.getElementById("Adt").innerHTML = "41";
            document.getElementById("Nadt").innerHTML = "92,906 u";
            break;
        case 42:
            document.getElementById("PdT-E").innerHTML = "<sup>42<br></sup><b>Mo</b>";
            document.getElementById("Ndt").innerHTML = "Molibdênio";
            document.getElementById("Edt").innerHTML = "Mo";
            document.getElementById("Adt").innerHTML = "42";
            document.getElementById("Nadt").innerHTML = "95,95 u";
            break;
        case 43:
            document.getElementById("PdT-E").innerHTML = "<sup>43<br></sup><b>Tc</b>";
            document.getElementById("Ndt").innerHTML = "Tecnécio";
            document.getElementById("Edt").innerHTML = "Tc";
            document.getElementById("Adt").innerHTML = "43";
            document.getElementById("Nadt").innerHTML = "98 u";
            break;
        case 44:
            document.getElementById("PdT-E").innerHTML = "<sup>44<br></sup><b>Ru</b>";
            document.getElementById("Ndt").innerHTML = "Rutênio";
            document.getElementById("Edt").innerHTML = "Ru";
            document.getElementById("Adt").innerHTML = "44";
            document.getElementById("Nadt").innerHTML = "101,07 u";
            break;
        case 45:
            document.getElementById("PdT-E").innerHTML = "<sup>45<br></sup><b>Rh</b>";
            document.getElementById("Ndt").innerHTML = "Ródio";
            document.getElementById("Edt").innerHTML = "Rh";
            document.getElementById("Adt").innerHTML = "45";
            document.getElementById("Nadt").innerHTML = "102,91 u";
            break;
        case 46:
            document.getElementById("PdT-E").innerHTML = "<sup>46<br></sup><b>Pd</b>";
            document.getElementById("Ndt").innerHTML = "Paládio";
            document.getElementById("Edt").innerHTML = "Pd";
            document.getElementById("Adt").innerHTML = "46";
            document.getElementById("Nadt").innerHTML = "106,42 u";
            break;
        case 47:
            document.getElementById("PdT-E").innerHTML = "<sup>47<br></sup><b>Ag</b>";
            document.getElementById("Ndt").innerHTML = "Prata";
            document.getElementById("Edt").innerHTML = "Ag";
            document.getElementById("Adt").innerHTML = "47";
            document.getElementById("Nadt").innerHTML = "107,87 u";
            break;
        case 48:
            document.getElementById("PdT-E").innerHTML = "<sup>48<br></sup><b>Cd</b>";
            document.getElementById("Ndt").innerHTML = "Cádmio";
            document.getElementById("Edt").innerHTML = "Cd";
            document.getElementById("Adt").innerHTML = "48";
            document.getElementById("Nadt").innerHTML = "112,41 u";
            break;
        case 49:
            document.getElementById("PdT-E").innerHTML = "<sup>49<br></sup><b>In</b>";
            document.getElementById("Ndt").innerHTML = "Indio";
            document.getElementById("Edt").innerHTML = "In";
            document.getElementById("Adt").innerHTML = "49";
            document.getElementById("Nadt").innerHTML = "114,82 u";
            break;
        case 50:
            document.getElementById("PdT-E").innerHTML = "<sup>50<br></sup><b>Sn</b>";
            document.getElementById("Ndt").innerHTML = "Estanho";
            document.getElementById("Edt").innerHTML = "Sn";
            document.getElementById("Adt").innerHTML = "50";
            document.getElementById("Nadt").innerHTML = "118,71 u";
            break;
        case 51:
            document.getElementById("PdT-E").innerHTML = "<sup>51<br></sup><b>Sb</b>";
            document.getElementById("Ndt").innerHTML = "Antimônio";
            document.getElementById("Edt").innerHTML = "Sb";
            document.getElementById("Adt").innerHTML = "51";
            document.getElementById("Nadt").innerHTML = "121,76 u";
            break;
        case 52:
            document.getElementById("PdT-E").innerHTML = "<sup>52<br></sup><b>Te</b>";
            document.getElementById("Ndt").innerHTML = "Telúrio";
            document.getElementById("Edt").innerHTML = "Te";
            document.getElementById("Adt").innerHTML = "52";
            document.getElementById("Nadt").innerHTML = "127,60 u";
            break;
        case 53:
            document.getElementById("PdT-E").innerHTML = "<sup>53<br></sup><b>I</b>";
            document.getElementById("Ndt").innerHTML = "Iodo";
            document.getElementById("Edt").innerHTML = "I";
            document.getElementById("Adt").innerHTML = "53";
            document.getElementById("Nadt").innerHTML = "126,90 u";
            break;
        case 54:
            document.getElementById("PdT-E").innerHTML = "<sup>54<br></sup><b>Xe</b>";
            document.getElementById("Ndt").innerHTML = "Xenônio";
            document.getElementById("Edt").innerHTML = "Xe";
            document.getElementById("Adt").innerHTML = "54";
            document.getElementById("Nadt").innerHTML = "131,29 u";
            break;
        case 55:
            document.getElementById("PdT-E").innerHTML = "<sup>55<br></sup><b>Cs</b>";
            document.getElementById("Ndt").innerHTML = "Césio";
            document.getElementById("Edt").innerHTML = "Cs";
            document.getElementById("Adt").innerHTML = "55";
            document.getElementById("Nadt").innerHTML = "132,91 u";
            break;
        case 56:
            document.getElementById("PdT-E").innerHTML = "<sup>56<br></sup><b>Ba</b>";
            document.getElementById("Ndt").innerHTML = "Bário";
            document.getElementById("Edt").innerHTML = "Ba";
            document.getElementById("Adt").innerHTML = "56";
            document.getElementById("Nadt").innerHTML = "137,33 u";
            break;
        case 57:
            document.getElementById("PdT-E").innerHTML = "<sup>57<br></sup><b>La</b>";
            document.getElementById("Ndt").innerHTML = "Lantânio";
            document.getElementById("Edt").innerHTML = "La";
            document.getElementById("Adt").innerHTML = "57";
            document.getElementById("Nadt").innerHTML = "138,91 u";
            break;
        case 58:
            document.getElementById("PdT-E").innerHTML = "<sup>58<br></sup><b>Ce</b>";
            document.getElementById("Ndt").innerHTML = "Cério";
            document.getElementById("Edt").innerHTML = "Ce";
            document.getElementById("Adt").innerHTML = "58";
            document.getElementById("Nadt").innerHTML = "140,12 u";
            break;
        case 59:
            document.getElementById("PdT-E").innerHTML = "<sup>59<br></sup><b>Pr</b>";
            document.getElementById("Ndt").innerHTML = "Praseodímio";
            document.getElementById("Edt").innerHTML = "Pr";
            document.getElementById("Adt").innerHTML = "59";
            document.getElementById("Nadt").innerHTML = "140,91 u";
            break;
        case 60:
            document.getElementById("PdT-E").innerHTML = "<sup>60<br></sup><b>Nd</b>";
            document.getElementById("Ndt").innerHTML = "Neodímio";
            document.getElementById("Edt").innerHTML = "Nd";
            document.getElementById("Adt").innerHTML = "60";
            document.getElementById("Nadt").innerHTML = "144,24 u";
            break;
        case 61:
            document.getElementById("PdT-E").innerHTML = "<sup>61<br></sup><b>Pm</b>";
            document.getElementById("Ndt").innerHTML = "Promécio";
            document.getElementById("Edt").innerHTML = "Pm";
            document.getElementById("Adt").innerHTML = "61";
            document.getElementById("Nadt").innerHTML = "145 u";
            break;
        case 62:
            document.getElementById("PdT-E").innerHTML = "<sup>62<br></sup><b>Sm</b>";
            document.getElementById("Ndt").innerHTML = "Samário";
            document.getElementById("Edt").innerHTML = "Sm";
            document.getElementById("Adt").innerHTML = "62";
            document.getElementById("Nadt").innerHTML = "150,36 u";
            break;
        case 63:
            document.getElementById("PdT-E").innerHTML = "<sup>63<br></sup><b>Eu</b>";
            document.getElementById("Ndt").innerHTML = "Európio";
            document.getElementById("Edt").innerHTML = "Eu";
            document.getElementById("Adt").innerHTML = "63";
            document.getElementById("Nadt").innerHTML = "151,96 u";
            break;
        case 64:
            document.getElementById("PdT-E").innerHTML = "<sup>64<br></sup><b>Gd</b>";
            document.getElementById("Ndt").innerHTML = "Gadolínio";
            document.getElementById("Edt").innerHTML = "Gd";
            document.getElementById("Adt").innerHTML = "64";
            document.getElementById("Nadt").innerHTML = "157,25 u";
            break;
        case 65:
            document.getElementById("PdT-E").innerHTML = "<sup>65<br></sup><b>Tb</b>";
            document.getElementById("Ndt").innerHTML = "Térbio";
            document.getElementById("Edt").innerHTML = "Tb";
            document.getElementById("Adt").innerHTML = "65";
            document.getElementById("Nadt").innerHTML = "158,93 u";
            break;
        case 66:
            document.getElementById("PdT-E").innerHTML = "<sup>66<br></sup><b>Dy</b>";
            document.getElementById("Ndt").innerHTML = "Disprósio";
            document.getElementById("Edt").innerHTML = "Dy";
            document.getElementById("Adt").innerHTML = "66";
            document.getElementById("Nadt").innerHTML = "162,50 u";
            break;
        case 67:
            document.getElementById("PdT-E").innerHTML = "<sup>67<br></sup><b>Ho</b>";
            document.getElementById("Ndt").innerHTML = "Hólmio";
            document.getElementById("Edt").innerHTML = "Ho";
            document.getElementById("Adt").innerHTML = "67";
            document.getElementById("Nadt").innerHTML = "164,93 u";
            break;
        case 68:
            document.getElementById("PdT-E").innerHTML = "<sup>68<br></sup><b>Er</b>";
            document.getElementById("Ndt").innerHTML = "Erbio";
            document.getElementById("Edt").innerHTML = "Er";
            document.getElementById("Adt").innerHTML = "68";
            document.getElementById("Nadt").innerHTML = "167,26 u";
            break;
        case 69:
            document.getElementById("PdT-E").innerHTML = "<sup>69<br></sup><b>Tm</b>";
            document.getElementById("Ndt").innerHTML = "Túlio";
            document.getElementById("Edt").innerHTML = "Tm";
            document.getElementById("Adt").innerHTML = "69";
            document.getElementById("Nadt").innerHTML = "168,93 u";
            break;
        case 70:
            document.getElementById("PdT-E").innerHTML = "<sup>70<br></sup><b>Yb</b>";
            document.getElementById("Ndt").innerHTML = "Itérbio";
            document.getElementById("Edt").innerHTML = "Yb";
            document.getElementById("Adt").innerHTML = "70";
            document.getElementById("Nadt").innerHTML = "173,05 u";
            break;
        case 71:
            document.getElementById("PdT-E").innerHTML = "<sup>71<br></sup><b>Lu</b>";
            document.getElementById("Ndt").innerHTML = "Lutécio";
            document.getElementById("Edt").innerHTML = "Lu";
            document.getElementById("Adt").innerHTML = "71";
            document.getElementById("Nadt").innerHTML = "174,97 u";
            break;
        case 72:
            document.getElementById("PdT-E").innerHTML = "<sup>72<br></sup><b>Hf</b>";
            document.getElementById("Ndt").innerHTML = "Háfnio";
            document.getElementById("Edt").innerHTML = "Hf";
            document.getElementById("Adt").innerHTML = "72";
            document.getElementById("Nadt").innerHTML = "178,49 u";
            break;
        case 73:
            document.getElementById("PdT-E").innerHTML = "<sup>73<br></sup><b>Ta</b>";
            document.getElementById("Ndt").innerHTML = "Tântalo";
            document.getElementById("Edt").innerHTML = "Ta";
            document.getElementById("Adt").innerHTML = "73";
            document.getElementById("Nadt").innerHTML = "180,95 u";
            break;
        case 74:
            document.getElementById("PdT-E").innerHTML = "<sup>74<br></sup><b>W</b>";
            document.getElementById("Ndt").innerHTML = "Tungstênio";
            document.getElementById("Edt").innerHTML = "W";
            document.getElementById("Adt").innerHTML = "74";
            document.getElementById("Nadt").innerHTML = "183,84 u";
            break;
        case 75:
            document.getElementById("PdT-E").innerHTML = "<sup>75<br></sup><b>Re</b>";
            document.getElementById("Ndt").innerHTML = "Rênio";
            document.getElementById("Edt").innerHTML = "Re";
            document.getElementById("Adt").innerHTML = "75";
            document.getElementById("Nadt").innerHTML = "186,21 u";
            break;
        case 76:
            document.getElementById("PdT-E").innerHTML = "<sup>76<br></sup><b>Os</b>";
            document.getElementById("Ndt").innerHTML = "Osmio";
            document.getElementById("Edt").innerHTML = "Os";
            document.getElementById("Adt").innerHTML = "76";
            document.getElementById("Nadt").innerHTML = "190,23 u";
            break;
        case 77:
            document.getElementById("PdT-E").innerHTML = "<sup>77<br></sup><b>Ir</b>";
            document.getElementById("Ndt").innerHTML = "Irídio";
            document.getElementById("Edt").innerHTML = "Ir";
            document.getElementById("Adt").innerHTML = "77";
            document.getElementById("Nadt").innerHTML = "192,22 u";
            break;
        case 78:
            document.getElementById("PdT-E").innerHTML = "<sup>78<br></sup><b>Pt</b>";
            document.getElementById("Ndt").innerHTML = "Platina";
            document.getElementById("Edt").innerHTML = "Pt";
            document.getElementById("Adt").innerHTML = "78";
            document.getElementById("Nadt").innerHTML = "195,08 u";
            break;
        case 79:
            document.getElementById("PdT-E").innerHTML = "<sup>79<br></sup><b>Au</b>";
            document.getElementById("Ndt").innerHTML = "Ouro";
            document.getElementById("Edt").innerHTML = "Au";
            document.getElementById("Adt").innerHTML = "79";
            document.getElementById("Nadt").innerHTML = "196,97 u";
            break;
        case 80:
            document.getElementById("PdT-E").innerHTML = "<sup>80<br></sup><b>Hg</b>";
            document.getElementById("Ndt").innerHTML = "Mercúrio";
            document.getElementById("Edt").innerHTML = "Hg";
            document.getElementById("Adt").innerHTML = "80";
            document.getElementById("Nadt").innerHTML = "200,59 u";
            break;
        case 81:
            document.getElementById("PdT-E").innerHTML = "<sup>81<br></sup><b>Ti</b>";
            document.getElementById("Ndt").innerHTML = "Tálio";
            document.getElementById("Edt").innerHTML = "Ti";
            document.getElementById("Adt").innerHTML = "81";
            document.getElementById("Nadt").innerHTML = "204,59 u";
            break;
        case 82:
            document.getElementById("PdT-E").innerHTML = "<sup>82<br></sup><b>Pb</b>";
            document.getElementById("Ndt").innerHTML = "Chumbo";
            document.getElementById("Edt").innerHTML = "Pb";
            document.getElementById("Adt").innerHTML = "82";
            document.getElementById("Nadt").innerHTML = "207,38 u";
            break;
        case 83:
            document.getElementById("PdT-E").innerHTML = "<sup>83<br></sup><b>Bi</b>";
            document.getElementById("Ndt").innerHTML = "Bismuto";
            document.getElementById("Edt").innerHTML = "Bi";
            document.getElementById("Adt").innerHTML = "83";
            document.getElementById("Nadt").innerHTML = "208,98 u";
            break;
        case 84:
            document.getElementById("PdT-E").innerHTML = "<sup>84<br></sup><b>Po</b>";
            document.getElementById("Ndt").innerHTML = "Polônio";
            document.getElementById("Edt").innerHTML = "Po";
            document.getElementById("Adt").innerHTML = "84";
            document.getElementById("Nadt").innerHTML = "209 u";
            break;
        case 85:
            document.getElementById("PdT-E").innerHTML = "<sup>85<br></sup><b>At</b>";
            document.getElementById("Ndt").innerHTML = "Astato";
            document.getElementById("Edt").innerHTML = "At";
            document.getElementById("Adt").innerHTML = "85";
            document.getElementById("Nadt").innerHTML = "210 u";
            break;
        case 86:
            document.getElementById("PdT-E").innerHTML = "<sup>86<br></sup><b>Rn</b>";
            document.getElementById("Ndt").innerHTML = "Rádon";
            document.getElementById("Edt").innerHTML = "Rn";
            document.getElementById("Adt").innerHTML = "86";
            document.getElementById("Nadt").innerHTML = "222 u";
            break;
        case 87:
            document.getElementById("PdT-E").innerHTML = "<sup>87<br></sup><b>Fr</b>";
            document.getElementById("Ndt").innerHTML = "Frâncio";
            document.getElementById("Edt").innerHTML = "Fr";
            document.getElementById("Adt").innerHTML = "87";
            document.getElementById("Nadt").innerHTML = "223 u";
            break;
        case 88:
            document.getElementById("PdT-E").innerHTML = "<sup>88<br></sup><b>Ra</b>";
            document.getElementById("Ndt").innerHTML = "Rádio";
            document.getElementById("Edt").innerHTML = "Ra";
            document.getElementById("Adt").innerHTML = "88";
            document.getElementById("Nadt").innerHTML = "226 u";
            break;
        case 89:
            document.getElementById("PdT-E").innerHTML = "<sup>89<br></sup><b>Ac</b>";
            document.getElementById("Ndt").innerHTML = "Actínio";
            document.getElementById("Edt").innerHTML = "Ac";
            document.getElementById("Adt").innerHTML = "89";
            document.getElementById("Nadt").innerHTML = "227 u";
            break;
        case 90:
            document.getElementById("PdT-E").innerHTML = "<sup>90<br></sup><b>Th</b>";
            document.getElementById("Ndt").innerHTML = "Tório";
            document.getElementById("Edt").innerHTML = "Th";
            document.getElementById("Adt").innerHTML = "90";
            document.getElementById("Nadt").innerHTML = "232,04 u";
            break;
        case 91:
            document.getElementById("PdT-E").innerHTML = "<sup>91<br></sup><b>Pa</b>";
            document.getElementById("Ndt").innerHTML = "Protactínio";
            document.getElementById("Edt").innerHTML = "Pa";
            document.getElementById("Adt").innerHTML = "91";
            document.getElementById("Nadt").innerHTML = "231,04 u";
            break;
        case 92:
            document.getElementById("PdT-E").innerHTML = "<sup>92<br></sup><b>U</b>";
            document.getElementById("Ndt").innerHTML = "Urânio";
            document.getElementById("Edt").innerHTML = "U";
            document.getElementById("Adt").innerHTML = "92";
            document.getElementById("Nadt").innerHTML = "238,03 u";
            break;
        case 93:
            document.getElementById("PdT-E").innerHTML = "<sup>93<br></sup><b>Np</b>";
            document.getElementById("Ndt").innerHTML = "Neptúnio";
            document.getElementById("Edt").innerHTML = "Np";
            document.getElementById("Adt").innerHTML = "93";
            document.getElementById("Nadt").innerHTML = "237 u";
            break;
        case 94:
            document.getElementById("PdT-E").innerHTML = "<sup>94<br></sup><b>Pu</b>";
            document.getElementById("Ndt").innerHTML = "Plutônio";
            document.getElementById("Edt").innerHTML = "Pu";
            document.getElementById("Adt").innerHTML = "94";
            document.getElementById("Nadt").innerHTML = "244 u";
            break;
        case 95:
            document.getElementById("PdT-E").innerHTML = "<sup>95<br></sup><b>Am</b>";
            document.getElementById("Ndt").innerHTML = "Amerício";
            document.getElementById("Edt").innerHTML = "Am";
            document.getElementById("Adt").innerHTML = "95";
            document.getElementById("Nadt").innerHTML = "243 u";
            break;
        case 96:
            document.getElementById("PdT-E").innerHTML = "<sup>96<br></sup><b>Cm</b>";
            document.getElementById("Ndt").innerHTML = "Cúrio";
            document.getElementById("Edt").innerHTML = "Cm";
            document.getElementById("Adt").innerHTML = "96";
            document.getElementById("Nadt").innerHTML = "247 u";
            break;
        case 97:
            document.getElementById("PdT-E").innerHTML = "<sup>97<br></sup><b>Bk</b>";
            document.getElementById("Ndt").innerHTML = "Berquélio";
            document.getElementById("Edt").innerHTML = "Bk";
            document.getElementById("Adt").innerHTML = "97";
            document.getElementById("Nadt").innerHTML = "247 u";
            break;
        case 98:
            document.getElementById("PdT-E").innerHTML = "<sup>98<br></sup><b>Cf</b>";
            document.getElementById("Ndt").innerHTML = "Califórnio";
            document.getElementById("Edt").innerHTML = "Cf";
            document.getElementById("Adt").innerHTML = "98";
            document.getElementById("Nadt").innerHTML = "251 u";
            break;
        case 99:
            document.getElementById("PdT-E").innerHTML = "<sup>99<br></sup><b>Es</b>";
            document.getElementById("Ndt").innerHTML = "Einstênio";
            document.getElementById("Edt").innerHTML = "Es";
            document.getElementById("Adt").innerHTML = "99";
            document.getElementById("Nadt").innerHTML = "252 u";
            break;
        case 100:
            document.getElementById("PdT-E").innerHTML = "<sup>100<br></sup><b>Fm</b>";
            document.getElementById("Ndt").innerHTML = "Férmio";
            document.getElementById("Edt").innerHTML = "Fm";
            document.getElementById("Adt").innerHTML = "100";
            document.getElementById("Nadt").innerHTML = "257 u";
            break;
        case 101:
            document.getElementById("PdT-E").innerHTML = "<sup>101<br></sup><b>Md</b>";
            document.getElementById("Ndt").innerHTML = "Mendelévio";
            document.getElementById("Edt").innerHTML = "Md";
            document.getElementById("Adt").innerHTML = "101";
            document.getElementById("Nadt").innerHTML = "258 u";
            break;
        case 102:
            document.getElementById("PdT-E").innerHTML = "<sup>102<br></sup><b>No</b>";
            document.getElementById("Ndt").innerHTML = "Nobélio";
            document.getElementById("Edt").innerHTML = "No";
            document.getElementById("Adt").innerHTML = "102";
            document.getElementById("Nadt").innerHTML = "259 u";
            break;
        case 103:
            document.getElementById("PdT-E").innerHTML = "<sup>103<br></sup><b>Lr</b>";
            document.getElementById("Ndt").innerHTML = "Lauróncio";
            document.getElementById("Edt").innerHTML = "Lr";
            document.getElementById("Adt").innerHTML = "103";
            document.getElementById("Nadt").innerHTML = "266 u";
            break;
        case 104:
            document.getElementById("PdT-E").innerHTML = "<sup>104<br></sup><b>Rf</b>";
            document.getElementById("Ndt").innerHTML = "Rutherfórdio";
            document.getElementById("Edt").innerHTML = "Rf";
            document.getElementById("Adt").innerHTML = "104";
            document.getElementById("Nadt").innerHTML = "267 u";
            break;
        case 105:
            document.getElementById("PdT-E").innerHTML = "<sup>105<br></sup><b>Db</b>";
            document.getElementById("Ndt").innerHTML = "Dúbnio";
            document.getElementById("Edt").innerHTML = "Db";
            document.getElementById("Adt").innerHTML = "105";
            document.getElementById("Nadt").innerHTML = "268 u";
            break;
        case 106:
            document.getElementById("PdT-E").innerHTML = "<sup>106<br></sup><b>Sg</b>";
            document.getElementById("Ndt").innerHTML = "Seabórgio";
            document.getElementById("Edt").innerHTML = "Sg";
            document.getElementById("Adt").innerHTML = "106";
            document.getElementById("Nadt").innerHTML = "269 u";
            break;
        case 107:
            document.getElementById("PdT-E").innerHTML = "<sup>107<br></sup><b>Bh</b>";
            document.getElementById("Ndt").innerHTML = "Bóhrio";
            document.getElementById("Edt").innerHTML = "Bh";
            document.getElementById("Adt").innerHTML = "107";
            document.getElementById("Nadt").innerHTML = "270 u";
            break;
        case 108:
            document.getElementById("PdT-E").innerHTML = "<sup>108<br></sup><b>Hs</b>";
            document.getElementById("Ndt").innerHTML = "Hássio";
            document.getElementById("Edt").innerHTML = "Hs";
            document.getElementById("Adt").innerHTML = "108";
            document.getElementById("Nadt").innerHTML = "277 u";
            break;
        case 109:
            document.getElementById("PdT-E").innerHTML = "<sup>109<br></sup><b>Mt</b>";
            document.getElementById("Ndt").innerHTML = "Meitnério";
            document.getElementById("Edt").innerHTML = "Mt";
            document.getElementById("Adt").innerHTML = "109";
            document.getElementById("Nadt").innerHTML = "278 u";
            break;
        case 110:
            document.getElementById("PdT-E").innerHTML = "<sup>110<br></sup><b>Ds</b>";
            document.getElementById("Ndt").innerHTML = "Darmstácio";
            document.getElementById("Edt").innerHTML = "Ds";
            document.getElementById("Adt").innerHTML = "110";
            document.getElementById("Nadt").innerHTML = "281 u";
            break;
        case 111:
            document.getElementById("PdT-E").innerHTML = "<sup>111<br></sup><b>Rg</b>";
            document.getElementById("Ndt").innerHTML = "Roentgênio";
            document.getElementById("Edt").innerHTML = "Rg";
            document.getElementById("Adt").innerHTML = "111";
            document.getElementById("Nadt").innerHTML = "282 u";
            break;
        case 112:
            document.getElementById("PdT-E").innerHTML = "<sup>112<br></sup><b>Cn</b>";
            document.getElementById("Ndt").innerHTML = "Copernício";
            document.getElementById("Edt").innerHTML = "Cn";
            document.getElementById("Adt").innerHTML = "112";
            document.getElementById("Nadt").innerHTML = "285 u";
            break;
        case 113:
            document.getElementById("PdT-E").innerHTML = "<sup>113<br></sup><b>Nh</b>";
            document.getElementById("Ndt").innerHTML = "Nihonium";
            document.getElementById("Edt").innerHTML = "Nh";
            document.getElementById("Adt").innerHTML = "113";
            document.getElementById("Nadt").innerHTML = "286 u";
            break;
        case 114:
            document.getElementById("PdT-E").innerHTML = "<sup>114<br></sup><b>Fl</b>";
            document.getElementById("Ndt").innerHTML = "Fleróvio";
            document.getElementById("Edt").innerHTML = "Fl";
            document.getElementById("Adt").innerHTML = "114";
            document.getElementById("Nadt").innerHTML = "289 u";
            break;
        case 115:
            document.getElementById("PdT-E").innerHTML = "<sup>115<br></sup><b>Mc</b>";
            document.getElementById("Ndt").innerHTML = "Moscovium";
            document.getElementById("Edt").innerHTML = "Mc";
            document.getElementById("Adt").innerHTML = "115";
            document.getElementById("Nadt").innerHTML = "290 u";
            break;
        case 116:
            document.getElementById("PdT-E").innerHTML = "<sup>116<br></sup><b>Lv</b>";
            document.getElementById("Ndt").innerHTML = "Livermónio";
            document.getElementById("Edt").innerHTML = "Lv";
            document.getElementById("Adt").innerHTML = "116";
            document.getElementById("Nadt").innerHTML = "293 u";
            break;
        case 117:
            document.getElementById("PdT-E").innerHTML = "<sup>117<br></sup><b>Ts</b>";
            document.getElementById("Ndt").innerHTML = "Tennessine";
            document.getElementById("Edt").innerHTML = "Ts";
            document.getElementById("Adt").innerHTML = "117";
            document.getElementById("Nadt").innerHTML = "294 u";
            break;
        case 118:
            document.getElementById("PdT-E").innerHTML = "<sup>118<br></sup><b>Og</b>";
            document.getElementById("Ndt").innerHTML = "Oganesson";
            document.getElementById("Edt").innerHTML = "Og";
            document.getElementById("Adt").innerHTML = "118";
            document.getElementById("Nadt").innerHTML = "294 u";
            break;
        default:
            document.getElementById("PdT-E").innerHTML = "<sup>1<br></sup><b>H</b>";
            document.getElementById("Ndt").innerHTML = "Hidrogenio";
            document.getElementById("Edt").innerHTML = "H";
            document.getElementById("Adt").innerHTML = "1";
            document.getElementById("Nadt").innerHTML = "1 u";
            break;
    }
    //Nm = 1,MA = 2,SM = 3,Om = 4,Lt = 5,Gn = 6,Ma-t = 7,Hl = 8,Mdt = 9,Act = 10
    switch(y)
    {
        case 1: document.getElementById("PdT-E").className = "col-md-2 ml-4 align-self-start Nm-M PdT-ET text-center";break;
        case 2: document.getElementById("PdT-E").className = "col-md-2 ml-4 align-self-start MA-M PdT-ET text-center";break;
        case 3: document.getElementById("PdT-E").className = "col-md-2 ml-4 align-self-start SM-M PdT-ET text-center";break;
        case 4: document.getElementById("PdT-E").className = "col-md-2 ml-4 align-self-start Om-M PdT-ET text-center";break;
        case 5: document.getElementById("PdT-E").className = "col-md-2 ml-4 align-self-start Lt-M PdT-ET text-center";break;
        case 6: document.getElementById("PdT-E").className = "col-md-2 ml-4 align-self-start Gn-M PdT-ET text-center";break;
        case 7: document.getElementById("PdT-E").className = "col-md-2 ml-4 align-self-start Ma-t-M PdT-ET text-center";break;
        case 8: document.getElementById("PdT-E").className = "col-md-2 ml-4 align-self-start Hl-M PdT-ET text-center";break;
        case 9: document.getElementById("PdT-E").className = "col-md-2 ml-4 align-self-start Mdt-M PdT-ET text-center";break;
        case 10: document.getElementById("PdT-E").className = "col-md-2 ml-4 align-self-start Act-M PdT-ET text-center";break;
        default: document.getElementById("PdT-E").className = "col-md-2 ml-4 align-self-start Nm-M PdT-ET text-center";break;
    }
}