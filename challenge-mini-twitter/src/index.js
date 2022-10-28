document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();

  const textInput = document.querySelector("input").value;
  const postArea = document.querySelector("div");

  const postText = document.createElement("p");
  postText.innerText = textInput;

  postArea.appendChild(postText);

  console.log(postText);
});
