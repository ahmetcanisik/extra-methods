import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

export function input(prompt: string): Promise<string> {
  return new Promise((resolve) =>
    rl.question(prompt, (answer) => resolve(answer))
  );
}
