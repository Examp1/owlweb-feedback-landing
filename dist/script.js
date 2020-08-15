const element = document.querySelector('[type="tel"]'),
  maskOptions = {
    mask: '+{38}(000)000-00-00'
  },
  mask = IMask(element, maskOptions);

const cookieEl = document.querySelector('.privacy');


let cookies = () => {
  if (!Cookies.get('hide-cookie')) {
    setTimeout(() => {
      cookieEl.style.display = 'flex';
      document.body.style.overflow = 'hidden';

    }, 100);
  }

  Cookies.set('hide-cookie', 'true', {
    expires: 30
  });
};

console.log(document.cookie);

cookies();

const hideCookie = document.querySelector('#yes');

hideCookie.addEventListener('click', (e) => {
  document.querySelector('.privacy').style.display = 'none';
  document.body.style.overflow = '';
});

const closeSuccess = document.querySelector('[data-closesuccess]'),
      successModal = document.querySelector('.success-screen');

closeSuccess.addEventListener('click', (e) => {
    successModal.style.cssText = 'opacity: 0; display: none;';
});
const slides = document.querySelectorAll('.offer__slide'),
          prev = document.querySelector('.offer__slider-prev'),
          next = document.querySelector('.offer__slider-next'),
          total = document.querySelector('#total'),
          current = document.querySelector('#current');
    let slideIndex = 1;
