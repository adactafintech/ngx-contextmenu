(self.webpackChunk_perfectmemory_ngx_contextmenu_monorepo=self.webpackChunk_perfectmemory_ngx_contextmenu_monorepo||[]).push([[179],{"./libs/ngx-contextmenu lazy recursive ^\\.\\/.*$ include: (?:\\/libs\\/ngx-contextmenu(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx%7Cmdx))$":(module,__unused_webpack_exports,__webpack_require__)=>{var map={"./src/stories/APContextMenuService.stories.mdx":["./libs/ngx-contextmenu/src/stories/APContextMenuService.stories.mdx",516,443],"./src/stories/APIContextMenuComponent.stories.mdx":["./libs/ngx-contextmenu/src/stories/APIContextMenuComponent.stories.mdx",516,746],"./src/stories/APIContextMenuDirective.stories.mdx":["./libs/ngx-contextmenu/src/stories/APIContextMenuDirective.stories.mdx",516,406],"./src/stories/APIContextMenuItemDirective.stories.mdx":["./libs/ngx-contextmenu/src/stories/APIContextMenuItemDirective.stories.mdx",516,908],"./src/stories/APIIntroduction.stories.mdx":["./libs/ngx-contextmenu/src/stories/APIIntroduction.stories.mdx",516,765],"./src/stories/APIKeyboardNavigation.stories.mdx":["./libs/ngx-contextmenu/src/stories/APIKeyboardNavigation.stories.mdx",516,775],"./src/stories/APIStyling.stories.mdx":["./libs/ngx-contextmenu/src/stories/APIStyling.stories.mdx",516,141],"./src/stories/Changelog.stories.mdx":["./libs/ngx-contextmenu/src/stories/Changelog.stories.mdx",516,322],"./src/stories/ContextMenu.stories":["./libs/ngx-contextmenu/src/stories/ContextMenu.stories.ts",120,486],"./src/stories/ContextMenu.stories.ts":["./libs/ngx-contextmenu/src/stories/ContextMenu.stories.ts",120,486],"./src/stories/Faq.stories.mdx":["./libs/ngx-contextmenu/src/stories/Faq.stories.mdx",516,426],"./src/stories/Introduction.stories.mdx":["./libs/ngx-contextmenu/src/stories/Introduction.stories.mdx",516,982],"./src/stories/Setup.stories.mdx":["./libs/ngx-contextmenu/src/stories/Setup.stories.mdx",516,435]};function webpackAsyncContext(req){if(!__webpack_require__.o(map,req))return Promise.resolve().then((()=>{var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}));var ids=map[req],id=ids[0];return Promise.all(ids.slice(1).map(__webpack_require__.e)).then((()=>__webpack_require__(id)))}webpackAsyncContext.keys=()=>Object.keys(map),webpackAsyncContext.id="./libs/ngx-contextmenu lazy recursive ^\\.\\/.*$ include: (?:\\/libs\\/ngx-contextmenu(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx%7Cmdx))$",module.exports=webpackAsyncContext},"./libs/ngx-contextmenu/src/assets/stylesheets/base.scss?ngGlobalStyle":()=>{},"./libs/ngx-contextmenu/src/stories/assets/stylesheets/index.scss?ngGlobalStyle":()=>{},"./libs/ngx-contextmenu/.storybook/preview.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{parameters:()=>parameters});const parameters={actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/}},options:{storySort:{order:["Context Menu",["Introduction","Installation and setup","Demo","Documentation",["In a nutshell","[contextMenu]","<context-menu>","[contextMenuItem]","ContextMenuService","Styling","Keyboard navigation"],"FAQ","Changelog"]]}},docs:{inlineStories:!0}}},"./storybook-config-entry.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _ref,_importFn,external_STORYBOOK_MODULE_GLOBAL_=__webpack_require__("@storybook/global"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),external_STORYBOOK_MODULE_CHANNELS_=__webpack_require__("@storybook/channels"),asyncToGenerator=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");const importers=[function(_x){return(_ref=_ref||(0,asyncToGenerator.Z)((function*(path){if(!/^\.[\\/](?:libs\/ngx-contextmenu(?:\/(?!\.)(?:(?:(?!(?:^|\/)\.).)*?)\/|\/|$)(?!\.)(?=.)[^/]*?\.stories\.(js|jsx|ts|tsx|mdx))$/.exec(path))return;const pathRemainder=path.substring(23);return __webpack_require__("./libs/ngx-contextmenu lazy recursive ^\\.\\/.*$ include: (?:\\/libs\\/ngx-contextmenu(?:\\/(?%21\\.)(?:(?:(?%21(?:^%7C\\/)\\.).)*?)\\/%7C\\/%7C$)(?%21\\.)(?=.)[^/]*?\\.stories\\.(js%7Cjsx%7Cts%7Ctsx%7Cmdx))$")("./"+pathRemainder)}))).apply(this,arguments)}];const channel=(0,external_STORYBOOK_MODULE_CHANNELS_.createBrowserChannel)({page:"preview"});external_STORYBOOK_MODULE_PREVIEW_API_.addons.setChannel(channel),"DEVELOPMENT"===external_STORYBOOK_MODULE_GLOBAL_.global.CONFIG_TYPE&&(window.__STORYBOOK_SERVER_CHANNEL__=channel);const preview=new external_STORYBOOK_MODULE_PREVIEW_API_.PreviewWeb;window.__STORYBOOK_PREVIEW__=preview,window.__STORYBOOK_STORY_STORE__=preview.storyStore,window.__STORYBOOK_ADDONS_CHANNEL__=channel,window.__STORYBOOK_CLIENT_API__=new external_STORYBOOK_MODULE_PREVIEW_API_.ClientApi({storyStore:preview.storyStore}),preview.initialize({importFn:function importFn(_x2){return(_importFn=_importFn||(0,asyncToGenerator.Z)((function*(path){for(let i=0;i<importers.length;i++){const moduleExports=yield(x=()=>importers[i](path),x());if(moduleExports)return moduleExports}var x}))).apply(this,arguments)},getProjectAnnotations:()=>(0,external_STORYBOOK_MODULE_PREVIEW_API_.composeConfigs)([__webpack_require__("./node_modules/@storybook/angular/dist/client/preview-prod.js"),__webpack_require__("./node_modules/@storybook/angular/dist/client/docs/config.js"),__webpack_require__("./node_modules/@storybook/angular/dist/client/config.js"),__webpack_require__("./node_modules/@storybook/addon-links/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/actions/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/backgrounds/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/measure/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/outline/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-essentials/dist/highlight/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-interactions/dist/preview.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/preview.mjs"),__webpack_require__("./libs/ngx-contextmenu/.storybook/preview.ts")])})},"@storybook/channels":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CHANNELS__},"@storybook/client-logger":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CLIENT_LOGGER__},"@storybook/core-events":module=>{"use strict";module.exports=__STORYBOOK_MODULE_CORE_EVENTS__},"@storybook/global":module=>{"use strict";module.exports=__STORYBOOK_MODULE_GLOBAL__},"@storybook/preview-api":module=>{"use strict";module.exports=__STORYBOOK_MODULE_PREVIEW_API__}},__webpack_require__=>{var __webpack_exec__=moduleId=>__webpack_require__(__webpack_require__.s=moduleId);__webpack_require__.O(0,[72],(()=>(__webpack_exec__("./storybook-config-entry.js"),__webpack_exec__("./node_modules/@angular/compiler/fesm2022/compiler.mjs"),__webpack_exec__("./libs/ngx-contextmenu/src/stories/assets/stylesheets/index.scss?ngGlobalStyle"),__webpack_exec__("./node_modules/@angular/cdk/overlay-prebuilt.css?ngGlobalStyle"),__webpack_exec__("./libs/ngx-contextmenu/src/assets/stylesheets/base.scss?ngGlobalStyle"))));__webpack_require__.O()}]);