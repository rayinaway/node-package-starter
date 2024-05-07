module.exports = {
	testMatch: ['<rootDir>/src/**/*.test.js'],
	moduleNameMapper: {
		'/assets/': '<rootDir>/test/mocks/asset.js',
		'^~/(.*)$': '<rootDir>/$1',
		'^~~/(.*)$': '<rootDir>/src/$1'
	},
	setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
	restoreMocks: true,
	coverageDirectory: '<rootDir>/test-coverage'
};
