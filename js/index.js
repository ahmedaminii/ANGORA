$(function(){
    
$(window).on("scroll",function(){
    
   var scl=$(window).scrollTop();
 
    
    if(scl >10){
        
        
    $('.navbar').css('backgroundColor','white'); 
    $('.nav-link').css('color','black');   
    $('.logee').attr('src','imges/logo-red.png')
    $('.icon i').css('color','black'); 
    $('.navbar-toggler i').css('color','red');    
    }else{
        
        $('.navbar').css('backgroundColor',' rgba(0,0,0,0.4)'); 
    $('.nav-link').css('color','white');   
    $('.logee').attr('src','imges/logo-white.png');  
         $('.icon i').css('color',' white');    
   $('.lone').css('color','blueviolet');
    $('.navbar-toggler i').css('color','white');    
    }
    
    
})    
    
    
    
    
})