(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{22:function(e,a,n){e.exports=n.p+"static/media/travel.b442cca3.jpg"},27:function(e,a,n){e.exports=n(53)},36:function(e,a,n){},37:function(e,a,n){},42:function(e,a,n){},43:function(e,a,n){},51:function(e,a,n){},52:function(e,a,n){},53:function(e,a,n){"use strict";n.r(a);var t=n(0),o=n.n(t),r=n(21),c=n.n(r),i=(n(36),n(10)),l=n(3),d=n(25),m=n(5),u=(n(37),n(55)),s=window.location.origin,p={saveApi:"".concat(s,"/query/save"),listApi:"".concat(s,"/query/list"),loginApi:"".concat(s,"/users/")},h=p.saveApi,f=p.listApi,g=p.loginApi,v=function(e,a){return u.a.request({url:h,method:a,data:e})},y=function(e){return u.a.request({url:f,headers:{Authorization:localStorage.getItem("token")},method:e})},b=function(e,a){return u.a.request({url:g,method:a,data:e})},E={width:"100%"},S=function(){var e=Object(t.useState)([]),a=Object(m.a)(e,2),n=a[0],r=a[1],c=Object(t.useState)([]),i=Object(m.a)(c,2),l=i[0],u=i[1];Object(t.useEffect)(function(){y("GET").then(function(e){var a=Object.keys(e.data.data[0]).map(function(e){return e.toUpperCase()});r(Object(d.a)(e.data.data)),u(a)},function(e){return console.error(e)})},[]),console.log("Data List :: ",n);return o.a.createElement("table",{style:E},o.a.createElement("thead",null,o.a.createElement("tr",null,l.map(function(e,a){return o.a.createElement("th",{key:a},e)}))),o.a.createElement("tbody",null,n.length&&n.map(function(e,a){return o.a.createElement("tr",{key:a},function(e){return Object.values(e).map(function(e,a){return o.a.createElement("td",{key:a},e)})}(e))})))},w=n(22),C=n.n(w),x=(n(42),n(16)),L=n(18),N=(n(43),{display:"flex",flexDirection:"column",maxWidth:"400px",margin:"0 auto",padding:"20px",border:"1px solid #ccc",borderRadius:"5px"}),A={display:"flex",justifyContent:"space-between",marginBottom:"10px"},M={width:"100%"},O={width:"100%",margin:"2px"},T={backgroundColor:"grey",width:"100%",padding:"8px 12px",border:"none",borderRadius:"3px",cursor:"pointer"},I={backgroundColor:"grey",width:"100%",padding:"8px 12px",border:"none",borderRadius:"3px",opacity:.5,cursor:"not-allowed"},G=[{name:"Afghanistan",code:"AF"},{name:"\xc5land Islands",code:"AX"},{name:"Albania",code:"AL"},{name:"Algeria",code:"DZ"},{name:"American Samoa",code:"AS"},{name:"AndorrA",code:"AD"},{name:"Angola",code:"AO"},{name:"Anguilla",code:"AI"},{name:"Antarctica",code:"AQ"},{name:"Antigua and Barbuda",code:"AG"},{name:"Argentina",code:"AR"},{name:"Armenia",code:"AM"},{name:"Aruba",code:"AW"},{name:"Australia",code:"AU"},{name:"Austria",code:"AT"},{name:"Azerbaijan",code:"AZ"},{name:"Bahamas",code:"BS"},{name:"Bahrain",code:"BH"},{name:"Bangladesh",code:"BD"},{name:"Barbados",code:"BB"},{name:"Belarus",code:"BY"},{name:"Belgium",code:"BE"},{name:"Belize",code:"BZ"},{name:"Benin",code:"BJ"},{name:"Bermuda",code:"BM"},{name:"Bhutan",code:"BT"},{name:"Bolivia",code:"BO"},{name:"Bosnia and Herzegovina",code:"BA"},{name:"Botswana",code:"BW"},{name:"Bouvet Island",code:"BV"},{name:"Brazil",code:"BR"},{name:"British Indian Ocean Territory",code:"IO"},{name:"Brunei Darussalam",code:"BN"},{name:"Bulgaria",code:"BG"},{name:"Burkina Faso",code:"BF"},{name:"Burundi",code:"BI"},{name:"Cambodia",code:"KH"},{name:"Cameroon",code:"CM"},{name:"Canada",code:"CA"},{name:"Cape Verde",code:"CV"},{name:"Cayman Islands",code:"KY"},{name:"Central African Republic",code:"CF"},{name:"Chad",code:"TD"},{name:"Chile",code:"CL"},{name:"China",code:"CN"},{name:"Christmas Island",code:"CX"},{name:"Cocos (Keeling) Islands",code:"CC"},{name:"Colombia",code:"CO"},{name:"Comoros",code:"KM"},{name:"Congo",code:"CG"},{name:"Congo, The Democratic Republic of the",code:"CD"},{name:"Cook Islands",code:"CK"},{name:"Costa Rica",code:"CR"},{name:"Cote D'Ivoire",code:"CI"},{name:"Croatia",code:"HR"},{name:"Cuba",code:"CU"},{name:"Cyprus",code:"CY"},{name:"Czech Republic",code:"CZ"},{name:"Denmark",code:"DK"},{name:"Djibouti",code:"DJ"},{name:"Dominica",code:"DM"},{name:"Dominican Republic",code:"DO"},{name:"Ecuador",code:"EC"},{name:"Egypt",code:"EG"},{name:"El Salvador",code:"SV"},{name:"Equatorial Guinea",code:"GQ"},{name:"Eritrea",code:"ER"},{name:"Estonia",code:"EE"},{name:"Ethiopia",code:"ET"},{name:"Falkland Islands (Malvinas)",code:"FK"},{name:"Faroe Islands",code:"FO"},{name:"Fiji",code:"FJ"},{name:"Finland",code:"FI"},{name:"France",code:"FR"},{name:"French Guiana",code:"GF"},{name:"French Polynesia",code:"PF"},{name:"French Southern Territories",code:"TF"},{name:"Gabon",code:"GA"},{name:"Gambia",code:"GM"},{name:"Georgia",code:"GE"},{name:"Germany",code:"DE"},{name:"Ghana",code:"GH"},{name:"Gibraltar",code:"GI"},{name:"Greece",code:"GR"},{name:"Greenland",code:"GL"},{name:"Grenada",code:"GD"},{name:"Guadeloupe",code:"GP"},{name:"Guam",code:"GU"},{name:"Guatemala",code:"GT"},{name:"Guernsey",code:"GG"},{name:"Guinea",code:"GN"},{name:"Guinea-Bissau",code:"GW"},{name:"Guyana",code:"GY"},{name:"Haiti",code:"HT"},{name:"Heard Island and Mcdonald Islands",code:"HM"},{name:"Holy See (Vatican City State)",code:"VA"},{name:"Honduras",code:"HN"},{name:"Hong Kong",code:"HK"},{name:"Hungary",code:"HU"},{name:"Iceland",code:"IS"},{name:"India",code:"IN"},{name:"Indonesia",code:"ID"},{name:"Iran, Islamic Republic Of",code:"IR"},{name:"Iraq",code:"IQ"},{name:"Ireland",code:"IE"},{name:"Isle of Man",code:"IM"},{name:"Israel",code:"IL"},{name:"Italy",code:"IT"},{name:"Jamaica",code:"JM"},{name:"Japan",code:"JP"},{name:"Jersey",code:"JE"},{name:"Jordan",code:"JO"},{name:"Kazakhstan",code:"KZ"},{name:"Kenya",code:"KE"},{name:"Kiribati",code:"KI"},{name:"Korea, Democratic People'S Republic of",code:"KP"},{name:"Korea, Republic of",code:"KR"},{name:"Kuwait",code:"KW"},{name:"Kyrgyzstan",code:"KG"},{name:"Lao People'S Democratic Republic",code:"LA"},{name:"Latvia",code:"LV"},{name:"Lebanon",code:"LB"},{name:"Lesotho",code:"LS"},{name:"Liberia",code:"LR"},{name:"Libyan Arab Jamahiriya",code:"LY"},{name:"Liechtenstein",code:"LI"},{name:"Lithuania",code:"LT"},{name:"Luxembourg",code:"LU"},{name:"Macao",code:"MO"},{name:"Macedonia, The Former Yugoslav Republic of",code:"MK"},{name:"Madagascar",code:"MG"},{name:"Malawi",code:"MW"},{name:"Malaysia",code:"MY"},{name:"Maldives",code:"MV"},{name:"Mali",code:"ML"},{name:"Malta",code:"MT"},{name:"Marshall Islands",code:"MH"},{name:"Martinique",code:"MQ"},{name:"Mauritania",code:"MR"},{name:"Mauritius",code:"MU"},{name:"Mayotte",code:"YT"},{name:"Mexico",code:"MX"},{name:"Micronesia, Federated States of",code:"FM"},{name:"Moldova, Republic of",code:"MD"},{name:"Monaco",code:"MC"},{name:"Mongolia",code:"MN"},{name:"Montserrat",code:"MS"},{name:"Morocco",code:"MA"},{name:"Mozambique",code:"MZ"},{name:"Myanmar",code:"MM"},{name:"Namibia",code:"NA"},{name:"Nauru",code:"NR"},{name:"Nepal",code:"NP"},{name:"Netherlands",code:"NL"},{name:"Netherlands Antilles",code:"AN"},{name:"New Caledonia",code:"NC"},{name:"New Zealand",code:"NZ"},{name:"Nicaragua",code:"NI"},{name:"Niger",code:"NE"},{name:"Nigeria",code:"NG"},{name:"Niue",code:"NU"},{name:"Norfolk Island",code:"NF"},{name:"Northern Mariana Islands",code:"MP"},{name:"Norway",code:"NO"},{name:"Oman",code:"OM"},{name:"Pakistan",code:"PK"},{name:"Palau",code:"PW"},{name:"Palestinian Territory, Occupied",code:"PS"},{name:"Panama",code:"PA"},{name:"Papua New Guinea",code:"PG"},{name:"Paraguay",code:"PY"},{name:"Peru",code:"PE"},{name:"Philippines",code:"PH"},{name:"Pitcairn",code:"PN"},{name:"Poland",code:"PL"},{name:"Portugal",code:"PT"},{name:"Puerto Rico",code:"PR"},{name:"Qatar",code:"QA"},{name:"Reunion",code:"RE"},{name:"Romania",code:"RO"},{name:"Russian Federation",code:"RU"},{name:"RWANDA",code:"RW"},{name:"Saint Helena",code:"SH"},{name:"Saint Kitts and Nevis",code:"KN"},{name:"Saint Lucia",code:"LC"},{name:"Saint Pierre and Miquelon",code:"PM"},{name:"Saint Vincent and the Grenadines",code:"VC"},{name:"Samoa",code:"WS"},{name:"San Marino",code:"SM"},{name:"Sao Tome and Principe",code:"ST"},{name:"Saudi Arabia",code:"SA"},{name:"Senegal",code:"SN"},{name:"Serbia and Montenegro",code:"CS"},{name:"Seychelles",code:"SC"},{name:"Sierra Leone",code:"SL"},{name:"Singapore",code:"SG"},{name:"Slovakia",code:"SK"},{name:"Slovenia",code:"SI"},{name:"Solomon Islands",code:"SB"},{name:"Somalia",code:"SO"},{name:"South Africa",code:"ZA"},{name:"South Georgia and the South Sandwich Islands",code:"GS"},{name:"Spain",code:"ES"},{name:"Sri Lanka",code:"LK"},{name:"Sudan",code:"SD"},{name:"Suriname",code:"SR"},{name:"Svalbard and Jan Mayen",code:"SJ"},{name:"Swaziland",code:"SZ"},{name:"Sweden",code:"SE"},{name:"Switzerland",code:"CH"},{name:"Syrian Arab Republic",code:"SY"},{name:"Taiwan, Province of China",code:"TW"},{name:"Tajikistan",code:"TJ"},{name:"Tanzania, United Republic of",code:"TZ"},{name:"Thailand",code:"TH"},{name:"Timor-Leste",code:"TL"},{name:"Togo",code:"TG"},{name:"Tokelau",code:"TK"},{name:"Tonga",code:"TO"},{name:"Trinidad and Tobago",code:"TT"},{name:"Tunisia",code:"TN"},{name:"Turkey",code:"TR"},{name:"Turkmenistan",code:"TM"},{name:"Turks and Caicos Islands",code:"TC"},{name:"Tuvalu",code:"TV"},{name:"Uganda",code:"UG"},{name:"Ukraine",code:"UA"},{name:"United Arab Emirates",code:"AE"},{name:"United Kingdom",code:"GB"},{name:"United States",code:"US"},{name:"United States Minor Outlying Islands",code:"UM"},{name:"Uruguay",code:"UY"},{name:"Uzbekistan",code:"UZ"},{name:"Vanuatu",code:"VU"},{name:"Venezuela",code:"VE"},{name:"Viet Nam",code:"VN"},{name:"Virgin Islands, British",code:"VG"},{name:"Virgin Islands, U.S.",code:"VI"},{name:"Wallis and Futuna",code:"WF"},{name:"Western Sahara",code:"EH"},{name:"Yemen",code:"YE"},{name:"Zambia",code:"ZM"},{name:"Zimbabwe",code:"ZW"}],P=["Adventure & Outdoors","Heritage & Culture","Nature & Landscapes","Wildlife & Safaris","Wine & Food","Beaches"],j=["$4000 to $5000","$5000 to $6000","$6000 to $7000","$7000 to $8000","$8000 to $10000","$10000+"],k=["1 traveler","2 travelers","3 travelers","4 travelers","5 travelers","6 travelers","6+ travelers"],B=["July 2023","August 2023","September 2023","October 2023","November 2023","December 2023"],F=["Still dreaming / researching","Definitely traveling, need destination expertise","I want to book a trip"],R=function(e){var a=Object(t.useState)({place:"",interests:"",budget:"",travelers:"",name:"",email:"",number:"",duration:"",stage_of_planning:"",when:""}),n=Object(m.a)(a,2),r=n[0],c=n[1],i=Object(t.useState)(!0),l=Object(m.a)(i,2),d=l[0],u=l[1],s=e.OnSubmit;Object(t.useEffect)(function(){var e=Object(L.a)({},r),a=Object.values(e).includes("");u(a)});var p=function(e){c(Object(L.a)({},r,Object(x.a)({},e.target.name,e.target.value)))};return o.a.createElement(o.a.Fragment,null,o.a.createElement("form",{onSubmit:function(e){e.preventDefault(),console.log(r),v(Object(L.a)({},r),"POST").then(function(e){console.log("Save Successfully! ",e),c({place:"",interests:"",budget:"",travelers:"",name:"",email:"",number:"",duration:"",stage_of_planning:""}),s()}).catch(function(e){console.log("Error :: ",e)})},style:N},o.a.createElement("div",{style:A},o.a.createElement("select",{name:"place",style:M,value:r.place,onChange:p},o.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Where do you want to go?"),G.map(function(e){return o.a.createElement("option",{key:e.code,value:e.name},e.name)}))),o.a.createElement("div",{style:A},o.a.createElement("select",{name:"interests",style:M,value:r.interests,onChange:p},o.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Your interests?"),P.map(function(e,a){return o.a.createElement("option",{key:a,value:e},e)}))),o.a.createElement("div",{style:A},o.a.createElement("select",{name:"budget",style:O,value:r.budget,onChange:p,placeholder:"Budget Per Person"},o.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"Budget Per Person"),j.map(function(e,a){return o.a.createElement("option",{key:a,value:e},e)})),o.a.createElement("select",{name:"travelers",style:O,value:r.travelers,onChange:p,placeholder:"No. of travelers"},o.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"No. of travelers"),k.map(function(e,a){return o.a.createElement("option",{key:a,value:e},e)}))),o.a.createElement("div",{style:A},o.a.createElement("input",{style:M,type:"text",name:"name",value:r.name,onChange:p,placeholder:"Full Name"})),o.a.createElement("div",{style:A},o.a.createElement("input",{style:M,type:"email",name:"email",value:r.email,onChange:p,placeholder:"Email Address"})),o.a.createElement("div",{style:A},o.a.createElement("input",{style:M,type:"tel",name:"number",value:r.number,onChange:p,placeholder:"Phone Number"})),o.a.createElement("div",{style:A},o.a.createElement("input",{style:O,type:"text",name:"duration",value:r.duration,onChange:p,placeholder:"Trip Duration"}),o.a.createElement("select",{name:"when",style:O,value:r.when,onChange:p},o.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"When"),B.map(function(e,a){return o.a.createElement("option",{key:a,value:e},e)}))),o.a.createElement("div",{style:A},o.a.createElement("select",{style:M,name:"stage_of_planning",value:r.stage_of_planning,onChange:p},o.a.createElement("option",{value:"",disabled:!0,selected:!0,hidden:!0},"What stage of planning are you in?"),F.map(function(e,a){return o.a.createElement("option",{key:a,value:e},e)}))),o.a.createElement("div",{style:A},o.a.createElement("button",{style:d?I:T,disabled:d,type:"submit"},"Submit"))))},D=function(e){var a=e.closeModal,n=function(){a()};return o.a.createElement("div",null,o.a.createElement("div",{className:"modal"},o.a.createElement("div",{className:"modal-content"},o.a.createElement("h2",null,"Almost There!"," ",o.a.createElement("span",{className:"close",onClick:n},"\xd7")),o.a.createElement(R,{OnSubmit:function(){n()}}))))},K={background:"url(".concat(C.a,")"),backgroundSize:"cover",backgroundPosition:"center",height:"600px"},U={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh"},H={fontSize:"46px",fontWeight:"bold",marginBottom:"16px",color:"White",lineHeight:"10px"},_={fontSize:"24px",marginBottom:"32px",color:"White"},W={backgroundColor:"red",border:"1px solid red",borderRadius:"10px",padding:"10px 20px",fontSize:"20px",color:"#fff"},V=function(){var e=Object(t.useState)(!1),a=Object(m.a)(e,2),n=a[0],r=a[1],c=function(){r(function(e){return!e})};return o.a.createElement("div",{style:K},o.a.createElement("div",{style:U},o.a.createElement("h1",{style:H},"We Care, So You Can Travel Carefree"),o.a.createElement("h2",{style:_},"Let our experts plan your private, tailor-made and secure tour in 70+ inspiring destinations"),o.a.createElement("button",{onClick:c,style:W},"Create My Trip Now"),n&&o.a.createElement(D,{closeModal:c})))},z={backgroundColor:"#f2f2f2",padding:"20px",display:"flex",justifyContent:"space-between"},J={margin:"0",fontSize:"24px"},Y={display:"flex",alignItems:"center"},Z={textDecoration:"none",color:"white",padding:"10px",marginLeft:"10px",backgroundColor:"red",border:"1px solid red",borderRadius:"10px"},q=function(){return o.a.createElement("header",{style:z},o.a.createElement("h1",{style:J},"Your Website Name"),o.a.createElement("nav",{style:Y},o.a.createElement(i.b,{exact:!0,to:"/",style:Z},"Home"),o.a.createElement(i.b,{to:"/admin",style:Z},"Admin")))},$=n(26),Q=function(e){var a=e.component,n=e.isAuthenticated,t=Object($.a)(e,["component","isAuthenticated"]);return o.a.createElement(l.b,Object.assign({exact:!0},t,{render:function(e){return n?o.a.createElement(a,e):o.a.createElement(l.a,{to:"/login"})}}))},X=n(24),ee=(n(51),Object(t.createContext)({login:!1,changeLoginStatus:function(){}}));function ae(){return Object(t.useContext)(ee)}function ne(e){var a=e.children,n=Object(t.useState)(!1),r=Object(m.a)(n,2),c=r[0],i=r[1],l={login:c,changeLoginStatus:function(){var e=localStorage.getItem("token"),a=localStorage.getItem("login");console.log("status :: ",a),e&&i(a)}};return o.a.createElement(ee.Provider,{value:l},a)}function te(){te=function(){return e};var e={},a=Object.prototype,n=a.hasOwnProperty,t=Object.defineProperty||function(e,a,n){e[a]=n.value},o="function"==typeof Symbol?Symbol:{},r=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",i=o.toStringTag||"@@toStringTag";function l(e,a,n){return Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[a]}try{l({},"")}catch(M){l=function(e,a,n){return e[a]=n}}function d(e,a,n,o){var r=a&&a.prototype instanceof s?a:s,c=Object.create(r.prototype),i=new L(o||[]);return t(c,"_invoke",{value:S(e,n,i)}),c}function m(e,a,n){try{return{type:"normal",arg:e.call(a,n)}}catch(M){return{type:"throw",arg:M}}}e.wrap=d;var u={};function s(){}function p(){}function h(){}var f={};l(f,r,function(){return this});var g=Object.getPrototypeOf,v=g&&g(g(N([])));v&&v!==a&&n.call(v,r)&&(f=v);var y=h.prototype=s.prototype=Object.create(f);function b(e){["next","throw","return"].forEach(function(a){l(e,a,function(e){return this._invoke(a,e)})})}function E(e,a){var o;t(this,"_invoke",{value:function(t,r){function c(){return new a(function(o,c){!function t(o,r,c,i){var l=m(e[o],e,r);if("throw"!==l.type){var d=l.arg,u=d.value;return u&&"object"==typeof u&&n.call(u,"__await")?a.resolve(u.__await).then(function(e){t("next",e,c,i)},function(e){t("throw",e,c,i)}):a.resolve(u).then(function(e){d.value=e,c(d)},function(e){return t("throw",e,c,i)})}i(l.arg)}(t,r,o,c)})}return o=o?o.then(c,c):c()}})}function S(e,a,n){var t="suspendedStart";return function(o,r){if("executing"===t)throw new Error("Generator is already running");if("completed"===t){if("throw"===o)throw r;return A()}for(n.method=o,n.arg=r;;){var c=n.delegate;if(c){var i=w(c,n);if(i){if(i===u)continue;return i}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===t)throw t="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);t="executing";var l=m(e,a,n);if("normal"===l.type){if(t=n.done?"completed":"suspendedYield",l.arg===u)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(t="completed",n.method="throw",n.arg=l.arg)}}}function w(e,a){var n=a.method,t=e.iterator[n];if(void 0===t)return a.delegate=null,"throw"===n&&e.iterator.return&&(a.method="return",a.arg=void 0,w(e,a),"throw"===a.method)||"return"!==n&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+n+"' method")),u;var o=m(t,e.iterator,a.arg);if("throw"===o.type)return a.method="throw",a.arg=o.arg,a.delegate=null,u;var r=o.arg;return r?r.done?(a[e.resultName]=r.value,a.next=e.nextLoc,"return"!==a.method&&(a.method="next",a.arg=void 0),a.delegate=null,u):r:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,u)}function C(e){var a={tryLoc:e[0]};1 in e&&(a.catchLoc=e[1]),2 in e&&(a.finallyLoc=e[2],a.afterLoc=e[3]),this.tryEntries.push(a)}function x(e){var a=e.completion||{};a.type="normal",delete a.arg,e.completion=a}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(C,this),this.reset(!0)}function N(e){if(e){var a=e[r];if(a)return a.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var t=-1,o=function a(){for(;++t<e.length;)if(n.call(e,t))return a.value=e[t],a.done=!1,a;return a.value=void 0,a.done=!0,a};return o.next=o}}return{next:A}}function A(){return{value:void 0,done:!0}}return p.prototype=h,t(y,"constructor",{value:h,configurable:!0}),t(h,"constructor",{value:p,configurable:!0}),p.displayName=l(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var a="function"==typeof e&&e.constructor;return!!a&&(a===p||"GeneratorFunction"===(a.displayName||a.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,i,"GeneratorFunction")),e.prototype=Object.create(y),e},e.awrap=function(e){return{__await:e}},b(E.prototype),l(E.prototype,c,function(){return this}),e.AsyncIterator=E,e.async=function(a,n,t,o,r){void 0===r&&(r=Promise);var c=new E(d(a,n,t,o),r);return e.isGeneratorFunction(n)?c:c.next().then(function(e){return e.done?e.value:c.next()})},b(y),l(y,i,"Generator"),l(y,r,function(){return this}),l(y,"toString",function(){return"[object Generator]"}),e.keys=function(e){var a=Object(e),n=[];for(var t in a)n.push(t);return n.reverse(),function e(){for(;n.length;){var t=n.pop();if(t in a)return e.value=t,e.done=!1,e}return e.done=!0,e}},e.values=N,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(x),!e)for(var a in this)"t"===a.charAt(0)&&n.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var a=this;function t(n,t){return c.type="throw",c.arg=e,a.next=n,t&&(a.method="next",a.arg=void 0),!!t}for(var o=this.tryEntries.length-1;o>=0;--o){var r=this.tryEntries[o],c=r.completion;if("root"===r.tryLoc)return t("end");if(r.tryLoc<=this.prev){var i=n.call(r,"catchLoc"),l=n.call(r,"finallyLoc");if(i&&l){if(this.prev<r.catchLoc)return t(r.catchLoc,!0);if(this.prev<r.finallyLoc)return t(r.finallyLoc)}else if(i){if(this.prev<r.catchLoc)return t(r.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return t(r.finallyLoc)}}}},abrupt:function(e,a){for(var t=this.tryEntries.length-1;t>=0;--t){var o=this.tryEntries[t];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var r=o;break}}r&&("break"===e||"continue"===e)&&r.tryLoc<=a&&a<=r.finallyLoc&&(r=null);var c=r?r.completion:{};return c.type=e,c.arg=a,r?(this.method="next",this.next=r.finallyLoc,u):this.complete(c)},complete:function(e,a){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&a&&(this.next=a),u},finish:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),x(n),u}},catch:function(e){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc===e){var t=n.completion;if("throw"===t.type){var o=t.arg;x(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,a,n){return this.delegate={iterator:N(e),resultName:a,nextLoc:n},"next"===this.method&&(this.arg=void 0),u}},e}var oe=function(){var e=Object(t.useState)(""),a=Object(m.a)(e,2),n=a[0],r=a[1],c=Object(t.useState)(""),i=Object(m.a)(c,2),d=i[0],u=i[1],s=ae().changeLoginStatus,p=Object(l.g)(),h=function(){var e=Object(X.a)(te().mark(function e(a){var t;return te().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.preventDefault(),console.log("Username:",n),console.log("Password:",d),e.prev=3,e.next=6,b({user:n,pass:d},"POST");case 6:t=e.sent,console.log("Login Successful! :: ",t),localStorage.setItem("token",t.data.token),localStorage.setItem("login",!0),s(),r(""),u(""),p.push("/admin"),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(3),console.error(e.t0);case 19:case"end":return e.stop()}},e,null,[[3,16]])}));return function(a){return e.apply(this,arguments)}}();return o.a.createElement("div",{className:"login-container"},o.a.createElement("h2",null,"Login"),o.a.createElement("form",{className:"login-form",onSubmit:h},o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"username"},"Username "),o.a.createElement("input",{className:"form-input",type:"text",id:"username",value:n,onChange:function(e){r(e.target.value)},required:!0})),o.a.createElement("div",{className:"form-group"},o.a.createElement("label",{htmlFor:"password"},"Password "),o.a.createElement("input",{className:"form-input",type:"password",id:"password",value:d,onChange:function(e){u(e.target.value)},required:!0})),o.a.createElement("button",{type:"submit"},"Login")))},re=(n(52),function(){return o.a.createElement("div",{className:"widget feel-safe full-width"},o.a.createElement("div",{className:"wrap"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"global-typography"},o.a.createElement("div",{className:"heading-3"},"Feel safe with a globally accredited company"),o.a.createElement("p",null,"Enchanting Travels is accredited by leading international travel associations, including USTOA. As a result, you can travel with complete peace of mind since your trip is financially protected."))," ",o.a.createElement("a",{href:"https://www.enchantingtravels.com/about-us/accreditations-awards/",target:"_blank"}," ",o.a.createElement("img",{src:"https://res.cloudinary.com/enchanting/f_auto,q_70/et-web/2023/07/accreditations-logos-ustoa-atta.png",width:"263",height:"55",alt:"",className:"logos"})," ")))))}),ce=function(){var e=ae().login,a=e;return console.log("Login :: ",e),o.a.createElement(o.a.Fragment,null,o.a.createElement(i.a,null,o.a.createElement(o.a.StrictMode,null,o.a.createElement(q,null),o.a.createElement("div",null,o.a.createElement(l.d,null,o.a.createElement(l.b,{exact:!0,path:"/",component:Object(l.h)(V)}),!a&&o.a.createElement(l.b,{exact:!0,path:"/login",component:oe}),o.a.createElement(Q,{path:"/admin",component:S,isAuthenticated:a}),o.a.createElement(l.b,{component:V})),o.a.createElement(re,null)))))},ie=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,56)).then(function(a){var n=a.getCLS,t=a.getFID,o=a.getFCP,r=a.getLCP,c=a.getTTFB;n(e),t(e),o(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(o.a.createElement(ne,null,o.a.createElement(ce,null))),ie()}},[[27,1,2]]]);
//# sourceMappingURL=main.e6acd5bc.chunk.js.map