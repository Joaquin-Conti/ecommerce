(this.webpackJsonphola=this.webpackJsonphola||[]).push([[0],[,,,function(e,a,t){e.exports={Navbar:"Navbar_Navbar__1-DrF",Cart:"Navbar_Cart__1XzFU",MobileCart:"Navbar_MobileCart__3X2Wa",Desktop:"Navbar_Desktop__2cx5j",NavItems:"Navbar_NavItems__1Jdlw",MenuBtn:"Navbar_MenuBtn__2bKAO",MenuBtnBurger:"Navbar_MenuBtnBurger__3lf1H",Open:"Navbar_Open__2hEnh",NotVisible:"Navbar_NotVisible__1l7yI"}},function(e,a,t){e.exports={Sidebar:"Sidebar_Sidebar__1Nug4",Arrow:"Sidebar_Arrow__K7Gao",ArrowClose:"Sidebar_ArrowClose__2DLFH",ArrowOpen:"Sidebar_ArrowOpen__2uxuw",NavItems:"Sidebar_NavItems__37LcI",active:"Sidebar_active__tTnuP",Categories:"Sidebar_Categories__6TrqZ",RangeSearch:"Sidebar_RangeSearch__3SOiW",Talles:"Sidebar_Talles__jVoaB",Open:"Sidebar_Open__2DL1_",Close:"Sidebar_Close__2ZFZy"}},function(e,a,t){e.exports={SearchButton:"SearchButton_SearchButton__2EXcb",Desktop:"SearchButton_Desktop__2uw9U",Open:"SearchButton_Open__UX-iS",Mobile:"SearchButton_Mobile__qebRn",Close:"SearchButton_Close__2fkDQ"}},function(e,a,t){e.exports={ShopItem:"ShopItem_ShopItem__13hWf",ImgDiv:"ShopItem_ImgDiv__2mO3h",Text:"ShopItem_Text__K-5Nq",Price:"ShopItem_Price__3UXkU"}},,,,,,,function(e,a,t){e.exports=t.p+"static/media/keo-logo.29b016b5.jpeg"},function(e,a,t){e.exports={KeoLogo:"Logo_KeoLogo__1Q7rw",LogoHidden:"Logo_LogoHidden__3SDqX"}},,function(e,a,t){e.exports={Backdrop:"Backdrop_Backdrop__1BqDj"}},function(e,a,t){e.exports=t.p+"static/media/blue-hoodie-kotk.fa3c0e35.jpg"},function(e,a,t){e.exports=t.p+"static/media/jean-negro.8252c003.jpeg"},function(e,a,t){e.exports=t.p+"static/media/remera-got1.fb78a3d6.jpg"},function(e,a,t){e.exports=t.p+"static/media/remera-brba.282bb94c.jpg"},function(e,a,t){e.exports=t.p+"static/media/got-hoodie.bf130acb.jpg"},function(e,a,t){e.exports=t.p+"static/media/hoodie-pink-floyd.a17f6b83.jpg"},function(e,a,t){e.exports={Grid:"ItemsWrapper_Grid__ziwLD"}},,function(e,a,t){e.exports=t(39)},,,,,function(e,a,t){e.exports={NotScrollable:"Layout_NotScrollable__1m24j"}},function(e,a,t){},,,,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),o=t(8),c=t.n(o),l=t(1),i=(t(30),t(24)),s=t(3),d=t.n(s),u=t(13),m=t.n(u),b=t(14),p=t.n(b);function E(e){return r.a.createElement("a",{href:"/"},r.a.createElement("img",{className:e.show,id:p.a.KeoLogo,src:m.a,alt:"logo-img"}))}t(31);var O=t(2);var _=Object(O.b)((function(e){return{numberOfItems:e.cart.numberOfItems}}))((function(e){return r.a.createElement("nav",{className:d.a.Navbar},r.a.createElement(E,{show:e.sidebarIsOpen?d.a.LogoHidden:""}),r.a.createElement("div",{className:"".concat(d.a.Cart," ").concat(d.a.MobileCart," ").concat(e.sidebarIsOpen?d.a.NotVisible:"")},r.a.createElement("i",{className:"fas fa-shopping-cart fa-2x "}),r.a.createElement("span",null,e.numberOfItems)),r.a.createElement("div",{onClick:e.btnClick,className:d.a.MenuBtn+" "+(e.sidebarIsOpen?d.a.Open:"")},r.a.createElement("div",{className:d.a.MenuBtnBurger})),r.a.createElement("div",{className:d.a.Desktop},r.a.createElement("ul",{className:d.a.NavItems},r.a.createElement("a",{href:"/"},r.a.createElement("li",null,"PRODUCTOS")),r.a.createElement("a",{href:"/"},r.a.createElement("li",null,"NOSOTROS")),r.a.createElement("a",{href:"/"},r.a.createElement("li",null,"CONTACTANOS"))),r.a.createElement("div",{className:d.a.Cart},r.a.createElement("i",{className:"fas fa-shopping-cart fa-2x"}),r.a.createElement("span",null,e.numberOfItems))))})),S=t(4),f=t.n(S);function g(e){return r.a.createElement("div",{className:f.a.Sidebar+" "+(e.sidebarIsOpen?f.a.Open:f.a.Close)},r.a.createElement(E,null),r.a.createElement("nav",null,r.a.createElement("ul",{className:f.a.NavItems},r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"PRODUCTOS")),r.a.createElement("li",null,"RANGO DE PRECIOS ",r.a.createElement("br",null),r.a.createElement("span",null,"de"),r.a.createElement("input",{onChange:e.minPriceSelected,className:f.a.RangeSearch,type:"number"}),r.a.createElement("br",null),r.a.createElement("span",null,"hasta"),r.a.createElement("input",{onChange:e.maxPriceSelected,className:f.a.RangeSearch,type:"number"})),r.a.createElement("li",null,"CATEGORIAS ",r.a.createElement("i",{onClick:e.arrowClicked,className:"fas fa-chevron-down "+f.a.Arrow+" "+(e.showCategories?f.a.ArrowOpen:f.a.ArrowClose)}),e.showCategories?r.a.createElement("ul",{className:f.a.Categories},e.categories.map((function(a){return r.a.createElement("li",{key:a+1,onClick:function(a){e.changeColor(a),e.categorySelected(a)}},a)}))):null),r.a.createElement("li",null,"TALLES",r.a.createElement("form",{className:f.a.Talles,onChange:e.talleSelected},r.a.createElement("label",{htmlFor:"S"},"S",r.a.createElement("input",{name:"talle",type:"radio",value:"S"})),r.a.createElement("label",{htmlFor:"M"},"M",r.a.createElement("input",{name:"talle",type:"radio",value:"M"})),r.a.createElement("label",{htmlFor:"L"},"L",r.a.createElement("input",{name:"talle",type:"radio",value:"L"})),r.a.createElement("label",{htmlFor:"XL"},"XL",r.a.createElement("input",{name:"talle",type:"radio",value:"XL"})))),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"NOSOTROS")),r.a.createElement("li",null,r.a.createElement("a",{href:"/"},"CONTACTANOS")))))}var C=t(16),h=t.n(C);function T(e){return e.show?r.a.createElement("div",{onClick:e.backdropClicked,className:h.a.Backdrop}):null}var N=t(5),I=t.n(N);function y(e){return r.a.createElement("button",{onClick:e.searchClicked,className:I.a.SearchButton+" "+(e.sidebarIsOpen?I.a.Open:I.a.Close)+" "+(e.desktop?I.a.Desktop:I.a.Mobile)},"Buscar")}var v=Object(O.b)((function(e){return{onSearchOptions:Object(l.a)({},e.onSearchOptions),sidebarIsOpen:e.sidebarIsOpen}}),(function(e){return{onSidebarToggled:function(){return window.scrollTo(0,0),e({type:"SIDEBAR_TOGGLED"})},onSearchClicked:function(){return e({type:"SEARCH_BUTTON_CLICKED"})},onCategorySelected:function(a){return e({type:"CATEGORY_SELECTED",payload:a.target.innerHTML.toLowerCase()})},onTalleSelected:function(a){return e({type:"TALLE_SELECTED",payload:a.target.value})},onMinPriceSelected:function(a){return e({type:"MIN_PRICE_SELECTED",payload:a.target.value})},onMaxPriceSelected:function(a){return e({type:"MAX_PRICE_SELECTED",payload:a.target.value})}}}))((function(e){var a=Object(n.useState)(!1),t=Object(i.a)(a,2),o=t[0],c=t[1];return e.sidebarIsOpen?document.getElementsByTagName("html")[0].style.overflow="hidden":document.getElementsByTagName("html")[0].style.overflow="scroll",Object(n.useEffect)((function(){}),[Object(l.a)({},e.onSearchOptions)]),r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{show:e.sidebarIsOpen,backdropClicked:function(){return e.onSidebarToggled()}}),r.a.createElement(_,{sidebarIsOpen:e.sidebarIsOpen,btnClick:function(){return e.onSidebarToggled()}}),r.a.createElement(g,{sidebarIsOpen:e.sidebarIsOpen,arrowClicked:function(){return c(!o)},showCategories:o,categorySelected:function(a){return e.onCategorySelected(a)},talleSelected:function(a){return e.onTalleSelected(a)},minPriceSelected:function(a){return e.onMinPriceSelected(a)},maxPriceSelected:function(a){return e.onMaxPriceSelected(a)},categories:["Hoodies","Pantalones","Remeras","Todos"],changeColor:function(e){return function(e){Array.from(e.target.parentNode.parentNode.childNodes).map((function(e){return Array.from(e.childNodes).map((function(e){return e.style.color="white"}))})),e.target.style.color="#E51A23"}(e)}}),r.a.createElement(y,{sidebarIsOpen:e.sidebarIsOpen,searchClicked:function(){e.onSidebarToggled(),e.onSearchClicked()},desktop:!0}),r.a.createElement(y,{sidebarIsOpen:e.sidebarIsOpen,searchClicked:function(){e.onSidebarToggled(),e.onSearchClicked()},mobile:!0}))})),j=(t(38),t(17)),w=t.n(j),L=t(18),D=t.n(L),A=t(19),P=t.n(A),k=t(20),R=t.n(k),B=t(21),x=t.n(B),M=t(22),U=t.n(M),G=t(6),X=t.n(G);var H=Object(O.b)((function(e){return{config:Object(l.a)({},e.onSearchOptions)}}),(function(e){return{onNoResultsAvailable:function(){return console.log("dispatched"),e({type:"RESULTS_AVAILABLE_TOGGLED"})}}}))((function(e){return e.name.includes(e.config.searchBarInput)&&e.category.includes(e.config.selectedCategory)&&(e.talles.includes(e.config.talle)||"todos"===e.config.talle)&&parseInt(e.numberPrice)>=e.config.minPrice&&parseInt(e.numberPrice)<=e.config.maxPrice&&r.a.createElement("div",{id:e.id,className:X.a.ShopItem},r.a.createElement("div",{className:X.a.ImgDiv},r.a.createElement("img",{src:e.image,alt:e.alt})),r.a.createElement("div",null,r.a.createElement("h3",null,e.name),r.a.createElement("p",{className:X.a.Text},e.talles),r.a.createElement("p",{className:"".concat(X.a.Text," ").concat(X.a.Price)},e.price),r.a.createElement("button",{onClick:function(a){return e.addedToCart(a)}},"A\xf1adir al carrito")))})),F=t(23),V=t.n(F);function K(e){return r.a.createElement("div",{className:V.a.Grid},r.a.createElement(H,{id:"1",name:"Hoodie GoT",category:"hoodies todos",talles:"S M L",image:x.a,alt:"Got Hoodie",price:"$2199",numberPrice:"2199",addedToCart:function(a){return e.addedToCart(a)}}),r.a.createElement(H,{id:"6",name:"Remera BrBa",category:"remeras todos",talles:"S M XL",image:R.a,price:"$699",numberPrice:"699",addedToCart:e.addedToCart}),r.a.createElement(H,{id:"4",name:"Remera GoT",category:"remeras todos",talles:"S XL",image:P.a,price:"$699",numberPrice:"699",addedToCart:e.addedToCart}),r.a.createElement(H,{id:"7",name:"Hoodie Pink Floyd",category:"hoodies todos",talles:"S M L",image:U.a,price:"$1899",numberPrice:"1899",addedToCart:e.addedToCart}),r.a.createElement(H,{id:"2",name:"Hoodie Azul KOTK",category:"hoodies todos",talles:"M L XL",image:w.a,alt:"Hoodie Azul",price:"$1499",numberPrice:"1499",addedToCart:e.addedToCart}),r.a.createElement(H,{id:"3",name:"Jean Negro",category:"pantalones todos",talles:"S M",image:D.a,alt:"Jean Negro",price:"$1899",numberPrice:"1899",addedToCart:e.addedToCart}))}var q=Object(O.b)((function(e){return{resultsAvailable:e.resultsAvailable}}))((function(e){return r.a.createElement("section",null,!1===e.resultsAvailable?null:"todos"===e.showing?r.a.createElement("h1",null,"TODOS LOS PRODUCTOS"):r.a.createElement("h1",null,e.showing.toUpperCase()),r.a.createElement(K,{showing:e.showing,addedToCart:function(a){return e.addedToCart(a)}}))}));var $=Object(O.b)((function(e){return{config:Object(l.a)({},e.onSearchOptions),cart:Object(l.a)({},e.cart),isSidebarOpen:e.sidebarIsOpen}}),(function(e){return{onCategorySelect:function(a){return e({type:"CATEGORY_SELECTED",payload:a})},onAddedToCart:function(a){return e({type:"PRODUCT_ADDED",payload:{quantity:1}})},onRemovedFromCart:function(){return e({type:"PRODUCT_REMOVED",payload:1})}}}))((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(v,{categorySelected:function(a){return e.onCategorySelect(a.target.innerText.toLowerCase())},showing:e.config.selectedCategory}),r.a.createElement(q,{showing:e.config.selectedCategory,isSidebarOpen:e.isSidebarOpen,addedToCart:function(a){return e.onAddedToCart(a)}}))}));var J=function(){return r.a.createElement($,null)},z=t(7),W={highestPrice:2199,lowestPrice:699,resultsAvailable:!0,browseOptions:{searchBarInput:"",selectedCategory:"todos",minPrice:699,maxPrice:2199,talle:"todos"},onSearchOptions:{searchBarInput:"",selectedCategory:"todos",minPrice:699,maxPrice:2199,talle:"todos"},cart:{numberOfItems:0,totalPrice:0,items:[]},sidebarIsOpen:!1},Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SEARCH_BUTTON_CLICKED":return Object(l.a)(Object(l.a)({},e),{},{onSearchOptions:Object(l.a)({},e.browseOptions)});case"SEARCHBAR_USED":return Object(l.a)(Object(l.a)({},e),{},{browseOptions:Object(l.a)(Object(l.a)({},e.browseOptions),{},{searchBarInput:a.payload})});case"CATEGORY_SELECTED":return Object(l.a)(Object(l.a)({},e),{},{browseOptions:Object(l.a)(Object(l.a)({},e.browseOptions),{},{selectedCategory:a.payload})});case"MIN_PRICE_SELECTED":return Object(l.a)(Object(l.a)({},e),{},{browseOptions:Object(l.a)(Object(l.a)({},e.browseOptions),{},{minPrice:a.payload})});case"MAX_PRICE_SELECTED":return Object(l.a)(Object(l.a)({},e),{},{browseOptions:Object(l.a)(Object(l.a)({},e.browseOptions),{},{maxPrice:a.payload})});case"TALLE_SELECTED":return Object(l.a)(Object(l.a)({},e),{},{browseOptions:Object(l.a)(Object(l.a)({},e.browseOptions),{},{talle:a.payload})});case"RESULTS_AVAILABLE_TOGGLED":return Object(l.a)(Object(l.a)({},e),{},{resultsAvailable:!e.resultsAvailable});case"PRODUCT_ADDED":return Object(l.a)(Object(l.a)({},e),{},{cart:Object(l.a)(Object(l.a)({},e.cart),{},{numberOfItems:e.cart.numberOfItems+a.payload.quantity,totalPrice:e.cart.totalPrice+a.payload.price})});case"PRODUCT_REMOVED":return Object(l.a)(Object(l.a)({},e),{},{cart:Object(l.a)(Object(l.a)({},e.cart),{},{numberOfItems:e.cart.numberOfItems-a.payload.quantity,totalPrice:e.cart.totalPrice-a.payload.price})});case"SIDEBAR_TOGGLED":return Object(l.a)(Object(l.a)({},e),{},{sidebarIsOpen:!e.sidebarIsOpen});default:return e}},Z=Object(z.c)(Y,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());"undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||z.b;c.a.render(r.a.createElement(O.a,{store:Z},r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null))),document.getElementById("root"))}],[[25,1,2]]]);
//# sourceMappingURL=main.44297af9.chunk.js.map