const patients = require("./patients")

function calculateBMI(height, weight) {
  return Math.round(weight / (height * height))
}

const bmis = patients.map(function(patient) {

  const BMI = calculateBMI(patient.height, patient.weight)

  return BMI
})

console.log(bmis)