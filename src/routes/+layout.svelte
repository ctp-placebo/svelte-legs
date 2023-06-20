<script>
    import Header from '../components/layout/Header.svelte';
    import Footer from '../components/layout/Footer.svelte';
    import './styles.css';
</script>


<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
