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
// $(document).ready(function(){
//     $(window).scroll(function(event) {

//         var pos_body = $('html, body').scrollTop();
//         past = $(this).attr('href');

//         position =$(past).offset().top;

//         if(pos_body ===position){
//             $("list__item").addClass("animate");
//         }
//     })
// })