(this["webpackJsonpreact_phone-catalog"]=this["webpackJsonpreact_phone-catalog"]||[]).push([[0],Array(20).concat([function(e,t,a){e.exports=a(63)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(18),s=a.n(r),l=a(1),o=a(4);var i,u=a(3),m=a(2),d=(a(25),function(e){var t=e.product,a=t.imageUrl,r=t.name,s=t.price,o=t.discount,i=t.screen,d=t.capacity,_=t.ram,p=Object(c.useContext)(Y),f=p.cart,E=p.setCart,g=p.favorites,h=p.setFavorites,b=s-s*o/100,N=Object(c.useState)(g.filter((function(e){return e.id===t.id})).length>0),C=Object(l.a)(N,2),v=C[0],S=C[1],O=Object(c.useState)(f.filter((function(e){return e.id===t.id})).length>0),y=Object(l.a)(O,2),j=y[0],P=y[1],k=Object(c.useState)(f.filter((function(e){return e.id===t.id})).length),w=Object(l.a)(k,2),B=w[0],T=w[1];Object(c.useEffect)((function(){S(g.filter((function(e){return e.id===t.id})).length>0)}),[g]),Object(c.useEffect)((function(){P(f.filter((function(e){return e.id===t.id})).length>0),T(f.filter((function(e){return e.id===t.id})).length)}),[f]);var I;switch(t.type){case"phone":I="/phones/";break;case"tablet":I="/tablets/";break;default:I="/accessories/"}return n.a.createElement("div",{className:"ProductCard"},n.a.createElement("span",{className:"ProductCard__img",style:{backgroundImage:"url(".concat(a,")")}}),n.a.createElement("span",{className:"ProductCard__title"},n.a.createElement(m.b,{className:"ProductCard__title",to:I+t.id},r)),o>0?n.a.createElement("div",{className:"ProductCard__price-wrapper"},n.a.createElement("span",{className:"ProductCard__price"},"$"+b),n.a.createElement("span",{className:"ProductCard__price ProductCard__price--old"},"$"+s)):n.a.createElement("div",{className:"ProductCard__price-wrapper"},n.a.createElement("span",{className:"ProductCard__price"},"$"+b)),n.a.createElement("div",{className:"ProductCard__description"},n.a.createElement("span",{className:"ProductCard__feature"},n.a.createElement("span",{className:"ProductCard__feature--title ProductCard__feature"},"Screen"),n.a.createElement("span",{className:"ProductCard__feature--value ProductCard__feature"},i)),n.a.createElement("span",{className:"ProductCard__feature"},n.a.createElement("span",{className:"ProductCard__feature--title ProductCard__feature"},"Capacity"),n.a.createElement("span",{className:"ProductCard__feature--value ProductCard__feature"},d)),n.a.createElement("span",{className:"ProductCard__feature"},n.a.createElement("span",{className:"ProductCard__feature--title ProductCard__feature"},"RAM"),n.a.createElement("span",{className:"ProductCard__feature--value ProductCard__feature"},_))),n.a.createElement("div",{className:"ProductCard__buttons-wrapper"},n.a.createElement("button",{className:j?"ProductCard__add-to-cart ProductCard__add-to-cart--added":"ProductCard__add-to-cart",onClick:function(){E([].concat(Object(u.a)(f),[t]))}},j?"".concat(B,"  added to cart"):"Add to cart"),n.a.createElement("button",{className:v?"ProductCard__add-to-fav ProductCard__add-to-fav--added":"ProductCard__add-to-fav",onClick:function(){h(v?Object(u.a)(g).filter((function(e){return e.id!==t.id})):[].concat(Object(u.a)(g),[t]))}})))}),_=(a(31),function(e){var t=e.title,a=e.products,r=Object(c.useState)(-8),s=Object(l.a)(r,2),o=s[0],i=s[1],u=Object(c.useState)(!0),m=Object(l.a)(u,2),_=m[0],p=m[1],f=Object(c.useState)(!1),E=Object(l.a)(f,2),g=E[0],h=E[1];return Object(c.useEffect)((function(){p(o>=-8),o<=-288*(a.length-4)?h(!0):h(!1)}),[o,a]),n.a.createElement("div",{className:"CardsSlider"},n.a.createElement("div",{className:"CardsSlider__head-container"},n.a.createElement("h1",{className:"CardsSlider__title"},t),n.a.createElement("div",{className:"CardsSlider__buttons-container"},n.a.createElement("button",{className:"CardsSlider__button",onClick:function(){i(o+288)},disabled:_},"<"),n.a.createElement("button",{className:"CardsSlider__button",onClick:function(){i(o-288)},disabled:g},">"))),n.a.createElement("div",{className:"CardsSlider__stripe-container"},n.a.createElement("ul",{className:"CardsSlider__stripe",style:{left:"".concat(o,"px")}},a.map((function(e){return n.a.createElement("li",{key:e.id},n.a.createElement(d,{product:e}))})))))}),p=(a(32),function(e){var t=e.products,a=t.filter((function(e){return"phone"===e.type})).length,c=t.filter((function(e){return"tablet"===e.type})).length,r=t.filter((function(e){return"accessorie"===e.type||!e.type})).length;return n.a.createElement("div",{className:"ShopByCategory"},n.a.createElement("h1",{className:"ShopByCategory__title"},"Shop by category"),n.a.createElement("nav",{className:"ShopByCategory__nav"},n.a.createElement("ul",{className:"ShopByCategory__list"},n.a.createElement("li",{className:"ShopByCategory__item"},n.a.createElement(m.b,{to:"/phones",className:"ShopByCategory__link ShopByCategory__link--phones"}),n.a.createElement("h3",{className:"ShopByCategory__h3"},"Mobile phones"),n.a.createElement("span",{className:"ShopByCategory__models-count"},"".concat(a," models"))),n.a.createElement("li",{className:"ShopByCategory__item"},n.a.createElement(m.b,{to:"/tablets",className:"ShopByCategory__link ShopByCategory__link--tablets"}),n.a.createElement("h3",{className:"ShopByCategory__h3"},"Tablets"),n.a.createElement("span",{className:"ShopByCategory__models-count"},"".concat(c," models"))),n.a.createElement("li",{className:"ShopByCategory__item"},n.a.createElement(m.b,{to:"/accessories",className:"ShopByCategory__link ShopByCategory__link--accessories"}),n.a.createElement("h3",{className:"ShopByCategory__h3"},"Accessories"),n.a.createElement("span",{className:"ShopByCategory__models-count"},"".concat(r," models"))))))}),f=(a(33),a(34),function(e){var t=e.slides,a=Object(c.useState)(0),r=Object(l.a)(a,2),s=r[0],o=r[1],i=Object(c.useState)(-1040*s),u=Object(l.a)(i,2),m=u[0],d=u[1],_=function(){s!==t.length-1?o(s+1):o(0)};return Object(c.useEffect)((function(){var e=setInterval(_,5e3);return function(){return clearInterval(e)}})),Object(c.useEffect)((function(){d(1040*-s)}),[s]),n.a.createElement("div",{className:"PromoSlider"},n.a.createElement("div",{className:"PromoSlider__wrapper"},n.a.createElement("button",{className:"PromoSlider__button PromoSlider__button--left",onClick:function(){o(0!==s?s-1:t.length-1)}}),n.a.createElement("div",{className:"PromoSlider__frame"},n.a.createElement("ul",{className:"PromoSlider__stripe",style:{left:"".concat(m,"px")}},t.map((function(e){return n.a.createElement("li",{key:e},n.a.createElement("img",{className:"PromoSlider__item",src:e,alt:"Banner Photo"}))})))),n.a.createElement("button",{className:"PromoSlider__button PromoSlider__button--right",onClick:_})),n.a.createElement("div",{className:"PromoSlider__dots-wrapper"},t.map((function(e,t){return n.a.createElement("span",{key:e+t,className:s===t?"PromoSlider__dot PromoSlider__dot--active":"PromoSlider__dot"})}))))}),E=(a(35),function(){var e=Object(c.useState)(0),t=Object(l.a)(e,2),a=t[0],r=t[1];Object(c.useEffect)((function(){setTimeout((function(){r(a>7?0:a+1)}),100)}),[a]);var s=[];return s.length=7,s.fill(0),n.a.createElement("div",{className:"WaitLoading"},n.a.createElement("h2",null,"Please wait. Data is loading."),n.a.createElement("div",{className:"WaitLoading__spinner"},s.map((function(e,t){return n.a.createElement("span",{key:t,className:a===t?"WaitLoading__box WaitLoading__box--active":"WaitLoading__box"})}))))}),g=function(e){var t=e.products;return JSON.stringify(t)===JSON.stringify({})?n.a.createElement(E,null):n.a.createElement("div",{className:"HomePage"},n.a.createElement(f,{slides:["img/Banner1.png","img/Banner2.jpg","img/Banner3.jpg","img/Banner4.jpg","img/Banner5.jpg","img/Banner6.jpg"]}),n.a.createElement(_,{title:"Hot prices",products:Object(u.a)(t).sort((function(e,t){return t.discount-e.discount}))}),n.a.createElement(p,{products:t}),n.a.createElement(_,{title:"Brand new models",products:Object(u.a)(t).sort((function(e,t){return e.age-t.age}))}))},h=(a(36),function(){return n.a.createElement("label",{className:"Logo"},n.a.createElement(m.b,{className:"Logo__link",to:"/"}))}),b=(a(37),function(e){var t=e.links,a=e.addresses,c=Object(o.g)();return!a.includes(c.pathname)?n.a.createElement("nav",{className:"Nav"},n.a.createElement("ul",{className:"Nav__list"},t.map((function(e){var t=e.address,a=e.title,c=e.isOuter;return n.a.createElement("li",{key:t+a+c,className:"Nav__item"},n.a.createElement("label",{className:"Nav__label"},c?n.a.createElement("a",{className:"Nav__link",href:t},a):n.a.createElement(m.c,{className:"Nav__link",exact:!0,to:t},a)))})))):n.a.createElement("span",null)}),N=(a(38),function(){var e=Object(c.useContext)(Y).favorites,t=Object(o.g)();return!["/cart"].includes(t.pathname)?n.a.createElement("label",{className:"FavoritesIcon"},e.length>0?n.a.createElement("span",{className:"FavoritesIcon__count"},e.length):"",e.length>0?n.a.createElement(m.c,{className:"FavoritesIcon__link",to:"/favorites"}):n.a.createElement("span",{className:"FavoritesIcon__link"})):n.a.createElement("span",null)}),C=(a(39),function(){var e=Object(c.useContext)(Y).cart;return n.a.createElement("label",{className:"CartIcon"},e.length>0?n.a.createElement("span",{className:"CartIcon__count"},e.length):"",e.length>0?n.a.createElement(m.c,{className:"CartIcon__link",id:"CartIcon__link",to:"/cart"}):n.a.createElement("span",{className:"CartIcon__link"}))}),v=(a(40),function(){var e=Object(o.f)(),t=Object(o.g)(),a=["/phones","/tablets","/accessories","/favorites"].includes(t.pathname),r=new URLSearchParams(t.search),s=Object(c.useState)(""),u=Object(l.a)(s,2),m=u[0],d=u[1];return a?n.a.createElement("div",{className:"SearchField"},n.a.createElement("input",{type:"text",className:"SearchField__input",placeholder:"Search in ".concat(t.pathname.slice(1),"..."),value:m||"",onChange:function(t){d(t.target.value),function(e,t,a){clearTimeout(i),i=setTimeout((function(){return e(t)}),a)}((function(t){r.set("filter",t),e.push({search:r.toString()})}),t.target.value,1e3)}}),n.a.createElement("button",{type:"submit",className:r.get("filter")?"SearchField__button":"SearchField__button SearchField__button--magnifier",onClick:function(){r.get("filter")&&(r.set("filter",""),e.push({search:r.toString()}))}})):n.a.createElement("span",null)}),S=function(){return n.a.createElement("header",{className:"Header"},n.a.createElement("div",{className:"Header-wrapper"},n.a.createElement("div",{className:"Header-left-wrapper"},n.a.createElement(h,null),n.a.createElement(b,{links:[{title:"HOME",address:"/#",isOuter:!1},{title:"PHONES",address:"/phones",isOuter:!1},{title:"TABLETS",address:"/tablets",isOuter:!1},{title:"ACCESSORIES",address:"/accessories",isOuter:!1}],addresses:["/cart"]})),n.a.createElement("div",{className:"Header-right-wrapper"},n.a.createElement(v,null),n.a.createElement(N,null),n.a.createElement(C,null))))},O=(a(41),a(42),a(43),function(e){var t=e.products;return n.a.createElement("div",{className:"MainFrame"},t.map((function(e,t){return n.a.createElement(d,{key:e.id+t,product:e})})))}),y=(a(44),function(e){var t=e.pagesCount,a=Object(o.g)(),r=Object(o.f)(),s=new URLSearchParams(a.search),l=parseInt(s.get("page")||"1"),i=new Array(Math.ceil(t)).fill(0),u=l===i.length,m=1===l,d=function(e){return">"===e.target.name?(s.set("page",(l+1).toString()),void r.push({search:s.toString()})):"<"===e.target.name?(s.set("page",(l-1).toString()),void r.push({search:s.toString()})):(s.set("page",(+e.target.name+1).toString()),void r.push({search:s.toString()}))};return Object(c.useEffect)((function(){s.set("page",l.toString()),r.push({search:s.toString()})}),[l]),1!==i.length?n.a.createElement("div",{className:"Pagination"},n.a.createElement("button",{className:"Pagination__button Pagination__button--arrow",type:"button",name:"<",disabled:m,onClick:d},"<"),i.map((function(e,t){return n.a.createElement("button",{key:t,className:t+1===l?"Pagination__button Pagination__button--active":"Pagination__button",name:t.toString(),onClick:d,type:"button"},t+1)})),n.a.createElement("button",{className:"Pagination__button Pagination__button--arrow",type:"button",name:">",disabled:u,onClick:d},">")):n.a.createElement("span",null)}),j=(a(45),function(){var e=Object(o.g)(),t=new URLSearchParams(e.search),a=Object(c.useState)(!1),r=Object(l.a)(a,2),s=r[0],i=r[1],u=Object(o.f)(),m=[{value:"age",text:"Newest"},{value:"name",text:"Alphabetically"},{value:"low_price",text:"Low price"},{value:"high_price",text:"High price"}],d=Object(c.useState)(),_=Object(l.a)(d,2),p=_[0],f=_[1];Object(c.useEffect)((function(){t.get("sort_type")?f(m.filter((function(e){return e.value===t.get("sort_type")}))[0].text):f("Choose")}),[t]);return n.a.createElement("div",{className:"SortBy"},n.a.createElement("span",{className:"SortBy__legend"},"Sort by"),n.a.createElement("br",null),n.a.createElement("div",{onClick:function(){return i(!s)},className:s?"SortBy__pseudo-select SortBy__pseudo-select--open":"SortBy__pseudo-select"},p,n.a.createElement("div",{className:s?"SortBy__options-wrapper":"SortBy__options-wrapper SortBy__options-wrapper--invisible"},m.map((function(e){return n.a.createElement("span",{onClick:function(){var a,c;a=e.value,c=e.text,f(c),i(!1),t.set("sort_type",a),u.push({search:t.toString()})},className:"SortBy__option",key:e.value},e.text)})))))}),P=(a(46),function(){var e=Object(o.g)(),t=new URLSearchParams(e.search),a=Object(o.f)();return n.a.createElement("div",{className:"ItemsOnPageSelect"},n.a.createElement("span",{className:"ItemsOnPageSelect__legend"},"Items on page"),n.a.createElement("br",null),n.a.createElement("select",{className:"ItemsOnPageSelect__per-page",onChange:function(e){t.set("per_page",e.target.value),a.push({search:t.toString()})},value:t.get("per_page")||""},["8","16","32","64","All"].map((function(e){return n.a.createElement("option",{key:e,value:e},e)}))))}),k=function(e){var t=e.products,a=Object(c.useState)(t),r=Object(l.a)(a,2),s=r[0],i=r[1],m=Object(c.useState)(s),d=Object(l.a)(m,2),_=d[0],p=d[1],f=Object(c.useState)(_),E=Object(l.a)(f,2),g=E[0],h=E[1],b=Object(o.f)(),N=Object(o.g)(),C=new URLSearchParams(N.search),v=(C.get("filter")||"").toLowerCase(),S=(C.get("sort_type")||"age").toLowerCase(),k=parseInt(C.get("page")||"1"),w=parseInt(C.get("per_page")||"8");return Object(c.useEffect)((function(){C.set("page",k.toString()),C.set("per_page",w.toString()),C.set("sort_type",S),b.push({search:C.toString()})}),[]),Object(c.useEffect)((function(){switch(S){case"name":p(Object(u.a)(s).sort((function(e,t){return e.name.toLowerCase().localeCompare(t.name.toLowerCase())})));break;case"age":p(Object(u.a)(s).sort((function(e,t){return e.age-t.age})));break;case"low_price":p(Object(u.a)(s).sort((function(e,t){return e.price*(100-e.discount)/100-t.price*(100-t.discount)/100})));break;case"high_price":p(Object(u.a)(s).sort((function(e,t){return t.price*(100-t.discount)/100-e.price*(100-e.discount)/100})));break;default:p(s)}}),[s,S]),Object(c.useEffect)((function(){i(""!==v?t.filter((function(e){return e.name.toLowerCase().includes(v)})):t)}),[t,v]),Object(c.useEffect)((function(){C.set("page","1"),b.push({search:C.toString()})}),[w,S]),Object(c.useEffect)((function(){if(w){var e=(k-1)*w,t=e+w;h(_.slice(e,t))}else h(_)}),[_,k,w]),n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:"Catalog__models-count"},"".concat(s.length," models")),n.a.createElement("div",{className:"Catalog__select-wrapper"},n.a.createElement(j,null),n.a.createElement(P,null)),n.a.createElement("div",null,n.a.createElement(O,{products:g})),n.a.createElement(y,{pagesCount:_.length/w||1}))},w=(a(47),a(48),function(){var e=Object(o.g)().pathname.split("/");return n.a.createElement("div",{className:"Breadcrumbs"},e.map((function(t,a){var c,r=e.slice(0,a+1).join("/");switch(a){case 0:c="Breadcrumbs__link Breadcrumbs__link--first";break;case e.length-1:c="Breadcrumbs__link Breadcrumbs__link--last";break;default:c="Breadcrumbs__link"}return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.b,{to:r,className:c},t),a!==e.length-1?n.a.createElement("span",{className:"Breadcrumbs__arrow"}):"")})))}),B=function(e){var t=e.products,a=t.filter((function(e){return"phone"===e.type}));return JSON.stringify(t)===JSON.stringify({})?n.a.createElement(E,null):n.a.createElement("div",{className:"PhonesPage"},n.a.createElement(w,null),n.a.createElement("h1",{className:"PhonesPage__h1"},"Mobile phones"),n.a.createElement(k,{products:a}))},T=(a(49),function(e){var t=e.products,a=t.filter((function(e){return"tablet"===e.type}));return JSON.stringify(t)===JSON.stringify({})?n.a.createElement(E,null):n.a.createElement("div",{className:"TabletsPage"},n.a.createElement(w,null),n.a.createElement("h1",{className:"TabletsPage__h1"},"Tablets"),n.a.createElement(k,{products:a}))}),I=(a(50),function(e){var t=e.products,a=t.filter((function(e){return"accessorie"===e.type||!e.type}));return JSON.stringify(t)===JSON.stringify({})?n.a.createElement(E,null):n.a.createElement("div",{className:"AccessoriesPage"},n.a.createElement(w,null),n.a.createElement("h1",{className:"Accessories__h1"},"Accessories"),n.a.createElement(k,{products:a}))}),x=(a(51),function(e){var t=e.description;return n.a.createElement("div",{className:"About"},n.a.createElement("h2",{className:"About__title"},"About"),n.a.createElement("span",{className:"About__horisont"}),n.a.createElement("article",{className:"About__article"},t))}),A=(a(52),function(e){var t=e.product,a=e.productDetails;return n.a.createElement("div",{className:"TechSpecs"},n.a.createElement("h2",{className:"TechSpecs__title"},"Tech specs"),n.a.createElement("span",{className:"TechSpecs__horisont"}),n.a.createElement("ul",{className:"TechSpecs__list"},n.a.createElement("li",{className:"TechSpecs__item"},n.a.createElement("span",{className:"TechSpecs__spec"},"Screen"),n.a.createElement("span",{className:"TechSpecs__value"},t.screen)),n.a.createElement("li",{className:"TechSpecs__item"},n.a.createElement("span",{className:"TechSpecs__spec"},"Resolution"),n.a.createElement("span",{className:"TechSpecs__value"},a.display.screenResolution)),n.a.createElement("li",{className:"TechSpecs__item"},n.a.createElement("span",{className:"TechSpecs__spec"},"Processor"),n.a.createElement("span",{className:"TechSpecs__value"},a.hardware.cpu)),n.a.createElement("li",{className:"TechSpecs__item"},n.a.createElement("span",{className:"TechSpecs__spec"},"RAM"),n.a.createElement("span",{className:"TechSpecs__value"},t.ram)),n.a.createElement("li",{className:"TechSpecs__item"},n.a.createElement("span",{className:"TechSpecs__spec"},"Built in memory"),n.a.createElement("span",{className:"TechSpecs__value"},t.capacity)),n.a.createElement("li",{className:"TechSpecs__item"},n.a.createElement("span",{className:"TechSpecs__spec"},"Camera"),n.a.createElement("span",{className:"TechSpecs__value"},a.camera.primary)),n.a.createElement("li",{className:"TechSpecs__item"},n.a.createElement("span",{className:"TechSpecs__spec"},"Zoom"),n.a.createElement("span",{className:"TechSpecs__value"})),n.a.createElement("li",{className:"TechSpecs__item"},n.a.createElement("span",{className:"TechSpecs__spec"},"Cell"),n.a.createElement("span",{className:"TechSpecs__value"},a.connectivity.cell))))}),F=(a(53),function(e){var t=e.images,a=Object(c.useState)(0),r=Object(l.a)(a,2),s=r[0],o=r[1];Object(c.useEffect)((function(){var e=setTimeout(i,5e3);return function(){return clearTimeout(e)}}),[s]);var i=function(){s===t.length-1?o(0):o(s+1)};return n.a.createElement("div",{className:"Gallery"},n.a.createElement("div",{className:"Gallery__wrapper"},n.a.createElement("ul",{className:"Gallery__stripe"},t.map((function(e,t){return n.a.createElement("li",null,n.a.createElement("button",{className:t===s?"Gallery__icon Gallery__icon--active":"Gallery__icon",onClick:function(){return o(t)},style:{backgroundImage:"url(".concat(e,")")}}))})))),n.a.createElement("img",{className:"Gallery__main",src:t[s],alt:"Phone Photo"}))}),L=(a(54),function(e){var t=e.product,a=e.productDetails,r=Object(c.useContext)(Y),s=r.cart,o=r.setCart,i=r.favorites,m=r.setFavorites,d=Object(c.useState)(i.filter((function(e){return e.id===t.id})).length>0),_=Object(l.a)(d,2),p=_[0],f=_[1],E=Object(c.useState)(s.filter((function(e){return e.id===t.id})).length>0),g=Object(l.a)(E,2),h=g[0],b=g[1],N=Object(c.useState)(s.filter((function(e){return e.id===t.id})).length),C=Object(l.a)(N,2),v=C[0],S=C[1];Object(c.useEffect)((function(){f(i.filter((function(e){return e.id===t.id})).length>0)}),[i]),Object(c.useEffect)((function(){b(s.filter((function(e){return e.id===t.id})).length>0),S(s.filter((function(e){return e.id===t.id})).length)}),[s]);return n.a.createElement("div",{className:"Card"},n.a.createElement("div",{className:"Card__buttons-wrapper"},n.a.createElement("button",{className:h?"Card__add-to-cart Card__add-to-cart--added":"Card__add-to-cart",onClick:function(){o([].concat(Object(u.a)(s),[t]))}},h?"".concat(v,"  added to cart"):"Add to cart"),n.a.createElement("button",{className:p?"Card__add-to-fav Card__add-to-fav--added":"Card__add-to-fav",onClick:function(){m(p?Object(u.a)(i).filter((function(e){return e.id!==t.id})):[].concat(Object(u.a)(i),[t]))}})),n.a.createElement("ul",{className:"Card__list"},n.a.createElement("li",{className:"Card__item"},n.a.createElement("span",{className:"Card__spec"},"Screen"),n.a.createElement("span",{className:"Card__value"},t.screen)),n.a.createElement("li",{className:"Card__item"},n.a.createElement("span",{className:"Card__spec"},"Resolution"),n.a.createElement("span",{className:"Card__value"},a.display.screenResolution)),n.a.createElement("li",{className:"Card__item"},n.a.createElement("span",{className:"Card__spec"},"Processor"),n.a.createElement("span",{className:"Card__value"},a.hardware.cpu)),n.a.createElement("li",{className:"Card__item"},n.a.createElement("span",{className:"Card__spec"},"RAM"),n.a.createElement("span",{className:"Card__value"},t.ram))))}),J=(a(55),a(56),function(){var e=Object(o.f)();return n.a.createElement("div",{className:"GoBack"},n.a.createElement("span",{className:"GoBack__arrow"}),n.a.createElement("button",{className:"GoBack__button",type:"button",onClick:function(){e.goBack()}},"Back"))}),H=function(e){var t=e.product,a=Object(c.useState)({}),r=Object(l.a)(a,2),s=r[0],o=r[1];Object(c.useEffect)((function(){var e;(e=t.id,fetch("https://mate-academy.github.io/react_phone-catalog/api/products/".concat(e,".json")).then((function(e){return e.json()}))).then((function(e){o(e)}))}),[]);var i=s.description,u=Object(c.useContext)(Y).products;return JSON.stringify(s)===JSON.stringify({})?n.a.createElement(E,null):n.a.createElement("div",{className:"ProductPage"},n.a.createElement(w,null),n.a.createElement(J,null),n.a.createElement("h1",{className:"ProductPage__title"},s.name),n.a.createElement("div",{className:"ProductPage__group-wrapper"},n.a.createElement(F,{images:s.images}),n.a.createElement(L,{product:t,productDetails:s}),n.a.createElement(x,{description:i}),n.a.createElement(A,{product:t,productDetails:s})),n.a.createElement("div",{className:"ProductPage__group-wrapper"}),n.a.createElement(_,{products:u,title:"You may also like"}))},R=(a(57),function(){var e=Object(c.useContext)(Y).favorites;return n.a.createElement("div",{className:"FavoritesPage"},n.a.createElement(w,null),n.a.createElement("h1",{className:"FavoritesPage__h1"},"Favorites"),n.a.createElement(k,{products:e}))}),G=(a(58),function(e){var t,a=e.index,c=e.cart,r=e.setCart,s=e.product,l=e.count,o=s.imageUrl,i=s.name,d=(s.price-s.price*s.discount/100)*l;switch(s.type){case"phone":t="/phones/";break;case"tablet":t="/tablets/";break;default:t="/accessories/"}return n.a.createElement("div",{className:"CartCard",style:{top:"".concat(144*a,"px")}},n.a.createElement("button",{className:"CartCard__delete-button",onClick:function(){r(Object(u.a)(c).filter((function(e){return e.id!==s.id})))}}),n.a.createElement("img",{className:"CartCard__img",src:o,alt:i}),n.a.createElement(m.b,{to:t+s.id,className:"CartCard__name"},i),n.a.createElement("button",{disabled:l<=1,onClick:function(){var e=Object(u.a)(c);e.splice(c.findIndex((function(e){return s.id===e.id})),1),r(e)},className:l<=1?"CartCard__count-button CartCard__count-button--disabled":"CartCard__count-button"},"\u0336  "),n.a.createElement("span",{className:"CartCard__count"},l),n.a.createElement("button",{className:"CartCard__count-button",onClick:function(){r([].concat(Object(u.a)(c),[s]))}},"+"),n.a.createElement("span",{className:"CartCard__total"},"$".concat(d)))}),M=(a(59),function(){var e=Object(c.useContext)(Y),t=e.cart,a=e.setCart,r=t.map((function(e){return JSON.stringify(e)})),s=new Set(r),i=Object(u.a)(s).map((function(e){return JSON.parse(e)})).sort((function(e,t){return e.name.localeCompare(t.name)})),m=Object(c.useState)(0),d=Object(l.a)(m,2),_=d[0],p=d[1],f=Object(c.useState)(t.length),E=Object(l.a)(f,2),g=E[0],h=E[1],b=Object(o.f)();Object(c.useEffect)((function(){for(var e=0,a=0;a<t.length;a++)e+=t[a].price-t[a].price*t[a].discount/100;p(e),h(t.length)}),[t]);return n.a.createElement("div",{className:"CartPage"},n.a.createElement(J,null),n.a.createElement("h1",{className:"CartPage__title"},"Cart"),n.a.createElement("div",{className:"CartPage__main"},n.a.createElement("div",{className:"CartPage__wrapper",style:{minHeight:"".concat(144*i.length,"px")}},0===i.length?n.a.createElement("p",{className:"CartPage__empty"},"Cart is empty."):i.map((function(e,c){var r=t.filter((function(t){return e.id===t.id})).length;return n.a.createElement(G,{key:e.id,index:c,cart:t,product:e,count:r,setCart:a})}))),n.a.createElement("div",{className:"CartPage__summary"},n.a.createElement("div",null,n.a.createElement("span",{className:"CartPage__total"},"$".concat(_)),n.a.createElement("span",{className:"CartPage__legend"},"Total for ".concat(g," items")),n.a.createElement("span",{className:"CartPage__horis-line"})),n.a.createElement("button",{type:"button",className:"CartPage__checkout",onClick:function(){a([]),b.push("/thanks")}},"Checkout"))))}),U=function(){return n.a.createElement("div",{className:"ThanksPage"},n.a.createElement(w,null),n.a.createElement("h1",{className:"ThanksPage__title"},"Thank You!"),n.a.createElement("p",{className:"ThanksPage__paragraph"},"Thanks for your order. Your purchase will be packaged and sent to you shortly."))},D=(a(60),function(){return n.a.createElement("div",{className:"BackToTop"},n.a.createElement("span",{className:"BackToTop__legend"},"Back to top"),n.a.createElement("button",{className:"BackToTop__button",type:"button",onClick:function(){console.log(document.body.clientHeight,window.screen.availHeight);!function e(){setTimeout((function(){console.log(document.body.clientHeight,window.screen.availHeight),window.scrollBy(0,-20),window.scrollY>0&&e()}),1)}()}}))}),W=(a(61),function(){return n.a.createElement("footer",{className:"App__footer Footer"},n.a.createElement("div",{className:"Footer__container"},n.a.createElement(h,null),n.a.createElement(b,{links:[{title:"GITHUB",address:"http://www.github.com",isOuter:!0},{title:"CONTACTS",address:"/contacts",isOuter:!1},{title:"RIGHTS",address:"/rights",isOuter:!1}],addresses:[]}),n.a.createElement(D,null)))}),$=(a(62),function(){return n.a.createElement("div",{className:"ErrorPage"},n.a.createElement("h1",{className:"ErrorPage__title"},"Ooops!!!"),n.a.createElement("p",{className:"ErrorPage__paragraph"},"Sorry, but it looks like an error occurred while loading the data."),n.a.createElement("p",{className:"ErrorPage__paragraph"},"Please check your internet connection or try again later."))}),Y=n.a.createContext({}),Z=function(){var e=Object(c.useState)([]),t=Object(l.a)(e,2),a=t[0],r=t[1],s=Object(c.useState)(!1),i=Object(l.a)(s,2),u=i[0],m=i[1];Object(c.useEffect)((function(){fetch("https://mate-academy.github.io/react_phone-catalog/api/products.json").then((function(e){return e.json()})).catch((function(){return!1})).then((function(e){e?r(e):m(!0)}))}),[]);var d=a,_=Object(c.useState)(JSON.parse(localStorage.getItem("PhonesCatalog_Cart")||"[]")),p=Object(l.a)(_,2),f=p[0],E=p[1],h=Object(c.useState)(JSON.parse(localStorage.getItem("PhonesCatalog_Favorites")||"[]")),b=Object(l.a)(h,2),N=b[0],C=b[1];return Object(c.useEffect)((function(){localStorage.setItem("PhonesCatalog_Cart",JSON.stringify(f))}),[f]),Object(c.useEffect)((function(){localStorage.setItem("PhonesCatalog_Favorites",JSON.stringify(N))}),[N]),n.a.createElement(Y.Provider,{value:{products:d,cart:f,setCart:E,favorites:N,setFavorites:C}},n.a.createElement("div",{className:"App"},n.a.createElement(S,null),u?n.a.createElement($,null):n.a.createElement("main",{className:"App__main"},n.a.createElement(o.c,null,a.map((function(e){var t="/";switch(e.type){case"phone":t="/phones/";break;case"tablet":t="/tablets/";break;default:t="/accessories/"}return n.a.createElement(o.a,{key:e.id,path:"".concat(t+e.id)},n.a.createElement(H,{product:e}))})),n.a.createElement(o.a,{path:"/phones"},n.a.createElement(B,{products:d})),n.a.createElement(o.a,{path:"/tablets"},n.a.createElement(T,{products:d})),n.a.createElement(o.a,{path:"/accessories"},n.a.createElement(I,{products:d})),n.a.createElement(o.a,{path:"/favorites"},n.a.createElement(R,null)),n.a.createElement(o.a,{path:"/cart"},n.a.createElement(M,null)),n.a.createElement(o.a,{path:"/thanks"},n.a.createElement(U,null)),n.a.createElement(o.a,{path:"/"},n.a.createElement(g,{products:d})))),n.a.createElement(W,null)))};s.a.render(n.a.createElement(m.a,null,n.a.createElement(Z,null)),document.getElementById("root"))}]),[[20,1,2]]]);
//# sourceMappingURL=main.30089695.chunk.js.map