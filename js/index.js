
let sideNav = $(".side-nav");
let sideNavWidth =sideNav.innerWidth();
sideNav.css('left', -sideNavWidth);
$(".open-nav").click(function(){
    sideNav.animate({left: '0px'}, 500 );
});

$(".closebtn").click(function(){
    sideNav.animate({left: -sideNavWidth}, 500 );
});

$(".side-nav a").click(function(){
    
    var sectionId= $(this).attr("href");
    
    var positionOfSection = $(sectionId).offset().top;
    
    $("html , body").animate({scrollTop:positionOfSection},1000);
    
})

$(".one").click(function(){
    $(".one-p").slideToggle();(500);
});

$(".two").click(function(){
    $(".two-p").slideToggle();(500);
});

$(".three").click(function(){
    $(".three-p").slideToggle();(500);
});

$(".four").click(function(){
    $(".four-p").slideToggle();(500);
});

// Count down

$(document).ready(function () {
    countDownn("13 April 2002 12:12:59");
});

function countDownn (eventDateString){
    let eventDate = new Date(eventDateString);
    let eventDateSec = (eventDate.getTime()/1000);
    let currentDate = new Date();
    let currentDatesec = (currentDate.getTime()/1000);
    let timeDifference = eventDateSec-currentDatesec;
    let days = Math.floor(timeDifference / (24 * 60 * 60));
    let hours = Math.floor((timeDifference - (days * (24 * 60 * 60))) / 3600);
    let mins = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600)) / 60);
    let secs = Math.floor((timeDifference - (days * (24 * 60 * 60)) - (hours * 3600) - (mins * 60)))
    $(".days").text(`${days} D`);
    $(".hours").text(`${hours} h`);
    $(".mins").text(`${mins} m`);
    $('.secs').text(`${secs} s`)
    setInterval(function() { countDownn(eventDateString); }, 1000);
    console.log(days + " "+ secs);

}

var max = 100;
$('textarea').keyup(function() {
  var typedLength = $(this).val().length;
  var charactersLeft = max-typedLength;
  if(charactersLeft<=0)
            {
                 $("#chars").text("your available character finished");
                
            }
        else{
        
        $('.characters').text(charactersLeft);
        }
});