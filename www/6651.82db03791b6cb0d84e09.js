(self.webpackChunknmp=self.webpackChunknmp||[]).push([[6651],{6651:(o,n,t)=>{"use strict";t.r(n),t.d(n,{AuthPageModule:()=>f});var r=t(8583),c=t(665),e=t(3083),i=t(2316),a=t(639);let l=(()=>{class o{constructor(o){this.modalController=o}closeModal(){this.modalController.dismiss()}openModal(o,n=""){return t=this,void 0,c=function*(){const n=yield this.modalController.create({component:o,cssClass:"Home-css"});return yield n.present()},new((r=void 0)||(r=Promise))(function(o,n){function e(o){try{a(c.next(o))}catch(t){n(t)}}function i(o){try{a(c.throw(o))}catch(t){n(t)}}function a(n){var t;n.done?o(n.value):(t=n.value,t instanceof r?t:new r(function(o){o(t)})).then(e,i)}a((c=c.apply(t,[])).next())});var t,r,c}}return o.\u0275fac=function(n){return new(n||o)(a.LFG(e.IN))},o.\u0275prov=a.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})(),s=(()=>{class o{constructor(o,n){this.modalService=o,this.router=n,this.email="",this.password="",this.error_message=""}ngOnInit(){}login(){this.modalService.closeModal()}next(){if(!this.email||!this.password)return this.error_message="Invalid Credentials";this.router.navigate(["/tabs/tab1"]),this.modalService.closeModal()}handleInputValidation(o){o&&(this.error_message="")}}return o.\u0275fac=function(n){return new(n||o)(a.Y36(l),a.Y36(i.F0))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-register-page"]],decls:24,vars:3,consts:[[1,"contents"],[1,"content__top"],[1,"inputs"],["name","mail","color","medium"],["placeholder","email","type","email","name","email","color","medium",3,"ngModel","ngModelChange"],["name","lock-closed","color","medium"],["placeholder","Password","type","password","name","password","color","medium",3,"ngModel","ngModelChange"],["color","danger",1,"error__message"],[1,"error__message__message"],[1,"content__bottom"],["color","danger",1,"btn-primary",3,"click"],[1,"content__bottom__sign_up",3,"click"]],template:function(o,n){1&o&&(a.TgZ(0,"ion-content"),a.TgZ(1,"div",0),a.TgZ(2,"div",1),a.TgZ(3,"ion-label"),a.TgZ(4,"h1"),a._uU(5,"Register"),a.qZA(),a.TgZ(6,"span"),a._uU(7,"Create an account"),a.qZA(),a.qZA(),a.TgZ(8,"ion-list",2),a._UZ(9,"ion-icon",3),a.TgZ(10,"ion-input",4),a.NdJ("ngModelChange",function(o){return n.email=o})("ngModelChange",function(o){return n.handleInputValidation(o)}),a.qZA(),a.qZA(),a.TgZ(11,"ion-list",2),a._UZ(12,"ion-icon",5),a.TgZ(13,"ion-input",6),a.NdJ("ngModelChange",function(o){return n.password=o})("ngModelChange",function(o){return n.handleInputValidation(o)}),a.qZA(),a.qZA(),a.TgZ(14,"ion-label",7),a.TgZ(15,"span",8),a._uU(16),a.qZA(),a.qZA(),a.qZA(),a.TgZ(17,"div",9),a.TgZ(18,"ion-button",10),a.NdJ("click",function(){return n.next()}),a._uU(19," Next"),a.qZA(),a.TgZ(20,"p"),a._uU(21," Already have an account? "),a.TgZ(22,"span",11),a.NdJ("click",function(){return n.login()}),a._uU(23," Log In "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&o&&(a.xp6(10),a.Q6J("ngModel",n.email),a.xp6(3),a.Q6J("ngModel",n.password),a.xp6(3),a.hij(" ",n.error_message,""))},directives:[e.W2,e.Q$,e.q_,e.gu,e.pK,e.j9,c.JJ,c.On,e.YG],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}[_ngcontent-%COMP%]:root{--ion-font-family:"Circular Std";--ion-color-primary:#ff3859;--ion-color-primary-rgb:56,128,255;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#3171e0;--ion-color-primary-tint:#4c8dff;--ion-color-secondary:#3dc2ff;--ion-color-secondary-rgb:61,194,255;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#36abe0;--ion-color-secondary-tint:#50c8ff;--ion-color-tertiary:#5260ff;--ion-color-tertiary-rgb:82,96,255;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#4854e0;--ion-color-tertiary-tint:#6370ff;--ion-color-success:#2dd36f;--ion-color-success-rgb:45,211,111;--ion-color-success-contrast:#fff;--ion-color-success-contrast-rgb:255,255,255;--ion-color-success-shade:#28ba62;--ion-color-success-tint:#42d77d;--ion-color-warning:#ffc409;--ion-color-warning-rgb:255,196,9;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0,0,0;--ion-color-warning-shade:#e0ac08;--ion-color-warning-tint:#ffca22;--ion-color-danger:#eb445a;--ion-color-danger-rgb:235,68,90;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#cf3c4f;--ion-color-danger-tint:#ed576b;--ion-color-dark:#222428;--ion-color-dark-rgb:34,36,40;--ion-color-dark-contrast:#fff;--ion-color-dark-contrast-rgb:255,255,255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e;--ion-color-medium:#f5f3e0;--ion-color-medium-rgb:146,148,156;--ion-color-medium-contrast:#fff;--ion-color-medium-contrast-rgb:255,255,255;--ion-color-medium-shade:#808289;--ion-color-medium-tint:#9d9fa6;--ion-color-light:#f4f5f8;--ion-color-light-rgb:244,245,248;--ion-color-light-contrast:#f4f5f8;--ion-color-light-contrast-rgb:0,0,0;--ion-color-light-shade:#d7d8da;--ion-color-light-tint:#f5f6f9;--ion-color-alt:#222428;--ion-color-alt-rgb:34,36,40;--ion-color-alt-contrast:#fff;--ion-color-alt-contrast-rgb:255,255,255;--ion-color-alt-shade:#1e2023;--ion-color-alt-tint:#383a3e}@media (prefers-color-scheme: dark){body[_ngcontent-%COMP%]{--ion-color-primary:#ff3859;--ion-color-primary-rgb:66,140,255;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#3a7be0;--ion-color-primary-tint:#5598ff;--ion-color-secondary:#50c8ff;--ion-color-secondary-rgb:80,200,255;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#46b0e0;--ion-color-secondary-tint:#62ceff;--ion-color-tertiary:#6a64ff;--ion-color-tertiary-rgb:106,100,255;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#5d58e0;--ion-color-tertiary-tint:#7974ff;--ion-color-success:#2fdf75;--ion-color-success-rgb:47,223,117;--ion-color-success-contrast:#000;--ion-color-success-contrast-rgb:0,0,0;--ion-color-success-shade:#29c467;--ion-color-success-tint:#44e283;--ion-color-warning:#ffd534;--ion-color-warning-rgb:255,213,52;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0,0,0;--ion-color-warning-shade:#e0bb2e;--ion-color-warning-tint:#ffd948;--ion-color-danger:#ff4961;--ion-color-danger-rgb:255,73,97;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#e04055;--ion-color-danger-tint:#ff5b71;--ion-color-dark:#100327;--ion-color-dark-rgb:244,245,248;--ion-color-dark-contrast:#000;--ion-color-dark-contrast-rgb:0,0,0;--ion-color-dark-shade:#d7d8da;--ion-color-dark-tint:#f5f6f9;--ion-color-medium:#100327;--ion-color-medium-rgb:152,154,162;--ion-color-medium-contrast:#000;--ion-color-medium-contrast-rgb:0,0,0;--ion-color-medium-shade:#86888f;--ion-color-medium-tint:#a2a4ab;--ion-color-light:#f4f5f8;--ion-color-light-rgb:244,245,248;--ion-color-light-contrast:#f4f5f8;--ion-color-light-contrast-rgb:0,0,0;--ion-color-light-shade:#d7d8da;--ion-color-light-tint:#f5f6f9;--ion-color-alt:#222428;--ion-color-alt-rgb:34,36,40;--ion-color-alt-contrast:#fff;--ion-color-alt-contrast-rgb:255,255,255;--ion-color-alt-shade:#1e2023;--ion-color-alt-tint:#383a3e}[_ngcontent-%COMP%]:is(.md, .ios)[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]{--ion-background-color:#100327;--ion-background-color-rgb:0,0,0,0;--ion-text-color:#f5f3e0;--ion-color-step-50:#0d0d0d;--ion-color-step-100:#1a1a1a;--ion-color-step-150:#262626;--ion-color-step-200:#333;--ion-color-step-250:#404040;--ion-color-step-300:#4d4d4d;--ion-color-step-350:#595959;--ion-color-step-400:#666;--ion-color-step-450:#737373;--ion-color-step-500:grey;--ion-color-step-550:#8c8c8c;--ion-color-step-600:#999;--ion-color-step-650:#a6a6a6;--ion-color-step-700:#b3b3b3;--ion-color-step-750:#bfbfbf;--ion-color-step-800:#ccc;--ion-color-step-850:#d9d9d9;--ion-color-step-900:#e6e6e6;--ion-color-step-950:#f2f2f2;--ion-item-background:#f5f3e0;--ion-card-background:#f5f3e0}.ios[_ngcontent-%COMP%]   ion-modal[_ngcontent-%COMP%]{--ion-background-color:var(--ion-color-medium);--ion-toolbar-background:var(--ion-color-step-150);--ion-toolbar-border-color:var(--ion-color-step-250)}}@media (prefers-color-scheme: light){[_ngcontent-%COMP%]:is(.md, .ios)[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]{--ion-background-color:#f5f3e0;--ion-background-color-rgb:0,0,0,0;--ion-text-color:#100327;--ion-item-background:#fff;--ion-card-background:#100327}[_ngcontent-%COMP%]:is(.md, .ios)[_ngcontent-%COMP%]   ion-modal[_ngcontent-%COMP%]{--ion-background-color:var(--ion-color-medium);--ion-toolbar-background:var(--ion-color-step-150);--ion-toolbar-border-color:var(--ion-color-step-250)}}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]{height:100%;padding:4rem 20px}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__top[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;justify-content:space-between;width:100%}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__top[_ngcontent-%COMP%]{align-items:flex-start}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__top[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:2px;font-weight:600}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__top[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__top[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex-direction:row;padding:10px 20px;justify-content:space-between;width:100%;height:50px;margin:20px 0 0}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__top[_ngcontent-%COMP%]   .error__message[_ngcontent-%COMP%]{margin-top:10px}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__bottom[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__bottom[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:80%;--border-radius:50px;margin:10px 0}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__bottom__sign_up[_ngcontent-%COMP%]{font-weight:600}']}),o})();const g=[{path:"",component:(()=>{class o{constructor(o,n,t){this.modalController=o,this.modalService=n,this.router=t,this.email="",this.password="",this.error_message="",localStorage.getItem("isLoggedIn")&&this.login()}ngOnInit(){}login(){localStorage.getItem("isLoggedIn")&&localStorage.setItem("isLoggedIn","TRUE"),this.router.navigate(["/tabs/tab1"])}next(){if(!this.email||!this.password)return this.error_message="Invalid Credentials";this.router.navigate(["/tabs/tab1"])}handleInputValidation(o){o&&(this.error_message="")}register(){this.modalService.openModal(s)}}return o.\u0275fac=function(n){return new(n||o)(a.Y36(e.IN),a.Y36(l),a.Y36(i.F0))},o.\u0275cmp=a.Xpm({type:o,selectors:[["app-auth"]],decls:24,vars:3,consts:[[1,"contents"],[1,"content__top"],[1,"inputs"],["name","mail","color","dark"],["placeholder","email","type","email","name","email","color","dark",3,"ngModel","ngModelChange"],["name","lock-closed","color","dark"],["placeholder","Password","type","password","name","password","color","dark",3,"ngModel","ngModelChange"],["color","danger",1,"error__message"],[1,"error__message__message"],[1,"content__bottom"],["color","danger",1,"btn-primary",3,"click"],[1,"content__bottom__sign_up",3,"click"]],template:function(o,n){1&o&&(a.TgZ(0,"ion-content"),a.TgZ(1,"div",0),a.TgZ(2,"div",1),a.TgZ(3,"ion-label"),a.TgZ(4,"h1"),a._uU(5,"Login Information"),a.qZA(),a.TgZ(6,"span"),a._uU(7,"Sign in to your account"),a.qZA(),a.qZA(),a.TgZ(8,"ion-list",2),a._UZ(9,"ion-icon",3),a.TgZ(10,"ion-input",4),a.NdJ("ngModelChange",function(o){return n.email=o})("ngModelChange",function(o){return n.handleInputValidation(o)}),a.qZA(),a.qZA(),a.TgZ(11,"ion-list",2),a._UZ(12,"ion-icon",5),a.TgZ(13,"ion-input",6),a.NdJ("ngModelChange",function(o){return n.password=o})("ngModelChange",function(o){return n.handleInputValidation(o)}),a.qZA(),a.qZA(),a.TgZ(14,"ion-label",7),a.TgZ(15,"span",8),a._uU(16),a.qZA(),a.qZA(),a.qZA(),a.TgZ(17,"div",9),a.TgZ(18,"ion-button",10),a.NdJ("click",function(){return n.next()}),a._uU(19," Log In"),a.qZA(),a.TgZ(20,"p"),a._uU(21," Dont have an account? "),a.TgZ(22,"span",11),a.NdJ("click",function(){return n.register()}),a._uU(23," Sign Up "),a.qZA(),a.qZA(),a.qZA(),a.qZA(),a.qZA()),2&o&&(a.xp6(10),a.Q6J("ngModel",n.email),a.xp6(3),a.Q6J("ngModel",n.password),a.xp6(3),a.hij(" ",n.error_message,""))},directives:[e.W2,e.Q$,e.q_,e.gu,e.pK,e.j9,c.JJ,c.On,e.YG],styles:['*[_ngcontent-%COMP%]{margin:0;padding:0;box-sizing:border-box}[_ngcontent-%COMP%]:root{--ion-font-family:"Circular Std";--ion-color-primary:#ff3859;--ion-color-primary-rgb:56,128,255;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#3171e0;--ion-color-primary-tint:#4c8dff;--ion-color-secondary:#3dc2ff;--ion-color-secondary-rgb:61,194,255;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#36abe0;--ion-color-secondary-tint:#50c8ff;--ion-color-tertiary:#5260ff;--ion-color-tertiary-rgb:82,96,255;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#4854e0;--ion-color-tertiary-tint:#6370ff;--ion-color-success:#2dd36f;--ion-color-success-rgb:45,211,111;--ion-color-success-contrast:#fff;--ion-color-success-contrast-rgb:255,255,255;--ion-color-success-shade:#28ba62;--ion-color-success-tint:#42d77d;--ion-color-warning:#ffc409;--ion-color-warning-rgb:255,196,9;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0,0,0;--ion-color-warning-shade:#e0ac08;--ion-color-warning-tint:#ffca22;--ion-color-danger:#eb445a;--ion-color-danger-rgb:235,68,90;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#cf3c4f;--ion-color-danger-tint:#ed576b;--ion-color-dark:#222428;--ion-color-dark-rgb:34,36,40;--ion-color-dark-contrast:#fff;--ion-color-dark-contrast-rgb:255,255,255;--ion-color-dark-shade:#1e2023;--ion-color-dark-tint:#383a3e;--ion-color-medium:#f5f3e0;--ion-color-medium-rgb:146,148,156;--ion-color-medium-contrast:#fff;--ion-color-medium-contrast-rgb:255,255,255;--ion-color-medium-shade:#808289;--ion-color-medium-tint:#9d9fa6;--ion-color-light:#f4f5f8;--ion-color-light-rgb:244,245,248;--ion-color-light-contrast:#f4f5f8;--ion-color-light-contrast-rgb:0,0,0;--ion-color-light-shade:#d7d8da;--ion-color-light-tint:#f5f6f9;--ion-color-alt:#222428;--ion-color-alt-rgb:34,36,40;--ion-color-alt-contrast:#fff;--ion-color-alt-contrast-rgb:255,255,255;--ion-color-alt-shade:#1e2023;--ion-color-alt-tint:#383a3e}@media (prefers-color-scheme: dark){body[_ngcontent-%COMP%]{--ion-color-primary:#ff3859;--ion-color-primary-rgb:66,140,255;--ion-color-primary-contrast:#fff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#3a7be0;--ion-color-primary-tint:#5598ff;--ion-color-secondary:#50c8ff;--ion-color-secondary-rgb:80,200,255;--ion-color-secondary-contrast:#fff;--ion-color-secondary-contrast-rgb:255,255,255;--ion-color-secondary-shade:#46b0e0;--ion-color-secondary-tint:#62ceff;--ion-color-tertiary:#6a64ff;--ion-color-tertiary-rgb:106,100,255;--ion-color-tertiary-contrast:#fff;--ion-color-tertiary-contrast-rgb:255,255,255;--ion-color-tertiary-shade:#5d58e0;--ion-color-tertiary-tint:#7974ff;--ion-color-success:#2fdf75;--ion-color-success-rgb:47,223,117;--ion-color-success-contrast:#000;--ion-color-success-contrast-rgb:0,0,0;--ion-color-success-shade:#29c467;--ion-color-success-tint:#44e283;--ion-color-warning:#ffd534;--ion-color-warning-rgb:255,213,52;--ion-color-warning-contrast:#000;--ion-color-warning-contrast-rgb:0,0,0;--ion-color-warning-shade:#e0bb2e;--ion-color-warning-tint:#ffd948;--ion-color-danger:#ff4961;--ion-color-danger-rgb:255,73,97;--ion-color-danger-contrast:#fff;--ion-color-danger-contrast-rgb:255,255,255;--ion-color-danger-shade:#e04055;--ion-color-danger-tint:#ff5b71;--ion-color-dark:#100327;--ion-color-dark-rgb:244,245,248;--ion-color-dark-contrast:#000;--ion-color-dark-contrast-rgb:0,0,0;--ion-color-dark-shade:#d7d8da;--ion-color-dark-tint:#f5f6f9;--ion-color-medium:#100327;--ion-color-medium-rgb:152,154,162;--ion-color-medium-contrast:#000;--ion-color-medium-contrast-rgb:0,0,0;--ion-color-medium-shade:#86888f;--ion-color-medium-tint:#a2a4ab;--ion-color-light:#f4f5f8;--ion-color-light-rgb:244,245,248;--ion-color-light-contrast:#f4f5f8;--ion-color-light-contrast-rgb:0,0,0;--ion-color-light-shade:#d7d8da;--ion-color-light-tint:#f5f6f9;--ion-color-alt:#222428;--ion-color-alt-rgb:34,36,40;--ion-color-alt-contrast:#fff;--ion-color-alt-contrast-rgb:255,255,255;--ion-color-alt-shade:#1e2023;--ion-color-alt-tint:#383a3e}[_ngcontent-%COMP%]:is(.md, .ios)[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]{--ion-background-color:#100327;--ion-background-color-rgb:0,0,0,0;--ion-text-color:#f5f3e0;--ion-color-step-50:#0d0d0d;--ion-color-step-100:#1a1a1a;--ion-color-step-150:#262626;--ion-color-step-200:#333;--ion-color-step-250:#404040;--ion-color-step-300:#4d4d4d;--ion-color-step-350:#595959;--ion-color-step-400:#666;--ion-color-step-450:#737373;--ion-color-step-500:grey;--ion-color-step-550:#8c8c8c;--ion-color-step-600:#999;--ion-color-step-650:#a6a6a6;--ion-color-step-700:#b3b3b3;--ion-color-step-750:#bfbfbf;--ion-color-step-800:#ccc;--ion-color-step-850:#d9d9d9;--ion-color-step-900:#e6e6e6;--ion-color-step-950:#f2f2f2;--ion-item-background:#f5f3e0;--ion-card-background:#f5f3e0}.ios[_ngcontent-%COMP%]   ion-modal[_ngcontent-%COMP%]{--ion-background-color:var(--ion-color-medium);--ion-toolbar-background:var(--ion-color-step-150);--ion-toolbar-border-color:var(--ion-color-step-250)}}@media (prefers-color-scheme: light){[_ngcontent-%COMP%]:is(.md, .ios)[_ngcontent-%COMP%]   body[_ngcontent-%COMP%]{--ion-background-color:#f5f3e0;--ion-background-color-rgb:0,0,0,0;--ion-text-color:#100327;--ion-item-background:#fff;--ion-card-background:#100327}[_ngcontent-%COMP%]:is(.md, .ios)[_ngcontent-%COMP%]   ion-modal[_ngcontent-%COMP%]{--ion-background-color:var(--ion-color-medium);--ion-toolbar-background:var(--ion-color-step-150);--ion-toolbar-border-color:var(--ion-color-step-250)}}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]{height:100%;padding:4rem 20px}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%], ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__top[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;justify-content:space-between;width:100%}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__top[_ngcontent-%COMP%]{align-items:flex-start}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__top[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:2px;font-weight:600}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__top[_ngcontent-%COMP%]   ion-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:15px}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__top[_ngcontent-%COMP%]   ion-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center;flex-direction:row;padding:10px 20px;justify-content:space-between;width:100%;height:50px;margin:20px 0 0}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__top[_ngcontent-%COMP%]   .error__message[_ngcontent-%COMP%]{margin-top:10px}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__bottom[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;justify-content:center}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__bottom[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{width:80%;--border-radius:50px;margin:10px 0}ion-content[_ngcontent-%COMP%]   .contents[_ngcontent-%COMP%]   .content__bottom__sign_up[_ngcontent-%COMP%]{font-weight:600}']}),o})()}];let d=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[i.Bz.forChild(g)],i.Bz]}),o})(),f=(()=>{class o{}return o.\u0275fac=function(n){return new(n||o)},o.\u0275mod=a.oAB({type:o}),o.\u0275inj=a.cJS({imports:[[r.ez,c.u5,e.Pc,d]]}),o})()}}]);