// // example - 01
// const input = document.getElementById("email") as HTMLInputElement;
// const button = document.getElementById("send") as HTMLButtonElement;

// button.addEventListener("click", () => {
//   console.log(`subscription complete for ${input.value}`);
// });

// Example - 02
const input = document.querySelector<HTMLInputElement>("#email");
const button = document.querySelector<HTMLButtonElement>("#send");

if (button && input) {
  button.addEventListener("click", () => {
    console.log(`subscription is done for ${input.value}`);
  });
}
