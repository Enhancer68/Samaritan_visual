$(document).ready(function () {

    var targetName2 = localStorage.getItem("targetName");
    console.log(targetName2);
    var localisation = getRandomIntInclusive(0, 4);
    console.log("Localisation entre 0 et 3:" + localisation);

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    switch (localisation) {
        case 0:
            // Instructions à exécuter lorsque le résultat
            // de l'expression correspond à valeur1
            var localisationVille = "Paris";
            var localisationMap1 = "tokyo_map_1.jpg";
            var localisationMap2 = "tokyo_map_2.jpg";
            var localisationMap3 = "tokyo_map_3.jpg";
            var localisationVideo = "camera_newyork.mp4";
            break;
        case 1:
            // Instructions à exécuter lorsque le résultat
            // de l'expression correspond à valeur2
            var localisationVille = "New-York";
            var localisationMap1 = "tokyo_map_1.jpg";
            var localisationMap2 = "tokyo_map_2.jpg";
            var localisationMap3 = "tokyo_map_3.jpg";
            var localisationVideo = "camera_newyork.mp4";
            break;
        case 2:
            // Instructions à exécuter lorsque le résultat
            // de l'expression à valeurN
            var localisationVille = "Tokyo";
            var localisationMap1 = "tokyo_map_1.jpg";
            var localisationMap2 = "tokyo_map_2.jpg";
            var localisationMap3 = "tokyo_map_3.jpg";
            var localisationVideo = "camera_newyork.mp4";
            break;
        case 3:
            // Instructions à exécuter lorsque le résultat
            // de l'expression correspond à valeur2
            var localisationVille = "Rio";
            var localisationMap1 = "tokyo_map_1.jpg";
            var localisationMap2 = "tokyo_map_2.jpg";
            var localisationMap3 = "tokyo_map_3.jpg";
            var localisationVideo = "camera_newyork.mp4";
            break;
        case 4:
            // Instructions à exécuter lorsque le résultat
            // de l'expression correspond à valeur2
            var localisationVille = "Mulhouse";
            var localisationMap1 = "tokyo_map_1.jpg";
            var localisationMap2 = "tokyo_map_2.jpg";
            var localisationMap3 = "tokyo_map_3.jpg";
            var localisationVideo = "camera_newyork.mp4";
            break;
    }

    console.log("1" + localisationMap1);
    console.log("2" + localisationMap2);
    console.log("3" + localisationMap3);

    /* 1 ACTION */
    setTimeout(function () {
        /* Premier titre + ip préparée */
        $(".searchingFor").append("<h1 class='ip'>Accessing target IP</h1>");
        var accessingTargetIp = $(".ip");
        accessingTargetIp.css("visibility", "visible");
        accessingTargetIp.shuffleLetters();


        /* ip animation ???? */
    }, 1000);

    /* 2 ACTION */
    setTimeout(function () {
        /* OUT IP */
        $(".adresseIp").css("visibility", "visible");
        $(".adresseIp").shuffleLetters();

        /* FIN OUT IP */
    }, 3000);


    /* 3 ACTION */
    setTimeout(function () {
        /* Ajout du titre avec de la localisation */
        var accessingTargetIp = $(".ip");

        TweenLite.to(accessingTargetIp, 1.5, {
            opacity: 0
        });

        $(".searchingFor").append("<h1 class='drones'>Coordinates determined in " + localisationVille + "</h1>");

        $(".drones").css("visibility", "visible");
        $(".drones").shuffleLetters();
        accessingTargetIp.remove();
        /* On change le fond de la map ofc */
        var mapAnim = $("#particles-js");
        mapAnim.css("background-image", "url(./media/" + localisationMap3 + ")");
        mapAnim.css("opacity", 1);


    }, 5000);




    /* 4 ACTION */
    setTimeout(function () {
        /* Ajout titre */
        var adresseIp = $(".adresseIp");

        TweenLite.to(adresseIp, 1.5, {
            color: "white"
        });

        var panel = $(".panel");

        TweenLite.to(panel, 1.5, {
            background: "rgba(0, 0, 0, 0.8)"
        });

        $(".drones").remove();
        $(".ip").remove();
        $(".searchingFor").append("<h1 class='Ddrones'>DEPLOYING DRONES</h1>");
        $(".Ddrones").css("visibility", "visible");
        $(".Ddrones").shuffleLetters();
        $("#particles-js").addClass("particlesAppear");
        /* Ajout des particules */
        particlesJS.load('particles-js', 'particlesjs.json', function () {
            console.log('particles.js loaded - callback');
        });

    }, 10000);

    /* 5 A ACTION */
    setTimeout(function () {
        var mapAnim = $("#particles-js");
        mapAnim.css("opacity", 0);

    }, 13000);

    setTimeout(function () {
        var mapAnim = $("#particles-js");
        mapAnim.css("background-image", "url(./media/" + localisationMap2 + ")");
        mapAnim.css("opacity", 1);

    }, 15000);




    /* 5 ACTION */

    setTimeout(function () {


        /* 6 ACTION */

        setTimeout(function () {
            $(".searchingFor").after("<p class='testing3'></p><div class='separator'></div>");
            $(".Ddrones").shuffleLetters();
            $(".Ddrones").remove();
            $(".testing3").css("font-size", "18px");
            $('.testing3').typeIt({
                strings: ["Click on the map to deploy more drones"]
            });


            var separator = $(".separator");
            TweenLite.from(separator, 4, {
                width: "0",
                delay: 0
            });
            clickToFind();

        }, 2000);

    }, 16000);

    /* fonction click, voir plus haut */

    /* Compteur de click */
    var howMany = 1;

    function clickToFind() {
        console.log("need 4 clicks");

        /* debut fonction de test */
        $('html').on('click', function (e) {
            howMany++;
            console.log(howMany);


            if (howMany >= 5 && howMany !== 0) {
                howMany = -20;
                console.log("maintenant howmany =" + howMany);
                targetFinded();
            } else {
                return false;
            }
        })
        /* fin fonction de test */
    }
    /* FIN Compteur de click */

    /* TARGET LOCALISED */
    function targetFinded() {
        /* on masque les éléments précédents */

        $(".testing3").replaceWith("<p class='testing3'></p>");
        var testing3 = $(".testing3");
        testing3.addClass("twentytwo");


        testing3.typeIt({
                speed: 110,
                lifeLike: false,
                autoStart: false
            })
            .tiType(targetName2 + ' has been localised')
            .tiSettings({
                speed: 120
            })
            .tiPause(1000)
            .tiEmpty()
            .tiType('Accessing video feed')
            .tiPause(1000)
            .tiDelete(4)
            .tiType('...');

        /* 5 A ACTION */
        setTimeout(function () {
            var mapAnim = $("#particles-js");
            mapAnim.css("opacity", 0);

        }, 1000);

        setTimeout(function () {
            var mapAnim = $("#particles-js");
            mapAnim.css("background-image", "url(./media/" + localisationMap1 + ")");
            mapAnim.css("opacity", 1);
        }, 3000);

        setTimeout(function () {
            launchVideo();
        }, 8000);



    } /* FIN TARGET LOCALISED*/

    /* Debut launchvideo */



    function launchVideo() {
        var mapAnim = $("#particles-js");
        mapAnim.css("opacity", 0);
        $(".panel").replaceWith("<div id='containerVideo'><div id='uiBox'><p id='uiTitle'>DATA DOWNLOAD : MONITORING</p> <div id='uiSubtitle'><p>ACCESSING CAMERAS : TIME SQUARE</p></div><div id='uiLoading'><div id='uiBar'></div><p id='uiCounter'>LOADING</p></div></div></div>");
        videoAnimation();
    }

    /* FIN LAUNCHVIDEO */


    function videoAnimation() {

        /* Animation */
        $("#uiBar").animate({
                width: "100%"
            }, {
                duration: 8000,
                complete: function () {
                    $("#uiCounter").text("LOADED");
                    $("#uiBar").css("background", "#00CCB1")
                },
                step: function (now, fx) {
                    $("#uiCounter").text(Math.round(now) + " %");
                }
            }

        );
        /* End Animation */
        setTimeout(function () {
            var containerVideo = $("#containerVideo");
            containerVideo.css("opacity", 0);
            videoShow();
        }, 6000);

    }

    function videoShow() {
        $("#containerVideo").after("<div class='videoCam'><video style='width: 50%;' autoplay='autoplay'><source src='media/" + localisationVideo + "' type='video/mp4' /></video></div>");
        

    }



    /* last */
});
