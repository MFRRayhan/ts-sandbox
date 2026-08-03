"use strict";
// // example - 01
// const input = document.getElementById("email") as HTMLInputElement;
// const button = document.getElementById("send") as HTMLButtonElement;
// button.addEventListener("click", () => {
//   console.log(`subscription complete for ${input.value}`);
// });
// Example - 02
const input = document.querySelector("#email");
const button = document.querySelector("#send");
if (button && input) {
    button.addEventListener("click", () => {
        console.log(`subscription is done for ${input.value}`);
    });
}
