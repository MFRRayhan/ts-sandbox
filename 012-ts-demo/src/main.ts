const heading = document.getElementById("heading") as HTMLHeadingElement;
const btn = document.getElementById("btn") as HTMLButtonElement;

btn.addEventListener("click", () => {
  console.log("Hello world");
  heading.textContent = "Hello World";
});
