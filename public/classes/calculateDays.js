export class daysCalulator {
    constructor() {
        this.convertMS = (ms) => {
            var d, h, m, s;
            s = Math.floor(ms / 1000);
            m = Math.floor(s / 60);
            s = s % 60;
            h = Math.floor(m / 60);
            m = m % 60;
            d = Math.floor(h / 24);
            h = h % 24;
            var pad = function (n) {
                return n < 10 ? "0" + n : n;
            };
            var result = +d + "   " + "Days";
            return result;
        };
        this.convertMSNoString = (ms) => {
            var d, h, m, s;
            s = Math.floor(ms / 1000);
            m = Math.floor(s / 60);
            s = s % 60;
            h = Math.floor(m / 60);
            m = m % 60;
            d = Math.floor(h / 24);
            h = h % 24;
            var pad = function (n) {
                return n < 10 ? "0" + n : n;
            };
            var result = d;
            return result;
        };
    }
}
