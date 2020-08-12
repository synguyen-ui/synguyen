$(document).ready(function () {
    $('.contact').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop:1800
        },'slow')
        
    });
    $('.por').click(function (e) { 
        e.preventDefault();
        $('html').animate({
            scrollTop:400
        },'slow')
        
    });

    $('.nut-p-1').click(function (e) { 
        e.preventDefault();
        $('.nd1').removeClass('mot');
        $(this).addClass('mot');
        $('.nut-p').removeClass('deactive');
        $('.nut-i').addClass('deactive');
      
        

    });
    $('.nut-i-1').click(function (e) { 
        e.preventDefault(); 
        $('.nd1').removeClass('mot');
        $(this).addClass('mot');
        $('.nut-i').removeClass('deactive');
        $('.nut-p').addClass('deactive');
    });

    $('.nut-a-1').click(function (e) { 
        e.preventDefault();
        $('.nd1').removeClass('mot');
        $(this).addClass('mot');
        $('.nut-i').removeClass('deactive');
        $('.nut-p').removeClass('deactive');
        
    });

});