$(document).ready(function(){

  $(".row").animate(
      {opacity:"1"},1000);

  $(".bulbasaur").animate(
      {opacity:"1"},1200);
  $(".blastoise").animate(
      {opacity:"1"},1600);
  $(".wartortle").animate(
      {opacity:"1"},2000);
  $(".ivysaur").animate(
      {opacity:"1"},2600);
        $(".charizard").animate(
            {opacity:"1"},1400);
        $(".charmander").animate(
            {opacity:"1"},1800);
        $(".squirtle").animate(
            {opacity:"1"},2400);
        $(".venusaur").animate(
            {opacity:"1"},2800);

      $(".result1").animate(
          {top:"200px",},1000);
      $(".result2").animate(
          {top:"310px",},1500);
      $(".result3").animate(
          {top:"510px",},2000);
//-----------------------------------------------------------------------------

    $(".1one").click(function(){
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(data) {
          if (this.readyState == 4 && this.status == 200) {
            var request = new XMLHttpRequest();
              request.open('GET', "https://pokeapi.co/api/v2/pokemon/1/", true);
              request.responseType ='JSON';
              request.send();


              $(".result1").html(XMLHttpRequest.responseText.data.name);
          }
        };
        xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/1/", true);
        xhttp.send();



    /*  var request = new XMLHttpRequest();
      request.open('GET', "bulb.json", true);
      request.responseType ='JSON';
      request.send();

      $(".result1").html(request);
      $(".result1").html(XMLHttpRequest.responseText.name);
*/

      });

});
