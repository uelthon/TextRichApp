import{j as e,L as o}from"./index-0d6f39fe.js";import{u as a,N as i}from"./useGetAllNotesQuery-34f73c29.js";import"./_commonjsHelpers-725317a4.js";import"./Card-7157c3b8.js";import"./index-99ee4a41.js";import"./browser-ponyfill-5a4034de.js";const x=()=>{const{data:s,error:r,isLoading:t}=a({variables:{pin:!1}});return t?e.jsx(o,{height:"25vh"}):r?e.jsx("p",{children:r.message}):e.jsx("div",{children:e.jsx(i,{notes:s.rows,emptyMessage:"Your notes will appear here"})})};export{x as default};
