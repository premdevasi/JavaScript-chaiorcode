


const form = document.querySelector('form');

form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Input values
    const height = parseFloat(document.querySelector('#height').value);
    const weight = parseFloat(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if (height === '' || height < 0 || isNaN(height)) {
        result.innerHTML = `Please enter a valid height ${height}`;
    } else if (weight === '' || weight < 0 || isNaN(weight)) {
        result.innerHTML = `Please enter a valid weight ${weight}`;
    } else {
        // Calculate BMI
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = `Your BMI is: <span>${bmi}</span>`;

        // BMI classification
        let classificationMessage = '';
        if (bmi < 18.6) {
            classificationMessage = 'You are Underweight';
        } else if (bmi >= 18.6 && bmi <= 24.9) {
            classificationMessage = 'You are Normal weight';
        } else {
            classificationMessage = 'You are Overweight';
        }

        // Display classification message
        const classificationResult = document.createElement('p');
        classificationResult.textContent = classificationMessage;
        result.appendChild(classificationResult);
    }
});



