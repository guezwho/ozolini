$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

	//fullpage
	$('#fullpage').fullpage({
        //Navigation
        menu: '#menu',
        lockAnchors: false,
        anchors:['title', 'service', 'example', 'order'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Ozolini', 'Услуги', 'Примеры', 'Заказать'],
        showActiveTooltip: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 700,
        autoScrolling: true,
        fitToSection: true,
        fitToSectionDelay: 1000,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: true,
        resize : false,
        sectionsColor : ['#fff'],
        //paddingTop: '2px',
        //paddingBottom: '2px',
        fixedElements: '#header, .footer',
        responsiveWidth: 0,
        responsiveHeight: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){},
    });

    //owl
    $(".slider").owlCarousel( {
        items: 1, 
        autoplay: true,
        autoplayTimeout: 5000, //со слайда на слайд
        autoplaySpeed: 1000, //анимация перемокти
        dots: true,
        autoplayHoverPause: true,
        lazyLoad : false,
        loop: true,
        dotsSpeed: 500,
    });

    //menu hover
    $(".a4").mouseover(function() {
        $(".a4 i.fa.fa-square-o").hide();
        $("#second_fa").show();
    }); 

     $(".a4").mouseout(function() {
        $("#second_fa").hide();
        $(".a4 i.fa.fa-square-o").show();
    }); 

    //forms
    $(function() {

        var th = $("#form");

        function mainform() {
            $.ajax({
                type: "POST",
                url: "mail2.php", 
                data: th.serialize()
            }).done(function() {
                //$('#submit_done').fadeIn().delay(4000).fadeOut(300);
                alert("Спасибо за заявку!");
                setTimeout(function() {
                    th.trigger("reset");
                }, 1000);
            });
            return false;
        }

        if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
            th.submit(function() {
                if ($("#f_name").val() == "" || $("#f_mail").val() == "" ||  $("#f_comment").val() == "") {
                    alert("Пожалуйста, заполните необходимые поля!");
                    return false;
                }
                else {
                    mainform();
                }
            }); 
        }
        else {
            th.submit(mainform);
        }
    });

    //animation
    $("h1").animated("fadeInLeft");


    //function full_page() {
        //if 
    //}

   
});


//var secStyle = document.querySelectorAll(".title");
//secStyle.style.color = "red";


  //document.getElementsByClassName('.title').style.color = "red";



    

