import{j as r,L as a}from"./index-50fd2b26.js";import{u as i,N as n}from"./useGetAllNotesQuery-249059db.js";import"./_commonjsHelpers-725317a4.js";import"./Card-726b2a5d.js";import"./index-22255003.js";import"./browser-ponyfill-5a4034de.js";const f=({keyword:e})=>{const{data:t,error:s,isLoading:o}=i({variables:{search:e}});return e?o?r.jsx(a,{height:"50vh"}):s?r.jsx("p",{children:s.message}):r.jsx("div",{children:r.jsx(n,{notes:t.rows,emptyMessage:`There are no results for the search ${e}`})}):null};export{f as default};
