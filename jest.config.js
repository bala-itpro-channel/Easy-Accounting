module.exports = {
    verbose: true,
    collectCoverage: false,
    preset: 'jest-preset-angular',
    setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
    globals: {
      '__TRANSFORM_HTML__': true
    },
    testMatch: [
      '**/+(*.)+(spec).+(ts|js)?(x)'
    ],
    moduleFileExtensions: [ 'ts', 'js', 'html', 'json' ],
    // moduleNameMapper: {
    //   '@oneview-common/(.*)': '<rootDir>/@oneview-common/$1'
    // },
    transformIgnorePatterns: [
      'node_modules/(?!@ngrx)'
    ],
    reporters: [
      'default',
      ['./node_modules/jest-html-reporter', {
        pageTitle: 'Unit Test Report',
        outputPath: './reports/unit-test-report/index.html',
        includeFailureMsg: true
      }]
    ],
    coverageDirectory: './reports/coverage',
    collectCoverageFrom: [
      'src/app/**/*.(component|service|pipe|directive).ts',
      '!**/analytics/**/*'
    ],
    coverageThreshold: {
      'global': {
        'branches': 80,
        'functions': 80,
        'lines': 80,
        'statements': 80
      }
    }
  };
  