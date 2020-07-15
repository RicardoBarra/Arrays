const patients = require('./patients')

const fullNames = patients.map((patient) => {
    console.log(patient)

    const {firstName, lastName} = patient

    return `${firstName} ${lastName}`

})

console.log(patient)
console.log(fullNames)