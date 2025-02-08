const presetSizes = {
    s: { chest: 38, waist: 35, hips: 41, shoulder: 16 }, // Example sizes
    m: { chest: 40, waist: 37, hips: 43, shoulder: 17 },
    l: { chest: 42, waist: 39, hips: 45, shoulder: 18 }, // Example sizes
    xl: { chest: 44, waist: 41, hips: 47, shoulder: 19 }, // Example sizes
    xxl: { chest: 46, waist: 43, hips: 49, shoulder: 20 } // Example sizes
};

function setPreset(size) {
    const selectedSize = presetSizes[size];
    if (selectedSize) {
        document.getElementById('chest').value = selectedSize.chest;
        document.getElementById('waist').value = selectedSize.waist;
        document.getElementById('hips').value = selectedSize.hips;
        document.getElementById('shoulder').value = selectedSize.shoulder;
    }
}

// Array to store measurement data
let measurementsData = [];

// Handle form submission
document.getElementById('measurementForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    // Get the input values
    const chest = document.getElementById('chest').value;
    const waist = document.getElementById('waist').value;
    const hips = document.getElementById('hips').value;
    const shoulder = document.getElementById('shoulder').value;

    // Create a new measurement object
    const measurement = {
        id: measurementsData.length + 1, // Assign a unique ID
        chest: chest,
        waist: waist,
        hips: hips,
        shoulder: shoulder
    };

    // Add the measurement object to the array
    measurementsData.push(measurement);

    // Log the array to the console (for demonstration)
    console.log('Measurements Data:', measurementsData);

    // Optionally, clear the form after submission
    document.getElementById('measurementForm').reset();
});