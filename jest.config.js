module.exports = {
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    'lib/**/*.js'
  ],
  coverageDirectory: 'coverage',
  roots: [
    'test/'
  ],
  testEnvironment: 'node'
}
