$(window).load(function() {
    $(".loading").fadeOut("fast"), $(".container").fadeIn("fast")
}), $("document").ready(function() {
    var a;
    $(window).resize(function() {
        a = $(window).width() / 2, $("#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b12 ").stop(), $("#b11").animate({
            top: 240,
            left: a - 450
        }, 500), $("#b22").animate({
            top: 240,
            left: a - 350
        }, 500), $("#b33").animate({
            top: 240,
            left: a - 250
        }, 500), $("#b44").animate({
            top: 240,
            left: a - 150
        }, 500), $("#b55").animate({
            top: 240,
            left: a - 50
        }, 500), $("#b66").animate({
            top: 240,
            left: a + 50
        }, 500), $("#b77").animate({
            top: 240,
            left: a + 150
        }, 500), $("#b88").animate({
            top: 240,
            left: a + 250
        }, 500), $("#b99").animate({
            top: 240,
            left: a + 350
        }, 500), $("#b00").animate({
            top: 240,
            left: a + 450
        }, 500), $("#b61").animate({
            top: 240,
            left: a + 450
        }, 500)
    }), $("#turn_on").click(function() {
        $("#bulb_yellow").addClass("bulb-glow-yellow"), $("#bulb_red").addClass("bulb-glow-red"), $("#bulb_blue").addClass("bulb-glow-blue"), $("#bulb_green").addClass("bulb-glow-green"), $("#bulb_pink").addClass("bulb-glow-pink"), $("#bulb_orange").addClass("bulb-glow-orange"), $("body").addClass("peach"), $(this).fadeOut("slow").delay(5e3).promise().done(function() {
            $("#play").fadeIn("slow")
        })
    }), $("#play").click(function() {
        $(".song")[0].play(), $("#bulb_yellow").addClass("bulb-glow-yellow-after"), $("#bulb_red").addClass("bulb-glow-red-after"), $("#bulb_blue").addClass("bulb-glow-blue-after"), $("#bulb_green").addClass("bulb-glow-green-after"), $("#bulb_pink").addClass("bulb-glow-pink-after"), $("#bulb_orange").addClass("bulb-glow-orange-after"), $("body").css("backgroud-color", "#FFF"), $("body").addClass("peach-after"), $(this).fadeOut("slow").delay(6e3).promise().done(function() {
            $("#bannar_coming").fadeIn("slow")
        })
    }), $("#bannar_coming").click(function() {
        $(".bannar").addClass("bannar-come"), $(this).fadeOut("slow").delay(6e3).promise().done(function() {
            $("#balloons_flying").fadeIn("slow")
        })
    }), $("#balloons_flying").click(function() {
        $(".balloon-border").animate({
                top: -500
            }, 8e3), $("#b1,#b2,#b4,#b6,#b8,#b12").addClass("balloons-rotate-behaviour-one"), $("#b3,#b5,#b7,#b9,#b12").addClass("balloons-rotate-behaviour-two"),
            function a() {
                var t = 1e3 * Math.random(),
                    o = 500 * Math.random();
                $("#b1").animate({
                    left: t,
                    bottom: o
                }, 1e4, function() {
                    a()
                })
            }(),
            function a() {
                var t = 1e3 * Math.random(),
                    o = 500 * Math.random();
                $("#b2").animate({
                    left: t,
                    bottom: o
                }, 1e4, function() {
                    a()
                })
            }(),
            function a() {
                var t = 1e3 * Math.random(),
                    o = 500 * Math.random();
                $("#b3").animate({
                    left: t,
                    bottom: o
                }, 1e4, function() {
                    a()
                })
            }(),
            function a() {
                var t = 1e3 * Math.random(),
                    o = 500 * Math.random();
                $("#b4").animate({
                    left: t,
                    bottom: o
                }, 1e4, function() {
                    a()
                })
            }(),
            function a() {
                var t = 1e3 * Math.random(),
                    o = 500 * Math.random();
                $("#b5").animate({
                    left: t,
                    bottom: o
                }, 1e4, function() {
                    a()
                })
            }(),
            function a() {
                var t = 1e3 * Math.random(),
                    o = 500 * Math.random();
                $("#b6").animate({
                    left: t,
                    bottom: o
                }, 1e4, function() {
                    a()
                })
            }(),
            function a() {
                var t = 1e3 * Math.random(),
                    o = 500 * Math.random();
                $("#b7").animate({
                    left: t,
                    bottom: o
                }, 1e4, function() {
                    a()
                })
            }(),
            function a() {
                var t = 1e3 * Math.random(),
                    o = 500 * Math.random();
                $("#b8").animate({
                    left: t,
                    bottom: o
                }, 1e4, function() {
                    a()
                })
            }(),
            function a() {
                var t = 1e3 * Math.random(),
                    o = 500 * Math.random();
                $("#b9").animate({
                    left: t,
                    bottom: o
                }, 1e4, function() {
                    a()
                })
            }(),
            function a() {
                var t = 1e3 * Math.random(),
                    o = 500 * Math.random();
                $("#b10").animate({
                    left: t,
                    bottom: o
                }, 1e4, function() {
                    a()
                })
            }(),function a() {
                var t = 1e3 * Math.random(),
                    o = 500 * Math.random();
                $("#b12").animate({
                    left: t,
                    bottom: o
                }, 1e4, function() {
                    a()
                })
            }(), $(this).fadeOut("slow").delay(5e3).promise().done(function() {
                $("#cake_fadein").fadeIn("slow")
            })
    }), $("#cake_fadein").click(function() {
        $(".cake").fadeIn("slow"), $(this).fadeOut("slow").delay(3e3).promise().done(function() {
            $("#light_candle").fadeIn("slow")
        })
    }), $("#light_candle").click(function() {
        $(".fuego").fadeIn("slow"), $(this).fadeOut("slow").promise().done(function() {
            $("#wish_message").fadeIn("slow")
        })
    }), $("#wish_message").click(function() {
        a = $(window).width() / 2, $("#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10, b12").stop(), $("#b1").attr("id", "b11"), $("#b2").attr("id", "b22"), $("#b3").attr("id", "b33"), $("#b4").attr("id", "b44"), $("#b5").attr("id", "b55"), $("#b6").attr("id", "b66"), $("#b7").attr("id", "b77"), $("#b8").attr("id", "b88"), $("#b9").attr("id", "b99"), $("#b10").attr("id", "b00"),$("#b12").attr("id", "b61"), $("#b11").animate({
            top: 240,
            left: a - 450
        }, 500), $("#b22").animate({
            top: 240,
            left: a - 350
        }, 500), $("#b33").animate({
            top: 240,
            left: a - 250
        }, 500), $("#b44").animate({
            top: 240,
            left: a - 150
        }, 500), $("#b55").animate({
            top: 240,
            left: a - 50
        }, 500), $("#b66").animate({
            top: 240,
            left: a + 50
        }, 500), $("#b77").animate({
            top: 240,
            left: a + 150
        }, 500), $("#b88").animate({
            top: 240,
            left: a + 250
        }, 500), $("#b99").animate({
            top: 240,
            left: a + 350
        }, 500), $("#b00").animate({
            top: 240,
            left: a + 450
        }, 500),$("#b61").animate({
            top: 240,
            left: a + 450
        }, 500), $(".balloons").css("opacity", "0.9"), $(".balloons h2").fadeIn(3e3), $(this).fadeOut("slow").delay(3e3).promise().done(function() {
            $("#story").fadeIn("slow")
        })
    }), $("#story").click(function() {
        $(this).fadeOut("slow"), $(".cake").fadeOut("fast").promise().done(function() {
                $(".message").fadeIn("slow")
            }),
            function a(t) {
                $("p:nth-child(" + t + ")").fadeOut("slow").delay(800).promise().done(function() {
                    t += 1, $("p:nth-child(" + t + ")").fadeIn("slow").delay(1e3), 50 == t ? $("p:nth-child(49)").fadeOut("slow").promise().done(function() {
                        $(".cake").fadeIn("fast")
                    }) : a(t)
                })
            }(0)
    })
});