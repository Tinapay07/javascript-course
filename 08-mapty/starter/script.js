'use strict';
console.log('Mapty OOP Foundations');

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    this.coords = coords;
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    // generate a description using workout type and current date
    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }
  click() {
    this.clicks++;
  }
}

const testWorkout = new Workout([40.7128, -74.006], 5.2, 24);
console.log('Test workout:', testWorkout);

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }

  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
  calcPace() {
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

const run1 = new Running([39.7392, -104.9903], 5.2, 24, 178);
console.log('=== RUNNING WORKOUT ===');
console.log('Distance:', run1.distance, 'km');
console.log('Duration:', run1.duration, 'min');
console.log('Cadence:', run1.cadence, 'spm');
console.log('Pace:', run1.pace.toFixed(1), 'min/km');
console.log('Description:', run1.description);
console.log('ID:', run1.id);

const cycling1 = new Cycling([39.7392, -104.9903], 27, 95, 523);
console.log('=== CYCLING WORKOUT ===');
console.log('Distance:', cycling1.distance, 'km');
console.log('Duration:', cycling1.duration, 'min');
console.log('Elevation Gain:', cycling1.elevationGain, 'm');
console.log('Speed:', cycling1.speed.toFixed(1), 'km/h');
console.log('Description:', cycling1.description);
console.log('ID:', cycling1.id);

console.log('=== INHERITANCE TESTING ===');
console.log(
  'Both inherit from Workout:',
  run1 instanceof Workout,
  cycling1 instanceof Workout
);

console.log('=== TESTING GEOLOCATION API ===');

function getPosition() {}
// Test the geolocation
getPosition();

function loadMap(position) {
  const { latitude, longitude } = position.coords;
  console.log(`Loading map at coordinates: ${latitude}, ${longitude}`);

  const coords = [latitude, longitude];

  const map = L.map('map').setView(coords, 13);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // add a marker blue
  L.marker(coords).addTo(map).bindPopup('📍 You are here!').openPopup;

  // add click event listener to the map
  map.on('click', function (mapEvent) {
    console.log('Map clicked at:', mapEvent);
    const { lat, lng } = mapEvent.latlng;
    console.log('Map clicked at: $(lat.toFixed(4))}, $(lng.toFixed(4))');

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        `Workout location<br>Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`
      )
      .openPopup();
  });

  console.log('Map loaded Successfully at user location');
}

function loadDefaultMap() {
  console.log('Loading default map at (Manila)');

  const defaultCoords = [14.5995, 120.9842]; // Manila coordinates

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // add click event listener to the map
  map.on('click', function (mapEvent) {
    console.log('Map clicked at:', mapEvent);
    const { lat, lng } = mapEvent.latlng;
    console.log('Map clicked at: $(lat.toFixed(4))}, $(lng.toFixed(4))');

    L.marker([lat, lng])
      .addTo(map)
      .bindPopup(
        `Workout location<br>Lat: ${lat.toFixed(4)}, Lng: ${lng.toFixed(4)}`
      )
      .openPopup();
  });

  console.log('Default map loaded successfully');
}

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];

  constructor() {
    console.log('App started');
    this._getPosition();
  }

  _getPosition() {
    if (navigator.geolocation) {
      console.log('🔍 Requesting user location...');
      navigator.geolocation.getCurrentPosition(
        loadMap,
        function (error) {
          console.error('Geolocation error:', error);
          // Create a Google Maps link to verify the location
          const googleMapsUrl = `https://www.google.pt/maps/@${latitude},${longitude}`;
          console.log(`View on Google Maps: ${googleMapsUrl}`);
        },
        function (error) {
          console.error('Geolocation error:', error);

          let message = 'Could not get your position. ';

          switch (error.code) {
            case error.PERMISSION_DENIED:
              message +=
                'Location access was denied. Please enable location services and refresh the page.';
              break;
            case error.POSITION_UNAVAILABLE:
              message += 'Location information is unavailable.';
              break;
            case error.TIMEOUT:
              message += 'Location request timed out.';
              break;
            default:
              message += 'An unknown error occurred.';
              break;
          }

          alert(`📍 ${message}`);
          loadDefaultMap();
        },
        {
          timeout: 10000,
          enableHighAccuracy: true,
          maximumAge: 600000,
        }
      );
    } else {
      alert('❌ Geolocation is not supported by this browser');
      loadDefaultMap();
    }
  }

  _handleGeolocationError(error) {}

  _loadDefaultMap() {}

  _loadmap() {}

  _showForm(mapE) {}
}
