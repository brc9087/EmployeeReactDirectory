(this.webpackJsonppowerup=this.webpackJsonppowerup||[]).push([[0],{39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a(1),s=a.n(n),c=a(13),i=a.n(c),l={wrapperStyle:{minHeight:"100%",paddingBottom:"100px"}};var d=function(e){var t=e.children;return Object(r.jsx)("div",{style:l.wrapperStyle,className:"wrapper",children:t})},o={headerStyle:{color:"white",background:"blue",width:"100%",textAlign:"center",borderBottom:"solid orange",marginBottom:"10px",fontSize:"100px"}};var j=function(){return Object(r.jsx)("div",{style:o.headerStyle,className:"header",children:Object(r.jsx)("h1",{children:"Employee Directory"})})},h=a(3),b=a(15),m=s.a.createContext({}),u=function(){var e=Object(n.useContext)(m);function t(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(r.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,n=e.name,s=e.picture,c=e.phone,i=e.email,l=e.dob;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(r.jsx)("img",{src:s.medium,alt:"profile image for "+n.first+" "+n.last,className:"img-responsive"})}),Object(r.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[n.first," ",n.last]}),Object(r.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(r.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(r.jsx)("a",{href:"mail to:"+i,target:"__blank",children:i})}),Object(r.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(l.date)})]},a.uuid)})):Object(r.jsx)(r.Fragment,{children:" "})})},x=function(){var e=Object(n.useContext)(m);return Object(r.jsx)("div",{className:"datatable mt-5",children:Object(r.jsxs)("table",{id:"table",className:"table table-striped table-hover table-condensed",children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:e.developerState.headings.map((function(t){var a=t.name,n=t.width;return Object(r.jsxs)("th",{className:"col",style:{width:n},onClick:function(){e.handleSort(a.toLowerCase())},children:[a,Object(r.jsx)("span",{className:"pointer",children:" "})]},a)}))})}),Object(r.jsx)(u,{})]})})},f=function(){var e=Object(n.useContext)(m);return Object(r.jsx)("div",{style:{border:"2px solid black"},className:"searchbox",children:Object(r.jsxs)("form",{className:"form-inline",children:[Object(r.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"search","aria-label":"search",onChange:function(t){return e.handleSearchChange(t)}}),Object(r.jsx)("button",{className:"btn btn-primary btn-s",type:"submit",children:"SEARCH"})]})})},O={navStyles:{padding:"20px 25px",margin:"0 auto"},searchAreaStyles:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}};var p=function(){return Object(r.jsx)("nav",{style:O.navStyles,className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(r.jsx)("div",{style:O.searchAreaStyles,className:"search-area col-4",children:Object(r.jsx)(f,{})})})},v=a(14),g=a.n(v),y=function(){return g.a.get("https://randomuser.me/api/?results=200&nat=us")},N=function(){var e=Object(n.useState)({users:[],order:"ascend",filteredUsers:[],headings:[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}]}),t=Object(b.a)(e,2),a=t[0],s=t[1];Object(n.useEffect)((function(){y().then((function(e){s(Object(h.a)(Object(h.a)({},a),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]);return Object(r.jsxs)(m.Provider,{value:{developerState:a,handleSearchChange:function(e){var t=e.target.value,r=a.users.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(t.toLowerCase())}));s(Object(h.a)(Object(h.a)({},a),{},{filteredUsers:r}))},handleSort:function(e){"descend"===a.order?s({order:"ascend"}):s({order:"descend"});var t=a.filteredUsers.sort((function(t,r){return"ascend"===a.order?void 0===t[e]?1:void 0===r[e]?-1:"name"===e?t[e].first.localeCompare(r[e].first):r[e]-t[e]:void 0===t[e]?1:void 0===r[e]?-1:"name"===e?r[e].first.localeCompare(t[e].first):r[e]-t[e]}));s(Object(h.a)(Object(h.a)({},a),{},{filteredUsers:t}))}},children:[Object(r.jsx)(p,{}),Object(r.jsx)("div",{style:{margin:"0 auto",width:"90%"},className:"data-area",children:a.filteredUsers.length>0?Object(r.jsx)(x,{}):Object(r.jsx)("div",{children:" "})})]})};var w=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(N,{})})};var S=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(d,{children:[Object(r.jsx)(j,{}),Object(r.jsx)(w,{})]})})};a(39),a(40);i.a.render(Object(r.jsx)(S,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.dcb56f27.chunk.js.map