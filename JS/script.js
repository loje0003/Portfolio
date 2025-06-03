window.addEventListener("load", start);

function start() {
  console.log("start");
  addEventListeners();
  Mappe01Vises();
}

function addEventListeners() {
  document.querySelector("#knap01").addEventListener("click", Mappe01Vises);
  document.querySelector("#knap02").addEventListener("click", Mappe02Vises);
  document.querySelector("#knap03").addEventListener("click", Mappe03Vises);
  document.querySelector("#knap04").addEventListener("click", Mappe04Vises);
}

function Mappe01Vises() {
  console.log("Mappe01Vises");
  document.querySelector("#mappe01").classList.add("frem");
  document.querySelector("#mappe02").classList.remove("frem");
  document.querySelector("#mappe03").classList.remove("frem");
  document.querySelector("#mappe04").classList.remove("frem");
}

function Mappe02Vises() {
  console.log("Mappe02Vises");
  document.querySelector("#mappe02").classList.add("frem");
  document.querySelector("#mappe01").classList.remove("frem");
  document.querySelector("#mappe03").classList.remove("frem");
  document.querySelector("#mappe04").classList.remove("frem");
}

function Mappe03Vises() {
  console.log("Mappe03Vises");
  document.querySelector("#mappe03").classList.add("frem");
  document.querySelector("#mappe01").classList.remove("frem");
  document.querySelector("#mappe02").classList.remove("frem");
  document.querySelector("#mappe04").classList.remove("frem");
}

function Mappe04Vises() {
  console.log("Mappe04Vises");
  document.querySelector("#mappe04").classList.add("frem");
  document.querySelector("#mappe01").classList.remove("frem");
  document.querySelector("#mappe02").classList.remove("frem");
  document.querySelector("#mappe03").classList.remove("frem");
}
