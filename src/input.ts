import readline from "readline";

export function input(prompt: string): Promise<string> {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout,
        });

        rl.question(prompt, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}