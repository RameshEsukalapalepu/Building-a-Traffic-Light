const stopLight = document.querySelector('.stop-light');
const readyLight = document.querySelector('.ready-light');
const goLight = document.querySelector('.go-light');

const stopButton = document.getElementById('stop-button');
const readyButton = document.getElementById('ready-button');
const goButton = document.getElementById('go-button');

function clearLights() {
  stopLight.style.backgroundColor = 'gray';
  readyLight.style.backgroundColor = 'gray';
  goLight.style.backgroundColor = 'gray';

  stopButton.style.backgroundColor = '#ccc';
  readyButton.style.backgroundColor = '#ccc';
  goButton.style.backgroundColor = '#ccc';
}

stopButton.addEventListener('click', () => {
  clearLights();
  stopLight.style.backgroundColor = 'red';
  stopButton.style.backgroundColor = 'red';
});

readyButton.addEventListener('click', () => {
  clearLights();
  readyLight.style.backgroundColor = 'yellow';
  readyButton.style.backgroundColor = 'yellow';
});

goButton.addEventListener('click', () => {
  clearLights();
  goLight.style.backgroundColor = 'green';
  goButton.style.backgroundColor = 'green';
});