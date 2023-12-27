<script>
    /**
	 * @type {any}
	 */
     export let onAdd;
    /**
	 * @type {any}
	 */
     export let onSubtract;

</script>

<div class="plus-minus-btns">
    <button 
        class="more-or-less minus" 
        on:click={onSubtract}
        >
            <i class="mi mi-circle-remove">
                <span class="u-sr-only">Fjern en</span>
            </i>
        </button>
    <button class="more-or-less plus" on:click={onAdd}>
        <i class="mi mi-circle-add"><span class="u-sr-only">Legg til</span></i>
    </button>
</div>

<style>
    .plus-minus-btns {
        display: flex;
        flex-direction: row;
        align-content: center;
        max-height: 2.75rem;
    }
    .plus, .minus {
        text-align: center;
        vertical-align: baseline;
        background-color: transparent;
        border: none;
        
    }
    .plus i {
        font-size: 2.75rem;
        color: var(--light-green);
        text-shadow: 0px 2px 1px green;
    }
    .plus i:active {
        font-size: 3.25rem;
        color: var(--lemon-lime);
        transform: rotate(360deg);
    }


    .minus i {
        font-size: 1.5rem;
        color: var(--powder-blue);
    }
</style>