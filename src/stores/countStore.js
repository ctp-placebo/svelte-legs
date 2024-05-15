import { writable } from "svelte/store";
import signs from "./../data/database.json";

// TotalCount is the score. 
export const totalCount = writable(0);

// an array of sign's counters individually
// export const signsCountArr =  writable(new Array(signs.length).fill(0));

// TODO: start with Zero values, change this for usage of LocalStorage
// or we'll reset the score every time the page is refreshed.

// Create a new array based on the data from database.json
const initialData = signs.map(item => ({
    id: item.id,
    name: item.name,
    singleCounter: 0
}));

// Create a writable store with the initial data
export const signCounterDataStore = writable(initialData);




