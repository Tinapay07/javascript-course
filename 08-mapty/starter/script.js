'use strict';
console.log('Mapty OOP Foundations');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;
}
