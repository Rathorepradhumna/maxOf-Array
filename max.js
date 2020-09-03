
const logger = require("./logger");

const max = (arr) => {
    let maxValue = 0;

    try {
        arr.forEach(element => {
            if (element > maxValue && typeof element === "number") {
                maxValue = element
            }
            else {
                throw "error"
            }
        });
        return maxValue;
    }
    catch (err) {
        logger.error(err)
        return err;
    }

}




module.exports = max;