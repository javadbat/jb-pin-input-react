import React, { useRef, useEffect, useImperativeHandle, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import 'jb-pin-input';
import { useEvent } from '../../../common/hooks/use-event';
// eslint-disable-next-line no-duplicate-imports
import { JBPinInputWebComponent } from 'jb-pin-input';

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace JSX {
      interface IntrinsicElements {
        'jb-pin-input': JBPinInputType;
      }
      interface JBPinInputType extends React.DetailedHTMLProps<React.HTMLAttributes<JBPinInputWebComponent>, JBPinInputWebComponent> {
        class?:string,
        label?: string,
        name?:string,
        message?:string,
        // ref:React.RefObject<JBDateInputWebComponent>,
      }
    }
}
// eslint-disable-next-line react/display-name
export const JBPinInput = React.forwardRef((props:JBPinInputProps, ref) => {
    /**
     * @type {React.MutableRefObject<HTMLInputElement>}
     */
    const element = useRef<JBPinInputWebComponent>(null);
    const [refChangeCount, refChangeCountSetter] = useState(0);
    useImperativeHandle(
        ref,
        () => (element ? element.current : {}),
        [element],
    );
    useEffect(() => {
        refChangeCountSetter(refChangeCount + 1);
    }, [element.current]);
    function onChange(e) {
        if (props.onChange) {
            props.onChange(e);
        }
    }
    const onKeydown = useCallback((e:JBPinInputEventType<KeyboardEvent>)=>{
        if (typeof props.onKeydown == "function") {
            props.onKeydown(e);
        }
    },[props.onKeydown]);
    const onKeyup = useCallback((e:JBPinInputEventType<KeyboardEvent>)=>{
        if (typeof props.onKeyup == "function") {
            props.onKeyup(e);
        }
    },[props.onKeyup]);
    
    const onEnter = useCallback((e:JBPinInputEventType<CustomEvent>)=>{
        if (props.onEnter) {
            props.onEnter(e);
        }
    },[props.onEnter]);
    const onFocus = useCallback((e:JBPinInputEventType<FocusEvent>)=>{
        if (props.onFocus && e instanceof FocusEvent) {
            props.onFocus(e);
        }
    },[props.onFocus]);
    const onBlur = useCallback((e:JBPinInputEventType<FocusEvent>)=>{
        if (props.onBlur && e instanceof FocusEvent) {
            props.onBlur(e);
        }
    },[props.onBlur]);
    const onInput = useCallback((e:JBPinInputEventType<InputEvent>)=>{
        if (typeof props.onInput == 'function' && e instanceof InputEvent) {
            props.onInput(e);
        }
    },[props.onInput]);
    const onBeforeInput = useCallback((e:JBPinInputEventType<InputEvent>)=>{
        if (typeof props.onBeforeinput == 'function' && e instanceof InputEvent) {
            props.onBeforeinput(e);
        }
    },[props.onBeforeinput]);
    useEffect(() => {
        let value = props.value;
        if (props.value == null || props.value === undefined) {
            value = '';
        }
        if(element.current){
            element.current.value = value?.toString() || "";
        }
    }, [props.value]);
    // useEffect(() => {
    //     element.current.validationList = props.validationList || [];
    // }, [props.validationList]);
    useEffect(() => {
        if (typeof props.disabled == "boolean") {
            element.current?.setAttribute('disabled', `${props.disabled}`);
        }
    }, [props.disabled]);
    useEffect(() => {
        if (typeof props.charLength == "number" && element.current) {
            element.current.charLength = props.charLength;
        }
    }, [props.charLength]);
    useEffect(() => {
        if(props.inputmode){
            element.current?.setAttribute('inputmode',props.inputmode);
        }else{
            element.current?.removeAttribute('inputmode');
        }
    }
    , [props.inputmode]);
    useEffect(()=>{
        if(props.autofocus){
            element.current?.setAttribute("autofocus","true");
        }
    },[props.autofocus]);
    useEvent(element.current, 'change', onChange);
    useEvent(element.current, 'keydown', onKeydown);
    useEvent(element.current, 'keyup', onKeyup);
    useEvent(element.current, 'focus', onFocus);
    useEvent(element.current, 'blur', onBlur);
    useEvent(element.current, 'enter', onEnter);
    useEvent(element.current, 'input', onInput);
    useEvent(element.current, 'beforeinput', onBeforeInput);
    return (
        <jb-pin-input ref={element} class={props.className} label={props.label} message={props.message}>
            {props.children}
        </jb-pin-input>
    );
});
export type JBPinInputEventType<T> = T & {
    target: JBPinInputWebComponent
}
type JBPinInputProps = {
    label?: string,
    value?: string | number,
    message?:string,
    onChange?: (e:JBPinInputEventType<Event>)=>void,
    onKeyup?: (e:JBPinInputEventType<KeyboardEvent>)=>void,
    onKeydown?: (e:JBPinInputEventType<KeyboardEvent>)=>void,
    onEnter?: (e:JBPinInputEventType<CustomEvent>)=>void,
    onInput?: (e:JBPinInputEventType<InputEvent>)=>void,
    onBeforeinput?:(e:JBPinInputEventType<InputEvent>)=>void,
    onFocus?: (e:JBPinInputEventType<FocusEvent>)=>void,
    onBlur?: (e:JBPinInputEventType<FocusEvent>)=>void,
    className?: string,
    //type: string,
    //validationList: Validation,
    //numberFieldParameter: PropTypes.object,
    disabled?: boolean,
    inputmode?: string,
    autofocus?: boolean,
    charLength?:number,
    children?:any,
}
JBPinInput.propTypes = {
    label: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    message:PropTypes.string,
    // type: PropTypes.string,
    onChange: PropTypes.func,
    onKeyup: PropTypes.func,
    onKeydown: PropTypes.func,
    onEnter: PropTypes.func,
    onInput: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onBeforeinput: PropTypes.func,
    className: PropTypes.string,
    // validationList: PropTypes.array,
    disabled: PropTypes.bool,
    inputmode: PropTypes.string,
    autofocus: PropTypes.bool,
    charLength: PropTypes.number,
    children: PropTypes.element
};
JBPinInput.displayName = "JBPinInput";

