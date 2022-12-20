module.exports = {
	testMatch: ['<rootDir>/src/**/*.test.js'],
	moduleNameMapper: {
		'^~/(.*)$': '<rootDir>/src/$1'
	},
	setupFilesAfterEnv: ['<rootDir>/src/test-setup.js'],
	restoreMocks: true,
	coverageDirectory: '<rootDir>/test-coverage'
};
