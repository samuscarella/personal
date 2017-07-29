
var idx = 0;

var portfolio = ['<div id="popcorn" class="container-fluid portfolio-container"> <div class="row"> <div class="col-md-12 navigator"> <a id="decrement"><img src="/images/arrow-left.png" class="arrows left-arrow"></a><img src="/images/popcorn-logo.png" class="ma-and-pa-main-image"><a id="increment"><img src="/images/arrow-right.png" class="arrows right-arrow"/></a></div></div> <div class="row"> <div class="col-md-12"><!-- <h1 class="main-project-title">Popcorn</h1>--> </div> </div> <div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/mapa-login.png" class="app-img float-right" id="app-img-seven"> </div> <div class="col-md-4 app-img-col"> <img src="/images/mapa-shop.png" class="app-img" id="app-img-eight"> </div> <div class="col-md-4 app-img-col"> <img src="/images/mapa-products.png" class="app-img float-left" id="app-img-nine"> </div> </div> <div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/mapa-cart.png" class="app-img float-right" id="app-img-ten"> </div> <div class="col-md-4 app-img-col"> <img src="/images/mapa-blue.png" class="app-img" id="app-img-eleven"> </div> <div class="col-md-4 app-img-col"> <img src="/images/mapa-form.png" class="app-img float-left" id="app-img-twelve"> </div> </div></div>',
    '<div id="popcorn" class="container-fluid portfolio-container"> <div class="row"> <div class="col-md-12 navigator"> <a id="decrement"><img src="/images/arrow-left.png" class="arrows left-arrow"></a><img src="/images/fruit.png" class="main-image"><a id="increment"><img src="/images/arrow-right.png" class="arrows right-arrow"/></a> </div></div><div class="row"> <div class="col-md-12"> <!--<h1 class="main-project-title">Wellness</h1>--></div></div><div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/login.png" class="app-img float-right" id="app-img-seven"> </div><div class="col-md-4 app-img-col"> <img src="/images/home-graph.png" class="app-img" id="app-img-eight"> </div><div class="col-md-4 app-img-col"> <img src="/images/challenge-detail.png" class="app-img float-left" id="app-img-nine"> </div></div><div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/stats.png" class="app-img float-right" id="app-img-ten"> </div><div class="col-md-4 app-img-col"> <img src="/images/verification.png" class="app-img" id="app-img-eleven"> </div><div class="col-md-4 app-img-col"> <img src="/images/no-groups.png" class="app-img float-left" id="app-img-twelve"> </div></div></div>',
    '<div id="popcorn" class="container-fluid portfolio-container"> <div class="row"> <div class="col-md-12 navigator"> <a id="decrement"><img src="/images/arrow-left.png" class="arrows left-arrow"></a><img src="/images/momentz-logo.png" class="moments-main-image"><a id="increment"><img src="/images/arrow-right.png" class="arrows right-arrow"/></a> </div></div><div class="row"> <div class="col-md-12"><!--<h1 class="main-project-title">Momentz</h1>--> </div></div><div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/moments-login.png" class="app-img float-right" id="app-img-seven"> </div><div class="col-md-4 app-img-col"> <img src="/images/moments-dashboard.png" class="app-img" id="app-img-eight"> </div><div class="col-md-4 app-img-col"> <img src="/images/moments-detail.png" class="app-img float-left" id="app-img-nine"> </div></div><div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/moments-new.png" class="app-img float-right" id="app-img-ten"> </div><div class="col-md-4 app-img-col"> <img src="/images/moment-map.png" class="app-img" id="app-img-eleven"> </div><div class="col-md-4 app-img-col"> <img src="/images/moment-media-type.png" class="app-img float-left" id="app-img-twelve"> </div></div></div>',
    '<div id="popcorn" class="container-fluid portfolio-container"> <div class="row"> <div class="col-md-12 navigator"> <a id="decrement"><img src="/images/arrow-left.png" class="arrows left-arrow"></a><img src="/images/exploding_sun.png" class="moments-main-image"><a id="increment"><img src="/images/arrow-right.png" class="arrows right-arrow"/></a> </div></div><div class="row"> <div class="col-md-12"> <!--<h1 class="main-project-title">Diffuze</h1>--> </div></div><div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/login-vc.png" class="app-img float-right" id="app-img-ten"> </div> <div class="col-md-4 app-img-col"> <img src="/images/new-post.png" class="app-img" id="app-img-eleven"> </div> <div class="col-md-4 app-img-col"> <img src="/images/diffuze-detail.png" class="app-img float-left" id="app-img-twelve"> </div> </div> <div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/bomb_vc.png" class="app-img float-right" id="app-img-ten"> </div> <div class="col-md-4 app-img-col"> <img src="/images/audio-post.png" class="app-img" id="app-img-eleven"> </div> <div class="col-md-4 app-img-col"> <img src="/images/followers.png" class="app-img float-left" id="app-img-twelve"> </div> </div></div>'];

var content = ['<div id="blast" class="container-fluid blast-container"><div class="row"><div class="col-md-12"><h1 class="blast-title"><img src="/images/layers.png" class="general-icon"/>iOS Mobile Solutions</h1><h3 class="blast-description">Sharp-minded iOS developer who writes highly readable, clean, maintainable source code. Experience in iOS mobile application development using Swift, iPhone SDK, and Cocoa Touch framework. Expertise in development of iPhone applications, consuming all the required API\'s for mobile applications in an efficient way. Results include robust downloads, activations, session lengths, retention rates, revenue increases and referrals. Demonstrated success developing iOS apps written in Swift using a variety of technologies. Proven ability to manage multiple tasks and projects simultaneously, prioritizing each for maximum effectiveness and efficiency. Extensive experience testing enterprise level applications manually and with automation to report, fix, and correct any bugs or defects in the software. I\'m constantly pushing myself to learn the latest technologies including Artificial Intelligence and all forms of Information Security. Driven by new challenges and the desire to excel in all endeavors.</h3></div></div></div>'];

$(document).ready(function() {

    $('#space').html(content[0]);

    $(document).on("click", "#decrement", function() {
        decrement();
        $("#popcorn img").fadeOut("fast");
        $("#popcorn img").fadeIn("fast");
    });

    $(document).on("click", "#increment", function() {
        increment();
        $("#popcorn img").fadeOut("fast");
        $("#popcorn img").fadeIn("fast");
    });

    $("#general").on("click", function() {
        $('#space').html(content[0]);
    });

    $("#portfolio").on("click", function() {
        $('#space').html(portfolio[0]);
    });

    $("#contact-me").on('click', function() {
        window.scrollTo(0,document.body.scrollHeight);
    });
});

function increment() {

    if (idx == 3) {
        idx = 0;
    } else {
        idx++;
    }
    execute();
}

function decrement() {

    if (idx == 0) {
        idx = 3;
    } else {
        idx--;
    }
    execute();
}

function execute() {
    $('#space').html(portfolio[idx]);
}
