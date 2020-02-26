const ready = (callback) => {
    window.addEventListener('DOMContentLoaded', (e) => {
        callback(e);
    })
}

const changeBox1 = (src) => {
    let fullimg = document.getElementById('imagebox-1');
    fullimg.src = src.src;
}

const changeBox2 = (src) => {
    let fullimg = document.getElementById('imagebox-2');
    fullimg.src = src.src;
}

const changeBox3 = (src) => {
    let fullimg = document.getElementById('imagebox-3');
    fullimg.src = src.src;
}

const changeBox4 = (src) => {
    let fullimg = document.getElementById('imagebox-4');
    fullimg.src = src.src;
}

const changeBox5 = (src) => {
    let fullimg = document.getElementById('imagebox-5');
    fullimg.src = src.src;
}

const changeBox6 = (src) => {
    let fullimg = document.getElementById('imagebox-6');
    fullimg.src = src.src;
}

const changeBox7 = (src) => {
    let fullimg = document.getElementById('imagebox-7');
    fullimg.src = src.src;
}

const changeBox8 = (src) => {
    let fullimg = document.getElementById('imagebox-8');
    fullimg.src = src.src;
}

ready(() => {
    const modalToggler = (buttonClass, modalClass) => {
        let btn = document.querySelectorAll(buttonClass),
            modal = document.querySelector(modalClass),
            closetBtn = document.querySelector(`${modalClass} .close-btn`),
            modalBackground = document.querySelector(`${modalClass} .modal-background`);

        if (modal) {
            btn.forEach(one => {
                one.addEventListener('click', () => {
                    modal.classList.add('active');
                });
            });

            [closetBtn, modalBackground].forEach(one => {
                one.addEventListener('click', () => {
                    modal.classList.remove('active');
                });
            });
        }
    }

    modalToggler('.open-detailed-1', '.modal-detailed-1');
    modalToggler('.open-detailed-2', '.modal-detailed-2');
    modalToggler('.open-detailed-3', '.modal-detailed-3');
    modalToggler('.open-detailed-4', '.modal-detailed-4');
    modalToggler('.open-detailed-5', '.modal-detailed-5');
    modalToggler('.open-detailed-6', '.modal-detailed-6');
    modalToggler('.open-detailed-6', '.modal-detailed-7');
    modalToggler('.open-detailed-6', '.modal-detailed-8');

    modalToggler('.open-consult-1', '.consult-1-modal');
    modalToggler('.open-consult-2', '.consult-2-modal');
    modalToggler('.open-consult-3', '.consult-3-modal');
    modalToggler('.open-consult-4', '.consult-4-modal');
    modalToggler('.open-consult-5', '.consult-5-modal');
    modalToggler('.open-consult-6', '.consult-6-modal');
    modalToggler('.open-consult-6', '.consult-7-modal');
    modalToggler('.open-consult-6', '.consult-8-modal');

    const form = document.querySelectorAll('.form');
    form.forEach(one => {
        one.addEventListener('submit', (e) => {
            e.preventDefault();
            $.ajax({
                method: "POST",
                url: "../send.php",
                data: $(one).serialize(),
            })
            .done(function() {
                one.parentNode.classList.add('done');
                one.reset();
            });
        });
    });

});

ready(() => {
    const MenuClassToggler = () => {
        const btn = document.querySelector('.navbar-toggler .btn');
        const menu = document.querySelector('.navbar-menu');

        btn.addEventListener('click', () => {
            btn.classList.toggle('active');
            menu.classList.toggle('active');
            document.querySelector('body').classList.toggle('overhidden');
        });
    }

    MenuClassToggler();

    const closeMenu = () => {
        const menu = document.querySelector('.navbar-menu');
        menu.classList.remove('active');
        document.querySelector('body').classList.remove('overhidden');
    }

    let scrollToAnchor = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                closeMenu();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });
    }

    scrollToAnchor();
});

ready(() => {
    const fixOnScroll = (elementSelector, targetSelector) => {
        const element = document.querySelector(elementSelector);
        const target = document.querySelector(targetSelector);

        window.addEventListener('scroll', () => {
            const topofElement = element.getBoundingClientRect().top + pageYOffset - (window.innerHeight / 2);
            const height = element.getBoundingClientRect().height;
            const diff = scrollY - topofElement;




            let some = diff * 100 / height;
            if(some < 0) {
                some = 0;
            } else if(some > 100) {
                some = 100;
            }
            target.style.top = `${some.toFixed(0)}%`;
            target.style.transform = `translateY(-${some.toFixed(0)}%)`;
        });
    }

    fixOnScroll('#trtr-1', '#trtr-1 .trtr-gallery');
    fixOnScroll('#trtr-2', '#trtr-2 .trtr-gallery');
    fixOnScroll('#trtr-3', '#trtr-3 .trtr-gallery');
    fixOnScroll('#trtr-4', '#trtr-4 .trtr-gallery');
    fixOnScroll('#trtr-5', '#trtr-5 .trtr-gallery');
    fixOnScroll('#trtr-6', '#trtr-6 .trtr-gallery');
    fixOnScroll('#trtr-7', '#trtr-7 .trtr-gallery');
    fixOnScroll('#trtr-8', '#trtr-8 .trtr-gallery');
});

ready(() => {
    $(document).bind('mousewheel', function (e) {
        var nt = $(document.body).scrollTop() - (e.deltaY * e.deltaFactor * 100);
        e.preventDefault();
        e.stopPropagation();
        $(document.body).stop().animate({
            scrollTop: nt
        }, 500, 'easeInOutCubic');
    });
});