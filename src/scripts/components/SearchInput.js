import { DataStorage } from "../modules/DataStorage";

export class SearchInput {
  constructor(renderFunc, form, input, button, error) {
    this.renderFunc = renderFunc;
    this.form = form;
    this.input = input;
    this.button = button;
    this.error = error;
  }

  _checkInputValidity(input) {
    input.setCustomValidity("")
    if (input.validity.valueMissing) {
      input.setCustomValidity("Введите ключевое слово для поиска");
      return false;
    }
    return input.checkValidity()
  }

  _isValid() {
    let valid = true;
    if (!this._checkInputValidity(this.input)) { valid = false };
    return valid;
  }

  _setSubmitButtonState() {
    if (this._isValid()) {
      this.button.removeAttribute('disabled');
      this.button.classList.remove('search__button_inactive');
      this.error.textContent = "";
      this.error.classList.remove('search__error_visible')
    }
    else {
      this.button.setAttribute('disabled', true);
      this.button.classList.add('search__button_inactive');
      this.error.textContent = this.input.validationMessage;
      this.error.classList.add('search__error_visible')
    }
  }

  _setError() {
    if (this._isValid()) {
      this.error.textContent = "";
      this.error.classList.remove('search__error_visible')
    }
    else {
      this.error.textContent = this.input.validationMessage;
      this.error.classList.add('search__error_visible')
    }
  }

  setEventListeners() {
    this.form.addEventListener('submit', evt => {
      evt.preventDefault();
      this.renderFunc();
    })
    this.input.addEventListener('input', this._setSubmitButtonState.bind(this));
    this.input.addEventListener('input', this._setError.bind(this))
  }
  // _isFormValid() {
  //   let valid = true;
  //   if (!this._checkInputValidity(this.input)) valid = false;
  //   return valid;
  // }

  // _setSubmitButtonState() {
  //   if (this._isFormValid()) {
  //     this.button.removeAttribute('disabled');
  //   } else {
  //     this.button.setAttribute('disabled', true);
  //     this.button.classList.remove('search__button_inactive');
  //   }
  // }
  // _showInputError(input) {
  //   if (!this.checkInputValidity(input)) {
  //     this.error.textContent = input.validationMessage;
  //     this.error.classList.add('search__error_visible');
  //   }
  //   else {
  //     this.error.textContent = "";
  //     this.error.classList.remove('search__error_visible');
  //   }
  // }

  // setEventListeners() {
  //   this.input.addEventListener('input', this._setSubmitButtonState);
  //   this.input.addEventListener('input', (event) => this.checkInputValidity(event.target))
  //   this.input.addEventListener('input', (event) => this.showInputError(event.target))
  //   this.input.addEventListener('submit', this.renderFunc)
  // }
}