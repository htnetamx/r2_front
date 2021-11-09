# Neta vnext frontend

This project contains the code for the new version of Neta e-commerce.

### Tools

- 🔥 [Next.js](https://nextjs.org) for SSR it improves loading speeds and SEO.
- 🎨 Chakra UI [chakraui.com](https://chakra-ui.com/) (w/ JIT mode)
- 💅 Styled-component for styles management [styled-components.com](https://styled-components.com/)
- 🎉 Type checking [TypeScript](https://www.typescriptlang.org)
- ✅ Strict Mode for TypeScript and React 17
- ✏️ Linter with [ESLint](https://eslint.org) (default NextJS, NextJS Core Web Vitals and Airbnb configuration)
- 🛠 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 🗂 VSCode configuration: Debug, Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript
- 🤖 SEO metadata, JSON-LD and Open Graph tags with Next SEO
- ⚙️ [Bundler Analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

Built-in feature from Next.js:

- ☕ Minify HTML & CSS
- 💨 Live reload
- ✅ Cache busting

### Philosophy and architecture

- Minimal code
- SEO-friendly
- Components / Containers / Core architecture see [link](https://betterprogramming.pub/how-you-should-structure-your-react-applications-e7dd32375a98)

### Requirements

- Node.js and npm

### Getting started

Run the following command on your local environment:

```
cd neta
npm install
```

Then, you can run locally in development mode with live reload:

```
npm start
```

Open http://localhost:3000 with your favorite browser to see your project.

```
.
├── README.md                # README file
├── next.config.js           # Next JS configuration
├── public                   # Public folder
│   └── assets
│       └── images           # Statics images
├── src
│   ├── components           # Reusable components
│   ├── constants            # Application constants
│   ├── containers           # Pages containers
│   ├── dataflows            # State / async calls / data management
│   ├── layouts              # Atomic layout components
│   ├── pages                # Next JS pages
│   ├── styles               # Styled-component style folder 
│   └── utils                # Utility folder
└── tsconfig.json            # TypeScript configuration
```

### Deploy to production

You can see the results locally in production mode with:

```
npm run build
npm run start
```

The generated HTML and CSS files are minified (built-in feature from Next js).
You can create an optimized production build with:

```
npm run build-prod
```
