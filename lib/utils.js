class Utils {
    /**
     * Judging variable which is Array
     * @param {any} arr  
     * @returns {boolean} Is array
     */
    static isArray(arr) {
        return Object.prototype.toString.call(arr) === "[object Array]";
    }

}

module.exports = Utils;