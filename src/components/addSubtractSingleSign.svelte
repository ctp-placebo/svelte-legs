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
        class="btn btn-circle"
        on:click={onSubtract}
    >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" /></svg>
       
    </button>
    <button 
        class="btn btn-circle"
        on:click={onAdd}
        >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" style="transform: rotate(90deg);"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 12h12M12 6v12" /></svg>
    </button>

</div>

<style>
    .plus-minus-btns {
        display: flex;
        flex-direction: row;
        align-content: center;
        max-height: 2.75rem;
    }
    button {
        margin: 0 0.25rem;
    }

</style>