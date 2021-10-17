function printTime() {
  let d = new Date();
  let time = d.toLocaleTimeString();
  console.log(time);
}

setInterval(printTime, [1000]);

// function startAfterFiveSeconds() {
//   setInterval(printTime, [1000]);
// }

// setTimeout(startAfterFiveSeconds, [5000]);
