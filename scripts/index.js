document.addEventListener('DOMContentLoaded', () => {

  // Range input
  const rangeSlider = document.getElementById('form-range');
  const rangeValue = document.querySelector('.form__range-value');

  rangeValue.textContent = rangeSlider.value + ' %';

  // Select input
  const selectSwitcher = document.getElementById('select');
  const selectButton = document.querySelector('.select__button')
  const options = document.querySelectorAll('.select__option');
  const formSelect = document.querySelector('.form__select');
  const selectValue = document.querySelector('.select__button');
  const selectCheckbox = document.querySelector('.select__input');

  const openOptions = () => {
    selectButton.classList.toggle('select__button_opened');
    formSelect.classList.toggle('form__select_opened');
  }
  const selectOption = (e) => {
    selectValue.textContent = e.currentTarget.textContent;
    selectButton.classList.remove('select__button_opened');
    formSelect.classList.remove('form__select_opened');
    selectCheckbox.checked = false;
  }
  
  options.forEach((el) => {
    el.addEventListener('click', selectOption);
  })

  // Submit input
  const form = document.querySelector('.order__form');

  const testFunc = (e) => {
    e.preventDefault();
    alert('Форма отправлена')
  }

  form.addEventListener('submit', (e) => testFunc(e))

  rangeSlider.addEventListener('input', (e) => {
    const value = e.target.value;
    rangeValue.textContent = value + ' %';
  })

  selectSwitcher.addEventListener('change', (e) => openOptions());
});