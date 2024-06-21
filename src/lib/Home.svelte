<style>
    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    @media screen and (min-width: 800px) {
        ul {
            width: auto;
            gap: 40px;
        }
    }
</style>

<script>
    import open_in_full from '../assets/profiles/open_in_full.svg'
    import auto from '../assets/profiles/auto.svg'
    import draw from '../assets/profiles/draw.svg'
    import GetInTouchButton from './buttons/GetInTouchButton.svelte';
</script>

<div id="home" class="box">
    <div class="box-inner">
        <div class="navbar">
            <h2>Leon Farafonov</h2>
            <ul class="regular">
                <li class="regular home"><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#works">Works</a></li>
                <li><a href="#get_in_touch">Get in touch</a></li>
            </ul>
        </div>
        <h1 class="main">
            <span class="text-in-black-rentangle">Turning ideas</span> into
            reality
            with innovative
            <span class="text-in-black-rentangle">Web solutions.</span>
        </h1>
        <div class="flex-between">
            <div>
                <p class="description">Quick results within a few weeks, not months.</p>
                <h1 class="nowrap">Who am I?</h1>
            </div>
            <GetInTouchButton class="desktop">
                Get in touch
            </GetInTouchButton>
        </div>
        <div class="main-list">
            <div class="main-list-item">
                <div class="icon-conteiner">
                    <img src={open_in_full} class="icon" alt="icon">
                </div>
                <h3>Fullstack developer</h3>
                <p class="common">
                    Experienced in crafting full-stack web applications, from user-friendly interfaces (front-end) 
                    to powerful functionalities (back-end) and data management (databases).
                </p>
            </div>
            <div class="main-list-item">
                <div class="icon-conteiner">
                    <img src={auto} class="icon" alt="icon">
                </div>
                <h3>Automatization expert</h3>
                <p class="common">
                    Experienced in streamlining business processes through automation.
                    Skilled at integrating APIs and writing robust scripts to improve efficiency and accuracy.
                </p>
            </div>
            <div class="main-list-item">
                <div class="icon-conteiner">
                    <img src={draw} class="icon" alt="icon">
                </div>
                <h3>UI/UX designer</h3>
                <p class="common">
                    Designing intuitive and user-centric interfaces that prioritize usability and aesthetics.
                    Passionate about creating engaging and visually appealing interfaces that foster user satisfaction.
                </p>
            </div>
        </div>
        <div class="centered-on-mobile">
            <GetInTouchButton class="mobile">
                Get in touch
            </GetInTouchButton>
        </div>
    </div>
</div>