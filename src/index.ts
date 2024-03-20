import { greet } from '@rshaker/smoketest-npm';

export function farewell(name: string): string {
    // Call function in dependency package
    return `${greet(name)} Adios, ${name}!`;
}
