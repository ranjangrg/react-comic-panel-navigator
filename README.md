# Comic Panel Navigator App for `React`

## Installation
```bash
npm install --save https://github.com/ranjangrg/react-comic-panel-navigator.git
```
> see TODO section at the end for reasons on using git and not npmjs

## Usage

### Import
Within project, <br />
for VanillaJS:
```jsx
import ComicPanelNavigatorApp from 'react-comic-panel-navigator/lib';
```
for JSX:
```jsx
import ComicPanelNavigatorApp from 'react-comic-panel-navigator/src';
```

### `ComicPanelNavigatorApp` Component props
By default (no props), the app has following default settings:
```jsx
const defaultAppSettings = {
	width: 370, height: 550, menuVisibilityDuration: 1500,
	// ref: https://uxplanet.org/8-tips-for-dark-theme-design-8dfc2f8f7ab6
	backgroundColor: "#121212"
};
```
Typical usage:
```jsx
<ComicPanelNavigatorApp height="550" width="500" />
```

- `width`, `height`: Dimensions of the app (in px). Default values, height: `550`, width: `370` (in pixels)
- `menuVisibilityDuration`: Set (in milliseconds) how long the menu should linger, after mouse-pointer hovers out of the app. Default value: `1500` i.e. 1.5 seconds
- `backgroundColor`: Background colour to use for the app's background. Default colour: `#121212` 
> Reference: https://uxplanet.org/8-tips-for-dark-theme-design-8dfc2f8f7ab6

## Dependencies
- `react`, `redux`, `react-redux`, `react-icons`
- Fonts: Bangers (from `Googlefonts`: `Bangers`

## Manually transpiling JSX to vanilla JS
If you need to manually transpile JSX source code to vanilla JS, you can use babel along with some babel presets.
```bash
npx babel --presets=@babel/preset-env,@babel/preset-react <path>/src --out-dir <path>/lib
```
In case of issues while transpiling or rendering, using the following `.babelrc` or `babel.config.js` settings might help.
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

## Important note
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