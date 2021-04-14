(function(e){function t(t){for(var r,i,o=t[0],u=t[1],l=t[2],p=0,d=[];p<o.length;p++)i=o[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);c&&c(t);while(d.length)d.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var e,t=0;t<n.length;t++){for(var s=n[t],r=!0,o=1;o<s.length;o++){var u=s[o];0!==a[u]&&(r=!1)}r&&(n.splice(t--,1),e=i(i.s=s[0]))}return e}var r={},a={app:0},n=[];function i(t){if(r[t])return r[t].exports;var s=r[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=e,i.c=r,i.d=function(e,t,s){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(s,r,function(t){return e[t]}.bind(null,r));return s},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-users/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var c=u;n.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0658":function(e,t,s){},"0fe5":function(e,t,s){"use strict";s("0658")},1230:function(e,t,s){"use strict";s("aa42")},"210a":function(e,t,s){},"2d68":function(e,t,s){"use strict";s("5203")},"36e4":function(e,t,s){"use strict";s("210a")},"380c":function(e,t,s){"use strict";s("b89a")},"3a7a":function(e,t,s){},"432c":function(e,t,s){"use strict";s("579c")},5203:function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var r=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page-app",attrs:{id:"app"}},[s("page-header"),s("main",{staticClass:"page-main"},[s("page-title"),s("router-view",{attrs:{usersFetch:e.users}})],1)],1)},n=[],i=s("1da1"),o=(s("96cf"),s("d3b7"),s("d81d"),s("b0c0"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"page-header"},[s("router-link",{staticClass:"logo",attrs:{to:"/"}},[e._v(" VueUsers ")]),s("nav",{staticClass:"nav",class:{"is-open":e.isOpen,"is-animated":e.isAnimated}},[s("ul",{staticClass:"nav__list"},[s("li",{staticClass:"nav__item"},[s("router-link",{staticClass:"nav__item",attrs:{to:"/",exact:""}},[e._v(" Home ")])],1),s("li",{staticClass:"nav__item"},[s("router-link",{staticClass:"nav__item",class:{"router-link-active":e.$route.path.includes("user")},attrs:{to:"/users"}},[e._v(" Users ")])],1)]),s("Button",{staticClass:"nav__button button button--icon",on:{"button-click":e.openCloseNav}},[s("i",{staticClass:"fa fa-bars"})])],1)],1)}),u=[],l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s(e.checkTag,{tag:"component",staticClass:"button",attrs:{href:e.href,to:e.to,value:e.value},on:{click:e.buttonClick}},[e._t("default")],2)},c=[],p={name:"Button",props:{href:{type:String,default:null},to:{type:String,default:null},value:{type:String,default:null}},computed:{checkTag:function(){return this.href?"a":this.to?"router-link":this.value?"input":"button"}},methods:{buttonClick:function(){this.$emit("button-click")}}},d=p,m=(s("619b"),s("2877")),f=Object(m["a"])(d,l,c,!1,null,"229c0963",null),_=f.exports,h={name:"PageHeader",components:{Button:_},data:function(){return{isAnimated:!1,isOpen:!1}},methods:{openCloseNav:function(){this.isAnimated=!0,this.isOpen=!this.isOpen},closeNav:function(){this.isOpen=!1},handleResize:function(e){var t=768;e.target.outerWidth>=t&&(this.isAnimated=!1,this.closeNav())}},watch:{$route:function(e,t){e!==t&&this.closeNav()},isOpen:function(){document.body.style.overflow=this.isOpen?"hidden":""}},created:function(){window.addEventListener("resize",this.handleResize)},destroyed:function(){window.removeEventListener("resize",this.handleResize)}},g=h,v=(s("36e4"),Object(m["a"])(g,o,u,!1,null,"501db573",null)),b=v.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("h1",{staticClass:"page-title"},[e._v(" "+e._s(e.$route.meta.title)+" ")])},y=[],O={name:"PageTitle"},L=O,U=(s("432c"),Object(m["a"])(L,C,y,!1,null,"f1d35058",null)),E=U.exports,w={components:{PageHeader:b,PageTitle:E},data:function(){return{users:[]}},created:function(){this.getUsers()},methods:{getUsers:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,fetch("https://randomuser.me/api/?results=10");case 2:return s=t.sent,t.next=5,s.json();case 5:r=t.sent,e.users=r.results.map((function(e){return{name:e.name,username:e.login.username,gender:e.gender,nationality:e.nat,streetNumber:e.location.street.number,streetName:e.location.street.name,city:e.location.city,state:e.location.state,postcode:e.location.postcode,latitude:e.location.coordinates.latitude,longitude:e.location.coordinates.longitude,registered:e.registered.date,phone:e.phone,cell:e.cell,email:e.email,imageMedium:e.picture.medium,imageLarge:e.picture.large}}));case 7:case"end":return t.stop()}}),t)})))()}},watch:{$route:{handler:function(e,t){var s=document.getElementsByTagName("html")[0],r=document.getElementsByTagName("body")[0];void 0!==t&&s.classList.remove("page","page-"+t.name.toLowerCase()),s.classList.add("page","page-"+e.name.toLowerCase()),r.classList.add("page-body")},immediate:!0}}},k=w,T=(s("5c0b"),Object(m["a"])(k,a,n,!1,null,null,null)),j=T.exports,R=(s("7db0"),s("fb6a"),s("a630"),s("3ca3"),s("159b"),s("b64b"),s("8c4f")),x=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},A=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"page-main__inner"},[r("section",{staticClass:"page-section"},[r("h2",{staticClass:"subtitle inner"},[e._v(" List of users with vue.js ")]),r("div",{staticClass:"description inner"},[r("p",[e._v(" Content developed with the API"),r("br"),r("a",{attrs:{href:"http://randomuser.me",target:"_blank",rel:"noopener noreferrer"}},[e._v(" https://randomuser.me ")])])]),r("div",{staticClass:"logo-vue inner"},[r("img",{attrs:{src:s("cf05"),alt:"Vue logo"}})])])])}],S={components:{},props:{usersFetch:Array}},M=S,P=(s("380c"),Object(m["a"])(M,x,A,!1,null,"b9d27fac",null)),N=P.exports,$=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page-main__inner"},[s("section",{staticClass:"page-section"},[s("users-list",{attrs:{users:e.usersList,stateHidden:e.infoUserHidden}}),s("users-buttons",{on:{order:e.orderUsers,hide:e.hideInfoUser,getAll:e.getUsers,removeAll:e.removeAllUsers}})],1)])},I=[],B=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"users-list__wrapper inner"},[s("transition-group",{staticClass:"users-list",class:{"is-hidden-info":e.stateHidden},attrs:{tag:"ul",name:"slide"}},e._l(e.usersList,(function(t){return s("li",{key:t.username,staticClass:"users-list__item"},[s("UserPreview",{class:{"is-hidden-info":e.stateHidden},attrs:{dataUser:t,isHidden:e.stateHidden},on:{remove:e.userRemove}})],1)})),0)],1)},H=[],D=(s("a434"),function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-preview"},[s("img",{staticClass:"user-preview__img",attrs:{src:e.dataUser.imageMedium,alt:e.dataUser.name.first+" "+e.dataUser.name.last}}),s("transition",{attrs:{name:"fade"}},[s("div",{staticClass:"user-preview__content",class:{"is-hidden":e.isHidden}},[s("h3",{staticClass:"user-preview__name"},[e._v(" "+e._s(e.dataUser.name.first)+" "+e._s(e.dataUser.name.last)+" ")]),s("div",{staticClass:"user-preview__description"},[s("p",{staticClass:"user-preview-data"},[s("span",{staticClass:"user-preview-data__icon"},[s("i",{staticClass:"fa fa-user"})]),s("span",{staticClass:"user-preview-data__text"},[e._v(" "+e._s(e.dataUser.username)+" ")])]),s("p",{staticClass:"user-preview-data"},[s("span",{staticClass:"user-preview-data__icon"},[s("i",{staticClass:"fa fa-map-marker"})]),s("span",{staticClass:"user-preview-data__text"},[e._v(" "+e._s(e.dataUser.state)+" ")])])]),s("Button",{staticClass:"button--bg-brand-1 button--width-auto",attrs:{to:"/user/"+e.dataUser.username}},[s("span",{staticClass:"button__icon"},[s("i",{staticClass:"fas fa-info"})]),s("span",{staticClass:"button__text"},[e._v(" more info ")])])],1)]),s("Button",{staticClass:"button-close button--icon ",on:{"button-click":function(t){return e.userRemoveEmit(e.dataUser)}}},[s("i",{staticClass:"button-close__icon fas fa-times-circle"})])],1)}),F=[],z={name:"UserPreview",components:{Button:_},props:{dataUser:{type:Object,required:!0},isHidden:Boolean},methods:{userRemoveEmit:function(e){this.$emit("remove",e)}}},X=z,G=(s("b958"),Object(m["a"])(X,D,F,!1,null,"292d15e1",null)),K=G.exports,W={name:"UsersList",components:{UserPreview:K},props:{users:Array,stateHidden:Boolean},data:function(){return{usersList:this.users}},methods:{userRemove:function(e){this.usersList.splice(this.usersList.indexOf(e),1)}},watch:{users:function(e){this.usersList=e}}},Z=W,q=(s("d5fe"),Object(m["a"])(Z,B,H,!1,null,"64b18315",null)),V=q.exports,J=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"users-buttons"},[s("Button",{staticClass:"users-buttons__item button--bg-brand-2",on:{"button-click":e.hideInfoUserEmit}},[e._v(" "+e._s(e.textButtonHideUser)+" ")]),s("Button",{staticClass:"users-buttons__item button--bg-brand-2",on:{"button-click":e.orderUsersEmit}},[e._v(" ORDER USERS ")]),s("Button",{staticClass:"users-buttons__item button--bg-brand-2",on:{"button-click":e.getUsersEmit}},[e._v(" GET USERS ")]),s("Button",{staticClass:"users-buttons__item button--bg-brand-2",on:{"button-click":e.removeAllUsersEmit}},[e._v(" REMOVE ALL USERS ")])],1)},Q=[],Y={name:"UsersButtons",components:{Button:_},data:function(){return{showUserInfo:!1,textButtonHideUser:"HIDE USER INFO"}},methods:{changeTextButtonHideUser:function(){this.showUserInfo?this.textButtonHideUser="SHOW USER INFO":this.textButtonHideUser="HIDE USER INFO"},hideInfoUserEmit:function(){this.showUserInfo=!this.showUserInfo,this.changeTextButtonHideUser(),this.$emit("hide")},orderUsersEmit:function(){this.$emit("order")},getUsersEmit:function(){this.$emit("getAll")},removeAllUsersEmit:function(){this.$emit("removeAll")}}},ee=Y,te=(s("e3e3"),Object(m["a"])(ee,J,Q,!1,null,"632afc50",null)),se=te.exports,re={components:{UsersList:V,UsersButtons:se},props:{usersFetch:Array},data:function(){return{usersList:this.usersFetch,infoUserHidden:!1}},methods:{hideInfoUser:function(){this.infoUserHidden=!this.infoUserHidden},orderUsers:function(){this.usersList.sort((function(){return Math.random()-.5}))},getUsers:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$parent.getUsers();case 2:e.usersList=e.usersFetch;case 3:case"end":return t.stop()}}),t)})))()},removeAllUsers:function(){this.usersList=[]}}},ae=re,ne=(s("0fe5"),Object(m["a"])(ae,$,I,!1,null,"364a72bb",null)),ie=ne.exports,oe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page-main__inner"},[s("section",{staticClass:"page-section"},[s("div",{staticClass:"inner"},[e.user?s("user-detail",{attrs:{user:e.user}}):e._e()],1),e.user?s("user-map",{attrs:{user:e.user}}):e._e()],1)])},ue=[],le=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-detail"},[s("div",{staticClass:"user-detail__image"},[s("img",{attrs:{src:e.user.imageLarge,alt:e.user.username}})]),s("div",{staticClass:"user-detail__content"},[s("div",{staticClass:"user-detail__group"},[s("p",[s("strong",{staticClass:"user-detail__label"},[e._v(" Name: ")]),e._v(" "+e._s(e.user.name.title)+" "+e._s(e.user.name.first)+" "+e._s(e.user.name.last)+" ")]),s("p",[s("strong",{staticClass:"user-detail__label"},[e._v(" Username: ")]),e._v(" "+e._s(e.user.username)+" ")])]),s("div",{staticClass:"user-detail__group"},[s("p",[s("strong",{staticClass:"user-detail__label"},[e._v(" Gender: ")]),e._v(" "+e._s(e.user.gender)+" ")]),s("p",[s("strong",{staticClass:"user-detail__label"},[e._v(" Nationality: ")]),e._v(" "+e._s(e.user.nationality)+" ")])]),s("div",{staticClass:"user-detail__group"},[s("p",[s("strong",{staticClass:"user-detail__label"},[e._v(" State: ")]),e._v(" "+e._s(e.user.state)+" ")]),s("p",[s("strong",{staticClass:"user-detail__label"},[e._v(" City: ")]),e._v(" "+e._s(e.user.city)+" ")]),s("p",[s("strong",{staticClass:"user-detail__label"},[e._v(" Street: ")]),e._v(" "+e._s(e.user.streetName)+", "+e._s(e.user.streetNumber)+" ")]),s("p",[s("strong",{staticClass:"user-detail__label"},[e._v(" Postcode: ")]),e._v(" "+e._s(e.user.postcode)+" ")])]),s("div",{staticClass:"user-detail__group"},[s("p",[s("strong",{staticClass:"user-detail__label"},[e._v(" Email: ")]),e._v(" "+e._s(e.user.email)+" ")]),s("p",[s("strong",{staticClass:"user-detail__label"},[e._v(" Phone: ")]),e._v(" "+e._s(e.user.phone)+" ")]),s("p",[s("strong",{staticClass:"user-detail__label"},[e._v(" Cell: ")]),e._v(" "+e._s(e.user.cell)+" ")])]),s("div",{staticClass:"user-detail__group"},[s("p",[s("strong",{staticClass:"user-detail__label"},[e._v(" Registered: ")]),e._v(" "+e._s(e.user.registered)+" ")])])])])},ce=[],pe={name:"UserDetail",props:{user:Object},data:function(){return{}},beforeCreate:function(){window.scroll({top:0,left:0})}},de=pe,me=(s("be0e"),Object(m["a"])(de,le,ce,!1,null,"173ac1c3",null)),fe=me.exports,_e=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"user-map"},[e.isGoogleMaps?s("google-map",{attrs:{user:e.user,apiKey:e.googleApiKey}}):s("leaflet-map",{attrs:{user:e.user}})],1)},he=[],ge=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("google-map-loader",{attrs:{mapConfig:e.mapConfig,apiKey:e.apiKey},scopedSlots:e._u([{key:"default",fn:function(t){var r=t.google,a=t.map;return[s("google-map-marker",{attrs:{marker:e.marker,google:r,map:a}})]}}])})},ve=[],be=s("5530"),Ce=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"google-map"},[s("div",{ref:"googleMap",staticClass:"google-map__map"}),Boolean(this.google)&&Boolean(this.map)?[e._t("default",null,{google:e.google,map:e.map})]:e._e()],2)},ye=[],Oe=s("f464"),Le=s.n(Oe),Ue={name:"GoogleMapLoader",props:{mapConfig:Object,apiKey:String},data:function(){return{google:null,map:null}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Le()({apiKey:e.apiKey});case 2:s=t.sent,e.google=s,e.initializeMap();case 5:case"end":return t.stop()}}),t)})))()},methods:{initializeMap:function(){var e=this.$refs.googleMap;this.map=new this.google.maps.Map(e,this.mapConfig)}}},Ee=Ue,we=(s("2d68"),Object(m["a"])(Ee,Ce,ye,!1,null,"4db98107",null)),ke=we.exports,Te=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div")},je=[],Re={COLOR_POINT:"#42b883",COLOR_POINT_FILL:"#35495e",COLOR_LANDSCAPE:"#42b883",COLOR_BORDERS:"#c3e6ff",COLOR_SELECTED_POINT:"#42b883",COLOR_WATER:"lightblue"},xe=Re.COLOR_LANDSCAPE,Ae=Re.COLOR_BORDERS,Se=Re.COLOR_WATER,Me=Re.COLOR_POINT_FILL,Pe=Re.COLOR_SELECTED_POINT,Ne={BORDERS:Ae,LANDSCAPE:xe,POINT:Pe,POINT_FILL:Me,WATER:Se},$e={path:"M 0, 0 m -5, 0 a 5,5 0 1,0 10,0 a 5,5 0 1,0 -10,0",strokeOpacity:.7,strokeWeight:6,strokeColor:Ne.POINT,fillColor:Ne.POINT_FILL,fillOpacity:.7,scale:3},Ie={clickableIcons:!1,streetViewControl:!1,panControlOptions:!1,gestureHandling:"cooperative",backgroundColor:Ne.LANDSCAPE,mapTypeControl:!1,zoomControlOptions:{style:"SMALL"},zoom:2,minZoom:2,maxZoom:10,styles:[{featureType:"landscape",stylers:[{hue:Ne.LANDSCAPE},{saturation:50.2},{lightness:-34.8},{gamma:1}]},{featureType:"poi",stylers:[{visibility:"off"}]},{featureType:"road.highway",stylers:[{hue:Ne.LANDSCAPE},{saturation:-19.8},{lightness:-1.8},{gamma:1}]},{featureType:"road.arterial",stylers:[{hue:Ne.LANDSCAPE},{saturation:72.4},{lightness:-32.6},{gamma:1}]},{featureType:"road.local",stylers:[{visibility:"off"}]},{featureType:"transit",stylers:[{visibility:"off"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"administrative.locality",stylers:[{visibility:"off"}]},{featureType:"administrative.province",stylers:[{visibility:"off"}]},{featureType:"administrative.land_parcel",stylers:[{visibility:"off"}]},{featureType:"administrative.neighborhood",stylers:[{visibility:"off"}]},{featureType:"administrative.country",elementType:"geometry.stroke",stylers:[{visibility:"on"},{color:Ne.BORDERS}]},{featureType:"administrative",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"water",stylers:[{hue:Ne.WATER},{saturation:-63.2},{lightness:38},{gamma:1}]}]},Be={name:"GoogleMapMarker",props:{google:{type:Object,required:!0},map:{type:Object,required:!0},marker:{type:Object,required:!0}},mounted:function(){var e=this.google.maps.Marker;new e({position:this.marker.position,marker:this.marker,map:this.map,icon:$e})}},He=Be,De=Object(m["a"])(He,Te,je,!1,null,null,null),Fe=De.exports,ze={name:"GoogleMap",components:{GoogleMapLoader:ke,GoogleMapMarker:Fe},props:{user:Object,apiKey:String},data:function(){return{}},computed:{marker:function(){return{position:{lat:parseFloat(this.user.latitude),lng:parseFloat(this.user.longitude)}}},mapCenter:function(){return this.marker.position},mapConfig:function(){return Object(be["a"])(Object(be["a"])({},Ie),{},{center:this.mapCenter})}},methods:{}},Xe=ze,Ge=Object(m["a"])(Xe,ge,ve,!1,null,null,null),Ke=Ge.exports,We=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"map"},[s("leaflet-map-loader",{attrs:{marker:e.marker}})],1)},Ze=[],qe=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"leaflet-map"},[e.showMap?s("l-map",{staticStyle:{height:"100%"},attrs:{zoom:e.zoom,center:e.center,options:e.mapOptions},on:{"update:center":e.centerUpdate,"update:zoom":e.zoomUpdate}},[s("l-tile-layer",{attrs:{url:e.url,attribution:e.attribution}}),s("l-marker",{attrs:{"lat-lng":e.withPopup}},[s("l-popup",[e._v(" Current location: "),s("p",[e._v(" Latitude: "+e._s(this.marker.position.lat)+" "),s("br"),e._v(" Longitude: "+e._s(this.marker.position.lng)+" ")])])],1)],1):e._e()],1)},Ve=[],Je=(s("6cc5"),s("e11e")),Qe=s("2699"),Ye=s("a40a"),et=s("4e2b"),tt=s("f60f");delete Je["Icon"].Default.prototype._getIconUrl,Je["Icon"].Default.mergeOptions({iconRetinaUrl:s("584d"),iconUrl:s("6397"),shadowUrl:s("e2b9")});var st={name:"LeafletMapLoader",props:{marker:Object},components:{LMap:Qe["a"],LTileLayer:Ye["a"],LMarker:et["a"],LPopup:tt["a"]},data:function(){return{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',center:Object(Je["latLng"])(this.marker.position.lat,this.marker.position.lng),currentCenter:Object(Je["latLng"])(this.marker.position.lat,this.marker.position.lng),withPopup:Object(Je["latLng"])(this.marker.position.lat,this.marker.position.lng),zoom:3,currentZoom:11.5,mapOptions:{minZoom:2,maxZoom:10,zoomSnap:.5},showMap:!0}},methods:{zoomUpdate:function(e){this.currentZoom=e},centerUpdate:function(e){this.currentCenter=e}}},rt=st,at=(s("5fc8"),Object(m["a"])(rt,qe,Ve,!1,null,"fe43c35c",null)),nt=at.exports,it={name:"LeafletMap",components:{LeafletMapLoader:nt},props:{user:Object},computed:{marker:function(){return{position:{lat:parseFloat(this.user.latitude),lng:parseFloat(this.user.longitude)}}}}},ot=it,ut=(s("9cbd"),Object(m["a"])(ot,We,Ze,!1,null,"21d69b30",null)),lt=ut.exports,ct={name:"UserMap",components:{GoogleMap:Ke,LeafletMap:lt},props:{user:Object},data:function(){return{googleApiKey:"XXXXXX"}},computed:{isGoogleMaps:function(){return"XXXXXX"!==this.googleApiKey}}},pt=ct,dt=(s("1230"),Object(m["a"])(pt,_e,he,!1,null,"71a16f86",null)),mt=dt.exports,ft={components:{UserDetail:fe,UserMap:mt},props:{usersFetch:Array,username:String},data:function(){return{usersList:this.usersFetch}},computed:{user:function(){var e=this;return this.usersList.find((function(t){return t.username===e.username}))}},mounted:function(){var e=this.$route.params.username,t=this.usersList.find((function(t){return t.username===e}));void 0===t&&this.$router.push({name:"users"})}},_t=ft,ht=Object(m["a"])(_t,oe,ue,!1,null,"38115d98",null),gt=ht.exports;r["a"].use(R["a"]);var vt=new R["a"]({mode:"history",routes:[{path:"",name:"home",component:N,meta:{title:"Home"}},{path:"/users",name:"users",component:ie,meta:{title:"My users"}},{path:"/user/:username",name:"user",component:gt,props:!0,meta:{title:"My user"}},{path:"*",redirect:"/",component:N}]});vt.beforeEach((function(e,t,s){var r=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.title})),a=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags}));if(t.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags})),r&&(document.title="".concat(r.meta.title," | Vue Users")||!1),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(e){return e.parentNode.removeChild(e)})),!a)return s();a.meta.metaTags.map((function(e){var t=document.createElement("meta");return Object.keys(e).forEach((function(s){t.setAttribute(s,e[s])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((function(e){return document.head.appendChild(e)})),s()}));var bt=vt;r["a"].config.productionTip=!1,new r["a"]({router:bt,render:function(e){return e(j)}}).$mount("#app")},"579c":function(e,t,s){},"5c0b":function(e,t,s){"use strict";s("9c0c")},"5c78":function(e,t,s){},"5fc8":function(e,t,s){"use strict";s("8661")},"619b":function(e,t,s){"use strict";s("de80")},"83c6":function(e,t,s){},8661:function(e,t,s){},"9b5d":function(e,t,s){},"9c0c":function(e,t,s){},"9cbd":function(e,t,s){"use strict";s("5c78")},aa42:function(e,t,s){},b89a:function(e,t,s){},b958:function(e,t,s){"use strict";s("3a7a")},be0e:function(e,t,s){"use strict";s("83c6")},c4dc:function(e,t,s){},cf05:function(e,t,s){e.exports=s.p+"img/logo.82b9c7a5.png"},d5fe:function(e,t,s){"use strict";s("9b5d")},de80:function(e,t,s){},e3e3:function(e,t,s){"use strict";s("c4dc")}});
//# sourceMappingURL=app.76525967.js.map