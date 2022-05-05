self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
ag7(d,e,f,g,h){return new C.Fc(f,e,d,g,h,null)},
Fc:function Fc(d,e,f,g,h,i){var _=this
_.c=d
_.x=e
_.Q=f
_.db=g
_.fx=h
_.a=i},
dv:function dv(d,e,f){this.a=d
this.b=e
this.c=f},
ki(d){var x=d==null?D.vl:new C.dv(d,D.dp,A.af)
return new C.ys(x,B.a6(0,null,!1,y.j))},
ys:function ys(d,e){var _=this
_.a=d
_.Z$=0
_.X$=e
_.ae$=_.am$=0
_.aj$=!1},
aue(d,e){var x=new B.da(d,e,A.am)
return new B.cm(x,x,x,x)},
afn(d){return new B.ah(0,d.a,0,d.b)},
ah4(d,e,f,g){var x,w,v=new Float64Array(16)
v[15]=1
x=Math.cos(e)
w=Math.sin(e)
v[0]=x
v[1]=w
v[2]=0
v[4]=-w
v[5]=x
v[6]=0
v[8]=0
v[9]=0
v[10]=1
v[3]=0
v[7]=0
v[11]=0
return new B.re(new B.aR(v),d,!0,g,f,null)},
akD(d,e,f){return new B.mN(d,f,e,null)}},B,D,A
a.setFunctionNamesIfNecessary([C])
C=a.updateHolder(c[16],C)
B=c[0]
D=c[24]
A=c[2]
C.Fc.prototype={
I(d,e){var x=this,w=null,v=B.ap(e),u=x.c,t=new B.fb(v.a.Kr(D.wt),new B.fp(D.c6,B.du(new B.id(A.B,w,w,B.pm(x.x,new B.cp(x.Q,w,u)),w),u,u),w),w),s=x.fx
if(s!=null)t=B.axZ(t,s)
u=Math.max(35,(u+Math.min(D.c6.giR(),D.c6.gct(D.c6)+D.c6.gcG(D.c6)))*0.7)
return B.bQ(!0,w,B.avN(!1,w,!0,t,!1,w,!0,!1,v.cy,w,v.dx,A.x1,v.db,w,A.v7,w,w,w,w,w,x.db,w,w,w,u,v.dy,w),!1,w,!0,!1,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)}}
C.dv.prototype={
tz(d,e,f){var x=f==null?this.a:f,w=e==null?this.b:e
return new C.dv(x,w,d==null?this.c:d)},
JM(d){return this.tz(d,null,null)},
ty(d){return this.tz(null,d,null)},
a5T(d,e){return this.tz(d,e,null)},
qc(){var x=this.b,w=this.c
return B.aJ(["text",this.a,"selectionBase",x.c,"selectionExtent",x.d,"selectionAffinity","TextAffinity."+x.e.b,"selectionIsDirectional",x.f,"composingBase",w.a,"composingExtent",w.b],y.g,y.b)},
i(d){return"TextEditingValue(text: \u2524"+this.a+"\u251c, selection: "+this.b.i(0)+", composing: "+this.c.i(0)+")"},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof C.dv&&e.a===x.a&&e.b.k(0,x.b)&&e.c.k(0,x.c)},
gv(d){var x=this.b,w=this.c
return B.a_(A.b.gv(this.a),x.gv(x),B.a_(A.e.gv(w.a),A.e.gv(w.b),A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a),A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
C.ys.prototype={
Jo(d,e,f){var x,w,v=null,u=this.a,t=u.c
if(t.gaX()){x=t.b
u=x>=t.a&&x<=u.a.length}else u=!1
if(!u||!f)return B.hY(v,e,this.a.a)
w=e.bD(D.Ns)
u=this.a
t=u.c
u=u.a
x=t.a
t=t.b
return B.hY(B.a([B.hY(v,v,A.b.K(u,0,x)),B.hY(v,w,A.b.K(u,x,t)),B.hY(v,v,A.b.bJ(u,t))],y.i),e,v)},
sqB(d){var x,w,v,u,t=this
if(!t.LG(d))throw B.c(B.EP("invalid text selection: "+d.i(0)))
x=d.a
w=d.b
if(x===w){v=t.a.c
x=x>=v.a&&w<=v.b}else x=!1
u=x?t.a.c:A.af
t.nI(0,t.a.a5T(u,d))},
LG(d){var x=this.a.a.length
return d.a<=x&&d.b<=x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(C.Fc,B.as)
x(C.dv,B.H)
x(C.ys,B.e0)})()
B.ee(b.typeUniverse,JSON.parse('{"Fc":{"as":[],"h":[]},"ys":{"aM":[],"ai":[]}}'))
var y={i:B.I("n<nP>"),g:B.I("l"),b:B.I("@"),j:B.I("~()?")};(function constants(){D.dp=new B.eC(-1,-1,A.n,!1,-1,-1)
D.vl=new C.dv("",D.dp,A.af)
D.wt=new B.ah(48,1/0,48,1/0)
D.c6=new B.aH(8,8,8,8)
D.BZ=new B.hw(57490,!0)
D.p3=new B.k(0,8)
D.Ns=new B.t(!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.vk,null,null,null,null,null,null,null)})()}
$__dart_deferred_initializers__["JX/wpkVmGz3S1bGa++rIPmpOoWw="] = $__dart_deferred_initializers__.current
