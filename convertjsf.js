/*
    NodeJS program that loads a javascript source file, converts it to jsfuck and saves it as a scripts.js file.
    Thanks to the creator of https://github.com/fasttime/JScrewIt for the converter from "normal" javascript to jsfuck.
*/

import { encode } from "jscrewit";
import { readFileSync, writeFileSync } from "fs";
const jsfoptions = { features: "BROWSER" };
const options = {
    sourcefile: "source/sourcecode.js",
    output: "scripts/scripts.js"
}

function getSourceCode() {
    try {
        const sourcecode = readFileSync(options.sourcefile, "utf-8")
        return sourcecode;
    } catch (err) { console.error(err); }
}

function convertJSF(sourcecode) {
    try {
        const outputFile = encode(sourcecode, jsfoptions);
        writeFileSync(options.output, outputFile, { encoding: 'utf-8', flag: 'w+'})
    } catch (err) { console.error(err); }
}

const source = getSourceCode();
convertJSF(source);
