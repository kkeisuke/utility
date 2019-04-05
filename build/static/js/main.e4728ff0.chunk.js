(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{217:function(e,t,n){e.exports=n(443)},341:function(e,t,n){},358:function(e,t,n){},359:function(e,t,n){},360:function(e,t,n){},366:function(e,t,n){},368:function(e,t,n){},443:function(e,t,n){"use strict";n.r(t);var a,i,r,o,c,l,s,u=n(0),h=n(31),p=n(21),m=n(19),d=n(20),g=n(24),b=n(23),f=n(25),y=n(463),v=n(461),O=n(462),j=n(457),w=n(43),k=Object(p.b)("router")(a=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.router;return u.createElement(j.a,{size:"small",fixed:"left",vertical:!0,inverted:!0},u.createElement(j.a.Item,{header:!0},"Utility"),u.createElement(j.a.Item,{name:e.route.top.path,active:e.isActive(e.route.top.path),onClick:e.goTo},u.createElement(w.a,{name:"home"}),"TOP"),u.createElement(j.a.Item,{name:e.route.sqlFormatter.path,active:e.isActive(e.route.sqlFormatter.path),onClick:e.goTo},u.createElement(w.a,{name:"code"}),"SQL format"),u.createElement(j.a.Item,{name:e.route.jsonFormatter.path,active:e.isActive(e.route.jsonFormatter.path),onClick:e.goTo},u.createElement(w.a,{name:"code"}),"JSON format"),u.createElement(j.a.Item,{name:e.route.qrcode.path,active:e.isActive(e.route.qrcode.path),onClick:e.goTo},u.createElement(w.a,{name:"qrcode"}),"QRCode"),u.createElement(j.a.Item,{name:e.route.dummySVG.path,active:e.isActive(e.route.dummySVG.path),onClick:e.goTo},u.createElement(w.a,{name:"image"}),"Dummy SVG"),u.createElement(j.a.Item,{href:"https://plantuml-editor.kkeisuke.com/",target:"_blank"},u.createElement(w.a,{name:"external"}),"PlantUML Editor"))}}]),t}(u.Component))||a,E=n(459),S=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return u.createElement(E.a,{basic:!0,textAlign:"right"},u.createElement("a",{href:"https://github.com/kkeisuke/utility",target:"_blank"},u.createElement(w.a,{name:"github",size:"big"})),u.createElement("a",{href:"https://twitter.com/kkeisuke",target:"_blank"},u.createElement(w.a,{name:"twitter",size:"big"})),u.createElement("a",{href:"http://kkeisuke.com/",target:"_blank"},u.createElement(w.a,{name:"home",size:"big"})))}}]),t}(u.Component),x=n(451),I=n(460),F=n(454),C=Object(p.b)("router")(i=Object(p.c)(i=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.router;return u.createElement(E.a,{basic:!0},u.createElement(I.a,{as:"h1",icon:!0,textAlign:"center"},u.createElement(I.a.Content,null,"Utility"),u.createElement(I.a.Subheader,null,"utility.kkeisuke.com")),u.createElement(I.a,{as:"h2",dividing:!0},"Introduction"),u.createElement(E.a,{basic:!0},"utility tools by ",u.createElement("a",{href:"http://kkeisuke.com",target:"_blank"},"kkeisuke.com")),u.createElement(I.a,{as:"h2",dividing:!0},"Contents"),u.createElement(E.a,{basic:!0},u.createElement(F.a,{divided:!0,size:"large",relaxed:"very"},u.createElement(F.a.Item,null,u.createElement(F.a.Icon,{name:"code",size:"large",verticalAlign:"middle"}),u.createElement(F.a.Content,null,u.createElement(F.a.Header,null,u.createElement(x.a,{to:e.route.sqlFormatter.path},"SQL format")),u.createElement(F.a.Description,null,"pretty-printing SQL queries. ",u.createElement("a",{href:"https://github.com/zeroturnaround/sql-formatter",target:"_blank"},"zeroturnaround/sql-formatter ",u.createElement(w.a,{name:"external",size:"small"})),"."))),u.createElement(F.a.Item,null,u.createElement(F.a.Icon,{name:"code",size:"large",verticalAlign:"middle"}),u.createElement(F.a.Content,null,u.createElement(F.a.Header,null,u.createElement(x.a,{to:e.route.jsonFormatter.path},"JSON format")),u.createElement(F.a.Description,null,"pretty-printing JSON. ",u.createElement("a",{href:"https://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript",target:"_blank"},"stackoverflow.com ",u.createElement(w.a,{name:"external",size:"small"}))))),u.createElement(F.a.Item,null,u.createElement(F.a.Icon,{name:"qrcode",size:"large",verticalAlign:"middle"}),u.createElement(F.a.Content,null,u.createElement(F.a.Header,null,u.createElement(x.a,{to:e.route.qrcode.path},"QRCode")),u.createElement(F.a.Description,null,"qr code generator. ",u.createElement("a",{href:"https://github.com/soldair/node-qrcode",target:"_blank"},"soldair/node-qrcode ",u.createElement(w.a,{name:"external",size:"small"}))))),u.createElement(F.a.Item,null,u.createElement(F.a.Icon,{name:"image",size:"large",verticalAlign:"middle"}),u.createElement(F.a.Content,null,u.createElement(F.a.Header,null,u.createElement(x.a,{to:e.route.dummySVG.path},"Dummy SVG")))))),u.createElement(I.a,{as:"h2"},"Others"),u.createElement(E.a,{basic:!0},u.createElement(F.a,{divided:!0,size:"large"},u.createElement(F.a.Item,null,u.createElement(F.a.Icon,{name:"code",size:"large",verticalAlign:"middle"}),u.createElement(F.a.Content,null,u.createElement(F.a.Header,null,u.createElement("a",{href:"https://plantuml-editor.kkeisuke.com/",target:"_blank"},"PlantUML Editor ",u.createElement(w.a,{name:"external"}))),u.createElement(F.a.Description,null,"PlantUML online demo client"))))),u.createElement(I.a,{as:"h2",dividing:!0},"GitHub"),u.createElement(E.a,{basic:!0},u.createElement(F.a,{size:"large"},u.createElement(F.a.Item,null,u.createElement(F.a.Icon,{name:"github",size:"large"}),u.createElement(F.a.Content,{verticalAlign:"middle"},u.createElement("a",{href:"https://github.com/kkeisuke/utility",target:"_blank"},"https://github.com/kkeisuke/utility ",u.createElement(w.a,{name:"external",size:"small"})))))))}}]),t}(u.Component))||i)||i,z=n(453),T=n(97),q=(n(341),Object(p.b)("sqlFormatter")(r=Object(p.b)("sqlCodeMirror")(r=Object(p.c)(r=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.sqlFormatter,n=e.sqlCodeMirror;return u.createElement(E.a,{basic:!0},u.createElement(I.a,{as:"h1",dividing:!0},u.createElement(w.a,{name:"code"}),"SQL format"),u.createElement(z.a,null,u.createElement(z.a.Group,{widths:"equal"},u.createElement(z.a.TextArea,{label:"SQL",value:t.text,placeholder:"paste unformatted SQL",onChange:t.format})),u.createElement(z.a.Group,null,u.createElement(z.a.Select,{label:"mode",options:n.modes,value:n.options.mode,onChange:n.setOptions}))),u.createElement(T.Controlled,{value:t.sql,onBeforeChange:t.changeSql,options:n.options}))}}]),t}(u.Component))||r)||r)||r),D=(n(358),Object(p.b)("jsonFormatter")(o=Object(p.b)("jsonCodeMirror")(o=Object(p.c)(o=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).indentChange=function(e,t){n.props.jsonFormatter.setIndent(e,t),n.props.jsonCodeMirror.setIndent(e,t)},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.jsonFormatter,n=e.jsonCodeMirror;return u.createElement(E.a,{basic:!0},u.createElement(I.a,{as:"h1",dividing:!0},u.createElement(w.a,{name:"code"}),"JSON format"),u.createElement(z.a,null,u.createElement(z.a.Group,{widths:"equal"},u.createElement(z.a.TextArea,{label:"JSON",value:t.text,placeholder:"paste unformatted JSON",onChange:t.format})),u.createElement(z.a.Group,null,u.createElement(z.a.Select,{label:"indent",options:t.indents,value:t.indent,onChange:this.indentChange}))),u.createElement(T.Controlled,{value:t.json,onBeforeChange:t.changeJson,options:n.options}))}}]),t}(u.Component))||o)||o)||o),M=n(455),L=n(452),P=n(456),A=(n(359),Object(p.b)("qrcode")(c=Object(p.c)(c=function(e){function t(){var e,n;Object(m.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(g.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).clickFile=function(){n.props.qrcode.file&&n.props.qrcode.file.click()},n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.qrcode;e.setFile(document.getElementById("file")),e.setCanvas(document.getElementById("canvas")),e.toCanvas(),e.addFileReadEventListener()}},{key:"render",value:function(){var e=this.props.qrcode;return u.createElement(E.a,{basic:!0},u.createElement(I.a,{as:"h1",dividing:!0},u.createElement(w.a,{name:"qrcode"}),"QRCode"),u.createElement(M.a,{warning:!0,compact:!0,size:"small"},u.createElement("p",null,"Recommended browsers are Chrome and Safari")),u.createElement(z.a,null,u.createElement(z.a.Group,null,u.createElement(z.a.Input,{label:"text",value:e.text,onChange:e.changeText,width:8})),u.createElement(z.a.Group,null,u.createElement(z.a.Input,{label:"width",value:e.width,type:"number",min:e.widthMin,max:e.widthMax,onChange:e.changeWidth,width:2}),u.createElement(z.a.Input,{label:"margin",value:e.margin,type:"number",min:e.marginMin,max:e.marginMax,onChange:e.changeMargin,width:2}),u.createElement(z.a.Input,{label:"color dark",value:e.dark,pattern:e.colorPattern,onChange:e.changeDark,width:2}),u.createElement(z.a.Input,{label:"color light",value:e.light,pattern:e.colorPattern,onChange:e.changeLight,width:2})),u.createElement(L.a,{hidden:!0}),u.createElement(z.a.Group,{inline:!0},u.createElement(z.a.Input,{label:"icon scale",value:e.iconScale,type:"number",step:e.iconScaleStep,min:e.iconScaleMin,max:e.iconScaleMax,onChange:e.changeIconScale}),u.createElement(P.a,{type:"button",onClick:this.clickFile,primary:!0},"add icon"),"\u3000",e.uploadedFile?e.uploadedFile.name:""," ",e.uploadedFile?"( ".concat(e.uploadedFile.type," )"):"",u.createElement("input",{type:"file",id:"file"})),u.createElement(L.a,{hidden:!0}),u.createElement(z.a.Group,{inline:!0},u.createElement(P.a.Group,null,u.createElement(P.a,{type:"button",onClick:e.resetAction},"Reset"),u.createElement(P.a.Or,null),u.createElement(P.a,{type:"button",positive:!0,onClick:e.toCanvas,disabled:!Boolean(e.text)},"Create")))),u.createElement(L.a,{hidden:!0}),u.createElement(E.a,{compact:!0},u.createElement("canvas",{id:"canvas"})))}}]),t}(u.Component))||c)||c),G=n(458),W=(n(360),Object(p.b)("dummySVG")(l=Object(p.c)(l=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(g.a)(this,Object(b.a)(t).call(this,e))).timer=0,n.svgHTML="",n.src="",n.href="",n.inputWidth=void 0,n.inputHeight=void 0,n.inputFontSize=void 0,n.svg=void 0,n.canvas=void 0,n.onFocus=function(){if(n.inputWidth.current&&n.inputWidth.current.children[1]){var e=n.inputWidth.current.children[1].children[0];e.addEventListener("focus",function(){e.select()})}if(n.inputHeight.current&&n.inputHeight.current.children[1]){var t=n.inputHeight.current.children[1].children[0];t.addEventListener("focus",function(){t.select()})}if(n.inputFontSize.current&&n.inputFontSize.current.children[1]){var a=n.inputFontSize.current.children[1].children[0];a.addEventListener("focus",function(){a.select()})}},n.setSVGHTML=function(){n.svgHTML=n.svg.current?n.svg.current.innerHTML:""},n.drawImage=function(){var e=n.canvas.current?n.canvas.current.getContext("2d"):null;if(e){n.src="data:image/svg+xml;charset=utf-8;base64,".concat(btoa(unescape(encodeURIComponent(n.svgHTML))));var t=new Image;t.src=n.src,t.onload=function(){e.imageSmoothingQuality="high",e.drawImage(t,0,0),n.forceUpdate()}}},n.download=function(){var e=n.props.dummySVG,t=document.createElement("a");n.href=n.canvas.current?n.canvas.current.toDataURL("image/png"):"",t.href=n.href,t.download="".concat(e.text||e.background,".png"),document.body.appendChild(t),t.click(),document.body.removeChild(t)},n.inputWidth=u.createRef(),n.inputHeight=u.createRef(),n.inputFontSize=u.createRef(),n.svg=u.createRef(),n.canvas=u.createRef(),n}return Object(f.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.onFocus(),this.componentDidUpdate()}},{key:"componentDidUpdate",value:function(){var e=this;this.timer&&window.clearTimeout(this.timer),this.timer=window.setTimeout(function(){e.setSVGHTML(),e.drawImage()},500)}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.timer)}},{key:"render",value:function(){var e=this.props.dummySVG;return u.createElement(E.a,{basic:!0},u.createElement(I.a,{as:"h1",dividing:!0},u.createElement(w.a,{name:"image"}),"Dummy SVG"),u.createElement(z.a,null,u.createElement(z.a.Group,null,u.createElement(G.a,{innerRef:this.inputWidth},u.createElement(z.a.Input,{label:"width",value:e.width,type:"number",onChange:e.changeWidth,width:2})),u.createElement(G.a,{innerRef:this.inputHeight},u.createElement(z.a.Input,{label:"height",value:e.height,type:"number",onChange:e.changeHeight,width:2})),u.createElement(z.a.Input,{label:"text",value:e.text,onChange:e.changeText,width:4})),u.createElement(z.a.Group,null,u.createElement(z.a.Input,{label:"background",value:e.background,onChange:e.changeBackground,width:2}),u.createElement(z.a.Input,{label:"color",value:e.color,onChange:e.changeColor,width:2})),u.createElement(z.a.Group,null,u.createElement(G.a,{innerRef:this.inputFontSize},u.createElement(z.a.Input,{label:"font size",value:e.fontSize,type:"number",onChange:e.changeFontSize,width:2})),u.createElement(z.a.Input,{label:"font family",value:e.fontFamily,onChange:e.changeFontFamily,width:6})),u.createElement(z.a.Group,{inline:!0},u.createElement(P.a,{positive:!0,onClick:this.download,disabled:!Boolean(e.width)||!Boolean(e.height)},"download png image"))),u.createElement(L.a,{hidden:!0}),u.createElement("div",{ref:this.svg},u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.width,height:e.height,fontFamily:e.fontFamily,fontSize:e.fontSize},u.createElement("rect",{width:e.width,height:e.height,fill:"#".concat(e.background)}),u.createElement("text",{textAnchor:"middle",x:"50%",y:"50%",dy:".3em",fill:"#".concat(e.color)},e.text))),u.createElement("canvas",{ref:this.canvas,width:e.width,height:e.height,className:"canvas"}),u.createElement(L.a,{hidden:!0}),u.createElement(z.a,null,u.createElement(z.a.Group,null,u.createElement(z.a.TextArea,{label:"SVG",value:this.svgHTML,width:8})),u.createElement(z.a.Group,null,u.createElement(z.a.TextArea,{label:"data:image/svg+xml",value:this.src,width:8})),u.createElement(z.a.Group,null,u.createElement(z.a.TextArea,{label:"data:image/png",value:this.href,width:8}))))}}]),t}(u.Component))||l)||l),H=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return u.createElement(E.a,{basic:!0},u.createElement(I.a,{as:"h1",dividing:!0},"Not Found"))}}]),t}(u.Component),N=(n(361),n(362),n(363),n(364),n(365),n(366),Object(p.b)("router")(s=Object(p.c)(s=function(e){function t(){return Object(m.a)(this,t),Object(g.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.router;return u.createElement(y.a,{history:e.history},u.createElement("div",{className:"App"},u.createElement(k,null),u.createElement("div",{className:"main"},u.createElement(v.a,null,u.createElement(O.a,{exact:!0,path:"/",component:C}),u.createElement(O.a,{path:"/sql_formatter",component:q}),u.createElement(O.a,{path:"/json_formatter",component:D}),u.createElement(O.a,{path:"/qrcode",component:A}),u.createElement(O.a,{path:"/dummy_svg",component:W}),u.createElement(O.a,{component:H})),u.createElement(S,null))))}}]),t}(u.Component))||s)||s),R=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function U(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}n(368);var J,_,K,B,V,Q,$,X,Y,Z,ee,te,ne,ae,ie,re,oe,ce,le,se,ue,he,pe,me,de,ge,be,fe,ye,ve,Oe,je,we,ke,Ee,Se,xe,Ie,Fe,Ce,ze,Te,qe,De,Me,Le,Pe,Ae,Ge,We,He,Ne,Re,Ue,Je,_e,Ke,Be,Ve,Qe,$e,Xe,Ye,Ze,et,tt,nt,at=n(8),it=n(6),rt=n(99),ot=(J=it.c.bound,_=it.c.bound,K=function(){function e(){var t=this;Object(m.a)(this,e),this.history=Object(rt.a)(),this.route={top:{path:"/",title:"Utility"},sqlFormatter:{path:"/sql_formatter",title:"SQL format : Utility"},jsonFormatter:{path:"/json_formatter",title:"JSON format : Utility"},qrcode:{path:"/qrcode",title:"QRCode : Utility"},dummySVG:{path:"/dummy_svg",title:"Dummy SVG : Utility"}},this.changeTitle(this.history.location),this.history.listen(function(e){t.changeTitle(e)})}return Object(d.a)(e,[{key:"changeTitle",value:function(e){for(var t in this.route)this.route.hasOwnProperty(t)&&this.route[t].path===e.pathname&&(document.title=this.route[t].title)}},{key:"isActive",value:function(e){return location.pathname===e}},{key:"goTo",value:function(e,t){var n=t.name;this.history.push(String(n))}}]),e}(),Object(at.a)(K.prototype,"isActive",[J],Object.getOwnPropertyDescriptor(K.prototype,"isActive"),K.prototype),Object(at.a)(K.prototype,"goTo",[_],Object.getOwnPropertyDescriptor(K.prototype,"goTo"),K.prototype),K),ct=n(17),lt=(n(60),n(203)),st=n.n(lt),ut=(B=it.c.bound,V=it.c.bound,Q=function(){function e(){Object(m.a)(this,e),this.defaultText="\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",Object(ct.a)(this,"text",$,this),Object(ct.a)(this,"sql",X,this),this.localStorageKey="sqlFormatterStore.text";var t=this.getText();t?(this.setText(t),this.setSql(this.sqlFormat(t))):this.setSql(this.defaultText)}return Object(d.a)(e,[{key:"getText",value:function(){var e="";return window.localStorage&&null!==window.localStorage.getItem(this.localStorageKey)&&(e=String(window.localStorage.getItem(this.localStorageKey))),e}},{key:"setText",value:function(e){this.text=e}},{key:"setlocalStorage",value:function(e){window.localStorage&&window.localStorage.setItem(this.localStorageKey,e)}},{key:"setSql",value:function(e){this.sql=e||this.defaultText}},{key:"sqlFormat",value:function(e){return st.a.format(e).split(";").join("\n;\n")}},{key:"format",value:function(e,t){var n=t.value;this.setText(String(n)),this.setlocalStorage(String(n)),this.setSql(this.sqlFormat(String(n)))}},{key:"changeSql",value:function(e,t,n){this.setSql(n)}}]),e}(),$=Object(at.a)(Q.prototype,"text",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),X=Object(at.a)(Q.prototype,"sql",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Object(at.a)(Q.prototype,"format",[B],Object.getOwnPropertyDescriptor(Q.prototype,"format"),Q.prototype),Object(at.a)(Q.prototype,"changeSql",[V],Object.getOwnPropertyDescriptor(Q.prototype,"changeSql"),Q.prototype),Q),ht=(Y=it.c.bound,Z=function(){function e(){Object(m.a)(this,e),Object(ct.a)(this,"options",ee,this),this.modes=[{key:"sql",text:"text/x-sql",value:"text/x-sql"},{key:"mysql",text:"text/x-mysql",value:"text/x-mysql"},{key:"mssql",text:"text/x-mssql",value:"text/x-mssql"},{key:"pgsql",text:"text/x-pgsql",value:"text/x-pgsql"}],this.localStorageKey="sqlCodeMirrorStore.options.mode";var t=this.getMode();t&&this.setMode(t)}return Object(d.a)(e,[{key:"getMode",value:function(){var e="";return window.localStorage&&null!==window.localStorage.getItem(this.localStorageKey)&&(e=String(window.localStorage.getItem(this.localStorageKey))),e}},{key:"setMode",value:function(e){this.options.mode=e}},{key:"setlocalStorage",value:function(e){window.localStorage&&window.localStorage.setItem(this.localStorageKey,e)}},{key:"setOptions",value:function(e,t){var n=t.value;this.setMode(String(n)),this.setlocalStorage(String(n))}}]),e}(),ee=Object(at.a)(Z.prototype,"options",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{lineNumbers:!0,mode:"text/x-sql",theme:"solarized dark"}}}),Object(at.a)(Z.prototype,"setOptions",[Y],Object.getOwnPropertyDescriptor(Z.prototype,"setOptions"),Z.prototype),Z),pt=(te=it.c.bound,ne=it.c.bound,ae=it.c.bound,ie=function(){function e(){Object(m.a)(this,e),this.defaultText="\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",Object(ct.a)(this,"indent",re,this),Object(ct.a)(this,"text",oe,this),Object(ct.a)(this,"json",ce,this),this.indents=[{key:"space2",text:"space 2",value:"2"},{key:"space4",text:"space 4",value:"4"},{key:"tab",text:"tab",value:"\t"}],this.localStorageKeyForIndet="jsonFormatterStore.indent",this.localStorageKeyForText="jsonFormatterStore.text";var t=this.getIndent(),n=this.getText();t&&this._setIndent(t),n?(this.setText(n),this.setJson(this.stringify(n))):this.setJson(this.defaultText)}return Object(d.a)(e,[{key:"getText",value:function(){var e="";return window.localStorage&&null!==window.localStorage.getItem(this.localStorageKeyForText)&&(e=String(window.localStorage.getItem(this.localStorageKeyForText))),e}},{key:"setText",value:function(e){this.text=e}},{key:"setTextlocalStorage",value:function(e){window.localStorage&&window.localStorage.setItem(this.localStorageKeyForText,e)}},{key:"setJson",value:function(e){this.json=e||this.defaultText}},{key:"getIndent",value:function(){var e="";return window.localStorage&&null!==window.localStorage.getItem(this.localStorageKeyForIndet)&&(e=String(window.localStorage.getItem(this.localStorageKeyForIndet))),e}},{key:"_setIndent",value:function(e){this.indent=e}},{key:"setIndentlocalStorage",value:function(e){window.localStorage&&window.localStorage.setItem(this.localStorageKeyForIndet,e)}},{key:"stringify",value:function(e){var t=!1,n="";try{e&&(t=!!(n=JSON.parse(e)))}catch(a){n="".concat(a.name," : ").concat(a.message)}return t?JSON.stringify(n,null,this.castIndent()):n}},{key:"castIndent",value:function(){return Number(this.indent)>0?Number(this.indent):this.indent}},{key:"format",value:function(e,t){var n=t.value;this.setText(String(n)),this.setTextlocalStorage(String(n)),this.setJson(this.stringify(String(n)))}},{key:"setIndent",value:function(e,t){var n=t.value;this._setIndent(String(n)),this.setIndentlocalStorage(String(n)),this.setJson(this.stringify(this.text))}},{key:"changeJson",value:function(e,t,n){this.setJson(n)}}]),e}(),re=Object(at.a)(ie.prototype,"indent",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"2"}}),oe=Object(at.a)(ie.prototype,"text",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),ce=Object(at.a)(ie.prototype,"json",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Object(at.a)(ie.prototype,"format",[te],Object.getOwnPropertyDescriptor(ie.prototype,"format"),ie.prototype),Object(at.a)(ie.prototype,"setIndent",[ne],Object.getOwnPropertyDescriptor(ie.prototype,"setIndent"),ie.prototype),Object(at.a)(ie.prototype,"changeJson",[ae],Object.getOwnPropertyDescriptor(ie.prototype,"changeJson"),ie.prototype),ie),mt=(le=it.c.bound,se=function(){function e(){Object(m.a)(this,e),Object(ct.a)(this,"options",ue,this)}return Object(d.a)(e,[{key:"setIndentUnit",value:function(e){this.options.indentUnit=e>0?e:4}},{key:"setIndentWithTabs",value:function(e){this.options.indentWithTabs=!(e>0)}},{key:"setIndent",value:function(e,t){var n=t.value;this.setIndentUnit(Number(n)),this.setIndentWithTabs(Number(n))}}]),e}(),ue=Object(at.a)(se.prototype,"options",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return{lineNumbers:!0,mode:"application/ld+json",theme:"solarized dark",indentUnit:2,indentWithTabs:!1}}}),Object(at.a)(se.prototype,"setIndent",[le],Object.getOwnPropertyDescriptor(se.prototype,"setIndent"),se.prototype),se),dt=n(204),gt=n.n(dt),bt=n(205),ft=n.n(bt),yt=(he=it.c.bound,pe=it.c.bound,me=it.c.bound,de=it.c.bound,ge=it.c.bound,be=it.c.bound,fe=it.c.bound,ye=it.c.bound,ve=it.c.bound,Oe=it.c.bound,je=it.c.bound,we=function(){function e(){Object(m.a)(this,e),Object(ct.a)(this,"text",ke,this),Object(ct.a)(this,"width",Ee,this),Object(ct.a)(this,"margin",Se,this),Object(ct.a)(this,"marginMin",xe,this),Object(ct.a)(this,"marginMax",Ie,this),Object(ct.a)(this,"widthMin",Fe,this),Object(ct.a)(this,"widthMax",Ce,this),Object(ct.a)(this,"dark",ze,this),Object(ct.a)(this,"light",Te,this),Object(ct.a)(this,"colorPattern",qe,this),Object(ct.a)(this,"file",De,this),Object(ct.a)(this,"canvas",Me,this),Object(ct.a)(this,"context",Le,this),Object(ct.a)(this,"icon",Pe,this),Object(ct.a)(this,"uploadedFile",Ae,this),Object(ct.a)(this,"iconScale",Ge,this),Object(ct.a)(this,"iconScaleStep",We,this),Object(ct.a)(this,"iconScaleMin",He,this),Object(ct.a)(this,"iconScaleMax",Ne,this),this.textDefault="sample",this.widthDefault=200,this.marginDefault=0,this.darkDefault="000000FF",this.lightDefault="FFFFFF00",this.iconScaleDefault=.25,this.deleteMessage="Can I reset it?",this.reset()}return Object(d.a)(e,[{key:"setText",value:function(e){this.text=e}},{key:"setWidth",value:function(e){this.width=e}},{key:"getWidth",value:function(){return this.width<=this.widthMax?this.width||this.widthDefault:this.widthMax}},{key:"setMargin",value:function(e){this.margin=e}},{key:"getMargin",value:function(){return this.margin<=this.marginMax?this.margin||this.marginDefault:this.marginMax}},{key:"setDark",value:function(e){this.dark=e}},{key:"getDarkColor",value:function(){return"#".concat(this.isHexadecimal(this.dark)?this.dark:this.darkDefault)}},{key:"setLight",value:function(e){this.light=e}},{key:"getLightColor",value:function(){return"#".concat(this.isHexadecimal(this.light)?this.light:this.lightDefault)}},{key:"setIconScale",value:function(e){this.iconScale=e}},{key:"getIconScale",value:function(){return this.iconScale<=this.iconScaleMax&&this.iconScale||this.iconScaleDefault}},{key:"isHexadecimal",value:function(e){return e.length<=8&&null!==e.match(this.colorPattern)&&Number.parseInt(e,16)<=4294967295}},{key:"resetIcon",value:function(){this.file&&(this.file.value=""),this.uploadedFile=null,this.icon=new Image}},{key:"reset",value:function(){this.setText(this.textDefault),this.setWidth(this.widthDefault),this.setMargin(this.marginDefault),this.setDark(this.darkDefault),this.setLight(this.lightDefault),this.setIconScale(this.iconScaleDefault),this.resetIcon()}},{key:"loadImg",value:function(e){this.icon&&e&&(this.uploadedFile=e,0===this.uploadedFile.type.indexOf("image/")&&(this.icon.src=URL.createObjectURL(this.uploadedFile)))}},{key:"drawIcon",value:function(){if(this.icon&&this.canvas&&this.context){var e,t,n=this.getIconScale();e=this.icon.width>this.canvas.width*n?this.canvas.width*n:this.icon.width,t=this.icon.height>this.canvas.height*n?this.canvas.height*n:this.icon.height;var a=Math.ceil((this.canvas.width-e)/2),i=Math.ceil((this.canvas.height-t)/2);"imageSmoothingQuality"in this.context&&(this.context.imageSmoothingQuality="high"),this.context.drawImage(this.icon,a,i,e,t)}}},{key:"toCanvas",value:function(){this.canvas&&(gt.a.toCanvas(this.canvas,this.text||this.textDefault,{width:this.getWidth(),margin:this.getMargin(),toSJISFunc:ft.a,color:{dark:this.getDarkColor(),light:this.getLightColor()}}),this.icon&&this.icon.src&&this.drawIcon())}},{key:"changeText",value:function(e,t){this.setText(String(t.value))}},{key:"changeWidth",value:function(e,t){this.setWidth(Number(t.value))}},{key:"changeMargin",value:function(e,t){this.setMargin(Number(t.value))}},{key:"changeDark",value:function(e,t){this.setDark(String(t.value))}},{key:"changeLight",value:function(e,t){this.setLight(String(t.value))}},{key:"changeIconScale",value:function(e,t){this.setIconScale(Number(t.value))}},{key:"setFile",value:function(e){e&&(this.file=e)}},{key:"setCanvas",value:function(e){if(e){this.canvas=e;var t=this.canvas.getContext("2d");t&&(this.context=t)}}},{key:"addFileReadEventListener",value:function(){var e=this;this.file&&this.file.addEventListener("change",function(t){var n=t.target;n.files&&n.files.length&&e.loadImg(n.files[0])},!1)}},{key:"resetAction",value:function(){window.confirm(this.deleteMessage)&&(this.reset(),this.toCanvas())}}]),e}(),ke=Object(at.a)(we.prototype,"text",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Ee=Object(at.a)(we.prototype,"width",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Se=Object(at.a)(we.prototype,"margin",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),xe=Object(at.a)(we.prototype,"marginMin",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Ie=Object(at.a)(we.prototype,"marginMax",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),Fe=Object(at.a)(we.prototype,"widthMin",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),Ce=Object(at.a)(we.prototype,"widthMax",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2e3}}),ze=Object(at.a)(we.prototype,"dark",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),Te=Object(at.a)(we.prototype,"light",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),qe=Object(at.a)(we.prototype,"colorPattern",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"^[0-9A-Fa-f]{3,}$"}}),De=Object(at.a)(we.prototype,"file",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Me=Object(at.a)(we.prototype,"canvas",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Le=Object(at.a)(we.prototype,"context",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Pe=Object(at.a)(we.prototype,"icon",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ae=Object(at.a)(we.prototype,"uploadedFile",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),Ge=Object(at.a)(we.prototype,"iconScale",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 0}}),We=Object(at.a)(we.prototype,"iconScaleStep",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.01}}),He=Object(at.a)(we.prototype,"iconScaleMin",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return.1}}),Ne=Object(at.a)(we.prototype,"iconScaleMax",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 1}}),Object(at.a)(we.prototype,"toCanvas",[he],Object.getOwnPropertyDescriptor(we.prototype,"toCanvas"),we.prototype),Object(at.a)(we.prototype,"changeText",[pe],Object.getOwnPropertyDescriptor(we.prototype,"changeText"),we.prototype),Object(at.a)(we.prototype,"changeWidth",[me],Object.getOwnPropertyDescriptor(we.prototype,"changeWidth"),we.prototype),Object(at.a)(we.prototype,"changeMargin",[de],Object.getOwnPropertyDescriptor(we.prototype,"changeMargin"),we.prototype),Object(at.a)(we.prototype,"changeDark",[ge],Object.getOwnPropertyDescriptor(we.prototype,"changeDark"),we.prototype),Object(at.a)(we.prototype,"changeLight",[be],Object.getOwnPropertyDescriptor(we.prototype,"changeLight"),we.prototype),Object(at.a)(we.prototype,"changeIconScale",[fe],Object.getOwnPropertyDescriptor(we.prototype,"changeIconScale"),we.prototype),Object(at.a)(we.prototype,"setFile",[ye],Object.getOwnPropertyDescriptor(we.prototype,"setFile"),we.prototype),Object(at.a)(we.prototype,"setCanvas",[ve],Object.getOwnPropertyDescriptor(we.prototype,"setCanvas"),we.prototype),Object(at.a)(we.prototype,"addFileReadEventListener",[Oe],Object.getOwnPropertyDescriptor(we.prototype,"addFileReadEventListener"),we.prototype),Object(at.a)(we.prototype,"resetAction",[je],Object.getOwnPropertyDescriptor(we.prototype,"resetAction"),we.prototype),we),vt=(Re=it.c.bound,Ue=it.c.bound,Je=it.c.bound,_e=it.c.bound,Ke=it.c.bound,Be=it.c.bound,Ve=it.c.bound,Qe=function(){function e(){Object(m.a)(this,e),Object(ct.a)(this,"width",$e,this),Object(ct.a)(this,"height",Xe,this),Object(ct.a)(this,"background",Ye,this),Object(ct.a)(this,"color",Ze,this),Object(ct.a)(this,"text",et,this),Object(ct.a)(this,"fontSize",tt,this),Object(ct.a)(this,"fontFamily",nt,this),this.setTextFromSize()}return Object(d.a)(e,[{key:"setWidth",value:function(e){this.width=e}},{key:"setHeight",value:function(e){this.height=e}},{key:"setBackground",value:function(e){this.background=e}},{key:"setColor",value:function(e){this.color=e}},{key:"setText",value:function(e){this.text=e}},{key:"setFontSize",value:function(e){this.fontSize=e}},{key:"setFontFamily",value:function(e){this.fontFamily=e}},{key:"setTextFromSize",value:function(){this.setText("".concat(this.width," x ").concat(this.height))}},{key:"changeWidth",value:function(e,t){var n=t.value;this.setWidth(Number(n)),this.setTextFromSize()}},{key:"changeHeight",value:function(e,t){var n=t.value;this.setHeight(Number(n)),this.setTextFromSize()}},{key:"changeBackground",value:function(e,t){var n=t.value;this.setBackground(n)}},{key:"changeColor",value:function(e,t){var n=t.value;this.setColor(n)}},{key:"changeText",value:function(e,t){var n=t.value;this.setText(n)}},{key:"changeFontSize",value:function(e,t){var n=t.value;this.setFontSize(Number(n))}},{key:"changeFontFamily",value:function(e,t){var n=t.value;this.setFontFamily(n)}}]),e}(),$e=Object(at.a)(Qe.prototype,"width",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 200}}),Xe=Object(at.a)(Qe.prototype,"height",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 100}}),Ye=Object(at.a)(Qe.prototype,"background",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"336699"}}),Ze=Object(at.a)(Qe.prototype,"color",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"fff"}}),et=Object(at.a)(Qe.prototype,"text",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return""}}),tt=Object(at.a)(Qe.prototype,"fontSize",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 32}}),nt=Object(at.a)(Qe.prototype,"fontFamily",[it.h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return"Arial, Meiryo, sans-serif"}}),Object(at.a)(Qe.prototype,"changeWidth",[Re],Object.getOwnPropertyDescriptor(Qe.prototype,"changeWidth"),Qe.prototype),Object(at.a)(Qe.prototype,"changeHeight",[Ue],Object.getOwnPropertyDescriptor(Qe.prototype,"changeHeight"),Qe.prototype),Object(at.a)(Qe.prototype,"changeBackground",[Je],Object.getOwnPropertyDescriptor(Qe.prototype,"changeBackground"),Qe.prototype),Object(at.a)(Qe.prototype,"changeColor",[_e],Object.getOwnPropertyDescriptor(Qe.prototype,"changeColor"),Qe.prototype),Object(at.a)(Qe.prototype,"changeText",[Ke],Object.getOwnPropertyDescriptor(Qe.prototype,"changeText"),Qe.prototype),Object(at.a)(Qe.prototype,"changeFontSize",[Be],Object.getOwnPropertyDescriptor(Qe.prototype,"changeFontSize"),Qe.prototype),Object(at.a)(Qe.prototype,"changeFontFamily",[Ve],Object.getOwnPropertyDescriptor(Qe.prototype,"changeFontFamily"),Qe.prototype),Qe),Ot={router:new ot,sqlFormatter:new ut,sqlCodeMirror:new ht,jsonFormatter:new pt,jsonCodeMirror:new mt,qrcode:new yt,dummySVG:new vt},jt=u.createElement(p.a,Ot,u.createElement(N,null));h.render(jt,document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location.toString()).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");R?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):U(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):U(e)})}}()}},[[217,1,2]]]);
//# sourceMappingURL=main.e4728ff0.chunk.js.map