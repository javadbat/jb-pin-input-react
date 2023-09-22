# JBPinInput React component
this component is React.js wrapper for [jb-pin-input](https://www.npmjs.com/package/jb-pin-input) web component with these benefits:
- smart paste algorithm
- mobile freindly
- light and fast
- support typescript
- accept persian & arabic number char

sample in codepen:<https://codepen.io/javadbat/pen/zYPEqNJ>
sample in github:<https://javadbat.github.io/jb-pin-input>
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

## autofocus

if you want pin input get focus as rendered in app just add autofocus props
```jsx
<JBPinInput autofocus></JBPinInput>
```

### set custome style

in some cases in your project you need to change defualt style of web-component for example you need zero margin or different border-radius and etc.  
if you want to set a custom style to this web-component all you need is to set css variable in parent scope of web-component
| css variable name                          | description                                                                                   |
| -------------                              | -------------                                                                                 |
| --jb-pin-input-inputs-wrapper-width        | width of inputs wrapper,default is `100%`                                                     |
| --jb-pin-input-bottom-line-color           | color of bottom line of each number.  default value is `#9DA6B6`                              |
| --jb-pin-input-bottom-line-border-radius   | border radius of bottom line.  default value is `16px`                                        |
| --jb-pin-input-bottom-line-height          | height of bottom line of each number. default value is `4px`                                  |
| --jb-pin-input-bottom-line-display         | display of bottom line of each number. default value is `block`                               |
| --jb-pin-input-bottom-line-color-active    | color of bottom line of each number when user focus on it. default value is `#1565D8`         |
| --jb-pin-input-wrapper-border-width        | border width of each number input wrapper. default value is `0`                               |
| --jb-pin-input-wrapper-border-color        | border color of each number input wrapper. default value is `black`                           |
| --jb-pin-input-wrapper-border-style        | border style of  each number input wrapper. default value is `solid`                          |
| --jb-pin-input-wrapper-border-color-active | border color of each number input wrapper  when user focus on it. default value is `#1565D8`  |
| --jb-pin-input-pin-color                   | color of inputed text.default value is #333                                                   |
| --jb-pin-input-pin-height                  | height of  each number input. default value is `40px`                                         |
| --jb-pin-input-pin-font-size               | font size of  each number input. default value is `24`                                        |   
| --jb-pin-input-pin-font-weight             | font weight of  each number input. default value is `900`                                     |   
| --jb-pin-input-wrapper-box-shadow          | border width of each number input wrapper. default value is `none`                            |
| --jb-pin-input-error-message-margin        | margin of error message. default value is `0`                                                 |
| --jb-pin-input-error-message-color         | color of error message. default value is `#dc3545`                                            |