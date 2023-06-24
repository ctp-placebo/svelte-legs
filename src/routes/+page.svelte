<script>
    import data from '../data/database.json';
    import SignList from '../components/SignList.svelte';
    const jsonData = [...data];
    import { totalCount } from '../stores/countStore';

    /**
	* @type {number}
	*/
    
    let totalCountVal;
    // IDK
    totalCount.subscribe(value => {
        if (value === 0) {
            totalCount.set(0);
        }
        totalCountVal = value;
    });

// Collects together sign components:
// signs imports < SignList imports < SignItem imports < plusMinusBtns
</script>

<article>
    <div class="section-wrapper">
        <section class="total-legs">
            <span>{totalCountVal}</span>
        </section>
    </div>
    <section class="signlist-wrapper">
        <SignList signData={jsonData} />
    </section>    
    
</article>


<style>
    :root {
        display: flex;
        flex-direction: row;
        width: 100%;
        margin: 0 auto;
        background-color: var(--black-olive);
        font-size: 16px;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }

    .section-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 2rem;
    }
    .total-legs {
        width: 8rem;
        height:8rem;
        background-image: linear-gradient(0.5turn, var(--ivory), var(--lemon-lime), var(--harvest-gold));
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: nowrap;
    }
    .total-legs > span {
        font-size: 3rem;
        color: var(--giants-orange);
        font-family: fantasy;
        text-shadow: 2px 1px 3px aliceblue;
    }
    .signlist-wrapper {
        font-size: 1em;  
    }


</style>

