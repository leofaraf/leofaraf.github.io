import react from '/public/technologies/react.svg'

class About extends HTMLElement {
    constructor() {
        super();

        this.innerHTML = html`
            <div class="box petty-black-bg">
                <div class="box-inner full carousel">
                    <p class="description mobile">Hard skills</p>
                    <div class="carousel-header">
                        <div class="carousel-description">
                            <p class="description desktop">Hard skills</p>
                            <h3>Fullstack developer</h3>
                        </div>
                        <div class="gap-and-between">
                            <button class="btn-gray-full-rounded">
                                <img class="arrow-logo" src="/assets/logos/arrow-left.svg" alt="arrow-left">
                            </button>
                            <button class="btn-gray-full-rounded">
                                <img class="arrow-logo" src="/assets/logos/arrow-right.svg" alt="arrow-right">
                            </button>
                        </div>
                    </div>
                    <div class="carousel-content">
                        <div class="logo-box"><img class="technology-logo" src=${react} alt="logo"></div>
                        <div class="logo-box"><img class="technology-logo" src=${react} alt="logo"></div>
                        <div class="logo-box"><img class="technology-logo" src=${react} alt="logo"></div>
                        <div class="logo-box"><img class="technology-logo" src=${react} alt="logo"></div>
                        <div class="logo-box"><img class="technology-logo" src=${react} alt="logo"></div>
                        <div class="logo-box"><img class="technology-logo" src=${react} alt="logo"></div>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="box-inner about-block">
                    <div class="rest-about-block">
                        <div>
                            <p class="description">Languages</p>
                            <p class="common">
                                Russian - native<br/>
                                English - B2<br/>
                                German - A1<br/>
                            </p>
                        </div>
                        <div class="qustions-block faq">
                            <div class="faq-item">
                                <h3 class="faq-question">01. Я не видел проекта, похожего на мой. Вы возьметесь за него?</h3>
                                <div class="faq-answer active">
                                <p>Да, я рассматриваю каждый проект индивидуально. Могу даже изучить специальные технологии.</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <h3 class="faq-question">02. Можно ли работать через гаранта?</h3>
                                <div class="faq-answer">
                                <p>...</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <h3 class="faq-question">03. Какие методы оплаты вы принимаете?</h3>
                                <div class="faq-answer">
                                <p>...</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <h3 class="faq-question">04. Как долго вы обычно отвечаете на сообщения?</h3>
                                <div class="faq-answer">
                                <p>...</p>
                                </div>
                            </div>
                            <div class="faq-item">
                                <h3 class="faq-question">05. Можно ли посмотреть отзывы о вас?</h3>
                                <div class="faq-answer">
                                <p>...</p>
                                </div>
                            </div>
                        </div>
                        <script src="/scripts/faq.js"></script>
                    </div>
                    <span class="get-in-touch-block">
                        <div class="get-in-touch-form">

                        </div>
                    </span>
                </div>
            </div>
        `
    }
}

customElements.define("about-section", About)