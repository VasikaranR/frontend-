const button=document.getElementById("button");
const output=document.getElementById("contents");
const person=document.getElementById("person");
const delay=document.getElementById("delay");

function alarm(person, delay) {
    return new Promise((resolve, reject) => {
      if (delay < 0) {
        throw new Error('Alarm delay must not be negative');
      }
      window.setTimeout(() => {
        resolve(`Wake up, ${person}!`);
      }, delay);
    });
  }
  
  button.addEventListener('click', () => {
    alarm(person.value, delay.value)
      .then(message => output.textContent = message)
      .catch(error => output.textContent = `Couldn't set alarm: ${error}`);
  });