const barOrientation = ['|   ', '/   ', '-   ', '\\   '];

let delay = 100;

for (let i = 0; i < 3; i++) {
  for (const bar of barOrientation) {
    setTimeout(() => {
      process.stdout.write(`\r${bar}`);
    }, delay);
    delay += 200;
  }
}

setTimeout(() => {
  process.stdout.write('\n');
}, delay);
