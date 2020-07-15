const patients = require('./patients')

const height = process.argv[2]

const patientsHigherThan = patients.filter((patient) => {
    return patient.height > height
})

console.log(patientsHigherThan)
console.log('Total number of patients', patients.length)
console.log(`Number of patients who are taller than ${height}`, patientsHigherThan.length)