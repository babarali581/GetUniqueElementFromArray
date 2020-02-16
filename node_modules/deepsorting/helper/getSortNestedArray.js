
const getSortNestedArray = (arr) => {
    let finalResp = arr.reduce((acc, val) => {
    let {getSortedObjectKeys} = require('./getSortObject')

        let eachVal = typeof val === "string"
            ? "String"
            : typeof val === "number"
                ? "Number"
                : Array.isArray(val)
                    ? "Array"
                    : "Object"

        /* In case of string */
        
        if (eachVal === "String" || eachVal === "Number") {
            return [
                ...acc,
                val
            ] //acc.concat(val)
        } else if (eachVal === "Object") {
            val = getSortedObjectKeys(val)
            return [
                ...acc,
                val
            ] //acc.concat(val)

        } else if (eachVal === "Array") {
            let bab = getSortNestedArray(val)

            return [
                ...acc,
                bab
            ]
        }

    }, [])
    return finalResp.sort()
}

module.exports.getSortNestedArray = getSortNestedArray;