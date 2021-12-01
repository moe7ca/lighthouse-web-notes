const circleParts = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   ', '\r/   ', '\r-   ', '\r\\   ', '\r|   '];
let delay = 100;

for (const part of circleParts) {
  setTimeout(() => process.stdout.write(part), delay);
  delay += 200;
}
