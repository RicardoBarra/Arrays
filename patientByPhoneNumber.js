const patients = require('./patients')

const phoneNumber = process.argv[2]

const specificPatient = patients.find((patient) => phoneNumber === patient.phoneNumber)

if(specificPatient !== undefined) {
    console.log(specificPatient)
}   else {
    console.log(`Your phone number was not found in our system`)
}


