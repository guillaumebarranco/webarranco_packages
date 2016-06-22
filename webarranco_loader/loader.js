const myLoader = new Loader();

class Loader {

    constructor() {
        
    }

    show(source = 'body') {

        let loading =
            `<div class="loader">
                <div class="rectangle-bounce selected">
                  <div class="rect1"></div>
                  <div class="rect2"></div>
                  <div class="rect3"></div>
                  <div class="rect4"></div>
                  <div class="rect5"></div>
                </div>
            </div>`
        ;

        $(source).append(loading);

        $('.loader')
            .width($(source).innerWidth())
            .height($(source).innerHeight())
            .css({
                'top': $(source).offset().top,
                'left': $(source).offset().left
            })
            .show()
        ;
    };

    hide() {
        $('.loader')
            .hide()
            .remove();
    };
}
