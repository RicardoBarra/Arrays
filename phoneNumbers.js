const patients = require('./patients')

const phoneNumbers = patients.map((patient) => {

    const {firstName, lastName} = patient
    const fullName = `${firstName} ${lastName}`
    const phoneNumber = patient.phoneNumber
    const id = patient.id

    return `${fullName} ${phoneNumber} id: ${id}`
})

console.log(phoneNumbers)