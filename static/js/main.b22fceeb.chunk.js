(this.webpackJsonpshoppingcart=this.webpackJsonpshoppingcart||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},26:function(e,t,n){"use strict";n.r(t);var r,c=n(0),i=n.n(c),o=n(5),a=n.n(o),d=(n(16),n(17),n(3)),u=n(2),s=n(4),l=Object(s.d)({name:"cart",initialState:[],reducers:{addToCart:function(e,t){var n=e.findIndex((function(e){return e.id===t.payload.id}));-1!==n?e[n].amount+=1:e.push(Object(u.a)(Object(u.a)({},t.payload),{},{amount:1}))},removeFromCart:function(e,t){var n=e.findIndex((function(e){return e.id===t.payload}));if(!(e[n].amount>1))return e.filter((function(e){return e.id!==t.payload}));e[n].amount-=1}}}),j=function(e){return e.cart},p=function(e){return e.cart.reduce((function(e,t){return e+(t.amount+t.price)}),0)},b=l.actions,f=b.addToCart,O=b.removeFromCart,h=l.reducer,m=function(){return Object(d.b)()},v=d.c,x=n(8),g=n.n(x),y=n(10),C=function(e){return new Promise((function(t,n){return setTimeout((function(){0===e.title.length&&n("No titke"),e.price<=0&&n("Price is incorrect"),t(e)}),500)}))};!function(e){e[e.Fulfilled=0]="Fulfilled",e[e.Pending=1]="Pending",e[e.Rejected=2]="Rejected"}(r||(r={}));var S=Object(s.b)("products/addNewsProduct",function(){var e=Object(y.a)(g.a.mark((function e(t){var n;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),P=Object(s.c)(),k=P.getInitialState({errorMessage:void 0,validationState:void 0}),F=P.upsertMany(k,[{title:"Escape From Tarkov",price:60,id:"eft"},{title:"Hunt: Showdown",price:70,id:"hunt"},{title:"Hell Let Loose",price:55,id:"hll"}]),T=Object(s.d)({name:"products",initialState:F,reducers:{addProduct:function(e,t){P.upsertOne(e,t.payload)},removeProduct:function(e,t){P.removeOne(e,t.payload)}},extraReducers:function(e){e.addCase(S.fulfilled,(function(e,t){P.upsertOne(e,t.payload),e.validationState=r.Fulfilled,e.errorMessage=void 0})),e.addCase(S.rejected,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{validationState:r.Rejected,errorMessage:t.error.message})})),e.addCase(S.pending,(function(e,t){return Object(u.a)(Object(u.a)({},e),{},{validationState:r.Pending,errorMessage:void 0})}))}}),w=T.actions,I=(w.addProduct,w.removeProduct),M=function(e){return e.products.errorMessage},R=P.getSelectors((function(e){return e.products})),A=R.selectAll,L=(R.selectById,R.selectEntities,R.selectIds,R.selectTotal,T.reducer),B=n(1),E=function(){var e=Object(d.c)(A),t=m();return Object(B.jsxs)("div",{children:[Object(B.jsx)("h2",{children:"Games list"}),e.map((function(e){return Object(B.jsxs)("div",{children:[Object(B.jsx)("span",{children:"".concat(e.title," : ").concat(e.price)}),Object(B.jsx)("button",{onClick:function(){return function(e){return t(f(e))}(e)},children:"Add To Cart"}),Object(B.jsx)("button",{onClick:function(){return n=e.id,void t(I(n));var n},children:"Remove from the store"})]},e.id)}))]})},N=n(11),D=function(){var e=m(),t=Object(d.c)(M),n=Object(c.useState)({id:"",title:"",price:0}),r=Object(N.a)(n,2),i=r[0],o=r[1],a=function(e){var t=e.target,n=t.name,r=t.value;return o((function(e){return e[n]=r,Object(u.a)({},e)}))};return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h2",{children:"Add game To The Store"}),t&&Object(B.jsxs)("span",{children:["error: ",t]}),Object(B.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(S(i))},children:[Object(B.jsx)("input",{style:{border:t?"1px solid red":"1px solid black"},type:"text",placeholder:"Game title",name:"title",value:i.title,onChange:a}),Object(B.jsx)("input",{style:{border:t?"1px solid red":"1px solid black"},type:"number",placeholder:"Price",name:"price",value:i.price,onChange:a}),Object(B.jsx)("input",{style:{border:t?"1px solid red":"1px solid black"},type:"text",placeholder:"Id",name:"id",value:i.id,onChange:a}),Object(B.jsx)("button",{style:{backgroundColor:t?"red":"#f2f5f9"},type:"submit",children:"Add product"})]})]})},G=Object(s.a)({reducer:{products:L,cart:h}}),H=function(){var e=v(j),t=v(p),n=m();return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)("h2",{children:"Cart"}),Object(B.jsx)("h5",{children:t}),e.map((function(e){return Object(B.jsxs)("div",{children:[Object(B.jsx)("span",{children:e.title}),Object(B.jsx)("span",{children:e.amount}),Object(B.jsx)("button",{onClick:function(){return t=e.id,n(O(t));var t},children:"Remove from cart"})]},e.id)}))]})};var J=function(){return Object(B.jsx)(d.a,{store:G,children:Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(E,{}),Object(B.jsx)(D,{}),Object(B.jsx)(H,{})]})})},q=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,27)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),i(e),o(e)}))};a.a.render(Object(B.jsx)(i.a.StrictMode,{children:Object(B.jsx)(J,{})}),document.getElementById("root")),q()}},[[26,1,2]]]);
//# sourceMappingURL=main.b22fceeb.chunk.js.map