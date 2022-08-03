import { html_buttons, clearInputAfterSubmit, } from "./interfaces/interface.js";
import { Streak } from "./classes/Streak.js";
const validateInput = (field, error_message) => {
    if (field.value.trim().length <= 0) {
        field.style.border = "1px solid red";
        error_message.style.display = "block";
        setTimeout(() => {
            error_message.style.display = "none";
        }, 5000);
        return false;
    }
    else {
        return true;
    }
};
const validateForm = (field_array, error_message_array) => {
    let valid = true;
    for (var i = 0; i < field_array.length; i++) {
        var temp = validateInput(field_array[i], error_message_array[i]);
        if (temp === false) {
            valid = false;
        }
    }
    return valid;
};
const refreshForm = () => {
    html_buttons._name.style.border = "1px solid black";
    html_buttons.name_error_message.style.display = "none";
    html_buttons.image.style.border = "1px solid black";
    html_buttons.image_error_message.style.display = "none";
    html_buttons.start_date.style.border = "1px solid black";
    html_buttons.start_date_error_message.style.display = "none";
};
const classVar = new Streak();
html_buttons.cover_btn.addEventListener("click", () => {
    openForm();
});
html_buttons.add_todo_btn.addEventListener("click", () => {
    openCover();
});
const openForm = () => {
    html_buttons.cover.style.display = "none";
    html_buttons.add_todo.style.display = "block";
    html_buttons.add_todo.style.display = "flex";
    html_buttons.add_todo.style.alignItems = "center";
    html_buttons.add_todo.style.justifyContent = "space-around";
    html_buttons.add_todo.style.color = "aliceblue";
    html_buttons.add_todo.style.padding = "1rem 0 0.5rem 0";
};
const openCover = () => {
    html_buttons.add_todo.style.display = "none";
    html_buttons.cover.style.display = "block";
    html_buttons.cover.style.display = "flex";
    html_buttons.cover.style.alignItems = "center";
    html_buttons.cover.style.justifyContent = "space-around";
    html_buttons.cover.style.color = "aliceblue";
    html_buttons.cover.style.padding = "1rem 0 0.5rem 0";
};
window.onload = () => {
    classVar.readAllStreak();
};
html_buttons.form_id.addEventListener("submit", (e) => {
    e.preventDefault();
    refreshForm();
    const array_fields = [
        html_buttons._name,
        html_buttons.image,
        html_buttons.start_date,
    ];
    const error_message_fields = [
        html_buttons.name_error_message,
        html_buttons.image_error_message,
        html_buttons.start_date_error_message,
    ];
    const is_valid = validateForm(array_fields, error_message_fields);
    if (is_valid === true) {
        classVar.createStreak();
        html_buttons.loader.style.display = "block";
        html_buttons.streak.style.display = "none !important";
        setTimeout(() => {
            html_buttons.loader.style.display = "none";
            openCover();
            classVar.readAllStreak();
            const editBtns = document.getElementsByClassName("edit");
            const activities = document.getElementsByClassName("activities");
            const picha = document.getElementsByClassName("picha");
            for (const mark of picha) {
                mark.addEventListener("click", (e) => { });
            }
            html_buttons.streak.style.display = "block";
        }, 1000);
        clearInputAfterSubmit();
    }
    else {
    }
});
