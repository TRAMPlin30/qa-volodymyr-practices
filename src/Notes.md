
- a package for working with keyboard input / a keyboard-input package.
npm install readline-sync 

— It’s like a guide for TypeScript: what functions readline-sync has, what the inputs are, and what the outputs are.
npm install --save-dev @types/readline-sync @types/readline-sync 



- run TS files
1. npm install --save-dev ts-node typescript
2. npx tsc --init  -create tsconfig.json file
3. input following code into tsconfig.json:
 },
  "include": ["src"]
}
4. npx ts-node app.ts


Для того чтоб ранить в папке где JScommon
✅ Что нужно сделать, чтобы всё работало:
1. В tsconfig.json поменяй module на ESNext:
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ESNext",
    "moduleResolution": "node",
    "verbatimModuleSyntax": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "strict": true,
    "outDir": "./dist"
  }
}
