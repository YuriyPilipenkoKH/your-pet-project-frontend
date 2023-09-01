"use strict";(self.webpackChunkyour_pet_project_frontend=self.webpackChunkyour_pet_project_frontend||[]).push([[906],{1906:function(e,r,t){t.r(r),t.d(r,{default:function(){return v}});var s=t(2791),a=t(1413),n=t(9439),o=t(1735),i=t(3365),l=t(4695),d=t(1134),c=t(6727),u=t(9434),p=t(2015),h=t(5414),w=t(8820),x=t(9655),m=t(184),g=(0,c.Ry)({email:(0,c.Z_)().required().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,"Enter a valid email address"),password:(0,c.Z_)().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/,"Password: 1 lowercase, 1 uppercase, 1 digit, 6-16 characters.")}).required();function f(){var e=(0,u.I0)(),r=(0,s.useState)(!1),t=(0,n.Z)(r,2),c=t[0],f=t[1],j=(0,s.useState)(!1),v=(0,n.Z)(j,2),Z=v[0],b=v[1],A=(0,s.useState)(!1),C=(0,n.Z)(A,2),y=C[0],k=C[1],S=(0,s.useState)(""),_=(0,n.Z)(S,2),z=_[0],I=_[1],B=(0,s.useState)(""),X=(0,n.Z)(B,2),L=X[0],P=X[1],q=(0,h.X)().language,D=(0,s.useState)(w.v),H=(0,n.Z)(D,2),W=H[0],$=H[1];(0,s.useEffect)((function(){$("english"===q?w.o:w.v)}),[q]);var E=(0,d.cI)({defaultValues:{email:"",password:""},resolver:(0,l.X)(g)}),F=E.register,J=E.handleSubmit,M=E.formState.errors;return(0,m.jsx)(o.l0,{children:(0,m.jsxs)("form",{onSubmit:J((function(r){!function(r,t){e(p.r5.logIn({email:r,password:t})).unwrap().then((function(e){x.Am.success("".concat(W.Welcomeback," ").concat(e.user.name))})).catch((function(){x.Am.error(W.Incorrect)}))}(r.email,r.password),I(""),P(""),b(!1),k(!1)})),children:[(0,m.jsx)(o.Dx,{children:W.logBtn}),(0,m.jsxs)(o.U,{children:[(0,m.jsx)(o.jJ,(0,a.Z)((0,a.Z)({},F("email")),{},{"aria-invalid":M.email?"true":"false",placeholder:W.email,type:"email",value:z,style:{border:M.email?"1px solid var(--red)":Z&&!M.email?"1px solid var(--green)":"1px solid var(--blue)"},onChange:function(e){var r=/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/.test(e.target.value);b(r),I(e.target.value),r&&(M.email=void 0)}})),Z&&!M.email&&(0,m.jsx)(o.XH,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,m.jsx)("path",{d:"M20.0001 7L9.0001 18L4 13",stroke:"#00C3AD"})}),M.email&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.jp,{children:M.email.message}),(0,m.jsx)(o.CI,{onClick:function(){b(!1),I("")},type:"button",children:i.Wc})]})]}),(0,m.jsxs)(o.U,{login:!0,children:[(0,m.jsx)(o.jJ,(0,a.Z)((0,a.Z)({},F("password")),{},{"aria-invalid":M.password?"true":"false",placeholder:W.pass,title:"Password must contain at least one lowercase letter, one uppercase letter, and one digit. It should be 6 to 16 characters long.",value:L,type:c?"text":"password",style:{border:M.password?"1px solid var(--red)":y&&!M.password?"1px solid var(--green)":"1px solid var(--blue)"},onChange:function(e){var r=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(e.target.value);k(r),P(e.target.value),r&&(M.password=void 0)}})),y&&!M.password&&(0,m.jsx)(o.XH,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",iconPassowrd:!0,children:(0,m.jsx)("path",{d:"M20.0001 7L9.0001 18L4 13",stroke:"#00C3AD"})}),M.password&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.jp,{children:M.password.message}),(0,m.jsx)(o.CI,{onClick:function(){k(!1),P("")},type:"button",iconPassowrd:!0,children:i.Wc})]}),(0,m.jsx)(o.pn,{type:"button",onClick:function(){return f(!c)},children:i.Cb})]}),(0,m.jsx)(o.GX,{type:"submit",loginButtom:!0,children:W.logBtn}),(0,m.jsxs)(o.HN,{children:[W.notYet," ",(0,m.jsx)(o.nA,{href:"fwefew",to:"/register",children:W.regBtn})]})]})})}var j=t(3389);function v(){return(0,m.jsx)(j.jj,{children:(0,m.jsx)(f,{})})}}}]);
//# sourceMappingURL=906.52e4e877.chunk.js.map