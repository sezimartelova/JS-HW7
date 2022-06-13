window.addEventListener("load", function () {
  const todoForm = document.querySelector("#todo-form");
  const input = document.querySelector("input");
  const btn = document.querySelector("button");
  const todoOutPut = document.querySelector("#todo-output");

  todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
  });

  btn.addEventListener("click", function () {
    const myTodoList = document.createElement("div");

    myTodoList.classList.add("todo-item");
    todoOutPut.appendChild(myTodoList);

    myTodoList.innerText = input.value;
    input.value = " ";

    myTodoList.addEventListener("click", function () {
      myTodoList.remove();
    });
  });
});
