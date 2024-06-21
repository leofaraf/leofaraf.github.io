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

    /* .logo-box:hover {
        box-shadow: 0 14px 28px var(--light-flesh), 0 10px 10px var(--light-flesh);
    } */

    .logo-box:hover .technology-logo {
        transition: all 0.3s cubic-bezier(.25,.8,.25,.8);
        transform: scale(1.05);
    }
    .logo-box:not(:hover) .technology-logo {
        transition: all 0.3s cubic-bezier(.25,.8,.25,.8);
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
                {
                    website: "https://react.dev/",
                    src: "/technologies/fullstack/react.svg"
                },
                {
                    website: "https://www.postgresql.org/",
                    src: "/technologies/fullstack/postgresql.svg"
                },
                {
                    website: "https://spring.io/",
                    src: "/technologies/fullstack/spring-boot.svg"
                },
                {
                    website: "https://www.rust-lang.org/",
                    src: "/technologies/fullstack/rust.svg"
                },
                {
                    website: "https://tailwindcss.com/",
                    src: "/technologies/fullstack/tailwind-css.svg"
                },
                {
                    website: "https://nodejs.org/",
                    src: "/technologies/fullstack/nodejs.svg"
                },
            ]
        },
        {
            name: "Automatization expert",
            icons: [
                {
                    website: "https://www.python.org/",
                    src: "/technologies/automation/python.svg"
                },
                {
                    website: "https://www.selenium.dev/",
                    src: "/technologies/automation/selenium.svg"
                },
                {
                    website: "https://dolphin-anty.com/",
                    src: "/technologies/automation/dolphin-anty.svg"
                },
            ]
        },
        {
            name: "UI/UX designer",
            icons: [
                {
                    website: "https://www.figma.com/",
                    src: "/technologies/ui-ux/figma.svg"
                },
                {
                    src: "/technologies/ui-ux/table.svg"
                }
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
            {#each profiles[current_profile].icons as {website, src}}
                <a href={website} target="_blank" class="logo-box"><img class="technology-logo" src={src} alt="logo"></a>
            {/each}
        </div>
    </div>
</div>