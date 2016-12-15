function getTimeRemaining(e){var a=Date.parse(e)-Date.parse(new Date),r=Math.floor(a/1e3%60),t=Math.floor(a/1e3/60%60),i=Math.floor(a/36e5%24),n=Math.floor(a/864e5)
return{total:a,days:n,hours:i,minutes:t,seconds:r}}function initializeClock(e,a){function r(){var e=getTimeRemaining(a)
i.innerHTML=e.days,n.innerHTML=("0"+e.hours).slice(-2),o.innerHTML=("0"+e.minutes).slice(-2),l.innerHTML=("0"+e.seconds).slice(-2),e.total<=0&&clearInterval(s)}var t=document.getElementById(e),i=t.querySelector(".days"),n=t.querySelector(".hours"),o=t.querySelector(".minutes"),l=t.querySelector(".seconds")
r()
var s=setInterval(r,1e3)}!function(e){"use strict"
e("a.page-scroll").bind("click",function(a){var r=e(this)
e("html, body").stop().animate({scrollTop:e(r.attr("href")).offset().top-50},1250,"easeInOutExpo"),a.preventDefault()}),e("body").scrollspy({target:".navbar-fixed-top",offset:51}),e(".navbar-collapse ul li a").click(function(){e(".navbar-toggle:visible").click()}),e("#mainNav").affix({offset:{top:100}}),window.sr=ScrollReveal(),sr.reveal(".sr-icons",{duration:600,scale:.3,distance:"0px"},200),sr.reveal(".sr-button",{duration:1e3,delay:200}),sr.reveal(".sr-contact",{duration:600,scale:.3,distance:"0px"},300),e(".popup-gallery").magnificPopup({delegate:"a",type:"image",tLoading:"Loading image #%curr%...",mainClass:"mfp-img-mobile",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{tError:'<a href="%url%">The image #%curr%</a> could not be loaded.'}})}(jQuery)
var deadline=new Date(Date.parse("December 25, 2016"))
initializeClock("clockdiv",deadline)
