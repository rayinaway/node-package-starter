module.exports = {
	setupFilesAfterEnv: ['<rootDir>/test/setup.js'],
	restoreMocks: true,
	coverageDirectory: '<rootDir>/test-coverage',
	moduleNameMapper: {
		'/assets/': '<rootDir>/test/mocks/asset.js',
		'^~/(.*)$': '<rootDir>/$1',
		'^~~/(.*)$': '<rootDir>/src/$1'
	},
	testMatch: ['<rootDir>/src/**/*.test.js']
};
