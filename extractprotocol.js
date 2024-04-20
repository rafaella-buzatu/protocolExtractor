document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('survey-form');
    console.log(form);
    form.addEventListener('submit-protocol', function(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        const formData = {
            participantID: document.getElementById('participantID').value,
            publicationID: document.getElementById('publicationID').value,
            cellLines: [],
            mediaDetails: [],
            growthFactors: [],
            passaging: [],
            readout: []
        };

        // Example for cell lines
        document.querySelectorAll('.cell-line-set').forEach(set => {
            const cellLine = {
                cellLineType: set.querySelector('input[type="radio"]:checked') ? set.querySelector('input[type="radio"]:checked').nextElementSibling.textContent : '',
                cellLineName: set.querySelector('.cell-line-name-field .mdc-text-field__input').value
            };
            formData.cellLines.push(cellLine);
        });

        // Example for basal media and other repeating groups
        document.querySelectorAll('.basal-media-container .fields-container').forEach(container => {
            const mediaDetails = {
                mediaName: container.querySelector('input[placeholder="Media Name"]').value,
                vendor: container.querySelector('input[placeholder="Vendor"]').value,
                catalogNumber: container.querySelector('input[placeholder="Catalog Number"]').value,
                mixtureRatio: container.querySelector('select').value
            };
            formData.mediaDetails.push(mediaDetails);
        });

        // Example for growth factors
        document.querySelectorAll('.growth-factor-container .fields-container').forEach(container => {
            const growthFactorDetails = {
                name: container.querySelector('input[placeholder="Name"]').value,
                vendor: container.querySelector('input[placeholder="Vendor"]').value,
                catalogNumber: container.querySelector('input[placeholder="Catalog Number"]').value,
                concentration: container.querySelector('input[placeholder="Final concentration"]').value,
                unit: container.querySelector('select').value
            };
            formData.growthFactors.push(growthFactorDetails);
        });

        // Example for passaging
        document.querySelectorAll('.passaging--container .fields-container').forEach(container => {
            const passagingDetail = {
                name: container.querySelector('input[placeholder="Name"]').value,
                vendor: container.querySelector('input[placeholder="Vendor"]').value,
                catalogNumber: container.querySelector('input[placeholder="Catalog Number"]').value,
                mixtureRatio: container.querySelector('select').value
            };
            formData.passaging.push(passagingDetail);
        });

        // Example for readout
        document.querySelectorAll('.readout--container .fields-container').forEach(container => {
            const readoutDetail = {
                name: container.querySelector('input[placeholder="Name"]').value,
                percentagePositiveCells: container.querySelector('input[placeholder="% positive cells"]').value,
                geneEnrichment: container.querySelector('select').value
            };
            formData.readout.push(readoutDetail);
        });

        downloadObjectAsJson(formData, "formData");
    });

    function downloadObjectAsJson(exportObj, exportName) {
        var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
        var downloadAnchorNode = document.createElement('a');
        downloadAnchorNode.setAttribute("href", dataStr);
        downloadAnchorNode.setAttribute("download", exportName + ".json");
        document.body.appendChild(downloadAnchorNode); // Required for Firefox
        downloadAnchorNode.click();
        downloadAnchorNode.remove();
    }
});