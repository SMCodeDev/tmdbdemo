//jest.config.ts
export default {
    rootDir: 'src',
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    transform: {
        '^.+\\.tsx?$': ['ts-jest',
        {
            diagnostics: {
              ignoreCodes: [1343],
            },
            astTransformers: {
              before: [
                {
                  path: 'node_modules/ts-jest-mock-import-meta',
                  options: {
                    metaObjectReplacement: {
                      env: {
                        VITE_API_PATH: 'http://localhost:3001',
                        VITE_API_KEY: '5801fd2037edc24e90540a18fe526034'
                      },
                    },
                  },
                },
              ],
            },
          }
        ]
        
        // process `*.tsx` files with `ts-jest`
    },
    moduleNameMapper: {
        "^@/(.*)$": "<rootDir>/$1"
    },
    setupFilesAfterEnv: ['<rootDir>/test/setupTests.ts'],
    moduleFileExtensions: [
        // Place tsx and ts to beginning as suggestion from Jest team
        // https://jestjs.io/docs/configuration#modulefileextensions-arraystring
        'tsx',
        'ts',
        'web.js',
        'js',
        'web.ts',
        'web.tsx',
        'json',
        'web.jsx',
        'jsx',
        'node',
    ],
    modulePaths: ['<rootDir>/src'],
};