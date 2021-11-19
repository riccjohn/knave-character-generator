(this["webpackJsonpknave-character-generator"]=this["webpackJsonpknave-character-generator"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"a":[{"name":"gambeson armor","count":1,"defense":12,"slots":1,"type":"armor","quality":3},{"name":"brigandine armor","count":1,"defense":13,"slots":2,"type":"armor","quality":4},{"name":"chain armor","count":1,"defense":14,"slots":3,"type":"armor","quality":5},{"name":"shield","count":1,"defense":1,"slots":1,"type":"armor","quality":1},{"name":"helmet","count":1,"defense":1,"slots":1,"type":"armor","quality":1},{"name":"half plate armor","count":1,"defense":15,"slots":4,"type":"armor","quality":6},{"name":"full plate armor","count":1,"defense":16,"slots":5,"type":"armor","quality":7}]}')},19:function(e){e.exports=JSON.parse('{"a":[{"count":1,"damage":"d6","hand":1,"name":"dagger","quality":3,"slots":1,"type":"weapon"},{"count":1,"damage":"d6","hand":1,"name":"cudgel","quality":3,"slots":1,"type":"weapon"},{"count":1,"damage":"d6","hand":1,"name":"sickle","quality":3,"slots":1,"type":"weapon"},{"count":1,"damage":"d6","hand":1,"name":"staff","quality":3,"slots":1,"type":"weapon"},{"count":1,"damage":"d8","hand":1,"name":"spear","quality":3,"slots":2,"type":"weapon"},{"count":1,"damage":"d8","hand":1,"name":"sword","quality":3,"slots":2,"type":"weapon"},{"count":1,"damage":"d8","hand":1,"name":"mace","quality":3,"slots":2,"type":"weapon"},{"count":1,"damage":"d8","hand":1,"name":"axe","quality":3,"slots":2,"type":"weapon"},{"count":1,"damage":"d8","hand":1,"name":"flail","quality":3,"slots":2,"type":"weapon"},{"count":1,"damage":"d10","hand":2,"name":"halberd","quality":3,"slots":3,"type":"weapon"},{"count":1,"damage":"d10","hand":2,"name":"warhammer","quality":3,"slots":3,"type":"weapon"},{"name":"longsword","count":1,"damage":"d10","hand":2,"quality":3,"slots":3,"type":"weapon"},{"name":"battleaxe","count":1,"damage":"d10","hand":2,"quality":3,"slots":3,"type":"weapon"},{"count":1,"damage":"d4","hand":1,"name":"sling","quality":1,"slots":1,"type":"weapon"},{"count":1,"damage":"d6","hand":2,"name":"bow","quality":3,"slots":2,"type":"weapon"},{"count":1,"damage":"d8","hand":2,"name":"crossbow","quality":3,"slots":3,"type":"weapon"}]}')},25:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var o,a=n(1),s=n.n(a),i=n(14),r=n.n(i),l=(n(25),n(2)),c=n(3),d=c.b.h2(o||(o=Object(l.a)(["\n  font-family: SebaldusGotisch;\n  font-size: 2em;\n  font-weight: normal;\n  color: black;\n"])));d.displayName="Subtitle";var u,m=d,h=c.b.table(u||(u=Object(l.a)(["\n  border-collapse: collapse;\n  width: 50%;\n  table-layout: fixed;\n\n  thead tr {\n    background: black;\n    color: white;\n  }\n\n  thead th {\n    padding: 0.5em 0;\n  }\n\n  tr:nth-child(even) {\n    background: #dbdbdb;\n  }\n\n  td,\n  th {\n    padding: 0.5em 0;\n    text-align: center;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 100%;\n  }\n"])));h.displayName="StyledTable";var b,f=h,p=c.b.h1(b||(b=Object(l.a)(["\n  font-family: SebaldusGotisch;\n  font-size: 3em;\n  font-weight: normal;\n  color: black;\n"])));p.displayName="Title";var y=p,j=n(8),g=n(20),x=n(4),O=n(7),w=function e(){Object(x.a)(this,e)};w.roll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=new Array(t).fill(void 0).map((function(){return w.randomNumber(e)}));return n.reduce((function(e,t){return e+t}),0)},w.randomNumber=function(e){return Math.floor(Math.random()*e+1)};var v,S,q=w,k=n(18),A=n(9),I=n(19),R=function(){function e(t){var n=this;Object(x.a)(this,e),this.itemSlots=void 0,this.items=void 0,this.armor=void 0,this.weapon=void 0,this.itemSlotsUsed=void 0,this.getRandomArmor=function(){var e=n.itemSlots-n.itemSlotsUsed,t=k.a.filter((function(t){return t.slots<e})),o=n.getRandomItem(t);return n.itemSlotsUsed+=o.slots,o},this.getRandomWeapon=function(){var e=n.itemSlots-n.itemSlotsUsed,t=I.a.filter((function(t){return t.slots<=e})),o=n.getRandomItem(t);return n.itemSlotsUsed+=o.slots,o},this.getRandomItem=function(e){var t=e.length;return e[Math.floor(Math.random()*t)]},this.itemSlots=t,this.itemSlotsUsed=6,this.armor=this.getRandomArmor(),this.weapon=this.getRandomWeapon(),this.items=this.getRandomGear()}return Object(O.a)(e,[{key:"getRandomGear",value:function(){var e=this,t=A.a,n=A.b,o=A.c,a=new Array(2).fill(void 0).map((function(n){return e.getRandomItem(t)})),s=this.getRandomItem(n),i=this.getRandomItem(o);return[].concat([{name:"rations",count:1,slots:1,type:"food"},{name:"rations",count:1,slots:1,type:"food"}],Object(j.a)(a),[s,i,this.armor,this.weapon])}}]),e}(),C=function(){function e(){var t=this;Object(x.a)(this,e),this.armor=void 0,this.copperPieces=void 0,this.gender=void 0,this.items=void 0,this.itemSlots=void 0,this.level=void 0,this.maxHp=void 0,this.weapon=void 0,this.abilities=void 0,this.generate=function(){t.level=1,t.abilities=t.generateAbilities(),t.copperPieces=t.rollForCopperPieces(),t.gender=t.randomGender(),t.itemSlots=t.constitution.defense,t.maxHp=t.rollHitPoints();var e=new R(t.itemSlots);t.items=e.items,t.armor=e.armor,t.weapon=e.weapon},this.rollForCopperPieces=function(){return q.roll(6,3)+20},this.rollHitPoints=function(){return q.roll(8)},this.generateAbilities=function(){var e=Array(6).fill(void 0).map(t.rollAbilityScore),n=Object(g.a)(e,6),o=n[0],a=n[1],s=n[2],i=n[3],r=n[4],l=n[5];return{charisma:{bonus:o,defense:o+10},constitution:{bonus:a,defense:a+10},dexterity:{bonus:s,defense:s+10},intelligence:{bonus:i,defense:i+10},strength:{bonus:r,defense:r+10},wisdom:{bonus:l,defense:l+10}}},this.rollAbilityScore=function(){var e=new Array(3).fill(void 0).map((function(){return q.roll(6)}));return Math.min.apply(Math,Object(j.a)(e))},this.randomGender=function(){var e=["cis-male","cis-female","non-binary","transgender","two-spirit","genderqueer","gender-fluid","gender-neutral"];return e[Math.floor(Math.random()*e.length)]},this.abilities={charisma:{bonus:3,defense:13},constitution:{bonus:3,defense:13},dexterity:{bonus:3,defense:13},intelligence:{bonus:3,defense:13},strength:{bonus:3,defense:13},wisdom:{bonus:3,defense:13}},this.armor={count:0,defense:0,name:"",quality:0,slots:0,type:"armor"},this.copperPieces=0,this.gender="non-binary",this.items=[{name:"",count:0,type:"food",slots:0}],this.itemSlots=0,this.level=0,this.maxHp=0,this.weapon={count:1,damage:"d6",hand:1,name:"",quality:0,slots:1,type:"weapon"}}return Object(O.a)(e,[{key:"abilityScores",get:function(){return this.abilities}},{key:"charisma",get:function(){return this.abilities.charisma}},{key:"constitution",get:function(){return this.abilities.constitution}},{key:"dexterity",get:function(){return this.abilities.dexterity}},{key:"intelligence",get:function(){return this.abilities.intelligence}},{key:"strength",get:function(){return this.abilities.strength}},{key:"wisdom",get:function(){return this.abilities.wisdom}}]),e}(),G=s.a.createContext({character:new C}),N=n(0),P=function(e){var t=e.bonus,n=e.defense,o=e.label,a=o.toLowerCase();return Object(N.jsxs)("tr",{"data-testid":"".concat(a,"-row"),role:"row",children:[Object(N.jsx)("td",{role:"cell",children:n}),Object(N.jsx)("th",{role:"cell",children:o}),Object(N.jsx)("td",{role:"cell",children:t})]})},M=function(){var e=Object(a.useContext)(G).character.abilityScores,t=e.charisma,n=e.constitution,o=e.dexterity,s=e.intelligence,i=e.strength,r=e.wisdom;return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(m,{children:"Ability Scores"}),Object(N.jsxs)(f,{children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{role:"row",children:[Object(N.jsx)("th",{role:"cell",children:"Defense"}),Object(N.jsx)("th",{role:"cell",children:"Ability"}),Object(N.jsx)("th",{role:"cell",children:"Bonus"})]})}),Object(N.jsxs)("tbody",{children:[Object(N.jsx)(P,{label:"STR",bonus:i.bonus,defense:i.defense}),Object(N.jsx)(P,{label:"DEX",bonus:o.bonus,defense:o.defense}),Object(N.jsx)(P,{label:"CON",bonus:n.bonus,defense:n.defense}),Object(N.jsx)(P,{label:"INT",bonus:s.bonus,defense:s.defense}),Object(N.jsx)(P,{label:"WIS",bonus:r.bonus,defense:r.defense}),Object(N.jsx)(P,{label:"CHA",bonus:t.bonus,defense:t.defense})]})]})]})},F=n.p+"static/media/Sebaldus-Gotisch.b7fba9af.woff",T=n.p+"static/media/Sebaldus-Gotisch.4bb1e1aa.woff2",U=Object(c.a)(v||(v=Object(l.a)(["\n    @font-face {\n        font-family: 'SebaldusGotisch';\n        src: local('SebaldusGotisch'), local('SebaldusGotisch'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n"])),F,T),H=function(e){var t=e.character,n=e.children,o={character:t};return Object(N.jsxs)(G.Provider,{value:o,children:[Object(N.jsx)(U,{}),n]})},D=function(e){var t=e.item,n=t.name.toLowerCase().split(" ").join("-");return Object(N.jsxs)("tr",{"data-testid":"".concat(n,"-row"),role:"row",children:[Object(N.jsx)("td",{role:"cell",children:t.name}),Object(N.jsx)("td",{role:"cell",children:t.defense?t.defense:"-"}),Object(N.jsx)("td",{role:"cell",children:t.damage?t.damage:"-"}),Object(N.jsx)("td",{role:"cell",children:t.slots})]})},J=function(){var e=Object(a.useContext)(G).character,t=e.items,n=e.itemSlots,o=e.items.reduce((function(e,t){return e+t.slots}),0);return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsx)(m,{children:"Items"}),Object(N.jsx)("p",{"data-testid":"item-slots-used",children:"Item Slots Used: ".concat(o,"/").concat(n)}),Object(N.jsxs)(f,{"data-testid":"item-table",children:[Object(N.jsx)("thead",{children:Object(N.jsxs)("tr",{role:"row",children:[Object(N.jsx)("th",{role:"cell","data-testid":"item-name-heading",children:"Item"}),Object(N.jsx)("th",{role:"cell","data-testid":"item-defense-heading",children:"Defense"}),Object(N.jsx)("th",{role:"cell","data-testid":"item-damage-heading",children:"Damage"}),Object(N.jsx)("th",{role:"cell","data-testid":"item-slots-heading",children:"Slots"})]})}),Object(N.jsx)("tbody",{children:t.map((function(e,t){return Object(N.jsx)(D,{item:e},e.name+t)}))})]})]})},L=c.b.div(S||(S=Object(l.a)(["\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100vh;\n"])));L.displayName="Layout";var z=function(){var e=new C;return e.generate(),Object(N.jsx)(H,{character:e,children:Object(N.jsxs)(L,{children:[Object(N.jsx)(y,{children:"Knave"}),Object(N.jsx)(m,{children:"Traits"}),Object(N.jsx)(J,{}),Object(N.jsx)(M,{})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),o(e),a(e),s(e),i(e)}))};r.a.render(Object(N.jsx)(s.a.StrictMode,{children:Object(N.jsx)(z,{})}),document.getElementById("root")),B()},9:function(e){e.exports=JSON.parse('{"a":[{"name":"rope (50 ft.)","slots":1,"type":"tool","count":1},{"name":"pulley","slots":1,"type":"tool","count":1},{"name":"candles","slots":1,"type":"light","count":5},{"name":"chain (10 ft.)","slots":1,"type":"tool","count":1},{"name":"chalk","slots":1,"type":"tool","count":10}],"b":[{"name":"air bladder","slots":1,"type":"tool","count":1},{"name":"bear trap","slots":1,"type":"tool","count":1},{"name":"shovel","slots":1,"type":"tool","count":1},{"name":"bellows","slots":1,"type":"tool","count":1},{"name":"grease","slots":1,"type":"tool","count":1}],"c":[{"name":"incense","slots":1,"type":"tool","count":1},{"name":"sponge","slots":1,"type":"tool","count":1},{"name":"lens","slots":1,"type":"tool","count":1},{"name":"perfume","slots":1,"type":"tool","count":1},{"name":"horn","slots":1,"type":"tool","count":1}]}')}},[[31,1,2]]]);
//# sourceMappingURL=main.0fa3c79d.chunk.js.map