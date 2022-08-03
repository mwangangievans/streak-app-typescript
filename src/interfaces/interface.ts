interface Task {
  id: number;
  name_value: string;
  image_value: string;
  start_date_value: string;
  highest_streak?: number;
}

const html_buttons = {
  // select the open-btn button
  openBtn: document.getElementById("open-btn") as HTMLButtonElement,
  modal: document.getElementById("modal") as HTMLDivElement,

  // select the modal-background
  modalBackground: document.getElementById(
    "modal-background"
  ) as HTMLDivElement,
  // select the close-btn
  closeBtn: document.getElementById("close-btn") as HTMLButtonElement,
  yes: document.getElementById("yes") as HTMLButtonElement,

  streak: document.getElementById("section-two") as HTMLElement,
  high: document.getElementById("high") as HTMLElement,

  loader: document.getElementById("loader") as HTMLElement,
  cover: document.getElementById("cover") as HTMLElement,
  add_todo: document.getElementById("add_todo") as HTMLElement,
  cover_btn: document.getElementById("cover_btn") as HTMLElement,
  add_todo_btn: document.getElementById("add_todo_btn") as HTMLFormElement,
  form_id: document.getElementById("form_id") as HTMLFormElement,
  _name: document.getElementById("name") as HTMLInputElement,
  image: document.getElementById("image") as HTMLInputElement,
  decscription: document.getElementById("description") as HTMLElement,

  start_date: document.getElementById("start_date") as HTMLInputElement,
  name_error_message: document.getElementById(
    "name_error_message"
  ) as HTMLElement,
  image_error_message: document.getElementById(
    "image_error_message"
  ) as HTMLElement,
  start_date_error_message: document.getElementById(
    "start_date_error_message"
  ) as HTMLElement,
};

const clearInputAfterSubmit = () => {
  html_buttons._name.value = "";
  html_buttons.start_date.value = "";
  html_buttons.image.value = "";
};

export { Task, html_buttons, clearInputAfterSubmit };
