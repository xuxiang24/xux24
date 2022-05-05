self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={
ad8(d,e,f,g,h){return new C.D7(f,e,d,g,h,null)},
D7:function D7(d,e,f,g,h,i){var _=this
_.c=d
_.x=e
_.Q=f
_.db=g
_.fx=h
_.a=i},
de:function de(d,e,f){this.a=d
this.b=e
this.c=f},
jO(d){var x=d==null?D.v6:new C.de(d,D.dj,A.ah)
return new C.x0(x,B.a6(0,null,!1,y.j))},
x0:function x0(d,e){var _=this
_.a=d
_.Z$=0
_.X$=e
_.ae$=_.al$=0
_.ai$=!1},
anL(d,e){var x=new B.cY(d,e,A.al)
return new B.cc(x,x,x,x)},
acn(d){return new B.af(0,d.a,0,d.b)},
ae4(d,e,f,g){var x,w,v=new Float64Array(16)
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
return new B.q3(new B.aM(v),d,!0,g,f,null)},
agN(d,e,f){return new B.mb(d,f,e,null)}},B,D,A
a.setFunctionNamesIfNecessary([C])
C=a.updateHolder(c[16],C)
B=c[0]
D=c[24]
A=c[2]
C.D7.prototype={
G(d,e){var x=this,w=null,v=B.al(e),u=x.c,t=new B.eS(v.a.Je(D.we),new B.f5(D.c_,B.dd(new B.hS(A.B,w,w,B.ov(x.x,new B.cf(x.Q,w,u)),w),u,u),w),w),s=x.fx
if(s!=null)t=B.ars(t,s)
u=Math.max(35,(u+Math.min(D.c_.giA(),D.c_.gco(D.c_)+D.c_.gcw(D.c_)))*0.7)
return B.bN(!0,w,B.api(!1,w,!0,t,!1,w,!0,!1,v.cy,w,v.dx,A.wL,v.db,w,A.uT,w,w,w,w,w,x.db,w,w,w,u,v.dy,w),!1,w,!0,!1,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)}}
C.de.prototype={
rX(d,e,f){var x=f==null?this.a:f,w=e==null?this.b:e
return new C.de(x,w,d==null?this.c:d)},
Iz(d){return this.rX(d,null,null)},
rW(d){return this.rX(null,d,null)},
a1f(d,e){return this.rX(d,e,null)},
pD(){var x=this.b,w=this.c
return B.aL(["text",this.a,"selectionBase",x.c,"selectionExtent",x.d,"selectionAffinity","TextAffinity."+x.e.b,"selectionIsDirectional",x.f,"composingBase",w.a,"composingExtent",w.b],y.g,y.b)},
i(d){return"TextEditingValue(text: \u2524"+this.a+"\u251c, selection: "+this.b.i(0)+", composing: "+this.c.i(0)+")"},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
return e instanceof C.de&&e.a===x.a&&e.b.k(0,x.b)&&e.c.k(0,x.c)},
gv(d){var x=this.b,w=this.c
return B.a_(A.b.gv(this.a),x.gv(x),B.a_(A.e.gv(w.a),A.e.gv(w.b),A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a),A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a,A.a)}}
C.x0.prototype={
Ie(d,e,f){var x,w,v=null,u=this.a,t=u.c
if(t.gaV()){x=t.b
u=x>=t.a&&x<=u.a.length}else u=!1
if(!u||!f)return B.hB(v,e,this.a.a)
w=e.bA(D.Lx)
u=this.a
t=u.c
u=u.a
x=t.a
t=t.b
return B.hB(B.b([B.hB(v,v,A.b.L(u,0,x)),B.hB(v,w,A.b.L(u,x,t)),B.hB(v,v,A.b.bP(u,t))],y.i),e,v)},
sq0(d){var x,w,v,u,t=this
if(!t.Kn(d))throw B.c(B.CN("invalid text selection: "+d.i(0)))
x=d.a
w=d.b
if(x===w){v=t.a.c
x=x>=v.a&&w<=v.b}else x=!1
u=x?t.a.c:A.ah
t.nc(0,t.a.a1f(u,d))},
Kn(d){var x=this.a.a.length
return d.a<=x&&d.b<=x}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inherit
x(C.D7,B.ai)
x(C.de,B.F)
x(C.x0,B.dO)})()
B.e0(b.typeUniverse,JSON.parse('{"D7":{"ai":[],"h":[]},"x0":{"aG":[],"ac":[]}}'))
var y={i:B.M("o<na>"),g:B.M("l"),b:B.M("@"),j:B.M("~()?")};(function constants(){D.dj=new B.ej(-1,-1,A.n,!1,-1,-1)
D.v6=new C.de("",D.dj,A.ah)
D.we=new B.af(48,1/0,48,1/0)
D.c_=new B.aD(8,8,8,8)
D.Ab=new B.hc(57490,!0)
D.oN=new B.k(0,8)
D.Lx=new B.r(!0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,A.v5,null,null,null,null,null,null,null)})()}
$__dart_deferred_initializers__["nIYSPpKRkwK8pBRaOXGrCyNmq44="] = $__dart_deferred_initializers__.current
