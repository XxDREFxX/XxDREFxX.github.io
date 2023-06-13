function selection(){
    var select = document.getElementById("cars");
    var value = select.value;
    
    switch (value){
        case "all":
            var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    divs[i].style.display = "block";
                }
            break

            case "volkswagen":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("volkswagen")) divs[i].style.display = "block";
                    else divs[i].style.display = "none";
                }
                break

            case "mercedes":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("mercedes")) divs[i].style.display = "block";
                    else divs[i].style.display = "none";
                }
                break


            case "audi":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("audi")) divs[i].style.display = "block";
                    else divs[i].style.display = "none";
                }
                break

            case "volvo":
                var divs = document.getElementsByClassName("cars");
                for (i = 0; i < divs.length; i++){
                    if (divs[i].classList.contains("volvo")) divs[i].style.display = "block";
                    else divs[i].style.display = "none";
                }
                break

         }      
}
function press(elem){
 var frame = document.getElementById(elem);
 var divs = document.getElementsByClassName("cars");
  for(i = 0; i < divs.length; i++){
    var div = divs[i]
    div.style.display = "none";
  }
  frame.style.display = "flex"
  
  
}
function exit(){
 var frames = document.getElementsByClassName("okno");
 var divs = document.getElementsByClassName("cars");
 for(i = 0; i < divs.length; i++){
    divs[i].style.display = "flex"
 }
 for(i = 0; i < frames.length; i++){
    frames[i].style.display = "none"
 }
}
function buy(elem){
    
    var frame = document.getElementById(elem);
    var date = new Date()
    var opis = frame.getElementsByClassName('opis')
    var dick = opis[0].getElementsByClassName('dane')
    var dane = dick[0]
    date.setDate(date.getDate() + 14)
    alert("Gotowe! twoja przesyłka zostanie dostarczona: " + date)
    var imie = dane.getElementById('imie')
    var nazwisko = dane.getElementById('nazwisko')
    
   
    if (imie.value == null || imie.value == ""){
        alert("proszę wypełnić imię")
        return
    }
    if (nazwisko.value == null || nazwisko.value == ""){
        alert("prosze wypełnic nazwisko")
        return
    }
    
}
