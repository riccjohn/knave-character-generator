(this["webpackJsonpknave-character-generator"]=this["webpackJsonpknave-character-generator"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"a":[{"name":"gambeson armor","count":1,"defense":12,"slots":1,"type":"armor","quality":3},{"name":"brigandine armor","count":1,"defense":13,"slots":2,"type":"armor","quality":4},{"name":"chain armor","count":1,"defense":14,"slots":3,"type":"armor","quality":5},{"name":"shield","count":1,"defense":1,"slots":1,"type":"armor","quality":1},{"name":"helmet","count":1,"defense":1,"slots":1,"type":"armor","quality":1},{"name":"half plate armor","count":1,"defense":15,"slots":4,"type":"armor","quality":6},{"name":"full plate armor","count":1,"defense":16,"slots":5,"type":"armor","quality":7}]}')},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o,s,i=n(0),r=n.n(i),a=n(14),l=n.n(a),c=(n(24),n(2)),u=n(3),d=u.b.table(o||(o=Object(c.a)(["\n  border-collapse: collapse;\n  width: 100%;\n\n  caption {\n    font-family: SebaldusGotisch;\n    font-size: 2em;\n  }\n\n  thead tr {\n    background: black;\n    color: white;\n  }\n\n  thead th {\n    padding: 0.5em 0;\n  }\n\n  tr:nth-child(even) {\n    background: #dbdbdb;\n  }\n\n  td,\n  th {\n    padding: 0.5em 0;\n    text-align: center;\n  }\n"])));d.displayName="StyledTable";var h=u.b.h2(s||(s=Object(c.a)(["\n  font-family: SebaldusGotisch;\n  font-size: 2em;\n  font-weight: normal;\n  color: black;\n"]))),b=n(8),m=n(19),f=n(4),p=n(7),j=function e(){Object(f.a)(this,e)};j.roll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=new Array(t).fill(void 0).map((function(){return j.randomNumber(e)}));return n.reduce((function(e,t){return e+t}),0)},j.randomNumber=function(e){return Math.floor(Math.random()*e+1)};var y,g=j,v=n(18),O=n(9),x=function(){function e(t){var n=this;Object(f.a)(this,e),this.itemSlots=void 0,this.items=void 0,this.armor=void 0,this.getRandomArmor=function(){return n.getRandomItem(v.a)},this.getRandomItem=function(e){var t=e.length;return e[Math.floor(Math.random()*t)]},this.itemSlots=t,this.armor=this.getRandomArmor(),this.items=this.getRandomGear()}return Object(p.a)(e,[{key:"getRandomGear",value:function(){var e=this,t=O.a,n=O.b,o=O.c,s=new Array(2).fill(void 0).map((function(n){return e.getRandomItem(t)})),i=this.getRandomItem(n),r=this.getRandomItem(o);return[].concat([{name:"rations",count:1,slots:1,type:"food"},{name:"rations",count:1,slots:1,type:"food"}],Object(b.a)(s),[i,r,this.armor])}}]),e}(),w=function(){function e(){var t=this;Object(f.a)(this,e),this.armor=void 0,this.copperPieces=void 0,this.gender=void 0,this.items=void 0,this.itemSlots=void 0,this.level=void 0,this.maxHp=void 0,this.abilities=void 0,this.generate=function(){t.level=1,t.abilities=t.generateAbilities(),t.copperPieces=t.rollForCopperPieces(),t.gender=t.randomGender(),t.itemSlots=t.constitution.defense,t.maxHp=t.rollHitPoints();var e=new x(t.itemSlots);t.items=e.items,t.armor=e.armor},this.rollForCopperPieces=function(){return g.roll(6,3)+20},this.rollHitPoints=function(){return g.roll(8)},this.generateAbilities=function(){var e=Array(6).fill(void 0).map(t.rollAbilityScore),n=Object(m.a)(e,6),o=n[0],s=n[1],i=n[2],r=n[3],a=n[4],l=n[5];return{charisma:{bonus:o,defense:o+10},constitution:{bonus:s,defense:s+10},dexterity:{bonus:i,defense:i+10},intelligence:{bonus:r,defense:r+10},strength:{bonus:a,defense:a+10},wisdom:{bonus:l,defense:l+10}}},this.rollAbilityScore=function(){var e=new Array(3).fill(void 0).map((function(){return g.roll(6)}));return Math.min.apply(Math,Object(b.a)(e))},this.randomGender=function(){var e=["cis-male","cis-female","non-binary","transgender","two-spirit","genderqueer","gender-fluid","gender-neutral"];return e[Math.floor(Math.random()*e.length)]},this.abilities={charisma:{bonus:3,defense:13},constitution:{bonus:3,defense:13},dexterity:{bonus:3,defense:13},intelligence:{bonus:3,defense:13},strength:{bonus:3,defense:13},wisdom:{bonus:3,defense:13}},this.armor={count:0,defense:0,name:"",quality:0,slots:0,type:"armor"},this.copperPieces=0,this.gender="non-binary",this.items=[{name:"",count:0,type:"food",slots:0}],this.itemSlots=0,this.level=0,this.maxHp=0}return Object(p.a)(e,[{key:"abilityScores",get:function(){return this.abilities}},{key:"charisma",get:function(){return this.abilities.charisma}},{key:"constitution",get:function(){return this.abilities.constitution}},{key:"dexterity",get:function(){return this.abilities.dexterity}},{key:"intelligence",get:function(){return this.abilities.intelligence}},{key:"strength",get:function(){return this.abilities.strength}},{key:"wisdom",get:function(){return this.abilities.wisdom}}]),e}(),S=r.a.createContext({character:new w}),k=n(1),A=function(e){var t=e.bonus,n=e.defense,o=e.label,s=o.toLowerCase();return Object(k.jsxs)("tr",{"data-testid":"".concat(s,"-row"),role:"row",children:[Object(k.jsx)("td",{role:"cell",children:n}),Object(k.jsx)("th",{role:"cell",children:o}),Object(k.jsx)("td",{role:"cell",children:t})]})},G=function(){var e=r.a.useContext(S).character.abilityScores,t=e.charisma,n=e.constitution,o=e.dexterity,s=e.intelligence,i=e.strength,a=e.wisdom;return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(h,{children:"Ability Scores"}),Object(k.jsxs)(d,{children:[Object(k.jsx)("thead",{children:Object(k.jsxs)("tr",{role:"row",children:[Object(k.jsx)("th",{role:"cell",children:"Defense"}),Object(k.jsx)("th",{role:"cell",children:"Ability"}),Object(k.jsx)("th",{role:"cell",children:"Bonus"})]})}),Object(k.jsxs)("tbody",{children:[Object(k.jsx)(A,{label:"STR",bonus:i.bonus,defense:i.defense}),Object(k.jsx)(A,{label:"DEX",bonus:o.bonus,defense:o.defense}),Object(k.jsx)(A,{label:"CON",bonus:n.bonus,defense:n.defense}),Object(k.jsx)(A,{label:"INT",bonus:s.bonus,defense:s.defense}),Object(k.jsx)(A,{label:"WIS",bonus:a.bonus,defense:a.defense}),Object(k.jsx)(A,{label:"CHA",bonus:t.bonus,defense:t.defense})]})]})]})},C=n.p+"static/media/Sebaldus-Gotisch.b7fba9af.woff",I=n.p+"static/media/Sebaldus-Gotisch.4bb1e1aa.woff2",P=Object(u.a)(y||(y=Object(c.a)(["\n    @font-face {\n        font-family: 'SebaldusGotisch';\n        src: local('SebaldusGotisch'), local('SebaldusGotisch'),\n        url(",") format('woff2'),\n        url(",") format('woff');\n        font-weight: 300;\n        font-style: normal;\n    }\n"])),C,I),R=function(e){var t=e.character,n=e.children,o={character:t};return Object(k.jsxs)(S.Provider,{value:o,children:[Object(k.jsx)(P,{}),n]})},q=function(){var e=new w;return e.generate(),Object(k.jsx)(R,{character:e,children:Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("h1",{children:"Knave"}),Object(k.jsx)(h,{children:"Traits"}),Object(k.jsx)(h,{children:"Items"}),Object(k.jsx)(G,{})]})})},M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),s(e),i(e),r(e)}))};l.a.render(Object(k.jsx)(r.a.StrictMode,{children:Object(k.jsx)(q,{})}),document.getElementById("root")),M()},9:function(e){e.exports=JSON.parse('{"a":[{"name":"rope (50 ft.)","slots":1,"type":"tool","count":1},{"name":"pulley","slots":1,"type":"tool","count":1},{"name":"candles","slots":1,"type":"light","count":5},{"name":"chain (10 ft.)","slots":1,"type":"tool","count":1},{"name":"chalk","slots":1,"type":"tool","count":10}],"b":[{"name":"air bladder","slots":1,"type":"tool","count":1},{"name":"bear trap","slots":1,"type":"tool","count":1},{"name":"shovel","slots":1,"type":"tool","count":1},{"name":"bellows","slots":1,"type":"tool","count":1},{"name":"grease","slots":1,"type":"tool","count":1}],"c":[{"name":"incense","slots":1,"type":"tool","count":1},{"name":"sponge","slots":1,"type":"tool","count":1},{"name":"lens","slots":1,"type":"tool","count":1},{"name":"perfume","slots":1,"type":"tool","count":1},{"name":"horn","slots":1,"type":"tool","count":1}]}')}},[[30,1,2]]]);
//# sourceMappingURL=main.2ecfd4e4.chunk.js.map