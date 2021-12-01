const spinnerMovement = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let delay = 100;

for (const movement of spinnerMovement) {
  setTimeout(() => process.stdout.write(movement), delay);
  delay += 200;
}
