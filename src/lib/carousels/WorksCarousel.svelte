<style>
    .carousel {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

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

        
    .work-carousel.no-transition {
        scroll-behavior: auto;
    }

    .card-image {
        width: 100%;
        height: 200px;
        background-size: cover;
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

    .wrapper {
        width: 100%;
        position: relative;
        left: 0;
    }

    .wrapper i {
        top: 50%;
        height: 50px;
        width: 50px;
        cursor: pointer;
        font-size: 1.25rem;
        position: absolute;
        text-align: center;
        line-height: 50px;
        background: #fff;
        border-radius: 50%;
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
        transform: translateY(-50%);
        transition: transform 0.1s linear;
    }
    .wrapper i:active {
        transform: translateY(-50%) scale(0.85);
    }
    .wrapper i:first-child {
        left: -22px;
    }
    .wrapper i:last-child {
        right: -22px;
    }
    
    .wrapper .work-carousel {
        display: grid;
        grid-auto-flow: column;
        grid-auto-columns: calc((100% / 2));
        overflow-x: auto;
        scroll-snap-type: x mandatory;
        gap: 16px;
        border-radius: 8px;
        scroll-behavior: smooth;
        scrollbar-width: none;
        margin-bottom: -300px;
    }

    .work-carousel::-webkit-scrollbar {
        display: none;
    }
    
    .work-carousel.dragging {
        scroll-snap-type: none;
        scroll-behavior: auto;
    }
    .work-carousel.dragging .card {
        cursor: grab;
        user-select: none;
    }

    .work-carousel .card {
        background-color: black;
        border-radius: 10px;
        padding: 30px;
        gap: 10px;
        padding-top: 50px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-sizing: border-box;
        color: white;
    }

    @media only screen and (min-width: 1000px) {
        .wrapper .work-carousel {
            grid-auto-columns: calc((100% / 3));
        }
    }
    
    @media only screen and (min-width: 800px) {
        .card {
            height: 470px;
        }
    }
    
     
    @media only screen and (max-width: 800px) {
        .wrapper .work-carousel {
            grid-auto-columns: calc((100% / 2) - 40px);
            width: calc(100vw - 80px);
            margin-bottom: -200px;
        }

        .card {
            height: 320px;
        }
    }

    @media screen and (max-width: 600px) {
        .wrapper .work-carousel {
            grid-auto-columns: 100%;
        }
    }
</style>

<script>
    import { onMount } from 'svelte';
    import arrow_left from '../../assets/arrows/arrow-left.svg'
    import arrow_right from '../../assets/arrows/arrow-right.svg'

    import converterPy from '/images/works/3d-converter-py.png'
    import autoclickergui from '/images/works/autoclickergui.png'
    import launcher from '/images/works/launcher.jpg'
    import realEstateCrm from '/images/works/real-estate-crm.png'

    const works = [
        {
            src: converterPy,
            title: "Open-source 3D models convertor",
            description: "3d-converter-py models convertor which support obj, dae, glb, fbx, ply, stl",
            date: "Feb, 28, 2024",
            category: "Automation"
        },
        {
            src: launcher,
            title: "Game launcher (GUI)",
            description: "Cross-platform, high performance game launcher for famous youtuber (1M+)",
            date: "Sep, 3, 2024",
            category: "Fullstack"
        },
        {
            src: realEstateCrm,
            title: "Real-estate CRM",
            description: "CRM that helps brokers target clients",
            date: "Sep, 30, 2023",
            category: "Fullstack"
        },
        {
            src: autoclickergui,
            title: "Open-source autoclicker, 1200 CPS+",
            description: "AutoClickeRGUI. Rust-written low-level, competitors reach aroud 70 CPS",
            date: "Aug, 20, 2023",
            category: "Fullstack"
        },
    ]

    let wrapperElement;

    onMount(e => {
        const wrapper = wrapperElement.querySelector(".wrapper");
        const carousel = wrapperElement.querySelector(".work-carousel");
        const firstCardWidth = carousel.querySelector(".card").offsetWidth;
        const arrowBtns = wrapperElement.querySelectorAll("button");
        const carouselChildrens = [...carousel.children];

        let isDragging = false,
            isAutoPlay = true,
            startX,
            startScrollLeft,
            timeoutId;

        // Get the number of cards that can fit in the carousel at once
        let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

        // Insert copies of the last few cards to beginning of carousel for infinite scrolling
        carouselChildrens
            .slice(-cardPerView)
            .reverse()
            .forEach((card) => {
                carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
            });

        // Insert copies of the first few cards to end of carousel for infinite scrolling
        carouselChildrens.slice(0, cardPerView).forEach((card) => {
            carousel.insertAdjacentHTML("beforeend", card.outerHTML);
        });

        // Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");

        // Add event listeners for the arrow buttons to scroll the carousel left and right
        arrowBtns.forEach((btn) => {
            btn.addEventListener("click", () => {
                carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
            });
        });

        const dragStart = (e) => {
            isDragging = true;
            carousel.classList.add("dragging");
            // Records the initial cursor and scroll position of the carousel
            startX = e.pageX;
            startScrollLeft = carousel.scrollLeft;
        };

        const dragging = (e) => {
            if (!isDragging) return; // if isDragging is false return from here
            // Updates the scroll position of the carousel based on the cursor movement
            carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
        };

        const dragStop = () => {
            isDragging = false;
            carousel.classList.remove("dragging");
        };

        const infiniteScroll = () => {
            // If the carousel is at the beginning, scroll to the end
            if (carousel.scrollLeft === 0) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }
            // If the carousel is at the end, scroll to the beginning
            else if (
                Math.ceil(carousel.scrollLeft) ===
                carousel.scrollWidth - carousel.offsetWidth
            ) {
                carousel.classList.add("no-transition");
                carousel.scrollLeft = carousel.offsetWidth;
                carousel.classList.remove("no-transition");
            }

            // Clear existing timeout & start autoplay if mouse is not hovering over carousel
            clearTimeout(timeoutId);
        };

        carousel.addEventListener("scroll", infiniteScroll);
    })
</script>

<div class="box petty-black-bg">
    <div class="box-inner full carousel" bind:this={wrapperElement}>
        <div class="carousel-header">
            <div class="carousel-description">
                <p class="description">Some of our recent work</p>
            </div>
            <div class="gap-and-between">
                <button id="left" class="btn-gray-full-rounded">
                    <img class="arrow-logo" src={arrow_left} alt="arrow-left">
                </button>
                <button id="right" class="btn-gray-full-rounded">
                    <img class="arrow-logo" src={arrow_right} alt="arrow-right">
                </button>
            </div>
        </div>
        <div class="wrapper">
            <ul class="work-carousel">
                {#each works as {src, title, description, date, category}}
                    <li class="card">
                        <h2>{title}</h2>
                        <p class="description">
                            {description}
                        </p>
                        <div style="background-image: url({src});" alt="card-image" class="card-image"></div>
                        <div class="carousel-item-bottom flex-between">
                            <p class="description">
                                Date: 
                                <span class="white-text">{date}</span>
                            </p>
                            <p class="description white-text">
                                {category}
                            </p>
                        </div>
                    </li>
                {/each}
            </ul>
        </div>
    </div>
</div>