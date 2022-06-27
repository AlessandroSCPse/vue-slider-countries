var app = new Vue(
    {
        el: '#root',
        data: {
            sliderAutoplay: null,
            currentActiveElement: 0,
            slides: [
                {
                    image: 'img/01.jpg',
                    title: 'Svezia',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
                },
                {
                    image: 'img/02.jpg',
                    title: 'Svizzera',
                    text: 'Lorem ipsum.',
                },
                {
                    image: 'img/03.jpg',
                    title: 'Gran Bretagna',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
                },
                {
                    image: 'img/04.jpg',
                    title: 'Germania',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam.',
                },
                {
                    image: 'img/05.jpg',
                    title: 'Paradise',
                    text: 'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis.',
                }
            ],
        },
        methods: {
            showNextElement() {
                // Se non sono ancora all'ultima chiave dell'array incremento
                if(this.currentActiveElement < this.slides.length - 1) {
                    this.currentActiveElement++;
                } else {
                    this.currentActiveElement = 0;
                }
            },
            showPreviousElement() {
                // Se non sono alla prima chiave dell'array posso decrementare
                if(this.currentActiveElement > 0) {
                    this.currentActiveElement--;
                } else {
                    this.currentActiveElement = this.slides.length - 1;
                }
            },
            setActiveElement(thumbIndex) {
                // this.currentActiveElement uguale all'indice dell'elemento su cui ho cliccato
                this.currentActiveElement = thumbIndex;
            },
            stopAutoplay() {
                // Stoppare il setInterval
                clearInterval(this.sliderAutoplay);
                this.sliderAutoplay = null;
            },
            startAutoplay() {
                this.sliderAutoplay = setInterval(this.showNextElement, 1000);
            }
        },
        mounted() {
            this.startAutoplay();
        }
    }
);