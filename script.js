
function initializeMDCTextFields() {
  const textFields = document.querySelectorAll('.mdc-text-field');
  textFields.forEach((textField) => {
      mdc.textField.MDCTextField.attachTo(textField);
  });
}

  document.addEventListener('DOMContentLoaded', function () {

    initializeMDCTextFields(); // Initialize text fields on page load


     
    // Attach the event listener to the body
    document.body.addEventListener('click', function (event) {
        const target = event.target;

        // Check if the clicked element is one of the buttons
        if (target.classList.contains('addMediaButton')) {
            event.preventDefault(); // Prevent the default form submission behavior
            console.log('making function');

            // Create the container for the new field set
            const newFieldSet = document.createElement('div');
            newFieldSet.classList.add('field-set');
            newFieldSet.innerHTML = `
            
            <div class="mdc-layout-grid__inner">
            <div class="mdc-layout-grid__cell--span-12">
                <div class="numbering-and-field">
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
                        <label class="mdc-text-field mdc-text-field--filled" style = "width:100%">
                        <span class="mdc-text-field__ripple"></span>
                        <select class="mdc-text-field__input">
                          <option value="100">100%</option>
                          <option value="50">50%</option>
                          <option value="33">33%</option>
                        </select>
                        <span class="mdc-floating-label">Mixture Ratio</span>
                        <span class="mdc-line-ripple"></span>
                      </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            `;

            // Append the new field set in the desired location, e.g., before the target button
            target.parentNode.insertBefore(newFieldSet, target);

            // Re-initialize MDC text fields to style the newly added fields
            initializeMDCTextFields();
        }
    });
});

  document.addEventListener('DOMContentLoaded', function () {

    initializeMDCTextFields(); // Initialize text fields on page load


     
    // Attach the event listener to the body
    document.body.addEventListener('click', function (event) {
        const target = event.target;

        // Check if the clicked element is one of the buttons
        if (target.classList.contains('addSerumSupplementButton')) {
            event.preventDefault(); // Prevent the default form submission behavior
            console.log('making function');

            // Create the container for the new field set
            const newFieldSet = document.createElement('div');
            newFieldSet.classList.add('field-set');
            newFieldSet.innerHTML = `
            <div class="mdc-layout-grid__inner">
                <div class="mdc-layout-grid__cell--span-12">
                    <div class="numbering-and-field">
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
                            <label class="mdc-text-field mdc-text-field--filled" style = "width:100%">
                            <span class="mdc-text-field__ripple"></span>
                            <select class="mdc-text-field__input">
                              <option value="100">100%</option>
                              <option value="50">50%</option>
                              <option value="33">33%</option>
                            </select>
                            <span class="mdc-floating-label">Mixture Ratio</span>
                            <span class="mdc-line-ripple"></span>
                          </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;

            // Append the new field set in the desired location, e.g., before the target button
            target.parentNode.insertBefore(newFieldSet, target);

            // Re-initialize MDC text fields to style the newly added fields
            initializeMDCTextFields();
        }
    });
});


  document.addEventListener('DOMContentLoaded', function () {

    initializeMDCTextFields(); // Initialize text fields on page load


     
    // Attach the event listener to the body
    document.body.addEventListener('click', function (event) {
        const target = event.target;

        // Check if the clicked element is one of the buttons
        if (target.classList.contains('addGrowthFactorButton')) {
            event.preventDefault(); // Prevent the default form submission behavior
            console.log('making function');

            // Create the container for the new field set
            const newFieldSet = document.createElement('div');
            newFieldSet.classList.add('field-set');
            newFieldSet.innerHTML = `
            <div class="mdc-layout-grid__inner">
                <div class="mdc-layout-grid__cell--span-12">
                    <div class="numbering-and-field">
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
                                  <input class="mdc-text-field__input" type="text" placeholder="Final concentration<">
                                  <span class="mdc-floating-label">Final concentration</span>
                                  <span class="mdc-line-ripple"></span>
                              </label>
                          </div>
                          <div class="field">
                                <label class="mdc-text-field mdc-text-field--filled">
                                    <span class="mdc-text-field__ripple"></span>
                                    <select class="mdc-text-field__input">
                                        <option value="ng/mL">ng/mL</default>
                                        <option value="μM">μM</option>
                                        <option value="mM">mM</option>
                                    </select>
                                    <span class="mdc-floating-label">Unit</span>
                                    <span class="mdc-line-ripple"></span>
                                </label>
                                    </div>
                                                
                        </div>
                    </div>
                </div>
            </div>
        `;

            // Append the new field set in the desired location, e.g., before the target button
            target.parentNode.insertBefore(newFieldSet, target);

            // Re-initialize MDC text fields to style the newly added fields
            initializeMDCTextFields();
        }
    });
});

    document.addEventListener('DOMContentLoaded', function () {

        initializeMDCTextFields(); // Initialize text fields on page load

    
         
        // Attach the event listener to the body
        document.body.addEventListener('click', function (event) {
            const target = event.target;
    
            // Check if the clicked element is one of the buttons
            if (target.classList.contains('addPassagingButton')) {
                event.preventDefault(); // Prevent the default form submission behavior
                console.log('making function');
    
                // Create the container for the new field set
                const newFieldSet = document.createElement('div');
                newFieldSet.classList.add('field-set');
                newFieldSet.innerHTML = `
                <div class="mdc-layout-grid__inner">
                <div class="mdc-layout-grid__cell--span-12">
                    <div class="numbering-and-field">
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
                            <label class="mdc-text-field mdc-text-field--filled" style = "width:100%">
                              <span class="mdc-text-field__ripple"></span>
                              <select class="mdc-text-field__input">
                                <option value="100">100%</option>
                                <option value="50">50%</option>
                                <option value="33">33%</option>
                              </select>
                              <span class="mdc-floating-label">Mixture Ratio</span>
                              <span class="mdc-line-ripple"></span>
                            </label>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
            `;
    
                // Append the new field set in the desired location, e.g., before the target button
                target.parentNode.insertBefore(newFieldSet, target);
    
                // Re-initialize MDC text fields to style the newly added fields
                initializeMDCTextFields();
            }
        });
    });
  
    document.addEventListener('DOMContentLoaded', function () {

        initializeMDCTextFields(); // Initialize text fields on page load

    
         
        // Attach the event listener to the body
        document.body.addEventListener('click', function (event) {
            const target = event.target;
    
            // Check if the clicked element is one of the buttons
            if (target.classList.contains('addReadoutButton')) {
                event.preventDefault(); // Prevent the default form submission behavior
                console.log('making function');
    
                // Create the container for the new field set
                const newFieldSet = document.createElement('div');
                newFieldSet.classList.add('field-set');
                newFieldSet.innerHTML = `
                    <div class="mdc-layout-grid__inner">
                        <div class="mdc-layout-grid__cell--span-12">
                            <div class="numbering-and-field">
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
                                            <input class="mdc-text-field__input" type="text" placeholder="% positive cells">
                                            <span class="mdc-floating-label">% positive cells</span>
                                            <span class="mdc-line-ripple"></span>
                                        </label>
                                    </div>
                                    <div class="field">
                                        <label class="mdc-text-field mdc-text-field--filled" style="width:100%">
                                            <span class="mdc-text-field__ripple"></span>
                                            <select class="mdc-text-field__input">
                                                <option value="up">↑ upregulated</option>
                                                <option value="down">↓ downregulated</option>
                                            </select>
                                            <span class="mdc-floating-label">Gene enrichment</span>
                                            <span class="mdc-line-ripple"></span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
    
                // Append the new field set in the desired location, e.g., before the target button
                target.parentNode.insertBefore(newFieldSet, target);
    
                // Re-initialize MDC text fields to style the newly added fields
                initializeMDCTextFields();
            }
        });
    });
    

// Attach MDCTextField to all text fields
const textFields = document.querySelectorAll('.mdc-text-field');
textFields.forEach(textField => {
    mdc.textField.MDCTextField.attachTo(textField);
});

  
var radios = document.querySelectorAll('.mdc-radio');
for (var i = 0, radio; radio = radios[i]; i++) {
new mdc.radio.MDCRadio(radio);
}

document.addEventListener('DOMContentLoaded', function () {
const mediaCheckbox = document.getElementById('mediaCheckbox');
const passagingMenu = document.getElementsByClassName("passaging--container")[0];

mediaCheckbox.addEventListener('change', function () {
    if (mediaCheckbox.checked) {
        passagingMenu.style.display = 'block';
    } else {
        passagingMenu.style.display = 'none';
    }
});
});
  
  document.addEventListener('DOMContentLoaded', function () {
      const step0Checkbox = document.getElementById('step0Checkbox');
      const step0Menu = document.getElementsByClassName('step0-container')[0];
      
      step0Checkbox.addEventListener('change', function () {
          if (step0Checkbox.checked) {
              step0Menu.style.display = 'block';
          } else {
              step0Menu.style.display = 'none';
          }
      });
    });
  

  document.addEventListener('DOMContentLoaded', function () {
    let stepCount = document.querySelectorAll('.step-container').length;
    console.log(stepCount);
    const addStepButton = document.getElementById('addStepButton');

    addStepButton.addEventListener('click', function (event) {
        event.preventDefault();

        // Create new step container
        const newStepContainer = document.createElement('div');
        newStepContainer.classList.add('step-container');
        newStepContainer.innerHTML = `
        <div class="step-container">
                        <hr>
                        <h3 style="font-size: 20px; font-weight: bold;">Step ${stepCount + 1}.</h3>

                            <h2 style="font-weight: bold; font-size: 20px;">Duration</h2>

                              <div class="options-container">
                                <div class="mdc-form-field" style="margin-right: 20px;">
                                    <div class="mdc-radio">
                                        <input class="mdc-radio__native-control" type="radio" id="not-given" name="duration" value="0">
                                        <div class="mdc-radio__background">
                                            <div class="mdc-radio__outer-circle"></div>
                                            <div class="mdc-radio__inner-circle"></div>
                                        </div>
                                    </div>
                                    <label for="overnight">not specified</label>
                                </div>
                              <div class="options-container">
                                <div class="mdc-form-field" style="margin-right: 20px;">
                                    <div class="mdc-radio">
                                        <input class="mdc-radio__native-control" type="radio" id="overnight" name="duration" value="0">
                                        <div class="mdc-radio__background">
                                            <div class="mdc-radio__outer-circle"></div>
                                            <div class="mdc-radio__inner-circle"></div>
                                        </div>
                                    </div>
                                    <label for="overnight">overnight</label>
                                </div>
                                
                                <div class="mdc-form-field">
                                    <div class="mdc-radio">
                                        <input class="mdc-radio__native-control" type="radio" id="hours" name="duration" value="1">
                                        <div class="mdc-radio__background">
                                            <div class="mdc-radio__outer-circle"></div>
                                            <div class="mdc-radio__inner-circle"></div>
                                        </div>
                                    </div>
                                    <label for="hours" style="margin-right: 10px;">hours</label>
                                    <div class="mdc-text-field mdc-text-field--filled">
                                        <input class="mdc-text-field__input" type="text" id="input-hours" placeholder="Enter hours">
                                        <label class="mdc-floating-label" for="input-hours">Enter hours</label>
                                        <div class="mdc-line-ripple"></div>
                                    </div>
                                </div>
                            </div>
                            
                            &nbsp;
                                
                            </div>
                            
                            
                            <hr style = "height: 1px; background-color:grey">

                            <h2 style="font-weight: bold; font-size: 20px;">Formulation</h2>
                            <!-- Basal Media -->
                            <div class="basal-media-container">
                            <div class="custom-basal-media mdc-layout-grid">
                              <div class="mdc-layout-grid__cell--span-12">
                                <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Basal Media</h2>
                            </div>
                            
                            <!-- Assuming this is already within an mdc-layout-grid -->
                            <div class="mdc-layout-grid__inner">
                                <div class="mdc-layout-grid__cell--span-12">
                                    <div class="numbering-and-field">
                                        
                                        <div class="fields-container">
                                            <div class="field">
                                                <label class="mdc-text-field mdc-text-field--filled">
                                                    <span class="mdc-text-field__ripple"></span>
                                                    <input class="mdc-text-field__input" type="text" placeholder="Media Name" required>
                                                    <span class="mdc-floating-label">Media Name</span>
                                                    <span class="mdc-line-ripple"></span>
                                                </label>
                                            </div>
                                            <div class="field">
                                                <label class="mdc-text-field mdc-text-field--filled">
                                                    <span class="mdc-text-field__ripple"></span>
                                                    <input class="mdc-text-field__input" type="text" placeholder="Vendor" required>
                                                    <span class="mdc-floating-label">Vendor</span>
                                                    <span class="mdc-line-ripple"></span>
                                                </label>
                                            </div>
                                            <div class="field">
                                                <label class="mdc-text-field mdc-text-field--filled">
                                                    <span class="mdc-text-field__ripple"></span>
                                                    <input class="mdc-text-field__input" type="text" placeholder="Catalog Number" required>
                                                    <span class="mdc-floating-label">Catalog Number</span>
                                                    <span class="mdc-line-ripple"></span>
                                                </label>
                                            </div>
                                            <div class="field">
                                                <label class="mdc-text-field mdc-text-field--filled" style = "width:100%">
                                                  <span class="mdc-text-field__ripple"></span>
                                                  <select class="mdc-text-field__input" required>
                                                    <option value="100">100%</option>
                                                    <option value="50">50%</option>
                                                    <option value="33">33%</option>
                                                  </select>
                                                  <span class="mdc-floating-label">Mixture Ratio</span>
                                                  <span class="mdc-line-ripple"></span>
                                                </label>
                                              </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            

                             <button id="addMediaButton" type="button" class="mdc-icon-button">+</button>
                            
                            </div>
                            </div>

                             <div class="serum-supplements-container">
                             <div class="custom-serum-supplements mdc-layout-grid">
                              <div class="mdc-layout-grid__cell--span-12">
                                  <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Serum and Supplements</h2>
                              </div>
                              
                              <div class="mdc-layout-grid__inner">
                                  <div class="mdc-layout-grid__cell--span-12">
                                      <div class="numbering-and-field">
                                         
                                          <div class="fields-container">
                                              <div class="field">
                                                  <label class="mdc-text-field mdc-text-field--filled">
                                                      <span class="mdc-text-field__ripple"></span>
                                                      <input class="mdc-text-field__input" type="text" placeholder="Serum/Supplement Name" required>
                                                      <span class="mdc-floating-label">Name</span>
                                                      <span class="mdc-line-ripple"></span>
                                                  </label>
                                              </div>
                                              <div class="field">
                                                  <label class="mdc-text-field mdc-text-field--filled">
                                                      <span class="mdc-text-field__ripple"></span>
                                                      <input class="mdc-text-field__input" type="text" placeholder="Vendor" required>
                                                      <span class="mdc-floating-label">Vendor</span>
                                                      <span class="mdc-line-ripple"></span>
                                                  </label>
                                              </div>
                                              <div class="field">
                                                  <label class="mdc-text-field mdc-text-field--filled">
                                                      <span class="mdc-text-field__ripple"></span>
                                                      <input class="mdc-text-field__input" type="text" placeholder="Catalog Number" required>
                                                      <span class="mdc-floating-label">Catalog Number</span>
                                                      <span class="mdc-line-ripple"></span>
                                                  </label>
                                              </div>
                                              <div class="field">
                                                <label class="mdc-text-field mdc-text-field--filled" style = "width:100%">
                                                  <span class="mdc-text-field__ripple"></span>
                                                  <select class="mdc-text-field__input" required>
                                                    <option value="100">100%</option>
                                                    <option value="50">50%</option>
                                                    <option value="33">33%</option>
                                                  </select>
                                                  <span class="mdc-floating-label">Mixture Ratio</span>
                                                  <span class="mdc-line-ripple"></span>
                                                </label>
                                              </div>
                                              
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            
                          
                              <button id="addSerumSupplementButton" type="button" class="mdc-icon-button">+</button>
                             </div>
                             </div>
                          
                          
                             <div class="growth-factor-container">
                             <div class="custom-growth-factors mdc-layout-grid">
                              <div class="mdc-layout-grid__cell--span-12">
                                  <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Growth factor, cytokine and chemical supplements</h2>
                              </div>
                              
                              <div class="mdc-layout-grid__inner">
                                  <div class="mdc-layout-grid__cell--span-12">
                                      <div class="numbering-and-field">
                                         
                                          <div class="fields-container">
                                              <div class="field">
                                                  <label class="mdc-text-field mdc-text-field--filled">
                                                      <span class="mdc-text-field__ripple"></span>
                                                      <input class="mdc-text-field__input" type="text" placeholder="Name" required>
                                                      <span class="mdc-floating-label">Name</span>
                                                      <span class="mdc-line-ripple"></span>
                                                  </label>
                                              </div>
                                              <div class="field">
                                                  <label class="mdc-text-field mdc-text-field--filled">
                                                      <span class="mdc-text-field__ripple"></span>
                                                      <input class="mdc-text-field__input" type="text" placeholder="Vendor" required>
                                                      <span class="mdc-floating-label">Vendor</span>
                                                      <span class="mdc-line-ripple"></span>
                                                  </label>
                                              </div>
                                              <div class="field">
                                                  <label class="mdc-text-field mdc-text-field--filled">
                                                      <span class="mdc-text-field__ripple"></span>
                                                      <input class="mdc-text-field__input" type="text" placeholder="Catalog Number" required>
                                                      <span class="mdc-floating-label">Catalog Number</span>
                                                      <span class="mdc-line-ripple"></span>
                                                  </label>
                                              </div>
                                              <div class="field">
                                                  <label class="mdc-text-field mdc-text-field--filled">
                                                      <span class="mdc-text-field__ripple"></span>
                                                      <input class="mdc-text-field__input" type="text" placeholder="Final concentration" required>
                                                      <span class="mdc-floating-label">Final concentration</span>
                                                      <span class="mdc-line-ripple"></span>
                                                  </label>
                                              </div>
                                              <div class="field">
                                                    <label class="mdc-text-field mdc-text-field--filled">
                                                        <span class="mdc-text-field__ripple"></span>
                                                        <select class="mdc-text-field__input">
                                                            <option value="ng/mL">ng/mL</default>
                                                            <option value="μM">μM</option>
                                                            <option value="mM">mM</option>
                                                        </select>
                                                        <span class="mdc-floating-label">Unit</span>
                                                        <span class="mdc-line-ripple"></span>
                                                    </label>
                                                        </div>
                                                
                                          </div>
                                      </div>
                                  </div>
                              </div>
                            
                          
                              <button id="addGrowthFactorButton" type="button" class="mdc-icon-button">+</button>
                             </div>
                             </div>

                             <hr style = "height: 1px; background-color:grey">
                             <h2 style="font-weight: bold; font-size: 20px;">Passaging</h2>
                             <div class="checkbox-container" style="display: flex; align-items: center;">
                              <div class="mdc-checkbox">
                                  <input type="checkbox" id="mediaCheckbox" class="mdc-checkbox__native-control"/>
                                  <div class="mdc-checkbox__background">
                                      <svg class="mdc-checkbox__checkmark" viewBox="0 0 24 24">
                                          <path class="mdc-checkbox__checkmark-path" fill="none" d="M1.73,12.91 8.1,19.28 22.79,4.59"></path>
                                      </svg>
                                      <div class="mdc-checkbox__mixedmark"></div>
                                  </div>
                              </div>
                              <label for="mediaCheckbox" class="checkbox-label" style="margin-left: 10px; width: 100%; display: block;">The cells were passaged following the addition of the compounds.</label>

                              </div>
                                                 
    
                        
                          <div class="passaging--container" style="display:none;">
                          <div class=" mdc-layout-grid">
                           <div class="mdc-layout-grid__cell--span-12">
                               <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Passaging media</h2>
                           </div>
                           
                           <div class="mdc-layout-grid__inner">
                               <div class="mdc-layout-grid__cell--span-12">
                                   <div class="numbering-and-field">
                                       
                                       <div class="fields-container">
                                           <div class="field">
                                               <label class="mdc-text-field mdc-text-field--filled">
                                                   <span class="mdc-text-field__ripple"></span>
                                                   <input class="mdc-text-field__input" type="text" placeholder="Name" required>
                                                   <span class="mdc-floating-label">Name</span>
                                                   <span class="mdc-line-ripple"></span>
                                               </label>
                                           </div>
                                           <div class="field">
                                               <label class="mdc-text-field mdc-text-field--filled">
                                                   <span class="mdc-text-field__ripple"></span>
                                                   <input class="mdc-text-field__input" type="text" placeholder="Vendor" required>
                                                   <span class="mdc-floating-label">Vendor</span>
                                                   <span class="mdc-line-ripple"></span>
                                               </label>
                                           </div>
                                           <div class="field">
                                               <label class="mdc-text-field mdc-text-field--filled">
                                                   <span class="mdc-text-field__ripple"></span>
                                                   <input class="mdc-text-field__input" type="text" placeholder="Catalog Number" required>
                                                   <span class="mdc-floating-label">Catalog Number</span>
                                                   <span class="mdc-line-ripple"></span>
                                               </label>
                                           </div>
                                           <div class="field">
                                            <label class="mdc-text-field mdc-text-field--filled" style = "width:100%">
                                              <span class="mdc-text-field__ripple"></span>
                                              <select class="mdc-text-field__input" required>
                                                <option value="100">100%</option>
                                                <option value="50">50%</option>
                                                <option value="33">33%</option>
                                              </select>
                                              <span class="mdc-floating-label">Mixture Ratio</span>
                                              <span class="mdc-line-ripple"></span>
                                            </label>
                                          </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                         
                           
                           <button id="addPassagingButton" type="button" class="mdc-icon-button">+</button>
                          </div>
                          </div>
                          &nbsp;

                          <hr style = "height: 1px; background-color:grey">
                          <h2 style="font-weight: bold; font-size: 20px;">Readout</h2>
                          <div class="readout--container">
                            <div class="custom-readout mdc-layout-grid">
                             <div class="mdc-layout-grid__cell--span-12">
                                 <h2 style="font-size: 18px; font-weight: bold; margin-bottom: 10px;">Gene markers</h2>
                             </div>
                             
                             <div class="mdc-layout-grid__inner">
                                 <div class="mdc-layout-grid__cell--span-12">
                                     <div class="numbering-and-field">
                                        
                                         <div class="fields-container">
                                             <div class="field">
                                                 <label class="mdc-text-field mdc-text-field--filled">
                                                     <span class="mdc-text-field__ripple"></span>
                                                     <input class="mdc-text-field__input" type="text" placeholder="Name" required>
                                                     <span class="mdc-floating-label">Name</span>
                                                     <span class="mdc-line-ripple"></span>
                                                 </label>
                                             </div>
                                             <div class="field">
                                                 <label class="mdc-text-field mdc-text-field--filled">
                                                     <span class="mdc-text-field__ripple"></span>
                                                     <input class="mdc-text-field__input" type="text" placeholder="Vendor" required>
                                                     <span class="mdc-floating-label">% positive cells</span>
                                                     <span class="mdc-line-ripple"></span>
                                                 </label>
                                             </div>
                                             <div class="field">
                                                <label class="mdc-text-field mdc-text-field--filled" style = "width:100%">
                                                  <span class="mdc-text-field__ripple"></span>
                                                  <select class="mdc-text-field__input" required>
                                                    <option value="up">↑ upregulated</option>
                                                    <option value="down">↓ downregulated</option>
                                                  </select>
                                                  <span class="mdc-floating-label">Gene enrichment</span>
                                                  <span class="mdc-line-ripple"></span>
                                                </label>
                                              </div>
                                              
                                         </div>
                                     </div>
                                 </div>
                            </div>
                            
                             <button id="addReadoutButton" type="button" class="mdc-icon-button">+</button>
                        
                        </div>


                        </div>
                        
    `;
  
       // Append the new step container before the add button
       addStepButton.parentNode.insertBefore(newStepContainer, addStepButton);

       // Re-initialize Material Design Components for the new elements
       initializeMDCTextFields();

       stepCount = stepCount + 1
   });
});


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
  
  
