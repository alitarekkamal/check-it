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

        var pokeURL = "https://pokeapi.co/api/v2/pokemon/1/";

        $.getJSON(pokeURL, function(data){
            //console.log(data);
            //console.log(JSON.stringify(data, null, "  "));

    /*********** New Stuff ****************************/
            var pokeID = data.national_id;
            var pokeName = data.name;
            var pokeType1 = data.types[0].name;
            if (data.types.length == 2) {
                var pokeType2 = data.types[1].name;
            }
            else var pokeType2 = null;
            $(".result1").append(pokeName);
            console.log("Number: ", pokeID);
            console.log("Name: ", pokeName);
            console.log("Type 1: ", pokeType1);
            console.log("Type 2: ", pokeType2);
    /*********** New Stuff ****************************/
        });
  });





});
