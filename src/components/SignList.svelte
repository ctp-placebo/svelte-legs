<script>
	import { onMount } from 'svelte';
	import data from '../data/database.json';
	import Card from './UI/Card.svelte';
	import SignItem from './SignItem.svelte';

	export let signData = [...data];
	/**
	 * @type {any}
	 */
	// export let signData;
	
	onMount(() => {
		if (signData.length === 0) {
			totalLegs = 0;
		}
	});
	
	export let totalLegs = 0;

	const handleAddLegs = (/** @type {number} */ numberLegs) => {
		totalLegs += numberLegs;
	};
	const handleSubtractLegs = (/** @type {number} */ numberLegs) => {
		if (totalLegs > 0) {
			totalLegs -= numberLegs;
		}
	};

</script>

<div class="sign-list">
	{#each signData as sign (sign.id)}
		<Card>
			<SignItem
				imgPath={sign.signImg}
				name={sign.name}
				numberLegs={sign.numberLegs}
				namePlural={sign.namePlural}
				counter={0}
				on:clickAdd={() => handleAddLegs(sign.numberLegs)}
				on:clickSubtract={() => handleSubtractLegs(sign.numberLegs)}
			/>
		</Card>
	{/each}
</div>

<style>
	.sign-list {
		display: flex;
		flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
	}
</style>
