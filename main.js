var T=new Array();
var t=setInterval(function(){
    var PA=$("#new").scrollTop();
    var minutes=new Date().getMinutes();
    var seconds = new Date().getSeconds();
    var hour=new Date().getHours();
    if(hour>12)
    {hour-=12;}
$("#time").html(hour+':'+minutes+':'+seconds+'');
$("#time").append('<small>'+'PM'+'</small>');
    if(PA<50){
    $("#pa")}
    else{
    $("#pa")}
    
    var ho=$("#hou").val();
    if(ho.length<3){
     if(parseInt(ho)<13 && parseInt(ho)>=0)
    {  }
    else{
    }}
    
    var mi=$("#min").val();
    if(mi.length<3){
     if(parseInt(mi)<59 && parseInt(mi)>=0){
     var po=$("#m")}
      else{
     var po= $("#m")}}
    
    var se=$("#sec").val();
    if(se.length<3){
    if(parseInt(se)<59 && parseInt(se)>=0){
    var od=$("#s")}
    else{
    var od=$("#s")
    }
    }
var tas=hour>ho?(hour-ho):(ho-hour);
var nim=minutes>mi?(minutes-mi):(mi-minutes);
$("#for").html(tas+'hour'+nim+'minutes');

  if(ho==hour && mi==minutes && se==seconds){
 var x = document.getElementById("music");
 x.play();
  }
},100);


$("document").ready(function(){
$("window").ready(function(){
    $("#new,#hou,#min,#sec,#bu").attr("style","visibility:visible;");
    $("#time").attr("style","visibility:hidden");
    $("#ven,#hy,#text").attr("style","visibility:hidden;");
});
$("#ala").click(function(){
 $("#ven,#hy,#text").attr("style","visibility:visible;");
 $('document').ready(function(){
   $("#hy").click(function(){
      var y=$("#text").val();
      if(y.length<=4){
         var u=y[0]+y[1]+':'+y[2]+y[3]+'';
         let i=parseInt(y[2]+y[3]+'');
         let j=parseInt(y[0]+y[1]+'');
var y=setInterval(function(){
         if(i>0){
             i--;
             if(i==0){
               j--;
               if(j<0){
                  clearInterval(y);
               }
             }      
         }
        else{
            i=59;
        }
  $("#ven").attr("style","visibility:visible;position:absolute;top:30%;left:35%;font-size:29px;font-weight:24;");
    $("#ven").html(j+':'+i+'');
    $("#text").hide();
         },1000);    
      }
   });   
});
$("#time").attr("style","visibility:hidden");
$("#new,#hou,#min,#sec,#bu").attr("style","visibility:hidden");
});

$("#clk").click(function(){
$("#time").attr("style","visibility:visible");
$("#new,#hou,#min,#sec,#bu").attr("style","visibility:hidden")
$("#ven,#hy,#text").attr("style","visibility:hidden;");
});

$("#pho").click(function(){
    $("#new,#hou,#min,#sec,#bu").attr("style","visibility:visible;");
    $("#time").attr("style","visibility:hidden");
    $("#ven,#hy,#text").attr("style","visibility:hidden;");
})
$('#repe').click(function(){
  $("n").attr("style","visibility:visible");
});
$('#dai').click(function(){
  $("f").attr("style","visibility:visible");
})
});