const main = require('../index')

const testData = [
    'rgb(233,12,45)',
    'rgb(222,100,44)',
    'rgb(255,255,55)',
    'rgb(12,255,67)',
    'rgb(34,233,134)',
    'rgb(34,99,199)',
    'rgb(145,49,255)',
]

const test = () => {
    testData.forEach((c) => {
        main(c,10);
    })
}

test();