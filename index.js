$(document).ready(function(){
    $(".toggle").click(function(){
        $(".header__mobile").slideToggle();
    })
    

})

$(document).ready(function(){
    $(window).scroll(function(event) {

        var pos_body = $('html, body').scrollTop();
        console.log(pos_body);

        if(pos_body > 0){
            $(".header").addClass("scroll");
        
        }
        else{
            $(".header").removeClass("scroll");
        }

       
    })
})
$(document).ready(function(){
   $(".nav__list a").click(function(event){
       event.preventDefault();
        post =$(this).attr('href');
        position=$(post).offset().top;
        $('html, body').animate({scrollTop: position},500);
   })
})

$(document).ready(function(){
    $(window).scroll(function(event) {

        var pos_body = $('html, body').scrollTop();
        console.log(pos_body);

        if(pos_body > 2500){
            $(".list__item").addClass("animate");
        
        }
        else{
            $(".list__item").removeClass("animate");
        }

       
    })
})
$(document).ready(function(){
    $(window).scroll(function(event) {

        var pos_body = $('html, body').scrollTop();
        console.log(pos_body);

        if(pos_body > 1450){
            $(".portfolio__card--left").addClass("animate__card");
        
        }
        else{
            $(".portfolio__card--left").removeClass("animate__card");
        }

       
    })
})