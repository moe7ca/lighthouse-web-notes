const timer = function(arr) {

  if (!arr.length) return;

  for (let i of arr) {
    const timeInSeconds = Number(i);

    if (isNaN(timeInSeconds)) continue;
    if (timeInSeconds < 0) continue;

    setTimeout(() => {
      console.log("Beep!");
      process.stdout.write('\x07');
    }, timeInSeconds * 1000);
  }

};

const arr = process.argv.slice(2);
timer(arr);
