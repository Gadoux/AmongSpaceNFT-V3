(this.webpackJsonpazura=this.webpackJsonpazura||[]).push([[0],{45:function(e,t,n){},46:function(e,t,n){},49:function(e,t){},58:function(e,t,n){"use strict";n.r(t);var a=n(11),i=n.n(a),s=n(33),p=n.n(s),r=(n(45),n(2)),u=n(23),o=n(20),y=n(13),l=(n(46),n.p+"static/media/1.ef417819.png"),d=n.p+"static/media/2.896b001f.png",m=n.p+"static/media/3.d5177847.png",c=n.p+"static/media/4.26b39a08.png",b=n.p+"static/media/5.c9326cdb.png",f=n.p+"static/media/6.fb3205ac.png",w=n.p+"static/media/7.54fa10ec.png",T=n.p+"static/media/8.e08d04aa.png",v=n.p+"static/media/9.d5995c46.png",g=n.p+"static/media/10.494d06a1.png",M=n(6),h="0x892C2616EB42D961b4cf0557E44bfc4DFc4679b1",j=[{inputs:[],stateMutability:"nonpayable",type:"constructor"},{inputs:[],name:"ApprovalCallerNotOwnerNorApproved",type:"error"},{inputs:[],name:"ApprovalQueryForNonexistentToken",type:"error"},{inputs:[],name:"ApprovalToCurrentOwner",type:"error"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"ApproveToCaller",type:"error"},{inputs:[],name:"BalanceQueryForZeroAddress",type:"error"},{inputs:[],name:"emergencyWithdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"finalize",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"},{internalType:"address",name:"_to",type:"address"}],name:"giveMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_mintAmount",type:"uint256"}],name:"mint",outputs:[],stateMutability:"payable",type:"function"},{inputs:[],name:"MintToZeroAddress",type:"error"},{inputs:[],name:"MintZeroQuantity",type:"error"},{inputs:[],name:"MintedQueryForZeroAddress",type:"error"},{inputs:[],name:"OwnerQueryForNonexistentToken",type:"error"},{inputs:[],name:"TransferCallerNotOwnerNorApproved",type:"error"},{inputs:[],name:"TransferFromIncorrectOwner",type:"error"},{inputs:[],name:"TransferToNonERC721ReceiverImplementer",type:"error"},{inputs:[],name:"TransferToZeroAddress",type:"error"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[{internalType:"bool",name:"_state",type:"bool"}],name:"pause",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_baseURI",type:"string"}],name:"reveal",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_newBaseExtension",type:"string"}],name:"setBaseExtension",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_baseURI",type:"string"}],name:"setBaseURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newCost",type:"uint256"}],name:"setCost",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newmaxMintAmount",type:"uint256"}],name:"setmaxMintAmount",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_newNftPerAddressLimit",type:"uint256"}],name:"setNftPerAddressLimit",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"string",name:"_notRevealedURI",type:"string"}],name:"setNotRevealedURI",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"bool",name:"_state",type:"bool"}],name:"setOnlyWhitelisted",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"whitelistAddresses",type:"address[]"}],name:"whitelistAdd",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address[]",name:"whitelistAddresses",type:"address[]"}],name:"whitelistRemove",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[],name:"withdraw",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseExtension",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"baseURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"cost",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxMintAmount",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"maxSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"nftPerAddressLimit",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[],name:"notRevealedUri",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"onlyWhitelisted",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"paused",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"revealed",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"team1",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"team2",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"team3",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"team4",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"team5",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"team6",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"totalSupply",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"",type:"address"}],name:"whitelist",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"}];var x=function(){var e=Object(a.useState)(""),t=Object(o.a)(e,2),n=t[0],i=t[1],s=Object(a.useState)([]),p=Object(o.a)(s,2),x=(p[0],p[1]),O=Object(a.useState)(),A=Object(o.a)(O,2),k=(A[0],A[1]),I=Object(a.useState)({}),S=Object(o.a)(I,2),F=S[0],N=S[1];function _(){return C.apply(this,arguments)}function C(){return(C=Object(u.a)(Object(r.a)().mark((function e(){var t,n,a,i,s;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window.ethereum){e.next=17;break}return t=new y.a.providers.Web3Provider(window.ethereum),n=new y.a.Contract(h,j,t),e.prev=3,e.next=6,n.cost();case 6:return a=e.sent,e.next=9,n.totalSupply();case 9:i=e.sent,s={cost:String(a),totalSupply:String(i)},N(s),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(3),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[3,14]])})))).apply(this,arguments)}function R(){return(R=Object(u.a)(Object(r.a)().mark((function e(){var t,n,a,s,p,u;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window.ethereum){e.next=20;break}return e.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:return t=e.sent,n=new y.a.providers.Web3Provider(window.ethereum),a=n.getSigner(),s=new y.a.Contract(h,j,a),e.prev=7,p={from:t[0],value:F.cost.toString()},e.next=11,s.mint(1,p);case 11:return u=e.sent,e.next=14,u.wait();case 14:_(),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(7),i(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[7,17]])})))).apply(this,arguments)}function E(){return(E=Object(u.a)(Object(r.a)().mark((function e(){var t,n,a,i;return Object(r.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"===typeof window.ethereum){e.next=11;break}return e.next=3,window.ethereum.request({method:"eth_requestAccounts"});case 3:return t=e.sent,x(t),n=new y.a.providers.Web3Provider(window.ethereum),e.next=8,n.getBalance(t[0]);case 8:a=e.sent,i=y.a.utils.formatEther(a),k(i);case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function B(){var e=window.ethereum;e&&e.isMetaMask?console.log("Ethereum successfully detected!"):console.log("Please install MetaMask!")}return Object(a.useEffect)((function(){!function(){E.apply(this,arguments)}(),_()}),[]),window.ethereum?B():(window.addEventListener("ethereum#initialized",B,{once:!0}),setTimeout(B,3e3)),Object(M.jsx)("div",{className:"App",children:Object(M.jsxs)("div",{className:"container",children:[Object(M.jsxs)("div",{className:"banniere",children:[Object(M.jsx)("img",{src:l,alt:"img"}),Object(M.jsx)("img",{src:d,alt:"img"}),Object(M.jsx)("img",{src:m,alt:"img"}),Object(M.jsx)("img",{src:c,alt:"img"}),Object(M.jsx)("img",{src:b,alt:"img"}),Object(M.jsx)("img",{src:f,alt:"img"}),Object(M.jsx)("img",{src:w,alt:"img"}),Object(M.jsx)("img",{src:T,alt:"img"}),Object(M.jsx)("img",{src:v,alt:"img"}),Object(M.jsx)("img",{src:g,alt:"img"})]}),n&&Object(M.jsx)("p",{children:n}),Object(M.jsx)("h1",{children:"Mint a Spaceboy !"}),Object(M.jsxs)("p",{className:"count",children:[F.totalSupply," / 250"]}),Object(M.jsxs)("p",{className:"cost",children:["Each Among Space NFT costs ",F.cost/Math.pow(10,18)," eth (excluding gas fees)"]}),Object(M.jsx)("button",{onClick:function(){return R.apply(this,arguments)},children:"BUY one Spaceboy "})]})})},O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,60)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,p=t.getTTFB;n(e),a(e),i(e),s(e),p(e)}))};p.a.createRoot(document.getElementById("root")).render(Object(M.jsx)(i.a.StrictMode,{children:Object(M.jsx)(x,{})})),O()}},[[58,1,2]]]);
//# sourceMappingURL=main.2c66d178.chunk.js.map