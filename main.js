function preloadimages(e) {
    function t() {
        a++, a == e.length && i(n)
    }
    for (var n = [], a = 0, i = function() {}, e = "object" != typeof e ? [e] : e, r = 0; r < e.length; r++) n[r] = new Image, n[r].src = e[r], n[r].onload = function() {
        t()
    }, n[r].onerror = function() {
        t()
    };
    return {
        done: function(e) {
            i = e || i
        }
    }
}

function onImageLoad() {
    function e(e) {
        var t = 0,
            n = setInterval(function() {
                -(2 * spriteHeight) + 560 + 140 >= t && (t = -(2 * spriteHeight) + 560, clearInterval(n), e.style.display = "none", dyndivArray.length > 3 && (dyndivArray[0].style.visibility = "hidden", carContainer.removeChild(dyndivArray[0]), dyndivArray.shift())), e.style.top = t + "px", t -= 280
            }, 35)
    }
    currentDiv.getElementsByClassName("loader")[0].style.visibility = "hidden";
    var t = currentDiv.getElementsByClassName("cimage")[0],
        n = currentDiv.getElementsByClassName("csprite")[0],
        a = document.getElementById("wheelFront"),
        i = document.getElementById("wheelRear");
    setTimeout(function() {
        FX.fadeIn(t, {
            duration: 500
        })
    }, 200), 0 == initialized && (initialized = !0, setTimeout(function() {
        FX.fadeOut(a, {
            duration: 100
        })
    }, 25), setTimeout(function() {
        FX.fadeOut(i, {
            duration: 100
        })
    }, 25)), e(n)
}

function onStageLoad() {
    function e(e) {
        {
            var t = 0;
            setInterval(function() {
                -11760 >= t && (t = 0), e.style.top = t + "px", t -= 240
            }, 35)
        }
    }
    if (document.getElementById("container").style.display = "block", 1 == animate) {
        var t = document.getElementById("bgimgholder");
        t.innerHTML = '<img class="bsprite anim" src="images/bg_sprite.jpg" alt="" id="bgs">';
        var n = document.getElementById("bgs");
        n.addEventListener(tapEvent, function() {}, !1);
        var a = document.getElementsByClassName("bsprite anim")[0];
        setTimeout(function() {
            document.getElementById("bgimgholder").style.display = "block", e(a)
        }, 2200)
    }
    setTimeout(function() {
        for (var e = ["txt2", "txt3", "txt4", "logo", "cta", "colortxt"], t = 0; t < e.length; t++) {
            var n;
            n = document.getElementById(e[t]), n.className = "disappear", FX.fadeIn(n, {
                duration: 800
            })
        }
    }, 2e3), setTimeout(function() {
        for (var e = 1; 6 >= e; e++) {
            var t = 80;
            1 == e && (t = 0),
                function(e) {
                    setTimeout(function() {
                        var t;
                        t = document.getElementById("button" + [e]), t.className = "appear"
                    }, t * e)
                }(e)
        }
    }, 2e3)
}
var dynID = 10,
    currentPage = 4,
    dyndivArray = new Array,
    loadedDivs = new Array,
    currentDiv, initialized = !1,
    colorsArray = ["Super_White", "Classic_Silver_Metallic", "Slate_Metallic", "Barcelona_Red_Metallic", "Blue_Crush_Metallic", "Black_Sand_Pearl"],
    carArray = ["images/car_white.png", "images/car_gray1.png", "images/car_gray2.png", "images/car_red.png", "images/car_blue.png", "images/car_black.png"],
    spriteArray = ["images/smoke_white.png", "images/smoke_gray1.png", "images/smoke_gray2.png", "images/smoke_red.png", "images/smoke_blue.png", "images/smoke_black.png"],
    spriteHeight = 7420,
    animate = !1;
! function() {
    var e = {
        easing: {
            linear: function(e) {
                return e
            },
            quadratic: function(e) {
                return Math.pow(e, 2)
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            circ: function(e) {
                return 1 - Math.sin(Math.acos(e))
            },
            back: function(e, t) {
                return Math.pow(e, 2) * ((t + 1) * e - t)
            },
            bounce: function(e) {
                for (var t = 0, n = 1; 1; t += n, n /= 2)
                    if (e >= (7 - 4 * t) / 11) return -Math.pow((11 - 6 * t - 11 * e) / 4, 2) + Math.pow(n, 2)
            },
            elastic: function(e, t) {
                return Math.pow(2, 10 * (e - 1)) * Math.cos(20 * Math.PI * t / 3 * e)
            }
        },
        animate: function(e) {
            var t = new Date,
                n = setInterval(function() {
                    var a = new Date - t,
                        i = a / e.duration;
                    i > 1 && (i = 1), e.progress = i;
                    var r = e.delta(i);
                    e.step(r), 1 == i && clearInterval(n)
                }, e.delay || 10)
        },
        fadeOut: function(t, n) {
            var a = 1;
            this.animate({
                duration: n.duration,
                delta: function(t) {
                    return t = this.progress, e.easing.swing(t)
                },
                complete: n.complete,
                step: function(e) {
                    t.style.opacity = a - e
                }
            })
        },
        fadeIn: function(t, n) {
            var a = 0;
            this.animate({
                duration: n.duration,
                delta: function(t) {
                    return t = this.progress, e.easing.swing(t)
                },
                complete: n.complete,
                step: function(e) {
                    t.style.opacity = a + e
                }
            })
        }
    };
    window.FX = e
}();
var loadPage = function(e) {
        preloadimages([carArray[e], spriteArray[e]]).done(function() {
            loadedDivs.push(e), e == currentPage && onImageLoad()
        });
        var t = document.getElementById("carContainer"),
            n = document.createElement("div");
        n.id = "dyndiv" + dynID, t.appendChild(n);
        var a = document.getElementById("dyndiv" + dynID);
        a.style.zIndex = dynID, a.style.position = "absolute", a.style.top = "0px", a.style.left = "0px";
        var r = '<div class="ccontainer">';
        r += '<div class="loader"><span class="circle"></span><span class="circle"></span><span class="circle"></span></div>', r += '<div class="cimageholder"><img class="cimage" src="', r += carArray[e], r += '" /></div>', r += '<div class="cspriteholder"><img class="csprite" src="', r += spriteArray[e], r += '" width="320" height="' + 2 * spriteHeight + '" ></div></div>', a.innerHTML = r;
        var o = document.getElementById("colortxt"),
            c = document.getElementById("colortxtimg");
        for (o.style.opacity = 0, c.style.top = -(20 * e) + "px", setTimeout(function() {
                FX.fadeIn(o, {
                    duration: 300,
                    complete: function() {}
                })
            }, 0), i = 0; i < loadedDivs.length; i++)
            if (e == loadedDivs[i]) {
                a.getElementsByClassName("loader")[0].style.visibility = "hidden";
                break
            }
        dyndivArray.push(a), currentDiv = a, dynID = ++dynID
    },
    removeActive = function() {
        for (var e = 1; 6 >= e; e++) {
            var t;
            t = document.getElementById("button" + [e]), t.className = ""
        }
    },
    clickCTA = document.getElementById("linkcta"),
    clickHeadline = document.getElementById("linkheadline"),
    clickCorolla = document.getElementById("linkcorolla"),
    clickLogo = document.getElementById("linklogo"),
    clickCar = document.getElementById("clickScreen"),
    clickBG = document.getElementById("bg"),
    clickOptions = document.getElementById("linkoptions"),
    clickDeadspot = document.getElementById("deadspot"),
    tapEvent = "click";
clickCTA.addEventListener(tapEvent, function() {}, !1), clickHeadline.addEventListener(tapEvent, function() {}, !1), clickCorolla.addEventListener(tapEvent, function() {}, !1), clickLogo.addEventListener(tapEvent, function() {}, !1), clickCar.addEventListener(tapEvent, function() {}, !1), clickBG.addEventListener(tapEvent, function() {}, !1), clickOptions.addEventListener(tapEvent, function() {}, !1);


clickDeadspot.addEventListener(tapEvent, function() {}, !1);
var iOSversion = function() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var e = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(e[1], 10), parseInt(e[2], 10), parseInt(e[3] || 0, 10)]
    }
};
window.onload = function() {
    preloadimages(["images/txt_colors.png", "images/car_blue_initial.png", "images/bg.jpg", "images/txt1.png"]).done(function() {
        var e = document.getElementById("preLoader");
        if (e.parentNode.removeChild(e), navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i)) {
            animate = !0;
            var t = iOSversion();
            t[0] < 5 && (animate = !1), (navigator.userAgent.match(/iPhone OS 1/i) || navigator.userAgent.match(/iPhone OS 2/i) || navigator.userAgent.match(/iPhone OS 3/i) || navigator.userAgent.match(/iPhone OS 4/i)) && (animate = !1)
        }
        navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/BlackBerry/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) ? navigator.userAgent.match(/Chrome/i) && (animate = !1) : animate = !0, document.getElementById("baseContainer").className = 1 == animate ? "commence anim" : "commence", onStageLoad()
    })



    // for (var jj = 1; 6 >= jj; jj++) {
        var jj = 6;
        var btnObj;
        btnObj = document.getElementById("button" + [jj]),
            function(e) {
                btnObj.addEventListener(tapEvent, function(t) {
                    t.preventDefault(), currentPage != e - 1 && (currentPage = e - 1, loadPage(currentPage), removeActive(), this.className = "active")
                }, !1)
            }(jj)
    // }


    //create a new instance of shake.js.
    var myShakeEvent = new Shake({
        threshold: 15
    });

    // start listening to device motion
    myShakeEvent.start();

    // register a shake event
    window.addEventListener('shake', shakeEventDidOccur, false);


    var currentPage = 5; 
    //shake event callback
    function shakeEventDidOccur () {

        //put your own code here etc.
        alert('Shake!');
        currentPage = currentPage >= 6 ? 0 : currentPage;
        loadPage(currentPage);
    }



};









    // 