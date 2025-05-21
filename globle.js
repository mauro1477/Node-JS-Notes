import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = dirname(__filename);

console.log(__filename); // Output the file path
console.log(__dirname); // Output the directory path

for (let key in global) {
    console.log(key);
}