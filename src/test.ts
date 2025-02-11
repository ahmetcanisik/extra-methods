#!/usr/bin/env node
import { input } from "./input";

async function main() {
    const name = await input("What's your name? ");
    console.log(`Hello, ${name}`);
}

if (require.main === module) (async() => await main())();