(this.webpackJsonptabulka_deploy=this.webpackJsonptabulka_deploy||[]).push([[0],{12:function(t,e,a){t.exports=a.p+"static/media/logo.5d5d9eef.svg"},13:function(t,e,a){t.exports=a(21)},19:function(t,e,a){},20:function(t,e,a){},21:function(t,e,a){"use strict";a.r(e);var n=a(0),s=a.n(n),r=a(11),i=a.n(r),o=a(7),c=a.n(o),u=a(6),l=a(9),p=a(1),h=a(2),v=a(5),d=a(4),b=a(3),m=a(12),k=a.n(m),f=(a(19),function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this.props,e=t.bunkaHlavicky,a=t.ID_Radku+t.ID;return s.a.createElement("th",{key:a},e)}}]),a}(n.Component)),j=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this.props.vstup;this.bunky=[];var e,a=0,n=Object(u.a)(t);try{for(n.s();!(e=n.n()).done;){var r=e.value;this.bunky.push(s.a.createElement(f,{bunkaHlavicky:r,ID_Radku:this.props.ID,ID:a})),a+=1}}catch(i){n.e(i)}finally{n.f()}return s.a.createElement("tr",{key:"Radek Hlavicky"},this.bunky)}}]),a}(n.Component),y=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){this.props.vstup;return s.a.createElement("thead",{key:"Hlavicka"},s.a.createElement(j,{vstup:this.props.vstup,ID:"_h"}))}}]),a}(n.Component),O=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this.props,e=t.bunka,a=(t.ID_Radku,t.ID,this.props.ID_Radku+this.props.ID);return console.log("pisu v bunce ".concat(e,", ").concat(a)),s.a.createElement("td",{key:a},this.props.bunka)}}]),a}(n.Component),E=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this;this.akce=this.props.akce;var e=this.props.ID_Radku;return this.classname=e+"_Button",s.a.createElement("td",{key:this.classname},s.a.createElement("button",{onClick:function(){return t.akce(e)}},this.props.popis))}}]),a}(n.Component),g=a(8),D=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this.props,e=t.bunka,a=(t.ID_Radku,t.ID,this.props.ID_Radku+this.props.ID);return console.log("pisu v bunce ".concat(e,", ").concat(a)),s.a.createElement("td",{key:a},this.props.bunka)}}]),a}(n.Component),I=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(p.a)(this,a),(n=e.call(this,t)).state={value:n.props.value},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(t){var e=t.target.value;this.setState({value:e}),this.props.onChange(e)}},{key:"render",value:function(){var t=this.props,e=t.name,a=t.label;return s.a.createElement("label",{htmlFor:e},a,s.a.createElement("textarea",{id:e,type:"text",name:e,required:!0,value:this.state.value,onChange:this.handleChange}))}}]),a}(n.Component),z=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this;this.akce=this.props.akce;var e=this.props.ID_Radku;return this.classname=e+"_Button",s.a.createElement("td",{key:this.classname},s.a.createElement("button",{onClick:function(){return t.akce(e)}},this.props.popis))}}]),a}(n.Component),C=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var n;Object(p.a)(this,a),(n=e.call(this,t)).state={vstup:n.props.vstup,vystup:n.props.vstup};var s=function(t,e,a){var s,r=[];for(var i in n.state.vystup)i==e?r.push(a):r.push(n.state.vystup[i]);n.setState((s={},Object(g.a)(s,t,a),Object(g.a)(s,"vystup",r),s)),console.log("zapisuji stav ".concat(t,", ").concat(a," ").concat(e,", ").concat(r))};for(var r in n.handleChangeEdit=[],n.props.vstup)n.handleChangeEdit.push(s.bind(Object(v.a)(n),"zmena"+r.toString(),r));return n.ulozitEditaci=n.ulozitEditaci.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"render",value:function(){var t=this.props.ID;console.log("pisu v editoru ".concat(this.state.vystup));var e,a=[],n=[],r=0,i=Object(u.a)(this.state.vstup);try{for(i.s();!(e=i.n()).done;){var o=e.value;console.log("pisu v editoru ".concat(o));var c=s.a.createElement(D,{bunka:s.a.createElement(I,{name:r.toString(),label:"",value:this.state.vstup[r],onChange:this.handleChangeEdit[r]}),ID_Radku:t,ID:r});r+=1,a.push(c),n.push(c)}}catch(l){i.e(l)}finally{i.f()}return a.push(s.a.createElement(z,{ID_Radku:t,popis:"Ulo\u017eit",akce:this.ulozitEditaci}),s.a.createElement(z,{ID_Radku:t,popis:"Storno",akce:this.props.editovat})),a}},{key:"ulozitEditaci",value:function(){var t=this.state.vystup;console.log("ulozi edit v  radku ".concat(this.props.ID_Radku,", ").concat(t)),this.props.editRadku(this.props.ID_Radku,t),this.props.editovat()}}]),a}(n.Component),_=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(p.a)(this,a),(n=e.call(this,t)).state={edit_ID:!1,ID:n.props.ID},n.editovat=n.editovat.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"render",value:function(){var t=this.props,e=t.vstup;t.ID;console.log("pisu ".concat(e));var a=[],n=1;if(a.push(s.a.createElement(O,{bunka:this.props.ID,ID_Radku:this.props.ID,ID:n})),n+=1,!1===this.state.edit_ID){var r,i=Object(u.a)(e);try{for(i.s();!(r=i.n()).done;){var o=r.value;console.log("pisu v poli ".concat(o)),a.push(s.a.createElement(O,{bunka:o,ID_Radku:this.props.ID,ID:n})),n+=1}}catch(c){i.e(c)}finally{i.f()}a.push(s.a.createElement(E,{ID_Radku:this.props.ID,popis:"Smazat",akce:this.props.smazat}),s.a.createElement(E,{ID_Radku:this.props.ID,popis:"Editovat",akce:this.editovat}))}else a.push(s.a.createElement(C,{vstup:e,ID_Radku:this.props.ID,ID:n,editovat:this.editovat,editRadku:this.props.editovat}));return a}},{key:"editovat",value:function(){console.log("editace ".concat(this.ID));var t=!0;t=1!=this.state.edit_ID,this.setState({edit_ID:this.state.edit_ID=t})}}]),a}(n.Component),R=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this.props,e=t.poleBunek,a=t.ID;return s.a.createElement("tr",{key:a},e)}}]),a}(n.Component),F=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(p.a)(this,a),(n=e.call(this,t)).state={editRadku:null},n}return Object(h.a)(a,[{key:"render",value:function(){var t,e=this.props.vstup,a=[],n=1,r=Object(u.a)(e);try{for(r.s();!(t=r.n()).done;){var i=t.value;a.push(s.a.createElement(R,{poleBunek:s.a.createElement(_,{vstup:i,ID:n,smazat:this.props.smazat,editovat:this.props.editovat}),ID:n})),n+=1}}catch(o){r.e(o)}finally{r.f()}return s.a.createElement("tbody",{key:"TeloTabulky"},a)}}]),a}(n.Component),S=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(p.a)(this,a),(n=e.call(this,t)).state={value:n.props.value},n.handleChange=n.handleChange.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"handleChange",value:function(t){var e=t.target.value;this.setState({value:e}),this.props.onChange(e)}},{key:"render",value:function(){var t=this.props,e=t.name,a=t.label;return s.a.createElement("label",{htmlFor:e},a,s.a.createElement("input",{id:e,type:"text",name:e,required:!0,value:this.state.value,onChange:this.handleChange}))}}]),a}(n.Component),U=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var n;Object(p.a)(this,a),(n=e.call(this,t)).state={vstup:n.props.hlavicka,vystup:n.props.hlavicka,radek:null};var s=function(t,e,a){var s,r,i=[],o=0,c=Object(u.a)(n.props.hlavicka);try{for(c.s();!(r=c.n()).done;){r.value==e?i.push(a):i.push(n.state.vystup[o]),o++}}catch(l){c.e(l)}finally{c.f()}n.setState((s={},Object(g.a)(s,t,a),Object(g.a)(s,"vystup",i),s)),console.log("zapisuji stav ".concat(n.state.vystup))};n.handleChangeEdit=[];var r,i=Object(u.a)(n.props.hlavicka);try{for(i.s();!(r=i.n()).done;){var o=r.value;n.handleChangeEdit.push(s.bind(Object(v.a)(n),"zmena"+o.toString(),o))}}catch(c){i.e(c)}finally{i.f()}return n.ulozitUzivatele=n.ulozitUzivatele.bind(Object(v.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"handleSubmit",value:function(t){t.preventDefault();var e=[];for(var a in this.state.vystup)a>0&&e.push(this.state.vystup[a]);console.log("pridam v handle submit ".concat(e)),this.props.pridej(e)}},{key:"ulozitUzivatele",value:function(){var t=this.state.vystup;console.log("ulozi novy radek ".concat(t)),this.props.editRadku(this.props.ID_Radku,t),this.props.editovat()}},{key:"render",value:function(){console.log("zapisuji hlavicku ".concat(this.props.hlavicka,",\n        \t\t\t\t\t\t\t\t vstup:").concat(this.state.vstup,",\n        \t\t\t\t\t\t\t\t vystup:").concat(this.state.vystup," "));var t,e=[],a=0,n=Object(u.a)(this.props.hlavicka);try{for(n.s();!(t=n.n()).done;){var r=t.value;"ID"!=r&&e.push(s.a.createElement(S,{name:r,label:r,value:this.state.vstup[a],onChange:this.handleChangeEdit[a]}),s.a.createElement("br",null)),a++}}catch(i){n.e(i)}finally{n.f()}return s.a.createElement("form",{className:"addUserForm",onSubmit:this.handleSubmit},e,s.a.createElement("input",{type:"submit",value:"Ulo\u017e"}))}}]),a}(n.Component),P=function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(){return Object(p.a)(this,a),e.apply(this,arguments)}return Object(h.a)(a,[{key:"render",value:function(){var t=this;this.formPridat=null;var e="P\u0159idat u\u017eivatele";return!0===this.props.ukazForm&&(this.formPridat=s.a.createElement(U,{pridej:this.props.pridatFunkce,hlavicka:this.props.hlavicka}),e="Schovat formul\xe1\u0159"),console.log("pisuVtabulce ".concat(this.props.telo)),console.log("pisuVtabulce ".concat(this.props.hlavicka)),s.a.createElement("div",{className:"tabulka_blok"},s.a.createElement("h1",{id:"title"}),s.a.createElement("button",{onClick:function(){return t.props.formFunkce()}},e),this.formPridat,s.a.createElement("table",{id:"table"},s.a.createElement(y,{vstup:this.props.hlavicka}),s.a.createElement(F,{vstup:this.props.telo,smazat:this.props.smazat,editovat:this.props.editFunkce})))}}]),a}(n.Component),x=(s.a.Component,function(t){Object(d.a)(a,t);var e=Object(b.a)(a);function a(t){var n;return Object(p.a)(this,a),(n=e.call(this,t)).state={hlavicka:["ID","P\u0159\xedjmen\xed","Nick","email","m\u011bsto","ulice"],vstup:[],fetchData:[],loading:!0,ukazFormPromenna:!1,novyUzivatel:null},n.novyUz=function(t){n.setState({novyUzivatel:t})},n.removeRadek=n.removeRadek.bind(Object(v.a)(n)),n.ukazFormFunkce=n.ukazFormFunkce.bind(Object(v.a)(n)),n.pridejUzivatele=n.pridejUzivatele.bind(Object(v.a)(n)),n.editUzivatele=n.editUzivatele.bind(Object(v.a)(n)),n}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var t=Object(l.a)(c.a.mark((function t(){var e,a,n,s,r,i;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return"https://jsonplaceholder.typicode.com/users",t.next=3,fetch("https://jsonplaceholder.typicode.com/users");case 3:return e=t.sent,t.next=6,e.json();case 6:a=t.sent,n=[],s=Object(u.a)(a);try{for(s.s();!(r=s.n()).done;)i=r.value,n.push([i.name,i.username,i.email,i.address.city,i.address.street])}catch(o){s.e(o)}finally{s.f()}this.setState({vstup:n,fetchData:a,loading:!1});case 11:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){if(this.state.loading)return s.a.createElement("div",null,"loading data...");if(!this.state.fetchData)return s.a.createElement("div",null,"didn't get data");console.log(this.state.vstup);var t=s.a.createElement(P,{hlavicka:this.state.hlavicka,telo:this.state.vstup,smazat:this.removeRadek,ukazForm:this.state.ukazFormPromenna,formFunkce:this.ukazFormFunkce,pridatFunkce:this.pridejUzivatele,editFunkce:this.editUzivatele});return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"App-header"},s.a.createElement("img",{src:k.a,className:"App-logo",alt:"logo"}),s.a.createElement("h2",null,"React example table")),t)}},{key:"removeRadek",value:function(t){var e,a=0,n=[],s=Object(u.a)(this.state.vstup);try{for(s.s();!(e=s.n()).done;){var r=e.value;(a+=1)!==t&&n.push(r)}}catch(i){s.e(i)}finally{s.f()}this.setState({vstup:this.state.vstup=n}),console.log("ma\u017eu ted ".concat(t))}},{key:"editUzivatele",value:function(t,e){var a,n=0,s=[],r=Object(u.a)(this.state.vstup);try{for(r.s();!(a=r.n()).done;){var i=a.value;(n+=1)!==t?s.push(i):s.push(e)}}catch(o){r.e(o)}finally{r.f()}this.setState({vstup:this.state.vstup=s}),console.log("ma\u017eu ted ".concat(t))}},{key:"ukazFormFunkce",value:function(){var t=!1;0==this.state.ukazFormPromenna&&(t=!0),this.setState({ukazFormPridat:this.state.ukazFormPromenna=t}),console.log("ukazu formular")}},{key:"pridejUzivatele",value:function(t){console.log("pridam ve vstupu ".concat(t));var e=this.state.vstup;e.push(t),this.setState({vstup:this.state.vstup=e}),console.log("pridam ".concat(t))}}]),a}(s.a.Component));a(20);i.a.render(s.a.createElement(x,null),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.2b9bea20.chunk.js.map