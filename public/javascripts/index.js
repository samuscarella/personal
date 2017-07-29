
var idx = 0;
var portfolio = ['<div id="popcorn" class="container-fluid portfolio-container"> <div class="row"> <div class="col-md-12 navigator"> <a id="decrement"><img src="/images/arrow-left.png" class="arrows left-arrow"></a><img src="/images/popcorn.png" class="ma-and-pa-main-image"><a id="increment"><img src="/images/arrow-right.png" class="arrows right-arrow"/></a></div> <div class="row"> <div class="col-md-12"> <h1 class="main-project-title">Popcorn Shop</h1> </div> </div> <div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/mapa-login.png" class="app-img float-right" id="app-img-seven"> </div> <div class="col-md-4 app-img-col"> <img src="/images/mapa-shop.png" class="app-img" id="app-img-eight"> </div> <div class="col-md-4 app-img-col"> <img src="/images/mapa-products.png" class="app-img float-left" id="app-img-nine"> </div> </div> <div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/mapa-cart.png" class="app-img float-right" id="app-img-ten"> </div> <div class="col-md-4 app-img-col"> <img src="/images/mapa-blue.png" class="app-img" id="app-img-eleven"> </div> <div class="col-md-4 app-img-col"> <img src="/images/mapa-form.png" class="app-img float-left" id="app-img-twelve"> </div> </div></div>',
    '<div id="popcorn" class="container-fluid portfolio-container"> <div class="row"> <div class="col-md-12 navigator"> <a id="decrement"><img src="/images/arrow-left.png" class="arrows left-arrow"></a><img src="/images/fruit.png" class="main-image"><a id="increment"><img src="/images/arrow-right.png" class="arrows right-arrow"/></a> </div></div><div class="row"> <div class="col-md-12"> <h1 class="main-project-title">Wellness</h1> </div></div><div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/login.png" class="app-img float-right" id="app-img-seven"> </div><div class="col-md-4 app-img-col"> <img src="/images/home-graph.png" class="app-img" id="app-img-eight"> </div><div class="col-md-4 app-img-col"> <img src="/images/challenge-detail.png" class="app-img float-left" id="app-img-nine"> </div></div><div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/stats.png" class="app-img float-right" id="app-img-ten"> </div><div class="col-md-4 app-img-col"> <img src="/images/verification.png" class="app-img" id="app-img-eleven"> </div><div class="col-md-4 app-img-col"> <img src="/images/no-groups.png" class="app-img float-left" id="app-img-twelve"> </div></div></div>',
    '<div id="popcorn" class="container-fluid portfolio-container"> <div class="row"> <div class="col-md-12 navigator"> <a id="decrement"><img src="/images/arrow-left.png" class="arrows left-arrow"></a><img src="/images/momentz-logo.png" class="moments-main-image"><a id="increment"><img src="/images/arrow-right.png" class="arrows right-arrow"/></a> </div></div><div class="row"> <div class="col-md-12"> <h1 class="main-project-title">Momentz</h1> </div></div><div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/moments-login.png" class="app-img float-right" id="app-img-seven"> </div><div class="col-md-4 app-img-col"> <img src="/images/moments-dashboard.png" class="app-img" id="app-img-eight"> </div><div class="col-md-4 app-img-col"> <img src="/images/moments-detail.png" class="app-img float-left" id="app-img-nine"> </div></div><div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/moments-new.png" class="app-img float-right" id="app-img-ten"> </div><div class="col-md-4 app-img-col"> <img src="/images/moment-map.png" class="app-img" id="app-img-eleven"> </div><div class="col-md-4 app-img-col"> <img src="/images/moment-media-type.png" class="app-img float-left" id="app-img-twelve"> </div></div></div>',
    '<div id="popcorn" class="container-fluid portfolio-container"> <div class="row"> <div class="col-md-12 navigator"> <a id="decrement"><img src="/images/arrow-left.png" class="arrows left-arrow"></a><img src="/images/exploding_sun.png" class="moments-main-image"><a id="increment"><img src="/images/arrow-right.png" class="arrows right-arrow"/></a> </div></div><div class="row"> <div class="col-md-12"> <h1 class="main-project-title">Diffuze</h1> </div></div><div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/login-vc.png" class="app-img float-right" id="app-img-ten"> </div> <div class="col-md-4 app-img-col"> <img src="/images/new-post.png" class="app-img" id="app-img-eleven"> </div> <div class="col-md-4 app-img-col"> <img src="/images/diffuze-detail.png" class="app-img float-left" id="app-img-twelve"> </div> </div> <div class="row app-img-row"> <div class="col-md-4 app-img-col"> <img src="/images/bomb_vc.png" class="app-img float-right" id="app-img-ten"> </div> <div class="col-md-4 app-img-col"> <img src="/images/audio-post.png" class="app-img" id="app-img-eleven"> </div> <div class="col-md-4 app-img-col"> <img src="/images/followers.png" class="app-img float-left" id="app-img-twelve"> </div> </div></div>'];

$(document).ready(function() {

    execute();

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
