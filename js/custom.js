/* HTML document is loaded. DOM is ready.
-------------------------------------------*/
$(function(){

    /* start typed element */
    //http://stackoverflow.com/questions/24874797/select-div-title-text-and-make-array-with-jquery
    var subElementArray = $.map($('.sub-element'), function(el) { return $(el).text(); });    
    $(".element").typed({
        strings: subElementArray,
        typeSpeed: 30,
        contentType: 'html',
        showCursor: false,
        loop: true,
        loopCount: true,
    });
    /* end typed element */

    /* Smooth scroll and Scroll spy (https://github.com/ChrisWojcik/single-page-nav)    
    ---------------------------------------------------------------------------------*/ 
    $('.templatemo-nav').singlePageNav({
        offset: $(".templatemo-nav").height(),
        filter: ':not(.external)',
        updateHash: false
    });

    /* start navigation top js */
    $(window).scroll(function(){
        if($(this).scrollTop()>58){
            $(".templatemo-nav").addClass("sticky");
        }
        else{
            $(".templatemo-nav").removeClass("sticky");
        }
    });
    
    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });
    /* end navigation top js */

    $('body').bind('touchstart', function() {});

    /* wow
    -----------------*/
    new WOW().init();
});

/* start preloader */
$(window).load(function(){
	$('.preloader').fadeOut(1000); // set duration in brackets    
});
/* end preloader */
$(document).ready(function(){
    
    var clickEvent = false;
    $('#myCarousel').carousel({
        interval:  60000    
    }).on('click', '.list-group li', function() {
            clickEvent = true;
            $('.list-group li').removeClass('active');
            $(this).addClass('active');     
    }).on('slid.bs.carousel', function(e) {
        if(!clickEvent) {
            var count = $('.list-group').children().length -1;
            var current = $('.list-group li.active');
            current.removeClass('active').next().addClass('active');
            var id = parseInt(current.data('slide-to'));
            if(count == id) {
                $('.list-group li').first().addClass('active'); 
            }
        }
        clickEvent = false;
    });
})

$(window).load(function() {
    var boxheight = $('#myCarousel .carousel-inner').innerHeight();
    var itemlength = $('#myCarousel .item').length;
    var triggerheight = Math.round(boxheight/itemlength+1);
    $('#myCarousel .list-group-item').outerHeight(triggerheight);
    
    let widthImg = $('#myCarousel .item img').css("width");
    $('#myCarousel .item .carousel-caption').css({"width" : widthImg});
});


window.onresize = function () 
{
    /// Alterando a altura da lista de notícias para acompanhar a altura da imagem do carrosel de notícias
    
    var boxheight = $('#myCarousel .carousel-inner').innerHeight(); // Capturando o tamanho do carrosel
    
    var itemlength = $('#myCarousel .item').length; // Capturando a quantidade de notícias que existem na lista

    var triggerheight = Math.round(boxheight/itemlength+1); // Calculando a altura de cada li da lista de notícias lateral 
    
    $('#myCarousel .list-group-item').outerHeight(triggerheight); // Setando o tamanho de cada li da lista de notícias lateral para no total ficarem do tamanho da lista 

    /// Alterando o comprimento da descrição da notícia para acompanhar o comprimento da imagem do carrosel de notícias
    
    let widthImg = $('#myCarousel .item img').css("width"); // Capturando comprimento da imagem da notícia
    
    $('#myCarousel .item .carousel-caption').css({"width" : widthImg}); // Setando comprimento da descrição da notícia com o mesmo comprimento da imagem
};

function myfacebook(social){
  
    if(social =='facebook'){
        window.open("https://www.facebook.com/BioMEoficial/");    
    }else if(social=='twitter'){
        window.open("https://twitter.com/bioinfo_UFRN");  
    }else if(social=='linkedin'){
        window.open("https://www.linkedin.com/in/biome-ufrn-141249143/"); 
    }
    
};
