(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{185:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return s}));var a=n(2),i=n(7),o=(n(0),n(236)),r={id:"compose_api",title:"Compose API",sidebar_label:"Compose API"},l={unversionedId:"experimental/compose_api",id:"experimental/compose_api",isDocsHomePage:!1,title:"Compose API",description:"The compose API can compose a config similarly to @hydra.main() anywhere in the code.",source:"@site/docs/experimental/hydra_compose.md",slug:"/experimental/compose_api",permalink:"/docs/next/experimental/compose_api",editUrl:"https://github.com/facebookresearch/hydra/edit/master/website/docs/experimental/hydra_compose.md",version:"current",lastUpdatedBy:"Jieru Hu",lastUpdatedAt:1603845527,sidebar_label:"Compose API",sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/next/experimental/intro"},next:{title:"Overview",permalink:"/docs/next/development/overview"}},c=[{value:"When to use the Compose API",id:"when-to-use-the-compose-api",children:[]},{value:"Initialization methods",id:"initialization-methods",children:[]},{value:"Code example",id:"code-example",children:[]},{value:"API Documentation",id:"api-documentation",children:[]}],p={rightToc:c};function s(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The compose API can compose a config similarly to ",Object(o.b)("inlineCode",{parentName:"p"},"@hydra.main()")," anywhere in the code.",Object(o.b)("br",{parentName:"p"}),"\n","Prior to calling compose(), you have to initialize Hydra: This can be done by using the standard ",Object(o.b)("inlineCode",{parentName:"p"},"@hydra.main()"),"\nor by calling one of the initialization methods listed below."),Object(o.b)("h3",{id:"when-to-use-the-compose-api"},"When to use the Compose API"),Object(o.b)("p",null,"The Compose API is useful when ",Object(o.b)("inlineCode",{parentName:"p"},"@hydra.main()")," is not applicable.\nFor example:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Inside a Jupyter notebook (",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/advanced/jupyter_notebooks"}),"Example"),")"),Object(o.b)("li",{parentName:"ul"},"Inside a unit test (",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/advanced/unit_testing"}),"Example"),")"),Object(o.b)("li",{parentName:"ul"},"In parts of your application that does not have access to the command line (",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebookresearch/hydra/tree/master/examples/advanced/ad_hoc_composition"}),"Example"),")"),Object(o.b)("li",{parentName:"ul"},"If you want to compose multiple configuration objects (",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/facebookresearch/hydra/blob/master/examples/advanced/ray_example/ray_compose_example.py"}),"Example with Ray"),")")),Object(o.b)("div",{class:"alert alert--info",role:"alert"},"Please avoid using the Compose API in cases where ",Object(o.b)("b",null,"@hydra.main()")," can be used. Doing so forfeits many of the benefits of Hydra (e.g., Tab completion, Multirun, Working directory management, Logging management and more)"),Object(o.b)("h3",{id:"initialization-methods"},"Initialization methods"),Object(o.b)("p",null,"There are 3 initialization methods:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initialize()"),": Initialize with a config path relative to the caller"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initialize_config_module()")," : Initialize with config_module (absolute)"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"initialize_config_dir()")," : Initialize with a config_dir on the file system (absolute)")),Object(o.b)("p",null,"All 3 can be used as methods or contexts.\nWhen used as methods, they are are initializing Hydra globally and should only be called once.\nWhen used as contexts, they are initializing Hydra within the context can be used multiple times."),Object(o.b)("h3",{id:"code-example"},"Code example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python"}),'from hydra.experimental import compose, initialize\nfrom omegaconf import OmegaConf\n\nif __name__ == "__main__":\n    # context initialization\n    with initialize(config_path="conf", job_name="test_app"):\n        cfg = compose(config_name="config", overrides=["db=mysql", "db.user=me"])\n        print(OmegaConf.to_yaml(cfg))\n\n    # global initialization\n    initialize(config_path="conf", job_name="test_app")\n    cfg = compose(config_name="config", overrides=["db=mysql", "db.user=me"])\n    print(OmegaConf.to_yaml(cfg))\n')),Object(o.b)("h3",{id:"api-documentation"},"API Documentation"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Compose API"',title:'"Compose','API"':!0}),'def compose(\n    config_name: Optional[str] = None,\n    overrides: List[str] = [],\n    strict: Optional[bool] = None,\n    return_hydra_config: bool = False,\n) -> DictConfig:\n    """\n    :param config_name: the name of the config\n           (usually the file name without the .yaml extension)\n    :param overrides: list of overrides for config file\n    :param strict: optionally override the default strict mode\n    :param return_hydra_config: True to return the hydra config node in the result\n    :return: the composed config\n    """\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Relative initialization"',title:'"Relative','initialization"':!0}),'def initialize(\n    config_path: Optional[str] = None,\n    job_name: Optional[str] = "app",\n    strict: Optional[bool] = None,\n    caller_stack_depth: int = 1,\n) -> None:\n    """\n    Initializes Hydra and add the config_path to the config search path.\n    config_path is relative to the parent of the caller.\n    Hydra detects the caller type automatically at runtime.\n\n    Supported callers:\n    - Python scripts\n    - Python modules\n    - Unit tests\n    - Jupyter notebooks.\n    :param config_path: path relative to the parent of the caller\n    :param job_name: the value for hydra.job.name (By default it is automatically detected based on the caller)\n    :param strict: (Deprecated), will be removed in the next major version\n    :param caller_stack_depth: stack depth of the caller, defaults to 1 (direct caller).\n    """\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Initialzing with config module"',title:'"Initialzing',with:!0,config:!0,'module"':!0}),'def initialize_config_module(config_module: str, job_name: str = "app") -> None:\n    """\n    Initializes Hydra and add the config_module to the config search path.\n    The config module must be importable (an __init__.py must exist at its top level)\n    :param config_module: absolute module name, for example "foo.bar.conf".\n    :param job_name: the value for hydra.job.name (default is \'app\')\n    """\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-python",metastring:'title="Initialzing with config directory"',title:'"Initialzing',with:!0,config:!0,'directory"':!0}),'def initialize_config_dir(config_dir: str, job_name: str = "app") -> None:\n    """\n    Initializes Hydra and add an absolute config dir to the to the config search path.\n    The config_dir is always a path on the file system and is must be an absolute path.\n    Relative paths will result in an error.\n    :param config_dir: absolute file system path\n    :param job_name: the value for hydra.job.name (default is \'app\')\n    """\n')))}s.isMDXComponent=!0},236:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=i.a.createContext({}),s=function(e){var t=i.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=s(e.components);return i.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),m=s(n),b=a,u=m["".concat(r,".").concat(b)]||m[b]||d[b]||o;return n?i.a.createElement(u,l(l({ref:t},p),{},{components:n})):i.a.createElement(u,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);