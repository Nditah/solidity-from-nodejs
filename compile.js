import solc from 'solc'
import fs from 'fs'

const inputFilePath = process.argv[2];
const outputPath = process.argv[3];

// note - using the synchronous version of the file system functions for simplicity and because the async version isn't really needed in this case
const contractSolidity = fs.readFileSync(inputFilePath , 'utf-8');
if (!contractSolidity)
    return console.error('unable to read file: ' + inputFilePath );

const output = solc.compile(contractSolidity, 1);
for (let contractName in output.contracts) {
    const abi = output.contracts[contractName].interface;
    const code = output.contracts[contractName].bytecode;
    fs.writeFileSync(outputPath + '/' + contractName + '.abi', abi, 'utf-8');
    fs.writeFileSync(outputPath + '/' + contractName + '.code', code, 'utf-8');
}