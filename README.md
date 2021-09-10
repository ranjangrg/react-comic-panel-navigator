# Comic Panel Navigator App for `React`

## Installation
```bash
npm install --save https://github.com/ranjangrg/react-comic-panel-navigator.git
```
> see TODO section at the end for using git and not npmjs

## Dependencies
- `react`, `redux`, `react-redux`, `react-icons`
- Fonts: Bangers (from `Googlefonts`)

## JSX or Vanilla JS

### Versions
VanillaJS
```jsx
import ComicPanelNavigatorApp from 'react-comic-panel-navigator/lib';
```
JSX
```jsx
import ComicPanelNavigatorApp from 'react-comic-panel-navigator/src';
```

### Compiling JSX to vanilla JS
If you need to compile JSX source code to vanilla JS, you can use babel and some presets.
```bash
npx babel --presets=@babel/preset-env,@babel/preset-react <path>/src --out-dir <path>/lib
```
In case of issues compiling or misrendering, use following `.babelrc` or `babel.config.js` settings:
- `babel.config.js`
```babel
module.exports = {
	presets: [
		"@babel/preset-env",
		["@babel/preset-react", {"runtime": "automatic"}]
	]
}
```
- `.babelrc`
```babel
{
    "presets": [
        "@babel/preset-env",
        ["@babel/preset-react", {"runtime": "automatic"}]
    ]
}
```

### Important note
I still have to learn more about proper packaging of `react` `Component` libraries, (plus) mitigating the compilation issues regarding version differences (JSX, ES?? etc). Therefore, ...

DON'T USE this package for PRODUCTION ... yet.

## TODO
- Publish as `npmjs` package
- Fix compilation issues that may arise for users not meddling with compilers like `babel`
- Update `ComicData` class object to retrieve/FETCH data instead of local variable (i.e. make it ACTUALLY useful)
- Include Pages View which shows thumbnails of pages.
- Add audio webworkers that can provide background ambience for readers
- Add transition effects (e.g. slow-turn to a significant scene/panel)
- more ...