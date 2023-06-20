<script>
	import data from '../data/database.json';
    import Card from '../components/OLD/card.svelte';
    import SignDetail from '../components/OLD/signDetail.svelte';
    
    export const jsonData = [...data];
    export const index = 0;
    export const item = {numberLegs: 0, name: "", signImg: ""};


    /**
	 * @type {number[]}
	 */
    let countingArray = [];

    /**
	 * @param {number} countingArrayIndex
	 * @param {number} changeValue
	 * @param {boolean} plusOrMinus
	 */
    function changeScore(countingArrayIndex, changeValue, plusOrMinus) {
        if (plusOrMinus) {
            countingArray[countingArrayIndex] += changeValue;
        } else {
            countingArray[countingArrayIndex] -= changeValue;
        }
        console.log("counting array: ", countingArray);
        // return countingArray;
        // sumAllLegsAsTotal() 
    }
</script>
{#each jsonData as item (item.id)}
    <Card>
        <SignDetail 
        id={item.id}
        name={item.name}
        selected
        animalsLegCount={item.numberLegs}
        signImg={item.signImg}
    >
    </SignDetail>
    </Card>
{/each}

<!-- <Card>
    <div class="item-sign"><img src={item.signImg} width="100px" alt="Bilde av: {item.name}"></div>
    <button on:click={() => changeScore(index, item.numberLegs, true)} class="plusMinusButton">+</button>
    <div class="item-nr-legs">med { item.numberLegs } ben</div> 
    <div
        >
        <span
            contenteditable="true"
            bind:innerHTML={item.name}
        >
        </span>
    </div> 
    <button on:click={() => changeScore(index, item.numberLegs, false)} class="plusMinusButton">-</button>
</Card> -->