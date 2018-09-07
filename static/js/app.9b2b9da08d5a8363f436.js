webpackJsonp([1],{"7zck":function(t,e){},M93x:function(t,e,a){"use strict";var s=a("xJD8"),r=a.n(s),o=a("sGM7");var i=function(t){a("xMGg")},n=a("VU/8")(r.a,o.a,!1,i,null,null);e.default=n.exports},NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("7+uW"),r=a("M93x"),o=a("/ocq");s.a.use(o.a);var i=new o.a({routes:[]}),n=a("3EgV"),l=a.n(n),d=(a("7zck"),a("bm7V")),v=a.n(d);s.a.use(v.a,{offset:-58}),s.a.use(l.a,{theme:{primary:"#ee44aa",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}),s.a.config.productionTip=!1,new s.a({el:"#app",router:i,components:{App:r.default},template:"<App/>"})},sGM7:function(t,e,a){"use strict";var s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}]},[a("v-toolbar",{staticClass:"landing-page-toolbar",class:[t.toolbar?"toolbar-scroll":"toolbar-top"],attrs:{app:"",dark:!t.toolbar,flat:!t.toolbar,height:"58px"}},[a("v-toolbar-items",[a("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#top",expression:"'#top'"}],staticClass:"toolbar-logo",attrs:{flat:""}}),t._v(" "),a("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#features",expression:"'#features'"}],staticClass:"hidden-sm-and-down",attrs:{flat:""}},[t._v("Features")]),t._v(" "),a("v-btn",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#getting-started",expression:"'#getting-started'"}],staticClass:"hidden-sm-and-down",attrs:{flat:""}},[t._v("Getting started")])],1),t._v(" "),a("v-spacer"),t._v(" "),a("v-toolbar-items",[a("v-btn",{attrs:{flat:"",href:t.docsUri,target:"_blank",rel:"noopener"}},[a("v-icon",[t._v("import_contacts")])],1),t._v(" "),a("v-btn",{attrs:{flat:"",href:"https://github.com/oracle/helidon",target:"_blank",rel:"noopener"}},[a("i",{staticClass:"icon fab fa-github"})])],1)],1),t._v(" "),a("v-content",[a("v-container",{staticClass:"screen-1",attrs:{id:"top",fluid:"",light:""}},[a("v-layout",{attrs:{"align-center":""}},[a("v-flex",{staticClass:"screen-wrapper"},[a("div",{staticClass:"bgd"}),t._v(" "),a("div",{staticClass:"sections"},[a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"jumbotron",attrs:{md12:"",sm12:""}},[a("h1",[t._v("Project Helidon")]),t._v(" "),a("p",[t._v("Lightweight. Fast. Crafted for Microservices.")])])],1),t._v(" "),a("v-flex",{staticClass:"jumbotron-logo hidden-xs-only",attrs:{md12:"",sm12:""}}),t._v(" "),a("v-layout",{staticClass:"section",attrs:{row:"",wrap:""}},[a("div",[a("p",[t._v("Helidon is a collection of Java libraries for writing\n                       microservices that run on a fast web core powered by Netty.")])])])],1)],1)])],1)],1),t._v(" "),a("v-container",{staticClass:"screen-2",attrs:{id:"features",fluid:"",light:""}},[a("h2",[t._v("Features")]),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}}),t._v(" "),a("v-flex",{attrs:{md4:"",sm12:""}},[a("div",{staticClass:"section"},[a("div",[a("h3",[a("v-icon",[t._v("import_contacts")]),t._v("Simple and fast")],1),t._v(" "),a("p",[t._v("Helidon is designed to be simple to  use, with tooling and examples to get you going quickly. Since Helidon\n                  is just a collection of libraries running on a fast Netty core, there is no extra overhead or bloat.")])])])]),t._v(" "),a("v-flex",{staticClass:"simple-and-fast-graphic hidden-sm-and-down",attrs:{md4:"",sm12:""}}),t._v(" "),a("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}})],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"hidden-sm-and-down vertical-spacer",attrs:{md12:""}}),t._v(" "),a("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}}),t._v(" "),a("v-flex",{staticClass:"microprofile-support-graphic hidden-sm-and-down",attrs:{md4:"",sm12:""}}),t._v(" "),a("v-flex",{attrs:{md4:"",sm12:""}},[a("div",{staticClass:"section"},[a("div",[a("h3",[a("v-icon",[t._v("border_clear")]),t._v("Microprofile Support")],1),t._v(" "),a("p",[t._v("Helidon supports MicroProfile and provides familiar APIs like JAX-RS, CDI and JSON-P/B. Our\n                   MicroProfile implementation runs on our fast Helidon Reactive WebServer")])])])]),t._v(" "),a("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}})],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"hidden-sm-and-down vertical-spacer",attrs:{md12:""}}),t._v(" "),a("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}}),t._v(" "),a("v-flex",{attrs:{md4:"",sm12:""}},[a("div",{staticClass:"section"},[a("div",[a("h3",[a("v-icon",[t._v("storage")]),t._v("Reactive WebServer")],1),t._v(" "),a("p",[t._v("Helidon Reactive WebServer provides a modern functional programming model and runs on top of Netty.\n                  Lightweight, flexible and reactive, the Helidon WebServer provides a simple to use and fast foundation for\n                  your microservices.")])])])]),t._v(" "),a("v-flex",{staticClass:"reactive-web-server-graphic hidden-sm-and-down",attrs:{md4:"",sm12:""}}),t._v(" "),a("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}})],1),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"hidden-sm-and-down vertical-spacer",attrs:{md12:""}}),t._v(" "),a("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}}),t._v(" "),a("v-flex",{staticClass:"observable-and-resilient-graphic hidden-sm-and-down",attrs:{md4:"",sm12:""}}),t._v(" "),a("v-flex",{attrs:{md4:"",sm12:""}},[a("div",{staticClass:"section"},[a("div",[a("h3",[a("v-icon",[t._v("repeat")]),t._v("Observable and Resilient")],1),t._v(" "),a("p",[t._v("With support for health checks, metrics, tracing and fault tolerance, Helidon has what you need to\n                   write cloud ready applications that integrate with Prometheus, Zipkin and Kubernetes.")])])])]),t._v(" "),a("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md2:""}})],1)],1),t._v(" "),a("v-container",{staticClass:"screen-3",attrs:{id:"getting-started",fluid:"",light:""}},[a("h2",[t._v("Getting started")]),t._v(" "),a("v-layout",{attrs:{row:"",wrap:""}},[a("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md1:"",lg2:""}}),t._v(" "),a("v-flex",{attrs:{md10:"",lg8:"",xs12:"",sm12:""}},[a("v-layout",{attrs:{row:"",wrap:""}},[a("v-layout",{staticClass:"step1",attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:""}},[a("h4",[t._v("Choose your programming model")])]),t._v(" "),a("v-flex",{staticClass:"code-snippet microframework",attrs:{md6:"",xs12:"",sm12:""}},[a("h5",[t._v("MicroFramework")]),t._v(" "),a("pre",[a("code",[t._v('WebServer.create(\n  Routing.builder()\n    .get("/greet", (req, res)\n       -> res.send("Hello World!"))\n    .build())\n  .start();')])])]),t._v(" "),a("v-flex",{staticClass:"code-snippet microprofile",attrs:{md6:"",xs12:"",sm12:""}},[a("h5",[t._v("MicroProfile")]),t._v(" "),a("pre",[a("code",[t._v('public class GreetService {\n  @GET\n  @Path("/greet")\n  public String getMsg() {\n    return "Hello World!";\n  }\n}')])])])],1),t._v(" "),a("v-flex",{staticClass:"step2",attrs:{xs12:""}},[a("h4",[t._v("Build, run, test")]),t._v(" "),a("h5",[t._v("Build")]),t._v(" "),a("pre",[a("code",[t._v("$ mvn package")])]),t._v(" "),a("h5",[t._v("Run")]),t._v(" "),a("pre",[a("code",[t._v("$ java -jar target/myapp.jar")])]),t._v(" "),a("h5",[t._v("Test")]),t._v(" "),a("pre",[a("code",[t._v("$ curl -X GET http://localhost:8080/greet\nHello World!")])])]),t._v(" "),a("v-flex",{staticClass:"step3",attrs:{xs12:""}},[a("h4",[t._v("Get started!")]),t._v(" "),a("v-btn",{attrs:{light:"",large:"",href:t.gettingStartedUri,target:"_blank",rel:"noopener"}},[t._v("Go to docs")])],1)],1)],1),t._v(" "),a("v-flex",{staticClass:"hidden-sm-and-down",attrs:{md1:"",lg2:""}})],1)],1)],1),t._v(" "),a("v-footer",[a("div",[t._v("Copyright © 2018, Oracle and/or its affiliates. All rights reserved. Oracle and Java are registered\n         trademarks of Oracle and/or its affiliates. Other names may be trademarks of their respective owners.")])])],1)},staticRenderFns:[]};e.a=s},xJD8:function(t,e,a){t.exports={data:function(){return{toolbar:!1,docsUri:"./docs/latest",gettingStartedUri:"./docs/latest/#/getting-started/02_base-example"}},methods:{onScroll:function(){this.toolbar=window.scrollY>58}}}},xMGg:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.9b2b9da08d5a8363f436.js.map