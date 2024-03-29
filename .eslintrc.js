module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-plugin/eslint-recommended',
		'plugin:@typescript-eslint/eslint-plugin/recommended',
		'plugin:@typescript-eslint/eslint-plugin/recommended-requiring-type-checking',
		'plugin:eslint-plugin-import/errors',
		'plugin:eslint-plugin-import/warnings',
		'plugin:eslint-plugin-import/typescript',
		'plugin:eslint-plugin-promise/recommended',
		'eslint-config-prettier'
	],
	plugins: ['eslint-plugin-prettier'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.json'
	},
	settings: {
		'import/internal-regex': `^~/.*$`
	},
	env: {
		node: true,
		es6: true
	},
	rules: {
		'@typescript-eslint/explicit-function-return-type': 'error',
		'@typescript-eslint/no-namespace': 'off',
		'@typescript-eslint/no-unsafe-member-access': 'off',
		'@typescript-eslint/no-use-before-define': 'off',
		'import/newline-after-import': 'error',
		'import/no-unresolved': 'off',
		'import/order': [
			'error',
			{
				groups: [
					'builtin',
					'external',
					'internal',
					'parent',
					'sibling',
					'index'
				],
				alphabetize: {
					order: 'asc'
				},
				'newlines-between': 'always'
			}
		],
		'no-console': [
			'error',
			{
				allow: ['info', 'warn', 'error']
			}
		],
		'no-param-reassign': [
			'error',
			{
				props: true
			}
		],
		'no-var': 'error',
		'prefer-const': 'error',
		'prettier/prettier': 'error',
		'promise/catch-or-return': 'off',
		'quotes': ['error', 'single']
	}
};
