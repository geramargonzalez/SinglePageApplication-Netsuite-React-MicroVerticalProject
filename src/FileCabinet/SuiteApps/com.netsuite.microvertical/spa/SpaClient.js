define(["exports","@uif-js/core/jsx-runtime","@uif-js/core","@uif-js/component"],(function(e,t,n,a){"use strict";function r(e,t){return t.type,e}var l={records:[{name:"Testing",status:"Active",currency:"AFN",amount:1e3}]};const o="/",c="/customer",s="/transaction",i="*";function d({records:e}){return t.jsxs(a.StackPanel.Vertical,{children:[t.jsx(a.StackPanel.Item,{children:t.jsx(a.ApplicationHeader,{title:"Home",icon:n.SystemIcon.HOME})}),t.jsx(a.StackPanel.Item,{children:t.jsx(a.ContentPanel,{outerGap:a.ContentPanel.GapSize.LARGE,children:t.jsx(a.Heading,{type:a.Heading.Type.MEDIUM_HEADING,children:"Welcome to Micro Vertical!"})})})]})}var u={DASHBOARD:Symbol("dashboard"),CUSTOMER:Symbol("user"),TRANSACTION:Symbol("money")};function h(){const e=n.useContext(n.ContextType.ROUTER_LOCATION);return t.jsxs(a.NavigationDrawer,{selectedValue:x(e),children:[t.jsx(a.NavigationDrawer.Item,{value:u.DASHBOARD,icon:n.SystemIcon.HOME,label:"Dashboard",route:o}),t.jsx(a.NavigationDrawer.Item,{value:u.CUSTOMER,icon:n.SystemIcon.PERSON,label:"Customer",route:c}),t.jsx(a.NavigationDrawer.Item,{value:u.TRANSACTION,icon:n.SystemIcon.MONEY,label:"Transaction",route:s})]})}const x=e=>{for(const[t,n]of Object.entries(j))if(e.matches(t,{exact:t!==i}))return n;return null},j={[o]:u.DASHBOARD};function S(){return t.jsxs(a.StackPanel.Vertical,{alignment:a.StackPanel.Alignment.CENTER,outerGap:a.ContentPanel.GapSize.LARGE,children:[t.jsx(a.StackPanel.Item,{children:t.jsx(a.Heading,{type:a.Heading.Type.MEDIUM_HEADING,children:"This page does not exist..."})}),t.jsx(a.StackPanel.Item,{children:t.jsx(a.Link,{route:{route:o},children:"Go back to Dashboard"})})]})}var m={fetchCustomer:async function(){const e=await fetch("/services/rest/query/v1/suiteql",{method:"POST",headers:{Prefer:"transient"},body:JSON.stringify({q:"SELECT * FROM customer"})});return(await e.json()).items}};function C(){const[e,r]=n.useState([]),[l,o]=n.useState(!0),[c,s]=n.useState(null),i={label:"Loading...",visible:l},d={width:"100%",height:"100%"};n.useEffect((()=>{!async function(){try{const e=await m.fetchCustomer();r(e),console.log("Customer data Micro Vertical TEST:",e)}catch(e){s(e.message),console.error("Error fetching data:",e)}finally{o(!1)}}()}),[]);const u=e=>({outerGap:a.ContentPanel.GapSize.LARGE,decorator:n.Decorator.background({color:e,strength:n.Decorator.Strength.STRONG})});return t.jsx(a.ContentPanel,{...u(n.Decorator.Color.WHITE),loader:i,rootStyle:d,children:t.jsxs(a.StackPanel.Vertical,{children:[t.jsx(a.StackPanel.Item,{children:t.jsx(a.ApplicationHeader,{title:"Customer",icon:n.SystemIcon.PERSON})}),t.jsx(a.StackPanel.Item,{children:t.jsx(a.ContentPanel,{outerGap:a.ContentPanel.GapSize.LARGE,horizontalAlignment:a.ContentPanel.HorizontalAlignment.CENTER,children:t.jsx(a.Heading,{type:a.Heading.Type.PAGE_SUBTITLE,children:"Here, you can see the customers!"})})}),!c&&e.length>0&&t.jsx(a.StackPanel.Item,{children:t.jsx(a.ContentPanel,{...u(n.Decorator.Color.NEUTRAL),loader:i,rootStyle:d,children:t.jsxs(a.Table,{children:[t.jsx(a.Table.Caption,{children:"Customers"}),t.jsx(a.Table.Header,{children:t.jsxs(a.Table.Row,{children:[t.jsx(a.Table.HeaderCell,{children:"ID"}),t.jsx(a.Table.HeaderCell,{children:"NAME"}),t.jsx(a.Table.HeaderCell,{children:"ACTIVE"}),t.jsx(a.Table.HeaderCell,{children:"IS PERSON"}),t.jsx(a.Table.HeaderCell,{children:"CURRENCY"})]})}),t.jsx(a.Table.Body,{children:e.map((e=>t.jsxs(a.Table.Row,{children:[t.jsx(a.Table.Cell,{children:e?.id}),t.jsx(a.Table.Cell,{children:e?.altname||e?.companyname}),t.jsx(a.Table.Cell,{children:e?.isinactive}),t.jsx(a.Table.Cell,{children:e?.isperson}),t.jsx(a.Table.Cell,{children:e?.currency})]})))})]})})}),t.jsx(a.StackPanel.Item,{children:t.jsx(a.ContentPanel,{outerGap:a.ContentPanel.GapSize.LARGE,horizontalAlignment:a.ContentPanel.HorizontalAlignment.CENTER,children:t.jsx(a.Pagination,{pages:e.length<10?1:e.length})})})]})})}function T(){return t.jsxs(a.StackPanel.Vertical,{children:[t.jsx(a.StackPanel.Item,{children:t.jsx(a.ApplicationHeader,{title:"Transaction",icon:n.SystemIcon.MONEY})}),t.jsx(a.StackPanel.Item,{children:t.jsx(a.ContentPanel,{outerGap:a.ContentPanel.GapSize.LARGE,children:t.jsx(a.Heading,{type:a.Heading.Type.MEDIUM_HEADING,children:"Transaction Page is under construction"})})})]})}function p(){const[e,u]=n.useState(l),x=n.useMemo((()=>n.Store.create({reducer:r,state:l,onStateChanged:({currentState:e})=>u(e)}))),{records:j}=e;return t.jsx(n.Router.Hash,{children:t.jsx(n.Store.Provider,{store:x,children:t.jsxs(a.StackPanel,{children:[t.jsx(a.StackPanel.Item,{shrink:0,children:t.jsx(h,{})}),t.jsx(a.StackPanel.Item,{grow:1,children:t.jsxs(n.Router.Routes,{children:[t.jsx(n.Router.Route,{path:o,exact:!0,children:t.jsx(d,{records:j})}),t.jsx(n.Router.Route,{path:c,exact:!0,children:t.jsx(C,{})}),t.jsx(n.Router.Route,{path:s,exact:!0,children:t.jsx(T,{})}),t.jsx(n.Router.Route,{path:i,exact:!0,children:t.jsx(S,{})})]})})]})})})}e.run=e=>{e.setLayout("application"),e.setContent(t.jsx(p,{}))}}));
