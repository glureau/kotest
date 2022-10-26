"use strict";(self.webpackChunkkotestdocs=self.webpackChunkkotestdocs||[]).push([[58337],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),f=r,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||a;return n?o.createElement(m,i(i({ref:t},p),{},{components:n})):o.createElement(m,i({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},31434:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var o=n(87462),r=n(63366),a=(n(67294),n(3905)),i=["components"],s={title:"Project Level Config",slug:"project-config.html"},l=void 0,c={unversionedId:"framework/project_config",id:"version-5.3/framework/project_config",title:"Project Level Config",description:"Kotest is flexible and has many ways to configure tests, such as configuring the order of tests inside a spec, or how",source:"@site/versioned_docs/version-5.3/framework/project_config.md",sourceDirName:"framework",slug:"/framework/project-config.html",permalink:"/docs/5.3/framework/project-config.html",draft:!1,editUrl:"https://github.com/kotest/kotest/blob/master/documentation/versioned_docs/version-5.3/framework/project_config.md",tags:[],version:"5.3",frontMatter:{title:"Project Level Config",slug:"project-config.html"},sidebar:"framework",previous:{title:"Test Case Config",permalink:"/docs/5.3/framework/testcaseconfig.html"},next:{title:"System properties",permalink:"/docs/5.3/framework/framework-config-props.html"}},p={},d=[{value:"Parallelism",id:"parallelism",level:2},{value:"Assertion Mode",id:"assertion-mode",level:2},{value:"Global Assert Softly",id:"global-assert-softly",level:2},{value:"Fail On Ignored Tests",id:"fail-on-ignored-tests",level:2},{value:"Test Ordering",id:"test-ordering",level:2},{value:"Spec Ordering",id:"spec-ordering",level:2},{value:"Test name case",id:"test-name-case",level:2},{value:"Test name whitespace",id:"test-name-whitespace",level:2}],u={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Kotest is flexible and has many ways to configure tests, such as configuring the order of tests inside a spec, or how\ntest classes are created. Sometimes you may want to set this at a global level and for that you need to use project-level-config."),(0,a.kt)("p",null,"Project level configuration can be used by creating an object or class that extends from ",(0,a.kt)("inlineCode",{parentName:"p"},"AbstractProjectConfig"),". At runtime,\nKotest will scan for classes that extend this abstract class and instantiate them, reading any configuration defined there."),(0,a.kt)("p",null,"You can create more than one config class in different modules, and any on the current classpath will be detected and configs merged.\nThis is effective for allowing common config to be placed into a root module. In the case of clashes, one value will be arbitrarily picked, so it is not recommended adding competing settings to different configs."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If your project specifies more than one project config, they will be merged, but the resolution of conflicting values is unspecified. It is advised that separate configs do not specify the same settings")),(0,a.kt)("p",null,"Any configuration set at the Spec level or directly on a test will override the config specified at the project level."),(0,a.kt)("p",null,"Some configuration options available in ",(0,a.kt)("inlineCode",{parentName:"p"},"KotestProjectConfig")," include parallelism of tests, failing specs with ignored tests, global ",(0,a.kt)("inlineCode",{parentName:"p"},"AssertSoftly"),", and reusable listeners or extensions."),(0,a.kt)("h2",{id:"parallelism"},"Parallelism"),(0,a.kt)("p",null,"You can ask Kotest to run specs in parallel to take advantage of modern cpus with several cores by setting the parallelism level (default is 1). Tests inside a spec are always executed sequentially."),(0,a.kt)("p",null,"To do this, override ",(0,a.kt)("inlineCode",{parentName:"p"},"parallelism")," inside your config and set it to a value higher than 1.\nThe number set is the number of concurrently executing specs. For example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"object KotestProjectConfig : AbstractProjectConfig() {\n    override val parallelism = 3\n}\n")),(0,a.kt)("p",null,"An alternative way to enable this is the system property ",(0,a.kt)("inlineCode",{parentName:"p"},"kotest.framework.parallelism")," which will always (if defined) take priority over the value here."),(0,a.kt)("p",null,"Some tests may not play nice in parallel, so you can opt out individual specs and force them to be executed in isolation by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"@DoNotParallelize")," annotation on the spec."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"This is only available on the JVM target.")),(0,a.kt)("h2",{id:"assertion-mode"},"Assertion Mode"),(0,a.kt)("p",null,"You can ask Kotest to fail the build, or warn in std err, if a test is executed that does not use a Kotest assertion."),(0,a.kt)("p",null,"To do this, set ",(0,a.kt)("inlineCode",{parentName:"p"},"assertionMode")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"AssertionMode.Error")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"AssertionMode.Warn")," inside your config. For example.\nAn alternative way to enable this is the system property ",(0,a.kt)("inlineCode",{parentName:"p"},"kotest.framework.assertion.mode")," which will always (if defined) take priority over the value here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"object KotestProjectConfig : AbstractProjectConfig() {\n    override val assertionMode = AssertionMode.Error\n}\n")),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Assertion mode only works for Kotest assertions and not other assertion libraries. This is because the assertions need to opt-in\nto the assertion mode when enabled.")),(0,a.kt)("h2",{id:"global-assert-softly"},"Global Assert Softly"),(0,a.kt)("p",null,"Assert softly is very useful to batch up errors into a single failure. If we want to enable this for every test automatically, we can do this in a config.\nAn alternative way to enable this is by setting system property ",(0,a.kt)("inlineCode",{parentName:"p"},"kotest.framework.assertion.globalassertsoftly")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," which will always (if defined) take priority over the value here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"object KotestProjectConfig : AbstractProjectConfig() {\n    override val globalAssertSoftly = true\n}\n")),(0,a.kt)("h2",{id:"fail-on-ignored-tests"},"Fail On Ignored Tests"),(0,a.kt)("p",null,"You may wish to consider an ignored test as a failure.\nTo enable this feature, set ",(0,a.kt)("inlineCode",{parentName:"p"},"failOnIgnoredTests")," to true inside your project config. For example."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"object KotestProjectConfig : AbstractProjectConfig() {\n    override val failOnIgnoredTests = true\n}\n")),(0,a.kt)("h2",{id:"test-ordering"},"Test Ordering"),(0,a.kt)("p",null,"When running multiple tests from a Spec, there's a certain order on how to execute them."),(0,a.kt)("p",null,"By default, a sequential order is used (the order that tests are defined in the spec), but this can be changed. For available options see ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.3/framework/test-ordering.html"},"test ordering"),"."),(0,a.kt)("h2",{id:"spec-ordering"},"Spec Ordering"),(0,a.kt)("p",null,"By default, the ordering of Spec classes is not defined. This is often sufficient, when we have no preference, but if we need control over the execution order of specs, we can use ",(0,a.kt)("a",{parentName:"p",href:"/docs/5.3/framework/spec-ordering.html"},"spec ordering"),"."),(0,a.kt)("h2",{id:"test-name-case"},"Test name case"),(0,a.kt)("p",null,"The case of the test names can be controlled by changing the value of ",(0,a.kt)("inlineCode",{parentName:"p"},"testNameCase"),".\nBy default, the value is ",(0,a.kt)("inlineCode",{parentName:"p"},"TestNameCase.AsIs")," which makes no change."),(0,a.kt)("p",null,"By setting the value to ",(0,a.kt)("inlineCode",{parentName:"p"},"TestNameCase.Lowercase")," a test's name will be lowercase in output."),(0,a.kt)("p",null,"If you are using a spec that adds in prefixes to the test names (should as WordSpec or BehaviorSpec) then the values ",(0,a.kt)("inlineCode",{parentName:"p"},"TestNameCase.Sentence")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TestNameCase.InitialLowercase")," can be useful."),(0,a.kt)("h2",{id:"test-name-whitespace"},"Test name whitespace"),(0,a.kt)("p",null,"If you define test names over several lines then ",(0,a.kt)("inlineCode",{parentName:"p"},"removeTestNameWhitespace")," can be useful. Take this example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'"""this is\n   my test case""" {\n  // test here\n}\n')),(0,a.kt)("p",null,"Then the test name in output will be ",(0,a.kt)("inlineCode",{parentName:"p"},"this is   my test case"),". By setting ",(0,a.kt)("inlineCode",{parentName:"p"},"removeTestNameWhitespace")," to true,\nthen this name will be trimmed to ",(0,a.kt)("inlineCode",{parentName:"p"},"this is my test case"),"."),(0,a.kt)("p",null,"An alternative way to enable this is by setting system property ",(0,a.kt)("inlineCode",{parentName:"p"},"kotest.framework.testname.multiline")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"true")," which will always (if defined) take priority over the value here."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"object KotestProjectConfig : AbstractProjectConfig() {\n    override val testNameRemoveWhitespace = true\n}\n")))}f.isMDXComponent=!0}}]);