document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    
    form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (isProcessing) {
            return; // Exit if already processing a submission
        }
        isProcessing = true;
    
        // your form processing code here
    
        isProcessing = false; // Reset after processing is complete
    });

    const formData = {
        participantID: document.getElementById('participantID').value,
        publicationID: document.getElementById('publicationID').value,
        cellLines: []
    };

    document.querySelectorAll('.cell-line-set').forEach(set => {
        const cellLine = {
            cellLineType: set.querySelector('input[type="radio"]:checked') ? set.querySelector('input[type="radio"]:checked').nextElementSibling.textContent : '',
            cellLineName: set.querySelector('.cell-line-name-field .mdc-text-field__input').value
        };
        formData.cellLines.push(cellLine);
    });

    // Collect data from step 0
    const step0Container = document.querySelector('.step0-container');
    step0Data = collectStepData(step0Container);
    formData.step0Data = step0Data

    // Collect data from dynamically added step-container
    const stepContainers = document.querySelectorAll('.step-container');
    var count = $('.step-container').length;
    console.log(count);
    stepContainers.forEach((container, index) => {
        console.log(container, index);
        const stepKey = `step${index+1}Data`; // Create a dynamic key based on the index
        formData[stepKey] = collectStepData(container);
    });

    // Collect data from step 0
    const stepFinalContainer = document.querySelector('.step-container-final');
    stepFinalData = collectStepData(stepFinalContainer);
    formData.stepFinalData = stepFinalData

    // Send the formData as a JSON to the server
    fetch('https://protocol-database-2fd7e3539c0b.herokuapp.com/submit-protocol', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
});
});

// Function to collect data from given step container
function collectStepData(container) {
    const stepData = {
        mediaDetails: [],
        growthFactors: [],
        passaging: [],
        readoutDetails: []
    };

    container.querySelectorAll('.basal-media-container .fields-container').forEach(subContainer => {
        const mediaDetails = {
            mediaName: subContainer.querySelector('input[placeholder="Media Name"]').value,
            vendor: subContainer.querySelector('input[placeholder="Vendor"]').value,
            catalogNumber: subContainer.querySelector('input[placeholder="Catalog Number"]').value,
            mixtureRatio: subContainer.querySelector('select').value
        };
        stepData.mediaDetails.push(mediaDetails);
    });

    container.querySelectorAll('.growth-factor-container .fields-container').forEach(subContainer => {
        const growthFactorDetails = {
            name: subContainer.querySelector('input[placeholder="Name"]').value,
            vendor: subContainer.querySelector('input[placeholder="Vendor"]').value,
            catalogNumber: subContainer.querySelector('input[placeholder="Catalog Number"]').value,
            concentration: subContainer.querySelector('input[placeholder="Final concentration"]').value,
            unit: subContainer.querySelector('select').value
        };
        stepData.growthFactors.push(growthFactorDetails);
    });

    container.querySelectorAll('.passaging--container .fields-container').forEach(subContainer => {
        const passagingDetails = {
            name: subContainer.querySelector('input[placeholder="Name"]').value,
            vendor: subContainer.querySelector('input[placeholder="Vendor"]').value,
            catalogNumber: subContainer.querySelector('input[placeholder="Catalog Number"]').value,
            mixtureRatio: subContainer.querySelector('select').value
        };
        stepData.passaging.push(passagingDetails);
    });

    container.querySelectorAll('.readout--container .fields-container').forEach(subContainer => {
        const readoutDetails = {
            name: subContainer.querySelector('input[placeholder="Name"]').value,
            positiveCells: subContainer.querySelector('input[placeholder="Vendor"]').value,
            geneEnrichment: subContainer.querySelector('select').value
        };
        stepData.readoutDetails.push(readoutDetails);
    });

    return stepData;

    
}

let isProcessing = false;

