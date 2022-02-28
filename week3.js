$(document).ready(function() {
   $("#one").draggable();
// alert("mememe");
$("#one").hover(function(){
     $("#two").show();
     });

$("#three").click(function(){
      $("#four").toggle();
           });

$("#two").hover(function(){
      $("#one").css("color", "green");
      $("#two").append("...");
            });




   })
