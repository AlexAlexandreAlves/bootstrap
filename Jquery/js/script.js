$(document).ready(function () {
    //Seleção por elemento
    //$('button').hide();

    //Seleção por ID
    //$('#spanHide').hide();

    //Seleção por Classe
    //$('.text-center').hide();

    //Seleção por Condição
    //$("span[id!='spanHide']").hide();
    //$("div[class!='container']").hide();

    //Seleção por Filho
    //$('section > div > div > h1').hide();


    /*$('button').click(function(){
        $('#spanHide').hide();

    });

    //Evento Click
    /* $('p').click(function(){
         alert('Parágrafo');
 
     });

    //Evento Duplo Click 
    /*
    $('p').dbclick(function(){
        alert('Parágrafo');

    }); 

    //Evento Mouse Enter
    /*
    $('p').mouseenter(function(){
        alert('Parágrafo');

    });

    //Método para modificar HTML
    //$('span').html("<p>Mudei para novo texto</p>");

    //Método para modificar o texto do elemento;
    //$('span').text("Mudei o texto");

    //Método para modificar o valor de um elemento;
    //$("input[type='text']").val('Olá');

    //Evento aparecer e sumir
    /* $('#botao1').click(function(){
         $('.card').hide(1000);
         
     $('#botao2').click(function(){
         $('.card').show(1000);
 
     });
 
     });
    /*Evento aparecer e sumir com Fade
    $('#botao1').click(function(){
        $('.card').fadeIn(800);
        
    $('#botao2').click(function(){
        $('.card').fadeOut(800);

    });

    });

    /*Evento aparecer e sumir com Toggle
    $('#botao1').click(function(){
        $('.card').fadeToggle(2000);
        
    $('#botao2').click(function(){
        $('.card').fadeToggle(2000);

    });

    });
    /*Evento aparecer e sumir com Toggle
    $('#botao1').click(function(){
        $('.card').fadeTo(2000, 0.15);
        
    $('#botao2').click(function(){
        $('.card').fadeTo(2000, 0.15);

    });

    });
    /*
    $('.bd-placeholder-img').mouseover(function(){
        $(this).fadeTo('slow', 0.3);
    });

    $('.bd-placeholder-img').mouseleave(function(){
        $(this).fadeTo('slow', 1);
    });

    $('.bd-placeholder-img').mouseover(function () {
        $(this).animate({
            left: '250px',
            opacity: '0.5',
            width: '150px',
            height: '150px'

        });
    });

    $('.bd-placeholder-img').mouseleave(function () {
        $(this).animate({
            width: '420px',
            height: '225px'

        });
    });
    */
    $('#botao1').click(function () {
        $('span').slideDown();
    });
    $('#botao2').click(function () {
        $('span').slideUp();


    });
});


