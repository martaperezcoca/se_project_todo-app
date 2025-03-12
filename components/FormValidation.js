class FormValidator {
  constructor(settings, formEl) {
    this._formSelector = settings.formSelector;
    this._inputSelector = settings.inputSelector;
    this._submitButtonSelector = settings.submitButtonSelector;
    this._errorClass = settings.errorClass;
    this._inputErrorClass = settings.inputErrorClass;
    this._inactiveButtonClass = settings.inactiveButtonClass;
    this._formEl = formEl;
  }

// TODO - implement rest of the methods
_showInputError() {}

_hideInputError() {}

_hasInvalidInput() {}

_toggleButtonState() {}





  // implement this method checkInputValidity
  //_checkInputValidity(inputElement) {
   // if (!inputElement.validity.valid) {
     // showInputError(
       // this._formEl,
       // this._inputElement,
       // this._inputElement.validationMessage,
       // settings
     // );
    //} else {
     // hideInputError(this._formEl, this._inputElement, settings);
    //}
  }

  _setEventListeners() {
    this._inputList = Array.from(
      this._formEl.querySelectorAll(this._inputSelector)
    );
    // TODO - FINISH implementng event listeners
    //const buttonElement = this._formEl.querySelector(
    //settings.submitButtonSelector
    //);

    //toggleButtonState(this._inputList, this._buttonElement, settings);

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(this._inputElement);
        //this._toggleButtonState(this._inputList, this._buttonElement, settings);
      });
    });
  }

  enableValidation() {
    this._formEl.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}

export default FormValidator;
