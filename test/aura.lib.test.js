describe('Aura lib rule - ', () => {
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

  describe('around Aura service', () => {
      it('with valid code', () => {
          const eslintReport = cli.executeOnFiles([
              `${baseTestFiles}/aura/fakeService.js`
          ]);

          expect(eslintReport.results[0].messages).toEqual([]);
      });

      it('with an aura controller', () => {
        const eslintReport = cli.executeOnFiles([
            `${baseTestFiles}/aura/myComponentController.js`
        ]);

        expect(eslintReport.results[0].messages.find((msg) => msg.message === 'The Aura service should be named "fakeInvalidService"')).not.toBeDefined();
    });

      it('with invalid code', () => {
          const eslintReport = cli.executeOnFiles([
              `${baseTestFiles}/aura/fakeInvalidService.js`
          ]);

          expect(eslintReport.results[0].messages.find((msg) => msg.message === 'The Aura service should be named "fakeInvalidService"')).toBeDefined();
      });
  });
});
