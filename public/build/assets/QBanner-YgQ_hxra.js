import{N as u,ab as v,ad as b,j as o,S as n,U as s,V as q}from"./app-dcaBrJ0A.js";const _=u({name:"QBanner",props:{...v,inlineActions:Boolean,dense:Boolean,rounded:Boolean},setup(e,{slots:a}){const{proxy:{$q:c}}=q(),i=b(e,c),d=o(()=>"q-banner row items-center"+(e.dense===!0?" q-banner--dense":"")+(i.value===!0?" q-banner--dark q-dark":"")+(e.rounded===!0?" rounded-borders":"")),l=o(()=>`q-banner__actions row items-center justify-end col-${e.inlineActions===!0?"auto":"all"}`);return()=>{const r=[n("div",{class:"q-banner__avatar col-auto row items-center self-start"},s(a.avatar)),n("div",{class:"q-banner__content col text-body2"},s(a.default))],t=s(a.action);return t!==void 0&&r.push(n("div",{class:l.value},t)),n("div",{class:d.value+(e.inlineActions===!1&&t!==void 0?" q-banner--top-padding":""),role:"alert"},r)}}});export{_ as Q};
