<script>
    import Header from '../components/layout/Header.svelte';
    import Footer from '../components/layout/Footer.svelte';
    import './styles.css';
	import '../app.css';
	// Import our global CSS
	// import "$lib/global.css";

</script>


<div class="app">
	<Header />

	<main>
		<slot />
	</main>

	<Footer />
</div>
