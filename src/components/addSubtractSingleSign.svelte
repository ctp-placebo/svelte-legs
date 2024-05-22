<script>
    /**
	 * @property {number} onAdd
     * @property {number} onSubtract
	 */
     export let onAdd;
     export let onSubtract;

</script>   

<div class="plus-minus-btns">
    <button 
        class="btn btn-circle animate"
        on:click={onSubtract}
    >
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4" /></svg>
       
    </button>
    <button 
        class="btn btn-circle animate"
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
		transition: background-color 0.2s ease;
    }

    button:active {
        @apply bg-primary;
		border: 1px solid; 
		border-color: bg-primary;
    }
    .animate:active {
        animation: moveUpExpand 0.4s ease-in-out;
    }
    @keyframes moveUpExpand {
        0% {
            transform: translateY(0) scale(1);
        }
        50% {
			/* moves up. When x(h), y(v) === +x=move right, -x=left, +y=down, -y=up */
            transform: translate(0rem, -2rem) scale(1.5);
        }
        100% {
            transform: translateY(0) scale(1);
        }
    }
</style>