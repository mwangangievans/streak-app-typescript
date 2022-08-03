import { Streak } from "./Streak.js";
export class daysCalulator {
  constructor() {}
  convertMS = (ms: number) => {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;

    var pad = function (n: number) {
      return n < 10 ? "0" + n : n;
    };

    var result = +d + "   " + "Days";

    return result;
  };
  convertMSNoString = (ms: number) => {
    var d, h, m, s;
    s = Math.floor(ms / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;

    var pad = function (n: number) {
      return n < 10 ? "0" + n : n;
    };

    var result = d;

    return result;
  };
}
