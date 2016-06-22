const myPopup = new Popup();

class Popup {

    constructor(width = 700, height = 500) {
        this.width = width;
        this.height = height;
    }

    show(title = "Title", content = "") {

        let popup =
            `<div class="layer">
                <div class="popup">
                    <h2>${title}</h2>
                    <div class="content">${content}</div>
                    <div class="close">X</div>
                </div>
            </div>`
        ;

        $('body').append(popup);

        $('.popup')
            .width(this.width)
            .height(this.height)
            .css({
                'margin-left': -this.width/2,
                'margin-top': -this.height/2
            })
        ;

        $('.layer').show();
    };

    hide() {

        $('.loader')
            .hide()
            .remove();
    };
}

myPopup.show('Hello', 'Dude');
