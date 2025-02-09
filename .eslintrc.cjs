module.exports = {
	root: true,
	env: {
		node: true,
		es2022: true
	},
	extends: ['plugin:sonarjs/recommended'],
	plugins: ['prettier', 'sonarjs'],
	// ignorePatterns: ['*.ts'],
	parserOptions: {
		sourceType: 'module'
	},
	rules: {
		'prettier/prettier': [
			'warn',
			{
				endOfLine: 'auto'
			}
		],
		'no-prototype-builtins': 'off',
		'no-debugger': 'warn',
		'no-unused-vars': 'warn',
		'unused-imports/no-unused-imports': 'warn',
		'no-console':
			process.env.NODE_ENV !== 'development'
				? ['warn', { allow: ['error'] }]
				: 'off',
		camelcase: 'warn'
	}
};