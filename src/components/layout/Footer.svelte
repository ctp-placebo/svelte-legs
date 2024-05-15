<script>
	import { signCounterDataStore, totalCount } from '../../stores/countStore';

	// YOU ARE HERE. 
	// Use SignList.svelte to reset each individual sing's counter
	// when the total score is reset.

    /**
	* @type {boolean}
	*/
	let isModalOpen = false;

	export let resetScore = function () {
		
		signCounterDataStore.update(items => {
			items.forEach(item => {
				item.singleCounter = 0;
			});
			return items;
		});
		
		totalCount.set(0);
        isModalOpen = false;
		console.log('Score reset', totalCount);
	};
</script>

<main class="flex flex-col">
	<!-- main & section for Tailwind to force footer to bottom.-->
	<section class="flex-grow" />
	<footer class="footer p-10 bg-neutral text-neutral-content footer-center">
		<div>
			<!-- <button class="btn btn-warning" on:click={resetScore()}>Nullstill score</button> -->
			<button class="btn btn-warning" on:click={() => (isModalOpen = true)}>Nullstill score</button>
		</div>

		<div class="modal" class:modal-open={isModalOpen}>
			<div class="modal-box">
				<h1 class="font-bold text-4xl">😧</h1>
				<p class="py-4 text-primary-content">Hvil du ha alle skilt tilbake på 0? <br>
				Det er å starte spillet på nytt!
				</p>

				<div class="modal-action flow-root">
					<!-- set false on click -->
					<button class="btn btn-error float-left" on:click={resetScore()}>YA!</button>
					<!-- also set false on click -->
					<button class="btn btn-info float-right" on:click={() => (isModalOpen = false)}>NEI!</button>
				</div>
			</div>
		</div>
	</footer>
</main>
