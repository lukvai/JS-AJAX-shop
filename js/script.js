var goods = new XMLHttpRequest();

goods.onreadystatechange = function(){
  if(goods.readyState === 4){
  var response = JSON.parse(goods.responseText);
  document.querySelector("#goodsSelect").onchange = function(){
    var choise = document.querySelector("#goodsSelect").value;
    var getChoise = response[choise];
    var output = "";
     if(choise === "all"){
      for(key in response){
        for(keyValue in response[key]){
        output += "<div class='col-md-4'>";
        output += "<div class='thumbnail'>";
        output += "<div class='photo'> <img src='" + response[key][keyValue]['picture'] + "'></div>"; 
        output += "<p>" + "Product: " + response[key][keyValue]['name'] + "</p>";
        output += "<p>" + "Price: " + response[key][keyValue]['price'] + '&euro;' + "</p>";
        output += "</div>";
        output += "</div>";
        }
      }
     }else{
      for(i = 0; i<getChoise.length; i++){
        output += "<div class='col-md-4'>";
        output += "<div class='thumbnail'>";
        output += "<div class='photo'> <img src='" + getChoise[i].picture + "'></div>" 
        output += "<p>" + "Product: " + getChoise[i].name + "</p>";
        output += "<p>" + "Price: " + getChoise[i].price + '&euro;' + "</p>";
        output += "</div>";
        output += "</div>"; 
      }
    }
    document.querySelector("#sarasas").innerHTML = output;
  }
  //---
  document.querySelector("#searchProduct").onclick = function(){
    var search_Input = document.querySelector('#searchProductInput').value;
    var choise = document.querySelector("#goodsSelect").value;
    var output = "";
   for(key in response){
        for(keyValue in response[key]){
        if((search_Input === response[key][keyValue]['name'] && key === choise) || (search_Input === response[key][keyValue]['name'] && choise === "all")){
          output += "<div class='col-md-4'>";
          output += "<div class='thumbnail'>";
          output += "<div class='photo'> <img src='" + response[key][keyValue]['picture'] + "'></div>"; 
          output += "<p>" + "Product: " + response[key][keyValue]['name'] + "</p>";
          output += "<p>" + "Price: " + response[key][keyValue]['price'] + '&euro;' + "</p>";
          output += "</div>";
          output += "</div>";
        }else if((search_Input === "") /*!(response[key][keyValue]['name'] === search_Input && key != choise) /*|| (search_Input !== response[key][keyValue]['name'] && choise === "all")*/){
          output += "<div class='col-md-4'>";
          output += "<div class='thumbnail'>";
          output += "<div class='photo'> <img src='" + response[key][keyValue]['picture'] + "'></div>";
          output += "<p>" + "Product: " + response[key][keyValue]['name'] + "</p>";
          output += "<p>" + "Price: " + response[key][keyValue]['price'] + '&euro;' + "</p>";
          output += "</div>";
          output += "</div>";
        }
      }
    document.querySelector("#sarasas").innerHTML = output;
  }
}
  // ---
  }
} 

goods.open('GET', 'duomenys/goods.json');
goods.send();
