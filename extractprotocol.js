function downloadObjectAsJson(exportObj, exportName) {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // Required for Firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}
console.log(document.getElementById('survey-form'));
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    if (form) {
        form.addEventListener('submit', function(event) {
        console.log('Form submitted');
        event.preventDefault(); // Prevent the default form submission behavior
    
    const formData = {
        participantID: document.getElementById('participantID').value,
        publicationID: document.getElementById('publicationID').value,
    }

    downloadObjectAsJson(formData, "formData"); 
        });
    }
});

const form = document.getElementById('survey-form');
if (form) {
    console.log('Form found');
    console.log('Form action:', form.action);  // Log a specific property of the form
} else {
    console.log('Form not found');
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    if (form) {
        console.log('Form found, adding listener...');
        form.addEventListener('submit', function(event) {
            console.log('Form submitted');
            event.preventDefault();  // Prevent actual submission for testing
        });
    } else {
        console.log('Form not found');
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            console.log('Form submitted');
            event.preventDefault(); // Prevent the default form submission behavior

            const formData = {
                participantID: document.getElementById('participantID').value,
                publicationID: document.getElementById('publicationID').value,
            };

            downloadObjectAsJson(formData, "formData");
        });
        console.log('Listener added to form');
    } else {
        console.log('Form not found');
    }
});
