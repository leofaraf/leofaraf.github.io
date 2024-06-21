<style>
    .get-in-touch-button {
        color: white;
        border: 2px solid white;
        padding: 10px 15px;
        border-radius: 50px;
    }

    .get-in-touch-button.primary {
        color: black;
        border: none;
        background-color: white;
        color: black;
        padding: 10px 15px;
        border-radius: 50px;
    }

    @media screen and (max-width: 400px) {
        .get-in-touch-button:not(.important) {
            display: none;
        }
    }
</style>

<a href={$$props.href} target="_blank" class="get-in-touch-button description-bold {$$props.important && 'important'} {$$props.primary && 'primary'}">
    <slot />
</a>