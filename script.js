
function initializeMDCTextFields() {
  const textFields = document.querySelectorAll('.mdc-text-field');
  textFields.forEach((textField) => {
      mdc.textField.MDCTextField.attachTo(textField);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('addRowButton');
  initializeMDCTextFields();
  addButton.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      let cellLineCount = document.querySelectorAll('.cell-line-set').length + 1; // Updated to count existing rows dynamically

      // Create the container for the new cell line set
      const newCellLineSet = document.createElement('div');
      newCellLineSet.classList.add('cell-line-set');
      newCellLineSet.innerHTML = `
          <span>${cellLineCount}.</span>
          <div class="options-container">
              <div class="mdc-form-field">
                  <div class="mdc-radio">
                      <input class="mdc-radio__native-control" name="cell-line-${cellLineCount}" type="radio" value="0">
                      <div class="mdc-radio__background">
                          <div class="mdc-radio__outer-circle"></div>
                          <div class="mdc-radio__inner-circle"></div>
                      </div>
                  </div>
                  <label>ESC</label>
              </div>
              <div class="mdc-form-field">
                  <div class="mdc-radio">
                      <input class="mdc-radio__native-control" name="cell-line-${cellLineCount}" type="radio" value="1">
                      <div class="mdc-radio__background">
                          <div class="mdc-radio__outer-circle"></div>
                          <div class="mdc-radio__inner-circle"></div>
                      </div>
                  </div>
                  <label>iPSC</label>
              </div>
          </div>
          <label class="mdc-text-field mdc-text-field--filled cell-line-name-field">
              <span class="mdc-text-field__ripple"></span>
              <input class="mdc-text-field__input" type="text" placeholder=" " aria-labelledby="cell-line-label-${cellLineCount}">
              <span class="mdc-floating-label" id="cell-line-label-${cellLineCount}">Cell line name</span>
              <span class="mdc-line-ripple"></span>
          </label>
      `;

      // Append the new cell line set before the addButton
      addButton.parentNode.insertBefore(newCellLineSet, addButton);
      initializeMDCTextFields();
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('addMediaButton');
  initializeMDCTextFields();
  addButton.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      let fieldCount = document.querySelectorAll('.basal-media-container .numbering-and-field').length + 1; // Updated to count existing rows dynamically

      // Create the container for the new field set
      const newFieldSet = document.createElement('div');
      newFieldSet.classList.add('field-set');
      newFieldSet.innerHTML = `
          
      <div class="mdc-layout-grid__inner">
      <div class="mdc-layout-grid__cell--span-12">
          <div class="numbering-and-field">
              <span>${fieldCount}.</span>
              <div class="fields-container">
                  <div class="field">
                      <label class="mdc-text-field mdc-text-field--filled">
                          <span class="mdc-text-field__ripple"></span>
                          <input class="mdc-text-field__input" type="text" placeholder="Media Name">
                          <span class="mdc-floating-label" id="name-floating-label">Media Name</span>
                          <span class="mdc-line-ripple"></span>
                      </label>
                  </div>
                  <div class="field">
                      <label class="mdc-text-field mdc-text-field--filled">
                          <span class="mdc-text-field__ripple"></span>
                          <input class="mdc-text-field__input" type="text" placeholder="Vendor">
                          <span class="mdc-floating-label" id="name-floating-label">Vendor</span>
                          <span class="mdc-line-ripple"></span>
                      </label>
                  </div>
                  <div class="field">
                      <label class="mdc-text-field mdc-text-field--filled">
                          <span class="mdc-text-field__ripple"></span>
                          <input class="mdc-text-field__input" type="text" placeholder="Catalog Number">
                          <span class="mdc-floating-label" id="name-floating-label">Catalog Number</span>
                          <span class="mdc-line-ripple"></span>
                      </label>
                  </div>
                  <div class="field">
                      <label class="mdc-text-field mdc-text-field--filled">
                          <span class="mdc-text-field__ripple"></span>
                          <input class="mdc-text-field__input" type="text" placeholder="Mixture Ratio"">
                          <span class="mdc-floating-label" id="name-floating-label">Mixture Ratio</span>
                          <span class="mdc-line-ripple"></span>
                      </label>
                  </div>
              </div>
          </div>
      </div>
  </div>
      `;

      // Append the new field set before the addButton
      addButton.parentNode.insertBefore(newFieldSet, addButton);
      initializeMDCTextFields();
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('addSerumSupplementButton'); // Ensure this ID matches your button's ID
  initializeMDCTextFields(); // Initialize text fields on page load

  addButton.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      let fieldCount = document.querySelectorAll('.serum-supplements-container .numbering-and-field').length + 1; // Updated to count existing rows dynamically
      // Create the container for the new field set
      const newFieldSet = document.createElement('div');
      newFieldSet.classList.add('field-set');
      newFieldSet.innerHTML = `
          <div class="mdc-layout-grid__inner">
              <div class="mdc-layout-grid__cell--span-12">
                  <div class="numbering-and-field">
                      <span>${fieldCount}.</span>
                      <div class="fields-container">
                          <div class="field">
                              <label class="mdc-text-field mdc-text-field--filled">
                                  <span class="mdc-text-field__ripple"></span>
                                  <input class="mdc-text-field__input" type="text" placeholder="Name">
                                  <span class="mdc-floating-label">Name</span>
                                  <span class="mdc-line-ripple"></span>
                              </label>
                          </div>
                          <div class="field">
                              <label class="mdc-text-field mdc-text-field--filled">
                                  <span class="mdc-text-field__ripple"></span>
                                  <input class="mdc-text-field__input" type="text" placeholder="Vendor">
                                  <span class="mdc-floating-label">Vendor</span>
                                  <span class="mdc-line-ripple"></span>
                              </label>
                          </div>
                          <div class="field">
                              <label class="mdc-text-field mdc-text-field--filled">
                                  <span class="mdc-text-field__ripple"></span>
                                  <input class="mdc-text-field__input" type="text" placeholder="Catalog Number">
                                  <span class="mdc-floating-label">Catalog Number</span>
                                  <span class="mdc-line-ripple"></span>
                              </label>
                          </div>
                          <div class="field">
                              <label class="mdc-text-field mdc-text-field--filled">
                                  <span class="mdc-text-field__ripple"></span>
                                  <input class="mdc-text-field__input" type="text" placeholder="Mixture Ratio"">
                                  <span class="mdc-floating-label">Mixture Ratio</span>
                                  <span class="mdc-line-ripple"></span>
                              </label>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      `;

      // Append the new field set in the desired location, e.g., before the addButton
      addButton.parentNode.insertBefore(newFieldSet, addButton);

      // Re-initialize MDC text fields to style the newly added fields
      initializeMDCTextFields();
  });
});


document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('addGrowthFactorButton'); // Ensure this ID matches your button's ID
  initializeMDCTextFields(); // Initialize text fields on page load

  addButton.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default form submission behavior

      let fieldCount = document.querySelectorAll('.growth-factor-container  .numbering-and-field').length + 1; // Updated to count existing rows dynamically
      // Create the container for the new field set
      const newFieldSet = document.createElement('div');
      newFieldSet.classList.add('field-set');
      newFieldSet.innerHTML = `
          <div class="mdc-layout-grid__inner">
              <div class="mdc-layout-grid__cell--span-12">
                  <div class="numbering-and-field">
                      <span>${fieldCount}.</span>
                      <div class="fields-container">
                        <div class="field">
                            <label class="mdc-text-field mdc-text-field--filled">
                                <span class="mdc-text-field__ripple"></span>
                                <input class="mdc-text-field__input" type="text" placeholder="Name">
                                <span class="mdc-floating-label">Name</span>
                                <span class="mdc-line-ripple"></span>
                            </label>
                        </div>
                        <div class="field">
                            <label class="mdc-text-field mdc-text-field--filled">
                                <span class="mdc-text-field__ripple"></span>
                                <input class="mdc-text-field__input" type="text" placeholder="Vendor">
                                <span class="mdc-floating-label">Vendor</span>
                                <span class="mdc-line-ripple"></span>
                            </label>
                        </div>
                        <div class="field">
                            <label class="mdc-text-field mdc-text-field--filled">
                                <span class="mdc-text-field__ripple"></span>
                                <input class="mdc-text-field__input" type="text" placeholder="Catalog Number">
                                <span class="mdc-floating-label">Catalog Number</span>
                                <span class="mdc-line-ripple"></span>
                            </label>
                        </div>
                        <div class="field">
                            <label class="mdc-text-field mdc-text-field--filled">
                                <span class="mdc-text-field__ripple"></span>
                                <input class="mdc-text-field__input" type="text" placeholder="Final concentration">
                                <span class="mdc-floating-label">Final concentration</span>
                                <span class="mdc-line-ripple"></span>
                            </label>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
      `;

      // Append the new field set in the desired location, e.g., before the addButton
      addButton.parentNode.insertBefore(newFieldSet, addButton);

      // Re-initialize MDC text fields to style the newly added fields
      initializeMDCTextFields();
  });
});


const textFields = document.querySelectorAll('.mdc-text-field');
for (const textField of textFields) {
  mdc.textField.MDCTextField.attachTo(textField);
}


var radios = document.querySelectorAll('.mdc-radio');
for (var i = 0, radio; radio = radios[i]; i++) {
  new mdc.radio.MDCRadio(radio);
}

document.addEventListener('DOMContentLoaded', function () {
  const mediaCheckbox = document.getElementById('mediaCheckbox');
  const mediaText = document.getElementById('mediaText');

  // Check if elements are correctly selected
  console.log(mediaCheckbox); // Should log the checkbox element
  console.log(mediaText); // Should log the "Media" text element

  mediaCheckbox.addEventListener('change', function () {
      if (mediaCheckbox.checked) {
          mediaText.style.display = 'block';
      } else {
          mediaText.style.display = 'none';
      }
  });
});
