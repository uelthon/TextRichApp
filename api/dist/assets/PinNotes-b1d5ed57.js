import{j as e,L as o}from"./index-9dca929b.js";import{u as i,N as a}from"./useGetAllNotesQuery-bec47185.js";import"./_commonjsHelpers-725317a4.js";import"./Card-2453f709.js";import"./index-05c423e0.js";import"./browser-ponyfill-5a4034de.js";const x=()=>{const{data:s,error:r,isLoading:t}=i({variables:{pin:!0}});return t?e.jsx(o,{height:"25vh"}):r?e.jsx("p",{children:r.message}):e.jsx("div",{children:e.jsx(a,{notes:s.rows,emptyMessage:"Your pinned notes will appear here"})})};export{x as default};
