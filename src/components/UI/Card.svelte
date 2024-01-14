<div class="card bg-base-100 shadow-xl bg-secondary">
    <slot></slot>
    <!--  This is a display only component -->
</div>

<style>
    .card {
        /* using the bg-base-100 class from the tailWindiCSS library & daisyUI as classnames above. */
        min-width: 150px;
        max-width: 5vw;
        /* border: 2px solid var(--ivory);
        background-color: var(--ivory);
        color: var(---black-olive); */
        border-radius: 4%;
        padding: 0.5rem;
        text-align: center;
        border-radius: 12px;
        /* box-shadow: 2px 1px 8px var(--carnation-pink); */
        /* background-image: linear-gradient(to top, var(--ivory), var(--snow)); */
        /* margin: 2rem; because this should not be done here. */

    }
</style>