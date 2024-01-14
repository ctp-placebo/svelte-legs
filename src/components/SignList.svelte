<script>
	import data from '../data/database.json';
	import Card from './UI/Card.svelte';
	import SignItem from './SignItem.svelte';
	import { totalCount } from '../stores/countStore';

	export let signData = [...data];
	
	const handleAddLegs = (/** @type {number} */ numberLegs) => {
			totalCount.update(n => n + numberLegs);
	};
	const handleSubtractLegs = (/** @type {number} */ numberLegs) => {
		totalCount.update(n => n - numberLegs);
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
				lessLegs={() => handleSubtractLegs(sign.numberLegs)}
				moreLegs={() => handleAddLegs(sign.numberLegs)}
			/>
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
