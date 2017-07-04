window.onload = function () {
// Initialisation

var vid = document.getElementById("bgvid");
vid.oncanplaythrough = function () {

    $('#cover').fadeOut(1000);
    setTimeout(function () {
        $(".appear1").css("visibility", "visible");

        $('.counter1').counterUp({
            delay: 10,
            time: 2000
        });
    }, 1000);

    setTimeout(function () {
        $(".appear1").css("color", "#00ccb1");
        $(".appear2").css("visibility", "visible");

        $('.counter2').counterUp({
            delay: 10,
            time: 2000
        });
    }, 3000);

    setTimeout(function () {
        $(".appear2").css("color", "#00ccb1");
        $(".appear3").css("visibility", "visible");

        $('.counter3').counterUp({
            delay: 10,
            time: 2000
        });
    }, 5000);

    setTimeout(function () {
        $(".appear3").css("color", "#00ccb1");

    }, 7000);



    setTimeout(function () {
        $(".appear3").css("color", "#00ccb1");

    }, 9000);


    setTimeout(function () {
        var oneT = document.getElementById("appear1");
        var twoT = document.getElementById("appear2");
        var threeT = document.getElementById("appear3");
        TweenMax.staggerTo([threeT, twoT, oneT], 1, {
            scale: 0,
            opacity: 0
        }, 0.55);

    }, 9500);

    setTimeout(function () {
        $(".textAppear").css("display", "none");

        $("#main").append("<div class='form__field'><label for='login__password'><svg class='icon'><use xmlns:xlink='http://www.w3.org/1999/xlink' xlink:href='#lock'></use></svg></label><input id='login__password' type='password' name='password' class='form__input' placeholder='Password required' required></div>");
        var mdpField = $(".form__field");
        TweenLite.to(mdpField, 2, {
            opacity: 1,
            delay: 1
        });

    }, 11000);

    var displayOnce = 0;
    console.log(displayOnce);

    $(document).keypress(function (e) {
        if (e.which == 13 && displayOnce == 0) {


            var mdp = $("#login__password").val();
            console.log(mdp);

            if (mdp === "a") { //r00tth2m*ch1ne
                displayOnce = 1;
                console.log("grats");
                $("#majorContent").css("opacity", "0");

                $("#majorContent").css("display", "none");
                $("body").append("<p class='glitch'></p>");
                $('.glitch').typeIt({
                    strings: ["Welcome Father", "I will protect you now", "What are your commands ?"],
                    speed: 100,
                    breakLines: false,
                    autoStart: false,
                    loop: false,

                });
                var typeText = document.createElement("INPUT");
                $(typeText).attr({
                    type: "text",
                    placeholder: "Type to search",
                    maxlength: "20",
                    class: "letsTypeIt"
                });
                $(".glitch").after(typeText);
                listenKey();
            }
        }
    });

};

(function ($) {

    var rdmtime;

    setInterval(function () {
        rdmtime = Math.floor(Math.random() * 200);
        $('.glitch').toggleClass('glitch2');
    }, rdmtime);

})($);


/* La saisie dans la typeBox */
/* Auto focus */
function listenKey() {

    document.onkeypress = function (e) {
        $('.letsTypeIt').focus();
        console.log("pressed");
    }
};



/* On écoute.. */
$(document).keypress(function (e) {
    var valueTyped = $.trim($(".letsTypeIt").val());

    if (e.which == 13 && valueTyped.length > 0) {
        console.log("entreeeeee"); // true
        /* Quand on appui sur entrer */
        var commands = $(".letsTypeIt").val();
        var commands2 = $(".letsTypeIt").val();


        /* Hello */
        var hello = /\bhello\b|\bhi\b|\byo\b|\bsalut\b/gi.test(commands);
        var finding = /\bfindf\b|\blocate\b|\bsearch\b/gi.test(commands);
        
        /* Hello Response*/
        if (hello == true) {
            console.log("text"); // true
            $(".glitch").text("Hello Father");
        } 
        
        else if (finding == true) {
            $(".glitch").text("Research ongoing");
            var target = commands2.split(' ');
            var target1 = target[1];
            console.log(target1);
            $(".glitch").after("<p class='testing'></p>");
            $('.testing').typeIt({
                strings: ['SEEKING']
            });
            $(".testing").after("<p class='testing2'>" + target1 + "</p>");

            /* SENDING TO LOCATING.JS */


            localStorage.setItem("targetName", target1);

            setTimeout(function () {
                document.location = './locating.html';

            }, 3000);


        }
        
        else {
            $(".glitch").text("I don't understand..");
        }

        /* Find */

       

        /* Hello Response*/
        



    };

});

};
