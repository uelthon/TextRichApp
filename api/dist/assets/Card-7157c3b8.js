import{r as i,a as l,j as n,c as m,C as H,b as s,d as f}from"./index-0d6f39fe.js";const x=i.forwardRef(({bsPrefix:o,className:c,variant:a,as:t="img",...d},e)=>{const r=l(o,"card-img");return n.jsx(t,{ref:e,className:m(a?`${r}-${a}`:r,c),...d})});x.displayName="CardImg";const N=x,p=i.forwardRef(({bsPrefix:o,className:c,as:a="div",...t},d)=>{const e=l(o,"card-header"),r=i.useMemo(()=>({cardHeaderBsPrefix:e}),[e]);return n.jsx(H.Provider,{value:r,children:n.jsx(a,{ref:d,...t,className:m(c,e)})})});p.displayName="CardHeader";const $=p,b=f("h5"),h=f("h6"),u=s("card-body"),I=s("card-title",{Component:b}),P=s("card-subtitle",{Component:h}),B=s("card-link",{Component:"a"}),R=s("card-text",{Component:"p"}),S=s("card-footer"),T=s("card-img-overlay"),k={body:!1},C=i.forwardRef(({bsPrefix:o,className:c,bg:a,text:t,border:d,body:e,children:r,as:y="div",...g},v)=>{const j=l(o,"card");return n.jsx(y,{ref:v,...g,className:m(c,j,a&&`bg-${a}`,t&&`text-${t}`,d&&`border-${d}`),children:e?n.jsx(u,{children:r}):r})});C.displayName="Card";C.defaultProps=k;const O=Object.assign(C,{Img:N,Title:I,Subtitle:P,Body:u,Link:B,Text:R,Header:$,Footer:S,ImgOverlay:T});export{O as C};
