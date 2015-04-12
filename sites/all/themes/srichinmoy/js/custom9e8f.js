jQuery(function($){
$(document).ready(function() {


 set3ColHeights =function() {    
         theight = Math.max($(this).height(), $(this).prev().height(), $(this).prev().prev().height() );
         $(this).css('min-height', theight + 'px');
         $(this).prev().css('min-height', theight + 'px');
         $(this).prev().prev().css('min-height', theight + 'px');  
    };  
    
  setHeights = function() {
       $('#front-featured-inside .widget-area:nth-child(3n)').css('min-height', '0px'); 
        
       if ( $( window ).width() > 650 ) {
         $('#front-featured-inside .widget-area:nth-child(3n)').each(set3ColHeights);
       }  
  }  
  
  setHeights();
  $( window ).resize( setHeights ); 

});  }); /* Double brackets in order to namespace $ */

