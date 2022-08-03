import { Streak } from "./Streak.js";
import { Task, html_buttons } from "../interfaces/interface.js";
import { daysCalulator } from "./calculateDays.js";

export class highest_streak {
  streak_item: Task[] = [];

  constructor() {}
  static getHighestStreak = (items: Task[]) => {
    const sortedStreaks = items.sort(
      (a, b) => b.highest_streak! - a.highest_streak!
    );
    console.log(sortedStreaks);

    const sorted = sortedStreaks[0];

    const activities_div = document.createElement("div");
    activities_div.style.border = "solid 2px #ff7f50";
    activities_div.style.width = "10%";
    // activities_div.style.alignItems = "center !important";
    activities_div.style.margin = "5px";
    activities_div.style.flexShrink = "1";
    activities_div.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
    activities_div.style.transition = "1 s";
    activities_div.style.borderRadius = "5px";
    // activities_div.style.textAlign = "center";
    activities_div.style.backgroundColor = "green";

    // activities_div.style.transform = "scale(1.1)";

    const image_div = document.createElement("div");

    image_div.style.padding = "1%";
    const h2_image = document.createElement("p");
    h2_image.style.fontSize = "5rem";

    const id_ = document.createElement("h3");
    id_.style.display = "none";

    const date_div = document.createElement("div");
    const h4_date = document.createElement("p");

    const hiest = document.createElement("p");
    hiest.style.color = "red";

    h4_date.style.marginBottom = "5%";

    const name_div = document.createElement("div");
    const p_name = document.createElement("h3");

    const p_diff = document.createElement("p");
    const line = document.createElement("br");

    p_diff.style.marginBottom = "1rem";

    h2_image.innerHTML = `${sorted.image_value}`;
    h4_date.textContent = sorted.start_date_value;
    p_name.textContent = sorted.name_value;
    hiest.textContent = "Highest Streak";

    image_div.appendChild(h2_image);
    date_div.appendChild(h4_date);
    name_div.appendChild(p_name);

    activities_div.appendChild(image_div);
    activities_div.appendChild(date_div);
    activities_div.appendChild(name_div);
    activities_div.appendChild(line);
    activities_div.appendChild(hiest);

    html_buttons.streak.appendChild(activities_div);
  };
}
