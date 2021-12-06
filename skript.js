const giltligaLov = ["host", "jul", "sport", "pask", "sommar"];
let nu = new Date().getTime();
let nedrakningsdatum; //ställs in beroende senare
let cykler = 0; //för animation, just nu oanvänt
//argument från url
let argument = window.location.href.indexOf("?") === -1 ? "" : window.location.href.substring(window.location.href.indexOf("?lov=") + 5);
let autolov = argument.length === 0;
let typ = ""; //för att göra "Nu är det HÖST/SPORT/JUL/SOMMAR/PÅSKlov"
if(!giltligaLov.includes(argument)) //om argumentet är ogiltligt ska det ignoreras
   autolov = true;

beraknaNedrakningsdatum(); //ställ in grejer, se nedan
rakna();
setInterval(rakna, 1000); //räkna ned varje sekund

/*   STÄLL IN GREJER   */
//Räkna ut vilket lov det räknas ned till, utifrån inställningar eller bara nästa lov
//Ställer också in utseende, nedräkningsdatum mm
function beraknaNedrakningsdatum() {
   if(autolov && hostlovSlut - nu > 0 || argument === "host") {
      nedrakningsdatum = hostlov;
      typ = "höst";
      document.title = "Höstlovsnedräknaren";
      document.getElementById("nedrakning").classList.add("host");
      document.getElementsByTagName("body")[0].classList.add("hostBakgrund");
   }
   else if(autolov && jullovSlut - nu > 0 || argument === "jul") {
      nedrakningsdatum = jullov;
      document.title = "Jullovsnedräknaren";
      document.getElementById("nedrakning").classList.add("jul");
      document.getElementsByTagName("body")[0].classList.add("julBakgrund");
   }
   else if(autolov && sportlovSlut - nu > 0 || argument === "sport") {
      nedrakningsdatum = sportlov;
      document.title = "Sportlovsnedräknaren";
      document.getElementById("nedrakning").classList.add("sport");
      document.getElementsByTagName("body")[0].classList.add("sportBakgrund");
   }
   else if(autolov && pasklovSlut - nu > 0 || argument === "pask") {
      nedrakningsdatum = pasklov;
      document.title = "Påsklovsnedräknaren";
      document.getElementById("nedrakning").classList.add("pask");
      document.getElementsByTagName("body")[0].classList.add("paskBakgrund");
   }
   else if(autolov && sommarlovSlut - nu > 0 || argument === "sommar") {
      nedrakningsdatum = sommarlov;
      document.title = "Sommarlovsnedräknaren";
      document.getElementById("nedrakning").classList.add("sommar");
      document.getElementsByTagName("body")[0].classList.add("sommarBakgrund");
   }
   else {
      document.getElementById("nedrakning").innerHTML = "Inget lov inläst.";
   }
}
function rakna() {
   nu = new Date().getTime();
   let avstand = nedrakningsdatum - nu;
   var dagar = Math.floor(avstand / (1000 * 60 * 60 * 24));
   var timmar = Math.floor((avstand % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minuter = Math.floor((avstand % (1000 * 60 * 60)) / (1000 * 60));
   var sekunder = Math.floor((avstand % (1000 * 60)) / 1000);
   
   //lägg in animation här...
   if(avstand < 0) {
      cykler++;
      document.getElementById("nedrakning").innerHTML = "Nu är det lov!";

   }
   else {
      document.getElementById("nedrakning").innerHTML = dagar + "d " + timmar + "t " + minuter + "m " + sekunder + "s";
   }
}
