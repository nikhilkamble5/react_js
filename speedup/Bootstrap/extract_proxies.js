const fs = require('fs');

// Define the input and output file paths
const inputFile = 'megaproxylist.csv';
const outputFile = 'proxies.txt';

// Read the input file
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading the file: ${err}`);
        return;
    }

    // Split the file content into lines
    const lines = data.split('\n');
    const proxies = lines.map(line => line.split(';')[0]).filter(Boolean);

    // Write the proxies to the output file
    fs.writeFile(outputFile, proxies.join('\n'), (err) => {
        if (err) {
            console.error(`Error writing to the file: ${err}`);
            return;
        }
        console.log(`Proxies have been extracted to ${outputFile}`);
    });
});
