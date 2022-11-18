module.exports = {
	testMatch: ['<rootDir>/src/**/*.test.js'],
	moduleNameMapper: {
		'^~/(.*)$': '<rootDir>/src/$1'
	},
	setupFilesAfterEnv: ['jest-extended'],
	coverageDirectory: '<rootDir>/test-coverage'
};
