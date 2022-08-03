import { Task, html_buttons } from "../interfaces/interface.js";
import { daysCalulator } from "./calculateDays.js";
import { highest_streak } from "./highest_streak.js";

export class Streak extends daysCalulator {
  streak_item: Task[] = [];

  constructor() {
    super();
  }

  static getArray() {
    return "hello";
  }

  // static classMethod() {
  //   // return this.streak_item;
  // }

  createStreak = () => {
    const daysCalculate = new daysCalulator();

    const d1: any = new Date();
    const d2: any = new Date(html_buttons.start_date.value); // expected Completion date
    var diff = Math.abs(d1 - d2);
    const high = daysCalculate.convertMSNoString(diff);
    let formValue: Task = {
      id: Math.floor(Math.random() * 1000000000),
      name_value: html_buttons._name.value,
      image_value: html_buttons.image.value,
      start_date_value: html_buttons.start_date.value,
      highest_streak: high,
    };
    // if (this.streak_item.length > 0) {
    // }
    this.streak_item.push(formValue);

    // console.log(this.streak_item);
  };

  readAllStreak = () => {
    // const array = this.streak_item;

    if (this.streak_item.length === 0) {
      html_buttons.streak.innerHTML = "";
      html_buttons.decscription.style.display = "none";
      const heading = document.createElement("h1");
      heading.style.marginTop = "10rem";
      heading.style.fontSize = "2rem";
      heading.style.color = "#ff7f50";
      heading.textContent = "You Have no Streaks set already!!";
      html_buttons.streak.appendChild(heading);
    } else {
      html_buttons.streak.innerHTML = "";

      const data_array = this.streak_item;
      const val = highest_streak.getHighestStreak(data_array);

      this.streak_item
        .map((t) => {
          const activities_div = document.createElement("div");
          activities_div.style.border = "solid 2px #ff7f50";
          activities_div.style.width = "10%";
          // activities_div.style.alignItems = "center !important";
          activities_div.style.margin = "5px";
          activities_div.style.flexShrink = "1";
          activities_div.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
          activities_div.style.transition = "1 s";
          activities_div.style.borderRadius = "5px";
          activities_div.style.textAlign = "center !important";

          // activities_div.style.transform = "scale(1.1)";

          const image_div = document.createElement("div");

          image_div.style.padding = "1%";
          const h2_image = document.createElement("p");
          h2_image.style.fontSize = "5rem";

          const id_ = document.createElement("h3");
          id_.style.display = "none";

          const date_div = document.createElement("div");
          const h4_date = document.createElement("p");
          h4_date.style.marginBottom = "5%";

          const name_div = document.createElement("div");
          const p_name = document.createElement("h3");

          h2_image.innerHTML = `${t.image_value}`;
          h4_date.textContent = t.start_date_value;
          p_name.textContent = t.name_value;
          // id_.innerHTML = t.id;

          image_div.appendChild(h2_image);
          date_div.appendChild(h4_date);
          name_div.appendChild(p_name);

          activities_div.appendChild(image_div);
          activities_div.appendChild(date_div);
          activities_div.appendChild(name_div);

          html_buttons.streak.appendChild(activities_div);

          activities_div.addEventListener("click", () => {
            this.showSingleStreak(t.id);
          });
        })
        .join("");
    }
  };

  showSingleStreak(id: number) {
    const result = this.streak_item.find((item) => item.id === id)!;
    const daysCalculate = new daysCalulator();

    // console.log(result);
    const d1: any = new Date(); //"now"
    const d2: any = new Date(result.start_date_value); // expected Completion date
    var diff = Math.abs(d1 - d2);
    // console.log(diff);

    html_buttons.modal.innerHTML = "";

    const modal_div = document.createElement("div");
    const h1_image = document.createElement("h1");
    const p_date = document.createElement("p");
    const p_Name = document.createElement("p");
    const p_diff = document.createElement("p");
    const button_div = document.createElement("div");
    const close_button = document.createElement("button");
    const delete_button = document.createElement("button");

    h1_image.style.fontSize = "10rem";
    h1_image.innerHTML = `${result.image_value}`;

    p_date.style.marginBottom = "1rem";
    p_date.textContent = result.start_date_value;

    p_Name.style.marginBottom = "1rem";
    p_Name.textContent = result.name_value;

    p_diff.style.marginBottom = "1rem";
    p_diff.textContent = daysCalculate.convertMS(diff);

    close_button.style.border = "none";
    close_button.style.padding = "7px 14px";
    close_button.style.fontSize = "1rem";
    close_button.style.borderRadius = "5px";
    close_button.style.backgroundColor = "#ff0000";
    close_button.textContent = "Close";

    delete_button.style.border = "none";
    delete_button.style.padding = "7px 14px";
    delete_button.style.fontSize = "1rem";
    delete_button.style.borderRadius = "5px";
    delete_button.style.backgroundColor = "gray";
    delete_button.textContent = "Delete";
    delete_button.style.marginLeft = "5rem";

    button_div.appendChild(close_button);
    button_div.appendChild(delete_button);

    modal_div.appendChild(h1_image);
    modal_div.appendChild(p_Name);
    modal_div.appendChild(p_diff);
    modal_div.appendChild(button_div);

    html_buttons.modal.appendChild(modal_div);

    html_buttons.modalBackground.style.display = "block";
    close_button.addEventListener("click", () => {
      html_buttons.modalBackground.style.display = "none";
    });

    delete_button.addEventListener("click", () => {
      this.deleteStreak(result.id);
    });
  }

  deleteStreak = (id: number) => {
    let arr = this.streak_item.filter((item) => item.id !== id)!;
    this.streak_item = arr;
    if (this.streak_item.length === 0) {
      window.onload = () => {
        this.readAllStreak();
      };
    }
    this.readAllStreak();
    html_buttons.modalBackground.style.display = "none";
  };
}
