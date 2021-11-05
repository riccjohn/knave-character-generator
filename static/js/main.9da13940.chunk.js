(this["webpackJsonpknave-character-generator"]=this["webpackJsonpknave-character-generator"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"a":[{"name":"gambeson armor","count":1,"defense":12,"slots":1,"type":"armor","quality":3},{"name":"brigandine armor","count":1,"defense":13,"slots":2,"type":"armor","quality":4},{"name":"chain armor","count":1,"defense":14,"slots":3,"type":"armor","quality":5},{"name":"shield","count":1,"defense":1,"slots":1,"type":"armor","quality":1},{"name":"helmet","count":1,"defense":1,"slots":1,"type":"armor","quality":1},{"name":"half plate armor","count":1,"defense":15,"slots":4,"type":"armor","quality":6},{"name":"full plate armor","count":1,"defense":16,"slots":5,"type":"armor","quality":7}]}')},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o,s=n(1),r=n.n(s),i=n(14),a=n.n(i),l=(n(24),n(2)),c=n(3),d=c.b.h2(o||(o=Object(l.a)(["\n  font-family: SebaldusGotisch;\n  font-size: 2em;\n  font-weight: normal;\n  color: black;\n"])));d.displayName="Subtitle";var u,h=d,b=c.b.table(u||(u=Object(l.a)(["\n  border-collapse: collapse;\n  width: 50%;\n  table-layout: fixed;\n\n  thead tr {\n    background: black;\n    color: white;\n  }\n\n  thead th {\n    padding: 0.5em 0;\n  }\n\n  tr:nth-child(even) {\n    background: #dbdbdb;\n  }\n\n  td,\n  th {\n    padding: 0.5em 0;\n    text-align: center;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 100%;\n  }\n"])));b.displayName="StyledTable";var m=b,f=n(8),j=n(19),p=n(4),y=n(7),g=function e(){Object(p.a)(this,e)};g.roll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=new Array(t).fill(void 0).map((function(){return g.randomNumber(e)}));return n.reduce((function(e,t){return e+t}),0)},g.randomNumber=function(e){return Math.floor(Math.random()*e+1)};var x,O,v=g,w=n(18),S=n(9),k=function(){function e(t){var n=this;Object(p.a)(this,e),this.itemSlots=void 0,this.items=void 0,this.armor=void 0,this.getRandomArmor=function(){return n.getRandomItem(w.a)},this.getRandomItem=function(e){var t=e.length;return e[Math.floor(Math.random()*t)]},this.itemSlots=t,this.armor=this.getRandomArmor(),this.items=this.getRandomGear()}return Object(y.a)(e,[{key:"getRandomGear",value:function(){var e=this,t=S.a,n=S.b,o=S.c,s=new Array(2).fill(void 0).map((function(n){return e.getRandomItem(t)})),r=this.getRandomItem(n),i=this.getRandomItem(o);return[].concat([{name:"rations",count:1,slots:1,type:"food"},{name:"rations",count:1,slots:1,type:"food"}],Object(f.a)(s),[r,i,this.armor])}}]),e}(),A=function(){function e(){var t=this;Object(p.a)(this,e),this.armor=void 0,this.copperPieces=void 0,this.gender=void 0,this.items=void 0,this.itemSlots=void 0,this.level=void 0,this.maxHp=void 0,this.abilities=void 0,this.generate=function(){t.level=1,t.abilities=t.generateAbilities(),t.copperPieces=t.rollForCopperPieces(),t.gender=t.randomGender(),t.itemSlots=t.constitution.defense,t.maxHp=t.rollHitPoints();var e=new k(t.itemSlots);t.items=e.items,t.armor=e.armor},this.rollForCopperPieces=function(){return v.roll(6,3)+20},this.rollHitPoints=function(){return v.roll(8)},this.generateAbilities=function(){var e=Array(6).fill(void 0).map(t.rollAbilityScore),n=Object(j.a)(e,6),o=n[0],s=n[1],r=n[2],i=n[3],a=n[4],l=n[5];return{charisma:{bonus:o,defense:o+10},constitution:{bonus:s,defense:s+10},dexterity:{bonus:r,defense:r+10},intelligence:{bonus:i,defense:i+10},strength:{bonus:a,defense:a+10},wisdom:{bonus:l,defense:l+10}}},this.rollAbilityScore=function(){var e=new Array(3).fill(void 0).map((function(){return v.roll(6)}));return Math.min.apply(Math,Object(f.a)(e))},this.randomGender=function(){var e=["cis-male","cis-female","non-binary","transgender","two-spirit","genderqueer","gender-fluid","gender-neutral"];return e[Math.floor(Math.random()*e.length)]},this.abilities={charisma:{bonus:3,defense:13},constitution:{bonus:3,defense:13},dexterity:{bonus:3,defense:13},intelligence:{bonus:3,defense:13},strength:{bonus:3,defense:13},wisdom:{bonus:3,defense:13}},this.armor={count:0,defense:0,name:"",quality:0,slots:0,type:"armor"},this.copperPieces=0,this.gender="non-binary",this.items=[{name:"",count:0,type:"food",slots:0}],this.itemSlots=0,this.level=0,this.maxHp=0}return Object(y.a)(e,[{key:"abilityScores",get:function(){return this.abilities}},{key:"charisma",get:function(){return this.abilities.charisma}},{key:"constitution",get:function(){return this.abilities.constitution}},{key:"dexterity",get:function(){return this.abilities.dexterity}},{key:"intelligence",get:function(){return this.abilities.intelligence}},{key:"strength",get:function(){return this.abilities.strength}},{key:"wisdom",get:function(){return this.abilities.wisdom}}]),e}(),C=r.a.createContext({character:new A}),I=n(0),G=function(e){var t=e.bonus,n=e.defense,o=e.label,s=o.toLowerCase();return Object(I.jsxs)("tr",{"data-testid":"".concat(s,"-row"),role:"row",children:[Object(I.jsx)("td",{role:"cell",children:n}),Object(I.jsx)("th",{role:"cell",children:o}),Object(I.jsx)("td",{role:"cell",children:t})]})},P=function(){var e=Object(s.useContext)(C).character.abilityScores,t=e.charisma,n=e.constitution,o=e.dexterity,r=e.intelligence,i=e.strength,a=e.wisdom;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(h,{children:"Ability Scores"}),Object(I.jsxs)(m,{children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{role:"row",children:[Object(I.jsx)("th",{role:"cell",children:"Defense"}),Object(I.jsx)("th",{role:"cell",children:"Ability"}),Object(I.jsx)("th",{role:"cell",children:"Bonus"})]})}),Object(I.jsxs)("tbody",{children:[Object(I.jsx)(G,{label:"STR",bonus:i.bonus,defense:i.defense}),Object(I.jsx)(G,{label:"DEX",bonus:o.bonus,defense:o.defense}),Object(I.jsx)(G,{label:"CON",bonus:n.bonus,defense:n.defense}),Object(I.jsx)(G,{label:"INT",bonus:r.bonus,defense:r.defense}),Object(I.jsx)(G,{label:"WIS",bonus:a.bonus,defense:a.defense}),Object(I.jsx)(G,{label:"CHA",bonus:t.bonus,defense:t.defense})]})]})]})},R=n.p+"static/media/Sebaldus-Gotisch.b7fba9af.woff",q=n.p+"static/media/Sebaldus-Gotisch.4bb1e1aa.woff2",M=Object(c.a)(x||(x=Object(l.a)(["\n    @font-face {\n        font-family: 'SebaldusGotisch';\n        src: local('SebaldusGotisch'), local('SebaldusGotisch'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n"])),R,q),N=function(e){var t=e.character,n=e.children,o={character:t};return Object(I.jsxs)(C.Provider,{value:o,children:[Object(I.jsx)(M,{}),n]})},F=function(e){var t=e.item;return Object(I.jsxs)("tr",{"data-testid":"".concat(t.name.toLowerCase(),"-row"),role:"row",children:[Object(I.jsx)("td",{role:"cell",children:t.name}),Object(I.jsx)("td",{role:"cell",children:t.defense?t.defense:"-"}),Object(I.jsx)("td",{role:"cell",children:t.damage?t.damage:"-"}),Object(I.jsx)("td",{role:"cell",children:t.slots})]})},H=function(){var e=Object(s.useContext)(C).character.items;return Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(h,{children:"Items"}),Object(I.jsxs)(m,{children:[Object(I.jsx)("thead",{children:Object(I.jsxs)("tr",{role:"row",children:[Object(I.jsx)("th",{role:"cell",children:"Item"}),Object(I.jsx)("th",{role:"cell",children:"Defense"}),Object(I.jsx)("th",{role:"cell",children:"Damage"}),Object(I.jsx)("th",{role:"cell",children:"Slots"})]})}),Object(I.jsx)("tbody",{children:e.map((function(e,t){return Object(I.jsx)(F,{item:e},e.name+t)}))})]})]})},T=c.b.div(O||(O=Object(l.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n"])));T.displayName="Layout";var D=function(){var e=new A;return e.generate(),Object(I.jsx)(N,{character:e,children:Object(I.jsxs)(T,{children:[Object(I.jsx)("h1",{children:"Knave"}),Object(I.jsx)(h,{children:"Traits"}),Object(I.jsx)(H,{}),Object(I.jsx)(P,{})]})})},L=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),o(e),s(e),r(e),i(e)}))};a.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(D,{})}),document.getElementById("root")),L()},9:function(e){e.exports=JSON.parse('{"a":[{"name":"rope (50 ft.)","slots":1,"type":"tool","count":1},{"name":"pulley","slots":1,"type":"tool","count":1},{"name":"candles","slots":1,"type":"light","count":5},{"name":"chain (10 ft.)","slots":1,"type":"tool","count":1},{"name":"chalk","slots":1,"type":"tool","count":10}],"b":[{"name":"air bladder","slots":1,"type":"tool","count":1},{"name":"bear trap","slots":1,"type":"tool","count":1},{"name":"shovel","slots":1,"type":"tool","count":1},{"name":"bellows","slots":1,"type":"tool","count":1},{"name":"grease","slots":1,"type":"tool","count":1}],"c":[{"name":"incense","slots":1,"type":"tool","count":1},{"name":"sponge","slots":1,"type":"tool","count":1},{"name":"lens","slots":1,"type":"tool","count":1},{"name":"perfume","slots":1,"type":"tool","count":1},{"name":"horn","slots":1,"type":"tool","count":1}]}')}},[[30,1,2]]]);
//# sourceMappingURL=main.9da13940.chunk.js.map