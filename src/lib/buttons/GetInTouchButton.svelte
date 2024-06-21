<style>
    .green-button {
        width: 230px;
        background-color: var(--light-yellow);
        border-radius: 10px;
        border: none;
        text-align: center;
        padding: 20px 0;
    }

    @media screen and (max-width: 500px) {
        .green-button {
            width: 100%;
        }
    }
</style>

<a href="#get_in_touch" class="green-button regular {$$props.class}">
    <slot />
</a>