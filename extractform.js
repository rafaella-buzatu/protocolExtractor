function downloadObjectAsJson(exportObj, exportName) {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // Required for Firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('participant-form');
    console.log(form);

    form.addEventListener('submit', function(event) {
        // Collecting form data
        const formData = {
            firstName: document.getElementById('first-name').value,
            middleName: document.getElementById('middle-name').value,
            lastName: document.getElementById('last-name').value,
            university: document.getElementById('univ').value,
            email: document.getElementById('e-mail').value
        };
        console.log(formData);
        // Download the data as a JSON file
        downloadObjectAsJson(formData, "participantData");

        // Alternatively, you could send this data to a server or further process it in your application
    });
});
