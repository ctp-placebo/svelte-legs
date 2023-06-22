<script>
	import data from '../data/database.json';
	import Card from './UI/Card.svelte';
	import SignItem from './SignItem.svelte';
	import { totalCount } from '../stores/countStore';

	export let signData = [...data];
	
	const handleAddLegs = (/** @type {number} */ numberLegs) => {
		totalCount.update(n => n + numberLegs);
		console.log("handleAdd", totalCount);
	};
	const handleSubtractLegs = (/** @type {number} */ numberLegs) => {
		totalCount.subscribe(value => {
			if (value >= 0 ) {
				totalCount.update(n => n - numberLegs);
			}
			console.log("decrease totalCount", totalCount);
		});
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
				increase={() => handleAddLegs(sign.numberLegs)}
				decrease={() => handleSubtractLegs(sign.numberLegs)}
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
