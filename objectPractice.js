const patients = require("./patients");
const firstPatient = patients[0];

const {age, weight, height} = firstPatient

console.log(age, weight, height) 

const {firstName, lastName} = firstPatient

const fullName = `${firstName} ${lastName}`

console.log(fullName)

if(firstPatient.dailyExercise === 'no') {
    console.log('does not exercise') 
}   else {
    console.log('this patient exercises')
}

