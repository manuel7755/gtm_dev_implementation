(this["webpackJsonpgtm-dev-setup"]=this["webpackJsonpgtm-dev-setup"]||[]).push([[0],{131:function(e,t,c){},132:function(e,t,c){},133:function(e,t,c){},140:function(e,t,c){},141:function(e,t,c){},142:function(e,t,c){},143:function(e,t,c){},144:function(e,t,c){},145:function(e,t,c){},146:function(e,t,c){},148:function(e,t,c){},149:function(e,t,c){},150:function(e,t,c){},151:function(e,t,c){},152:function(e,t,c){},153:function(e,t,c){},154:function(e,t,c){},155:function(e,t,c){},158:function(e,t,c){},159:function(e,t,c){},160:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(36),i=c.n(r),s=(c(131),c(9)),o=c(18),l=Object(n.createContext)({}),j=Object(n.createContext)([]),d=Object(n.createContext)([]),u=Object(n.createContext)(!1),b=Object(n.createContext)(!1),h=(c(132),c.p+"static/media/tamanna-rumee-mIqyYpSNq3o-unsplash_main_banner.8ee615f6.jpg"),O=c.p+"static/media/promotion_athletic_shoes.4897bfea.jpg",x=c.p+"static/media/promotion_backpacks.a3f0fbfd.jpg",m=c.p+"static/media/promotion_vaccums.c689e567.jpg",f=c.p+"static/media/promotion_pans.bd721bc9.jpg",p=c.p+"static/media/promotion_watches.3c35980e.jpg",g=c.p+"static/media/promotion_couches.f62d58b3.jpg",v=c.p+"static/media/promotion_dinner_sets.628ee9be.jpg",_=(c(133),c(38)),N=c(2),C=function(e){return Object(N.jsx)(_.b,{to:e.link,className:"button_container",children:Object(N.jsx)("button",{className:"cta_button",disabled:e.disabled,onClick:e.clickAction,children:e.children})})},y=(c(140),function(e){var t=e.bannerImage;return Object(N.jsx)("div",{className:"creative_container",children:Object(N.jsx)("img",{src:t,alt:"banner_image"})})}),P=function(){return Object(N.jsx)(N.Fragment,{children:Object(N.jsxs)("div",{className:"page_section homepage_container",children:[Object(N.jsx)("div",{className:"banner_container",children:Object(N.jsx)(y,{bannerImage:h})}),Object(N.jsxs)("div",{className:"promotions_container",children:[Object(N.jsxs)("div",{className:"promotion_slot",children:[Object(N.jsx)(y,{bannerImage:O}),Object(N.jsx)("div",{className:"promotion_title",children:Object(N.jsx)("h1",{children:"Shoes"})}),Object(N.jsx)(C,{link:"/catalogue",children:"Shop Now"})]}),Object(N.jsxs)("div",{className:"promotion_slot",children:[Object(N.jsx)(y,{bannerImage:x}),Object(N.jsx)("div",{className:"promotion_title",children:Object(N.jsx)("h1",{children:"Backpacks"})}),Object(N.jsx)(C,{link:"/catalogue",children:"Shop Now"})]}),Object(N.jsxs)("div",{className:"promotion_slot",children:[Object(N.jsx)(y,{bannerImage:g}),Object(N.jsx)("div",{className:"promotion_title",children:Object(N.jsx)("h1",{children:"Couches"})}),Object(N.jsx)(C,{link:"/catalogue",children:"Shop Now"})]}),Object(N.jsxs)("div",{className:"promotion_slot",children:[Object(N.jsx)(y,{bannerImage:v}),Object(N.jsx)("div",{className:"promotion_title",children:Object(N.jsx)("h1",{children:"Dinner Sets"})}),Object(N.jsx)(C,{link:"/catalogue",children:"Shop Now"})]}),Object(N.jsxs)("div",{className:"promotion_slot",children:[Object(N.jsx)(y,{bannerImage:p}),Object(N.jsx)("div",{className:"promotion_title",children:Object(N.jsx)("h1",{children:"Watches"})}),Object(N.jsx)(C,{link:"/catalogue",children:"Shop Now"})]})]}),Object(N.jsxs)("div",{className:"media_video_container",children:[Object(N.jsx)("h1",{children:"Checkout Our New Camera Addition!"}),Object(N.jsx)("iframe",{src:"https://www.youtube.com/embed/3bCpnTD3Tt8?start=0",title:"YouTube video player",frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0})]}),Object(N.jsxs)("section",{className:"section_about_product",children:[Object(N.jsxs)("div",{className:"product_description_container",children:[Object(N.jsx)("div",{className:"product_description_image_container",children:Object(N.jsx)("img",{src:m})}),Object(N.jsxs)("div",{className:"product_description",children:[Object(N.jsx)("h2",{className:"heading-secondary",children:"2 x 1 Robot Vaccums!"}),Object(N.jsx)("p",{className:"paragraph",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ab doloribus quidem quo omnis fugit similique amet adipisci repellat quasi itaque nulla fuga, esse hic qui maxime unde quibusdam doloremque?"})]})]}),Object(N.jsxs)("div",{className:"product_description_container",children:[Object(N.jsxs)("div",{className:"product_description",children:[Object(N.jsx)("h2",{className:"heading-secondary",children:"50% Off Pans This Week!"}),Object(N.jsx)("p",{className:"paragraph",children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, eos? Ipsam soluta, natus neque cumque nesciunt quia esse delectus tempore officiis assumenda atque culpa dolorum facilis omnis labore nam quae."})]}),Object(N.jsx)("div",{className:"product_description_image_container",children:Object(N.jsx)("img",{src:f,alt:"mini mendiants"})})]})]})]})})},S=c(17),k=c(19),w="undefined"!=typeof sessionStorage.cart?JSON.parse(sessionStorage.getItem("cart")):{cartProducts:[],cartInfo:{totalItems:0,totalPrice:0}},I=function(e){fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(t){return e(t)}))},q=function(e,t){return new Promise((function(c,n){setTimeout((function(){try{var a=null;console.log("cart ",e),e&&e.cartProducts&&e.cartProducts.length>0&&(a=e.cartProducts.find((function(e){return e.id===t.id&&(e.quantity=+e.quantity+ +t.quantity,e)}))),a||e.cartProducts.push(t);var r=T(e,"total quantity"),i=T(e,"total price");L({cartProducts:e.cartProducts,cartInfo:{totalItems:r,totalPrice:i}}),c({cartProducts:e.cartProducts,cartInfo:{totalItems:r,totalPrice:i}})}catch(s){n(s)}}),1e3)}))},L=function(e){sessionStorage.setItem("cart",JSON.stringify(e))},T=function(e,t){if(e&&e.cartProducts&&e.cartProducts.length>0){if("total quantity"===t)return e.cartProducts.reduce((function(e,t){return e+ +t.quantity}),0);if("total price"===t)return e.cartProducts.reduce((function(e,t){return e+ +t.quantity*+t.price}),0).toFixed(2)}},F=(c(141),function(){return Object(N.jsx)("div",{id:"cool-loader",children:Object(N.jsxs)("div",{className:"react-spinner-loader-svg",children:[Object(N.jsx)("svg",{id:"triangle",width:"128",height:"128",viewBox:"-3 -4 39 39",children:Object(N.jsx)("polygon",{fill:"transparent",stroke:"cyan",strokeWidth:"1",points:"16,0 32,32 0,32"})})," LOADING"]})})}),A=(c(142),c(241)),E=c(232);function W(e){var t=e.rate,c=n.useState(2),a=Object(s.a)(c,2);a[0],a[1];return Object(N.jsx)(A.a,{sx:{"& > legend":{mt:2}},children:Object(N.jsx)(E.a,{name:"read-only",value:t,readOnly:!0})})}var B=function(e){var t=e.id,c=e.image,n=e.title,a=e.price,r=e.addToCart,i=e.quantity,s=e.ommit,o=e.rating.rate;return Object(N.jsxs)("div",{className:"product_container",children:[Object(N.jsxs)("div",{className:"product_content",children:[Object(N.jsx)("div",{className:"product_image",children:Object(N.jsx)(_.b,{to:"/product?pCode=".concat(t),children:Object(N.jsx)("img",{src:c,alt:"product image"})})}),Object(N.jsx)("h2",{className:"product_title",children:n}),Object(N.jsx)("div",{className:"product_price",children:"addToCart"!==s?"$ "+a:"$"+a+" X "+i}),Object(N.jsx)("div",{className:"product_rating",children:Object(N.jsx)(W,{rate:o})})]}),"addToCart"!==s?Object(N.jsx)(C,{link:window.location.pathname+window.location.search,clickAction:function(){return r(t)},children:" Add To Cart"}):null]})},J=Object(o.f)((function(e){var t=Object(n.useContext)(d),c=t.searchProducts,a=t.setSearchProducts,r=Object(n.useContext)(l),i=r.cart,s=r.setCart,o=Object(n.useContext)(b),j=o.LoadingSpinner;o.setLoadingSpinner;function u(e){var t=Object(k.a)(c);if(t.length>0){var n=t.find((function(t){if(t.id===e)return t.quantity=1,t}));q(i,n).then((function(e){s(Object(S.a)({},e))}))}}return Object(n.useEffect)((function(){e.history.location.state.searchKeyword;a(c)}),[c]),Object(N.jsx)("div",{className:"page_section listing_page_container",children:Object(N.jsx)("div",{className:"listing_products_container",children:c.length>0||j?c.map((function(e){return Object(N.jsx)(B,Object(S.a)({addToCart:u},e),e.id)})):Object(N.jsx)(F,{})})})})),M=(c(143),function(){var e=Object(n.useContext)(j),t=e.listingProducts,c=e.setListingProducts,a=Object(n.useContext)(l),r=a.cart,i=a.setCart,s=Object(n.useContext)(b),o=s.LoadingSpinner;s.setLoadingSpinner;function d(e){var c=Object(k.a)(t);if(c.length>0){var n=c.find((function(t){if(t.id===e)return t.quantity=1,t}));q(r,n).then((function(e){i(Object(S.a)({},e))}))}}return Object(n.useEffect)((function(){t&&!t.length&&I((function(e){c(Object(k.a)(e)),sessionStorage.setItem("listingProducts",JSON.stringify(e))}))}),[]),Object(N.jsx)("div",{className:"page_section listing_page_container",children:Object(N.jsx)("div",{className:"listing_products_container",children:t.length>0||o?t.map((function(e){return Object(N.jsxs)("div",{children:[" ",Object(N.jsx)(B,Object(S.a)({addToCart:d},e))," "]},e.id)})):Object(N.jsx)(F,{})})})}),D=(c(144),c(226)),R=function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)(!1),i=Object(s.a)(r,2),o=i[0],j=i[1],d=Object(n.useContext)(l),u=d.cart,b=d.setCart;return Object(n.useEffect)((function(){!function(e,t){fetch("https://fakestoreapi.com/products/".concat(e)).then((function(e){return e.json()})).then((function(e){return t(e)}))}(function(e){var t=new URLSearchParams(window.location.search).get(e);if(t)return t}("pCode"),(function(e){a(Object(S.a)(Object(S.a)({},e),{},{quantity:1}))}))}),[]),Object(N.jsx)("div",{className:"page_section productPage_container",children:Object(N.jsxs)("div",{className:"productPage_container_product_container",children:[Object(N.jsxs)("div",{className:"product_image_container",children:[Object(N.jsx)("img",{src:c.image,alt:"",className:"product_image"}),Object(N.jsxs)("div",{className:"product_reviews",children:[Object(N.jsx)("h3",{children:Object(N.jsx)(W,{rate:c&&c.rating&&c.rating.rate?c.rating.rate:null})}),Object(N.jsxs)("h3",{children:["Count: ",c&&c.rating&&c.rating.count?c.rating.count:null]})]})]}),Object(N.jsxs)("div",{className:"product_information",children:[Object(N.jsx)("div",{className:"product_name",children:Object(N.jsxs)("h1",{children:[" ",c.title," "]})}),Object(N.jsx)("div",{className:"product_description",children:Object(N.jsxs)("p",{children:[" ",c.description]})}),Object(N.jsxs)("div",{className:"product_quantity",children:[Object(N.jsx)("div",{className:"quantity_label",children:Object(N.jsx)("h2",{children:"QTY"})}),Object(N.jsx)("div",{className:"quantity_container",children:Object(N.jsx)("input",{onChange:function(e){return function(e){var t=Object(S.a)(Object(S.a)({},c),{},{quantity:+e.target.value});a(t)}(e)},type:"number",defaultValue:"1",name:"quantity",min:"1"})})]}),Object(N.jsx)("div",{className:"addTocartButton",children:Object(N.jsx)(C,{link:window.location.pathname+window.location.search,clickAction:function(){return function(){var e=Object(S.a)({},c);q(u,e).then((function(e){j(!0),b(Object(S.a)({},e))})),setTimeout((function(){j(!1)}),3500)}()},children:"Add To Cart"})}),Object(N.jsx)("br",{}),o?Object(N.jsx)(D.a,{variant:"filled",severity:"success",children:"Success You Have Added To Cart!"}):null]})]})})},U=(c(145),c(146),c(244)),Y=c(234),$=c(247),Q=c(227),K=c(233),V=c(221),z=c(240),X=c(248),G=c(228),H=c(238),Z=function(){var e=n.useState(""),t=Object(s.a)(e,2),c=t[0],a=t[1],r=n.useState(""),i=Object(s.a)(r,2),o=i[0],l=i[1],j=function(e,t){console.log(e.target.value),t(e.target.value)};return Object(N.jsxs)("div",{className:"contactForm_container",children:[Object(N.jsx)("h1",{children:"Contact Us"}),Object(N.jsxs)("form",{onSubmit:function(e){e.preventDefault()},children:[Object(N.jsxs)(A.a,{sx:{minWidth:120},children:[Object(N.jsxs)(U.a,{fullWidth:!0,children:[Object(N.jsx)(Y.a,{id:"filled-basic",label:"name",variant:"filled"}),Object(N.jsx)(Y.a,{id:"filled-basic",label:"email",variant:"filled"}),Object(N.jsx)("br",{})]}),Object(N.jsx)($.a,{id:"demo-simple-select-label",children:"Subject"}),Object(N.jsxs)(Q.a,{labelId:"demo-simple-select-label",id:"demo-simple-select",value:c,label:"subject",onChange:function(e){return j(e,a)},children:[Object(N.jsx)(K.a,{value:"technical",children:"Technical"}),Object(N.jsx)(K.a,{value:"order",children:"Order"}),Object(N.jsx)(K.a,{value:"return",children:"Item Return"})]})]}),Object(N.jsx)(Y.a,{id:"filled-multiline-flexible",label:"Message",multiline:!0,maxRows:4,value:o,onChange:function(e){return j(e,l)},variant:"filled"}),Object(N.jsxs)("div",{style:{width:"35%",marginTop:"2rem"},children:[Object(N.jsx)(V.a,{component:"legend",children:"Department"}),Object(N.jsxs)(z.a,{"aria-label":"gender",defaultValue:"customer service",name:"radio-buttons-group",children:[Object(N.jsx)(X.a,{value:"customer service",control:Object(N.jsx)(G.a,{}),label:"Order"}),Object(N.jsx)(X.a,{value:"male",control:Object(N.jsx)(G.a,{}),label:"Technical"}),Object(N.jsx)(X.a,{value:"other",control:Object(N.jsx)(G.a,{}),label:"Other"})]})]}),Object(N.jsx)(H.a,{type:"submit",variant:"contained",children:"Send"})]})]})},ee=function(){return Object(N.jsx)("div",{className:"page_section contact_page_container",children:Object(N.jsx)(Z,{})})},te=(c(148),c(149),c(235)),ce=c(243),ne=c(230),ae=c(242),re=(c(150),function(e){var t=e.cart,c=e.orderId,a=e.address,r=e.city,i=(e.creditCard,e.postalCode,t.cartInfo.totalPrice),s=Object(n.useMemo)((function(){return(.13*t.cartInfo.totalPrice).toFixed(2)}),[t.cartInfo.totalPrice]),o=Object(n.useMemo)((function(){return(+i+ +s).toFixed(2)}),[s,i]);return Object(N.jsx)("div",{className:"orderConfirmation_container",children:Object(N.jsxs)("div",{className:"orderConfirmation_content",children:[Object(N.jsx)("div",{className:"orderConfirmation_products",children:Object(N.jsx)("table",{children:Object(N.jsxs)("tb",{children:[Object(N.jsx)("th",{children:"Name"}),Object(N.jsx)("th",{children:"Quantity"}),Object(N.jsx)("th",{children:"Price"}),t.cartProducts.map((function(e){return Object(N.jsxs)("tr",{children:[Object(N.jsx)("td",{children:e.title}),Object(N.jsx)("td",{children:e.quantity}),Object(N.jsxs)("td",{children:["$ ",e.price]})]})}))]})})}),Object(N.jsxs)("div",{className:"orderConfirmation_user_details",children:[Object(N.jsx)("h2",{children:"Name: John"}),Object(N.jsxs)("h2",{children:["Shipping Address : ",a]}),Object(N.jsxs)("h2",{children:["City : ",r]})]}),Object(N.jsx)("br",{}),Object(N.jsxs)("div",{className:"orderConfirmation_price_details",children:[Object(N.jsxs)("h2",{children:["Order Number : ",c]}),Object(N.jsxs)("h2",{children:["Subtotal : ",i]}),Object(N.jsxs)("h2",{children:["Tax: ",s]}),Object(N.jsxs)("h2",{children:["Total: ",o]})]})]})})}),ie=["Billing","Payment","Order Confirmation"];function se(e){var t=e.cart,c=e.checkoutStepListener,r=e.setCart,i=a.a.useState(0),o=Object(s.a)(i,2),l=o[0],j=o[1],d=a.a.useState({}),u=Object(s.a)(d,2),b=u[0],h=u[1],O=a.a.useState(0),x=Object(s.a)(O,2),m=x[0],f=x[1],p=a.a.useState(""),g=Object(s.a)(p,2),v=g[0],_=g[1],C=a.a.useState(""),y=Object(s.a)(C,2),P=y[0],k=y[1],w=a.a.useState(0),I=Object(s.a)(w,2),q=I[0],L=I[1],T=a.a.useState(0),F=Object(s.a)(T,2),E=F[0],W=F[1],J=a.a.useState(0),M=Object(s.a)(J,2),D=M[0],R=M[1],$=a.a.useState(""),Q=Object(s.a)($,2),K=Q[0],z=Q[1],X=a.a.useState(""),G=Object(s.a)(X,2),Z=G[0],ee=G[1],se=a.a.useState({}),oe=Object(s.a)(se,2),le=oe[0],je=oe[1];Object(n.useEffect)((function(){c(l),be()&&(je(Object(S.a)({},t)),r({cartProducts:[],cartInfo:{totalItems:0,totalPrice:0}}),sessionStorage.removeItem("cart"))}),[l]);var de=function(){return ie.length},ue=function(){return Object.keys(b).length},be=function(){return ue()===de()},he=function(){var e=l!==de()-1||be()?l+1:ie.findIndex((function(e,t){return!(t in b)}));j(e)},Oe=function(e,t){t(e.target.value)},xe=function(){ee(function(){for(var e=[],t=0;t<9;t++){var c=Math.floor(9*Math.random())+1;e.push(c)}return e.join("")}())};return Object(N.jsx)("div",{className:"checkoutstep_container",children:Object(N.jsxs)(A.a,{sx:{width:"100%"},children:[Object(N.jsx)(te.a,{nonLinear:!0,activeStep:l,children:ie.map((function(e,t){return Object(N.jsx)(ce.a,{completed:b[t],children:Object(N.jsx)(ne.a,{color:"inherit",onClick:(c=t,function(){j(c)}),children:e})},e);var c}))}),Object(N.jsx)("div",{children:be()&&le.cartProducts&&le.cartProducts.length>0?Object(N.jsxs)(a.a.Fragment,{children:[Object(N.jsx)(ae.a,{sx:{mt:2,mb:1},children:Object(N.jsx)("h2",{children:" All steps are completed, thank you for your order! "})}),Object(N.jsxs)(A.a,{sx:{display:"flex",flexDirection:"row",pt:2},children:[Object(N.jsx)(A.a,{sx:{flex:"1 1 auto"}}),Object(N.jsx)(re,{cart:le,orderId:Z,address:v,creditCard:m,postalCode:P,city:K})]})]}):Object(N.jsxs)(a.a.Fragment,{children:[Object(N.jsxs)(ae.a,{sx:{mt:2,mb:1},children:["Step ",l+1]}),l+1===1?Object(N.jsxs)(U.a,{style:{width:"100%"},children:[Object(N.jsx)(V.a,{component:"legend",children:"Billing Address"}),Object(N.jsx)(Y.a,{fullWidth:!0,value:v,onChange:function(e){return Oe(e,_)}}),Object(N.jsx)(V.a,{component:"legend",children:"City"}),Object(N.jsx)(Y.a,{fullWidth:!0,value:K,onChange:function(e){return Oe(e,z)}}),Object(N.jsx)(V.a,{component:"legend",children:"Postal Code"}),Object(N.jsx)(Y.a,{fullWidth:!0,value:P,onChange:function(e){return Oe(e,k)}})]}):l+1===2?Object(N.jsxs)(U.a,{style:{width:"100%"},children:[Object(N.jsx)(V.a,{component:"legend",children:"Credit Card"}),Object(N.jsx)(Y.a,{name:"creditCard",value:m,onChange:function(e){return Oe(e,f)},fullWidth:!0}),Object(N.jsx)(V.a,{component:"legend",children:"Expiry"}),Object(N.jsx)(Y.a,{fullWidth:!0,value:q,onChange:function(e){return Oe(e,L)}}),Object(N.jsx)(V.a,{component:"legend",children:"Code"}),Object(N.jsx)(Y.a,{fullWidth:!0,value:E,onChange:function(e){return Oe(e,W)}}),Object(N.jsx)(V.a,{component:"legend",children:"Coupon"}),Object(N.jsx)(Y.a,{fullWidth:!0,value:D,onChange:function(e){return Oe(e,R)}})]}):l+1===3?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("h1",{children:"Order Confirmation"}),Object(N.jsx)("div",{className:"order_confirmation_container",children:t&&t.cartProducts.length>0?t.cartProducts.map((function(e){return Object(N.jsx)(B,Object(S.a)({ommit:"addToCart"},e),e.id)})):null}),Object(N.jsxs)("h2",{children:["Tax: ",(.13*t.cartInfo.totalPrice).toFixed(2)]}),Object(N.jsxs)("h2",{children:["Total Price: ",t.cartInfo.totalPrice]})]}):null,Object(N.jsxs)(A.a,{sx:{display:"flex",flexDirection:"row",pt:2},children:[Object(N.jsx)(H.a,{color:"inherit",disabled:0===l,onClick:function(){j((function(e){return e-1}))},sx:{mr:1},children:"Back"}),Object(N.jsx)(A.a,{sx:{flex:"1 1 auto"}}),Object(N.jsx)(H.a,{onClick:he,sx:{mr:1},children:"Next"}),l!==ie.length&&(b[l]?Object(N.jsxs)(ae.a,{variant:"caption",sx:{display:"inline-block"},children:["Step ",l+1," already completed"]}):Object(N.jsx)(H.a,{onClick:function(){var e=b;e[l]=!0,h(e),he(),xe()},children:ue()===de()-1?"Process Order":"Complete Step"}))]})]})})]})})}var oe=function(){var e=Object(n.useContext)(l),t=e.cart,c=e.setCart,a=Object(n.useState)(!1),r=Object(s.a)(a,2),i=r[0],o=r[1],j=Object(n.useState)(0),d=Object(s.a)(j,2),u=d[0],b=d[1];Object(n.useEffect)((function(){t&&t.cartProducts&&t.cartProducts.length>0?o(!0):o(!1)}),[t]);return Object(N.jsx)("div",{className:"page_section checkout_page_container",children:i||u>2?Object(N.jsx)(se,{checkoutStepListener:function(e){b(e)},cart:t,setCart:c}):Object(N.jsx)("h1",{style:{marginTop:"5rem"},children:"Your cart is empty! add products to cart before checking out"})})},le=(c(151),c(152),function(e){return Object(N.jsx)("li",{className:"navLink",children:Object(N.jsx)(_.b,{className:"navLink_link",to:e.link,children:e.children})})}),je=(c(153),c(154),c(53)),de=function(e){var t=e.image,c=e.title,n=e.price,a=e.quantity,r=e.id,i=e.removeProduct,s=e.updateQuantity;return Object(N.jsx)("div",{className:"cartSliderProduct_container",children:Object(N.jsxs)("div",{className:"cartSliderProduct_content",children:[Object(N.jsx)("div",{className:"cartSliderProduct_image",children:Object(N.jsx)("img",{src:t,alt:""})}),Object(N.jsx)("div",{className:"product_name_container",children:Object(N.jsx)("h2",{className:"product_name",children:c})}),Object(N.jsxs)("div",{className:"product_price",children:[Object(N.jsx)("div",{onClick:function(){return s(r,"decrease")},className:"product_btn_quantity_decrease",children:Object(N.jsx)(je.a,{})}),n," X ",a,Object(N.jsx)("div",{onClick:function(){return s(r,"increase")},className:"product_btn_quantity_increase",children:Object(N.jsx)(je.b,{})})]}),Object(N.jsx)("div",{onClick:function(){return i(r)},className:"product_btn_remove",children:Object(N.jsx)("p",{children:"remove"})})]})})},ue=function(e){var t=e.activeStatus,c=e.onMouseLeave,a=Object(n.useContext)(l),r=a.cart,i=a.setCart;Object(n.useEffect)((function(){}),[t]);var s=function(e){!function(e,t,c){var n=t.cartProducts.filter((function(t){return t.id!==e})),a=T({cartProducts:n},"total quantity"),r=T({cartProducts:n},"total price");L(t={cartProducts:n,cartInfo:{totalItems:a,totalPrice:r}}),c(t)}(e,r,(function(e){i(Object(S.a)({},e))}))},o=function(e,t){!function(e,t,c,n){var a=t.cartProducts.reduce((function(t,n){return n.id===e&&n.quantity&&"increase"===c?t.push(Object(S.a)(Object(S.a)({},n),{},{quantity:+n.quantity+1})):n.id===e&&1===n.quantity&&"decrease"===c||(n.id===e&&n.quantity>=1&&"decrease"===c?t.push(Object(S.a)(Object(S.a)({},n),{},{quantity:+n.quantity-1})):t.push(n)),t}),[]),r=T({cartProducts:a},"total quantity"),i=T({cartProducts:a},"total price");L(t={cartProducts:a,cartInfo:{totalItems:r,totalPrice:i}}),n(t)}(e,r,t,(function(e){i(Object(S.a)({},e))}))};return Object(N.jsx)("div",{onMouseLeave:function(){return c()},className:"addToCartSlider_container addToCartSlider_container--".concat(t),children:Object(N.jsxs)("div",{className:"addToCartSlider_content",children:[r.cartProducts&&r.cartProducts.length>0?r.cartProducts.map((function(e){return Object(N.jsx)(de,Object(S.a)({updateQuantity:o,removeProduct:s},e),e.id)})):Object(N.jsx)("h1",{style:{textAlign:"center"},children:"There are no items on cart"}),Object(N.jsx)("div",{className:"cart_total_amount",children:r.cartInfo&&r.cartInfo.totalPrice?Object(N.jsxs)("h1",{style:{textAlign:"center"},children:["Total Price: $",r.cartInfo.totalPrice]}):null}),Object(N.jsx)(C,{disabled:!(r.cartProducts&&r.cartProducts.length>0),link:"/checkout",children:"Checkout"})]})})},be=(c(155),c(237)),he=c(229),Oe=c(222);function xe(e){var t=e.name,c=e.login,a=Object(n.useState)(!1),r=Object(s.a)(a,2),i=r[0],o=r[1],l=Object(n.useState)(""),j=Object(s.a)(l,2),d=j[0],u=j[1];return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(H.a,{onClick:function(){return o(!0)},children:t}),Object(N.jsx)(he.a,{"aria-labelledby":"transition-modal-title","aria-describedby":"transition-modal-description",open:i,onClose:function(){return o(!1)},closeAfterTransition:!0,BackdropComponent:be.a,BackdropProps:{timeout:500},children:Object(N.jsx)(Oe.a,{in:i,children:Object(N.jsx)(A.a,{className:"modal_box_override",children:Object(N.jsxs)("div",{className:"login_modal_content",children:[Object(N.jsx)(ae.a,{id:"transition-modal-title",variant:"h3",component:"h2",children:"Welcome Back!"}),Object(N.jsx)(Y.a,{id:"outlined-basic",value:"John",label:"name",variant:"outlined"}),Object(N.jsx)(Y.a,{id:"outlined-basic",value:d,onChange:function(e){return function(e,t){t(e.target.value)}(e,u)},label:"email",variant:"outlined"}),Object(N.jsx)(Y.a,{id:"outlined-basic",value:"mor_2314",label:"Username",variant:"outlined"}),Object(N.jsx)(Y.a,{id:"outlined-basic",value:"83r5^_",label:"password",variant:"outlined"}),Object(N.jsx)(H.a,{onClick:function(){return c()},children:"Login"})]})})})})]})}var me=c(104),fe=c(105),pe=(c(156),Object(o.f)((function(e){var t=function(){var e=Object(n.useState)(window.innerWidth),t=Object(s.a)(e,2),c=t[0],a=t[1],r=function(){a(window.innerWidth)};return Object(n.useEffect)((function(){return window.addEventListener("resize",r),function(){window.removeEventListener("resize",r)}}),[]),c<=1200}(),c=Object(n.useState)(!1),a=Object(s.a)(c,2),r=a[0],i=a[1],o=Object(n.useContext)(l).cart,j=Object(n.useContext)(u),h=j.login,O=j.setLogin,x=Object(n.useContext)(d).setSearchProducts,m=Object(n.useContext)(b).setLoadingSpinner,f=Object(n.useState)(!1),p=Object(s.a)(f,2),g=p[0],v=p[1];Object(n.useEffect)((function(){t||i(!1)}),[t]);var _=function(){var e;e=function(e){O(!0)},fetch("https://fakestoreapi.com/auth/login",{method:"POST",body:JSON.stringify({username:"johnd",password:"m38rmF$"}),headers:{"content-type":"application/json",accept:"application/json"}}).then((function(e){return e.json()})).then((function(t){sessionStorage.setItem("userLogin",JSON.stringify({name:"John",username:"johnd",userId:t.token})),e(t)}))},C=function(){localStorage.removeItem("userLogin"),O(!1)};return Object(N.jsxs)("div",{className:"navbar",children:[Object(N.jsx)("div",{className:"navbar_logo_container",children:Object(N.jsx)("a",{href:"/gtm_dev_implementation",children:Object(N.jsx)(me.a,{})})}),Object(N.jsx)("div",{className:"navbar_search_bar_container",children:Object(N.jsx)("input",{type:"text",className:"search_input",placeholder:"search",onKeyDown:function(t){if("Enter"===t.key){m(!0);var c=t.target.value;I((function(e){var t=e.filter((function(e){if(e.title.toLowerCase().indexOf(c)>-1)return e}));x(t),m(!1)})),e.history.push({pathname:"/search_results",search:"?q=".concat(c),state:{searchKeyword:c}})}}})}),r?Object(N.jsx)("div",{className:"navbar_links_toggle_container",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)(le,{link:"/contact",children:"Contact Us"}),Object(N.jsx)(le,{link:"/catalogue",children:"Catalogue"}),h?Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("br",{}),Object(N.jsx)("button",{className:"logout_btn",onClick:function(){return C()},children:"Logout"})," "]}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)("br",{}),Object(N.jsx)("button",{className:"login_btn",children:Object(N.jsx)(xe,{login:_,name:"Login"})})]})]})}):null,Object(N.jsx)("div",{className:"navbar_links_container",children:Object(N.jsx)("ul",{children:t?Object(N.jsx)(fe.a,{onClick:function(){return i(!r)}}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(le,{link:"/contact",children:"Contact Us"}),Object(N.jsx)(le,{link:"/catalogue",children:"Catalogue"}),h?Object(N.jsx)("button",{onClick:function(){return C()},className:"logout_btn",children:"Logout"}):Object(N.jsx)("button",{className:"login_btn",children:Object(N.jsx)(xe,{login:_,name:"Login"})})]})})}),Object(N.jsx)(je.c,{onClick:function(){return v(!g)},onMouseEnter:function(){return v(!0)}}),Object(N.jsx)("div",{className:"cart_quantity",children:Object(N.jsx)("h5",{children:o.cartInfo&&o.cartInfo.totalItems||0})}),Object(N.jsx)(ue,{onMouseLeave:function(){return v(!1)},activeStatus:g})]})}))),ge=(c(158),function(){return Object(N.jsx)("div",{className:"footer_container",children:Object(N.jsxs)("ul",{children:[Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://www.facebook.com/",target:"_blank",rel:"noreferrer",children:"Facebook"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://www.google.com/search?q=blogs",rel:"noreferrer",children:"Blog"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"https://www.instagram.com/",target:"_blank",rel:"noreferrer",children:"Instagram"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"#",children:"Newsfeed"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"#",children:"Upcoming Products"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"#",children:"Affiliates"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"#",children:"Careers"})}),Object(N.jsx)("li",{children:Object(N.jsx)("a",{href:"#",children:"Refund"})})]})})});c(159);var ve=Object(o.f)((function(){var e=Object(n.useState)({}),t=Object(s.a)(e,2),c=t[0],a=t[1],r=Object(n.useState)([]),i=Object(s.a)(r,2),h=i[0],O=i[1],x=Object(n.useState)([]),m=Object(s.a)(x,2),f=m[0],p=m[1],g=Object(n.useState)(!1),v=Object(s.a)(g,2),_=v[0],C=v[1],y=Object(n.useState)(!1),S=Object(s.a)(y,2),k=S[0],I=S[1];return Object(n.useEffect)((function(){var e=w&&w.cartProducts&&w.cartProducts.length>0?JSON.parse(sessionStorage.cart):w;a(e)}),[]),Object(N.jsx)("div",{className:"App",children:Object(N.jsx)(b.Provider,{value:{loadingSpinner:k,setLoadingSpinner:I},children:Object(N.jsx)(u.Provider,{value:{login:_,setLogin:C},children:Object(N.jsx)(d.Provider,{value:{searchProducts:f,setSearchProducts:p},children:Object(N.jsx)(j.Provider,{value:{listingProducts:h,setListingProducts:O},children:Object(N.jsxs)(l.Provider,{value:{cart:c,setCart:a},children:[Object(N.jsx)(pe,{}),Object(N.jsxs)(o.c,{children:[Object(N.jsx)(o.a,{path:"/search_results",component:J}),Object(N.jsx)(o.a,{path:"/catalogue",component:M}),Object(N.jsx)(o.a,{path:"/contact",component:ee}),Object(N.jsx)(o.a,{path:"/product",component:R}),Object(N.jsx)(o.a,{path:"/checkout",component:oe}),Object(N.jsx)(o.a,{exact:!0,path:"/gtm_dev_implementation",component:P})]}),Object(N.jsx)(ge,{})]})})})})})})})),_e=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,250)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),n(e),a(e),r(e),i(e)}))};i.a.render(Object(N.jsx)(a.a.StrictMode,{children:Object(N.jsx)(_.a,{children:Object(N.jsx)(ve,{})})}),document.getElementById("root")),_e()}},[[160,1,2]]]);
//# sourceMappingURL=main.560307eb.chunk.js.map