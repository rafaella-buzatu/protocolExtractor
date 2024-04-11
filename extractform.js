function downloadObjectAsJson(exportObj, exportName){
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // Required for Firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
}

document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Example data object to hold all form values
    const formData = {
        participantID: document.getElementById('participantID').value,
        publicationID: document.getElementById('publicationID').value,
        durationDays: document.getElementById('durationDays').value,
        durationHours: document.getElementById('durationHours').value,
        cellLines: [],
        mediaDetails: [],
        growthFactors: []
    };

    // Collect data from dynamically added fields
    // Example for cell lines
    document.querySelectorAll('.cell-line-name-field .mdc-text-field__input').forEach(input => {
        formData.cellLines.push(input.value);
    });

    // Example for basal media and other repeating groups
    document.querySelectorAll('.basal-media-container .fields-container').forEach(container => {
        let mediaDetails = {
            mediaName: container.querySelector('input[placeholder="Media Name"]').value,
            vendor: container.querySelector('input[placeholder="Vendor"]').value,
            catalogNumber: container.querySelector('input[placeholder="Catalog Number"]').value,
            mixtureRatio: container.querySelector('input[placeholder="Mixture Ratio"]').value
        };
        formData.mediaDetails.push(mediaDetails);
    });

    // Example for growth factors, etc.
    document.querySelectorAll('.growth-factor-container .fields-container').forEach(container => {
        let growthFactorDetails = {
            name: container.querySelector('input[placeholder="Name"]').value,
            vendor: container.querySelector('input[placeholder="Vendor"]').value,
            catalogNumber: container.querySelector('input[placeholder="Catalog Number"]').value,
            concentration: container.querySelector('input[placeholder="Final concentration"]').value
        };
        formData.growthFactors.push(growthFactorDetails);
    });
    downloadObjectAsJson(formData, "formData");

    // Optionally: send this data to a server or handle it further
    // postData(formData);
});

