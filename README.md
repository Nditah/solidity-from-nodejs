Here are the steps -

1.    install the latest version of node.js
    create a folder for the project

2.    add solc package to your package.json file, or use the following package file -
 { "name": "eth_compiler", "version": "0.0.1", "engines": { "node": ">=7.0.0", "npm": "^3.0.0" }, "dependencies": { "solc": "^0.4.7" } }

3. run npm install in the folder
    
4. add a small js script to the folder (compile.js) - it will receive the contract file name and output the abi/code files you need.

5. once you have that file, you can simply execute the following command in the new folder - 

> $ node compile [inputFilePath] [outputPath]

and it should generate the compiled files.

src: https://ethereum.stackexchange.com/questions/11081/install-solc-compiler-on-windows-8?newreg=71e434998dde4b42a52ea14e74071de1
