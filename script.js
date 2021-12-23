var days, birthday;
var hello = birthday;






function pageRedirect() {
    if (days < 0) {
      window.location.replace("./hello.html");

    }

}
setTimeout('pageRedirect()', 9000);

$(document).ready(function () {

    $(window).trigger('resize');
    $(window).trigger('resize');
    var dd = "January 27, 2022";
    var dd1 = "27th January";
       var deadline = new Date(dd + " 00:00:00").getTime();
    var x = setInterval(function () {

        var now = new Date().getTime();
        var t = deadline - now;

        days = Math.floor(t / (1000 * 60 * 60 * 24));


        var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((t % (1000 * 60)) / 1000);
        var e = document.getElementsByClassName("countdown");

        jQuery('.countdown').html("<div class='counter-section'><div class='counter-wrap'><div class='counter-container'><div class='counter-box'><p class='counter-time'>" + days + "</p><p class='counter-tag'>days</p></div>" + "<div class='counter-box'><p class='counter-time'>" + hours + "</p><p class='counter-tag'>hrs</p></div>" + "<div class='counter-box'><p class='counter-time'>" + minutes + "</p><p class='counter-tag'>mins</p></div>" + "<div class='counter-box'><p class='counter-time'>" + seconds + "</p><p class='counter-tag'>secs</p></div></div></div></div>");
        // if (days < 0) {
        // 	url = './index.html';
        // 		window.location.replace = url;

        // 		}
        pageRedirect();

        $('#to').html(dd1);




    }, 1000);

});



