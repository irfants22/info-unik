const menuBtn = document.getElementById("menuButton");
const submitBtn = document.getElementById("submitButton");

menuBtn.addEventListener("click", function (event) {
  const menuBar = document.getElementById("menuBar");
  const firstLine = document.getElementById("first");
  const secondLine = document.getElementById("second");
  const thirdLine = document.getElementById("third");

  menuBar.classList.toggle("side_bar");
  firstLine.classList.toggle("first_line");
  secondLine.classList.toggle("second_line");
  thirdLine.classList.toggle("third_line");

  event.preventDefault();
});

submitBtn.addEventListener("click", function (event) {
  const nameValue = document.getElementById("nameInput").value;
  const commentValue = document.getElementById("commentInput").value;

  const nameResult = document.createElement("p");
  nameResult.classList.add("user");
  nameResult.innerText = nameValue;

  const commentResult = document.createElement("p");
  commentResult.innerText = commentValue;

  const createContainer = document.createElement("div");
  createContainer.classList.add("comment_result");
  createContainer.append(nameResult, commentResult);

  const showResults = document.getElementById("showComment");

  if (commentValue == "") {
    alert("Anda belum memasukkan komentar apapun!");
  } else {
    showResults.classList.add("show_comment");
    showResults.append(createContainer);
  }

  event.preventDefault();
});
