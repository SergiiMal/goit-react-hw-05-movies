"use strict";(self.webpackChunkreact_project_template=self.webpackChunkreact_project_template||[]).push([[493],{342:function(n,e,t){t.d(e,{Z:function(){return A}});var r,i,o,a,c,p,s,u=t(7),d=t.n(u),l=t(504),h=t(871),x=t(17),m=t(168),f=t(499),v=t(624),g=f.Z.li(r||(r=(0,m.Z)(["\n  @media (max-width: 767px) {\n    margin-bottom: 50px;\n  }\n\n  @media (min-width: 768px) {\n    display: flex;\n    justify-content: center;\n    width: calc((100% - 4 * 10px) / 2);\n    margin: 10px;\n  }\n\n  @media (min-width: 1440px) {\n    width: calc((100% - 6 * 10px) / 3);\n  }\n"]))),b=f.Z.p(i||(i=(0,m.Z)(["\n  font-size: 20px;\n  font-weight: 700;\n  text-align: center;\n\n  color: ",";\n\n  width: 300px;\n  margin-bottom: 15px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"])),v.NN),j=f.Z.img(o||(o=(0,m.Z)(["\n  width: 300px;\n  margin-bottom: 15px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"]))),w=f.Z.div(a||(a=(0,m.Z)(["\n  display: flex;\n  justify-content: space-between;\n  width: 300px;\n\n  @media (min-width: 768px) {\n    width: 350px;\n  }\n"]))),y=f.Z.p(c||(c=(0,m.Z)(["\n  color: ",";\n"])),v.Dq),Z=f.Z.p(p||(p=(0,m.Z)(["\n  color: ",";\n"])),v.Dq),O=f.Z.span(s||(s=(0,m.Z)(["\n  font-weight: 700;\n"]))),P=t(184);function k(n){var e=n.id,t=n.title,r=n.poster,i=n.voteAverage,o=n.voteCount,a=(0,h.TH)();return(0,P.jsx)(g,{children:(0,P.jsxs)(l.rU,{to:"/movies/".concat(e),state:{from:a},children:[(0,P.jsx)(b,{children:t||"Movie without a title"}),(0,P.jsx)(j,{src:r?"https://image.tmdb.org/t/p/w500/".concat(r):x,alt:t}),(0,P.jsxs)(w,{children:[(0,P.jsxs)(y,{children:["Vote average: ",(0,P.jsx)(O,{children:i})]}),(0,P.jsxs)(Z,{children:["Vote count:",(0,P.jsxs)(O,{children:[" ",o]})]})]})]})})}k.prototype={id:d().number,title:d().string,poster:d().string,voteAverage:d().number,voteCount:d().number};var _,q=k,C=f.Z.ul(_||(_=(0,m.Z)(["\n  @media (min-width: 768px) {\n    display: flex;\n    flex-wrap: wrap;\n    margin: -10px;\n  }\n"])));function D(n){var e=n.movies;return(0,P.jsx)(C,{children:e.map((function(n){var e=n.id,t=n.title,r=n.poster,i=n.voteAverage,o=n.voteCount;return(0,P.jsx)(q,{id:e,title:t,poster:r,voteAverage:i,voteCount:o},e)}))})}D.prototype={movies:d().arrayOf(d().shape({id:d().number,title:d().string,poster:d().string,voteAverage:d().number,voteCount:d().number})).isRequired};var A=D},971:function(n,e,t){t.r(e),t.d(e,{default:function(){return q}});var r=t(152),i=t(791),o=t(871),a=t(861),c=t(757),p=t.n(c);function s(){return s=(0,a.Z)(p().mark((function n(e){var t,r,i,o,a,c=arguments;return p().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,r="https://api.themoviedb.org/3/search/movie",i="?api_key=".concat("d783920aea034ba2adae6031a0bf96c0","&query=").concat(e,"&language=en-US&page=").concat(t,"&include_adult=false"),n.next=6,fetch("".concat(r).concat(i));case 6:return o=n.sent,n.next=9,o.json();case 9:return a=n.sent,n.abrupt("return",a);case 11:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}var u=function(n){return s.apply(this,arguments)};function d(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function h(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){d(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}var x,m,f,v=t(70),g=t(168),b=t(499),j=t(624),w=b.Z.form(x||(x=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),y=b.Z.input(m||(m=(0,g.Z)(["\n  width: 200px;\n  height: 30px;\n\n  padding: 0 10px 0 10px;\n  margin-right: 15px;\n\n  border: 1px solid ",";\n  outline: none;\n\n  @media (min-width: 768px) {\n    width: 800px;\n  }\n"])),j.Et),Z=b.Z.button(f||(f=(0,g.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  width: 100px;\n  height: 30px;\n  margin-bottom: 30px;\n\n  font-size: 15px;\n  font-family: inherit;\n\n  background-color: ",";\n  color: ",";\n  border: none;\n\n  cursor: pointer;\n  transition: background-color ",", color ",";\n\n  :hover {\n    background-color: ",";\n    color: ",";\n  }\n\n  @media (min-width: 768px) {\n    width: 150px;\n  }\n"])),j.Et,j.pU,j.Qo,j.Qo,j.Fd,j.pU),O=t(135),P=t(184);var k=function(){var n=(0,o.TH)(),e=(0,o.s0)();return(0,P.jsx)(v.Z,{children:(0,P.jsxs)(w,{onSubmit:function(t){t.preventDefault();var r=t.target.elements.query.value;e(h(h({},n),{},{search:"query=".concat(r)}))},children:[(0,P.jsx)(y,{type:"text",name:"query"}),(0,P.jsx)(Z,{type:"submit",children:(0,P.jsx)(O.U41,{})})]})})},_=t(342);var q=function(){var n,e=(0,o.TH)().search,t=null!==(n=new URLSearchParams(e).get("query"))&&void 0!==n?n:"",a=(0,i.useState)(null),c=(0,r.Z)(a,2),p=c[0],s=c[1];return(0,i.useEffect)((function(){""!==t&&u(t).then((function(n){var e=n.results,t=[];e.map((function(n){var e={id:n.id,title:n.original_title,poster:n.poster_path,voteAverage:n.vote_average,voteCount:n.vote_count};return t.push(e)})),s(t)}))}),[t]),(0,P.jsxs)(P.Fragment,{children:[(0,P.jsx)(k,{}),p&&(0,P.jsx)(v.Z,{isPadding:!0,children:(0,P.jsx)(_.Z,{movies:p})})]})}},17:function(n,e,t){n.exports=t.p+"static/media/poster.f55d248454cd0ab3bc5b.jpg"}}]);
//# sourceMappingURL=movies-page.3f0db71e.chunk.js.map