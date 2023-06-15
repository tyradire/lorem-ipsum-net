document.addEventListener('DOMContentLoaded', () => {

  // Range input
  const rangeSlider = document.getElementById('form-range');
  const rangeValue = document.querySelector('.form__range-value');

  rangeValue.textContent = rangeSlider.value + ' %';

  // Select input
  const selectSwitcher = document.getElementById('select');
  const selectButton = document.querySelector('.form__button')
  const options = document.querySelectorAll('.form__option');
  const formSelect = document.querySelector('.form__select');
  const selectValue = document.querySelector('.form__button');
  const selectCheckbox = document.querySelector('.form__input');

  const openOptions = () => {
    selectButton.classList.toggle('form__button_opened');
    formSelect.classList.toggle('form__select_opened');
  }
  const selectOption = (e) => {
    selectValue.textContent = e.currentTarget.textContent;
    selectButton.classList.remove('form__button_opened');
    formSelect.classList.remove('form__select_opened');
    selectCheckbox.checked = false;
  }
  
  options.forEach((el) => {
    el.addEventListener('click', selectOption);
  })

  // Submit input
  const form = document.querySelector('.form');

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