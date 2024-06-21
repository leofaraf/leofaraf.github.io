<style>
    .get-in-touch-form {
        width: 290px;
        height: 440px;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        padding: 30px;
    }

    .send-email-icon-box {
        background-color: var(--flesh);
        width: 105px;
        height: 105px;
        border-radius: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .send-email-icon {
        width: 48px;
        height: 40px;
    }

    .get-in-touch-form-rest {
        position: relative;
        height: 250px;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }

    .centered-text {
        text-align: center;
    }
    
    .line {
        background-color: var(--light-gray);
        width: 100%;
        height: 1px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .fresh-and-padding {
        background-color: var(--light-flesh);
        padding: 0 10px;
    }

    @media screen and (max-width: 620px) {
        .get-in-touch-form {
            width: 100%;
        }
    }

    @media screen and (max-width: 1000px) {
        .get-in-touch-block {
            display: flex;
            width: 100%;
            box-sizing: border-box;
            justify-content: center;
        }
    }
</style>

<script>
    import GetInTouchButton from "../buttons/GetInTouchButton.svelte";
    import email from "/icons/email.svg"
</script>

<span class="get-in-touch-block">
    <div class="get-in-touch-form light-flesh-bg centered-text">
        <h2>
            Have Any Project<br>
            in Your Mind?
        </h2>
        <div class="get-in-touch-form-rest">
            <div class="line"></div>
            <a href="mailto:leofaraf@gmail.com" class="send-email-icon-box">
                <img src={email} alt="email" class="send-email-icon">
            </a>
            <div class="column-and-gap full">
                <p class="regular">Write a letter</p>
                <div class="line">
                    <p class="mini-regular fresh-and-padding">or</p>
                </div>
            </div>
        </div>
        <GetInTouchButton class="full">
            Other methods
        </GetInTouchButton>
    </div>
</span>