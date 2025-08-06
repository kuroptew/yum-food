import reactConfig from "@m-social/eslint-config-react";
import pluginRouter from "@tanstack/eslint-plugin-router";
import { defineConfig } from "eslint/config";

export default defineConfig(
	reactConfig({
		tsconfigRootDir: import.meta.dirname,
	}),
	pluginRouter.configs["flat/recommended"],
	{
		languageOptions: {
			parserOptions: {
				projectService: {
					allowDefaultProject: [
						"eslint.config.js",
						"lingui.config.js",
						"vite.config.js",
						"stylelint.config.js",
						"steiger.config.js",
					],
				},
			},
		},

		rules: {
			// #region eslint
			curly: "warn",
			"object-shorthand": "warn",
			// #endregion

			// #region typescript-eslint
			"@typescript-eslint/no-misused-promises": [
				"error",
				{
					checksVoidReturn: {
						attributes: false,
					},
				},
			],
			"@typescript-eslint/only-throw-error": [
				"error",
				{
					allow: [
						{
							from: "package",
							package: "@tanstack/router-core",
							name: ["Redirect", "NotFoundError"],
						},
					],
				},
			],
			"@typescript-eslint/consistent-type-imports": [
				"error",
				{
					prefer: "type-imports",
					fixStyle: "inline-type-imports",
				},
			],
			"@typescript-eslint/no-namespace": [
				"error",
				{
					allowDeclarations: true,
					allowDefinitionFiles: true,
				},
			],
			// #endregion

			// #region react
			"@eslint-react/no-unstable-context-value": "off",
			// TODO: setup https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/main/docs/rules/label-has-associated-control.md
			"jsx-a11y/label-has-associated-control": "off",
			// #endregion
		},
	}
);
