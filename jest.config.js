module.exports = {
	testMatch: ['./src/**/*.test.js'],
	moduleNameMapper: {
		'^~/(.*)$': './src/$1'
	},
	setupFilesAfterEnv: ['jest-extended'],
	coverageDirectory: './test-coverage'
};
