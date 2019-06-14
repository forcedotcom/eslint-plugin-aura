describe('Recommended rules - ', () => {
    const { CLIEngine } = require('eslint');
    const path = require('path');
  
    const baseTestFiles = path.resolve(path.join(__dirname, './fake-files/'));
    const mockEslintAura = require('../lib/index');

    let cli;

    beforeEach(() => {
        jest.mock('@salesforce/eslint-plugin-aura', () => mockEslintAura, { virtual: true });
        cli = new CLIEngine(Object.assign(
            {
                useEslintrc: false,
                ignore: false
            },
            mockEslintAura.configs.recommended,
            {
                globals: Object.keys(mockEslintAura.configs.recommended.globals)
            }
        ));
    });

    describe('around Aura', () => {
        it('with valid code', () => {
            const eslintReport = cli.executeOnFiles([
                `${baseTestFiles}/aura-method-recognized.js`
            ]);
    
            expect(eslintReport.results[0].messages.find((msg) => msg.message === 'Invalid Aura API')).toBeUndefined();
        });

        it('with invalid code', () => {
            const eslintReport = cli.executeOnFiles([
                `${baseTestFiles}/aura-method-not-recognized.js`
            ]);
    
            expect(eslintReport.results[0].messages.find((msg) => msg.message === 'Invalid Aura API')).not.toBeNull();
        });
    });
  });
  