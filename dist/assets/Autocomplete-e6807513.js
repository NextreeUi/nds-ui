import{j as t,s as e,B as g}from"./index-6e651d48.js";const h=({rect:r,defaultValue:a,rows:m,maxLength:x,readOnly:s,disabled:n,onChange:d,onClick:c,onFocus:j,onKeyDown:u,className:l})=>t.jsx(t.Fragment,{children:t.jsx("textarea",{className:e.textarea+" "+(l||"")+" "+(r?e.rect:""),defaultValue:a,maxLength:x,rows:m,readOnly:s,disabled:n,onChange:d,onClick:c,onFocus:j,onKeyDown:u})}),p=({size:r="medium",radius:a,disabled:m,readOnly:x,placeholder:s,defaultValue:n,helperText:d,onClick:c,onFocus:j,onKeyDown:u,className:l,classHelper:i,error:o})=>t.jsx(t.Fragment,{children:d?t.jsxs("div",{className:e["textfield-wrap"],children:[t.jsx("input",{type:"text",className:e.textfield+" "+(r=="extraSmall"?e.extraSmall:r=="small"?e.small:r=="medium"?e.medium:r=="large"?e.large:"")+" "+(a=="round"?e.round:a=="rect"?e.rect:"")+" "+(o?e.error:"")+" "+(l||""),disabled:m,readOnly:x,placeholder:s,defaultValue:n,onClick:c,onFocus:j,onKeyDown:u}),t.jsx("p",{className:e["textfield-helper-text"]+" "+(r=="extraSmall"?e.extraSmall:r=="small"?e.small:r=="medium"?e.medium:r=="large"?e.large:"")+" "+(o?e.error:"")+" "+(i||""),children:d})]}):t.jsx("input",{type:"text",className:e.textfield+" "+(r=="extraSmall"?e.extraSmall:r=="small"?e.small:r=="medium"?e.medium:r=="large"?e.large:"")+" "+(a=="round"?e.round:a=="rect"?e.rect:"")+" "+(l||""),disabled:m,readOnly:x,placeholder:s,defaultValue:n,onClick:c,onFocus:j,onKeyDown:u})}),S=()=>t.jsxs(t.Fragment,{children:[t.jsx("p",{className:"size24",children:"Autocomplete 페이지입니다."}),t.jsxs("div",{className:"flexColumn gap10",children:[t.jsx(p,{error:!0,helperText:"이것은 도움말입니다."}),t.jsx(p,{helperText:"이것은 도움말입니다."}),t.jsx(h,{}),t.jsx("p",{className:"t size14",children:"안녕하세요"}),t.jsx(g,{variant:"contained",children:" 안녕하세요 !@#$%"})]})]});export{S as default};