<style>
    .carousel-header {
        display: flex;
        justify-content: space-between;
        align-items: end;
        height: 100px;
    }

    .carousel-description {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .carousel-content {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        width: 100%;
        justify-content: space-between;
        gap: 10px;
        margin-bottom: -100px;
    }

    .carousel {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }
    
    .logo-box {
        aspect-ratio: 1 / 1;
        display: flex;
        width: 100%;
        min-width: 80px;
        background-color: black;
        border-radius: 10px;
        justify-content: center;
        align-items: center;
    }

    @media screen and (max-width: 620px) {
        .logo-box {
            max-width: 100px;
        }

        .carousel-content {
            display: grid;
            justify-items: center;
            grid-template-columns: repeat(3, minmax(0, 1fr));
        }
    }

    @media screen and (max-width: 800px) {
        .carousel-header {
            height: 40px;
        }
    }
</style>

<script>
    import arrow_left from '../../assets/arrows/arrow-left.svg'
    import arrow_right from '../../assets/arrows/arrow-right.svg'

    const profiles = [
        {
            name: "Fullstack developer",
            icons: [
                "/technologies/fullstack/react.svg",
                "/technologies/fullstack/postgresql.svg",
                "/technologies/fullstack/spring-boot.svg",
                "/technologies/fullstack/rust.svg",
                "/technologies/fullstack/tailwind-css.svg",
                "/technologies/fullstack/nodejs.svg",
            ]
        },
        {
            name: "Automatization expert",
            icons: [
                "/technologies/automation/python.svg",
                "/technologies/automation/selenium.svg",
                "/technologies/automation/dolphin-anty.svg",
            ]
        },
        {
            name: "UI/UX designer",
            icons: [
                "/technologies/ui-ux/figma.svg",
                "/technologies/ui-ux/table.svg"
            ]
        }
    ]

    let current_profile = 0;

    const handle_arrow_left = () => {
        if (current_profile === 0) {
            current_profile = profiles.length - 1;
        } else {
            current_profile--;
        };
    }

    const handle_arrow_right = () => {
        if (current_profile === profiles.length - 1) {
            current_profile = 0;
        } else {
            current_profile++;
        };
    }
</script>

<div class="box petty-black-bg">
    <div class="box-inner full carousel">
        <p class="description mobile">Hard skills</p>
        <div class="carousel-header">
            <div class="carousel-description">
                <p class="description desktop">Hard skills</p>
                <h3>{profiles[current_profile].name}</h3>
            </div>
            <div class="gap-and-between">
                <button class="btn-gray-full-rounded" on:click={handle_arrow_left}>
                    <img class="arrow-logo" src={arrow_left} alt="arrow-left">
                </button>
                <button class="btn-gray-full-rounded" on:click={handle_arrow_right}>
                    <img class="arrow-logo" src={arrow_right} alt="arrow-right">
                </button>
            </div>
        </div>
        <div class="carousel-content">
            {#each profiles[current_profile].icons as icon}
                <div class="logo-box"><img class="technology-logo" src={icon} alt="logo"></div>
            {/each}
        </div>
    </div>
</div>