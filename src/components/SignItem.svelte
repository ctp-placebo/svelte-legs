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
        moreLegs();
    };
    export let decrease = () => {
        if (counter > 0) {
            counter -= 1;
            lessLegs();
        }
     };
    /**
	* @type {() => void}
	*/
    export let lessLegs;
    /**
	* @type {() => void}
	*/
    export let moreLegs;
</script>

<div class="sign-item">
    <img class="sign-img" alt="" src="{imgPath}" />
    <h1 class="name text-primary-content">{name}</h1>
    <h2 class="nr-legs text-primary-content">+{numberLegs}</h2>

    <AddSubtractSingleSign 
        onAdd={increase} 
        onSubtract={decrease}
    />

    <div class="sign-counter text-primary-content">
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
        /* color: var(--giants-orange); */
        margin-bottom: 0;
    }
    .nr-legs { 
        /* color: var(--giants-orange); */
        /* color: oklch(var(--n)); */
        /* background-color: var(--lemon-lime); */
        /* background-color: oklch(var(--n)); */
        /* border-radius: 2rem; */
        width: 100%;
        
    }
    .sign-counter {
        font-size: 1rem;
        /* color: var(--giants-orange); */
        /* color: oklch(var(--n)); */
        /* background-color: var(--carnation-pink-h-3); */
        /* border-radius: 3rem; */
        margin-top: 1rem;
        /* padding: 0.2rem;
        width: 100%; */
        width: inherit;
    }

</style>