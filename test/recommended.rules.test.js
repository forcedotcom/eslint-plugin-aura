describe('Recommended rules - ', () => {
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

    describe('around recommended rules (basics)', () => {
        it('with valid code', () => {
            const eslintReport = cli.executeOnFiles([
                `${baseTestFiles}/recommended.js`
            ]);
    
            expect(eslintReport.results[0].errorCount).toEqual(0);
        });

        it('with invalid code', () => {
            const eslintReport = cli.executeOnFiles([
                `${baseTestFiles}/unrecommended.js`
            ]);
    
            const [errorReport] = eslintReport.results;
            expect(errorReport.errorCount).toEqual(9);
            expect(errorReport.messages.map((msg) => msg.ruleId)).toEqual([
                'consistent-return',
                'no-unused-vars',
                'space-before-blocks',
                'curly',
                'no-magic-numbers',
                'block-spacing',
                'brace-style',
                'no-magic-numbers',
                'eol-last'
            ]);
        });
    });
  });
  