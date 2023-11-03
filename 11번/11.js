const today = new Date();
const time = document.write(today.toLocaleTimeString());

const hello = (time) => {
  if(time < 10 && time > 6) {
    console.log("Good morning!")
  } else if(time > 10 && time < 18) {
    console.log("Good afternoon!")
  } else {
    console.log("Good evening!")
  }
}

hello();