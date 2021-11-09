module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  extends: [
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "plugin:jsx-a11y/recommended", // Uses the recommended rules from jsx-a11y for accessibility
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  plugins: ["@typescript-eslint", "react", "jsx-a11y", "prettier"],
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  rules: {
    "react/jsx-uses-react": "off",
    "react/react-in-jsx-scope": "off",
    "no-tabs": ["error", { allowIndentationTabs: true }],
    quotes: [1, "double"],
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        selector: "interface",
        format: ["PascalCase"],
        prefix: ["I"],
      },
    ],
    "prettier/prettier": [
      "warn",
      {
        endOfLine: "auto",
      },
    ],
    "require-jsdoc": [
      "warn",
      {
        require: {
          FunctionDeclaration: true,
          MethodDefinition: true,
          ClassDeclaration: true,
          ArrowFunctionExpression: true,
          FunctionExpression: true,
        },
      },
    ],
    "valid-jsdoc": "warn",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/ban-types": "warn",
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  overrides: [
    {
      files: ["**/*.tsx"],
      rules: {
        "react/prop-types": "off",
      },
    },
  ],
};
