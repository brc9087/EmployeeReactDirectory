(this.webpackJsonppowerup=this.webpackJsonppowerup||[]).push([[0],{39:function(e,t,a){},41:function(e,t,a){"use strict";a.r(t);var r=a(0),s=a(1),n=a.n(s),c=a(13),l=a.n(c),i={wrapperStyle:{minHeight:"100%",paddingBottom:"100px"}};var d=function(e){var t=e.children;return Object(r.jsx)("div",{style:i.wrapperStyle,className:"wrapper",children:t})},o={headerStyle:{color:"white",background:"blue",width:"100%",textAlign:"center",borderBottom:"solid orange",marginBottom:"10px",fontSize:"100px"}};var j=function(){return Object(r.jsx)("div",{style:o.headerStyle,className:"header",children:Object(r.jsx)("h1",{children:"Employee Directory"})})},b=a(3),h=a(15),m=n.a.createContext({}),u=function(){var e=Object(s.useContext)(m);function t(e){var t=e.split("-"),a=t[0];return[t[1],t[2].split("T")[0],a].join("-")}return Object(r.jsx)("tbody",{children:void 0!==e.developerState.filteredUsers[0]&&void 0!==e.developerState.filteredUsers[0].name?e.developerState.filteredUsers.map((function(e){var a=e.login,s=e.name,n=e.picture,c=e.phone,l=e.email,i=e.dob;return Object(r.jsxs)("tr",{children:[Object(r.jsx)("td",{"data-th":"Image",className:"align-middle",children:Object(r.jsx)("img",{src:n.medium,alt:"profile image for "+s.first+" "+s.last,className:"img-responsive"})}),Object(r.jsxs)("td",{"data-th":"Name",className:"name-cell align-middle",children:[s.first," ",s.last]}),Object(r.jsx)("td",{"data-th":"Phone",className:"align-middle",children:c}),Object(r.jsx)("td",{"data-th":"Email",className:"align-middle",children:Object(r.jsx)("a",{href:"mail to:"+l,target:"__blank",children:l})}),Object(r.jsx)("td",{"data-th":"DOB",className:"align-middle",children:t(i.date)})]},a.uuid)})):Object(r.jsx)(r.Fragment,{children:" "})})},x={dataTableStyles:{backgroundColor:"moccasin",color:"black"}},f=function(){var e=Object(s.useContext)(m);return Object(r.jsx)("div",{style:x.dataTableStyles,className:"datatable mt-5",children:Object(r.jsxs)("table",{style:x.dataTableStyles,id:"table",className:"table table-striped table-hover table-condensed",children:[Object(r.jsx)("thead",{children:Object(r.jsx)("tr",{children:e.developerState.headings.map((function(t){var a=t.name,s=t.width;return Object(r.jsxs)("th",{className:"col",style:{width:s},onClick:function(){e.handleSort(a.toLowerCase())},children:[a,Object(r.jsx)("span",{className:"pointer",children:" "})]},a)}))})}),Object(r.jsx)(u,{})]})})},O=function(){var e=Object(s.useContext)(m);return Object(r.jsx)("div",{style:{border:"2px solid black"},className:"searchbox",children:Object(r.jsxs)("form",{className:"form-inline",children:[Object(r.jsx)("input",{className:"form-control mr-sm-2",type:"search",placeholder:"search","aria-label":"search",onChange:function(t){return e.handleSearchChange(t)}}),Object(r.jsx)("button",{className:"btn btn-primary btn-s",type:"submit",children:"SEARCH"})]})})},p={navStyles:{padding:"20px 25px",margin:"0 auto"},searchAreaStyles:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"flex-start"}};var v=function(){return Object(r.jsx)("nav",{style:p.navStyles,className:"navbar navbar-expand-lg navbar-light bg-light",children:Object(r.jsx)("div",{style:p.searchAreaStyles,className:"search-area col-4",children:Object(r.jsx)(O,{})})})},g=a(14),y=a.n(g),S=function(){return y.a.get("https://randomuser.me/api/?results=200&nat=us")},N=function(){var e=Object(s.useState)({users:[],order:"ascend",filteredUsers:[],headings:[{name:"Image",width:"10%"},{name:"Name",width:"10%"},{name:"Phone",width:"20%"},{name:"Email",width:"20%"},{name:"DOB",width:"10%"}]}),t=Object(h.a)(e,2),a=t[0],n=t[1];Object(s.useEffect)((function(){S().then((function(e){n(Object(b.a)(Object(b.a)({},a),{},{users:e.data.results,filteredUsers:e.data.results}))}))}),[]);return Object(r.jsxs)(m.Provider,{value:{developerState:a,handleSearchChange:function(e){var t=e.target.value,r=a.users.filter((function(e){return-1!==e.name.first.toLowerCase().indexOf(t.toLowerCase())}));n(Object(b.a)(Object(b.a)({},a),{},{filteredUsers:r}))},handleSort:function(e){"descend"===a.order?n({order:"ascend"}):n({order:"descend"});var t=a.filteredUsers.sort((function(t,r){return"ascend"===a.order?void 0===t[e]?1:void 0===r[e]?-1:"name"===e?t[e].first.localeCompare(r[e].first):r[e]-t[e]:void 0===t[e]?1:void 0===r[e]?-1:"name"===e?r[e].first.localeCompare(t[e].first):r[e]-t[e]}));n(Object(b.a)(Object(b.a)({},a),{},{filteredUsers:t}))}},children:[Object(r.jsx)(v,{}),Object(r.jsx)("div",{style:{margin:"0 auto",width:"90%"},className:"data-area",children:a.filteredUsers.length>0?Object(r.jsx)(f,{}):Object(r.jsx)("div",{children:" "})})]})};var w=function(){return Object(r.jsx)("div",{children:Object(r.jsx)(N,{})})};var C=function(){return Object(r.jsx)("div",{className:"App",children:Object(r.jsxs)(d,{children:[Object(r.jsx)(j,{}),Object(r.jsx)(w,{})]})})};a(39),a(40);l.a.render(Object(r.jsx)(C,{}),document.getElementById("root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.5fc1687f.chunk.js.map