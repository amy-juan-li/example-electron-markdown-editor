# Electron Markdown Editor - example
**Desktop app**
<img width="1307" alt="Screenshot 2022-10-08 at 15 22 27" src="https://user-images.githubusercontent.com/93111441/194698408-2773823f-49a7-47d2-a9c7-75e303835486.png">
**App Screenshot**
<img width="1438" alt="Screenshot 2022-10-08 at 09 12 14" src="https://user-images.githubusercontent.com/93111441/194680529-edb521a4-2f6f-4a91-a450-b2ca26f14ebb.gif"> 
**Codebase**
<img width="1440" alt="Screenshot 2022-10-08 at 09 03 33" src="https://user-images.githubusercontent.com/93111441/194679834-c6259319-3fc8-47da-87f3-63c61210716d.png">

## Tech Stack  
- [**Electron**](https://www.electronjs.org/): A framework for building cross-platform desktop apps using HTML, JS, and CSS
- [**Vite**](https://vitejs.dev/): A fast build tool
- [**React**](https://reactjs.org/): A library for building UI
- [**TypeScript**](https://www.typescriptlang.org/): A typed JavaScript
- [**CodeMirror 6**](https://codemirror.net/): An extensible code editor for the web
- [**Remark**](https://github.com/remarkjs/remark): An extensible Markdown processor
- [**React-Markdown**](https://github.com/remarkjs/react-markdown): React component to render markdown.
- [**react-syntax-highlighter**](https://github.com/react-syntax-highlighter/react-syntax-highlighter): Syntax highlighting component for react with `prismjs` or `highlightjs` using inline styles 

## Get started

```bash
npm i 
npm run watch
```

## How it works
### Project Structure
The structure of this template is very similar to the structure of a monorepo.  
**packages/main**: Electron main script.  
**packages/preload**: Used in BrowserWindow.webPreferences.preload.   
**packages/renderer**: Electron web page. 

### Build web resources
The `main` and `preload` packages are built in [library mode](https://vitejs.dev/guide/build.html#library-mode) as it is
simple javascript.
The `renderer` package builds as a regular web app.

### Compile App
The next step is to package a ready to distribute Electron app for macOS, Windows and Linux with "auto update" support
out of the box.

- Using the npm script `compile`: This script is configured to compile the application as quickly as possible. It is not
  ready for distribution, it is compiled only for the current platform and is used for debugging.
- Using GitHub Actions: The application is compiled for any platform and ready-to-distribute files are automatically
  added as a draft to the GitHub releases page.
  
```bash
npm run compile
# for mac user:
open dist/mac/your-app-name.app
```

### Modes and Environment Variables
All environment variables are set as part of the `import.meta`, so you can access them vie the following
way: `import.meta.env`.

If you are using TypeScript and want to get code completion you must add all the environment variables to
the [`ImportMetaEnv` in `types/env.d.ts`](types/env.d.ts).

The mode option is used to specify the value of `import.meta.env.MODE` and the corresponding environment variables files
that need to be loaded.

By default, there are two modes:

- `production` is used by default
- `development` is used by `npm run watch` script

When running the build script, the environment variables are loaded from the following files in your project root:

```
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified env mode
.env.[mode].local   # only loaded in specified env mode, ignored by git
```

To prevent accidentally leaking env variables to the client, only variables prefixed with `VITE_` are exposed to your
Vite-processed code.

For example let's take the following `.env` file:

```
DB_PASSWORD=foobar
VITE_SOME_KEY=123
```

Only `VITE_SOME_KEY` will be exposed as `import.meta.env.VITE_SOME_KEY` to your client source code, but `DB_PASSWORD`
will not.


## Relevant articles
- (Learn to Build NextJS Applications)(https://medium.com/r/?url=https%3A%2F%2Famy-juan-li.medium.com%2Flist%2Fdb243e7bdf05)
- [Build a Markdown Editor Using Electron, React, TypeScript, CodeMirror 6, and Remark](https://medium.com/r/?url=https%3A%2F%2Famy-juan-li.medium.com%2Fbuild-a-markdown-editor-using-electron-reactjs-vite-codemirror-and-remark-e551d91b6233)

## About me
- [Portfolio Website](https://www.amyjuanli.com/)
- [Medium Blog](https://amy-juan-li.medium.com/)
- [eBook: Become a software developer without computer science degree](https://amyjuanli.gumroad.com/l/wplun)
- [SkillShare Class: Empower your life by becoming a software developer without a computer science degree.](https://www.skillshare.com/classes/Empower-your-life-Become-a-software-developer-without-a-CS-degree/1243883176)
