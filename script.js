//alert("test");


$(document).ready(function() {
  $('a[class*=header]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;
         $(this).click(function() {
           $('html, body').animate({scrollTop: targetOffset}, 1500);
           return false;
         });
      }
    }
  });
});

$('div[class*=circle]').hover(function(){
    $(this).css("border-color", " white");
    
    
}, function(){
    $(this).css("border-color", "black");
});
$('body').scroll(function() { 
    $('#parentdiv').animate({top:$(this).scrollTop()},100,"linear");
})

$(window).scroll(function(){
  if($(window).scrollTop() > 650){
      $("#parentdiv").css("visibility","visible"),3000;
  }
});
$(window).scroll(function(){
if($(window).scrollTop() < 650){
  $("#parentdiv").css("visibility","hidden"),3000;
}
});



$(document).ready(function() {
  $('a[class*=div]').each(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    && location.hostname == this.hostname
    && this.hash.replace(/#/,'') ) {
      var $targetId = $(this.hash), $targetAnchor = $('[name=' + this.hash.slice(1) +']');
      var $target = $targetId.length ? $targetId : $targetAnchor.length ? $targetAnchor : false;
       if ($target) {
         var targetOffset = $target.offset().top;
         $(this).click(function() {
           $('html, body').animate({scrollTop: targetOffset}, 1500);
           return false;
         });
      }
    }
  });
});
//function showMore(){
    //removes the link
  //  document.getElementById('link').parentElement.removeChild('link');
    //shows the #more
    //document.getElementById('more').style.display = "block";
//}

//var current = "less";
//var seemore=document.getElementsByClassName("seemore");
//function dropdown(){
   // if(status==less){
        
   // },else if(status==show){
        
  //  }
    
//};
//seemore.onclick(){
  //  alert("test");
//};


//var status = "less";

//function toggleText()
//{
  //  var text="Here is some text that I want added to the HTML file";

    //if (status == "less") {
      //  document.getElementsByClassName("context").innerHTML=text;
        //document.getElementById("showmore").innerText = "See Less";
        //status = "more";
    //} else if (status == "more") {
      //  document.getElementById("textArea").innerHTML = "";
        //document.getElementById("toggleButton").innerText = "See More";
        //status = "less"
    //}
//}

