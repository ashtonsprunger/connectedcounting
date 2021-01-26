const count = document.getElementById("count");
const button = document.getElementById("button");
console.log("test");

const socket = io();

socket.on("update", updateCount);
button.addEventListener("click", () => socket.emit("click"));

function updateCount(newCount) {
  count.innerHTML = newCount;
}
