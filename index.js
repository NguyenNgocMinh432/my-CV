$(document).ready(function(){
    $(".toggle").click(function(){
        $(".header__mobile").slideToggle();
    })
    

})

// $(document).ready(function(){
//     $(window).scroll(function(event) {

//         var pos_body = $('html, body').scrollTop();
//         console.log(pos_body);

       
       
//     })
// })
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
        // console.log(pos_body);

        if(pos_body > 0){
            $(".header").addClass("scroll");
        
        }
        else{
            $(".header").removeClass("scroll");
        }


        if(pos_body > 2500){
            $(".list__item").addClass("animate");
        
        }
        else{
            $(".list__item").removeClass("animate");
        }

        if(pos_body > 1450){
            $(".portfolio__card--left").addClass("animate__card");
        
        }
        else{
            $(".portfolio__card--left").removeClass("animate__card");
        }

        

       
    })
})
$(document).ready(function(){
    $(window).scroll(function(event) {

        var pos_body = $('html, body').scrollTop();
        // console.log(pos_body);

        if(pos_body > 600){
            $(".back__to--top i").show();
        }else{
            $(".back__to--top  i").hide();
        }   
    })
    $(".back__to--top i").click(function(event) {
        $('html , body').animate(
            {
                scrollTop: 0
            },
            1000
           
        );
        !1
    })
})