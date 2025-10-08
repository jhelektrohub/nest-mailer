require('ts-node/register');

module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  rootDir: 'lib',
  testRegex: '/lib/.*\\.spec\\.(ts|js)$',
  globals: {
    'ts-jest': {
      tsconfig: 'tsconfig.json',
    },
  },
  preset: 'ts-jest',
}
