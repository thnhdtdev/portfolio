import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import eslintConfigPrettier from "eslint-config-prettier";

/** @type {import('eslint').Linter.Config[]} */
export default [
	pluginJs.configs.recommended,
	pluginReact.configs.flat.recommended,
	eslintConfigPrettier,
	{
		files: ["src/**/*.{js,mjs,cjs,jsx}"],
		languageOptions: {
			globals: globals.browser
		},
		plugins: {
			react: pluginReact,
			"react-hooks": pluginReactHooks
		},

		rules: {
			"no-unused-vars": "warn",
			"no-undef": "error",
			"react/prop-types": "off",
			"react/react-in-jsx-scope": "off",
			"react-hooks/rules-of-hooks": "off",
			"react-hooks/exhaustive-deps": "off",
			"jsx-a11y/alt-text": "off",
			"jsx-a11y/img-redundant-alt": "off",
			"import/first": "off",
			"import/order": "off",
			"no-constant-binary-expression": "off",
			"no-case-declarations": "off",
			"react/display-name": "off",
			"empty-pattern": "off"
		}
	},
	{
		ignores: [
			"node_modules",
			"dist",
			"build",
			"tests",
			"*.config.js",
			"public/firebase-messaging-sw.js"
		]
	}
];
