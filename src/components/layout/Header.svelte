<script>
	import { onMount } from "svelte";
    import { themeChange } from 'theme-change'
    import tailwindConfig from '../../../tailwind.config.js';

    // YSK: the theme switcher is using localstorage. 

    let themes = Object.values(tailwindConfig.daisyui.themes);

    onMount(() => {
        themeChange(false);
        localStorage.getItem('legs theme');
    });
</script>

<header class="bg-base-100">
    <div class="header-inner-wrapper">
        <div class="prose">
            <h1>Tell mine ben! <span style="font-size: 2em; border-bottom: 5px solid green;">🐄</span></h1>
        </div>
            <select 
                data-choose-theme 
                tab-index="0" 
                class="select select-bordered max-w-xs"
                > 
                <option disabled selected>Velg thema</option>
                {#each themes.sort((a, b) => {
                    if (a === 'light' || a === 'dark') return -1;
                    if (b === 'light' || b === 'dark') return 1;
                    return a.localeCompare(b);
                }) as theme}
                    <option 
                        value={theme}
                        class="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
                        >
                        {theme.charAt(0).toUpperCase() + theme.slice(1)}
                    </option>
                {/each}
            </select>
        </div>
    <!-- <p class="logo">__🐄_</p> -->
    <div class="divider divider-accent"></div> 
</header>

<style>
    header {
        /* min-height: 80px; */
        min-height: 3dvh;
        /* border-bottom: 1px solid #50C878; */
    }
    .header-inner-wrapper {
        width: 100vw;
        min-height: 3vh;
        display: inline-flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
    }
    .header-inner-wrapper div {
        padding: 1rem;
    }
    .header-inner-wrapper select {
        margin-right: 1rem;
    }
 
    /* .logo {
        color: #50C878;
        color: var(--light-green);
        font-size: 46px;
        background-color: rgb(83, 211, 247);
        width: 8rem;
        border-radius: 15px 15px 0px 0px;
        align-self: center ;
        margin: 26px 0 0 0;
    } */
</style>