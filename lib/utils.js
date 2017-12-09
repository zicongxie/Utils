class Utils {

    static isArray(arr) {
        return Object.prototype.toString.call(arr) === "[object Array]";
    }

}

module.exports = Utils;