const patients = require("./patients")

// declare function
function displayFullName(patient) {

  const { firstName, lastName } = patient

  const fullName = `${firstName} ${lastName}`

  console.log(fullName)
}

// pass as callback
patients.forEach(displayFullName)

// pass anonymous function directly
patients.forEach(function(patient) {
   //console.log("CHECK TO SEE WHAT IS PATIENT:", patient);
    const { firstName, lastName, gender, age, weight } = patient

    console.log(`${firstName} ${lastName} - gender: ${gender} - age: ${age} - weight: ${weight}`)

    const prefix = gender === 'm' ? 'Mr' : 'Mrs'
    console.log(`${prefix} ${lastName}`)
})