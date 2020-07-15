const patients = require("./patients")
const email = process.argv[2]

const specificPatient = patients.find((patient) => email === patient.email)

if(specificPatient !== undefined) {
    console.log(specificPatient)
}   else {
    console.log(`Your email ${specificPatient} is not found`)
}


console.log(specificPatient);