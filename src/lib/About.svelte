<style>
    .faq {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: 0 auto;
    }

    .faq-question {
        cursor: pointer;
        display: flex;
        gap: 10px;
        align-items: center;
        width: 100%;
        justify-content: space-between;
        text-align: start;
    }

    .faq-answer {
        padding: 0 20px;
        opacity: 0;
        max-height: 0;
        overflow: hidden;
        transition: opacity 300ms linear, max-height 300ms linear;
        will-change: opacity, max-height;
    }

    .faq-answer.active {
        opacity: 1;
        max-height: 9em;
        transition: all 300ms linear;
        will-change: opacity, max-height;
        padding-bottom: 10px;
    }

    .about-block {
        margin-top: 80px;
        display: flex;
        width: 100%;
        gap: 80px;
    }

    .slitter-line {
        height: 2px;
        width: 100%;
        background-color: var(--light-gray);
        margin: 10px 0;
    }

    .faq-logo {
        width: 25px;
        height: 25px;
        margin-right: 15px;
    }

    .faq-index {
        align-self: flex-start;
        margin-bottom: 15px;
    }

    .faq-question-text {
        width: 100%;
    }

    .rest-about-block {
        display: flex;
        gap: 40px;
    }

    @media screen and (max-width: 620px) {
    }



    @media screen and (max-width: 1000px) {
        .about-block {
            flex-direction: column;
            gap: 40px;
        }

        .rest-about-block {
            flex-direction: column;
        }
    }

    @media screen and (min-width: 800px) {
        .rest-about-block {
            position: relative;
            height: 100%;
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 40px;
        }
    }
</style>

<script>
    import GetInTouchButton from "./buttons/GetInTouchButton.svelte";
    import SkillsCarousel from "./carousels/SkillsCarousel.svelte";
    import GetInTouchForm from "./forms/GetInTouchForm.svelte";
    import open from "/icons/open.svg";
    import close from "/icons/close.svg";
    import PlusMinus from "./buttons/PlusMinus.svelte";

    let activeIndex = 0

    const toggleAnswer = (index) => {
        activeIndex = (index === activeIndex ? -1 : index)
    }

    const faqItems = [
        {
            question: "I haven't seen a project similar to mine. Consider mine?",
            answer: "Yes. I consider each project individually, I can even learn special technologies"
        },
        {
            question: "Can you work through guarantor?",
            answer: "Yes. We can work through guarantors like Fiverr, Kwork, etc. (see in \"Get in touch\")"
        },
        {
            question: "What payment methods you can accept?",
            answer: "If we work through guarantors: the methods which service accepted. If directly: Card, Crypto, PayPal"
        },
        {
            question: "How long are you usually respond for message?",
            answer: "ASAP. I try not to take more than an hour"
        },
        {
            question: "Is it possible to see reviews about you?",
            answer: "Yes. You can check the reviews about me in garanteters site (see in \"Get in touch\")"
        }
    ]

    function formatNumber(number) {
        return number.toString().padStart(2, "0");
    }
</script>

<div id="about">
    <SkillsCarousel />
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
                    {#each faqItems as item, i}
                        <div class="faq-item">
                            <button class="faq-question" on:click={() => toggleAnswer(i)}>
                                <p class="description faq-index">{formatNumber(i+1)}</p>
                                <p class="common-bold faq-question-text">{item.question}</p>
                                <PlusMinus status={i === activeIndex && "active"} />
                            </button>
                            <div class="slitter-line"></div>

                            <div class="faq-answer {i == activeIndex && 'active'}">
                                <p class="description">{item.answer}</p>
                            </div>
                        </div>
                    {/each}
                </div>
            </div>
            <GetInTouchForm />
        </div>
    </div>
</div>