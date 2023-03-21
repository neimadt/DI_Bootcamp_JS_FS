let beginCount = 9;//prompt('Enter Number of Beer')
beginCount = parseInt(beginCount)


const beerCount = (beginCount) => {
    let bottleCrash = 1
    let bottleCount = beginCount - 1
    let message = `Beer count starts at ${beginCount}\n`


    while (bottleCount > 1) {
        message += `-> Take _${bottleCrash}_ down, pass them around\n`
        message += `-> we have now ${bottleCount} bottles\n\n`
        bottleCrash++
        bottleCount--
    }

    if (bottleCount == 1) {
        message += `-> Take _${bottleCrash}_ down, pass it around\n`
        message += `-> we have now ${bottleCount} bottle\n\n`
    }

    message += `-> Take _${beginCount}_ down\n`
    message += `-> No bottle of beer on the wall`

    return message

}

console.log(beerCount(beginCount))