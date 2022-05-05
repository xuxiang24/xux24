self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={x_:function x_(d){this.a=d
this.b=0},O_:function O_(){},q6:function q6(d){this.b=d},vC:function vC(d){this.c=d},
He(d,e){var x,w,v=d.length,u=0
while(!0){if(!(u<v&&d[u]===0))break;++u}v-=u
x=new Uint8Array(v+e)
for(w=0;w<v;++w)x[w]=d[w+u]
return new C.a0p(x)},
a0p:function a0p(d){this.a=d},
alH(d,e){var x=B.a([],y.b)
x=new C.a0m(d,e,d*4+17,B.a([],y.Q),x)
x.Uh(d,e)
return x},
ax1(d,e){var x,w,v,u,t,s,r,q
for(x=y.t,w=1;w<40;++w){v=C.alI(w,d)
u=new C.x_(B.a([],x))
for(t=v.length,s=0,r=0;r<t;++r)s+=v[r].b
for(r=0;r<1;++r){q=e[r]
u.ka(0,4,4)
u.ka(0,q.b.length,C.anX(4,w))
q.nm(0,u)}if(u.b<=s*8)break}return w},
azV(d,e,f){var x,w,v,u,t,s=C.alI(d,e),r=new C.x_(B.a([],y.t))
for(x=0;x<f.length;++x){w=f[x]
r.ka(0,4,4)
r.ka(0,w.b.length,C.anX(4,d))
w.nm(0,r)}for(v=s.length,u=0,x=0;x<v;++x)u+=s[x].b
t=u*8
v=r.b
if(v>t)throw B.c(new C.vC("Input too long. "+v+" > "+t))
if(v+4<=t)r.ka(0,0,4)
for(;D.e.cp(r.b,8)!==0;)r.Mn(!1)
for(;!0;){if(r.b>=t)break
r.ka(0,236,8)
if(r.b>=t)break
r.ka(0,17,8)}return C.azU(r,s)},
azU(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=y.T,g=B.a6(e.length,null,!1,h),f=B.a6(e.length,null,!1,h)
for(h=d.a,x=0,w=0,v=0,u=0;u<e.length;++u){t=e[u]
s=t.b
r=t.a-s
w=Math.max(w,s)
v=Math.max(v,r)
q=new Uint8Array(s)
g[u]=q
for(p=0;p<s;++p)q[p]=h[p+x]&255
x+=s
o=C.aA8(r)
t=o.a.length-1
n=C.He(q,t).LV(o)
m=new Uint8Array(t)
f[u]=m
for(l=n.a,k=l.length,p=0;p<t;++p){j=p+k-t
m[p]=j>=0?l[j]:0}}i=B.a([],y.t)
for(p=0;p<w;++p)for(u=0;u<e.length;++u){h=g[u]
if(p<h.length)i.push(h[p])}for(p=0;p<v;++p)for(u=0;u<e.length;++u){h=f[u]
if(p<h.length)i.push(h[p])}return i},
aAI(d,e,f){var x
switch(d){case 0:return(e+f&1)===0
case 1:return(e&1)===0
case 2:return D.e.cp(f,3)===0
case 3:return D.e.cp(e+f,3)===0
case 4:return(D.e.cj(e,2)+D.e.cj(f,3)&1)===0
case 5:x=e*f
return D.e.cp(x,2)+D.e.cp(x,3)===0
case 6:x=e*f
return(D.e.cp(x,2)+D.e.cp(x,3)&1)===0
case 7:return(D.e.cp(e*f,3)+D.e.cp(e+f,2)&1)===0
default:throw B.c(B.b3("bad maskPattern:"+d,null))}},
anX(d,e){var x=null
if(1<=e&&e<10)switch(d){case 1:return 10
case 2:return 9
case 4:return 8
case 8:return 8
default:throw B.c(B.b3("mode:"+d,x))}else if(e<27)switch(d){case 1:return 12
case 2:return 11
case 4:return 16
case 8:return 10
default:throw B.c(B.b3("mode:"+d,x))}else if(e<41)switch(d){case 1:return 14
case 2:return 13
case 4:return 16
case 8:return 12
default:throw B.c(B.b3("mode:"+d,x))}else throw B.c(B.b3("type:"+e,x))},
aAF(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=d.c
for(x=0,w=0;w<k;++w)for(v=0;v<k;++v){u=d.cL(w,v)
for(t=0,s=-1;s<=1;++s){r=w+s
if(r<0||k<=r)continue
for(q=s===0,p=-1;p<=1;++p){o=v+p
if(o<0||k<=o)continue
if(q&&p===0)continue
if(u===d.cL(r,o))++t}}if(t>5)x+=3+t-5}for(r=k-1,w=0;w<r;w=n)for(n=w+1,v=0;v<r;){m=d.cL(w,v)?1:0
if(d.cL(n,v))++m;++v
if(d.cL(w,v))++m
if(d.cL(n,v))++m
if(m===0||m===4)x+=3}for(r=k-6,w=0;w<k;++w)for(v=0;v<r;++v)if(d.cL(w,v)&&!d.cL(w,v+1)&&d.cL(w,v+2)&&d.cL(w,v+3)&&d.cL(w,v+4)&&!d.cL(w,v+5)&&d.cL(w,v+6))x+=40
for(v=0;v<k;++v)for(w=0;w<r;++w)if(d.cL(w,v)&&!d.cL(w+1,v)&&d.cL(w+2,v)&&d.cL(w+3,v)&&d.cL(w+4,v)&&!d.cL(w+5,v)&&d.cL(w+6,v))x+=40
for(v=0,l=0;v<k;++v)for(w=0;w<k;++w)if(d.cL(w,v))++l
return x+Math.abs(100*l/k/k-50)/5*10},
aA8(d){var x,w=y.t,v=C.He(B.a([1],w),0)
for(x=0;x<d;++x)v=v.ce(0,C.He(B.a([1,C.ahW(x)],w),0))
return v},
a0m:function a0m(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
alI(d,e){var x,w,v,u,t,s,r=C.aAk(d,e),q=r.length/3|0,p=B.a([],y.J)
for(x=0;x<q;++x){w=x*3
v=r[w]
u=r[w+1]
t=r[w+2]
for(s=0;s<v;++s)p.push(new C.Hf(u,t))}return p},
aAk(d,e){switch(e){case 1:return A.e5[(d-1)*4]
case 0:return A.e5[(d-1)*4+1]
case 3:return A.e5[(d-1)*4+2]
case 2:return A.e5[(d-1)*4+3]
default:throw B.c(B.b3("bad rs block @ typeNumber: "+d+"/errorCorrectLevel:"+e,null))}},
Hf:function Hf(d,e){this.a=d
this.b=e},
a_B:function a_B(d,e){this.a=d
this.b=e},
Hd(d,e){return new C.x1(d,e,null)},
x1:function x1(d,e,f){this.c=d
this.z=e
this.a=f},
O1:function O1(d){var _=this
_.d=null
_.f=_.e=$
_.a=null
_.b=d
_.c=null},
aaK:function aaK(d){this.a=d},
AB:function AB(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
x2:function x2(d,e,f,g,h,i,j,k,l,m,n){var _=this
_.b=d
_.c=e
_.d=f
_.f=g
_.r=h
_.x=i
_.y=j
_.z=k
_.Q=l
_.ch=$
_.cy=m
_.a=n},
aa5:function aa5(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=$},
nv:function nv(d,e){this.a=d
this.b=e},
pf:function pf(d,e){this.a=d
this.b=e},
a0o:function a0o(d,e){this.a=d
this.b=e},
a0n:function a0n(d,e){this.a=d
this.b=e},
Hc:function Hc(){},
Hb:function Hb(){},
ax2(d,e,f){var x,w,v,u,t,s=B.bC("qrCode")
try{if(f!==-1){s.scc(C.alH(f,e))
v=s.br()
u=D.aY.dZ(d)
v.f.push(new C.q6(u))
v.e=null}else{v=C.alH(C.ax1(e,B.a([new C.q6(D.aY.dZ(d))],y.b)),e)
v.f.push(new C.q6(D.aY.dZ(d)))
v.e=null
s.scc(v)}v=s.br()
u=v.Y7()
v.Gu(!1,u)
v=s.br()
return new C.x3(A.hk,v,null)}catch(t){v=B.ac(t)
if(v instanceof C.vC){x=v
return new C.x3(A.KN,null,x)}else if(y.L.b(v)){w=v
return new C.x3(A.KO,null,w)}else throw t}},
x3:function x3(d,e,f){this.a=d
this.b=e
this.c=f},
x4:function x4(d,e){this.a=d
this.b=e},
aoJ(d){if(d<1)throw B.c(B.b3("glog("+d+")",null))
return $.af2()[d]},
ahW(d){for(;d<0;)d+=255
for(;d>=256;)d-=255
return $.ais()[d]},
azW(){var x,w=new Uint8Array(256)
for(x=0;x<8;++x)w[x]=D.e.HD(1,x)
for(x=8;x<256;++x)w[x]=(w[x-4]^w[x-5]^w[x-6]^w[x-8])>>>0
return w},
azX(){var x,w=new Uint8Array(256)
for(x=0;x<255;++x)w[$.ais()[x]]=x
return w},
aBi(d){var x,w=d<<10>>>0
for(x=w;C.oi(x)-C.oi(1335)>=0;)x=(x^D.e.vK(1335,C.oi(x)-C.oi(1335)))>>>0
return((w|x)^21522)>>>0},
aBj(d){var x,w=d<<12>>>0
for(x=w;C.oi(x)-C.oi(7973)>=0;)x=(x^D.e.vK(7973,C.oi(x)-C.oi(7973)))>>>0
return(w|x)>>>0},
oi(d){var x
for(x=0;d!==0;){++x
d=d>>>1}return x}},B,D,A,E
a.setFunctionNamesIfNecessary([C])
C=a.updateHolder(c[12],C)
B=c[0]
D=c[2]
A=c[33]
E=c[17]
C.x_.prototype={
q(d,e,f){return B.a1(B.G("cannot change"))},
h(d,e){return(D.e.yE(this.a[D.e.cj(e,8)],7-D.e.cp(e,8))&1)===1},
gl(d){return this.b},
sl(d,e){B.a1(B.G("Cannot change"))},
ka(d,e,f){var x
for(x=0;x<f;++x)this.Mn((D.e.OF(e,f-x-1)&1)===1)},
Mn(d){var x=this,w=D.e.cj(x.b,8),v=x.a
if(v.length<=w)v.push(0)
if(d)v[w]=(v[w]|D.e.ju(128,D.e.cp(x.b,8)))>>>0;++x.b},
$iJ:1,
$ip:1,
$iv:1}
C.O_.prototype={}
C.q6.prototype={
gl(d){return this.b.length},
nm(d,e){var x,w,v
for(x=this.b,w=x.length,v=0;v<w;++v)e.ka(0,x[v],8)}}
C.vC.prototype={
i(d){return"QrInputTooLongException: "+this.c},
$ic1:1}
C.a0p.prototype={
h(d,e){return this.a[e]},
gl(d){return this.a.length},
ce(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.length,o=e.a,n=o.length,m=new Uint8Array(p+n-1)
for(x=0;x<p;++x)for(w=0;w<n;++w){v=x+w
u=m[v]
t=q[x]
if(t<1)B.a1(B.b3("glog("+t+")",null))
s=$.af2()
t=s[t]
r=o[w]
if(r<1)B.a1(B.b3("glog("+r+")",null))
m[v]=(u^C.ahW(t+s[r]))>>>0}return C.He(m,0)},
LV(d){var x,w,v,u=this.a,t=u.length,s=d.a,r=s.length
if(t-r<0)return this
x=C.aoJ(u[0])-C.aoJ(s[0])
w=new Uint8Array(t)
for(v=0;v<t;++v)w[v]=u[v]
for(v=0;v<r;++v){u=w[v]
t=s[v]
if(t<1)B.a1(B.b3("glog("+t+")",null))
w[v]=(u^C.ahW($.af2()[t]+x))>>>0}return C.He(w,0).LV(d)}}
C.a0m.prototype={
Uh(d,e){var x,w,v,u,t=this
B.agL(t.a,1,40,"typeNumber")
B.alL(t.b,A.CJ,"errorCorrectLevel",null)
for(x=t.c,w=t.d,v=y.u,u=0;u<x;++u)w.push(B.a6(x,null,!1,v))},
cL(d,e){var x
if(d>=0){x=this.c
x=x<=d||e<0||x<=e}else x=!0
if(x)throw B.c(B.b3(""+d+" , "+e,null))
x=this.d[d][e]
x.toString
return x},
yB(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
for(x=this.d,w=this.c,v=-1;v<=7;++v){u=d+v
if(u<=-1||w<=u)continue
for(t=0<=v,s=v<=6,r=v!==0,q=v===6,p=2<=v,o=v<=4,n=-1;n<=7;++n){m=e+n
if(m<=-1||w<=m)continue
if(t)if(s)l=n===0||n===6
else l=!1
else l=!1
if(!l){if(0<=n)if(n<=6)l=!r||q
else l=!1
else l=!1
if(!l)l=p&&o&&2<=n&&n<=4
else l=!0}else l=!0
if(l)x[u][m]=!0
else x[u][m]=!1}}},
Y7(){var x,w,v,u
for(x=0,w=0,v=0;v<8;++v){this.Gu(!0,v)
u=C.aAF(this)
if(v===0||x>u){w=v
x=u}}return w},
a2L(){var x,w,v,u,t
for(x=this.c-8,w=this.d,v=8;v<x;++v){u=w[v]
if(u[6]!=null)continue
u[6]=(v&1)===0}for(t=8;t<x;++t){u=w[6]
if(u[t]!=null)continue
u[t]=(t&1)===0}},
a2K(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.E3[this.a-1]
for(x=j.length,w=this.d,v=0;v<x;++v)for(u=0;u<x;++u){t=j[v]
s=j[u]
if(w[t][s]!=null)continue
for(r=-2;r<=2;++r)for(q=t+r,p=r!==-2,o=r!==2,n=r===0,m=-2;m<=2;++m){if(p)if(o)if(m!==-2)if(m!==2)l=n&&m===0
else l=!0
else l=!0
else l=!0
else l=!0
k=s+m
if(l)w[q][k]=!0
else w[q][k]=!1}}},
a2N(d){var x,w,v,u,t,s=C.aBj(this.a)
for(x=this.d,w=this.c,v=!d,u=0;u<18;++u){t=v&&(D.e.ju(s,u)&1)===1
x[D.e.cj(u,3)][D.e.cp(u,3)+w-8-3]=t}for(u=0;u<18;++u){t=v&&(D.e.ju(s,u)&1)===1
x[D.e.cp(u,3)+w-8-3][D.e.cj(u,3)]=t}},
a2M(d,e){var x,w,v,u,t,s,r=C.aBi((this.b<<3|e)>>>0)
for(x=this.d,w=this.c,v=w-15,u=!d,t=0;t<15;++t){s=u&&(D.e.ju(r,t)&1)===1
if(t<6)x[t][8]=s
else if(t<8)x[t+1][8]=s
else x[v+t][8]=s}for(t=0;t<15;++t){s=u&&(D.e.ju(r,t)&1)===1
if(t<8)x[8][w-t-1]=s
else{v=15-t-1
if(t<9)x[8][v+1]=s
else x[8][v]=s}}x[w-8][8]=u},
a0b(d,e){var x,w,v,u,t,s,r,q,p,o=this.c,n=o-1
for(x=this.d,w=n,v=-1,u=7,t=0;w>0;w-=2){if(w===6)--w
for(;!0;){for(s=0;s<2;++s){r=w-s
if(x[n][r]==null){q=t<d.length&&(D.e.yE(d[t],u)&1)===1
if(C.aAI(e,n,r))q=!q
x[n][r]=q;--u
if(u===-1){++t
u=7}}}n+=v
if(n<0||o<=n){n-=v
p=-v
v=p
break}}}},
Gu(d,e){var x,w,v=this
v.yB(0,0)
x=v.c-7
v.yB(x,0)
v.yB(0,x)
v.a2K()
v.a2L()
v.a2M(d,e)
x=v.a
if(x>=7)v.a2N(d)
w=v.e
v.a0b(w==null?v.e=C.azV(x,v.b,v.f):w,e)}}
C.Hf.prototype={}
C.a_B.prototype={
Eq(d,e){var x=e!=null?"FinderPatternPosition."+e.b:"any"
return"QrCodeElement."+d.b+":"+x},
a59(d,e,f,g){if(f===A.ev)this.a.push(e)
else this.b.q(0,this.Eq(f,g),e)},
Jq(d,e,f){return this.a59(d,e,f,null)},
u5(d,e){if(d===A.ev)return D.c.gG(this.a)
else return this.b.h(0,this.Eq(d,e))},
a7E(d){return this.u5(d,null)}}
C.x1.prototype={
ah(){return new C.O1(D.l)}}
C.O1.prototype={
I(d,e){var x=this,w="_validationResult",v=C.ax2(x.a.c,1,-1)
x.e=v
if(B.b(v,w).a===A.hk)x.d=B.b(x.e,w).b
else x.d=null
return new E.vW(new C.aaK(x),null)},
a1D(d,e,f){var x,w,v=null,u=this.d
u.toString
this.a.toString
x=u.a
w=new C.x2(x,u.b,v,!0,e,v,A.xG,A.xF,u,new C.a_B(B.a([],y.H),B.x(y.N,y.Z)),v)
B.cy($,"_calcVersion")
w.ch=x
w.a_K()
this.a.toString
return new C.AB(f,D.a2,A.je,B.ij(v,v,v,w,D.p),"qr code",v)},
Xt(d,e,f){var x,w,v=null,u=this.a
u.toString
x=B.a5(v,v,D.i,v,v,v,v,v,v,v,v,v,v)
u=u.z
w=u==null?new B.W(D.e.F(1/0,e.a,e.b),D.e.F(1/0,e.c,e.d)).gfn():u
this.a.toString
return new C.AB(w,D.a2,A.je,x,"qr code",v)}}
C.AB.prototype={
I(d,e){var x=this,w=null,v=x.c
return B.bQ(w,w,B.a5(w,new B.fp(x.e,x.f,w),D.i,x.d,w,w,w,v,w,w,w,w,v),!1,w,w,!1,!1,w,w,w,w,x.r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)}}
C.x2.prototype={
a_K(){var x,w,v,u,t="FinderPatternPosition.",s=this.cy,r=B.aE()
r=r?B.b4():new B.aW(new B.aZ())
r.scF(0,D.a5)
s.Jq(0,r,A.ev)
r=B.aE()
r=r?B.b4():new B.aW(new B.aZ())
r.scF(0,D.a5)
s.Jq(0,r,A.KK)
for(x=0;x<3;++x){w=A.EH[x]
r=B.aE()
r=r?B.b4():new B.aW(new B.aZ())
r.scF(0,D.Q)
v=s.b
u=t+w.b
v.q(0,"QrCodeElement.finderPatternOuter:"+u,r)
r=B.aE()
r=r?B.b4():new B.aW(new B.aZ())
r.scF(0,D.Q)
u=t+w.b
v.q(0,"QrCodeElement.finderPatternInner:"+u,r)
r=B.aE()
r=r?B.b4():new B.aW(new B.aZ())
r.scF(0,D.a5)
u=t+w.b
v.q(0,"QrCodeElement.finderPatternDot:"+u,r)}},
aF(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4="_pixelSize",a5="_innerContentSize",a6="_inset"
if(a8.gfn()===0){B.bJ("[QR] WARN: width or height is zero. You should set a 'size' value or nest this painter in a Widget that defines a non-zero size")
return}x=a8.gfn()
w=a2.Q
v=w.c
u=new C.aa5(v,x,0)
t=(v-1)*0
s=D.d.MN((x-t)/v*2)/2
B.cy($,a4)
u.d=s
s=B.b(s,a4)*v+t
B.cy($,a5)
u.e=s
s=B.b(s,a5)
B.cy($,a6)
u.f=(x-s)/2
a2.xi(A.fs,a7,u)
a2.xi(A.ft,a7,u)
a2.xi(A.jk,a7,u)
r=a2.cy.a7E(A.ev)
r.sau(0,D.m)
for(x=v-7,q=a3,p=q,o=0;o<v;++o)for(n=o<7,m=o>=x,l=0;l<v;++l){s=l<7
k=s&&n
j=s&&m
i=l>=x&&n
if(k||j||i)continue
h=w.cL(l,o)?r:a3
if(h==null)continue
p=B.b(u.f,a6)+o*(B.b(u.d,a4)+0)
q=B.b(u.f,a6)+l*(B.b(u.d,a4)+0)
s=a2.a_C(o,l,v)
g=s?0.5:0
s=a2.a_D(o,l,v)
f=s?0.5:0
a7.c6(0,new B.u(p,q,p+(B.b(u.d,a4)+g),q+(B.b(u.d,a4)+f)),h)}x=a2.r
if(x!=null){w=x.gaM(x)
v=x.gaO(x)
e=a2.a2k(a8,new B.W(w,v),a3)
w=e.a
v=(a8.a-w)/2
s=e.b
d=(a8.b-s)/2
a0=B.aE()
h=a0?B.b4():new B.aW(new B.aZ())
h.sLy(!0)
h.spl(D.fr)
a0=x.gaM(x)
a1=x.gaO(x)
a7.iK(x,D.B.Lm(new B.W(a0,a1),new B.u(0,0,a0,a1)),D.B.Lm(e,new B.u(v,d,v+w,d+s)),h)}},
a_D(d,e,f){var x=e+1
if(x>=f)return!1
return this.Q.cL(x,d)},
a_C(d,e,f){var x=d+1
if(x>=f)return!1
return this.Q.cL(e,x)},
xi(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l="_pixelSize",k="_inset",j=7*B.b(f.d,l)+6*f.c-B.b(f.d,l),i=B.b(f.d,l)/2,h=B.b(f.f,k)+B.b(f.e,"_innerContentSize")-(j+i)
if(d===A.fs)x=new B.k(B.b(f.f,k)+i,B.b(f.f,k)+i)
else{w=f.f
x=d===A.ft?new B.k(B.b(w,k)+i,h):new B.k(h,B.b(w,k)+i)}w=this.cy
v=w.u5(A.KH,d)
v.toString
v.sfo(B.b(f.d,l))
v.sau(0,D.m)
u=w.u5(A.KI,d)
u.toString
u.sfo(B.b(f.d,l))
u.sau(0,new B.z(16777215))
t=w.u5(A.KJ,d)
t.sau(0,D.m)
w=x.a
s=x.b
r=j-2*B.b(f.d,l)
q=w+B.b(f.d,l)
p=s+B.b(f.d,l)
o=j-B.b(f.d,l)*2-2*i
n=w+B.b(f.d,l)+i
m=s+B.b(f.d,l)+i
e.c6(0,new B.u(w,s,w+j,s+j),v)
e.c6(0,new B.u(q,p,q+r,p+r),u)
e.c6(0,new B.u(n,m,n+o,m+o),t)},
a2k(d,e,f){var x=0.25*d.gfn()/e.ga9j()
return new B.W(x*e.a,x*e.b)},
dS(d){var x,w=this,v="_calcVersion"
if(d instanceof C.x2){if(w.c===d.c)if(B.b(w.ch,v)===B.b(d.ch,v))if(w.Q===d.Q)if(w.r==d.r)x=!w.y.k(0,d.y)||!w.z.k(0,d.z)
else x=!0
else x=!0
else x=!0
else x=!0
return x}return!0}}
C.aa5.prototype={}
C.nv.prototype={
i(d){return"QrCodeElement."+this.b}}
C.pf.prototype={
i(d){return"FinderPatternPosition."+this.b}}
C.a0o.prototype={
i(d){return"QrEyeShape."+this.b}}
C.a0n.prototype={
i(d){return"QrDataModuleShape."+this.b}}
C.Hc.prototype={
gv(d){return(B.f_(A.KM)^D.e.gv(4278190080))>>>0},
k(d,e){var x
if(e==null)return!1
if(e instanceof C.Hc){x=D.m.k(0,D.m)
return x}return!1}}
C.Hb.prototype={
gv(d){return(B.f_(A.KL)^D.e.gv(4278190080))>>>0},
k(d,e){var x
if(e==null)return!1
if(e instanceof C.Hb){x=D.m.k(0,D.m)
return x}return!1}}
C.x3.prototype={}
C.x4.prototype={
i(d){return"QrValidationStatus."+this.b}}
var z=a.updateTypes([])
C.aaK.prototype={
$2(d,e){var x,w="_validationResult",v=this.a
if(B.b(v.e,w).a!==A.hk)return v.Xt(d,e,B.b(v.e,w).c)
x=v.a.z
if(x==null)x=new B.W(D.e.F(1/0,e.a,e.b),D.e.F(1/0,e.c,e.d)).gfn()
v.a.toString
v=v.a1D(d,null,x)
return v},
$S:373};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.H,[C.O_,C.q6,C.vC,C.a0p,C.a0m,C.Hf,C.a_B,C.aa5,C.Hc,C.Hb,C.x3])
v(C.x_,C.O_)
v(C.x1,B.L)
v(C.O1,B.X)
v(C.aaK,B.f8)
v(C.AB,B.as)
v(C.x2,B.jt)
w(B.lM,[C.nv,C.pf,C.a0o,C.a0n,C.x4])
x(C.O_,B.F)})()
B.ee(b.typeUniverse,JSON.parse('{"x_":{"F":["B"],"v":["B"],"J":["B"],"p":["B"],"F.E":"B"},"vC":{"c1":[]},"x1":{"L":[],"h":[]},"O1":{"X":["x1"]},"AB":{"as":[],"h":[]},"x2":{"ai":[]}}'))
var y=(function rtii(){var x=B.I
return{L:x("c1"),S:x("n<v<o>>"),Q:x("n<v<B?>>"),H:x("n<lj>"),b:x("n<q6>"),J:x("n<Hf>"),t:x("n<o>"),Z:x("lj"),N:x("l"),T:x("v<o>?"),u:x("B?")}})();(function constants(){var x=a.makeConstList
A.KL=new C.a0n(0,"square")
A.xF=new C.Hb()
A.KM=new C.a0o(0,"square")
A.xG=new C.Hc()
A.je=new B.aH(10,10,10,10)
A.fs=new C.pf(0,"topLeft")
A.jk=new C.pf(1,"topRight")
A.ft=new C.pf(2,"bottomLeft")
A.CJ=B.a(x([1,0,3,2]),y.t)
A.DL=B.a(x([6,18]),y.t)
A.DM=B.a(x([6,22]),y.t)
A.DP=B.a(x([6,26]),y.t)
A.DV=B.a(x([6,30]),y.t)
A.E0=B.a(x([6,34]),y.t)
A.DN=B.a(x([6,22,38]),y.t)
A.DO=B.a(x([6,24,42]),y.t)
A.DQ=B.a(x([6,26,46]),y.t)
A.DU=B.a(x([6,28,50]),y.t)
A.DW=B.a(x([6,30,54]),y.t)
A.E_=B.a(x([6,32,58]),y.t)
A.E1=B.a(x([6,34,62]),y.t)
A.DR=B.a(x([6,26,46,66]),y.t)
A.DS=B.a(x([6,26,48,70]),y.t)
A.DT=B.a(x([6,26,50,74]),y.t)
A.DX=B.a(x([6,30,54,78]),y.t)
A.DY=B.a(x([6,30,56,82]),y.t)
A.DZ=B.a(x([6,30,58,86]),y.t)
A.E2=B.a(x([6,34,62,90]),y.t)
A.Hr=B.a(x([6,28,50,72,94]),y.t)
A.Hs=B.a(x([6,26,50,74,98]),y.t)
A.Ht=B.a(x([6,30,54,78,102]),y.t)
A.Hu=B.a(x([6,28,54,80,106]),y.t)
A.Hv=B.a(x([6,32,58,84,110]),y.t)
A.Hw=B.a(x([6,30,58,86,114]),y.t)
A.Hx=B.a(x([6,34,62,90,118]),y.t)
A.Fb=B.a(x([6,26,50,74,98,122]),y.t)
A.Fc=B.a(x([6,30,54,78,102,126]),y.t)
A.Fd=B.a(x([6,26,52,78,104,130]),y.t)
A.FV=B.a(x([6,30,56,82,108,134]),y.t)
A.G5=B.a(x([6,34,60,86,112,138]),y.t)
A.Gg=B.a(x([6,30,58,86,114,142]),y.t)
A.Gr=B.a(x([6,34,62,90,118,146]),y.t)
A.E5=B.a(x([6,30,54,78,102,126,150]),y.t)
A.E6=B.a(x([6,24,50,76,102,128,154]),y.t)
A.E7=B.a(x([6,28,54,80,106,132,158]),y.t)
A.E8=B.a(x([6,32,58,84,110,136,162]),y.t)
A.E9=B.a(x([6,26,54,82,110,138,166]),y.t)
A.Ea=B.a(x([6,30,58,86,114,142,170]),y.t)
A.E3=B.a(x([D.fP,A.DL,A.DM,A.DP,A.DV,A.E0,A.DN,A.DO,A.DQ,A.DU,A.DW,A.E_,A.E1,A.DR,A.DS,A.DT,A.DX,A.DY,A.DZ,A.E2,A.Hr,A.Hs,A.Ht,A.Hu,A.Hv,A.Hw,A.Hx,A.Fb,A.Fc,A.Fd,A.FV,A.G5,A.Gg,A.Gr,A.E5,A.E6,A.E7,A.E8,A.E9,A.Ea]),y.S)
A.EH=B.a(x([A.fs,A.jk,A.ft]),B.I("n<pf>"))
A.CO=B.a(x([1,26,19]),y.t)
A.CN=B.a(x([1,26,16]),y.t)
A.CM=B.a(x([1,26,13]),y.t)
A.CP=B.a(x([1,26,9]),y.t)
A.CT=B.a(x([1,44,34]),y.t)
A.CS=B.a(x([1,44,28]),y.t)
A.CR=B.a(x([1,44,22]),y.t)
A.CQ=B.a(x([1,44,16]),y.t)
A.CV=B.a(x([1,70,55]),y.t)
A.CU=B.a(x([1,70,44]),y.t)
A.D1=B.a(x([2,35,17]),y.t)
A.D0=B.a(x([2,35,13]),y.t)
A.CK=B.a(x([1,100,80]),y.t)
A.D3=B.a(x([2,50,32]),y.t)
A.D2=B.a(x([2,50,24]),y.t)
A.Dv=B.a(x([4,25,9]),y.t)
A.CL=B.a(x([1,134,108]),y.t)
A.D4=B.a(x([2,67,43]),y.t)
A.GC=B.a(x([2,33,15,2,34,16]),y.t)
A.GN=B.a(x([2,33,11,2,34,12]),y.t)
A.D5=B.a(x([2,86,68]),y.t)
A.Dy=B.a(x([4,43,27]),y.t)
A.Dx=B.a(x([4,43,19]),y.t)
A.Dw=B.a(x([4,43,15]),y.t)
A.D6=B.a(x([2,98,78]),y.t)
A.Dz=B.a(x([4,49,31]),y.t)
A.GY=B.a(x([2,32,14,4,33,15]),y.t)
A.H8=B.a(x([4,39,13,1,40,14]),y.t)
A.CZ=B.a(x([2,121,97]),y.t)
A.Fe=B.a(x([2,60,38,2,61,39]),y.t)
A.Fp=B.a(x([4,40,18,2,41,19]),y.t)
A.FA=B.a(x([4,40,14,2,41,15]),y.t)
A.D_=B.a(x([2,146,116]),y.t)
A.FL=B.a(x([3,58,36,2,59,37]),y.t)
A.FP=B.a(x([4,36,16,4,37,17]),y.t)
A.FQ=B.a(x([4,36,12,4,37,13]),y.t)
A.FR=B.a(x([2,86,68,2,87,69]),y.t)
A.FS=B.a(x([4,69,43,1,70,44]),y.t)
A.FT=B.a(x([6,43,19,2,44,20]),y.t)
A.FU=B.a(x([6,43,15,2,44,16]),y.t)
A.Dt=B.a(x([4,101,81]),y.t)
A.FW=B.a(x([1,80,50,4,81,51]),y.t)
A.FX=B.a(x([4,50,22,4,51,23]),y.t)
A.FY=B.a(x([3,36,12,8,37,13]),y.t)
A.FZ=B.a(x([2,116,92,2,117,93]),y.t)
A.G_=B.a(x([6,58,36,2,59,37]),y.t)
A.G0=B.a(x([4,46,20,6,47,21]),y.t)
A.G1=B.a(x([7,42,14,4,43,15]),y.t)
A.Du=B.a(x([4,133,107]),y.t)
A.G2=B.a(x([8,59,37,1,60,38]),y.t)
A.G3=B.a(x([8,44,20,4,45,21]),y.t)
A.G4=B.a(x([12,33,11,4,34,12]),y.t)
A.G6=B.a(x([3,145,115,1,146,116]),y.t)
A.G7=B.a(x([4,64,40,5,65,41]),y.t)
A.G8=B.a(x([11,36,16,5,37,17]),y.t)
A.G9=B.a(x([11,36,12,5,37,13]),y.t)
A.Ga=B.a(x([5,109,87,1,110,88]),y.t)
A.Gb=B.a(x([5,65,41,5,66,42]),y.t)
A.Gc=B.a(x([5,54,24,7,55,25]),y.t)
A.CF=B.a(x([11,36,12]),y.t)
A.Gd=B.a(x([5,122,98,1,123,99]),y.t)
A.Ge=B.a(x([7,73,45,3,74,46]),y.t)
A.Gf=B.a(x([15,43,19,2,44,20]),y.t)
A.Gh=B.a(x([3,45,15,13,46,16]),y.t)
A.Gi=B.a(x([1,135,107,5,136,108]),y.t)
A.Gj=B.a(x([10,74,46,1,75,47]),y.t)
A.Gk=B.a(x([1,50,22,15,51,23]),y.t)
A.Gl=B.a(x([2,42,14,17,43,15]),y.t)
A.Gm=B.a(x([5,150,120,1,151,121]),y.t)
A.Gn=B.a(x([9,69,43,4,70,44]),y.t)
A.Go=B.a(x([17,50,22,1,51,23]),y.t)
A.Gp=B.a(x([2,42,14,19,43,15]),y.t)
A.Gq=B.a(x([3,141,113,4,142,114]),y.t)
A.Gs=B.a(x([3,70,44,11,71,45]),y.t)
A.Gt=B.a(x([17,47,21,4,48,22]),y.t)
A.Gu=B.a(x([9,39,13,16,40,14]),y.t)
A.Gv=B.a(x([3,135,107,5,136,108]),y.t)
A.Gw=B.a(x([3,67,41,13,68,42]),y.t)
A.Gx=B.a(x([15,54,24,5,55,25]),y.t)
A.Gy=B.a(x([15,43,15,10,44,16]),y.t)
A.Gz=B.a(x([4,144,116,4,145,117]),y.t)
A.CH=B.a(x([17,68,42]),y.t)
A.GA=B.a(x([17,50,22,6,51,23]),y.t)
A.GB=B.a(x([19,46,16,6,47,17]),y.t)
A.GD=B.a(x([2,139,111,7,140,112]),y.t)
A.CI=B.a(x([17,74,46]),y.t)
A.GE=B.a(x([7,54,24,16,55,25]),y.t)
A.D7=B.a(x([34,37,13]),y.t)
A.GF=B.a(x([4,151,121,5,152,122]),y.t)
A.GG=B.a(x([4,75,47,14,76,48]),y.t)
A.GH=B.a(x([11,54,24,14,55,25]),y.t)
A.GI=B.a(x([16,45,15,14,46,16]),y.t)
A.GJ=B.a(x([6,147,117,4,148,118]),y.t)
A.GK=B.a(x([6,73,45,14,74,46]),y.t)
A.GL=B.a(x([11,54,24,16,55,25]),y.t)
A.GM=B.a(x([30,46,16,2,47,17]),y.t)
A.GO=B.a(x([8,132,106,4,133,107]),y.t)
A.GP=B.a(x([8,75,47,13,76,48]),y.t)
A.GQ=B.a(x([7,54,24,22,55,25]),y.t)
A.GR=B.a(x([22,45,15,13,46,16]),y.t)
A.GS=B.a(x([10,142,114,2,143,115]),y.t)
A.GT=B.a(x([19,74,46,4,75,47]),y.t)
A.GU=B.a(x([28,50,22,6,51,23]),y.t)
A.GV=B.a(x([33,46,16,4,47,17]),y.t)
A.GW=B.a(x([8,152,122,4,153,123]),y.t)
A.GX=B.a(x([22,73,45,3,74,46]),y.t)
A.GZ=B.a(x([8,53,23,26,54,24]),y.t)
A.H_=B.a(x([12,45,15,28,46,16]),y.t)
A.H0=B.a(x([3,147,117,10,148,118]),y.t)
A.H1=B.a(x([3,73,45,23,74,46]),y.t)
A.H2=B.a(x([4,54,24,31,55,25]),y.t)
A.H3=B.a(x([11,45,15,31,46,16]),y.t)
A.H4=B.a(x([7,146,116,7,147,117]),y.t)
A.H5=B.a(x([21,73,45,7,74,46]),y.t)
A.H6=B.a(x([1,53,23,37,54,24]),y.t)
A.H7=B.a(x([19,45,15,26,46,16]),y.t)
A.H9=B.a(x([5,145,115,10,146,116]),y.t)
A.Ha=B.a(x([19,75,47,10,76,48]),y.t)
A.Hb=B.a(x([15,54,24,25,55,25]),y.t)
A.Hc=B.a(x([23,45,15,25,46,16]),y.t)
A.Hd=B.a(x([13,145,115,3,146,116]),y.t)
A.He=B.a(x([2,74,46,29,75,47]),y.t)
A.Hf=B.a(x([42,54,24,1,55,25]),y.t)
A.Hg=B.a(x([23,45,15,28,46,16]),y.t)
A.CG=B.a(x([17,145,115]),y.t)
A.Hh=B.a(x([10,74,46,23,75,47]),y.t)
A.Hi=B.a(x([10,54,24,35,55,25]),y.t)
A.Ff=B.a(x([19,45,15,35,46,16]),y.t)
A.Fg=B.a(x([17,145,115,1,146,116]),y.t)
A.Fh=B.a(x([14,74,46,21,75,47]),y.t)
A.Fi=B.a(x([29,54,24,19,55,25]),y.t)
A.Fj=B.a(x([11,45,15,46,46,16]),y.t)
A.Fk=B.a(x([13,145,115,6,146,116]),y.t)
A.Fl=B.a(x([14,74,46,23,75,47]),y.t)
A.Fm=B.a(x([44,54,24,7,55,25]),y.t)
A.Fn=B.a(x([59,46,16,1,47,17]),y.t)
A.Fo=B.a(x([12,151,121,7,152,122]),y.t)
A.Fq=B.a(x([12,75,47,26,76,48]),y.t)
A.Fr=B.a(x([39,54,24,14,55,25]),y.t)
A.Fs=B.a(x([22,45,15,41,46,16]),y.t)
A.Ft=B.a(x([6,151,121,14,152,122]),y.t)
A.Fu=B.a(x([6,75,47,34,76,48]),y.t)
A.Fv=B.a(x([46,54,24,10,55,25]),y.t)
A.Fw=B.a(x([2,45,15,64,46,16]),y.t)
A.Fx=B.a(x([17,152,122,4,153,123]),y.t)
A.Fy=B.a(x([29,74,46,14,75,47]),y.t)
A.Fz=B.a(x([49,54,24,10,55,25]),y.t)
A.FB=B.a(x([24,45,15,46,46,16]),y.t)
A.FC=B.a(x([4,152,122,18,153,123]),y.t)
A.FD=B.a(x([13,74,46,32,75,47]),y.t)
A.FE=B.a(x([48,54,24,14,55,25]),y.t)
A.FF=B.a(x([42,45,15,32,46,16]),y.t)
A.FG=B.a(x([20,147,117,4,148,118]),y.t)
A.FH=B.a(x([40,75,47,7,76,48]),y.t)
A.FI=B.a(x([43,54,24,22,55,25]),y.t)
A.FJ=B.a(x([10,45,15,67,46,16]),y.t)
A.FK=B.a(x([19,148,118,6,149,119]),y.t)
A.FM=B.a(x([18,75,47,31,76,48]),y.t)
A.FN=B.a(x([34,54,24,34,55,25]),y.t)
A.FO=B.a(x([20,45,15,61,46,16]),y.t)
A.e5=B.a(x([A.CO,A.CN,A.CM,A.CP,A.CT,A.CS,A.CR,A.CQ,A.CV,A.CU,A.D1,A.D0,A.CK,A.D3,A.D2,A.Dv,A.CL,A.D4,A.GC,A.GN,A.D5,A.Dy,A.Dx,A.Dw,A.D6,A.Dz,A.GY,A.H8,A.CZ,A.Fe,A.Fp,A.FA,A.D_,A.FL,A.FP,A.FQ,A.FR,A.FS,A.FT,A.FU,A.Dt,A.FW,A.FX,A.FY,A.FZ,A.G_,A.G0,A.G1,A.Du,A.G2,A.G3,A.G4,A.G6,A.G7,A.G8,A.G9,A.Ga,A.Gb,A.Gc,A.CF,A.Gd,A.Ge,A.Gf,A.Gh,A.Gi,A.Gj,A.Gk,A.Gl,A.Gm,A.Gn,A.Go,A.Gp,A.Gq,A.Gs,A.Gt,A.Gu,A.Gv,A.Gw,A.Gx,A.Gy,A.Gz,A.CH,A.GA,A.GB,A.GD,A.CI,A.GE,A.D7,A.GF,A.GG,A.GH,A.GI,A.GJ,A.GK,A.GL,A.GM,A.GO,A.GP,A.GQ,A.GR,A.GS,A.GT,A.GU,A.GV,A.GW,A.GX,A.GZ,A.H_,A.H0,A.H1,A.H2,A.H3,A.H4,A.H5,A.H6,A.H7,A.H9,A.Ha,A.Hb,A.Hc,A.Hd,A.He,A.Hf,A.Hg,A.CG,A.Hh,A.Hi,A.Ff,A.Fg,A.Fh,A.Fi,A.Fj,A.Fk,A.Fl,A.Fm,A.Fn,A.Fo,A.Fq,A.Fr,A.Fs,A.Ft,A.Fu,A.Fv,A.Fw,A.Fx,A.Fy,A.Fz,A.FB,A.FC,A.FD,A.FE,A.FF,A.FG,A.FH,A.FI,A.FJ,A.FK,A.FM,A.FN,A.FO]),y.S)
A.KH=new C.nv(0,"finderPatternOuter")
A.KI=new C.nv(1,"finderPatternInner")
A.KJ=new C.nv(2,"finderPatternDot")
A.ev=new C.nv(3,"codePixel")
A.KK=new C.nv(4,"codePixelEmpty")
A.hk=new C.x4(0,"valid")
A.KN=new C.x4(1,"contentTooLong")
A.KO=new C.x4(2,"error")
A.as=new B.t(!0,D.m,null,null,null,null,14,D.x,null,null,null,null,null,null,null,null,null,D.h,null,null,null,null,null,null,null)
A.A_=new B.z(4281545523)
A.vv=new B.t(!0,A.A_,null,null,null,null,16,D.fy,null,null,null,null,null,null,null,null,null,D.h,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"aFF","af2",()=>C.azX())
x($,"aFm","ais",()=>C.azW())})()}
$__dart_deferred_initializers__["LqHQHVQyR1eu3nVFIX9TUjAlUlA="] = $__dart_deferred_initializers__.current
