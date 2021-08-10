let nu = new Date().getTime();
let nedrakningsdatum;
let cykler = 0;
let argument = window.location.href.indexOf("?") === -1 ? "" : window.location.href.substring(window.location.href.indexOf("?lov=") + 5);

beraknaNedrakningsdatum();
rakna();
setInterval(rakna, 1000);

function beraknaNedrakningsdatum() {
   if(hostlovSlut - nu > 0 || argument === "host") {
      nedrakningsdatum = hostlov;
      document.title = "Höstlovsnedräknaren";
      document.getElementById("nedrakning").classList.add("host");
      document.getElementsByTagName("body")[0].classList.add("hostBakgrund");
   }
   else if(jullovSlut - nu > 0 || argument === "jul") {
      nedrakningsdatum = jullov;
      document.title = "Jullovsnedräknaren";
      document.getElementById("nedrakning").classList.add("jul");
      document.getElementsByTagName("body")[0].classList.add("julBakgrund");
   }
   else if(sportlovSlut - nu > 0 || argument === "sport") {
      nedrakningsdatum = sportlov;
      document.title = "Sportlovsnedräknaren";
      document.getElementById("nedrakning").classList.add("sport");
      document.getElementsByTagName("body")[0].classList.add("sportBakgrund");
   }
   else if(pasklovSlut - nu > 0 || argument === "pask") {
      nedrakningsdatum = pasklov;
      document.title = "Påsklovsnedräknaren";
      document.getElementById("nedrakning").classList.add("pask");
      document.getElementsByTagName("body")[0].classList.add("paskBakgrund");
   }
   else if(sommarlovSlut - nu > 0 || argument === "sommar") {
      nedrakningsdatum = sommarlov;
      document.title = "Sommarlovsnedräknaren";
      document.getElementById("nedrakning").classList.add("sommar");
      document.getElementsByTagName("body")[0].classList.add("sommarBakgrund");
   },
   else {
      document.write("Inget lov inläst.");
   }
}
function rakna() {
   nu = new Date().getTime();
   let avstand = nedrakningsdatum - nu;
   var dagar = Math.floor(avstand / (1000 * 60 * 60 * 24));
   var timmar = Math.floor((avstand % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minuter = Math.floor((avstand % (1000 * 60 * 60)) / (1000 * 60));
   var sekunder = Math.floor((avstand % (1000 * 60)) / 1000);
   
   if(avstand < 0) {
      cykler++;
      document.getElementById("nedrakning").innerHTML = "Nu är det lov!";

   }
   else {
      document.getElementById("nedrakning").innerHTML = dagar + "d " + timmar + "h " + minuter + "m " + sekunder + "s";
   }
}
