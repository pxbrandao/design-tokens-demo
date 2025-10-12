import StyleDictionary from 'style-dictionary';

// v5 usage: pass the path to the config JSON
const sd = new StyleDictionary('config-tokens.js');

sd.cleanAllPlatforms();
sd.buildAllPlatforms();

console.log('✅ Tokens built successfully!');
