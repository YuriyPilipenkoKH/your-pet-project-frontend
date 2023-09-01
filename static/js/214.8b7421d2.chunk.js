"use strict";(self.webpackChunkyour_pet_project_frontend=self.webpackChunkyour_pet_project_frontend||[]).push([[214],{5214:function(e,t,s){s.r(t),s.d(t,{default:function(){return f}});var a=s(2791),r=s(1413),n=s(9439),o=s(1735),i=s(4695),l=s(3365),d=s(1134),c=s(6727),u=s(9434),h=s(2015),p=s(5414),w=s(8820),x=s(9655),m=s(184),g=(0,c.Ry)({name:(0,c.Z_)().required().min(2,"Name should be at least 2 characters").max(16,"Name should not exceed 16 characters").matches(/^[a-zA-Z]{2,16}$/,"Name should contain only letters and without spaces"),email:(0,c.Z_)().required().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,"Enter a valid email address"),password:(0,c.Z_)().required().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/,"Password: 1 lowercase, 1 uppercase, 1 digit, 6-16 characters.")}).required();function j(){var e=(0,u.I0)(),t=(0,a.useState)(!1),s=(0,n.Z)(t,2),c=s[0],j=s[1],v=(0,a.useState)(!1),f=(0,n.Z)(v,2),Z=f[0],b=f[1],C=(0,a.useState)(!1),y=(0,n.Z)(C,2),S=y[0],k=y[1],A=(0,a.useState)(!1),P=(0,n.Z)(A,2),_=P[0],z=P[1],I=(0,a.useState)(!1),L=(0,n.Z)(I,2),X=L[0],$=L[1],B=(0,a.useState)(!1),D=(0,n.Z)(B,2),H=D[0],N=D[1],V=(0,a.useState)(""),q=(0,n.Z)(V,2),F=q[0],J=q[1],M=(0,a.useState)(""),W=(0,n.Z)(M,2),E=W[0],G=W[1],T=(0,a.useState)(""),R=(0,n.Z)(T,2),K=R[0],O=R[1],Q=(0,a.useState)(""),U=(0,n.Z)(Q,2),Y=U[0],ee=U[1],te=(0,a.useState)(""),se=(0,n.Z)(te,2),ae=se[0],re=se[1],ne=(0,d.cI)({defaultValues:{name:"",email:"",password:"",confirmPassword:""},resolver:(0,i.X)(g)}),oe=ne.register,ie=ne.handleSubmit,le=ne.formState.errors,de=(0,p.X)().language,ce=(0,a.useState)(w.v),ue=(0,n.Z)(ce,2),he=ue[0],pe=ue[1];(0,a.useEffect)((function(){pe("english"===de?w.o:w.v)}),[de]);return(0,m.jsx)(o.l0,{children:(0,m.jsxs)("form",{onSubmit:ie((function(t){t.password===Y?(!function(t,s,a){e(h.r5.register({name:t,email:s,password:a})).unwrap().catch((function(){x.Am.error(he.userexists)}))}(t.name,t.email,t.password),J(""),G(""),O(""),ee(""),k(!1),z(!1),$(!1),N(!1)):re("'Passwords do not match'")})),children:[(0,m.jsx)(o.Dx,{children:he.regTitle}),(0,m.jsxs)(o.Vf,{children:[(0,m.jsx)(o.jJ,(0,r.Z)((0,r.Z)({},oe("name")),{},{"aria-invalid":le.name?"true":"false",placeholder:he.formName,type:"text",value:F,style:{border:le.name?"1px solid var(--red)":S&&!le.name?"1px solid var(--green)":"1px solid var(--blue)"},onChange:function(e){var t=/^[a-zA-Z]{2,16}$/.test(e.target.value);k(t),J(e.target.value),t&&(le.name=void 0)}})),S&&!le.name&&(0,m.jsx)(o.XH,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,m.jsx)("path",{d:"M20.0001 7L9.0001 18L4 13",stroke:"#00C3AD"})}),le.name&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.jp,{children:le.name.message}),(0,m.jsx)(o.CI,{onClick:function(){k(!1),J("")},type:"button",children:l.Wc})]})]}),(0,m.jsxs)(o.Vf,{children:[(0,m.jsx)(o.jJ,(0,r.Z)((0,r.Z)({},oe("email")),{},{"aria-invalid":le.email?"true":"false",placeholder:he.email,type:"email",value:E,style:{border:le.email?"1px solid var(--red)":_&&!le.email?"1px solid var(--green)":"1px solid var(--blue)"},onChange:function(e){var t=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/.test(e.target.value);z(t),G(e.target.value),t&&(le.email=void 0)}})),_&&!le.email&&(0,m.jsx)(o.XH,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",children:(0,m.jsx)("path",{d:"M20.0001 7L9.0001 18L4 13",stroke:"#00C3AD"})}),le.email&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.jp,{children:le.email.message}),(0,m.jsx)(o.CI,{onClick:function(){z(!1),G("")},type:"button",children:l.Wc})]})]}),(0,m.jsxs)(o.Vf,{children:[(0,m.jsx)(o.jJ,(0,r.Z)((0,r.Z)({},oe("password")),{},{"aria-invalid":le.password?"true":"false",placeholder:he.pass,value:K,title:"Password must contain at least one lowercase letter, one uppercase letter, and one digit. It should be 6 to 16 characters long.",type:c?"text":"password",style:{border:le.password?"1px solid var(--red)":X&&!le.password?"1px solid var(--green)":"1px solid var(--blue)"},onChange:function(e){var t=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(e.target.value);$(t),O(e.target.value),t&&(le.password=void 0)}})),X&&!le.password&&(0,m.jsx)(o.XH,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",iconPassowrd:!0,children:(0,m.jsx)("path",{d:"M20.0001 7L9.0001 18L4 13",stroke:"#00C3AD"})}),le.password&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.jp,{children:le.password.message}),(0,m.jsx)(o.CI,{onClick:function(){$(!1),O("")},type:"button",iconPassowrd:!0,children:l.Wc})]}),(0,m.jsx)(o.pn,{type:"button",onClick:function(){return j(!c)},children:l.Cb})]}),(0,m.jsxs)(o.Vf,{registration:!0,children:[(0,m.jsx)(o.jJ,(0,r.Z)((0,r.Z)({},oe("confirmPassword")),{},{"aria-invalid":ae?"true":"false",placeholder:he.confirmPass,type:Z?"text":"password",value:Y,title:"Password must contain at least one lowercase letter, one uppercase letter, and one digit. It should be 6 to 16 characters long.",style:{border:ae?"1px solid var(--red)":H&&!ae?"1px solid var(--green)":"1px solid var(--blue)"},onChange:function(e){var t=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,16}$/.test(e.target.value);N(t),t&&re(""),ee(e.target.value)}})),H&&!ae&&(0,m.jsx)(o.XH,{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",iconPassowrd:!0,children:(0,m.jsx)("path",{d:"M20.0001 7L9.0001 18L4 13",stroke:"#00C3AD"})}),ae&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(o.jp,{children:ae}),(0,m.jsx)(o.CI,{onClick:function(){N(!1),ee("")},type:"button",iconPassowrd:!0,children:l.Wc})]}),(0,m.jsx)(o.pn,{type:"button",onClick:function(){return b(!Z)},children:l.Cb})]}),(0,m.jsxs)(o.GX,{type:"submit",children:[" ",he.regTitle," "]}),(0,m.jsxs)(o.HN,{children:[he.alreadyGot," ",(0,m.jsx)(o.nA,{href:"fwefew",to:"/login",children:he.logBtn})]})]})})}var v=s(3389);function f(){return(0,m.jsx)(v.jj,{children:(0,m.jsx)(j,{})})}}}]);
//# sourceMappingURL=214.8b7421d2.chunk.js.map