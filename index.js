
let counter = document.getElementById("counter");
let count = 0;

// event listener function for increasing customer count
function increment() {
  count += 1;
  counter.textContent = count;
}

function decrement(){
  count -= 1;
  counter.textContent = count;
}

//
