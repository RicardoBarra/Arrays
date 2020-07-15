const patients = require('./patients')

const anonymizedData = patients.map((patient) => {
    
    const { id, age, gender, height, weight, dailyExercise } = patient;

    return {
        id: id,
        age: age,
        gender: gender,
        height: height,
        weight: weight,
        dailyExercise: dailyExercise
    }
})

console.log(anonymizedData)