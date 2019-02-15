$(".Co").hide();

$(".Land").click(function() {
    $("body").css("background-image", "url('http://sciencenordic.com/sites/default/files/imagecache/620x/arktis_2.jpg')");
    $(".Land").hide();
    $(".Co").slideDown();
});

$(".CO").hide();
$(".GET").hide();

$(".Co").click(function() {
    $(".Co").fadeOut();
    $(".CO").toggle();
    $(".GET").slideToggle();
});

$(".Pen").hide();

$(".GET").dblclick(function() {
    $(".CO").text("AWWWWW!!!! He is so cute. You better think so too!");
    $(".GET").slideToggle();
    $("body").css("background-image", "url('https://png.pngtree.com/thumb_back/fw800/back_pic/04/08/69/57581452d853b49.jpg')");
    $(".Pen").fadeIn();
});

$(".Pen").mouseenter(function() {
    $(".CO").text("Big Boss, I think I see something shiny on him.");
});

$(".me").hide();
$(".Pen").mouseleave(function() {
    $(".CO").text("Quick boss!!! He is getting away!!!");
    $(".Pen").slideUp();
    $(".me").fadeIn();
});

$(".Me").hide();
$(".me").click(function() {
    $(".CO").text("Why is he so fast!!?");
    $("body").css("background-image", "url('https://cdn6.dissolve.com/p/D256_47_234/D256_47_234_1200.jpg')");
    $(".me").hide();
    $(".Me").show();
});

$(".spen").hide();
$(".Me").dblclick(function() {
    $(".spen").show();
    $(".spen").css("height", "50px");
    $(".Me").hide();
});

$(".G").hide();
$(".spen").hover(function() {
    $(".CO").text("So thats what you had on ya!!!");
    $(".G").css("height", "300px");
    $(".spen").hide();
    $(".G").show();
});

$(".G").click(function() {
    $(".body").css("background-color", "lightblue");
    $(".CO").text("Don't mind if I take this from you, Pengu!");
});










