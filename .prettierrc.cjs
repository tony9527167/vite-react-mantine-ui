// eslint-disable-next-line no-undef
module.exports = {
  //
  // The [gts](https://github.com/google/gts) also use following as default.
  // https://github.com/google/gts/blob/main/.prettierrc.json
  //

  // Print spaces between brackets in object literals.
  bracketSpacing: true,

  // Use single quotes instead of double quotes.
  singleQuote: true,

  // Print trailing commas wherever possible in multi-line comma-separated syntactic structures. (A single-line array, for example, never gets trailing commas.)
  trailingComma: 'all',

  // Include parentheses around a sole arrow function parameter.
  arrowParens: 'avoid',

  //
  // Other optinos.
  //

  printWidth: 120,

  tabWidth: 2,
  useTabs: false,

  endOfLine: 'lf',

  insertPragma: false,
  requirePragma: false,

  // Change when properties in objects are quoted.
  quoteProps: 'as-needed',

  // Use single quotes instead of double quotes in JSX.
  jsxSingleQuote: false,

  // Enforce single attribute per line in HTML, Vue, and JSX.
  singleAttributePerLine: false,

  // Put the > of a multi-line HTML (HTML, JSX, Vue, Angular) element at the end of the last line instead of being alone on the next line (does not apply to self closing elements).
  bracketSameLine: false,

  // Print semicolons at the ends of statements.
  semi: true,

  // Configure how Prettier wraps object literals when they could fit on one line or span multiple lines.
  objectWrap: 'preserve',

  // Specify the global whitespace sensitivity for HTML, Vue, Angular, and Handlebars. See whitespace-sensitive formatting for more info.
  htmlWhitespaceSensitivity: 'css',

  // Control whether Prettier formats quoted code embedded in the file.
  embeddedLanguageFormatting: 'auto',

  // By default, Prettier will not change wrapping in markdown text since some services use a linebreak-sensitive renderer, e.g. GitHub comments and BitBucket. To have Prettier wrap prose to the print width, change this option to "always". If you want Prettier to force all prose blocks to be on a single line and rely on editor/viewer soft wrapping instead, you can use "never".
  proseWrap: 'preserve',

  // "start" - When binary expressions wrap lines, print operators at the start of new lines.
  // "end" - Default behavior; when binary expressions wrap lines, print operators at the end of previous lines.
  experimentalOperatorPosition: 'start',

  // Try prettier's new ternary formatting before it becomes the default behavior.
  experimentalTernaries: false,
};
