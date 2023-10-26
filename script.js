// Compare function for sorting
function compare(a, b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  } else {
    return 0;
  }
}

// Main function to calculate the minimum cost
function calculateMinCost() {
  // Get the input string, split it, and convert it into an array of integers
  let str = document.getElementById('rope-lengths').value.split(",");
  let arr = str.map((str) => parseInt(str));

  // Initialize the total cost
  let total = 0;

  // Sort the array using the compare function
  arr = arr.sort(compare);

  // Combine the two smallest lengths until only one rope remains
  while (arr.length >= 2) {
    let sum = arr[0] + arr[1];
    let rem = [sum];
    for (let k = 2; k < arr.length; k++) {
      rem.push(arr[k]);
    }
    rem = rem.sort(compare);
    arr = [...rem];
    total = total + sum;
  }

  // Display the total cost in the 'result' element
  let result = document.getElementById('result');
  result.innerHTML = total;
}
