# A React + TypeScript + Vite + Mantine UI Template

Build requirements:

- node.js 18.x or newer

Runtime requirements:

- OS
  - Windows 7 or newer
  - macOS 11 or newer
- browser
  - Microsoft Edge 109 or newer
  - Apple Safari 16 or newer

Build it:

  pnpm i
  pnpm dev

## Batteries included

This template provides a minimal setup to get React + Mantine UI working in Vite with HMR and some ESLint rules.

Create it by following steps:

    pnpm create vite vite-react-mantine-ui --template react-ts

    pnpm add @mantine/core @mantine/hooks @mantine/form @mantine/dates @mantine/notifications
    pnpm add -D postcss postcss-preset-mantine postcss-simple-vars

    # update src/App.tsx src/App.css src/index.css
    # delete public/vite.svg src/assets/react.svg

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react';

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
});
```
