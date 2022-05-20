self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={vF:function vF(d){this.a=d
this.b=0},LI:function LI(){},pb:function pb(d){this.b=d},ug:function ug(d){this.c=d},
F7(d,e){var x,w,v=d.length,u=0
while(!0){if(!(u<v&&d[u]===0))break;++u}v-=u
x=new Uint8Array(v+e)
for(w=0;w<v;++w)x[w]=d[w+u]
return new C.Yn(x)},
Yn:function Yn(d){this.a=d},
ai6(d,e){var x=B.b([],y.b)
x=new C.Yk(d,e,d*4+17,B.b([],y.Q),x)
x.QD(d,e)
return x},
aqL(d,e){var x,w,v,u,t,s,r,q
for(x=y.t,w=1;w<40;++w){v=C.ai7(w,d)
u=new C.vF(B.b([],x))
for(t=v.length,s=0,r=0;r<t;++r)s+=v[r].b
for(r=0;r<1;++r){q=e[r]
u.jQ(0,4,4)
u.jQ(0,q.b.length,C.ake(4,w))
q.mS(0,u)}if(u.b<=s*8)break}return w},
atx(d,e,f){var x,w,v,u,t,s=C.ai7(d,e),r=new C.vF(B.b([],y.t))
for(x=0;x<f.length;++x){w=f[x]
r.jQ(0,4,4)
r.jQ(0,w.b.length,C.ake(4,d))
w.mS(0,r)}for(v=s.length,u=0,x=0;x<v;++x)u+=s[x].b
t=u*8
v=r.b
if(v>t)throw B.c(new C.ug("Input too long. "+v+" > "+t))
if(v+4<=t)r.jQ(0,0,4)
for(;D.e.ci(r.b,8)!==0;)r.L_(!1)
for(;!0;){if(r.b>=t)break
r.jQ(0,236,8)
if(r.b>=t)break
r.jQ(0,17,8)}return C.atw(r,s)},
atw(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=y.T,g=B.a3(e.length,null,!1,h),f=B.a3(e.length,null,!1,h)
for(h=d.a,x=0,w=0,v=0,u=0;u<e.length;++u){t=e[u]
s=t.b
r=t.a-s
w=Math.max(w,s)
v=Math.max(v,r)
q=new Uint8Array(s)
g[u]=q
for(p=0;p<s;++p)q[p]=h[p+x]&255
x+=s
o=C.atK(r)
t=o.a.length-1
n=C.F7(q,t).KF(o)
m=new Uint8Array(t)
f[u]=m
for(l=n.a,k=l.length,p=0;p<t;++p){j=p+k-t
m[p]=j>=0?l[j]:0}}i=B.b([],y.t)
for(p=0;p<w;++p)for(u=0;u<e.length;++u){h=g[u]
if(p<h.length)i.push(h[p])}for(p=0;p<v;++p)for(u=0;u<e.length;++u){h=f[u]
if(p<h.length)i.push(h[p])}return i},
aui(d,e,f){var x
switch(d){case 0:return(e+f&1)===0
case 1:return(e&1)===0
case 2:return D.e.ci(f,3)===0
case 3:return D.e.ci(e+f,3)===0
case 4:return(D.e.cc(e,2)+D.e.cc(f,3)&1)===0
case 5:x=e*f
return D.e.ci(x,2)+D.e.ci(x,3)===0
case 6:x=e*f
return(D.e.ci(x,2)+D.e.ci(x,3)&1)===0
case 7:return(D.e.ci(e*f,3)+D.e.ci(e+f,2)&1)===0
default:throw B.c(B.b_("bad maskPattern:"+d,null))}},
ake(d,e){var x=null
if(1<=e&&e<10)switch(d){case 1:return 10
case 2:return 9
case 4:return 8
case 8:return 8
default:throw B.c(B.b_("mode:"+d,x))}else if(e<27)switch(d){case 1:return 12
case 2:return 11
case 4:return 16
case 8:return 10
default:throw B.c(B.b_("mode:"+d,x))}else if(e<41)switch(d){case 1:return 14
case 2:return 13
case 4:return 16
case 8:return 12
default:throw B.c(B.b_("mode:"+d,x))}else throw B.c(B.b_("type:"+e,x))},
aug(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=d.c
for(x=0,w=0;w<k;++w)for(v=0;v<k;++v){u=d.cD(w,v)
for(t=0,s=-1;s<=1;++s){r=w+s
if(r<0||k<=r)continue
for(q=s===0,p=-1;p<=1;++p){o=v+p
if(o<0||k<=o)continue
if(q&&p===0)continue
if(u===d.cD(r,o))++t}}if(t>5)x+=3+t-5}for(r=k-1,w=0;w<r;w=n)for(n=w+1,v=0;v<r;){m=d.cD(w,v)?1:0
if(d.cD(n,v))++m;++v
if(d.cD(w,v))++m
if(d.cD(n,v))++m
if(m===0||m===4)x+=3}for(r=k-6,w=0;w<k;++w)for(v=0;v<r;++v)if(d.cD(w,v)&&!d.cD(w,v+1)&&d.cD(w,v+2)&&d.cD(w,v+3)&&d.cD(w,v+4)&&!d.cD(w,v+5)&&d.cD(w,v+6))x+=40
for(v=0;v<k;++v)for(w=0;w<r;++w)if(d.cD(w,v)&&!d.cD(w+1,v)&&d.cD(w+2,v)&&d.cD(w+3,v)&&d.cD(w+4,v)&&!d.cD(w+5,v)&&d.cD(w+6,v))x+=40
for(v=0,l=0;v<k;++v)for(w=0;w<k;++w)if(d.cD(w,v))++l
return x+Math.abs(100*l/k/k-50)/5*10},
atK(d){var x,w=y.t,v=C.F7(B.b([1],w),0)
for(x=0;x<d;++x)v=v.c7(0,C.F7(B.b([1,C.afb(x)],w),0))
return v},
Yk:function Yk(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
ai7(d,e){var x,w,v,u,t,s,r=C.atW(d,e),q=r.length/3|0,p=B.b([],y.J)
for(x=0;x<q;++x){w=x*3
v=r[w]
u=r[w+1]
t=r[w+2]
for(s=0;s<v;++s)p.push(new C.F8(u,t))}return p},
atW(d,e){switch(e){case 1:return A.e0[(d-1)*4]
case 0:return A.e0[(d-1)*4+1]
case 3:return A.e0[(d-1)*4+2]
case 2:return A.e0[(d-1)*4+3]
default:throw B.c(B.b_("bad rs block @ typeNumber: "+d+"/errorCorrectLevel:"+e,null))}},
F8:function F8(d,e){this.a=d
this.b=e},
XF:function XF(d,e){this.a=d
this.b=e},
vI(d,e){return new C.vH(d,e,null)},
vH:function vH(d,e,f){this.c=d
this.z=e
this.a=f},
LK:function LK(d){var _=this
_.d=null
_.f=_.e=$
_.a=null
_.b=d
_.c=null},
a81:function a81(d){this.a=d},
zc:function zc(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
vJ:function vJ(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a7q:function a7q(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=$},
mQ:function mQ(d,e){this.a=d
this.b=e},
ok:function ok(d,e){this.a=d
this.b=e},
Ym:function Ym(d,e){this.a=d
this.b=e},
Yl:function Yl(d,e){this.a=d
this.b=e},
F6:function F6(){},
F5:function F5(){},
aqM(d,e,f){var x,w,v,u,t,s=B.bF("qrCode")
try{if(f!==-1){s.sc5(C.ai6(f,e))
v=s.bq()
u=D.aY.dX(d)
v.f.push(new C.pb(u))
v.e=null}else{v=C.ai6(C.aqL(e,B.b([new C.pb(D.aY.dX(d))],y.b)),e)
v.f.push(new C.pb(D.aY.dX(d)))
v.e=null
s.sc5(v)}v=s.bq()
u=v.TD()
v.Ft(!1,u)
v=s.bq()
return new C.vK(A.hc,v,null)}catch(t){v=B.ab(t)
if(v instanceof C.ug){x=v
return new C.vK(A.IW,null,x)}else if(y.L.b(v)){w=v
return new C.vK(A.IX,null,w)}else throw t}},
vK:function vK(d,e,f){this.a=d
this.b=e
this.c=f},
vL:function vL(d,e){this.a=d
this.b=e},
akY(d){if(d<1)throw B.c(B.b_("glog("+d+")",null))
return $.ach()[d]},
afb(d){for(;d<0;)d+=255
for(;d>=256;)d-=255
return $.afH()[d]},
aty(){var x,w=new Uint8Array(256)
for(x=0;x<8;++x)w[x]=D.e.GC(1,x)
for(x=8;x<256;++x)w[x]=(w[x-4]^w[x-5]^w[x-6]^w[x-8])>>>0
return w},
atz(){var x,w=new Uint8Array(256)
for(x=0;x<255;++x)w[$.afH()[x]]=x
return w},
auS(d){var x,w=d<<10>>>0
for(x=w;C.ny(x)-C.ny(1335)>=0;)x=(x^D.e.v2(1335,C.ny(x)-C.ny(1335)))>>>0
return((w|x)^21522)>>>0},
auT(d){var x,w=d<<12>>>0
for(x=w;C.ny(x)-C.ny(7973)>=0;)x=(x^D.e.v2(7973,C.ny(x)-C.ny(7973)))>>>0
return(w|x)>>>0},
ny(d){var x
for(x=0;d!==0;){++x
d=d>>>1}return x}},B,D,A,E
a.setFunctionNamesIfNecessary([C])
C=a.updateHolder(c[6],C)
B=c[0]
D=c[2]
A=c[12]
E=c[8]
C.vF.prototype={
q(d,e,f){return B.W(B.E("cannot change"))},
i(d,e){return(D.e.xU(this.a[D.e.cc(e,8)],7-D.e.ci(e,8))&1)===1},
gl(d){return this.b},
sl(d,e){B.W(B.E("Cannot change"))},
jQ(d,e,f){var x
for(x=0;x<f;++x)this.L_((D.e.MX(e,f-x-1)&1)===1)},
L_(d){var x=this,w=D.e.cc(x.b,8),v=x.a
if(v.length<=w)v.push(0)
if(d)v[w]=(v[w]|D.e.ji(128,D.e.ci(x.b,8)))>>>0;++x.b},
$iF:1,
$in:1,
$iu:1}
C.LI.prototype={}
C.pb.prototype={
gl(d){return this.b.length},
mS(d,e){var x,w,v
for(x=this.b,w=x.length,v=0;v<w;++v)e.jQ(0,x[v],8)}}
C.ug.prototype={
h(d){return"QrInputTooLongException: "+this.c},
$ibA:1}
C.Yn.prototype={
i(d,e){return this.a[e]},
gl(d){return this.a.length},
c7(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.length,o=e.a,n=o.length,m=new Uint8Array(p+n-1)
for(x=0;x<p;++x)for(w=0;w<n;++w){v=x+w
u=m[v]
t=q[x]
if(t<1)B.W(B.b_("glog("+t+")",null))
s=$.ach()
t=s[t]
r=o[w]
if(r<1)B.W(B.b_("glog("+r+")",null))
m[v]=(u^C.afb(t+s[r]))>>>0}return C.F7(m,0)},
KF(d){var x,w,v,u=this.a,t=u.length,s=d.a,r=s.length
if(t-r<0)return this
x=C.akY(u[0])-C.akY(s[0])
w=new Uint8Array(t)
for(v=0;v<t;++v)w[v]=u[v]
for(v=0;v<r;++v){u=w[v]
t=s[v]
if(t<1)B.W(B.b_("glog("+t+")",null))
w[v]=(u^C.afb($.ach()[t]+x))>>>0}return C.F7(w,0).KF(d)}}
C.Yk.prototype={
QD(d,e){var x,w,v,u,t=this
B.adV(t.a,1,40,"typeNumber")
B.aia(t.b,A.B6,"errorCorrectLevel",null)
for(x=t.c,w=t.d,v=y.u,u=0;u<x;++u)w.push(B.a3(x,null,!1,v))},
cD(d,e){var x
if(d>=0){x=this.c
x=x<=d||e<0||x<=e}else x=!0
if(x)throw B.c(B.b_(""+d+" , "+e,null))
x=this.d[d][e]
x.toString
return x},
xR(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
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
TD(){var x,w,v,u
for(x=0,w=0,v=0;v<8;++v){this.Ft(!0,v)
u=C.aug(this)
if(v===0||x>u){w=v
x=u}}return w},
Zj(){var x,w,v,u,t
for(x=this.c-8,w=this.d,v=8;v<x;++v){u=w[v]
if(u[6]!=null)continue
u[6]=(v&1)===0}for(t=8;t<x;++t){u=w[6]
if(u[t]!=null)continue
u[t]=(t&1)===0}},
Zi(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.Cr[this.a-1]
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
Zl(d){var x,w,v,u,t,s=C.auT(this.a)
for(x=this.d,w=this.c,v=!d,u=0;u<18;++u){t=v&&(D.e.ji(s,u)&1)===1
x[D.e.cc(u,3)][D.e.ci(u,3)+w-8-3]=t}for(u=0;u<18;++u){t=v&&(D.e.ji(s,u)&1)===1
x[D.e.ci(u,3)+w-8-3][D.e.cc(u,3)]=t}},
Zk(d,e){var x,w,v,u,t,s,r=C.auS((this.b<<3|e)>>>0)
for(x=this.d,w=this.c,v=w-15,u=!d,t=0;t<15;++t){s=u&&(D.e.ji(r,t)&1)===1
if(t<6)x[t][8]=s
else if(t<8)x[t+1][8]=s
else x[v+t][8]=s}for(t=0;t<15;++t){s=u&&(D.e.ji(r,t)&1)===1
if(t<8)x[8][w-t-1]=s
else{v=15-t-1
if(t<9)x[8][v+1]=s
else x[8][v]=s}}x[w-8][8]=u},
WU(d,e){var x,w,v,u,t,s,r,q,p,o=this.c,n=o-1
for(x=this.d,w=n,v=-1,u=7,t=0;w>0;w-=2){if(w===6)--w
for(;!0;){for(s=0;s<2;++s){r=w-s
if(x[n][r]==null){q=t<d.length&&(D.e.xU(d[t],u)&1)===1
if(C.aui(e,n,r))q=!q
x[n][r]=q;--u
if(u===-1){++t
u=7}}}n+=v
if(n<0||o<=n){n-=v
p=-v
v=p
break}}}},
Ft(d,e){var x,w,v=this
v.xR(0,0)
x=v.c-7
v.xR(x,0)
v.xR(0,x)
v.Zi()
v.Zj()
v.Zk(d,e)
x=v.a
if(x>=7)v.Zl(d)
w=v.e
v.WU(w==null?v.e=C.atx(x,v.b,v.f):w,e)}}
C.F8.prototype={}
C.XF.prototype={
Do(d,e){var x=e!=null?"FinderPatternPosition."+e.b:"any"
return"QrCodeElement."+d.b+":"+x},
a0C(d,e,f,g){if(f===A.eq)this.a.push(e)
else this.b.q(0,this.Do(f,g),e)},
Ig(d,e,f){return this.a0C(d,e,f,null)},
tt(d,e){if(d===A.eq)return D.c.gI(this.a)
else return this.b.i(0,this.Do(d,e))},
a2U(d){return this.tt(d,null)}}
C.vH.prototype={
ai(){return new C.LK(D.l)}}
C.LK.prototype={
G(d,e){var x=this,w="_validationResult",v=C.aqM(x.a.c,1,-1)
x.e=v
if(B.a(v,w).a===A.hc)x.d=B.a(x.e,w).b
else x.d=null
return new E.uB(new C.a81(x),null)},
Yi(d,e,f){var x,w,v=null,u=this.d
u.toString
this.a.toString
x=u.a
w=new C.vJ(x,u.b,v,!0,e,v,A.xu,A.xt,u,new C.XF(B.b([],y.H),B.y(y.N,y.Z)),v)
B.cy($,"_calcVersion")
w.ch=x
w.We()
this.a.toString
return new C.zc(f,D.a1,A.j3,B.iY(v,v,v,w,D.q),"qr code",v)},
T1(d,e,f){var x,w,v=null,u=this.a
u.toString
x=B.a_(v,v,D.i,v,v,v,v,v,v,v,v,v,v)
u=u.z
w=u==null?new B.M(D.e.F(1/0,e.a,e.b),D.e.F(1/0,e.c,e.d)).gfe():u
this.a.toString
return new C.zc(w,D.a1,A.j3,x,"qr code",v)}}
C.zc.prototype={
G(d,e){var x=this,w=null,v=x.c
return B.bO(w,w,B.a_(w,new B.f3(x.e,x.f,w),D.i,x.d,w,w,w,v,w,w,w,w,v),!1,w,w,!1,!1,w,w,w,w,x.r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)}}
C.vJ.prototype={
We(){var x,w,v,u="FinderPatternPosition.",t=this.cy,s=new B.aS(new B.aW())
s.scU(0,D.af)
t.Ig(0,s,A.eq)
s=new B.aS(new B.aW())
s.scU(0,D.af)
t.Ig(0,s,A.IT)
for(t=t.b,x=0;x<3;++x){w=A.D2[x]
s=new B.aS(new B.aW())
s.scU(0,D.Q)
v=u+w.b
t.q(0,"QrCodeElement.finderPatternOuter:"+v,s)
s=new B.aS(new B.aW())
s.scU(0,D.Q)
v=u+w.b
t.q(0,"QrCodeElement.finderPatternInner:"+v,s)
s=new B.aS(new B.aW())
s.scU(0,D.af)
v=u+w.b
t.q(0,"QrCodeElement.finderPatternDot:"+v,s)}},
aF(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4="_pixelSize",a5="_innerContentSize",a6="_inset"
if(a8.gfe()===0){B.bH("[QR] WARN: width or height is zero. You should set a 'size' value or nest this painter in a Widget that defines a non-zero size")
return}x=a8.gfe()
w=a2.Q
v=w.c
u=new C.a7q(v,x,0)
t=(v-1)*0
s=D.d.Lm((x-t)/v*2)/2
B.cy($,a4)
u.d=s
s=B.a(s,a4)*v+t
B.cy($,a5)
u.e=s
s=B.a(s,a5)
B.cy($,a6)
u.f=(x-s)/2
a2.wx(A.fj,a7,u)
a2.wx(A.fk,a7,u)
a2.wx(A.j7,a7,u)
r=a2.cy.a2U(A.eq)
r.saz(0,D.m)
for(x=v-7,q=a3,p=q,o=0;o<v;++o)for(n=o<7,m=o>=x,l=0;l<v;++l){s=l<7
k=s&&n
j=s&&m
i=l>=x&&n
if(k||j||i)continue
h=w.cD(l,o)?r:a3
if(h==null)continue
p=B.a(u.f,a6)+o*(B.a(u.d,a4)+0)
q=B.a(u.f,a6)+l*(B.a(u.d,a4)+0)
s=a2.W6(o,l,v)
g=s?0.5:0
s=a2.W7(o,l,v)
f=s?0.5:0
a7.ck(0,new B.t(p,q,p+(B.a(u.d,a4)+g),q+(B.a(u.d,a4)+f)),h)}x=a2.r
if(x!=null){w=x.gaP(x)
v=x.gaR(x)
e=a2.YS(a8,new B.M(w,v),a3)
w=e.a
v=(a8.a-w)/2
s=e.b
d=(a8.b-s)/2
h=new B.aS(new B.aW())
h.sa4a(!0)
h.stp(D.Ad)
a0=x.gaP(x)
a1=x.gaR(x)
a7.m6(x,D.C.K5(new B.M(a0,a1),new B.t(0,0,a0,a1)),D.C.K5(e,new B.t(v,d,v+w,d+s)),h)}},
W7(d,e,f){var x=e+1
if(x>=f)return!1
return this.Q.cD(x,d)},
W6(d,e,f){var x=d+1
if(x>=f)return!1
return this.Q.cD(e,x)},
wx(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l="_pixelSize",k="_inset",j=7*B.a(f.d,l)+6*f.c-B.a(f.d,l),i=B.a(f.d,l)/2,h=B.a(f.f,k)+B.a(f.e,"_innerContentSize")-(j+i)
if(d===A.fj)x=new B.k(B.a(f.f,k)+i,B.a(f.f,k)+i)
else{w=f.f
x=d===A.fk?new B.k(B.a(w,k)+i,h):new B.k(h,B.a(w,k)+i)}w=this.cy
v=w.tt(A.IQ,d)
v.toString
v.shi(B.a(f.d,l))
v.saz(0,D.m)
u=w.tt(A.IR,d)
u.toString
u.shi(B.a(f.d,l))
u.saz(0,new B.x(16777215))
t=w.tt(A.IS,d)
t.saz(0,D.m)
w=x.a
s=x.b
r=j-2*B.a(f.d,l)
q=w+B.a(f.d,l)
p=s+B.a(f.d,l)
o=j-B.a(f.d,l)*2-2*i
n=w+B.a(f.d,l)+i
m=s+B.a(f.d,l)+i
e.ck(0,new B.t(w,s,w+j,s+j),v)
e.ck(0,new B.t(q,p,q+r,p+r),u)
e.ck(0,new B.t(n,m,n+o,m+o),t)},
YS(d,e,f){var x=0.25*d.gfe()/e.ga4z()
return new B.M(x*e.a,x*e.b)},
e9(d){var x,w=this,v="_calcVersion"
if(d instanceof C.vJ){if(w.c===d.c)if(B.a(w.ch,v)===B.a(d.ch,v))if(w.Q===d.Q)if(w.r==d.r)x=!w.y.k(0,d.y)||!w.z.k(0,d.z)
else x=!0
else x=!0
else x=!0
else x=!0
return x}return!0}}
C.a7q.prototype={}
C.mQ.prototype={
h(d){return"QrCodeElement."+this.b}}
C.ok.prototype={
h(d){return"FinderPatternPosition."+this.b}}
C.Ym.prototype={
h(d){return"QrEyeShape."+this.b}}
C.Yl.prototype={
h(d){return"QrDataModuleShape."+this.b}}
C.F6.prototype={
gv(d){return(B.eC(A.IV)^D.e.gv(4278190080))>>>0},
k(d,e){var x
if(e==null)return!1
if(e instanceof C.F6){x=D.m.k(0,D.m)
return x}return!1}}
C.F5.prototype={
gv(d){return(B.eC(A.IU)^D.e.gv(4278190080))>>>0},
k(d,e){var x
if(e==null)return!1
if(e instanceof C.F5){x=D.m.k(0,D.m)
return x}return!1}}
C.vK.prototype={}
C.vL.prototype={
h(d){return"QrValidationStatus."+this.b}}
var z=a.updateTypes([])
C.a81.prototype={
$2(d,e){var x,w="_validationResult",v=this.a
if(B.a(v.e,w).a!==A.hc)return v.T1(d,e,B.a(v.e,w).c)
x=v.a.z
if(x==null)x=new B.M(D.e.F(1/0,e.a,e.b),D.e.F(1/0,e.c,e.d)).gfe()
v.a.toString
v=v.Yi(d,null,x)
return v},
$S:352};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.H,[C.LI,C.pb,C.ug,C.Yn,C.Yk,C.F8,C.XF,C.a7q,C.F6,C.F5,C.vK])
v(C.vF,C.LI)
v(C.vH,B.L)
v(C.LK,B.a0)
v(C.a81,B.kj)
v(C.zc,B.an)
v(C.vJ,B.o9)
w(B.ya,[C.mQ,C.ok,C.Ym,C.Yl,C.vL])
x(C.LI,B.D)})()
B.rh(b.typeUniverse,JSON.parse('{"vF":{"D":["C"],"u":["C"],"F":["C"],"n":["C"],"D.E":"C"},"ug":{"bA":[]},"vH":{"L":[],"h":[]},"LK":{"a0":["vH"]},"zc":{"an":[],"h":[]},"vJ":{"ad":[]}}'))
var y=(function rtii(){var x=B.a7
return{L:x("bA"),S:x("q<u<m>>"),Q:x("q<u<C?>>"),H:x("q<p2>"),b:x("q<pb>"),J:x("q<F8>"),t:x("q<m>"),Z:x("p2"),N:x("l"),T:x("u<m>?"),u:x("C?")}})();(function constants(){var x=a.makeConstList
A.IU=new C.Yl(0,"square")
A.xt=new C.F5()
A.IV=new C.Ym(0,"square")
A.xu=new C.F6()
A.j3=new B.aB(10,10,10,10)
A.fj=new C.ok(0,"topLeft")
A.j7=new C.ok(1,"topRight")
A.fk=new C.ok(2,"bottomLeft")
A.B6=B.b(x([1,0,3,2]),y.t)
A.C8=B.b(x([6,18]),y.t)
A.C9=B.b(x([6,22]),y.t)
A.Cc=B.b(x([6,26]),y.t)
A.Ci=B.b(x([6,30]),y.t)
A.Co=B.b(x([6,34]),y.t)
A.Ca=B.b(x([6,22,38]),y.t)
A.Cb=B.b(x([6,24,42]),y.t)
A.Cd=B.b(x([6,26,46]),y.t)
A.Ch=B.b(x([6,28,50]),y.t)
A.Cj=B.b(x([6,30,54]),y.t)
A.Cn=B.b(x([6,32,58]),y.t)
A.Cp=B.b(x([6,34,62]),y.t)
A.Ce=B.b(x([6,26,46,66]),y.t)
A.Cf=B.b(x([6,26,48,70]),y.t)
A.Cg=B.b(x([6,26,50,74]),y.t)
A.Ck=B.b(x([6,30,54,78]),y.t)
A.Cl=B.b(x([6,30,56,82]),y.t)
A.Cm=B.b(x([6,30,58,86]),y.t)
A.Cq=B.b(x([6,34,62,90]),y.t)
A.FN=B.b(x([6,28,50,72,94]),y.t)
A.FO=B.b(x([6,26,50,74,98]),y.t)
A.FP=B.b(x([6,30,54,78,102]),y.t)
A.FQ=B.b(x([6,28,54,80,106]),y.t)
A.FR=B.b(x([6,32,58,84,110]),y.t)
A.FS=B.b(x([6,30,58,86,114]),y.t)
A.FT=B.b(x([6,34,62,90,118]),y.t)
A.Dx=B.b(x([6,26,50,74,98,122]),y.t)
A.Dy=B.b(x([6,30,54,78,102,126]),y.t)
A.Dz=B.b(x([6,26,52,78,104,130]),y.t)
A.Eg=B.b(x([6,30,56,82,108,134]),y.t)
A.Er=B.b(x([6,34,60,86,112,138]),y.t)
A.EC=B.b(x([6,30,58,86,114,142]),y.t)
A.EN=B.b(x([6,34,62,90,118,146]),y.t)
A.Ct=B.b(x([6,30,54,78,102,126,150]),y.t)
A.Cu=B.b(x([6,24,50,76,102,128,154]),y.t)
A.Cv=B.b(x([6,28,54,80,106,132,158]),y.t)
A.Cw=B.b(x([6,32,58,84,110,136,162]),y.t)
A.Cx=B.b(x([6,26,54,82,110,138,166]),y.t)
A.Cy=B.b(x([6,30,58,86,114,142,170]),y.t)
A.Cr=B.b(x([D.Dc,A.C8,A.C9,A.Cc,A.Ci,A.Co,A.Ca,A.Cb,A.Cd,A.Ch,A.Cj,A.Cn,A.Cp,A.Ce,A.Cf,A.Cg,A.Ck,A.Cl,A.Cm,A.Cq,A.FN,A.FO,A.FP,A.FQ,A.FR,A.FS,A.FT,A.Dx,A.Dy,A.Dz,A.Eg,A.Er,A.EC,A.EN,A.Ct,A.Cu,A.Cv,A.Cw,A.Cx,A.Cy]),y.S)
A.D2=B.b(x([A.fj,A.j7,A.fk]),B.a7("q<ok>"))
A.Bb=B.b(x([1,26,19]),y.t)
A.Ba=B.b(x([1,26,16]),y.t)
A.B9=B.b(x([1,26,13]),y.t)
A.Bc=B.b(x([1,26,9]),y.t)
A.Bg=B.b(x([1,44,34]),y.t)
A.Bf=B.b(x([1,44,28]),y.t)
A.Be=B.b(x([1,44,22]),y.t)
A.Bd=B.b(x([1,44,16]),y.t)
A.Bi=B.b(x([1,70,55]),y.t)
A.Bh=B.b(x([1,70,44]),y.t)
A.Bp=B.b(x([2,35,17]),y.t)
A.Bo=B.b(x([2,35,13]),y.t)
A.B7=B.b(x([1,100,80]),y.t)
A.Br=B.b(x([2,50,32]),y.t)
A.Bq=B.b(x([2,50,24]),y.t)
A.BT=B.b(x([4,25,9]),y.t)
A.B8=B.b(x([1,134,108]),y.t)
A.Bs=B.b(x([2,67,43]),y.t)
A.EY=B.b(x([2,33,15,2,34,16]),y.t)
A.F8=B.b(x([2,33,11,2,34,12]),y.t)
A.Bt=B.b(x([2,86,68]),y.t)
A.BW=B.b(x([4,43,27]),y.t)
A.BV=B.b(x([4,43,19]),y.t)
A.BU=B.b(x([4,43,15]),y.t)
A.Bu=B.b(x([2,98,78]),y.t)
A.BX=B.b(x([4,49,31]),y.t)
A.Fj=B.b(x([2,32,14,4,33,15]),y.t)
A.Fu=B.b(x([4,39,13,1,40,14]),y.t)
A.Bm=B.b(x([2,121,97]),y.t)
A.DA=B.b(x([2,60,38,2,61,39]),y.t)
A.DL=B.b(x([4,40,18,2,41,19]),y.t)
A.DW=B.b(x([4,40,14,2,41,15]),y.t)
A.Bn=B.b(x([2,146,116]),y.t)
A.E6=B.b(x([3,58,36,2,59,37]),y.t)
A.Ea=B.b(x([4,36,16,4,37,17]),y.t)
A.Eb=B.b(x([4,36,12,4,37,13]),y.t)
A.Ec=B.b(x([2,86,68,2,87,69]),y.t)
A.Ed=B.b(x([4,69,43,1,70,44]),y.t)
A.Ee=B.b(x([6,43,19,2,44,20]),y.t)
A.Ef=B.b(x([6,43,15,2,44,16]),y.t)
A.BR=B.b(x([4,101,81]),y.t)
A.Eh=B.b(x([1,80,50,4,81,51]),y.t)
A.Ei=B.b(x([4,50,22,4,51,23]),y.t)
A.Ej=B.b(x([3,36,12,8,37,13]),y.t)
A.Ek=B.b(x([2,116,92,2,117,93]),y.t)
A.El=B.b(x([6,58,36,2,59,37]),y.t)
A.Em=B.b(x([4,46,20,6,47,21]),y.t)
A.En=B.b(x([7,42,14,4,43,15]),y.t)
A.BS=B.b(x([4,133,107]),y.t)
A.Eo=B.b(x([8,59,37,1,60,38]),y.t)
A.Ep=B.b(x([8,44,20,4,45,21]),y.t)
A.Eq=B.b(x([12,33,11,4,34,12]),y.t)
A.Es=B.b(x([3,145,115,1,146,116]),y.t)
A.Et=B.b(x([4,64,40,5,65,41]),y.t)
A.Eu=B.b(x([11,36,16,5,37,17]),y.t)
A.Ev=B.b(x([11,36,12,5,37,13]),y.t)
A.Ew=B.b(x([5,109,87,1,110,88]),y.t)
A.Ex=B.b(x([5,65,41,5,66,42]),y.t)
A.Ey=B.b(x([5,54,24,7,55,25]),y.t)
A.B2=B.b(x([11,36,12]),y.t)
A.Ez=B.b(x([5,122,98,1,123,99]),y.t)
A.EA=B.b(x([7,73,45,3,74,46]),y.t)
A.EB=B.b(x([15,43,19,2,44,20]),y.t)
A.ED=B.b(x([3,45,15,13,46,16]),y.t)
A.EE=B.b(x([1,135,107,5,136,108]),y.t)
A.EF=B.b(x([10,74,46,1,75,47]),y.t)
A.EG=B.b(x([1,50,22,15,51,23]),y.t)
A.EH=B.b(x([2,42,14,17,43,15]),y.t)
A.EI=B.b(x([5,150,120,1,151,121]),y.t)
A.EJ=B.b(x([9,69,43,4,70,44]),y.t)
A.EK=B.b(x([17,50,22,1,51,23]),y.t)
A.EL=B.b(x([2,42,14,19,43,15]),y.t)
A.EM=B.b(x([3,141,113,4,142,114]),y.t)
A.EO=B.b(x([3,70,44,11,71,45]),y.t)
A.EP=B.b(x([17,47,21,4,48,22]),y.t)
A.EQ=B.b(x([9,39,13,16,40,14]),y.t)
A.ER=B.b(x([3,135,107,5,136,108]),y.t)
A.ES=B.b(x([3,67,41,13,68,42]),y.t)
A.ET=B.b(x([15,54,24,5,55,25]),y.t)
A.EU=B.b(x([15,43,15,10,44,16]),y.t)
A.EV=B.b(x([4,144,116,4,145,117]),y.t)
A.B4=B.b(x([17,68,42]),y.t)
A.EW=B.b(x([17,50,22,6,51,23]),y.t)
A.EX=B.b(x([19,46,16,6,47,17]),y.t)
A.EZ=B.b(x([2,139,111,7,140,112]),y.t)
A.B5=B.b(x([17,74,46]),y.t)
A.F_=B.b(x([7,54,24,16,55,25]),y.t)
A.Bv=B.b(x([34,37,13]),y.t)
A.F0=B.b(x([4,151,121,5,152,122]),y.t)
A.F1=B.b(x([4,75,47,14,76,48]),y.t)
A.F2=B.b(x([11,54,24,14,55,25]),y.t)
A.F3=B.b(x([16,45,15,14,46,16]),y.t)
A.F4=B.b(x([6,147,117,4,148,118]),y.t)
A.F5=B.b(x([6,73,45,14,74,46]),y.t)
A.F6=B.b(x([11,54,24,16,55,25]),y.t)
A.F7=B.b(x([30,46,16,2,47,17]),y.t)
A.F9=B.b(x([8,132,106,4,133,107]),y.t)
A.Fa=B.b(x([8,75,47,13,76,48]),y.t)
A.Fb=B.b(x([7,54,24,22,55,25]),y.t)
A.Fc=B.b(x([22,45,15,13,46,16]),y.t)
A.Fd=B.b(x([10,142,114,2,143,115]),y.t)
A.Fe=B.b(x([19,74,46,4,75,47]),y.t)
A.Ff=B.b(x([28,50,22,6,51,23]),y.t)
A.Fg=B.b(x([33,46,16,4,47,17]),y.t)
A.Fh=B.b(x([8,152,122,4,153,123]),y.t)
A.Fi=B.b(x([22,73,45,3,74,46]),y.t)
A.Fk=B.b(x([8,53,23,26,54,24]),y.t)
A.Fl=B.b(x([12,45,15,28,46,16]),y.t)
A.Fm=B.b(x([3,147,117,10,148,118]),y.t)
A.Fn=B.b(x([3,73,45,23,74,46]),y.t)
A.Fo=B.b(x([4,54,24,31,55,25]),y.t)
A.Fp=B.b(x([11,45,15,31,46,16]),y.t)
A.Fq=B.b(x([7,146,116,7,147,117]),y.t)
A.Fr=B.b(x([21,73,45,7,74,46]),y.t)
A.Fs=B.b(x([1,53,23,37,54,24]),y.t)
A.Ft=B.b(x([19,45,15,26,46,16]),y.t)
A.Fv=B.b(x([5,145,115,10,146,116]),y.t)
A.Fw=B.b(x([19,75,47,10,76,48]),y.t)
A.Fx=B.b(x([15,54,24,25,55,25]),y.t)
A.Fy=B.b(x([23,45,15,25,46,16]),y.t)
A.Fz=B.b(x([13,145,115,3,146,116]),y.t)
A.FA=B.b(x([2,74,46,29,75,47]),y.t)
A.FB=B.b(x([42,54,24,1,55,25]),y.t)
A.FC=B.b(x([23,45,15,28,46,16]),y.t)
A.B3=B.b(x([17,145,115]),y.t)
A.FD=B.b(x([10,74,46,23,75,47]),y.t)
A.FE=B.b(x([10,54,24,35,55,25]),y.t)
A.DB=B.b(x([19,45,15,35,46,16]),y.t)
A.DC=B.b(x([17,145,115,1,146,116]),y.t)
A.DD=B.b(x([14,74,46,21,75,47]),y.t)
A.DE=B.b(x([29,54,24,19,55,25]),y.t)
A.DF=B.b(x([11,45,15,46,46,16]),y.t)
A.DG=B.b(x([13,145,115,6,146,116]),y.t)
A.DH=B.b(x([14,74,46,23,75,47]),y.t)
A.DI=B.b(x([44,54,24,7,55,25]),y.t)
A.DJ=B.b(x([59,46,16,1,47,17]),y.t)
A.DK=B.b(x([12,151,121,7,152,122]),y.t)
A.DM=B.b(x([12,75,47,26,76,48]),y.t)
A.DN=B.b(x([39,54,24,14,55,25]),y.t)
A.DO=B.b(x([22,45,15,41,46,16]),y.t)
A.DP=B.b(x([6,151,121,14,152,122]),y.t)
A.DQ=B.b(x([6,75,47,34,76,48]),y.t)
A.DR=B.b(x([46,54,24,10,55,25]),y.t)
A.DS=B.b(x([2,45,15,64,46,16]),y.t)
A.DT=B.b(x([17,152,122,4,153,123]),y.t)
A.DU=B.b(x([29,74,46,14,75,47]),y.t)
A.DV=B.b(x([49,54,24,10,55,25]),y.t)
A.DX=B.b(x([24,45,15,46,46,16]),y.t)
A.DY=B.b(x([4,152,122,18,153,123]),y.t)
A.DZ=B.b(x([13,74,46,32,75,47]),y.t)
A.E_=B.b(x([48,54,24,14,55,25]),y.t)
A.E0=B.b(x([42,45,15,32,46,16]),y.t)
A.E1=B.b(x([20,147,117,4,148,118]),y.t)
A.E2=B.b(x([40,75,47,7,76,48]),y.t)
A.E3=B.b(x([43,54,24,22,55,25]),y.t)
A.E4=B.b(x([10,45,15,67,46,16]),y.t)
A.E5=B.b(x([19,148,118,6,149,119]),y.t)
A.E7=B.b(x([18,75,47,31,76,48]),y.t)
A.E8=B.b(x([34,54,24,34,55,25]),y.t)
A.E9=B.b(x([20,45,15,61,46,16]),y.t)
A.e0=B.b(x([A.Bb,A.Ba,A.B9,A.Bc,A.Bg,A.Bf,A.Be,A.Bd,A.Bi,A.Bh,A.Bp,A.Bo,A.B7,A.Br,A.Bq,A.BT,A.B8,A.Bs,A.EY,A.F8,A.Bt,A.BW,A.BV,A.BU,A.Bu,A.BX,A.Fj,A.Fu,A.Bm,A.DA,A.DL,A.DW,A.Bn,A.E6,A.Ea,A.Eb,A.Ec,A.Ed,A.Ee,A.Ef,A.BR,A.Eh,A.Ei,A.Ej,A.Ek,A.El,A.Em,A.En,A.BS,A.Eo,A.Ep,A.Eq,A.Es,A.Et,A.Eu,A.Ev,A.Ew,A.Ex,A.Ey,A.B2,A.Ez,A.EA,A.EB,A.ED,A.EE,A.EF,A.EG,A.EH,A.EI,A.EJ,A.EK,A.EL,A.EM,A.EO,A.EP,A.EQ,A.ER,A.ES,A.ET,A.EU,A.EV,A.B4,A.EW,A.EX,A.EZ,A.B5,A.F_,A.Bv,A.F0,A.F1,A.F2,A.F3,A.F4,A.F5,A.F6,A.F7,A.F9,A.Fa,A.Fb,A.Fc,A.Fd,A.Fe,A.Ff,A.Fg,A.Fh,A.Fi,A.Fk,A.Fl,A.Fm,A.Fn,A.Fo,A.Fp,A.Fq,A.Fr,A.Fs,A.Ft,A.Fv,A.Fw,A.Fx,A.Fy,A.Fz,A.FA,A.FB,A.FC,A.B3,A.FD,A.FE,A.DB,A.DC,A.DD,A.DE,A.DF,A.DG,A.DH,A.DI,A.DJ,A.DK,A.DM,A.DN,A.DO,A.DP,A.DQ,A.DR,A.DS,A.DT,A.DU,A.DV,A.DX,A.DY,A.DZ,A.E_,A.E0,A.E1,A.E2,A.E3,A.E4,A.E5,A.E7,A.E8,A.E9]),y.S)
A.IQ=new C.mQ(0,"finderPatternOuter")
A.IR=new C.mQ(1,"finderPatternInner")
A.IS=new C.mQ(2,"finderPatternDot")
A.eq=new C.mQ(3,"codePixel")
A.IT=new C.mQ(4,"codePixelEmpty")
A.hc=new C.vL(0,"valid")
A.IW=new C.vL(1,"contentTooLong")
A.IX=new C.vL(2,"error")
A.a5=new B.r(!0,D.m,null,null,null,null,14,D.x,null,null,null,null,null,null,null,null,null,D.h,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"az_","ach",()=>C.atz())
x($,"ayI","afH",()=>C.aty())})()}
$__dart_deferred_initializers__["60Sd6kymcJ91noSgfBGqJVR+Tio="] = $__dart_deferred_initializers__.current
