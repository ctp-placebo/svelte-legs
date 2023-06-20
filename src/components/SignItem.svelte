<script>
    import AddSubtractSingleSign from './addSubtractSingleSign.svelte';

    /**
	* @type {string}
	*/
    export let name;
    /**
	* @type {number}
	*/
    export let numberLegs;
    /**
	* @type {number}
	*/
    export let counter; 
    /**
	* @type {string}
	*/
    export let namePlural;
    /**
	 * @type {string}
	 */
     export let imgPath;

     export let increase = () => {
        counter += 1;
     };
     export let decrease = () => {
        if (counter > 0) {
            counter -= 1;
        }
     };
</script>

<div class="sign-item">
    <img class="sign-img" alt="" src="{imgPath}" />
    <h1 class="name">{name}</h1>
    <h2 class="nr-legs">{numberLegs}</h2>

    <AddSubtractSingleSign 
        onAdd={increase} 
        onSubtract={decrease}
    />

    <div class="sign-counter">
        {counter} {counter == 1 ? name : namePlural }  
   </div>
</div>

<style>

    .sign-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 1rem;
    }
    .sign-img {
        width: 6rem;
    }
    .name {
        color: var(--giants-orange);
        margin-bottom: 0;
    }
    .nr-legs { 
        color: var(--giants-orange);
        background-color: var(--lemon-lime);
        border-radius: 2rem;
        width: 4rem;
    }
    .sign-counter {
        font-size: 1rem;
        color: var(--giants-orange);
        background-color: var(--carnation-pink-h-3);
        border-radius: 3rem;
        margin-top: 1rem;
        padding: 0.2rem;
        width: 100%;
    }

</style>