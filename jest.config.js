require('ts-node/register');

module.exports = {
  moduleFileExtensions: [
    'js',
    'json',
    'ts',
  ],
  rootDir: 'lib',
  testRegex: '/lib/.*\\.spec\\.(ts|js)$',
  transform: {
    '^.+\\.(t|j)s$': ['ts-jest', { tsconfig: 'tsconfig.json' }],
  },
  preset: 'ts-jest',
}
