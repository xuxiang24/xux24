self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={vQ:function vQ(d){this.a=d
this.b=0},LX:function LX(){},pm:function pm(d){this.b=d},uE:function uE(d){this.c=d},
Fq(d,e){var x,w,v=d.length,u=0
while(!0){if(!(u<v&&d[u]===0))break;++u}v-=u
x=new Uint8Array(v+e)
for(w=0;w<v;++w)x[w]=d[w+u]
return new C.YF(x)},
YF:function YF(d){this.a=d},
ait(d,e){var x=B.b([],y.b)
x=new C.YC(d,e,d*4+17,B.b([],y.Q),x)
x.QX(d,e)
return x},
at_(d,e){var x,w,v,u,t,s,r,q
for(x=y.t,w=1;w<40;++w){v=C.aiu(w,d)
u=new C.vQ(B.b([],x))
for(t=v.length,s=0,r=0;r<t;++r)s+=v[r].b
for(r=0;r<1;++r){q=e[r]
u.jy(0,4,4)
u.jy(0,q.b.length,C.akt(4,w))
q.mC(0,u)}if(u.b<=s*8)break}return w},
avG(d,e,f){var x,w,v,u,t,s=C.aiu(d,e),r=new C.vQ(B.b([],y.t))
for(x=0;x<f.length;++x){w=f[x]
r.jy(0,4,4)
r.jy(0,w.b.length,C.akt(4,d))
w.mC(0,r)}for(v=s.length,u=0,x=0;x<v;++x)u+=s[x].b
t=u*8
v=r.b
if(v>t)throw B.c(new C.uE("Input too long. "+v+" > "+t))
if(v+4<=t)r.jy(0,0,4)
for(;D.e.cf(r.b,8)!==0;)r.Jx(!1)
for(;!0;){if(r.b>=t)break
r.jy(0,236,8)
if(r.b>=t)break
r.jy(0,17,8)}return C.avF(r,s)},
avF(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=y.T,g=B.a6(e.length,null,!1,h),f=B.a6(e.length,null,!1,h)
for(h=d.a,x=0,w=0,v=0,u=0;u<e.length;++u){t=e[u]
s=t.b
r=t.a-s
w=Math.max(w,s)
v=Math.max(v,r)
q=new Uint8Array(s)
g[u]=q
for(p=0;p<s;++p)q[p]=h[p+x]&255
x+=s
o=C.avS(r)
t=o.a.length-1
n=C.Fq(q,t).Ja(o)
m=new Uint8Array(t)
f[u]=m
for(l=n.a,k=l.length,p=0;p<t;++p){j=p+k-t
m[p]=j>=0?l[j]:0}}i=B.b([],y.t)
for(p=0;p<w;++p)for(u=0;u<e.length;++u){h=g[u]
if(p<h.length)i.push(h[p])}for(p=0;p<v;++p)for(u=0;u<e.length;++u){h=f[u]
if(p<h.length)i.push(h[p])}return i},
awp(d,e,f){var x
switch(d){case 0:return(e+f&1)===0
case 1:return(e&1)===0
case 2:return D.e.cf(f,3)===0
case 3:return D.e.cf(e+f,3)===0
case 4:return(D.e.cY(e,2)+D.e.cY(f,3)&1)===0
case 5:x=e*f
return D.e.cf(x,2)+D.e.cf(x,3)===0
case 6:x=e*f
return(D.e.cf(x,2)+D.e.cf(x,3)&1)===0
case 7:return(D.e.cf(e*f,3)+D.e.cf(e+f,2)&1)===0
default:throw B.c(B.b0("bad maskPattern:"+d,null))}},
akt(d,e){var x=null
if(1<=e&&e<10)switch(d){case 1:return 10
case 2:return 9
case 4:return 8
case 8:return 8
default:throw B.c(B.b0("mode:"+d,x))}else if(e<27)switch(d){case 1:return 12
case 2:return 11
case 4:return 16
case 8:return 10
default:throw B.c(B.b0("mode:"+d,x))}else if(e<41)switch(d){case 1:return 14
case 2:return 13
case 4:return 16
case 8:return 12
default:throw B.c(B.b0("mode:"+d,x))}else throw B.c(B.b0("type:"+e,x))},
awm(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=d.c
for(x=0,w=0;w<k;++w)for(v=0;v<k;++v){u=d.cw(w,v)
for(t=0,s=-1;s<=1;++s){r=w+s
if(r<0||k<=r)continue
for(q=s===0,p=-1;p<=1;++p){o=v+p
if(o<0||k<=o)continue
if(q&&p===0)continue
if(u===d.cw(r,o))++t}}if(t>5)x+=3+t-5}for(r=k-1,w=0;w<r;w=n)for(n=w+1,v=0;v<r;){m=d.cw(w,v)?1:0
if(d.cw(n,v))++m;++v
if(d.cw(w,v))++m
if(d.cw(n,v))++m
if(m===0||m===4)x+=3}for(r=k-6,w=0;w<k;++w)for(v=0;v<r;++v)if(d.cw(w,v)&&!d.cw(w,v+1)&&d.cw(w,v+2)&&d.cw(w,v+3)&&d.cw(w,v+4)&&!d.cw(w,v+5)&&d.cw(w,v+6))x+=40
for(v=0;v<k;++v)for(w=0;w<r;++w)if(d.cw(w,v)&&!d.cw(w+1,v)&&d.cw(w+2,v)&&d.cw(w+3,v)&&d.cw(w+4,v)&&!d.cw(w+5,v)&&d.cw(w+6,v))x+=40
for(v=0,l=0;v<k;++v)for(w=0;w<k;++w)if(d.cw(w,v))++l
return x+Math.abs(100*l/k/k-50)/5*10},
avS(d){var x,w=y.t,v=C.Fq(B.b([1],w),0)
for(x=0;x<d;++x)v=v.cT(0,C.Fq(B.b([1,C.aeQ(x)],w),0))
return v},
YC:function YC(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
aiu(d,e){var x,w,v,u,t,s,r=C.aw1(d,e),q=r.length/3|0,p=B.b([],y.J)
for(x=0;x<q;++x){w=x*3
v=r[w]
u=r[w+1]
t=r[w+2]
for(s=0;s<v;++s)p.push(new C.Fr(u,t))}return p},
aw1(d,e){switch(e){case 1:return A.di[(d-1)*4]
case 0:return A.di[(d-1)*4+1]
case 3:return A.di[(d-1)*4+2]
case 2:return A.di[(d-1)*4+3]
default:throw B.c(B.b0("bad rs block @ typeNumber: "+d+"/errorCorrectLevel:"+e,null))}},
Fr:function Fr(d,e){this.a=d
this.b=e},
XY:function XY(d,e){this.a=d
this.b=e},
vT(d,e){return new C.vS(d,e,null)},
vS:function vS(d,e,f){this.c=d
this.z=e
this.a=f},
LZ:function LZ(d){var _=this
_.d=null
_.f=_.e=$
_.a=null
_.b=d
_.c=null},
a7B:function a7B(d){this.a=d},
zm:function zm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
vU:function vU(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
a71:function a71(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=$},
mQ:function mQ(d,e){this.a=d
this.b=e},
ov:function ov(d,e){this.a=d
this.b=e},
YE:function YE(d,e){this.a=d
this.b=e},
YD:function YD(d,e){this.a=d
this.b=e},
Fp:function Fp(){},
Fo:function Fo(){},
at0(d,e,f){var x,w,v,u,t,s=B.bJ("qrCode")
try{if(f!==-1){s.sc1(C.ait(f,e))
v=s.bm()
u=D.aU.dS(d)
v.f.push(new C.pm(u))
v.e=null}else{v=C.ait(C.at_(e,B.b([new C.pm(D.aU.dS(d))],y.b)),e)
v.f.push(new C.pm(D.aU.dS(d)))
v.e=null
s.sc1(v)}v=s.bm()
u=v.Ut()
v.Eg(!1,u)
v=s.bm()
return new C.vV(A.fq,v,null)}catch(t){v=B.ac(t)
if(v instanceof C.uE){x=v
return new C.vV(A.K1,null,x)}else if(y.L.b(v)){w=v
return new C.vV(A.K2,null,w)}else throw t}},
vV:function vV(d,e,f){this.a=d
this.b=e
this.c=f},
vW:function vW(d,e){this.a=d
this.b=e},
al5(d){if(d<1)throw B.c(B.b0("glog("+d+")",null))
return $.abX()[d]},
aeQ(d){for(;d<0;)d+=255
for(;d>=256;)d-=255
return $.afh()[d]},
avH(){var x,w=new Uint8Array(256)
for(x=0;x<8;++x)w[x]=D.e.a_3(1,x)
for(x=8;x<256;++x)w[x]=(w[x-4]^w[x-5]^w[x-6]^w[x-8])>>>0
return w},
avI(){var x,w=new Uint8Array(256)
for(x=0;x<255;++x)w[$.afh()[x]]=x
return w},
awY(d){var x,w=d<<10>>>0
for(x=w;C.nB(x)-C.nB(1335)>=0;)x=(x^D.e.uA(1335,C.nB(x)-C.nB(1335)))>>>0
return((w|x)^21522)>>>0},
awZ(d){var x,w=d<<12>>>0
for(x=w;C.nB(x)-C.nB(7973)>=0;)x=(x^D.e.uA(7973,C.nB(x)-C.nB(7973)))>>>0
return(w|x)>>>0},
nB(d){var x
for(x=0;d!==0;){++x
d=d>>>1}return x}},B,D,A,E
a.setFunctionNamesIfNecessary([C])
C=a.updateHolder(c[6],C)
B=c[0]
D=c[2]
A=c[11]
E=c[8]
C.vQ.prototype={
q(d,e,f){return B.a1(B.E("cannot change"))},
h(d,e){return(D.e.wZ(this.a[D.e.cY(e,8)],7-D.e.cf(e,8))&1)===1},
gl(d){return this.b},
sl(d,e){B.a1(B.E("Cannot change"))},
jy(d,e,f){var x
for(x=0;x<f;++x)this.Jx((D.e.LJ(e,f-x-1)&1)===1)},
Jx(d){var x=this,w=D.e.cY(x.b,8),v=x.a
if(v.length<=w)v.push(0)
if(d)v[w]=(v[w]|D.e.iZ(128,D.e.cf(x.b,8)))>>>0;++x.b},
$iG:1,
$in:1,
$iu:1}
C.LX.prototype={}
C.pm.prototype={
gl(d){return this.b.length},
mC(d,e){var x,w,v
for(x=this.b,w=x.length,v=0;v<w;++v)e.jy(0,x[v],8)}}
C.uE.prototype={
j(d){return"QrInputTooLongException: "+this.c},
$ibz:1}
C.YF.prototype={
h(d,e){return this.a[e]},
gl(d){return this.a.length},
cT(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.length,o=e.a,n=o.length,m=new Uint8Array(p+n-1)
for(x=0;x<p;++x)for(w=0;w<n;++w){v=x+w
u=m[v]
t=q[x]
if(t<1)B.a1(B.b0("glog("+t+")",null))
s=$.abX()
t=s[t]
r=o[w]
if(r<1)B.a1(B.b0("glog("+r+")",null))
m[v]=(u^C.aeQ(t+s[r]))>>>0}return C.Fq(m,0)},
Ja(d){var x,w,v,u=this.a,t=u.length,s=d.a,r=s.length
if(t-r<0)return this
x=C.al5(u[0])-C.al5(s[0])
w=new Uint8Array(t)
for(v=0;v<t;++v)w[v]=u[v]
for(v=0;v<r;++v){u=w[v]
t=s[v]
if(t<1)B.a1(B.b0("glog("+t+")",null))
w[v]=(u^C.aeQ($.abX()[t]+x))>>>0}return C.Fq(w,0).Ja(d)}}
C.YC.prototype={
QX(d,e){var x,w,v,u,t=this
B.adE(t.a,1,40,"typeNumber")
B.aix(t.b,A.C8,"errorCorrectLevel",null)
for(x=t.c,w=t.d,v=y.u,u=0;u<x;++u)w.push(B.a6(x,null,!1,v))},
cw(d,e){var x
if(d>=0){x=this.c
x=x<=d||e<0||x<=e}else x=!0
if(x)throw B.c(B.b0(""+d+" , "+e,null))
x=this.d[d][e]
x.toString
return x},
wX(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
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
Ut(){var x,w,v,u
for(x=0,w=0,v=0;v<8;++v){this.Eg(!0,v)
u=C.awm(this)
if(v===0||x>u){w=v
x=u}}return w},
a_0(){var x,w,v,u,t
for(x=this.c-8,w=this.d,v=8;v<x;++v){u=w[v]
if(u[6]!=null)continue
u[6]=(v&1)===0}for(t=8;t<x;++t){u=w[6]
if(u[t]!=null)continue
u[t]=(t&1)===0}},
a__(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.Ds[this.a-1]
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
a_2(d){var x,w,v,u,t,s=C.awZ(this.a)
for(x=this.d,w=this.c,v=!d,u=0;u<18;++u){t=v&&(D.e.iZ(s,u)&1)===1
x[D.e.cY(u,3)][D.e.cf(u,3)+w-8-3]=t}for(u=0;u<18;++u){t=v&&(D.e.iZ(s,u)&1)===1
x[D.e.cf(u,3)+w-8-3][D.e.cY(u,3)]=t}},
a_1(d,e){var x,w,v,u,t,s,r=C.awY((this.b<<3|e)>>>0)
for(x=this.d,w=this.c,v=w-15,u=!d,t=0;t<15;++t){s=u&&(D.e.iZ(r,t)&1)===1
if(t<6)x[t][8]=s
else if(t<8)x[t+1][8]=s
else x[v+t][8]=s}for(t=0;t<15;++t){s=u&&(D.e.iZ(r,t)&1)===1
if(t<8)x[8][w-t-1]=s
else{v=15-t-1
if(t<9)x[8][v+1]=s
else x[8][v]=s}}x[w-8][8]=u},
XG(d,e){var x,w,v,u,t,s,r,q,p,o=this.c,n=o-1
for(x=this.d,w=n,v=-1,u=7,t=0;w>0;w-=2){if(w===6)--w
for(;!0;){for(s=0;s<2;++s){r=w-s
if(x[n][r]==null){q=t<d.length&&(D.e.wZ(d[t],u)&1)===1
if(C.awp(e,n,r))q=!q
x[n][r]=q;--u
if(u===-1){++t
u=7}}}n+=v
if(n<0||o<=n){n-=v
p=-v
v=p
break}}}},
Eg(d,e){var x,w,v=this
v.wX(0,0)
x=v.c-7
v.wX(x,0)
v.wX(0,x)
v.a__()
v.a_0()
v.a_1(d,e)
x=v.a
if(x>=7)v.a_2(d)
w=v.e
v.XG(w==null?v.e=C.avG(x,v.b,v.f):w,e)}}
C.Fr.prototype={}
C.XY.prototype={
Ck(d,e){var x=e!=null?"FinderPatternPosition."+e.b:"any"
return"QrCodeElement."+d.b+":"+x},
a1h(d,e,f,g){if(f===A.dN)this.a.push(e)
else this.b.q(0,this.Ck(f,g),e)},
GR(d,e,f){return this.a1h(d,e,f,null)},
t3(d,e){if(d===A.dN)return D.c.gI(this.a)
else return this.b.h(0,this.Ck(d,e))},
a3B(d){return this.t3(d,null)}}
C.vS.prototype={
ag(){return new C.LZ(D.k)}}
C.LZ.prototype={
H(d,e){var x=this,w="_validationResult",v=C.at0(x.a.c,1,-1)
x.e=v
if(B.a(v,w).a===A.fq)x.d=B.a(x.e,w).b
else x.d=null
return new E.uY(new C.a7B(x),null)},
Z_(d,e,f){var x,w,v=null,u=this.d
u.toString
this.a.toString
x=u.a
w=new C.vU(x,u.b,v,!0,e,v,A.wu,A.wt,u,new C.XY(B.b([],y.H),B.w(y.N,y.Z)),v)
B.d2($,"_calcVersion")
w.ch=x
w.X3()
this.a.toString
return new C.zm(f,D.V,A.i8,B.j_(v,v,v,w,D.q),"qr code",v)},
TT(d,e,f){var x,w,v=null,u=this.a
u.toString
x=B.a2(v,v,D.h,v,v,v,v,v,v,v,v,v,v)
u=u.z
w=u==null?new B.V(D.e.G(1/0,e.a,e.b),D.e.G(1/0,e.c,e.d)).gf4():u
this.a.toString
return new C.zm(w,D.V,A.i8,x,"qr code",v)}}
C.zm.prototype={
H(d,e){var x=this,w=null,v=x.c
return B.bH(w,w,B.a2(w,new B.f0(x.e,x.f,w),D.h,x.d,w,w,w,v,w,w,w,w,v),!1,w,w,!1,!1,w,w,w,w,x.r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)}}
C.vU.prototype={
X3(){var x,w,v,u,t="FinderPatternPosition.",s=this.cy,r=B.b2()
r.scP(0,D.aM)
s.GR(0,r,A.dN)
r=B.b2()
r.scP(0,D.aM)
s.GR(0,r,A.JZ)
for(x=0;x<3;++x){w=A.E4[x]
r=B.b2()
r.scP(0,D.ag)
v=s.b
u=t+w.b
v.q(0,"QrCodeElement.finderPatternOuter:"+u,r)
r=B.b2()
r.scP(0,D.ag)
u=t+w.b
v.q(0,"QrCodeElement.finderPatternInner:"+u,r)
r=B.b2()
r.scP(0,D.aM)
u=t+w.b
v.q(0,"QrCodeElement.finderPatternDot:"+u,r)}},
aJ(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4="_pixelSize",a5="_innerContentSize",a6="_inset"
if(a8.gf4()===0){B.by("[QR] WARN: width or height is zero. You should set a 'size' value or nest this painter in a Widget that defines a non-zero size")
return}x=a8.gf4()
w=a2.Q
v=w.c
u=new C.a71(v,x,0)
t=(v-1)*0
s=D.d.a7j((x-t)/v*2)/2
B.d2($,a4)
u.d=s
s=B.a(s,a4)*v+t
B.d2($,a5)
u.e=s
s=B.a(s,a5)
B.d2($,a6)
u.f=(x-s)/2
a2.vP(A.eH,a7,u)
a2.vP(A.eI,a7,u)
a2.vP(A.ie,a7,u)
r=a2.cy.a3B(A.dN)
r.say(0,D.n)
for(x=v-7,q=a3,p=q,o=0;o<v;++o)for(n=o<7,m=o>=x,l=0;l<v;++l){s=l<7
k=s&&n
j=s&&m
i=l>=x&&n
if(k||j||i)continue
h=w.cw(l,o)?r:a3
if(h==null)continue
p=B.a(u.f,a6)+o*(B.a(u.d,a4)+0)
q=B.a(u.f,a6)+l*(B.a(u.d,a4)+0)
s=a2.WX(o,l,v)
g=s?0.5:0
s=a2.WY(o,l,v)
f=s?0.5:0
a7.d3(0,new B.x(p,q,p+(B.a(u.d,a4)+g),q+(B.a(u.d,a4)+f)),h)}x=a2.r
if(x!=null){w=x.gbP(x)
v=x.gcL(x)
e=a2.Zy(a8,new B.V(w,v),a3)
w=e.a
v=(a8.a-w)/2
s=e.b
d=(a8.b-s)/2
h=B.b2()
h.sa4T(!0)
h.st_(D.eG)
a0=x.gbP(x)
a1=x.gcL(x)
a7.ob(x,D.A.IF(new B.V(a0,a1),new B.x(0,0,a0,a1)),D.A.IF(e,new B.x(v,d,v+w,d+s)),h)}},
WY(d,e,f){var x=e+1
if(x>=f)return!1
return this.Q.cw(x,d)},
WX(d,e,f){var x=d+1
if(x>=f)return!1
return this.Q.cw(e,x)},
vP(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l="_pixelSize",k="_inset",j=7*B.a(f.d,l)+6*f.c-B.a(f.d,l),i=B.a(f.d,l)/2,h=B.a(f.f,k)+B.a(f.e,"_innerContentSize")-(j+i)
if(d===A.eH)x=new B.o(B.a(f.f,k)+i,B.a(f.f,k)+i)
else{w=f.f
x=d===A.eI?new B.o(B.a(w,k)+i,h):new B.o(h,B.a(w,k)+i)}w=this.cy
v=w.t3(A.JW,d)
v.toString
v.sh0(B.a(f.d,l))
v.say(0,D.n)
u=w.t3(A.JX,d)
u.toString
u.sh0(B.a(f.d,l))
u.say(0,new B.z(16777215))
t=w.t3(A.JY,d)
t.say(0,D.n)
w=x.a
s=x.b
r=j-2*B.a(f.d,l)
q=w+B.a(f.d,l)
p=s+B.a(f.d,l)
o=j-B.a(f.d,l)*2-2*i
n=w+B.a(f.d,l)+i
m=s+B.a(f.d,l)+i
e.d3(0,new B.x(w,s,w+j,s+j),v)
e.d3(0,new B.x(q,p,q+r,p+r),u)
e.d3(0,new B.x(n,m,n+o,m+o),t)},
Zy(d,e,f){var x=0.25*d.gf4()/e.ga5k()
return new B.V(x*e.a,x*e.b)},
e4(d){var x,w=this,v="_calcVersion"
if(d instanceof C.vU){if(w.c===d.c)if(B.a(w.ch,v)===B.a(d.ch,v))if(w.Q===d.Q)if(w.r==d.r)x=!w.y.k(0,d.y)||!w.z.k(0,d.z)
else x=!0
else x=!0
else x=!0
else x=!0
return x}return!0}}
C.a71.prototype={}
C.mQ.prototype={
j(d){return"QrCodeElement."+this.b}}
C.ov.prototype={
j(d){return"FinderPatternPosition."+this.b}}
C.YE.prototype={
j(d){return"QrEyeShape."+this.b}}
C.YD.prototype={
j(d){return"QrDataModuleShape."+this.b}}
C.Fp.prototype={
gv(d){return(B.eC(A.K0)^D.e.gv(4278190080))>>>0},
k(d,e){var x
if(e==null)return!1
if(e instanceof C.Fp){x=D.n.k(0,D.n)
return x}return!1}}
C.Fo.prototype={
gv(d){return(B.eC(A.K_)^D.e.gv(4278190080))>>>0},
k(d,e){var x
if(e==null)return!1
if(e instanceof C.Fo){x=D.n.k(0,D.n)
return x}return!1}}
C.vV.prototype={}
C.vW.prototype={
j(d){return"QrValidationStatus."+this.b}}
var z=a.updateTypes([])
C.a7B.prototype={
$2(d,e){var x,w="_validationResult",v=this.a
if(B.a(v.e,w).a!==A.fq)return v.TT(d,e,B.a(v.e,w).c)
x=v.a.z
if(x==null)x=new B.V(D.e.G(1/0,e.a,e.b),D.e.G(1/0,e.c,e.d)).gf4()
v.a.toString
v=v.Z_(d,null,x)
return v},
$S:364};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.H,[C.LX,C.pm,C.uE,C.YF,C.YC,C.Fr,C.XY,C.a71,C.Fp,C.Fo,C.vV])
v(C.vQ,C.LX)
v(C.vS,B.S)
v(C.LZ,B.a3)
v(C.a7B,B.kj)
v(C.zm,B.ap)
v(C.vU,B.ok)
w(B.ym,[C.mQ,C.ov,C.YE,C.YD,C.vW])
x(C.LX,B.F)})()
B.rG(b.typeUniverse,JSON.parse('{"vQ":{"F":["D"],"u":["D"],"G":["D"],"n":["D"],"F.E":"D"},"uE":{"bz":[]},"vS":{"S":[],"f":[]},"LZ":{"a3":["vS"]},"zm":{"ap":[],"f":[]},"vU":{"ae":[]}}'))
var y=(function rtii(){var x=B.W
return{L:x("bz"),S:x("q<u<l>>"),Q:x("q<u<D?>>"),H:x("q<pe>"),b:x("q<pm>"),J:x("q<Fr>"),t:x("q<l>"),Z:x("pe"),N:x("m"),T:x("u<l>?"),u:x("D?")}})();(function constants(){var x=a.makeConstList
A.K_=new C.YD(0,"square")
A.wt=new C.Fo()
A.K0=new C.YE(0,"square")
A.wu=new C.Fp()
A.i8=new B.aC(10,10,10,10)
A.eH=new C.ov(0,"topLeft")
A.ie=new C.ov(1,"topRight")
A.eI=new C.ov(2,"bottomLeft")
A.C8=B.b(x([1,0,3,2]),y.t)
A.D9=B.b(x([6,18]),y.t)
A.Da=B.b(x([6,22]),y.t)
A.Dd=B.b(x([6,26]),y.t)
A.Dj=B.b(x([6,30]),y.t)
A.Dp=B.b(x([6,34]),y.t)
A.Db=B.b(x([6,22,38]),y.t)
A.Dc=B.b(x([6,24,42]),y.t)
A.De=B.b(x([6,26,46]),y.t)
A.Di=B.b(x([6,28,50]),y.t)
A.Dk=B.b(x([6,30,54]),y.t)
A.Do=B.b(x([6,32,58]),y.t)
A.Dq=B.b(x([6,34,62]),y.t)
A.Df=B.b(x([6,26,46,66]),y.t)
A.Dg=B.b(x([6,26,48,70]),y.t)
A.Dh=B.b(x([6,26,50,74]),y.t)
A.Dl=B.b(x([6,30,54,78]),y.t)
A.Dm=B.b(x([6,30,56,82]),y.t)
A.Dn=B.b(x([6,30,58,86]),y.t)
A.Dr=B.b(x([6,34,62,90]),y.t)
A.GP=B.b(x([6,28,50,72,94]),y.t)
A.GQ=B.b(x([6,26,50,74,98]),y.t)
A.GR=B.b(x([6,30,54,78,102]),y.t)
A.GS=B.b(x([6,28,54,80,106]),y.t)
A.GT=B.b(x([6,32,58,84,110]),y.t)
A.GU=B.b(x([6,30,58,86,114]),y.t)
A.GV=B.b(x([6,34,62,90,118]),y.t)
A.Ez=B.b(x([6,26,50,74,98,122]),y.t)
A.EA=B.b(x([6,30,54,78,102,126]),y.t)
A.EB=B.b(x([6,26,52,78,104,130]),y.t)
A.Fi=B.b(x([6,30,56,82,108,134]),y.t)
A.Ft=B.b(x([6,34,60,86,112,138]),y.t)
A.FE=B.b(x([6,30,58,86,114,142]),y.t)
A.FP=B.b(x([6,34,62,90,118,146]),y.t)
A.Du=B.b(x([6,30,54,78,102,126,150]),y.t)
A.Dv=B.b(x([6,24,50,76,102,128,154]),y.t)
A.Dw=B.b(x([6,28,54,80,106,132,158]),y.t)
A.Dx=B.b(x([6,32,58,84,110,136,162]),y.t)
A.Dy=B.b(x([6,26,54,82,110,138,166]),y.t)
A.Dz=B.b(x([6,30,58,86,114,142,170]),y.t)
A.Ds=B.b(x([D.eV,A.D9,A.Da,A.Dd,A.Dj,A.Dp,A.Db,A.Dc,A.De,A.Di,A.Dk,A.Do,A.Dq,A.Df,A.Dg,A.Dh,A.Dl,A.Dm,A.Dn,A.Dr,A.GP,A.GQ,A.GR,A.GS,A.GT,A.GU,A.GV,A.Ez,A.EA,A.EB,A.Fi,A.Ft,A.FE,A.FP,A.Du,A.Dv,A.Dw,A.Dx,A.Dy,A.Dz]),y.S)
A.E4=B.b(x([A.eH,A.ie,A.eI]),B.W("q<ov>"))
A.Cd=B.b(x([1,26,19]),y.t)
A.Cc=B.b(x([1,26,16]),y.t)
A.Cb=B.b(x([1,26,13]),y.t)
A.Ce=B.b(x([1,26,9]),y.t)
A.Ci=B.b(x([1,44,34]),y.t)
A.Ch=B.b(x([1,44,28]),y.t)
A.Cg=B.b(x([1,44,22]),y.t)
A.Cf=B.b(x([1,44,16]),y.t)
A.Ck=B.b(x([1,70,55]),y.t)
A.Cj=B.b(x([1,70,44]),y.t)
A.Cq=B.b(x([2,35,17]),y.t)
A.Cp=B.b(x([2,35,13]),y.t)
A.C9=B.b(x([1,100,80]),y.t)
A.Cs=B.b(x([2,50,32]),y.t)
A.Cr=B.b(x([2,50,24]),y.t)
A.CU=B.b(x([4,25,9]),y.t)
A.Ca=B.b(x([1,134,108]),y.t)
A.Ct=B.b(x([2,67,43]),y.t)
A.G_=B.b(x([2,33,15,2,34,16]),y.t)
A.Ga=B.b(x([2,33,11,2,34,12]),y.t)
A.Cu=B.b(x([2,86,68]),y.t)
A.CX=B.b(x([4,43,27]),y.t)
A.CW=B.b(x([4,43,19]),y.t)
A.CV=B.b(x([4,43,15]),y.t)
A.Cv=B.b(x([2,98,78]),y.t)
A.CY=B.b(x([4,49,31]),y.t)
A.Gl=B.b(x([2,32,14,4,33,15]),y.t)
A.Gw=B.b(x([4,39,13,1,40,14]),y.t)
A.Cn=B.b(x([2,121,97]),y.t)
A.EC=B.b(x([2,60,38,2,61,39]),y.t)
A.EN=B.b(x([4,40,18,2,41,19]),y.t)
A.EY=B.b(x([4,40,14,2,41,15]),y.t)
A.Co=B.b(x([2,146,116]),y.t)
A.F8=B.b(x([3,58,36,2,59,37]),y.t)
A.Fc=B.b(x([4,36,16,4,37,17]),y.t)
A.Fd=B.b(x([4,36,12,4,37,13]),y.t)
A.Fe=B.b(x([2,86,68,2,87,69]),y.t)
A.Ff=B.b(x([4,69,43,1,70,44]),y.t)
A.Fg=B.b(x([6,43,19,2,44,20]),y.t)
A.Fh=B.b(x([6,43,15,2,44,16]),y.t)
A.CS=B.b(x([4,101,81]),y.t)
A.Fj=B.b(x([1,80,50,4,81,51]),y.t)
A.Fk=B.b(x([4,50,22,4,51,23]),y.t)
A.Fl=B.b(x([3,36,12,8,37,13]),y.t)
A.Fm=B.b(x([2,116,92,2,117,93]),y.t)
A.Fn=B.b(x([6,58,36,2,59,37]),y.t)
A.Fo=B.b(x([4,46,20,6,47,21]),y.t)
A.Fp=B.b(x([7,42,14,4,43,15]),y.t)
A.CT=B.b(x([4,133,107]),y.t)
A.Fq=B.b(x([8,59,37,1,60,38]),y.t)
A.Fr=B.b(x([8,44,20,4,45,21]),y.t)
A.Fs=B.b(x([12,33,11,4,34,12]),y.t)
A.Fu=B.b(x([3,145,115,1,146,116]),y.t)
A.Fv=B.b(x([4,64,40,5,65,41]),y.t)
A.Fw=B.b(x([11,36,16,5,37,17]),y.t)
A.Fx=B.b(x([11,36,12,5,37,13]),y.t)
A.Fy=B.b(x([5,109,87,1,110,88]),y.t)
A.Fz=B.b(x([5,65,41,5,66,42]),y.t)
A.FA=B.b(x([5,54,24,7,55,25]),y.t)
A.C4=B.b(x([11,36,12]),y.t)
A.FB=B.b(x([5,122,98,1,123,99]),y.t)
A.FC=B.b(x([7,73,45,3,74,46]),y.t)
A.FD=B.b(x([15,43,19,2,44,20]),y.t)
A.FF=B.b(x([3,45,15,13,46,16]),y.t)
A.FG=B.b(x([1,135,107,5,136,108]),y.t)
A.FH=B.b(x([10,74,46,1,75,47]),y.t)
A.FI=B.b(x([1,50,22,15,51,23]),y.t)
A.FJ=B.b(x([2,42,14,17,43,15]),y.t)
A.FK=B.b(x([5,150,120,1,151,121]),y.t)
A.FL=B.b(x([9,69,43,4,70,44]),y.t)
A.FM=B.b(x([17,50,22,1,51,23]),y.t)
A.FN=B.b(x([2,42,14,19,43,15]),y.t)
A.FO=B.b(x([3,141,113,4,142,114]),y.t)
A.FQ=B.b(x([3,70,44,11,71,45]),y.t)
A.FR=B.b(x([17,47,21,4,48,22]),y.t)
A.FS=B.b(x([9,39,13,16,40,14]),y.t)
A.FT=B.b(x([3,135,107,5,136,108]),y.t)
A.FU=B.b(x([3,67,41,13,68,42]),y.t)
A.FV=B.b(x([15,54,24,5,55,25]),y.t)
A.FW=B.b(x([15,43,15,10,44,16]),y.t)
A.FX=B.b(x([4,144,116,4,145,117]),y.t)
A.C6=B.b(x([17,68,42]),y.t)
A.FY=B.b(x([17,50,22,6,51,23]),y.t)
A.FZ=B.b(x([19,46,16,6,47,17]),y.t)
A.G0=B.b(x([2,139,111,7,140,112]),y.t)
A.C7=B.b(x([17,74,46]),y.t)
A.G1=B.b(x([7,54,24,16,55,25]),y.t)
A.Cw=B.b(x([34,37,13]),y.t)
A.G2=B.b(x([4,151,121,5,152,122]),y.t)
A.G3=B.b(x([4,75,47,14,76,48]),y.t)
A.G4=B.b(x([11,54,24,14,55,25]),y.t)
A.G5=B.b(x([16,45,15,14,46,16]),y.t)
A.G6=B.b(x([6,147,117,4,148,118]),y.t)
A.G7=B.b(x([6,73,45,14,74,46]),y.t)
A.G8=B.b(x([11,54,24,16,55,25]),y.t)
A.G9=B.b(x([30,46,16,2,47,17]),y.t)
A.Gb=B.b(x([8,132,106,4,133,107]),y.t)
A.Gc=B.b(x([8,75,47,13,76,48]),y.t)
A.Gd=B.b(x([7,54,24,22,55,25]),y.t)
A.Ge=B.b(x([22,45,15,13,46,16]),y.t)
A.Gf=B.b(x([10,142,114,2,143,115]),y.t)
A.Gg=B.b(x([19,74,46,4,75,47]),y.t)
A.Gh=B.b(x([28,50,22,6,51,23]),y.t)
A.Gi=B.b(x([33,46,16,4,47,17]),y.t)
A.Gj=B.b(x([8,152,122,4,153,123]),y.t)
A.Gk=B.b(x([22,73,45,3,74,46]),y.t)
A.Gm=B.b(x([8,53,23,26,54,24]),y.t)
A.Gn=B.b(x([12,45,15,28,46,16]),y.t)
A.Go=B.b(x([3,147,117,10,148,118]),y.t)
A.Gp=B.b(x([3,73,45,23,74,46]),y.t)
A.Gq=B.b(x([4,54,24,31,55,25]),y.t)
A.Gr=B.b(x([11,45,15,31,46,16]),y.t)
A.Gs=B.b(x([7,146,116,7,147,117]),y.t)
A.Gt=B.b(x([21,73,45,7,74,46]),y.t)
A.Gu=B.b(x([1,53,23,37,54,24]),y.t)
A.Gv=B.b(x([19,45,15,26,46,16]),y.t)
A.Gx=B.b(x([5,145,115,10,146,116]),y.t)
A.Gy=B.b(x([19,75,47,10,76,48]),y.t)
A.Gz=B.b(x([15,54,24,25,55,25]),y.t)
A.GA=B.b(x([23,45,15,25,46,16]),y.t)
A.GB=B.b(x([13,145,115,3,146,116]),y.t)
A.GC=B.b(x([2,74,46,29,75,47]),y.t)
A.GD=B.b(x([42,54,24,1,55,25]),y.t)
A.GE=B.b(x([23,45,15,28,46,16]),y.t)
A.C5=B.b(x([17,145,115]),y.t)
A.GF=B.b(x([10,74,46,23,75,47]),y.t)
A.GG=B.b(x([10,54,24,35,55,25]),y.t)
A.ED=B.b(x([19,45,15,35,46,16]),y.t)
A.EE=B.b(x([17,145,115,1,146,116]),y.t)
A.EF=B.b(x([14,74,46,21,75,47]),y.t)
A.EG=B.b(x([29,54,24,19,55,25]),y.t)
A.EH=B.b(x([11,45,15,46,46,16]),y.t)
A.EI=B.b(x([13,145,115,6,146,116]),y.t)
A.EJ=B.b(x([14,74,46,23,75,47]),y.t)
A.EK=B.b(x([44,54,24,7,55,25]),y.t)
A.EL=B.b(x([59,46,16,1,47,17]),y.t)
A.EM=B.b(x([12,151,121,7,152,122]),y.t)
A.EO=B.b(x([12,75,47,26,76,48]),y.t)
A.EP=B.b(x([39,54,24,14,55,25]),y.t)
A.EQ=B.b(x([22,45,15,41,46,16]),y.t)
A.ER=B.b(x([6,151,121,14,152,122]),y.t)
A.ES=B.b(x([6,75,47,34,76,48]),y.t)
A.ET=B.b(x([46,54,24,10,55,25]),y.t)
A.EU=B.b(x([2,45,15,64,46,16]),y.t)
A.EV=B.b(x([17,152,122,4,153,123]),y.t)
A.EW=B.b(x([29,74,46,14,75,47]),y.t)
A.EX=B.b(x([49,54,24,10,55,25]),y.t)
A.EZ=B.b(x([24,45,15,46,46,16]),y.t)
A.F_=B.b(x([4,152,122,18,153,123]),y.t)
A.F0=B.b(x([13,74,46,32,75,47]),y.t)
A.F1=B.b(x([48,54,24,14,55,25]),y.t)
A.F2=B.b(x([42,45,15,32,46,16]),y.t)
A.F3=B.b(x([20,147,117,4,148,118]),y.t)
A.F4=B.b(x([40,75,47,7,76,48]),y.t)
A.F5=B.b(x([43,54,24,22,55,25]),y.t)
A.F6=B.b(x([10,45,15,67,46,16]),y.t)
A.F7=B.b(x([19,148,118,6,149,119]),y.t)
A.F9=B.b(x([18,75,47,31,76,48]),y.t)
A.Fa=B.b(x([34,54,24,34,55,25]),y.t)
A.Fb=B.b(x([20,45,15,61,46,16]),y.t)
A.di=B.b(x([A.Cd,A.Cc,A.Cb,A.Ce,A.Ci,A.Ch,A.Cg,A.Cf,A.Ck,A.Cj,A.Cq,A.Cp,A.C9,A.Cs,A.Cr,A.CU,A.Ca,A.Ct,A.G_,A.Ga,A.Cu,A.CX,A.CW,A.CV,A.Cv,A.CY,A.Gl,A.Gw,A.Cn,A.EC,A.EN,A.EY,A.Co,A.F8,A.Fc,A.Fd,A.Fe,A.Ff,A.Fg,A.Fh,A.CS,A.Fj,A.Fk,A.Fl,A.Fm,A.Fn,A.Fo,A.Fp,A.CT,A.Fq,A.Fr,A.Fs,A.Fu,A.Fv,A.Fw,A.Fx,A.Fy,A.Fz,A.FA,A.C4,A.FB,A.FC,A.FD,A.FF,A.FG,A.FH,A.FI,A.FJ,A.FK,A.FL,A.FM,A.FN,A.FO,A.FQ,A.FR,A.FS,A.FT,A.FU,A.FV,A.FW,A.FX,A.C6,A.FY,A.FZ,A.G0,A.C7,A.G1,A.Cw,A.G2,A.G3,A.G4,A.G5,A.G6,A.G7,A.G8,A.G9,A.Gb,A.Gc,A.Gd,A.Ge,A.Gf,A.Gg,A.Gh,A.Gi,A.Gj,A.Gk,A.Gm,A.Gn,A.Go,A.Gp,A.Gq,A.Gr,A.Gs,A.Gt,A.Gu,A.Gv,A.Gx,A.Gy,A.Gz,A.GA,A.GB,A.GC,A.GD,A.GE,A.C5,A.GF,A.GG,A.ED,A.EE,A.EF,A.EG,A.EH,A.EI,A.EJ,A.EK,A.EL,A.EM,A.EO,A.EP,A.EQ,A.ER,A.ES,A.ET,A.EU,A.EV,A.EW,A.EX,A.EZ,A.F_,A.F0,A.F1,A.F2,A.F3,A.F4,A.F5,A.F6,A.F7,A.F9,A.Fa,A.Fb]),y.S)
A.JW=new C.mQ(0,"finderPatternOuter")
A.JX=new C.mQ(1,"finderPatternInner")
A.JY=new C.mQ(2,"finderPatternDot")
A.dN=new C.mQ(3,"codePixel")
A.JZ=new C.mQ(4,"codePixelEmpty")
A.fq=new C.vW(0,"valid")
A.K1=new C.vW(1,"contentTooLong")
A.K2=new C.vW(2,"error")
A.a0=new B.t(!0,D.n,null,null,null,null,14,D.x,null,null,null,null,null,null,null,null,null,D.f,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"aB8","abX",()=>C.avI())
x($,"aAP","afh",()=>C.avH())})()}
$__dart_deferred_initializers__["j8dtB0TWlcSVHC4hS5aCJfTCKeg="] = $__dart_deferred_initializers__.current
