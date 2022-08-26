const checkWord = require('check-if-word')
const word = checkWord('en')
const inquirer = require('inquirer')

console.log('hi')

const longword = 'illuminate'


inquirer.prompt([
    {
        type: 'input',
        message: 'The Long word is ILLUMINATE. Please enter a word to see if its letters are in the longword',
        name: 'wordq'
    },
    {
        type: 'input',
        message: 'Another',
        name: 'wordr'
    },
    {
        type: 'input',
        message: 'Just one more',
        name: 'words'
    },
    {
        type: 'input',
        message: 'mehhhh---- last one',
        name: 'wordt'
    },
    {
        type: 'input',
        message: 'lol i promise this is the last one',
        name: 'wordu'
    }
]).then((res)=> {
    const answers = Object.values(res)
    answers.forEach(element => {
        if (word.check(element)) {
            if (areLettersInWord(longword, element)) {
                console.log(`congratulations-- ${element} is in the longword!!!`)
            } else {
                console.log(`ut oh-- ${element}'s letters are not in the longword`)
            }
        } else {
            console.log(`ut oh-- ${element} is not a word!`)
        }
    });

    // for (let i = 0; i<words.length; i++) {   
    //     if (words[i]) {
    //         console.log(`congratulations-- ${eval[i]} is a word!`)
    //     } else {
    //         console.log(`ut oh-- ${eval[i]} is not a word!`)
    //     }
    // }
})

function areLettersInWord(cpuword, userword) {
    const cpuLetters = cpuword.split("")
    const userLetters = userword.split("")
    const recreate = []
    for (let i = 0; i<userLetters.length; i++) {
        for (let j = 0; j<cpuLetters.length; j++) {
            if (userLetters[i] === cpuLetters[j]) {
                recreate.push(userLetters[i])
                break
            }
        }
    }

    const newWord = recreate.join('')

    if (newWord === userword) {
        return true
    } else {
        return false
    }
}

// const pointKey = {
//     a: 1,
//     b: 2,
//     c: 2,
//     d: 2,
//     e: 1,
//     f: 2,
//     g: 2,
//     h: 3,
//     i: 1,
//     j: 5,
//     k: 3,
//     l: 1,
//     m: 2,
//     n: 1,
//     o: 1,
//     p: 2,
//     q: 5,
//     r: 1,
//     s: 1,
//     t: 1,
//     u: 3,
//     v: 3,
//     w: 3,
//     x: 5,
//     y: 4,
//     z: 5

// }

// function scoreWord(word) {
//     const split = word.split('')
//     console.log(split)
//     let points = 0
//     const pointValues = Object.values(pointKey)
//     const pointKeys = Object.keys(pointKey)
//     console.log(pointValues)

//     for (let i = 0; i<split.length; i++) {
//         for (let j = 0; j<pointKeys.length;j++) {
//             if (split[i] === pointKeys[j]) {
//             const indexOfKey = pointKeys[j].indexOf
//             points += pointValues[indexOfKey]
//         }
//         }
//     }
//     return points
// }

// console.log(scoreWord('hello'))