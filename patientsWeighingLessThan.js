const patients = require('./patients')

const weight = process.argv[2]

const patientsWeighingLessThan = patients.filter((patient) => {

        return patient.weight < weight

})

console.log(patientsWeighingLessThan)
console.log(patientsWeighingLessThan.length)
console.log(patients.length)