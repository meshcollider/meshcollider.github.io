if (!$.support.transition)
    $.fn.transition = $.fn.animate;

$(".arrow-down").click(function(event){
event.preventDefault();
$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1500);
});


//ONE ANIMATION

anim1started = false;

function oneAnim() {
	
	 $("#timeline").delay(0).transition({
            "height": bannerHeight * 3 + "px",
            opacity: 1
        }, 2000, function() {
            $(".age-7").addClass("activated");
        });
	
    anim1started = true;

    $(".one .bg").transition({
        scale: 1.09
    }, 9000);

    $(".one .yellow").transition({
        opacity: 1.00
    }, 250);

    $(".mini-circ-1").css("scale", 1.1);
    $(".mini-circ-1").css("x", -20);

    $(".mini-circ-2").css("scale", 1.1);
    $(".mini-circ-2").css("x", -0);

    $(".one .text").transition({
        scale: 1.00
    }, 4000);

    $(".one .first-line").css("x", "0");

    $(".one .first-line").css("scale", 1.1);
    $(".one .second-line").css("scale", 1.1);

    $(".one .text p.yellow span").transition({
        width: 170
    }, 500);
    $(".one .text p.yellow span").delay(850).transition({
        opacity: 0
    }, 50);
    $(".one .text p.yellow span").transition({
        opacity: 1
    }, 20);
    $(".one .text p.yellow span").transition({
        opacity: 0
    }, 50);
    $(".one .text p.yellow span").transition({
        opacity: 1
    }, 20);

    $(".one .yellow-box").transition({
        opacity: 1,
        scale: 1,
        x: 0
    }, 2100);

    $(".one .peeps").css("scale", 1.1);

    $(".arrow-down").transition({
        opacity: 0
    });

    //YOU THOUGHT
    $(".one .text p.first").delay(250).transition({
        opacity: 1
    });

    $(".one .text p.first span").delay(550).transition({
        width: 259
    }, 500);

    //WAS DEAD?

    $(".one .text p.third").delay(250).transition({
        opacity: 1
    });

    $(".one .text p.third span").delay(550).transition({
        width: 220
    }, 500);

    $(".one").transition({
        opacity: 1,
        scale: 1
    }, 1000, function() {

        $(".one .first-line").delay(1200).transition({
            "scale": 1.0,
            x: 0
        }, 8000);

        $(".one .second-line").delay(1700).transition({
            "scale": 1.0
        }, 6000);

        //SLAVERY

        $(".one .text p.yellow span").delay(1550).transition({
            opacity: 1
        }, 50);
        $(".one .text p.yellow span").transition({
            opacity: 0
        }, 50);
        $(".one .text p.yellow span").transition({
            opacity: 1
        }, 50);
        $(".one .text p.yellow span").transition({
            opacity: 0
        }, 50);
        $(".one .text p.yellow span").transition({
            opacity: 1
        }, 50);

        //PEEPS

        $(".one .peeps").delay(1400).transition({
            "scale": 1,
            y: 0
        }, 10000);

        $(".one .counter").delay(3400).transition({
            opacity: 1
        }, 2500);

        $(".one .peeps  .line-1 img").delay(0).each(function(index) {
            $(this).delay(50 * index).animate({
                opacity: 1,
                top: 0
            }, 1000);
        });

        $(".one .peeps  .line-2 img").delay(500).each(function(index) {
            $(this).delay(50 * index).transition({
                opacity: 1,
                top: 0
            }, 1000);
        });

        $(".one .peeps  .line-3 img").delay(1000).each(function(index) {
            $(this).delay(50 * index).transition({
                opacity: 1,
                top: 0
            }, 1000);
        });

        //THERE ARE MORE...

        $(".one .text p.line2b").delay(100).transition({
            width: 740,
            opacity: 1
        }, 700);
        $(".one .text p.line2b span").delay(350).transition({
            width: 740
        }, 700);

    });

}

//TWO Anim 

anim2started = false;

function twoAnim() {

    anim2started = true;

    $(".two .text").transition({
        scale: 1.00
    }, 8000);

    $(".two .yellow").css("scale", 1.1);

    $(".two .line2").css("scale", 1.05);
    $(".two .line3").css("scale", 1.05);
    $(".two .peeps").css("scale", 1.15);

    $(".two .bg").transition({
        scale: 1.05
    }, 10000);

    //SEX TRAFFICKING

    $(".two .text p.yellow").delay(0).transition({
        opacity: 1
    });

    $(".two .text p.yellow span").delay(0).transition({
        width: 320,
        opacity: 1
    }, 500);

    $(".two .text p.yellow span").transition({
        opacity: 0
    }, 50);
    $(".two .text p.yellow span").transition({
        opacity: 1
    }, 50);
    $(".two .text p.yellow span").transition({
        opacity: 0
    }, 50);
    $(".two .text p.yellow span").transition({
        opacity: 1
    }, 50);

    $(".two").transition({
        opacity: 1
    }, 1000, function() {

        $(".two .yellow").transition({
            scale: 1
        }, 10000);

        $(".two .text p.line2").delay(0).transition({
            opacity: 1
        });
        $(".two .line2").transition({
            scale: 1.00
        }, 9000);

        $(".two .text p.line2 span:nth-child(1)").delay(250).transition({
            width: 380
        }, 500);
        $(".two .text p.line2 span:nth-child(2)").delay(550).transition({
            width: 295
        }, 500);

        $(".two .text p.line3").delay(1050).transition({
            opacity: 1
        });

        $(".two .line3").transition({
            scale: 1.00
        }, 8000);

        $(".two .text p.line3 span:eq(0)").delay(1050).transition({
            width: 360
        }, 500);
        $(".two .text p.line3 span:eq(1)").delay(1250).transition({
            width: 220
        }, 500);
        $(".two .text p.line3 span:eq(2)").delay(1350).transition({
            width: 110
        }, 500);

        $(".two .peeps").delay(0).transition({
            scale: 1.00
        }, 10000);
        $(".two .peeps img").delay(0).each(function(index) {
            $(this).delay(75 * index).transition({
                opacity: 1,
                top: 0
            }, 1000);
        });

    });

}

//THREE ANIMATION

anim3started = false;

function threeAnim() {

    anim3started = true;

    $(".three .bg").transition({
        scale: 1.09
    }, 10000);

    $(".three .text").transition({
        scale: 1.00
    }, 5000);

    //VICTIMS
    $(".three p.yellow").delay(0).transition({
        opacity: 1,
        backgroundColor: "#FAD800"
    });

    $(".three p.yellow span").delay(0).transition({
        width: 140
    }, 700);

    $(".three .text p.line2").transition({
        opacity: 1
    });

    $(".three").transition({
        opacity: 1
    }, function() {

        if (!myCircle && canAnimate) {
			
			
            var myCircle = Circles.create({
                id: 'circles-1',
                radius: 80,
                value: 99,
                maxValue: 100,
                width: 15,
                text: function(value) {
                    return value + '%';
                },
                colors: ['#000', '#FAD800'],
                duration: 1400,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text'
            })
        }

        $("#circles-1").delay(500).transition({
            opacity: 1
        });

    });

    $(".three .text p.line1").delay(500).transition({
        opacity: 1
    });
    $(".three .text p.line1 span").delay(500).transition({
        width: 50
    });

    $(".three  p.line2").delay(190).transition({
        left: "0px",
        width: "172",

    }, 1000);

    $(".three .text p.line3").delay(750).transition({
        opacity: 1
    }, 1000);
    $(".three .text p.line3 span").delay(750).transition({
        width: 400
    }, 1000);

    $(".small-circles").delay(1750).transition({
        opacity: 1
    }, function() {

        if (!myCircle2 && canAnimate) {

            var myCircle2 = Circles.create({

                id: 'circles-2',
                radius: 40,
                value: 80,
                maxValue: 100,
                width: 10,
                text: function(value) {
                    return value + '%';
                },
                colors: ['#000', '#FAD800'],
                duration: 500,
                wrpClass: 'circles-wrp',
                textClass: 'circles-text'

            });
		}

            $(".mini-circ-1").transition({
                opacity: 1
            }, 500, function() {

                $(".mini-circ-1").transition({
                    scale: 1,
                    x: 0
                }, 6000);
				
				if (canAnimate) {
				
                var myCircle3 = Circles.create({
                    id: 'circles-3',
                    radius: 40,
                    value: 50,
                    maxValue: 100,
                    width: 10,
                    text: function(value) {
                        return value + '%';
                    },
                    colors: ['#000', '#FAD800'],
                    duration: 1000,
                    wrpClass: 'circles-wrp',
                    textClass: 'circles-text'
                });
				
				}

                $(".mini-circ-2").transition({
                    opacity: 1
                }, 500, function() {

                    $(".mini-circ-2").transition({
                        scale: 1,
                        x: 0
                    }, 6000);

                });

            });

        

        $(".three .text p.line4").delay(0).transition({
            opacity: 1
        }, function() {

        });

        $(".three .text p.line4 span").delay(0).transition({
            width: 400
        });

        $(".three .text p.line5").delay(0).transition({
            opacity: 1
        });
        $(".three .text p.line5 span").delay(0).transition({
            width: 400
        });

    });

}

//FIVE ANIM

anim5started = false;

function fiveAnim() {

    anim5started = true;

    $(".five .video").transition({
        opacity: 1
    }, 1000);

    $(".five .tainted").delay(750).transition({
        opacity: 1
    }, 1000);
}

window.mobilecheck = function() {
    var check = false;
    (function(a) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
    })(navigator.userAgent || navigator.vendor || window.opera);
    return check;
}

isIE8 = false;

isiPad = navigator.userAgent.match(/iPad/i) != null;

isMobile = window.mobilecheck();

if ($("html").hasClass("ie8")) {
    isIE8 = true;
}



canAnimate = true;

if (isiPad || isMobile || isIE8) {
    canAnimate = false;
	$("body").addClass("staticCircles");
}

$(document).ready(function() {
	
	
	
	
    if ($("body").hasClass("HomePage")) {

        if (!canAnimate) {
			
				
				oneAnim();
				twoAnim();
				threeAnim();
				fiveAnim();
		
        }

    }

    if (canAnimate) {
        s = skrollr.init({
            smoothScrolling: false
        });

    }

});

$(window).on('beforeunload', function() {
    //$(window).scrollTop(0);
});

jQuery.fn.animateAuto = function(prop, speed, callback) {
    var elem, height, width;
    return this.each(function(i, el) {
        el = jQuery(el), elem = el.clone().css({
            "height": "auto",
            "width": "auto"
        }).appendTo("body");
        height = elem.css("height"),
            width = elem.css("width"),
            elem.remove();

        if (prop === "height")
            el.animate({
                "height": height
            }, speed, callback);
        else if (prop === "width")
            el.animate({
                "width": width
            }, speed, callback);
        else if (prop === "both")
            el.animate({
                "width": width,
                "height": height
            }, speed, callback);
    });
}

function calcBannerHeight() {

    bannerHeight = $(".banner.one").outerHeight();

    $("#side-graphic").css("margin-top", bannerHeight + "px");
    $("#side-graphic").css("height", $("body").height() - bannerHeight + "px");

    $(".age-12").css("top", bannerHeight + "px");

    $(".age-28").css("top", bannerHeight * 2 + "px");

    $("#timeline").css("top", bannerHeight * 1.66 + 20 + "px");

    $(".four .bg img").css("height", (bannerHeight / 3));
	
	
    onePos = $(".banner.one").position();
    onePos = onePos.top;

}

calcBannerHeight();

$(window).resize(function() {
    calcBannerHeight();
});

anim1started = false;

// anim
$(".two .yellow-box").css("scale", "1.05");
$(".three .text").css("scale", 1.25);

//$(".one").css("opacity", 0);


//one

/*
$(".four .bg img:nth-child(1)").animate({
    opacity: 1
}, 450);
$(".four .bg img:nth-child(2)").delay(350).animate({
    opacity: 1
}, 450);
$(".four .bg img:nth-child(3)").delay(121).animate({
    opacity: 1
}, 450);
$(".four .bg img:nth-child(4)").delay(215).animate({
    opacity: 1
}, 450);
$(".four .bg img:nth-child(5)").delay(552).animate({
    opacity: 1
}, 450);

$(".four .bg img:nth-child(6)").delay(150).animate({
    opacity: 0.5
}, 450);
$(".four .bg img:nth-child(7)").delay(540).animate({
    opacity: 0.5
}, 450);
$(".four .bg img:nth-child(8)").delay(211).animate({
    opacity: 0.5
}, 450);
$(".four .bg img:nth-child(9)").delay(555).animate({
    opacity: 0.5
}, 450);
$(".four .bg img:nth-child(10)").delay(809).animate({
    opacity: 0.5
}, 450);

$(".four .bg img:nth-child(11)").delay(432).animate({
    opacity: 1
}, 450);
$(".four .bg img:nth-child(12)").delay(303).animate({
    opacity: 1
}, 450);
$(".four .bg img:nth-child(13)").delay(335).animate({
    opacity: 1
}, 450);
$(".four .bg img:nth-child(14)").delay(150).animate({
    opacity: 1
}, 450);
$(".four .bg img:nth-child(15)").delay(552).animate({
    opacity: 1
}, 450);

*/




$(window).load(function() {

$(".four .barleft").delay(250).transition({
    x: "-60%"
}, 10000);

$(".four .barright").delay(250).transition({
    x: "60%"
}, 10000);


$(".four .thelight").delay(1000).transition({
    opacity: 1
}, 1000);

$(".four .thelight").delay().transition({
    scale: 1.25
}, 10000);


$(".four .text p.yellow").delay(3000).transition({
    opacity: 1
});

$(".four .text").transition({
    scale: 1.0
}, 8000);

$(".four").transition({
    opacity: 1
});

$(".four .text p.line-left").delay(2000).transition({
    opacity: 1
});
$(".four .text p.line-left span").delay(2250).transition({
    width: 436
});

$(".arrow-down").delay(3500).transition({
    opacity: 1,
    bottom: 20
}, 1000);

$(".four .text").css("scale", "1.09");
$(".one, .two, .three, .four").css("scale", 1.0);
$(".text p span").each(function() {
    $(this).attr("data-width", $(this).width() - 40);
    $(this).width(0);
});

$(".one .yellow-box").css("scale", "1.05");
$(".one.text").css("scale", 1.05);

//end ONE

});


$(window).on("scroll", function() {

  


    //OLD ONE ANIM

    if (canAnimate) {
        //START ANIM 1

       

        if (!anim1started && YOffset > (onePos - bannerHeight * 0.75)) {

            oneAnim();

            //END OLD ONE ANIM

        }

        //two anim

        if (!anim2started && s.getScrollTop() > bannerHeight * 1.75 && $(".two").css("opacity") == 0.25) {

            twoAnim();

        }

        //three anim

        if (!anim3started && s.getScrollTop() > bannerHeight * 2.75 && $(".three").css("opacity") == 0.25) {

            threeAnim();

        }

        //five anim
        if (s.getScrollTop() > bannerHeight * 3.75 && !anim5started) {

            //fiveAnim();

        }

    }

});
