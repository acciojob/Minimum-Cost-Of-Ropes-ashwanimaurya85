function calculateMinCost() {
  let str = document.getElementById('rope-lengths').value;
  
  if (!str) {
    alert("Please enter rope lengths.");
    return;
  }

  let arr = str.split(",").map(str => parseInt(str));

  if (arr.length < 2) {
    alert("At least two rope lengths are required.");
    return;
  }

  let total = 0;
  arr = arr.sort((a, b) => a - b);

  while (arr.length >= 2) {
    let sum = arr[0] + arr[1];
    let rem = [sum, ...arr.slice(2)];
    rem = rem.sort((a, b) => a - b);
    arr = rem;
    total += sum;
  }

  let result = document.getElementById('result');
  result.innerHTML = total;
}
