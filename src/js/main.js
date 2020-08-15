'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const success = document.querySelector('.success-screen'),
          closeSuccess = success.querySelector('[data-closeSuccess]');

    closeSuccess.addEventListener('click', (e) => {
        success.style.display = 'none';
    });

    const input = document.querySelector('input[type="text"]');
    // input.style.display = 'none';
    document.querySelector('textarea').addEventListener('focus', (e) => {
        e.target.classList.add('active-text');
        input.classList.add('active-input');
    });
});