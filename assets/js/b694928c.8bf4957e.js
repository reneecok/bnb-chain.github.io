"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[4341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),s=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return o.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return n?o.createElement(h,l(l({ref:t},p),{},{components:n})):o.createElement(h,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,l=new Array(a);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<a;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9462:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>a,contentTitle:()=>l,metadata:()=>i,toc:()=>c,default:()=>p});var o=n(87462),r=(n(67294),n(3905));const a={},l="Run a Local Testnet",i={unversionedId:"beaconchain/develop/node/localnetwork",id:"beaconchain/develop/node/localnetwork",isDocsHomePage:!1,title:"Run a Local Testnet",description:"Single-node on Local Testnet",source:"@site/docs/beaconchain/develop/node/localnetwork.md",sourceDirName:"beaconchain/develop/node",slug:"/beaconchain/develop/node/localnetwork",permalink:"/docs/beaconchain/develop/node/localnetwork",editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/beaconchain/develop/node/localnetwork.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Upgrade",permalink:"/docs/beaconchain/develop/node/upgrade"},next:{title:"Common Issues When Running a Full Node",permalink:"/docs/beaconchain/develop/node/fullnodeissue"}},c=[{value:"Single-node on Local Testnet",id:"single-node-on-local-testnet",children:[{value:"Requirements",id:"requirements",children:[],level:3},{value:"Create Genesis File and Start the Network",id:"create-genesis-file-and-start-the-network",children:[],level:3}],level:2}],s={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"run-a-local-testnet"},"Run a Local Testnet"),(0,r.kt)("h2",{id:"single-node-on-local-testnet"},"Single-node on Local Testnet"),(0,r.kt)("p",null,"This guide helps you create a single validator node that runs a network locally for testing and other development related uses."),(0,r.kt)("h3",{id:"requirements"},"Requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"/docs/beaconchain/develop/node/install"},"bnbchaind"))),(0,r.kt)("h3",{id:"create-genesis-file-and-start-the-network"},"Create Genesis File and Start the Network"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# You can run all of these commands from your home directory\ncd $HOME\n")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Initialize the config.toml file that will help you to bootstrap the network")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"bnbchaind init --home /Users/huangsuyu/Documents/work/localnet --moniker test\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Initialize the genesis file that will help you to bootstrap the network\nbnbchaind testnet --v 1 --chain-id local-testnet")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Copy genesis.json and others to $home/config"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cp ./mynetwork/config/genesis $home/config\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Edit app.toml to set ugrade height")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FixSignBytesOverflowHeight = 1\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Start our node")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# Now its safe to start `bnbchaind`\nbnbchaind start --home $home\n")))}p.isMDXComponent=!0}}]);