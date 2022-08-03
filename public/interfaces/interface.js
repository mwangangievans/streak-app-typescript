const html_buttons = {
    // select the open-btn button
    openBtn: document.getElementById("open-btn"),
    modal: document.getElementById("modal"),
    // select the modal-background
    modalBackground: document.getElementById("modal-background"),
    // select the close-btn
    closeBtn: document.getElementById("close-btn"),
    yes: document.getElementById("yes"),
    streak: document.getElementById("section-two"),
    high: document.getElementById("high"),
    loader: document.getElementById("loader"),
    cover: document.getElementById("cover"),
    add_todo: document.getElementById("add_todo"),
    cover_btn: document.getElementById("cover_btn"),
    add_todo_btn: document.getElementById("add_todo_btn"),
    form_id: document.getElementById("form_id"),
    _name: document.getElementById("name"),
    image: document.getElementById("image"),
    decscription: document.getElementById("description"),
    start_date: document.getElementById("start_date"),
    name_error_message: document.getElementById("name_error_message"),
    image_error_message: document.getElementById("image_error_message"),
    start_date_error_message: document.getElementById("start_date_error_message"),
};
const clearInputAfterSubmit = () => {
    html_buttons._name.value = "";
    html_buttons.start_date.value = "";
    html_buttons.image.value = "";
};
export { html_buttons, clearInputAfterSubmit };
