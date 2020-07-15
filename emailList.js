const patients = require('./patients')


const emailAdresses = patients.map((patient) => {
 
  return patient.email;

})

console.log(patients)
console.log(emailAdresses)