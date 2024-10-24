module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: ['airbnb', 'airbnb-typescript', 'prettier'],
	plugins: ['react', 'prettier'],
	ignorePatterns: ['dist'],
	parser: '@typescript-eslint/parser',
	rules: {
		'react/jsx-no-useless-fragment': 'off',
		'import/prefer-default-export': 'off',
		'import/extensions': 'off',
		'import/order': 'off',
		'react/jsx-props-no-spreading': 'off',
		'import/no-extraneous-dependencies': 'off',
		'@typescript-eslint/no-var-requires': 'off',
		'react/display-name': 'off',
		'react/self-closing-comp': [
			'error',
			{
				component: true,
				html: true,
			},
		],
		'@typescript-eslint/no-explicit-any': 'warn',
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{
				prefer: 'type-imports',
			},
		],
		'@typescript-eslint/no-non-null-assertion': 'off',
		'react/react-in-jsx-scope': 'off',
		'import/no-absolute-path': 'off',
	},
	parserOptions: {
		project: './tsconfig.app.json',
	},
}
