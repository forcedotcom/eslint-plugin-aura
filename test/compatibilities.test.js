describe('Compatibilities rules - ', () => {
    const { CLIEngine } = require('eslint');
    const path = require('path');
  
    const baseTestFiles = path.resolve(path.join(__dirname, './fake-files/'));
    const mockEslintAura = require('../lib/index');

    let cli;

    beforeEach(() => {
        jest.mock('@salesforce/eslint-plugin-aura', () => mockEslintAura, { virtual: true });
        cli = new CLIEngine({
            baseConfig: mockEslintAura.configs.recommended,
            useEslintrc: false,
            ignore: false
        });
    });

    describe('around IE11', () => {
        it('with valid code', () => {
            const eslintReport = cli.executeOnFiles([
                `${baseTestFiles}/ie11-compatible.js`
            ]);
    
            expect(eslintReport.results[0].errorCount).toEqual(0);
        });

        it('with invalid code', () => {
            const eslintReport = cli.executeOnFiles([
                `${baseTestFiles}/ie11-not-compatible.js`
            ]);
    
            expect(eslintReport.results[0].errorCount).toEqual(1);
            expect(eslintReport.results[0].messages[0].message).toEqual('Object.values() is not supported in IE 11');
        });
    });

    describe('around Safari12', () => {
        it('with valid code', () => {
            const eslintReport = cli.executeOnFiles([
                `${baseTestFiles}/safari12-compatible.js`
            ]);
    
            expect(eslintReport.results[0].errorCount).toEqual(0);
        });

        it('with invalid code', () => {
            const eslintReport = cli.executeOnFiles([
                `${baseTestFiles}/safari12-not-compatible.js`
            ]);
    
            expect(eslintReport.results[0].errorCount).toEqual(1);
            expect(eslintReport.results[0].messages[0].message).toEqual('ScreenOrientation.lock() is not supported in Safari 12.1, IE 11, Edge 18');
        });
    });
  });
  