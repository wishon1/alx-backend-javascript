/**
 *  program named 1-stdin.js that will be executed through command line:
 *  it should display the message Welcome to Holberton School, what is your
 * name? (followed by a new line)
 * The user should be able to input their name on a new line.  The program
 * should display Your name is: INPUT When the user ends the program, it
 * should display This important software is now closing (followed by a new line)
 *
 * Return:
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

if (process.stdin.isTTY) {
  process.stdin.on('data', (input) => {
    const name = input.toString();
    process.stdout.write(`Your name is: ${name}`);
    process.exit();
  });
} else {
  process.stdin.on('data', (input) => {
    process.stdout.write(`Your name is: ${input.toString()}`);
    process.exit();
  });
  process.on('exit', () => {
    process.stdout.write('This important software is now closing\n');
  });
}
