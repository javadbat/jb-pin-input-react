# JBPinInput React component
this component is React.js wrapper for [jb-pin-input](https://www.npmjs.com/package/jb-pin-input) web component

## install

run following command to install it with npm
```cmd
npm i jb-pin-input-react
```

## usage

just import the package and use it like other react component

```jsx
import {JBPinInput} from 'jb-pin-input-react'

<JBPinInput></JBPinInput>
```
## char length

if you want to change the pin length to 5digit or 10 digit or anything elese you just have to provide ti to charLength Prop

```jsx
<JBPinInput charLength={5}></JBPinInput>
```