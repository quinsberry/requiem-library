(this["webpackJsonprequiem-library"]=this["webpackJsonprequiem-library"]||[]).push([[0],{46:function(e,t,a){e.exports=a.p+"static/media/question-circle.530d61b9.svg"},51:function(e,t,a){e.exports=a(95)},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){},80:function(e,t,a){},82:function(e,t,a){},83:function(e,t,a){},84:function(e,t,a){},85:function(e,t,a){},86:function(e,t,a){},87:function(e,t,a){},88:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},94:function(e,t,a){},95:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(29),c=a.n(s),l=a(31),o=a(2),i=a(26),m=a(49),u=a(6),d={en:{translation:Object(u.a)({},{header:{links:{discord:"Discord",author:"Blind Walker",forContact:"For contact"}},sidebar:{search:{placeholder:"Search (in development)"},categories:{bossList:"Boss list",racesStonesGods:"Races/Stones/Gods",perks:"Perks",equipment:"Equipment",tiers:"Tiers",talentsActiveEffectsScreams:"Talents/Active-effects/Screams",vampiresWerewolves:"Vampires and Werewolves",spoilers:"Spoilers",social:"Social",gamesRules:"Game's rules",alchemy:"Alchemy"}},bossList:{buttons:{ease:"Ease",medium:"Medium",strong:"Strong",dangerBoys:"Danger boys",guildBosses:"Guild bosses",priests:"Priests",dragons:"Dragons",superBosses:"Super bosses"},card:{exp:"Experience"}}})},ru:{translation:Object(u.a)({},{header:{links:{discord:"Discord",author:"Blind Walker",forContact:"\u041f\u043e \u043f\u043e\u0432\u043e\u0434\u0443 \u043e\u0448\u0438\u0431\u043e\u043a"}},sidebar:{search:{placeholder:"\u041f\u043e\u0438\u0441\u043a (\u0432 \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435)"},categories:{bossList:"\u0411\u043e\u0441\u0441-\u043b\u0438\u0441\u0442",racesStonesGods:"\u0420\u0430\u0441\u0441\u044b/\u041a\u0430\u043c\u043d\u0438/\u0411\u043e\u0433\u0438",perks:"\u041f\u0435\u0440\u043a\u0438",equipment:"\u042d\u043a\u0438\u043f\u0438\u0440\u043e\u0432\u043a\u0430",tiers:"\u0422\u0438\u0440\u044b",talentsActiveEffectsScreams:"\u0422\u0430\u043b\u0430\u043d\u0442\u044b/\u0410\u043a\u0442\u0438\u0432\u043d\u044b\u0435 \u044d\u0444\u0444\u0435\u043a\u0442\u044b/\u041a\u0440\u0438\u043a\u0438",vampiresWerewolves:"\u0412\u0430\u043c\u043f\u0438\u0440\u044b \u0438 \u041e\u0431\u043e\u0440\u043e\u0442\u043d\u0438",spoilers:"\u0421\u043f\u043e\u0439\u043b\u0435\u0440\u044b",social:"\u0421\u043e\u0446\u0438\u0430\u043b\u043e\u0447\u043a\u0430",gamesRules:"\u041f\u0440\u0430\u0432\u0438\u043b\u0430 \u0438\u0433\u0440\u044b",alchemy:"\u0410\u043b\u0445\u0438\u043c\u0438\u044f"}},bossList:{buttons:{ease:"\u041b\u0435\u0433\u043a\u0438\u0435",medium:"\u0421\u0440\u0435\u0434\u043d\u0438\u0435",strong:"\u0421\u0438\u043b\u044c\u043d\u044b\u0435",dangerBoys:"\u041e\u0441\u043e\u0431\u043e \u043e\u043f\u0430\u0441\u043d\u044b\u0435 \u043c\u0430\u043b\u044c\u0447\u0438\u0448\u043a\u0438",guildBosses:"\u0411\u043e\u0441\u0441\u044b \u0433\u0438\u043b\u044c\u0434\u0438\u0439",priests:"\u0416\u0440\u0435\u0446\u044b",dragons:"\u0418\u043c\u0435\u043d\u043d\u044b\u0435 \u0434\u0440\u0430\u043a\u043e\u043d\u044b",superBosses:"\u0421\u0443\u043f\u0435\u0440 \u0431\u043e\u0441\u0441\u044b"},card:{exp:"\u041e\u043f\u044b\u0442"}}})}},E=a(7),b=a(5),p=a(96),f=a(25),g=a(16),h=a.n(g),v={active:"BossList"},y=function(e){return{type:"sidebar/SET_ACTIVE_CATEGORY",payload:e}},_=a(14),O=a.n(_),w=a(20),N=a(36),S=a.n(N);S.a.initializeApp({apiKey:"AIzaSyAzC1se-FmMtEmKdo6rpR1CbQnnpnkEYx4",authDomain:"requiem-library.firebaseapp.com",databaseURL:"https://requiem-library.firebaseio.com",projectId:"requiem-library",storageBucket:"requiem-library.appspot.com",messagingSenderId:"369536495580",appId:"1:369536495580:web:3a65e4fadc689ef024a919",measurementId:"G-FVEBT02QL0"});var x=S.a.firestore(),C={getAllBosses:function(){var e=[];return x.collection("bosses").get().then((function(t){return t.forEach((function(t){var a=Object(u.a)({_id:t.id},t.data());return e=[].concat(Object(f.a)(e),[a])})),e}))},getBosses:function(){var e=Object(w.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=[],n=x.collection("bosses").where("category","==",t).orderBy("name").get().then((function(e){return e.forEach((function(e){var t=Object(u.a)({_id:e.id},e.data());return a=[].concat(Object(f.a)(a),[t])})),a.sort((function(e,t){return+e.experience-+t.experience}))})),e.abrupt("return",n);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),addNewBoss:function(e){x.collection("bosses").add(e).then((function(e){return console.log("Document was successfully written"),"Document was successfully written"})).catch((function(e){return console.log("Error adding document: ",e),e}))},addArrayOfBosses:function(e){e.forEach((function(e){x.collection("bosses").add(e).then((function(e){return console.log("Document was successfully written"),"Document was successfully written"})).catch((function(e){return console.log("Error adding document: ",e),e}))}))}},j={activeCategory:"ease",bossesList:[],errors:[],isLoading:!1,initialized:!1},k=function(e){return{type:"bosses/SET_ACTIVE_CATEGORY",payload:e}},L=function(e){return{type:"bosses/SET_BOSSES",payload:e}},T=function(e){return{type:"bosses/SET_IS_LOADING",payload:e}},A=function(){return{type:"bosses/SET_INITIALIZED"}},B=function(e){return function(){var t=Object(w.a)(O.a.mark((function t(a,n){var r,s,c;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=n(),s=r.content.bosses,a(T(!0)),t.next=4,C.getBosses(e);case 4:c=t.sent,s.initialized||a(A()),a(L(c)),setTimeout(Object(w.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a(T(!1));case 1:case"end":return e.stop()}}),e)}))),300);case 8:case"end":return t.stop()}}),t)})));return function(e,a){return t.apply(this,arguments)}}()},I=a(50),G={language:"ru"},F=function(e){return{type:"sidebar/SET_LANGUAGE",payload:e}},R=(a(71),function(e){var t=e.children,a=e.sidebar;return r.a.createElement("div",{className:h()("block",{sidebar:a})},t)}),q=(a(72),function(e){var t=e.placeholder;return r.a.createElement("div",{className:"input-field"},r.a.createElement("input",{placeholder:t,type:"text"}))}),D=(a(73),function(e){var t=e.first,a=e.second,n=e.value,s=e.onChange;return r.a.createElement("div",{className:"switcher"},r.a.createElement("span",{className:h()("left-language",{active:!n})},t),r.a.createElement("input",{type:"checkbox",className:"check",checked:n,onChange:s}),r.a.createElement("span",{className:h()("right-language",{active:n})},a))}),z=(a(74),function(){var e=Object(o.b)(),t=Object(p.a)().t,a=F,s=r.a.useState(!1),c=Object(I.a)(s,2),l=c[0],i=c[1];return Object(n.useEffect)((function(){e(a(l?"en":"ru"))}),[l]),r.a.createElement("header",{className:"header"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"header__logo-block"},r.a.createElement("span",{className:"logo"},"Requiem Library")),r.a.createElement("div",{className:"header__rightside"},r.a.createElement("ul",{className:"header__nav-items"},r.a.createElement("li",{className:"header__nav-items--item"},r.a.createElement("a",{href:"https://discord.gg/4yqdafW",target:"_blank"},t("header.links.discord"))),r.a.createElement("li",{className:"header__nav-items--item"},r.a.createElement("a",{href:"https://www.youtube.com/blindwalker",target:"_blank"},t("header.links.author"))),r.a.createElement("li",{className:"header__nav-items--item"},r.a.createElement("a",{href:"https://vk.com/id158962184",target:"_blank"},t("header.links.forContact")))),r.a.createElement(D,{first:"RU",second:"EN",value:l,onChange:function(){return i((function(e){return!e}))}}))))}),V=(a(80),function(){var e=Object(E.g)(),t=Object(o.b)(),a=Object(p.a)().t,s=Object(o.c)((function(e){return{active:e.sidebar.active}})).active,c=Object(n.useMemo)((function(){return[{title:a("sidebar.categories.bossList"),name:"BossList",path:"/boss-list"},{title:a("sidebar.categories.racesStonesGods"),name:"Races/Stones/Gods",path:"/races-stones-gods"},{title:a("sidebar.categories.perks"),name:"Perks",path:"/perks"},{title:a("sidebar.categories.equipment"),name:"Equipment",path:"/equipment"},{title:a("sidebar.categories.tiers"),name:"Tiers",path:"/tiers"},{title:a("sidebar.categories.talentsActiveEffectsScreams"),name:"Talents/Active-effects/Screams",path:"/talents-active_effects-screams"},{title:a("sidebar.categories.vampiresWerewolves"),name:"Vampires/Werewolves",path:"/vampires-werewolves"},{title:a("sidebar.categories.spoilers"),name:"Spoilers",path:"/spoilers"},{title:a("sidebar.categories.social"),name:"Social",path:"/social"},{title:a("sidebar.categories.gamesRules"),name:"GameRules",path:"/games-rules"},{title:a("sidebar.categories.alchemy"),name:"Alchemy",path:"/alchemy"}]}),[a]),l=y,i=r.a.useCallback((function(a,n){t(l(a)),e.push(n)}),[]);return r.a.createElement("div",{className:"sidebar"},r.a.createElement("div",{className:"search"},r.a.createElement(q,{placeholder:a("sidebar.search.placeholder")})),r.a.createElement("div",{className:"categories"},r.a.createElement(R,{sidebar:!0},r.a.createElement("ul",{className:"categories-list"},null===c||void 0===c?void 0:c.map((function(e,t){return r.a.createElement("li",{key:"".concat(t,"-").concat(e.name),onClick:function(){return i(e.name,e.path)},className:h()("categories-list__item",{active:e.name===s})},r.a.createElement("span",null,e.title))}))))))}),W=a(46),M=a.n(W),P=(a(82),function(e){e.idx;var t=e.bossInfo,a=(e.bossesList,Object(p.a)().t),n=t.name,s=t.experience,c=t.additionalInfo,l=t.location,o=t.links;return r.a.createElement("div",{className:"bossCard"},r.a.createElement("img",{src:M.a,alt:"Info icon",className:"bossCard-info"}),r.a.createElement("div",{className:"bossCard-content"},(null===o||void 0===o?void 0:o.name)?r.a.createElement("h4",{className:"bossCard-content__name"},r.a.createElement("a",{href:o.name,target:"_blank"},n)):r.a.createElement("h4",{className:"bossCard-content__name"},n),r.a.createElement("span",{className:"bossCard-content__experience"},r.a.createElement("b",null,a("bossList.card.exp"),":")," ",s),(null===o||void 0===o?void 0:o.additionalInfo)?r.a.createElement("p",{className:"bossCard-content__additional"},r.a.createElement("a",{href:o.additionalInfo,target:"_blank"},c)):r.a.createElement("p",{className:"bossCard-content__additional"},c),r.a.createElement("div",{className:"bossCard-content__location"},(null===o||void 0===o?void 0:o.location)?r.a.createElement("a",{href:o.location,target:"_blank"},r.a.createElement("div",{className:"bossCard-content__location--icon"},r.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{fill:"black",d:"M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5\r c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021\r C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333\r s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"}))),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null))),r.a.createElement("span",{className:"bossCard-content__location--text"},l)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"bossCard-content__location--icon"},r.a.createElement("svg",{version:"1.1",id:"Layer_1",x:"0px",y:"0px",viewBox:"0 0 512 512"},r.a.createElement("g",null,r.a.createElement("g",null,r.a.createElement("path",{fill:"black",d:"M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5\r c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021\r C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333\r s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"}))),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null),r.a.createElement("g",null))),r.a.createElement("span",{className:"bossCard-content__location--text"},l)))))}),U=a(47),Y=function(){return r.a.createElement(U.a,{speed:2,width:293,height:181,viewBox:"0 0 293 181",backgroundColor:"#f3f3f3",foregroundColor:"#ecebeb"},r.a.createElement("rect",{x:"24",y:"27",rx:"3",ry:"3",width:"191",height:"24"}),r.a.createElement("rect",{x:"48",y:"26",rx:"3",ry:"3",width:"52",height:"6"}),r.a.createElement("rect",{x:"24",y:"59",rx:"3",ry:"3",width:"111",height:"20"}),r.a.createElement("rect",{x:"24",y:"88",rx:"3",ry:"3",width:"243",height:"20"}),r.a.createElement("rect",{x:"51",y:"128",rx:"3",ry:"3",width:"92",height:"20"}),r.a.createElement("rect",{x:"24",y:"128",rx:"3",ry:"3",width:"19",height:"20"}),r.a.createElement("circle",{cx:"272",cy:"15",r:"10"}))},J=(a(83),function(){var e=Object(o.b)(),t=Object(p.a)(),a=t.t,s=(t.i18n,Object(o.c)((function(e){return{activeCategory:e.content.bosses.activeCategory,bossesList:e.content.bosses.bossesList,isLoading:e.content.bosses.isLoading,initialized:e.content.bosses.initialized,language:e.settings.language}}))),c=s.activeCategory,l=s.bossesList,i=s.isLoading,m=s.initialized,u=s.language,d=Object(n.useMemo)((function(){return[{title:a("bossList.buttons.ease"),name:"ease",color:"#BFE88B",shadowColor:"rgba(191, 232, 139, 0.5)"},{title:a("bossList.buttons.medium"),name:"medium",color:"#E9F98A",shadowColor:"rgba(233, 249, 138, 0.8)"},{title:a("bossList.buttons.strong"),name:"strong",color:"#F9D65D",shadowColor:"rgba(249, 214, 93, 0.6)"},{title:a("bossList.buttons.dangerBoys"),name:"dangerBoys",color:"#FFB13C",shadowColor:"rgba(255, 177, 59, 0.5)"},{title:a("bossList.buttons.guildBosses"),name:"guildBosses",color:"#FF993B",shadowColor:"rgba(255, 153, 59, 0.4)"},{title:a("bossList.buttons.priests"),name:"priests",color:"#FF6712",shadowColor:"rgba(255, 103, 18, 0.3)"},{title:a("bossList.buttons.dragons"),name:"dragons",color:"#FF452C",shadowColor:"rgba(255, 69, 44, 0.3)"},{title:a("bossList.buttons.superBosses"),name:"superBosses",color:"#E11111",shadowColor:"rgba(225, 17, 17, 0.3)"}]}),[a]);r.a.useEffect((function(){e(y("BossList")),l.length||e(B(c))}),[]);var E=r.a.useCallback((function(t){c!==t&&(e(k(t)),e(B(t)))}),[c]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Boss list"),r.a.createElement("meta",{name:"description",content:"Boss-list page"})),r.a.createElement("div",{className:"bossList"},r.a.createElement("div",{className:h()("bossList__selector",{en:"en"===u})},null===d||void 0===d?void 0:d.map((function(e,t){return r.a.createElement("div",{key:"".concat(e.name,"-").concat(t),className:h()("bossList__selector--select",{active:e.name===c}),style:{backgroundColor:"".concat(e.color),boxShadow:"1px 2px 4px ".concat(e.shadowColor)},onClick:function(){return E(e.name)}},e.title)}))),r.a.createElement("div",{className:"bossList__bosses"},l&&i?l.map((function(e,t){return r.a.createElement(Y,{key:t})})):l.map((function(e,t){return r.a.createElement(P,{key:e._id,idx:t,bossInfo:e,bossesList:l})})),!m&&Object(f.a)(Array(12)).map((function(e,t){return r.a.createElement(Y,{key:t})})))))}),K=(a(84),function(){var e=Object(o.b)();return r.a.useEffect((function(){e(y("Races/Stones/Gods"))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Races/Stones/Gods"),r.a.createElement("meta",{name:"description",content:"Races/Stones/Gods page"})),r.a.createElement("h1",{className:"todo"},"Races/Stones/Gods content"))}),Q=(a(85),function(){var e=Object(o.b)();return r.a.useEffect((function(){e(y("Alchemy"))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Alchemy"),r.a.createElement("meta",{name:"description",content:"Alchemy page"})),r.a.createElement("h1",{className:"todo"},"Alchemy content"))}),X=(a(86),function(){var e=Object(o.b)();return r.a.useEffect((function(){e(y("Equipment"))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Equipment"),r.a.createElement("meta",{name:"description",content:"Equipment page"})),r.a.createElement("h1",{className:"todo"},"Equipment content"))}),Z=(a(87),function(){var e=Object(o.b)();return r.a.useEffect((function(){e(y("GameRules"))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Game's rules"),r.a.createElement("meta",{name:"description",content:"Game's rules page"})),r.a.createElement("h1",{className:"todo"},"Game's rules content"))}),H=(a(88),function(){var e=Object(o.b)();return r.a.useEffect((function(){e(y("Perks"))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Perks"),r.a.createElement("meta",{name:"description",content:"Perks page"})),r.a.createElement("h1",{className:"todo"},"Perks content"))}),$=(a(89),function(){var e=Object(o.b)();return r.a.useEffect((function(){e(y("Social"))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Social"),r.a.createElement("meta",{name:"description",content:"Social page"})),r.a.createElement("h1",{className:"todo"},"Social content"))}),ee=(a(90),function(){var e=Object(o.b)();return r.a.useEffect((function(){e(y("Spoilers"))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Spoilers"),r.a.createElement("meta",{name:"description",content:"Spoilers page"})),r.a.createElement("h1",{className:"todo"},"Spoilers content"))}),te=(a(91),function(){var e=Object(o.b)();return r.a.useEffect((function(){e(y("Talents/Active-effects/Screams"))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Talents/Active effects/Screams"),r.a.createElement("meta",{name:"description",content:"Talents/Active effects/Screams page"})),r.a.createElement("h1",{className:"todo"},"Talents/Active effects/Screams content"))}),ae=(a(92),function(){var e=Object(o.b)();return r.a.useEffect((function(){e(y("Tiers"))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Tiers"),r.a.createElement("meta",{name:"description",content:"Tiers page"})),r.a.createElement("h1",{className:"todo"},"Tiers content"))}),ne=(a(93),function(){var e=Object(o.b)();return r.a.useEffect((function(){e(y("Vampires/Werewolves"))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(b.a,null,r.a.createElement("title",null,"Vampires/Werewolves"),r.a.createElement("meta",{name:"description",content:"Vampires/Werewolves page"})),r.a.createElement("h1",{className:"todo"},"Vampires and Werewolves content"))}),re=function(){var e=Object(p.a)().i18n,t=Object(o.c)((function(e){return{language:e.settings.language}})).language;return Object(n.useEffect)((function(){e.changeLanguage(t)}),[t]),r.a.createElement("div",{className:"wrapper"},r.a.createElement(b.a,{defaultTitle:"Requiem library",titleTemplate:"%s | Requiem library"},r.a.createElement("meta",{name:"description",content:"The library about users modification for The Elder Scrolls: Skyrim - Requiem"}),r.a.createElement("meta",{property:"og:type",content:"website"})),r.a.createElement(z,null),r.a.createElement("div",{className:"body-wrapper"},r.a.createElement("div",{className:"container"},r.a.createElement(V,null),r.a.createElement("div",{className:"content"},r.a.createElement(E.d,null,r.a.createElement(E.b,{path:"/boss-list",component:J,exact:!0}),r.a.createElement(E.b,{path:"/races-stones-gods",component:K,exact:!0}),r.a.createElement(E.b,{path:"/perks",component:H,exact:!0}),r.a.createElement(E.b,{path:"/equipment",component:X,exact:!0}),r.a.createElement(E.b,{path:"/tiers",component:ae,exact:!0}),r.a.createElement(E.b,{path:"/talents-active_effects-screams",component:te,exact:!0}),r.a.createElement(E.b,{path:"/vampires-werewolves",component:ne,exact:!0}),r.a.createElement(E.b,{path:"/spoilers",component:ee,exact:!0}),r.a.createElement(E.b,{path:"/social",component:$}),r.a.createElement(E.b,{path:"/games-rules",component:Z,exact:!0}),r.a.createElement(E.b,{path:"/alchemy",component:Q,exact:!0}),r.a.createElement(E.a,{to:"/boss-list"}))))))},se=a(17),ce=a(48),le=Object(se.c)({bosses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"bosses/SET_ACTIVE_CATEGORY":return Object(u.a)(Object(u.a)({},e),{},{activeCategory:t.payload});case"bosses/SET_BOSSES":var a=t.payload;a.sort((function(e,t){return Number(e.experience)>Number(t.experience)}));return Object(u.a)(Object(u.a)({},e),{},{bossesList:a});case"bosses/SET_ERRORS":var n=t.payload,r=n.sort((function(e,t){return Number(e.experience)>Number(t.experience)}));return Object(u.a)(Object(u.a)({},e),{},{bossesList:r});case"bosses/SET_INITIALIZED":return Object(u.a)(Object(u.a)({},e),{},{initialized:!0});case"bosses/SET_IS_LOADING":return Object(u.a)(Object(u.a)({},e),{},{isLoading:t.payload});default:return e}}}),oe=Object(se.c)({sidebar:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sidebar/SET_ACTIVE_CATEGORY":return Object(u.a)(Object(u.a)({},e),{},{active:t.payload});default:return e}},content:le,settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"sidebar/SET_LANGUAGE":return Object(u.a)(Object(u.a)({},e),{},{language:t.payload});default:return e}}}),ie=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||se.d,me=Object(se.e)(oe,ie(Object(se.a)(ce.a)));a(94);m.a.use(i.e).init({resources:d,lng:"ru"}),c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:me},r.a.createElement(l.a,null,r.a.createElement(re,null)))),document.getElementById("root"))}},[[51,1,2]]]);
//# sourceMappingURL=main.a54d3c38.chunk.js.map