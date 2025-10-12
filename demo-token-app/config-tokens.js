import { DTCGTypesMap } from 'style-dictionary/utils';

export default {
  source: ['../tokens/global.json'],
  expand: { typesMap: DTCGTypesMap },
  hooks: {
    formats: {
      'css/variables-with-dark': ({ dictionary }) => {
        const rootTokens = {};
        const darkTokens = {};

        dictionary.allTokens.forEach((token) => {
          // Skip tokens without a value
          if (!token.$value) return;

          // Join the rest of the path to form the key
          const key = token.path.slice(1).join('-'); // e.g., 'radius', 'primary-foreground'

          // Assign the correct value
          if (token.path.includes('dark')) {
            darkTokens[key] = token.$value; // <-- $value is correct
          } else if (token.path.includes('global')) {
            rootTokens[key] = token.$value; // <-- $value is correct
          }
        });
        console.log(darkTokens);
        console.log(rootTokens);

        const toCssVars = (obj) =>
          Object.entries(obj)
            .map(([k, v]) => `  --${k}: ${v};`)
            .join('\n');

        return `:root {\n${toCssVars(rootTokens)}\n}\n\n.dark {\n${toCssVars(
          darkTokens
        )}\n}`;
      },
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'dist/css/',
      files: [
        {
          destination: 'variables.css',
          format: 'css/variables-with-dark',
          options: { outputReferences: false }, // resolves token references
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: 'dist/js/',
      files: [
        {
          destination: 'tokens.js',
          format: 'javascript/es6',
        },
      ],
    },
  },
};
