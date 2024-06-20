<style>
    .company-review-box {
        margin-top: 100px;
        height: 500px;
        padding: 75px;
        border-radius: 10px;
        display: flex;
    }

    .company-review-box-inner {
        border-radius: 10px;
        padding: 70px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        gap: 40px;
    }

    .company-review-photo {
        width: 230px;
        min-width: 230px;
        height: auto;
        border-radius: 15px;
        background-position: -50px;
        background-size: cover;
    }

    .company-review-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
    }

    .company-review-text {
        height: 100%;
        padding: 15px 0;
    }

    @media screen and (max-width: 620px) {
        .company-review-box-inner {
            flex-direction: column;
        }

        .company-review-photo {
            height: 140px;
            width: 100%;
            min-width: 0;
            background-position: 0px -50px;
        }
    }

    @media screen and (max-width: 800px) {
        .company-review-box {
            padding: 40px 20px;
        }

        .company-review-box-inner {
            padding: 40px;
        }

        .company-review-box-inner {
            gap: 20px;
        }

        .company-review-box {
            height: 375px;
        }
    }

    @media screen and (max-width: 1000px) {
        .company-review-box {
            padding: 40px 20px;
        }

        .company-review-box-inner {
            padding: 40px;
        }
    }
</style>

<script>
    import WorksCarousel from "./carousels/WorksCarousel.svelte";
    import founderPhoto from "/images/founder_photo.jpg"
</script>

<div id="works">
    <WorksCarousel />
    <div class="box">
        <div class="box-inner full">
            <div class="company-review-box light-flesh-bg">
                <div class="company-review-box-inner flesh-bg">
                    <div class="company-review-photo" alt="founder_photo"
                    style="background-image: url({founderPhoto});"></div>
                    <div class="company-review-content">
                        <p class="description-bold">FAST-LEADS</p>
                        <p class="company-review-text description">
                            “I'm excited about the real estate CRM we've developed together.
                            Your contributions have ensured it will be a comprehensive and user-friendly platform for our team.”
                        </p>
                        <p class="description-bold underline">Founder. Nelly Farafonova</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>