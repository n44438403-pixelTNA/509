const fs = require('fs');

let typesContent = fs.readFileSync('types.ts', 'utf8');

// Insert auth configuration toggles right after appMode
typesContent = typesContent.replace(
    '  appMode?: {',
    `  authConfig?: {
    isGoogleAuthEnabled?: boolean;
    isEmailAuthEnabled?: boolean;
  };
  appMode?: {`
);

fs.writeFileSync('types.ts', typesContent);
console.log("Updated types.ts with authConfig.");
