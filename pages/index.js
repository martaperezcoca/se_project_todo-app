import { v4 as uuidv4 } from "https://jspm.dev/uuid";

import { initialTodos, validationConfig } from "../utils/constants.js";
import Todo from "../components/Todo.js";
import FormValidator from "../components/FormValidation.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import TodoCounter from "../components/TodoCounter.js";

const addTodoButton = document.querySelector(".button_action_add");
const addTodoPopupEl = document.querySelector("#add-todo-popup");
const addTodoForm = document.forms["add-todo-form"];
const addTodoCloseBtn = addTodoPopupEl.querySelector(".popup__close");
const todosList = document.querySelector(".todos__list");

const todoCounter = new TodoCounter(initialTodos, ".counter__text");

const addTodoPopup = new PopupWithForm({
  popupSelector: "#add-todo-popup",
  handleFormSubmit: (inputValues) => {
    const name = inputValues.name;
    const dateInput = inputValues.date;

    const date = new Date(dateInput);
    date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

    const id = uuidv4();
    const values = { name, date, id };
    const todo = generateTodo(values);
    section.addItem(todo);
    todoCounter.updateTotal(true);

    addTodoFormValidator.resetValidation();

    addTodoPopup.close();
  },
});
addTodoPopup.setEventListeners();

const generateTodo = (data) => {
  const todo = new Todo(data, "#todo-template", handleCheck, handleDelete);
  const todoElement = todo.getView();
  return todoElement;
};

const section = new Section({
  items: initialTodos,
  renderer: (item) => {
    const todoElement = generateTodo(item);
    section.addItem(todoElement);
  },
  containerSelector: ".todos__list",
});

section.renderItems();

//const openModal = (modal) => {
// modal.classList.add("popup_visible");
//};

const closeModal = (modal) => {
  modal.classList.remove("popup_visible");
};

function handleCheck(completed) {
  todoCounter.updateCompleted(completed);
}

function handleDelete(completed) {
  if (completed) {
    todoCounter.updateCompleted(false);
  }
  todoCounter.updateTotal(false);
}

const renderTodo = (item) => {
  const todoElement = generateTodo(item);
  todosList.append(todoElement);
};

addTodoButton.addEventListener("click", () => {
  addTodoPopup.open();
});

//addTodoForm.addEventListener("submit", (evt) => {
// evt.preventDefault();
// const name = evt.target.name.value;
// const dateInput = evt.target.date.value;

// const date = new Date(dateInput);
// date.setMinutes(date.getMinutes() + date.getTimezoneOffset());

// const id = uuidv4();
// const values = { name, date, id };
// const todo = generateTodo(values);
// section.addItem(todo);

// addTodoFormValidator.resetValidation();

//addTodoPopup.close();
//});

//initialTodos.forEach(renderTodo);

const addTodoFormValidator = new FormValidator(validationConfig, addTodoForm);
addTodoFormValidator.enableValidation();
