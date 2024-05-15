<script>
	import AddSubtractSingleSign from './addSubtractSingleSign.svelte';
	import { signCounterDataStore } from '../stores/countStore';
	import { onMount } from 'svelte';

	/**
	 * @property {number} id
	 * @property {string} name
	 * @property {number} numberLegs
	 * @property {string} namePlural
	 * @property {string} imgPath
	 * @property {number} singleCounter
	 * @property {() => void} lessLegs
	 * @property {() => void} moreLegs
	 * @property {() => void} _onAdd
	 * @property {() => void} _onSubtract
	 */

	export let id;
	export let name;
	export let numberLegs;
	export let namePlural;
	export let imgPath;
	export let singleCounter = 0;
    export let lessLegs;
	export let moreLegs;

	export let _onAdd = () => {
		moreLegs(); // moreLegs > subscribe and update happens in SignList.svelte
	};

	export let _onSubtract = () => {
        lessLegs();	// lessLegs > subscribe and update happens in SignList.svelte
	};

	onMount(() => {
		const unsubscribe = signCounterDataStore.subscribe((items) => {
			const item = items.find((item) => item.id === id);
			if (item) {
				singleCounter = item.singleCounter;
			}
		});
		return unsubscribe;
	});
</script>

<div class="sign-item id-{id}">
	<img class="sign-img" alt="" src={imgPath} />
	<h1 class="name text-primary-content">{name}</h1>
	<h2 class="nr-legs text-primary-content">+{numberLegs}</h2>

	<AddSubtractSingleSign onAdd={_onAdd} onSubtract={_onSubtract} />

	<div class="sign-counter text-primary-content">
		{singleCounter}
		{singleCounter == 1 ? name : namePlural}
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
