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
</style>

<a href={$$props.href} target="_blank" class="get-in-touch-button description-bold {$$props.primary && 'primary'}">
    <slot />
</a>