(this["webpackJsonpknave-character-generator"]=this["webpackJsonpknave-character-generator"]||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"a":[{"name":"gambeson armor","count":1,"defense":12,"slots":1,"type":"armor","quality":3},{"name":"brigandine armor","count":1,"defense":13,"slots":2,"type":"armor","quality":4},{"name":"chain armor","count":1,"defense":14,"slots":3,"type":"armor","quality":5},{"name":"shield","count":1,"defense":1,"slots":1,"type":"armor","quality":1},{"name":"helmet","count":1,"defense":1,"slots":1,"type":"armor","quality":1},{"name":"half plate armor","count":1,"defense":15,"slots":4,"type":"armor","quality":6},{"name":"full plate armor","count":1,"defense":16,"slots":5,"type":"armor","quality":7}]}')},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var o,s=n(0),i=n.n(s),r=n(12),a=n.n(r),l=(n(24),n(13)),c=n(14).a.table(o||(o=Object(l.a)(["\n  border-collapse: collapse;\n  width: 100%;\n\n  caption {\n    font-weight: bold;\n  }\n\n  thead tr {\n    background: black;\n    color: white;\n  }\n\n  thead th {\n    padding: 0.5em 0;\n  }\n\n  tr:nth-child(even) {\n    background: #dbdbdb;\n  }\n\n  td,\n  th {\n    padding: 0.5em 0;\n    text-align: center;\n  }\n"])));c.displayName="StyledTable";var u=n(6),d=n(19),h=n(2),m=n(5),b=function e(){Object(h.a)(this,e)};b.roll=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,n=new Array(t).fill(void 0).map((function(){return b.randomNumber(e)}));return n.reduce((function(e,t){return e+t}),0)},b.randomNumber=function(e){return Math.floor(Math.random()*e+1)};var f=b,p=n(18),y=n(7),g=function(){function e(t){var n=this;Object(h.a)(this,e),this.itemSlots=void 0,this.items=void 0,this.armor=void 0,this.getRandomArmor=function(){return n.getRandomItem(p.a)},this.getRandomItem=function(e){var t=e.length;return e[Math.floor(Math.random()*t)]},this.itemSlots=t,this.armor=this.getRandomArmor(),this.items=this.getRandomGear()}return Object(m.a)(e,[{key:"getRandomGear",value:function(){var e=this,t=y.a,n=y.b,o=y.c,s=new Array(2).fill(void 0).map((function(n){return e.getRandomItem(t)})),i=this.getRandomItem(n),r=this.getRandomItem(o);return[].concat([{name:"rations",count:1,slots:1,type:"food"},{name:"rations",count:1,slots:1,type:"food"}],Object(u.a)(s),[i,r,this.armor])}}]),e}(),j=function(){function e(){var t=this;Object(h.a)(this,e),this.armor=void 0,this.copperPieces=void 0,this.gender=void 0,this.items=void 0,this.itemSlots=void 0,this.level=void 0,this.maxHp=void 0,this.abilities=void 0,this.generate=function(){t.level=1,t.abilities=t.generateAbilities(),t.copperPieces=t.rollForCopperPieces(),t.gender=t.randomGender(),t.itemSlots=t.constitution.defense,t.maxHp=t.rollHitPoints();var e=new g(t.itemSlots);t.items=e.items,t.armor=e.armor},this.rollForCopperPieces=function(){return f.roll(6,3)+20},this.rollHitPoints=function(){return f.roll(8)},this.generateAbilities=function(){var e=Array(6).fill(void 0).map(t.rollAbilityScore),n=Object(d.a)(e,6),o=n[0],s=n[1],i=n[2],r=n[3],a=n[4],l=n[5];return{charisma:{bonus:o,defense:o+10},constitution:{bonus:s,defense:s+10},dexterity:{bonus:i,defense:i+10},intelligence:{bonus:r,defense:r+10},strength:{bonus:a,defense:a+10},wisdom:{bonus:l,defense:l+10}}},this.rollAbilityScore=function(){var e=new Array(3).fill(void 0).map((function(){return f.roll(6)}));return Math.min.apply(Math,Object(u.a)(e))},this.randomGender=function(){var e=["cis-male","cis-female","non-binary","transgender","two-spirit","genderqueer","gender-fluid","gender-neutral"];return e[Math.floor(Math.random()*e.length)]},this.abilities={charisma:{bonus:3,defense:13},constitution:{bonus:3,defense:13},dexterity:{bonus:3,defense:13},intelligence:{bonus:3,defense:13},strength:{bonus:3,defense:13},wisdom:{bonus:3,defense:13}},this.armor={count:0,defense:0,name:"",quality:0,slots:0,type:"armor"},this.copperPieces=0,this.gender="non-binary",this.items=[{name:"",count:0,type:"food",slots:0}],this.itemSlots=0,this.level=0,this.maxHp=0}return Object(m.a)(e,[{key:"abilityScores",get:function(){return this.abilities}},{key:"charisma",get:function(){return this.abilities.charisma}},{key:"constitution",get:function(){return this.abilities.constitution}},{key:"dexterity",get:function(){return this.abilities.dexterity}},{key:"intelligence",get:function(){return this.abilities.intelligence}},{key:"strength",get:function(){return this.abilities.strength}},{key:"wisdom",get:function(){return this.abilities.wisdom}}]),e}(),v=i.a.createContext({character:new j}),x=n(1),O=function(e){var t=e.bonus,n=e.defense,o=e.label,s=o.toLowerCase();return Object(x.jsxs)("tr",{"data-testid":"".concat(s,"-row"),role:"row",children:[Object(x.jsx)("td",{role:"cell",children:n}),Object(x.jsx)("th",{role:"cell",children:o}),Object(x.jsx)("td",{role:"cell",children:t})]})},w=function(){var e=i.a.useContext(v).character.abilityScores,t=e.charisma,n=e.constitution,o=e.dexterity,s=e.intelligence,r=e.strength,a=e.wisdom;return Object(x.jsxs)(c,{children:[Object(x.jsx)("caption",{children:"Abilities"}),Object(x.jsx)("thead",{children:Object(x.jsxs)("tr",{role:"row",children:[Object(x.jsx)("th",{role:"cell",children:"Defense"}),Object(x.jsx)("th",{role:"cell",children:"Ability"}),Object(x.jsx)("th",{role:"cell",children:"Bonus"})]})}),Object(x.jsxs)("tbody",{children:[Object(x.jsx)(O,{label:"STR",bonus:r.bonus,defense:r.defense}),Object(x.jsx)(O,{label:"DEX",bonus:o.bonus,defense:o.defense}),Object(x.jsx)(O,{label:"CON",bonus:n.bonus,defense:n.defense}),Object(x.jsx)(O,{label:"INT",bonus:s.bonus,defense:s.defense}),Object(x.jsx)(O,{label:"WIS",bonus:a.bonus,defense:a.defense}),Object(x.jsx)(O,{label:"CHA",bonus:t.bonus,defense:t.defense})]})]})},S=function(){var e=new j;e.generate();var t={character:e};return Object(x.jsx)(v.Provider,{value:t,children:Object(x.jsx)("div",{className:"App",children:Object(x.jsx)(w,{})})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,o=t.getFID,s=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),o(e),s(e),i(e),r(e)}))};a.a.render(Object(x.jsx)(i.a.StrictMode,{children:Object(x.jsx)(S,{})}),document.getElementById("root")),k()},7:function(e){e.exports=JSON.parse('{"a":[{"name":"rope (50 ft.)","slots":1,"type":"tool","count":1},{"name":"pulley","slots":1,"type":"tool","count":1},{"name":"candles","slots":1,"type":"light","count":5},{"name":"chain (10 ft.)","slots":1,"type":"tool","count":1},{"name":"chalk","slots":1,"type":"tool","count":10}],"b":[{"name":"air bladder","slots":1,"type":"tool","count":1},{"name":"bear trap","slots":1,"type":"tool","count":1},{"name":"shovel","slots":1,"type":"tool","count":1},{"name":"bellows","slots":1,"type":"tool","count":1},{"name":"grease","slots":1,"type":"tool","count":1}],"c":[{"name":"incense","slots":1,"type":"tool","count":1},{"name":"sponge","slots":1,"type":"tool","count":1},{"name":"lens","slots":1,"type":"tool","count":1},{"name":"perfume","slots":1,"type":"tool","count":1},{"name":"horn","slots":1,"type":"tool","count":1}]}')}},[[30,1,2]]]);
//# sourceMappingURL=main.4329a8fd.chunk.js.map