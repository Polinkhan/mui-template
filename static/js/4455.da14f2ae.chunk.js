"use strict";(self.webpackChunk_minimal_kit_cra_ts=self.webpackChunk_minimal_kit_cra_ts||[]).push([[4455],{76348:function(e,t,a){var o=a(4942),r=a(63366),n=a(87462),i=a(72791),c=(a(57441),a(63733)),l=a(94419),s=a(66934),d=a(31402),v=a(72800),u=a(60220),m=a(5951),p=a(80184),Z=["children","className","component","componentsProps","max","slotProps","spacing","total","variant"],f={small:-16,medium:null},h=(0,s.ZP)("div",{name:"MuiAvatarGroup",slot:"Root",overridesResolver:function(e,t){return(0,n.Z)((0,o.Z)({},"& .".concat(m.Z.avatar),t.avatar),t.root)}})((function(e){var t,a=e.theme;return t={},(0,o.Z)(t,"& .".concat(v.Z.root),{border:"2px solid ".concat((a.vars||a).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}),(0,o.Z)(t,"display","flex"),(0,o.Z)(t,"flexDirection","row-reverse"),t})),x=(0,s.ZP)(u.Z,{name:"MuiAvatarGroup",slot:"Avatar",overridesResolver:function(e,t){return t.avatar}})((function(e){var t=e.theme;return{border:"2px solid ".concat((t.vars||t).palette.background.default),boxSizing:"content-box",marginLeft:-8,"&:last-child":{marginLeft:0}}})),g=i.forwardRef((function(e,t){var a,o=(0,d.Z)({props:e,name:"MuiAvatarGroup"}),s=o.children,v=o.className,u=o.component,g=void 0===u?"div":u,k=o.componentsProps,b=void 0===k?{}:k,z=o.max,w=void 0===z?5:z,y=o.slotProps,C=void 0===y?{}:y,M=o.spacing,N=void 0===M?"medium":M,P=o.total,S=o.variant,R=void 0===S?"circular":S,j=(0,r.Z)(o,Z),L=w<2?2:w,_=(0,n.Z)({},o,{max:w,spacing:N,component:g,variant:R}),A=function(e){var t=e.classes;return(0,l.Z)({root:["root"],avatar:["avatar"]},m.m,t)}(_),I=i.Children.toArray(s).filter((function(e){return i.isValidElement(e)})),H=P||I.length;H===L&&(L+=1),L=Math.min(H+1,L);var V=Math.min(I.length,L-1),B=Math.max(H-L,H-V,0),E=N&&void 0!==f[N]?f[N]:-N,O=null!=(a=C.additionalAvatar)?a:b.additionalAvatar;return(0,p.jsxs)(h,(0,n.Z)({as:g,ownerState:_,className:(0,c.Z)(A.root,v),ref:t},j,{children:[B?(0,p.jsxs)(x,(0,n.Z)({ownerState:_,variant:R},O,{className:(0,c.Z)(A.avatar,null==O?void 0:O.className),style:(0,n.Z)({marginLeft:E},null==O?void 0:O.style),children:["+",B]})):null,I.slice(0,V).reverse().map((function(e,t){return i.cloneElement(e,{className:(0,c.Z)(e.props.className,A.avatar),style:(0,n.Z)({marginLeft:t===V-1?void 0:E},e.props.style),variant:e.props.variant||R})}))]}))}));t.Z=g},13034:function(e,t,a){a.d(t,{Z:function(){return C}});var o=a(4942),r=a(63366),n=a(87462),i=a(72791),c=a(63733),l=a(94419),s=a(12065),d=a(97278),v=a(74223),u=a(80184),m=(0,v.Z)((0,u.jsx)("path",{d:"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"}),"CheckBoxOutlineBlank"),p=(0,v.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"}),"CheckBox"),Z=(0,v.Z)((0,u.jsx)("path",{d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"}),"IndeterminateCheckBox"),f=a(14036),h=a(31402),x=a(66934),g=a(64178),k=["checkedIcon","color","icon","indeterminate","indeterminateIcon","inputProps","size","className"],b=(0,x.ZP)(d.Z,{shouldForwardProp:function(e){return(0,x.FO)(e)||"classes"===e},name:"MuiCheckbox",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,a.indeterminate&&t.indeterminate,"default"!==a.color&&t["color".concat((0,f.Z)(a.color))]]}})((function(e){var t,a=e.theme,r=e.ownerState;return(0,n.Z)({color:(a.vars||a).palette.text.secondary},!r.disableRipple&&{"&:hover":{backgroundColor:a.vars?"rgba(".concat("default"===r.color?a.vars.palette.action.activeChannel:a.vars.palette.primary.mainChannel," / ").concat(a.vars.palette.action.hoverOpacity,")"):(0,s.Fq)("default"===r.color?a.palette.action.active:a.palette[r.color].main,a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"default"!==r.color&&(t={},(0,o.Z)(t,"&.".concat(g.Z.checked,", &.").concat(g.Z.indeterminate),{color:(a.vars||a).palette[r.color].main}),(0,o.Z)(t,"&.".concat(g.Z.disabled),{color:(a.vars||a).palette.action.disabled}),t))})),z=(0,u.jsx)(p,{}),w=(0,u.jsx)(m,{}),y=(0,u.jsx)(Z,{}),C=i.forwardRef((function(e,t){var a,o,s=(0,h.Z)({props:e,name:"MuiCheckbox"}),d=s.checkedIcon,v=void 0===d?z:d,m=s.color,p=void 0===m?"primary":m,Z=s.icon,x=void 0===Z?w:Z,C=s.indeterminate,M=void 0!==C&&C,N=s.indeterminateIcon,P=void 0===N?y:N,S=s.inputProps,R=s.size,j=void 0===R?"medium":R,L=s.className,_=(0,r.Z)(s,k),A=M?P:x,I=M?P:v,H=(0,n.Z)({},s,{color:p,indeterminate:M,size:j}),V=function(e){var t=e.classes,a=e.indeterminate,o=e.color,r=e.size,i={root:["root",a&&"indeterminate","color".concat((0,f.Z)(o)),"size".concat((0,f.Z)(r))]},c=(0,l.Z)(i,g.y,t);return(0,n.Z)({},t,c)}(H);return(0,u.jsx)(b,(0,n.Z)({type:"checkbox",inputProps:(0,n.Z)({"data-indeterminate":M},S),icon:i.cloneElement(A,{fontSize:null!=(a=A.props.fontSize)?a:j}),checkedIcon:i.cloneElement(I,{fontSize:null!=(o=I.props.fontSize)?o:j}),ownerState:H,ref:t,className:(0,c.Z)(V.root,L)},_,{classes:V}))}))},65661:function(e,t,a){var o=a(87462),r=a(63366),n=a(72791),i=a(63733),c=a(94419),l=a(4567),s=a(66934),d=a(31402),v=a(17673),u=a(85090),m=a(80184),p=["className","id"],Z=(0,s.ZP)(l.Z,{name:"MuiDialogTitle",slot:"Root",overridesResolver:function(e,t){return t.root}})({padding:"16px 24px",flex:"0 0 auto"}),f=n.forwardRef((function(e,t){var a=(0,d.Z)({props:e,name:"MuiDialogTitle"}),l=a.className,s=a.id,f=(0,r.Z)(a,p),h=a,x=function(e){var t=e.classes;return(0,c.Z)({root:["root"]},v.a,t)}(h),g=n.useContext(u.Z).titleId,k=void 0===g?s:g;return(0,m.jsx)(Z,(0,o.Z)({component:"h2",className:(0,i.Z)(x.root,l),ownerState:h,ref:t,variant:"h6",id:null!=s?s:k},f))}));t.Z=f}}]);
//# sourceMappingURL=4455.da14f2ae.chunk.js.map