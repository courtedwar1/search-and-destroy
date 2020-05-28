"use strict";

// Complete this algo
const binarySearch = (array, target) => {
	let midpoint = Math.floor(array.length / 2);

	// BASE CASE
	if (target === array[midpoint]) {
		return true;
	}

	// RECURSIVE CASE
	if (target < array[midpoint]) {
		if (array[midpoint] !== array[0]) {
			array = array.slice(0, midpoint);
			return binarySearch(array, target);
		}
	} else if (target > array[midpoint]) {
		if (array[midpoint] !== array[array.length - 1]) {
			array = array.slice(midpoint);
			return binarySearch(array, target);
		}
	}

	return false;
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
