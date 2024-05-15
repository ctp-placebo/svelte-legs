<script>
	import { onDestroy } from 'svelte';
	import { totalCount, signCounterDataStore } from './../stores/countStore.js';
	import data from '../data/database.json';
	import Card from './UI/Card.svelte';
	import SignItem from './SignItem.svelte';

	export let signData = [...data];
	let singleSignCounter = 0;

	// $: = reactive statement, aka a subscription that updates the variable on change. JavaScript not Svelte. 
	$: {
		const unsubscribe = signCounterDataStore.subscribe((value) => {
			console.log('Sign Counter Data:', value);
			singleSignCounter = value.singleCounter;
		});
		// Cleanup the subscription when the component is destroyed
		onDestroy(() => {
			unsubscribe();
		});
	}

	// SignItem > moreLegs > handleAddLegs > totalCount
	const handleAddLegs = (/** @type {number} */ numberLegs, /** @type {number} */ id) => {
		console.log('Adding legs', '\n', 'Id: ', id);
		totalCount.update((n) => n + numberLegs);
		signCounterDataStore.update((items) => {
			const item = items.find((item) => item.id === id);
			if (item) {
				item.singleCounter += 1;
			}
			return items;
		});
	};

	const handleSubtractLegs = (/** @type {number} */ numberLegs, /** @type {number} */ id) => {
		signCounterDataStore.update((items) => {
			const item = items.find((item) => item.id === id);
			if (item) {
				if (item.singleCounter > 0) {
					item.singleCounter -= 1;
					totalCount.update((n) => n - numberLegs);
				} else {
					item.singleCounter = 0;
				}
			}
			return items;
		});
	};
</script>

<div class="sign-list">
	{#each signData as sign (sign.id)}
		<Card>
			{#each $signCounterDataStore as item (item.id)}
				{#if item.id === sign.id}
					<SignItem
						imgPath={sign.signImg}
						name={sign.name}
						numberLegs={sign.numberLegs}
						namePlural={sign.namePlural}
						singleCounter={item.singleCounter}
						lessLegs={() => handleSubtractLegs(sign.numberLegs, sign.id)}
						moreLegs={() => handleAddLegs(sign.numberLegs, sign.id)}
					/>
				{/if}
			{/each}
		</Card>
	{/each}
</div>

<style>
	.sign-list {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: flex-start;
		margin-top: 3dvh;
		margin-bottom: 3dvh;
		row-gap: 1rem;
		column-gap: 1.25rem;
	}
</style>
