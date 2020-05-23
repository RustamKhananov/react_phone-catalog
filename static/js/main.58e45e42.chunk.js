(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(20).concat([function(e,t,a){e.exports=a(48)},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(18),s=a.n(c),o=a(4),l=a(1);var i=a(2),u=function(){return n.a.createElement("label",{className:"Logo"},n.a.createElement(i.b,{className:"Logo__link",to:"/"}))},m=(a(30),function(e){var t=e.links;return n.a.createElement("nav",{className:"Nav"},n.a.createElement("ul",{className:"Nav__list"},n.a.createElement("li",{className:"Nav__item"},n.a.createElement(u,null)),t.map((function(e){var t=e.address,a=e.title,r=e.isOuter;return n.a.createElement("li",{key:t+a+r,className:"Nav__item"},n.a.createElement("label",{className:"Nav__label"},r?n.a.createElement("a",{className:"Nav__link",target:"_blank",href:t},a):n.a.createElement(i.c,{className:"Nav__link",exact:!0,to:t},a)))}))))}),d=(a(31),function(e){var t=e.favorites;return n.a.createElement("label",{className:"FavoritesIcon"},t.length>0?n.a.createElement("span",{className:"FavoritesIcon__count"},t.length):"",n.a.createElement(i.c,{className:"FavoritesIcon__link",to:"/favorites"}))}),p=(a(32),function(e){var t=e.cart;return n.a.createElement("label",{className:"CartIcon"},t.length>0?n.a.createElement("span",{className:"CartIcon__count"},t.length):"",n.a.createElement(i.c,{className:"CartIcon__link",id:"CartIcon__link",to:"/cart"}))}),f=(a(33),a(34),function(e){var t=e.count,a=e.active,r=new Array(t).fill(0);return n.a.createElement("div",null,r.map((function(e,t){return n.a.createElement("span",{className:a===t+1?"dots__dot dots__dot--active":"dots__dot"})})))}),_=(a(35),function(e){var t=e.images;return n.a.createElement("div",null,t.map((function(e){return n.a.createElement("img",{src:e.pictureUrl,alt:e.phoneName})})))}),g=function(){return n.a.createElement("div",{className:"promo-slider"},n.a.createElement("div",{className:"promo-slider__wrapper"},n.a.createElement("button",{className:"promo-slider__button promo-slider__button--left"}),n.a.createElement("div",{className:"promo-slider__frame"},n.a.createElement(_,{images:[]})),n.a.createElement("button",{className:"promo-slider__button promo-slider__button--right"})),n.a.createElement(f,{count:3,active:2})," // Dots under slider.")},E=function(){return n.a.createElement("div",{className:"HomePage"},n.a.createElement(g,null))},v=(a(36),function(){var e=Object(l.f)(),t=Object(l.g)(),a=new URLSearchParams(t.search);return n.a.createElement("div",{className:"SearchField"},n.a.createElement("input",{type:"text",className:"SearchField__input",placeholder:"Search in phones...",value:a.get("filter")||"",onChange:function(t){a.set("filter",t.target.value),e.push({search:a.toString()})}}),n.a.createElement("button",{type:"submit",className:a.get("filter")?"SearchField__button":"SearchField__button SearchField__button--magnifier",onClick:function(){a.get("filter")&&(a.set("filter",""),e.push({search:a.toString()}))}}))}),h=(a(37),a(8)),b=(a(38),a(39),function(e){var t=e.product,a=e.cart,c=e.setCart,s=e.favorites,l=e.setFavorites,u=t.imageUrl,m=t.name,d=t.price,p=t.discount,f=t.screen,_=t.capacity,g=t.ram,E=d-d*p/100,v=Object(r.useState)(s.filter((function(e){return e.id===t.id})).length>0),b=Object(o.a)(v,2),N=b[0],C=b[1],O=Object(r.useState)(a.filter((function(e){return e.id===t.id})).length>0),P=Object(o.a)(O,2),S=P[0],j=P[1],y=Object(r.useState)(a.filter((function(e){return e.id===t.id})).length),w=Object(o.a)(y,2),F=w[0],k=w[1];Object(r.useEffect)((function(){C(s.filter((function(e){return e.id===t.id})).length>0)}),[s]),Object(r.useEffect)((function(){j(a.filter((function(e){return e.id===t.id})).length>0),k(a.filter((function(e){return e.id===t.id})).length)}),[a]);var I;switch(t.type){case"phone":I="/phones/";break;case"tablet":I="/tablets/";break;default:I="accessorise"}return n.a.createElement("div",{className:"ProductCard"},n.a.createElement("img",{className:"ProductCard__img",src:u,alt:m}),n.a.createElement(i.b,{to:I+t.id,className:"ProductCard__title"},m),p>0?n.a.createElement("div",{className:"ProductCard__price-wrapper"},n.a.createElement("span",{className:"ProductCard__price"},"$"+E),n.a.createElement("span",{className:"ProductCard__price ProductCard__price--old"},"$"+d)):n.a.createElement("div",{className:"ProductCard__price-wrapper"},n.a.createElement("span",{className:"ProductCard__price"},"$"+E)),n.a.createElement("div",{className:"ProductCard__description"},n.a.createElement("span",{className:"ProductCard__feature"},n.a.createElement("span",{className:"ProductCard__feature--title ProductCard__feature"},"Screen"),n.a.createElement("span",{className:"ProductCard__feature--value ProductCard__feature"},f)),n.a.createElement("span",{className:"ProductCard__feature"},n.a.createElement("span",{className:"ProductCard__feature--title ProductCard__feature"},"Capacity"),n.a.createElement("span",{className:"ProductCard__feature--value ProductCard__feature"},_)),n.a.createElement("span",{className:"ProductCard__feature"},n.a.createElement("span",{className:"ProductCard__feature--title ProductCard__feature"},"RAM"),n.a.createElement("span",{className:"ProductCard__feature--value ProductCard__feature"},g))),n.a.createElement("div",{className:"ProductCard__buttons-wrapper"},n.a.createElement("button",{className:S?"ProductCard__add-to-cart ProductCard__add-to-cart--added":"ProductCard__add-to-cart",onClick:function(){c([].concat(Object(h.a)(a),[t]))}},S?"".concat(F,"  added to cart"):"Add to cart"),n.a.createElement("button",{className:N?"ProductCard__add-to-fav ProductCard__add-to-fav--added":"ProductCard__add-to-fav",onClick:function(){l(N?Object(h.a)(s).filter((function(e){return e.id!==t.id})):[].concat(Object(h.a)(s),[t]))}})))}),N=(a(40),function(e){var t=e.products,a=e.cart,r=e.setCart,c=e.favorites,s=e.setFavorites;return n.a.createElement("div",{className:"MainFrame"},t.map((function(e,t){return n.a.createElement(b,{key:e.id+t,product:e,cart:a,setCart:r,favorites:c,setFavorites:s})})))}),C=(a(41),function(e){var t=e.pagesCount,a=Object(l.g)(),c=Object(l.f)(),s=new URLSearchParams(a.search),o=parseInt(s.get("page")||"1"),i=new Array(Math.ceil(t)).fill(0),u=o===i.length,m=1===o,d=function(e){return">"===e.target.name?(s.set("page",(o+1).toString()),void c.push({search:s.toString()})):"<"===e.target.name?(s.set("page",(o-1).toString()),void c.push({search:s.toString()})):(s.set("page",(+e.target.name+1).toString()),void c.push({search:s.toString()}))};return Object(r.useEffect)((function(){s.set("page",o.toString()),c.push({search:s.toString()})}),[o]),n.a.createElement("div",{className:"Pagination"},n.a.createElement("button",{className:"Pagination__button Pagination__button--arrow",type:"button",name:"<",disabled:m,onClick:d},"<"),i.map((function(e,t){return n.a.createElement("button",{key:t,className:t+1===o?"Pagination__button Pagination__button--active":"Pagination__button",name:t.toString(),onClick:d,type:"button"},t+1)})),n.a.createElement("button",{className:"Pagination__button Pagination__button--arrow",type:"button",name:">",disabled:u,onClick:d},">"))}),O=(a(42),function(){var e=Object(l.g)(),t=new URLSearchParams(e.search),a=Object(l.f)();return n.a.createElement("div",{className:"SortBy"},n.a.createElement("span",{className:"SortBy__legend"},"Sort by"),n.a.createElement("br",null),n.a.createElement("select",{className:"SortBy__select",onChange:function(e){t.set("sort_type",e.target.value),a.push({search:t.toString()})},value:t.get("sort_type")||""},[{value:"",text:"Choose"},{value:"age",text:"Newest"},{value:"name",text:"Alphabetically"},{value:"low_price",text:"Low price"},{value:"high_price",text:"High price"}].map((function(e){return n.a.createElement("option",{key:e.value,value:e.value},e.text)}))))}),P=(a(43),function(){var e=Object(l.g)(),t=new URLSearchParams(e.search),a=Object(l.f)();return n.a.createElement("div",{className:"ItemsOnPageSelect"},n.a.createElement("span",{className:"ItemsOnPageSelect__legend"},"Items on page"),n.a.createElement("br",null),n.a.createElement("select",{className:"ItemsOnPageSelect__per-page",onChange:function(e){t.set("per_page",e.target.value),a.push({search:t.toString()})},value:t.get("per_page")||""},["8","16","32","64","All"].map((function(e){return n.a.createElement("option",{key:e,value:e},e)}))))}),S=function(e){var t=e.products,a=e.cart,c=e.setCart,s=e.favorites,i=e.setFavorites,u=Object(r.useState)(t),m=Object(o.a)(u,2),d=m[0],p=m[1],f=Object(r.useState)(d),_=Object(o.a)(f,2),g=_[0],E=_[1],v=Object(r.useState)(g),b=Object(o.a)(v,2),S=b[0],j=b[1],y=Object(l.f)(),w=Object(l.g)(),F=new URLSearchParams(w.search),k=(F.get("filter")||"").toLowerCase(),I=(F.get("sort_type")||"age").toLowerCase(),A=parseInt(F.get("page")||"1"),L=parseInt(F.get("per_page")||"8");return Object(r.useEffect)((function(){F.set("page",A.toString()),F.set("per_page",L.toString()),F.set("sort_type",I),y.push({search:F.toString()})}),[]),Object(r.useEffect)((function(){""!==I?("name"===I&&E(Object(h.a)(d).sort((function(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())}))),"age"===I&&E(Object(h.a)(d).sort((function(e,t){return e.age-t.age}))),"low_price"===I&&(E(Object(h.a)(d).sort((function(e,t){return e.price*(100-e.discount)/100-t.price*(100-t.discount)/100}))),console.log(g)),"high_price"===I&&E(Object(h.a)(d).sort((function(e,t){return t.price*(100-t.discount)/100-e.price*(100-e.discount)/100})))):E(d)}),[d,I]),Object(r.useEffect)((function(){p(""!==k?t.filter((function(e){return e.name.toLowerCase().includes(k)})):t)}),[t,k]),Object(r.useEffect)((function(){F.set("page","1"),y.push({search:F.toString()})}),[L,I]),Object(r.useEffect)((function(){if(L){var e=(A-1)*L,t=e+L;j(g.slice(e,t))}else j(g)}),[g,A,L]),n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"Catalog__models-count"},"".concat(d.length," models")),n.a.createElement("div",{className:"Catalog__select-wrapper"},n.a.createElement(O,null),n.a.createElement(P,null)),n.a.createElement("div",null,n.a.createElement(N,{products:S,cart:a,setCart:c,favorites:s,setFavorites:i})),n.a.createElement(C,{pagesCount:g.length/L||1}))},j=(a(44),function(e){var t=e.products,a=e.cart,r=e.setCart,c=e.favorites,s=e.setFavorites,o=t.filter((function(e){return"phone"===e.type}));return n.a.createElement("div",{className:"PhonesPage"},n.a.createElement("h1",{className:"PhonesPage__h1"},"Mobile phones"),n.a.createElement(S,{products:o,cart:a,setCart:r,favorites:c,setFavorites:s}))}),y=(a(45),function(e){var t=e.products,a=e.cart,r=e.setCart,c=e.favorites,s=e.setFavorites,o=t.filter((function(e){return"tablet"===e.type}));return n.a.createElement("div",{className:"TabletsPage"},n.a.createElement("h1",{className:"TabletsPage__h1"},"Tablets"),n.a.createElement(S,{products:o,cart:a,setCart:r,favorites:c,setFavorites:s}))}),w=(a(46),function(e){var t=e.products,a=e.cart,r=e.setCart,c=e.favorites,s=e.setFavorites,o=t.filter((function(e){return"accessorie"===e.type||!e.type}));return n.a.createElement("div",{className:"AccessoriesPage"},n.a.createElement("h1",{className:"Accessories__h1"},"Accessories"),n.a.createElement(S,{products:o,cart:a,setCart:r,favorites:c,setFavorites:s}))}),F=function(e){var t=e.productId,a=Object(r.useState)(),c=Object(o.a)(a,2),s=c[0],l=c[1];return Object(r.useEffect)((function(){(function(e){return fetch("https://mate-academy.github.io/react_phone-catalog/api/products/".concat(e)).then((function(e){return e.json()}))})(t).then((function(e){l(e)}))}),[]),n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",null,t),n.a.createElement("p",null,JSON.stringify(s)))},k=(a(47),function(e){var t=e.cart,a=e.setCart,r=e.favorites,c=e.setFavorites;return n.a.createElement("div",{className:"PhonesPage"},n.a.createElement("h1",{className:"PhonesPage__h1"},"Favorites"),n.a.createElement(S,{products:r,cart:t,setCart:a,favorites:r,setFavorites:c}))}),I=function(){var e=Object(r.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1];Object(r.useEffect)((function(){fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){return e.json()})).then((function(e){c(e)}))}),[]);var s=a,i=Object(r.useState)(JSON.parse(localStorage.getItem("PhonesCatalog_Cart")||"[]")),f=Object(o.a)(i,2),_=f[0],g=f[1],h=Object(r.useState)(JSON.parse(localStorage.getItem("PhonesCatalog_Favorites")||"[]")),b=Object(o.a)(h,2),N=b[0],C=b[1];Object(r.useEffect)((function(){localStorage.setItem("PhonesCatalog_Cart",JSON.stringify(_))}),[_]),Object(r.useEffect)((function(){localStorage.setItem("PhonesCatalog_Favorites",JSON.stringify(N))}),[N]);return n.a.createElement("div",{className:"App"},n.a.createElement("header",{className:"App__header"},n.a.createElement("div",{className:"App__header-wrapper"},n.a.createElement(m,{links:[{title:"HOME",address:"/#",isOuter:!1},{title:"PHONES",address:"/phones",isOuter:!1},{title:"TABLETS",address:"/tablets",isOuter:!1},{title:"ACCESSORIES",address:"/accessories",isOuter:!1}]}),n.a.createElement("div",{className:"App__header-right-wrapper"},n.a.createElement(v,null),n.a.createElement(d,{favorites:N}),n.a.createElement(p,{cart:_})))),n.a.createElement("main",{className:"App__main"},n.a.createElement(l.c,null,a.map((function(e){var t="/";switch(e.type){case"phone":t="/phones/";break;case"tablet":t="/tablets/";break;default:t="/accessories/"}return n.a.createElement(l.a,{key:e.id,path:"".concat(t+e.id)},n.a.createElement(F,{productId:e.id}))})),n.a.createElement(l.a,{path:"/phones"},n.a.createElement(j,{products:s,cart:_,setCart:g,favorites:N,setFavorites:C})),n.a.createElement(l.a,{path:"/tablets"},n.a.createElement(y,{products:s,cart:_,setCart:g,favorites:N,setFavorites:C})),n.a.createElement(l.a,{path:"/accessories"},n.a.createElement(w,{products:s,cart:_,setCart:g,favorites:N,setFavorites:C})),n.a.createElement(l.a,{path:"/favorites"},n.a.createElement(k,{products:s,cart:_,setCart:g,favorites:N,setFavorites:C})),n.a.createElement(l.a,{path:"/"},n.a.createElement(E,null)))),n.a.createElement("footer",{className:"App__footer"},n.a.createElement(u,null),n.a.createElement(m,{links:[{title:"GITHUB",address:"http://www.github.com",isOuter:!0},{title:"CONTACTS",address:"/contacts",isOuter:!1},{title:"RIGHTS",address:"/rights",isOuter:!1}]})))};s.a.render(n.a.createElement(i.a,null,n.a.createElement(I,null)),document.getElementById("root"))}]),[[20,1,2]]]);
//# sourceMappingURL=main.58e45e42.chunk.js.map