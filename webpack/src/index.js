import _ from 'lodash';
import './css/style.css';
import { a } from './fetch';

(function () {
  a().then(json => console.log(json));
  const link = document.querySelector('a');
  link.addEventListener('click', () => {
    alert('clicked.');
  })
})();
