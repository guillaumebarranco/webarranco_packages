'use strict';

var myLoader = new Loader();

function Loader() {

    this.show = function () {
        var source = arguments.length <= 0 || arguments[0] === undefined ? 'body' : arguments[0];

        var loading = '<div class="loader">\n                <div class="rectangle-bounce selected">\n                  <div class="rect1"></div>\n                  <div class="rect2"></div>\n                  <div class="rect3"></div>\n                  <div class="rect4"></div>\n                  <div class="rect5"></div>\n                </div>\n            </div>';

        $(source).append(loading);

        $('.loader').width($(source).innerWidth()).height($(source).innerHeight()).css({
            'top': $(source).offset().top,
            'left': $(source).offset().left
        }).show();
    };

    this.hide = function () {
        $('.loader').hide().remove();
    };
}
