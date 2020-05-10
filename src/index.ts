import ts from 'typescript';
import { cwd } from 'process';

import { CONFIG_FILE_NAME } from './constants';
/*
Options to add:
- Directory to read
- Config File name
*/

// Retrieve Config File
ts.findConfigFile(cwd(), ts.sys.fileExists);

const config = ts.readConfigFile(CONFIG_FILE_NAME, ts.sys.readFile);

if (config['error']) {
  throw new Error(
    `Invalid tsconfig.json: ${config['error'].messageText} ${config['error'].file?.fileName}:${config['error'].start}`
  );
}

// function compile(fileNames: string[], options: ts.CompilerOptions): void {
//   let program = ts.createProgram(fileNames, options);
//   let emitResult = program.emit();

//   let allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);

//   allDiagnostics.forEach((diagnostic) => {
//     if (diagnostic.file) {
//       let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start!);
//       let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
//       console.log(`${diagnostic.file.fileName} (${line + 1},${character + 1}): ${message}`);
//     } else {
//       console.log(ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n'));
//     }
//   });

//   let exitCode = emitResult.emitSkipped ? 1 : 0;
//   console.log(`Process exiting with code '${exitCode}'.`);
//   process.exit(exitCode);
// }

// compile(process.argv.slice(2), {
//   noEmitOnError: true,
//   noImplicitAny: true,
//   target: ts.ScriptTarget.ES5,
//   module: ts.ModuleKind.CommonJS,
// });
