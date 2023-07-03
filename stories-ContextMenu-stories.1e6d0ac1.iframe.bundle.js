(self.webpackChunk_perfectmemory_ngx_contextmenu=self.webpackChunk_perfectmemory_ngx_contextmenu||[]).push([[746],{"./src/stories/ContextMenu.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Demo:()=>Demo,default:()=>ContextMenu_stories});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.js"),overlay=__webpack_require__("./node_modules/@angular/cdk/fesm2022/overlay.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");var a11y=__webpack_require__("./node_modules/@angular/cdk/fesm2022/a11y.mjs"),Subscription=__webpack_require__("./node_modules/rxjs/_esm5/internal/Subscription.js");const evaluateIfFunction=(value,item)=>value instanceof Function?value(item):value;var _class;const TESTING_WRAPPER={ActiveDescendantKeyManager:a11y.s1};let ContextMenuContentComponent=((_class=class ContextMenuContentComponent{constructor(_elementRef){this._elementRef=_elementRef,this.menuDirectives=[],this.menuClass="",this.isLeaf=!1,this.execute=new core.EventEmitter,this.openSubMenu=new core.EventEmitter,this.closeLeafMenu=new core.EventEmitter,this.closeSubMenus=new core.EventEmitter,this.closeAllMenus=new core.EventEmitter,this.subscription=new Subscription.w}ngOnInit(){this.setupDirectives()}ngAfterViewInit(){this.overlayRef?.updatePosition()}ngOnDestroy(){this.subscription.unsubscribe()}onKeyArrowDownOrUp(event){this.isLeaf&&this.keyManager.onKeydown(event)}onKeyArrowRight(event){this.isLeaf&&("rtl"!==this.dir?this.openActiveItemSubMenu(event):this.closeActiveItemSubMenu(event))}onKeyArrowLeft(event){this.isLeaf&&("rtl"!==this.dir?this.closeActiveItemSubMenu(event):this.openActiveItemSubMenu(event))}onKeyEnterOrSpace(event){this.isLeaf&&this.keyManager.activeItem&&this.onMenuItemSelect(this.keyManager.activeItem,event)}onKeyArrowEscape(event){this.isLeaf&&this.closeActiveItemSubMenu(event)}onClickOrRightClick(event){"click"===event.type&&2===event.button||this._elementRef.nativeElement.contains(event.target)||this.closeAllMenus.emit({event})}stopEvent(event){event.stopPropagation()}isMenuItemDisabled(menuItem){return evaluateIfFunction(menuItem.disabled,this.value)}isMenuItemVisible(menuItem){return evaluateIfFunction(menuItem.visible,this.value)}onOpenSubMenu(menuItem,event){if(menuItem.subMenu||this.closeSubMenus.next(),null===this.keyManager.activeItemIndex||!menuItem.subMenu)return;const anchorElementRef=this.liElementRefs.toArray()[this.keyManager.activeItemIndex],anchorElement=anchorElementRef&&anchorElementRef.nativeElement;anchorElement&&event instanceof KeyboardEvent?this.openSubMenu.emit({anchoredTo:"element",anchorElement,contextMenu:menuItem.subMenu,value:this.value,parentContextMenu:this}):event.currentTarget?this.openSubMenu.emit({anchoredTo:"element",anchorElement:event.currentTarget,contextMenu:menuItem.subMenu,value:this.value,parentContextMenu:this}):this.openSubMenu.emit({anchoredTo:"position",x:event.clientX,y:event.clientY,contextMenu:menuItem.subMenu,value:this.value})}onMenuItemSelect(menuItem,event){this.cancelEvent(event),this.onOpenSubMenu(menuItem,event),menuItem.subMenu||this.triggerExecute(menuItem,event)}triggerExecute(menuItem,event){menuItem.triggerExecute(event,this.value)}setupDirectives(){this.menuDirectives.forEach((menuDirective=>{menuDirective.value=this.value,this.subscription.add(menuDirective.execute.subscribe((event=>this.execute.emit({...event,menuDirective}))))}));const queryList=new core.QueryList;queryList.reset(this.menuDirectives),this.keyManager=new TESTING_WRAPPER.ActiveDescendantKeyManager(queryList).withWrap()}openActiveItemSubMenu(event){null!==this.keyManager.activeItemIndex&&(this.cancelEvent(event),this.keyManager.activeItem&&this.onOpenSubMenu(this.keyManager.activeItem,event))}closeActiveItemSubMenu(event){null!==this.keyManager.activeItemIndex&&(this.cancelEvent(event),this.closeLeafMenu.emit({excludeRootMenu:"rtl"===this.dir?39===event.keyCode:37===event.keyCode,event}))}cancelEvent(event){if(!event||!event.target)return;const target=event.target;["INPUT","TEXTAREA","SELECT"].includes(target.tagName)||target.isContentEditable||(event.preventDefault(),event.stopPropagation())}}).ctorParameters=()=>[{type:core.ElementRef}],_class.propDecorators={menuDirectives:[{type:core.Input}],value:[{type:core.Input}],dir:[{type:core.Input},{type:core.HostBinding,args:["attr.dir"]}],parentContextMenu:[{type:core.Input}],menuClass:[{type:core.Input}],overlayRef:[{type:core.Input}],isLeaf:[{type:core.Input}],execute:[{type:core.Output}],openSubMenu:[{type:core.Output}],closeLeafMenu:[{type:core.Output}],closeSubMenus:[{type:core.Output}],closeAllMenus:[{type:core.Output}],liElementRefs:[{type:core.ViewChildren,args:["li"]}],onKeyArrowDownOrUp:[{type:core.HostListener,args:["window:keydown.ArrowDown",["$event"]]},{type:core.HostListener,args:["window:keydown.ArrowUp",["$event"]]}],onKeyArrowRight:[{type:core.HostListener,args:["window:keydown.ArrowRight",["$event"]]}],onKeyArrowLeft:[{type:core.HostListener,args:["window:keydown.ArrowLeft",["$event"]]}],onKeyEnterOrSpace:[{type:core.HostListener,args:["window:keydown.Enter",["$event"]]},{type:core.HostListener,args:["window:keydown.Space",["$event"]]}],onKeyArrowEscape:[{type:core.HostListener,args:["window:keydown.Escape",["$event"]]}],onClickOrRightClick:[{type:core.HostListener,args:["document:click",["$event"]]},{type:core.HostListener,args:["document:contextmenu",["$event"]]}]},_class);ContextMenuContentComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"context-menu-content",template:'<div class="ngx-contextmenu" [ngClass]="menuClass" [attr.dir]="dir">\n  <ul #menu class="ngx-contextmenu--dropdown-menu" role="menu" tabindex="0">\n    <li\n      #li\n      *ngFor="let menuDirective of menuDirectives; let i = index"\n      [class.disabled]="isMenuItemDisabled(menuDirective)"\n      [class.divider]="menuDirective.divider"\n      [class.active]="\n        menuDirective.isActive && !isMenuItemDisabled(menuDirective)\n      "\n      [attr.role]="menuDirective.divider ? \'separator\' : undefined"\n      role="none"\n    >\n      <hr *ngIf="menuDirective.divider" role="separator" />\n      <button\n        *ngIf="!menuDirective.divider && !menuDirective.passive"\n        type="button"\n        role="menuitem"\n        class="ngx-contextmenu--item-content"\n        [attr.aria-haspopup]="!!menuDirective.subMenu"\n        [class.ngx-contextmenu--parent-menu]="!!menuDirective.subMenu"\n        [class.active]="\n          menuDirective.isActive && !isMenuItemDisabled(menuDirective)\n        "\n        [class.disabled]="isMenuItemDisabled(menuDirective)"\n        [attr.disabled]="isMenuItemDisabled(menuDirective) ? \'disabled\' : null"\n        (click)="onMenuItemSelect(menuDirective, $event)"\n        (mouseenter)="onOpenSubMenu(menuDirective, $event)"\n      >\n        <ng-template\n          [ngTemplateOutlet]="menuDirective.template"\n          [ngTemplateOutletContext]="{ item: value }"\n        ></ng-template>\n      </button>\n\n      <span\n        *ngIf="!menuDirective.divider && menuDirective.passive"\n        class="ngx-contextmenu--item-content ngx-contextmenu--item-content-passive"\n        role="menuitem"\n        (click)="stopEvent($event)"\n        (contextmenu)="stopEvent($event)"\n        [class.disabled]="isMenuItemDisabled(menuDirective)"\n      >\n        <ng-template\n          [ngTemplateOutlet]="menuDirective.template"\n          [ngTemplateOutletContext]="{ item: value }"\n        ></ng-template>\n      </span>\n    </li>\n  </ul>\n</div>\n',changeDetection:core.ChangeDetectionStrategy.OnPush})],ContextMenuContentComponent);var context_menu_item_directive_class,_disabled,portal=__webpack_require__("./node_modules/@angular/cdk/fesm2022/portal.mjs"),classPrivateFieldInitSpec=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldInitSpec.js"),classPrivateFieldGet=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldGet.js"),classPrivateFieldSet=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/classPrivateFieldSet.js");let ContextMenuItemDirective=(_disabled=new WeakMap,(context_menu_item_directive_class=class ContextMenuItemDirective{set disabled(disabled){(0,classPrivateFieldSet.Z)(this,_disabled,disabled)}get disabled(){return this.passive||this.divider||evaluateIfFunction((0,classPrivateFieldGet.Z)(this,_disabled),this.value)}constructor(template){(0,classPrivateFieldInitSpec.Z)(this,_disabled,{writable:!0,value:void 0}),this.template=template,this.divider=!1,this.passive=!1,this.visible=!0,this.execute=new core.EventEmitter,this.isActive=!1,(0,classPrivateFieldSet.Z)(this,_disabled,!1)}setActiveStyles(){this.isActive=!0}setInactiveStyles(){this.isActive=!1}triggerExecute(event,value){evaluateIfFunction((0,classPrivateFieldGet.Z)(this,_disabled),value)||this.execute.emit({event,value})}}).ctorParameters=()=>[{type:core.TemplateRef,decorators:[{type:core.Optional}]}],context_menu_item_directive_class.propDecorators={subMenu:[{type:core.Input}],divider:[{type:core.Input}],disabled:[{type:core.Input}],passive:[{type:core.Input}],visible:[{type:core.Input}],execute:[{type:core.Output}]},context_menu_item_directive_class);ContextMenuItemDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[contextMenuItem]"})],ContextMenuItemDirective);var Subject=__webpack_require__("./node_modules/rxjs/_esm5/internal/Subject.js");let ContextMenuEventService=class ContextMenuEventService{constructor(){this.onShow=new Subject.xQ}show(options){this.onShow.next(options)}};ContextMenuEventService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],ContextMenuEventService);let ContextMenuStackService=class ContextMenuStackService{constructor(){this.stack=[]}push(value){this.stack.push(value)}size(){return this.stack.length}isEmpty(){return 0===this.size()}closeAll(){this.stack.forEach((item=>this.dispose(item))),this.stack=[]}destroySubMenus(contextMenu){if(!contextMenu)return;const index=this.stack.findIndex((({overlayRef})=>overlayRef===contextMenu.overlayRef));this.stack.slice(index+1).forEach((item=>{this.dispose(item)}))}closeLeafMenu(excludeRootMenu){const item=this.disposeLastDetached();if(!item)return!1;const moreThanOneItem=this.size()>1,isNotEmptyAndDoesNotExcludeRootMenu=!excludeRootMenu&&!this.isEmpty();if((moreThanOneItem||isNotEmptyAndDoesNotExcludeRootMenu)&&this.dispose(item),isNotEmptyAndDoesNotExcludeRootMenu)return!0;const newValue=this.disposeLastDetached();return newValue&&(newValue.contextMenuContentComponent.isLeaf=!0),!1}disposeLastDetached(){let item=this.last();if(item){for(;item&&this.size()>1&&item.overlayRef&&this.isDetached(item);)this.dispose(item),this.pop(),item=this.last();return item}}last(){if(!this.isEmpty())return this.stack[this.stack.length-1]}pop(){const value=this.stack.pop();return this.dispose(value)}isDetached(item){return!item.overlayRef.hasAttached()}dispose(item){return item&&(item.overlayRef.detach(),item.overlayRef.dispose()),item}};ContextMenuStackService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],ContextMenuStackService);var context_menu_component_class;let ContextMenuComponent=(context_menu_component_class=class ContextMenuComponent{constructor(overlay,scrollStrategy,contextMenuStack,contextMenuEventService){this.overlay=overlay,this.scrollStrategy=scrollStrategy,this.contextMenuStack=contextMenuStack,this.contextMenuEventService=contextMenuEventService,this.menuClass="",this.disabled=!1,this.open=new core.EventEmitter,this.close=new core.EventEmitter,this.visibleMenuItems=[],this.subscription=new Subscription.w}ngOnInit(){const subscription=this.contextMenuEventService.onShow.subscribe((menuEvent=>{this.onMenuEvent(menuEvent)}));this.subscription.add(subscription)}ngOnDestroy(){this.subscription.unsubscribe()}openContextMenu(context){let positionStrategy;if("position"===context.anchoredTo)positionStrategy=this.overlay.position().flexibleConnectedTo({x:context.x,y:context.y}).withPositions(((dir="ltr")=>"ltr"===dir?[{originX:"start",originY:"bottom",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"start",overlayY:"bottom"},{originX:"end",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"end",overlayY:"top"},{originX:"end",originY:"center",overlayX:"start",overlayY:"center"},{originX:"start",originY:"center",overlayX:"end",overlayY:"center"}]:[{originX:"end",originY:"bottom",overlayX:"end",overlayY:"top"},{originX:"end",originY:"top",overlayX:"end",overlayY:"bottom"},{originX:"start",originY:"top",overlayX:"end",overlayY:"top"},{originX:"end",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"center",overlayX:"end",overlayY:"center"},{originX:"end",originY:"center",overlayX:"start",overlayY:"center"}])(context.dir)),this.closeAllContextMenus();else{const{anchorElement,parentContextMenu}=context;positionStrategy=this.overlay.position().flexibleConnectedTo(new core.ElementRef(anchorElement)).withPositions(((dir="ltr")=>"ltr"===dir?[{originX:"end",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"top",overlayX:"end",overlayY:"top"},{originX:"end",originY:"bottom",overlayX:"start",overlayY:"bottom"},{originX:"start",originY:"bottom",overlayX:"end",overlayY:"bottom"}]:[{originX:"start",originY:"top",overlayX:"end",overlayY:"top"},{originX:"end",originY:"top",overlayX:"start",overlayY:"top"},{originX:"start",originY:"bottom",overlayX:"end",overlayY:"bottom"},{originX:"end",originY:"bottom",overlayX:"start",overlayY:"bottom"}])(parentContextMenu.dir)),this.contextMenuStack.destroySubMenus(parentContextMenu)}const overlayRef=this.overlay.create({positionStrategy,panelClass:"ngx-contextmenu",scrollStrategy:this.scrollStrategy.close()});this.attachContextMenu(overlayRef,context)}onMenuEvent(event){if(this.disabled)return;const{contextMenu,value}=event;contextMenu&&contextMenu!==this||(this.value=value,this.setVisibleMenuItems(),this.openContextMenu({...event,menuItemDirectives:this.visibleMenuItems,menuClass:this.menuClass,dir:this.dir}),this.open.next(event))}attachContextMenu(overlayRef,context){const{value,menuItemDirectives}=context,contextMenuContentRef=overlayRef.attach(new portal.C5(ContextMenuContentComponent)),{instance:contextMenuContentComponent}=contextMenuContentRef;contextMenuContentComponent.value=value,contextMenuContentComponent.menuDirectives=menuItemDirectives,contextMenuContentComponent.overlayRef=overlayRef,contextMenuContentComponent.isLeaf=!0,contextMenuContentComponent.menuClass=this.getMenuClass(context),contextMenuContentComponent.dir=this.getDir(context),this.contextMenuStack.push({overlayRef,contextMenuContentComponent});const subscriptions=new Subscription.w;subscriptions.add(contextMenuContentComponent.execute.subscribe((()=>this.closeAllContextMenus()))),subscriptions.add(contextMenuContentComponent.closeAllMenus.subscribe((()=>this.closeAllContextMenus()))),subscriptions.add(contextMenuContentComponent.closeLeafMenu.subscribe((closeLeafMenuEvent=>this.destroyLeafMenu(!!closeLeafMenuEvent.excludeRootMenu)))),subscriptions.add(contextMenuContentComponent.openSubMenu.subscribe((openSubMenuEvent=>{this.contextMenuStack.destroySubMenus(contextMenuContentComponent),openSubMenuEvent.contextMenu?(contextMenuContentComponent.isLeaf=!1,this.contextMenuEventService.show(openSubMenuEvent)):contextMenuContentComponent.isLeaf=!0}))),subscriptions.add(contextMenuContentComponent.closeSubMenus.subscribe((()=>{this.contextMenuStack.destroySubMenus(contextMenuContentComponent)}))),contextMenuContentRef.onDestroy((()=>{this.close.next(),menuItemDirectives.forEach((menuItem=>menuItem.isActive=!1)),subscriptions.unsubscribe()})),contextMenuContentRef.changeDetectorRef.detectChanges()}getMenuClass(event){return event.menuClass||"element"===event.anchoredTo&&event?.parentContextMenu?.menuClass||""}getDir(event){return event.dir||"element"===event.anchoredTo&&event?.parentContextMenu?.dir||void 0}closeAllContextMenus(){this.contextMenuStack.closeAll()}destroyLeafMenu(excludeRootMenu){this.contextMenuStack.closeLeafMenu(excludeRootMenu)}isMenuItemVisible(menuItem){return evaluateIfFunction(menuItem.visible,this.value)}setVisibleMenuItems(){this.visibleMenuItems=this.menuItems.filter((menuItem=>this.isMenuItemVisible(menuItem)))}},context_menu_component_class.ctorParameters=()=>[{type:overlay.aV},{type:overlay.uw},{type:ContextMenuStackService},{type:ContextMenuEventService}],context_menu_component_class.propDecorators={menuClass:[{type:core.Input}],disabled:[{type:core.Input}],dir:[{type:core.Input}],open:[{type:core.Output}],close:[{type:core.Output}],menuItems:[{type:core.ContentChildren,args:[ContextMenuItemDirective]}]},context_menu_component_class);var context_menu_directive_class;ContextMenuComponent=(0,tslib_es6.gn)([(0,core.Component)({encapsulation:core.ViewEncapsulation.None,selector:"context-menu",template:""})],ContextMenuComponent);let ContextMenuDirective=((context_menu_directive_class=class ContextMenuDirective{constructor(contextMenuEventService,elementRef,contextMenuStackService){this.contextMenuEventService=contextMenuEventService,this.elementRef=elementRef,this.contextMenuStackService=contextMenuStackService,this.tabindex="0",this.ariaHasPopup="true"}open(event){if(!this.canOpen())return;if(event instanceof MouseEvent)return void this.onContextMenu(event);const{x,y,height}=this.elementRef.nativeElement.getBoundingClientRect();this.contextMenuEventService.show({anchoredTo:"position",x,y:y+height,contextMenu:this.contextMenu,value:this.contextMenuValue})}close(){this.contextMenuStackService.closeAll()}onContextMenu(event){this.canOpen()&&(this.contextMenuEventService.show({anchoredTo:"position",contextMenu:this.contextMenu,x:event.clientX,y:event.clientY,value:this.contextMenuValue}),event.preventDefault(),event.stopPropagation())}canOpen(){return this.contextMenu&&!this.contextMenu.disabled}}).ctorParameters=()=>[{type:ContextMenuEventService},{type:core.ElementRef},{type:ContextMenuStackService}],context_menu_directive_class.propDecorators={contextMenuValue:[{type:core.Input}],contextMenu:[{type:core.Input}],tabindex:[{type:core.Input},{type:core.HostBinding,args:["attr.tabindex"]}],ariaHasPopup:[{type:core.HostBinding,args:["attr.aria-haspopup"]}],onContextMenu:[{type:core.HostListener,args:["contextmenu",["$event"]]}]},context_menu_directive_class);ContextMenuDirective=(0,tslib_es6.gn)([(0,core.Directive)({selector:"[contextMenu]",exportAs:"ngxContextMenu"})],ContextMenuDirective);let ContextMenuModule=class ContextMenuModule{};var context_menu_service_class;ContextMenuModule=(0,tslib_es6.gn)([(0,core.NgModule)({declarations:[ContextMenuDirective,ContextMenuComponent,ContextMenuContentComponent,ContextMenuItemDirective],providers:[{provide:overlay.Xj,useClass:overlay.YJ}],exports:[ContextMenuDirective,ContextMenuComponent,ContextMenuItemDirective],imports:[common.CommonModule,overlay.U8]})],ContextMenuModule);let ContextMenuService=((context_menu_service_class=class ContextMenuService{constructor(contextMenuEventService,contextMenuStackService){this.contextMenuEventService=contextMenuEventService,this.contextMenuStackService=contextMenuStackService}show(contextMenu,options={x:0,y:0}){this.contextMenuEventService.show({anchoredTo:"position",contextMenu,value:options.value,x:options.x,y:options.y})}closeAll(){this.contextMenuStackService.closeAll()}hasOpenMenu(){return!this.contextMenuStackService.isEmpty()}}).ctorParameters=()=>[{type:ContextMenuEventService},{type:ContextMenuStackService}],context_menu_service_class);ContextMenuService=(0,tslib_es6.gn)([(0,core.Injectable)({providedIn:"root"})],ContextMenuService);var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs");var ngx_contextmenu_component_class,ngx_contextmenu_componentngResource=__webpack_require__("./src/stories/ngx-contextmenu/ngx-contextmenu.component.scss?ngResource"),ngx_contextmenu_componentngResource_default=__webpack_require__.n(ngx_contextmenu_componentngResource);let NgxContextMenuComponent=((ngx_contextmenu_component_class=class NgxContextMenuComponent{constructor(){this.menuClass="",this.disabled=!1,this.item="a user defined item",this.demoMode="simple",this.programmaticOpen=!1,this.onOpen=new core.EventEmitter,this.onClose=new core.EventEmitter,this.onMenuItemExecuted=new core.EventEmitter}execute(text,value){console.log(value),this.onMenuItemExecuted.next(`${text}: ${value.value}`)}open(value){this.onOpen.next(value)}close(){this.onClose.next("void")}}).propDecorators={menuClass:[{type:core.Input}],disabled:[{type:core.Input}],dir:[{type:core.Input}],item:[{type:core.Input}],demoMode:[{type:core.Input}],programmaticOpen:[{type:core.Input}],onOpen:[{type:core.Output}],onClose:[{type:core.Output}],onMenuItemExecuted:[{type:core.Output}],contextMenuDirective:[{type:core.ViewChild,args:[ContextMenuDirective]}]},ngx_contextmenu_component_class);NgxContextMenuComponent=(0,tslib_es6.gn)([(0,core.Component)({selector:"storybook-ngx-contextmenu",template:'<span\n  *ngIf="!disabled; else disabledTemplate"\n  class="ngx-context-menu-focusable"\n  #ngxContextMenu="ngxContextMenu"\n  [contextMenu]="contextMenu"\n  [contextMenuValue]="item"\n>\n  <ng-container *ngIf="demoMode === \'simple\'">\n    When you right click on this text, a context menu will appear\n  </ng-container>\n  <ng-container *ngIf="demoMode === \'form\'">\n    When you right click on this text, a context menu with form inputs will\n    appear\n  </ng-container>\n  <span *ngIf="dir === \'rtl\'"> in the right to left direction</span>\n</span>\n\n<ng-template #disabledTemplate>\n  <span\n    class="ngx-context-menu-focusable"\n    [contextMenu]="contextMenu"\n    [contextMenuValue]="item"\n  >\n    When you right click on this text, no context menu will appear because it is\n    disabled\n  </span>\n</ng-template>\n\n<context-menu\n  #contextMenu\n  [menuClass]="menuClass"\n  [disabled]="disabled"\n  [dir]="dir"\n  (open)="open($event)"\n  (close)="close()"\n>\n  <ng-template contextMenuItem passive="true"\n    ><span class="menu-item-title">Context menu title</span></ng-template\n  >\n  <ng-template\n    *ngIf="demoMode === \'simple\'"\n    contextMenuItem\n    (execute)="execute(\'Cut\', $event)"\n    >Cut</ng-template\n  >\n  <ng-template\n    *ngIf="demoMode === \'simple\'"\n    contextMenuItem\n    (execute)="execute(\'Copy\', $event)"\n    >Copy</ng-template\n  >\n  <ng-template\n    *ngIf="demoMode === \'simple\'"\n    contextMenuItem\n    (execute)="execute(\'Paste\', $event)"\n    >Paste</ng-template\n  >\n  <ng-template *ngIf="demoMode === \'simple\'" contextMenuItem [disabled]="true"\n    >Disabled menu item</ng-template\n  >\n  <ng-template\n    *ngIf="demoMode === \'simple\'"\n    contextMenuItem\n    divider="true"\n  ></ng-template>\n  <ng-template\n    *ngIf="demoMode === \'simple\'"\n    contextMenuItem\n    [subMenu]="specialPast"\n    >Special pastes...</ng-template\n  >\n\n  <ng-template *ngIf="demoMode === \'form\'" contextMenuItem passive="true"\n    ><label\n      ><input type="checkbox" value="Choice A" /> <span>Choice A</span></label\n    ></ng-template\n  >\n  <ng-template *ngIf="demoMode === \'form\'" contextMenuItem passive="true"\n    ><label\n      ><input type="checkbox" value="Choice B" /> <span>Choice B</span></label\n    ></ng-template\n  >\n  <ng-template *ngIf="demoMode === \'form\'" contextMenuItem passive="true"\n    ><label\n      ><input type="checkbox" value="Choice C" /> <span>Choice C</span></label\n    ></ng-template\n  >\n  <ng-template *ngIf="demoMode === \'form\'" contextMenuItem passive="true"\n    ><label\n      ><input type="checkbox" value="Choice D" /> <span>Choice D</span></label\n    ></ng-template\n  >\n  <ng-template *ngIf="demoMode === \'form\'" contextMenuItem passive="true"\n    ><label\n      ><input type="checkbox" value="Choice E" /> <span>Choice E</span></label\n    ></ng-template\n  >\n  <ng-template *ngIf="demoMode === \'form\'" contextMenuItem passive="true"\n    ><label\n      ><input type="checkbox" value="Choice E" /> <span>Choice E</span></label\n    ></ng-template\n  >\n</context-menu>\n<context-menu #specialPast>\n  <ng-template contextMenuItem (execute)="execute(\'Paste as HTML\', $event)"\n    >Paste as HTML</ng-template\n  >\n  <ng-template contextMenuItem (execute)="execute(\'Paste unformatted\', $event)"\n    >Paste unformatted</ng-template\n  >\n</context-menu>\n<br>\n<br>\n<br>\n<br>\n<button class="button" *ngIf="programmaticOpen" (click)="contextMenuDirective?.open($event)">\n  Click here to show the context menu normally attached to the text above\n</button>\n',styles:[ngx_contextmenu_componentngResource_default()]})],NgxContextMenuComponent);const ContextMenu_stories={title:"Context Menu/Demo",component:NgxContextMenuComponent,parameters:{layout:"centered"},decorators:[(0,dist.moduleMetadata)({imports:[ContextMenuModule]})],play:void 0,argTypes:{dir:{name:"Direction",description:"Defines the orientation of the context menu, left-to-right or right-to-left",options:["left-to-right","right-to-left"],mapping:{"left-to-right":"ltr","right-to-left":"rtl"},control:{type:"radio"}},onMenuItemExecuted:{action:"From the context menu, you chose",table:{disable:!0}},menuClass:{description:"CSS class to apply to the menu",options:["none","custom-theme-blue"],control:{type:"select"}},onOpen:{action:"Context menu was opened",table:{disable:!0}},onClose:{action:"Context menu was closed",table:{disable:!0}},close:{table:{disable:!0}},open:{table:{disable:!0}},execute:{table:{disable:!0}},demoMode:{name:"Mode",description:"Display context menu with form elements",table:{disable:!1}},programmaticOpen:{name:"Programmatically open",description:"Programmatically open the contextmenu from a button",table:{disable:!1}}}},Demo=(args=>({styles:["./assets/stylesheets/index.scss"],props:args})).bind({})},"./src/stories/ngx-contextmenu/ngx-contextmenu.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"label input,\nlabel span {\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.menu-item-title {\n  text-transform: uppercase;\n}\n\n.ngx-context-menu-focusable:focus {\n  border-bottom: var(--ngx-contextmenu-focusable-border-bottom);\n  outline: none;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()}}]);