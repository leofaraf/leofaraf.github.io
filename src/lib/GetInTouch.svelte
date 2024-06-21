<style>
    .email-block {
        text-align: center;
        padding: 40px 0px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-bottom: 100px;
    }

    .email-link {
        display: flex;
        width: 100%;
        justify-content: center;
        /* Warning: Needed for oldIE support, but words are broken up letter-by-letter */
        -ms-word-break: break-all;
        word-break: break-all;
        /* Non standard for webkit */
        word-break: break-word;

        -webkit-hyphens: auto;
        -moz-hyphens: auto;
        -ms-hyphens: auto;
        hyphens: auto;
    }

    .get-in-touch-buttons {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .get-in-touch-contacts {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    
    .arrow-top-icon {
        width: 16px;
        height: 16px;
    }

    @media screen and (max-width: 800px) {
        .arrow-top-icon {
            width: 10px;
            height: 10px;
        }

        .email-block {
            margin-bottom: 50px;
        }
    }

    @media screen and (max-width: 1000px) {
        .big-screen {
            display: none;
        }
    }

    @media screen and (min-width: 1000px) {
        .not-big-screen {
            display: none;
        }
    }
</style>

<script>
    import ContactButton from './buttons/ContactButton.svelte';
    import arrowTop from '/icons/arrows/arrow-top.svg';

    const contacts = [
        {
            title: "TELEGRAM",
            href: "https://t.me/leofaraf",
            primary: true,
            important: true
        },
        {
            title: "FIVERR",
            href: "https://www.fiverr.com/pe/yQbQ75",
            primary: false,
            important: true
        },
        {
            title: "DISCORD",
            href: "https://discordapp.com/users/1106200623260631153",
            primary: false,
            important: false
        }
    ] 
</script>

<div id="get_in_touch">
    <div class="box petty-black-bg">
        <div class="box-inner full">
            <div class="email-block">
                <p class="description-bold gray-text">GET IN TOUCH</p>
                <a class="gray-text" href="mailto:leofaraf@gmail.com">
                    <h1 class="email-link">LEOFARAF@GMAIL.COM</h1>
                </a>
            </div>

            <div class="between-gap">
                <div class="not-big-screen full flex-between">
                    {#each contacts as {title, href, primary, important}}
                        <ContactButton href={href} {primary} {important}>
                            {title}
                        </ContactButton>
                    {/each}
                </div>
    
                <div class="get-in-touch-contacts">
                    <div class="space-column">
                        <p class="description">
                            Georgia
                        </p>
                        <a href="tel:+995500702364" class="common white-text">+995500702364</a>
                    </div>
                    <div class="get-in-touch-buttons big-screen">
                        {#each contacts as {title, href, primary}}
                            <ContactButton href={href} {primary}>
                                {title}
                            </ContactButton>
                        {/each}
                    </div>
                    <div class="space-column">
                        <a href="#home" class="flex-gap justify-end">
                            <p class="description">
                                Back at top
                            </p>
                            <img class="arrow-top-icon" src={arrowTop} alt="arrow-top">
                        </a>
                        <p class="common white-text">Rights Reserved</p>
                    </div>
                </div>
            </div>
            </div>
            
    </div>
</div>