self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var C={x4:function x4(d){this.a=d
this.b=0},O6:function O6(){},qa:function qa(d){this.b=d},vH:function vH(d){this.c=d},
Hn(d,e){var x,w,v=d.length,u=0
while(!0){if(!(u<v&&d[u]===0))break;++u}v-=u
x=new Uint8Array(v+e)
for(w=0;w<v;++w)x[w]=d[w+u]
return new C.a0B(x)},
a0B:function a0B(d){this.a=d},
am9(d,e){var x=B.a([],y.b)
x=new C.a0y(d,e,d*4+17,B.a([],y.Q),x)
x.Uc(d,e)
return x},
axu(d,e){var x,w,v,u,t,s,r,q
for(x=y.t,w=1;w<40;++w){v=C.ama(w,d)
u=new C.x4(B.a([],x))
for(t=v.length,s=0,r=0;r<t;++r)s+=v[r].b
for(r=0;r<1;++r){q=e[r]
u.kd(0,4,4)
u.kd(0,q.b.length,C.aon(4,w))
q.no(0,u)}if(u.b<=s*8)break}return w},
aAm(d,e,f){var x,w,v,u,t,s=C.ama(d,e),r=new C.x4(B.a([],y.t))
for(x=0;x<f.length;++x){w=f[x]
r.kd(0,4,4)
r.kd(0,w.b.length,C.aon(4,d))
w.no(0,r)}for(v=s.length,u=0,x=0;x<v;++x)u+=s[x].b
t=u*8
v=r.b
if(v>t)throw B.c(new C.vH("Input too long. "+v+" > "+t))
if(v+4<=t)r.kd(0,0,4)
for(;D.e.cr(r.b,8)!==0;)r.Ms(!1)
for(;!0;){if(r.b>=t)break
r.kd(0,236,8)
if(r.b>=t)break
r.kd(0,17,8)}return C.aAl(r,s)},
aAl(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=y.T,g=B.a6(e.length,null,!1,h),f=B.a6(e.length,null,!1,h)
for(h=d.a,x=0,w=0,v=0,u=0;u<e.length;++u){t=e[u]
s=t.b
r=t.a-s
w=Math.max(w,s)
v=Math.max(v,r)
q=new Uint8Array(s)
g[u]=q
for(p=0;p<s;++p)q[p]=h[p+x]&255
x+=s
o=C.aAA(r)
t=o.a.length-1
n=C.Hn(q,t).M0(o)
m=new Uint8Array(t)
f[u]=m
for(l=n.a,k=l.length,p=0;p<t;++p){j=p+k-t
m[p]=j>=0?l[j]:0}}i=B.a([],y.t)
for(p=0;p<w;++p)for(u=0;u<e.length;++u){h=g[u]
if(p<h.length)i.push(h[p])}for(p=0;p<v;++p)for(u=0;u<e.length;++u){h=f[u]
if(p<h.length)i.push(h[p])}return i},
aB9(d,e,f){var x
switch(d){case 0:return(e+f&1)===0
case 1:return(e&1)===0
case 2:return D.e.cr(f,3)===0
case 3:return D.e.cr(e+f,3)===0
case 4:return(D.e.ck(e,2)+D.e.ck(f,3)&1)===0
case 5:x=e*f
return D.e.cr(x,2)+D.e.cr(x,3)===0
case 6:x=e*f
return(D.e.cr(x,2)+D.e.cr(x,3)&1)===0
case 7:return(D.e.cr(e*f,3)+D.e.cr(e+f,2)&1)===0
default:throw B.c(B.b4("bad maskPattern:"+d,null))}},
aon(d,e){var x=null
if(1<=e&&e<10)switch(d){case 1:return 10
case 2:return 9
case 4:return 8
case 8:return 8
default:throw B.c(B.b4("mode:"+d,x))}else if(e<27)switch(d){case 1:return 12
case 2:return 11
case 4:return 16
case 8:return 10
default:throw B.c(B.b4("mode:"+d,x))}else if(e<41)switch(d){case 1:return 14
case 2:return 13
case 4:return 16
case 8:return 12
default:throw B.c(B.b4("mode:"+d,x))}else throw B.c(B.b4("type:"+e,x))},
aB6(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=d.c
for(x=0,w=0;w<k;++w)for(v=0;v<k;++v){u=d.cK(w,v)
for(t=0,s=-1;s<=1;++s){r=w+s
if(r<0||k<=r)continue
for(q=s===0,p=-1;p<=1;++p){o=v+p
if(o<0||k<=o)continue
if(q&&p===0)continue
if(u===d.cK(r,o))++t}}if(t>5)x+=3+t-5}for(r=k-1,w=0;w<r;w=n)for(n=w+1,v=0;v<r;){m=d.cK(w,v)?1:0
if(d.cK(n,v))++m;++v
if(d.cK(w,v))++m
if(d.cK(n,v))++m
if(m===0||m===4)x+=3}for(r=k-6,w=0;w<k;++w)for(v=0;v<r;++v)if(d.cK(w,v)&&!d.cK(w,v+1)&&d.cK(w,v+2)&&d.cK(w,v+3)&&d.cK(w,v+4)&&!d.cK(w,v+5)&&d.cK(w,v+6))x+=40
for(v=0;v<k;++v)for(w=0;w<r;++w)if(d.cK(w,v)&&!d.cK(w+1,v)&&d.cK(w+2,v)&&d.cK(w+3,v)&&d.cK(w+4,v)&&!d.cK(w+5,v)&&d.cK(w+6,v))x+=40
for(v=0,l=0;v<k;++v)for(w=0;w<k;++w)if(d.cK(w,v))++l
return x+Math.abs(100*l/k/k-50)/5*10},
aAA(d){var x,w=y.t,v=C.Hn(B.a([1],w),0)
for(x=0;x<d;++x)v=v.cf(0,C.Hn(B.a([1,C.ail(x)],w),0))
return v},
a0y:function a0y(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=null
_.f=h},
ama(d,e){var x,w,v,u,t,s,r=C.aAM(d,e),q=r.length/3|0,p=B.a([],y.J)
for(x=0;x<q;++x){w=x*3
v=r[w]
u=r[w+1]
t=r[w+2]
for(s=0;s<v;++s)p.push(new C.Ho(u,t))}return p},
aAM(d,e){switch(e){case 1:return A.e7[(d-1)*4]
case 0:return A.e7[(d-1)*4+1]
case 3:return A.e7[(d-1)*4+2]
case 2:return A.e7[(d-1)*4+3]
default:throw B.c(B.b4("bad rs block @ typeNumber: "+d+"/errorCorrectLevel:"+e,null))}},
Ho:function Ho(d,e){this.a=d
this.b=e},
a_N:function a_N(d,e){this.a=d
this.b=e},
x7(d,e){return new C.x6(d,e,null)},
x6:function x6(d,e,f){this.c=d
this.z=e
this.a=f},
O8:function O8(d){var _=this
_.d=null
_.f=_.e=$
_.a=null
_.b=d
_.c=null},
aaS:function aaS(d){this.a=d},
AJ:function AJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
x8:function x8(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
aag:function aag(d,e,f){var _=this
_.a=d
_.b=e
_.c=f
_.f=_.e=_.d=$},
ny:function ny(d,e){this.a=d
this.b=e},
ph:function ph(d,e){this.a=d
this.b=e},
a0A:function a0A(d,e){this.a=d
this.b=e},
a0z:function a0z(d,e){this.a=d
this.b=e},
Hm:function Hm(){},
Hl:function Hl(){},
axv(d,e,f){var x,w,v,u,t,s=B.bE("qrCode")
try{if(f!==-1){s.scd(C.am9(f,e))
v=s.br()
u=D.b1.e3(d)
v.f.push(new C.qa(u))
v.e=null}else{v=C.am9(C.axu(e,B.a([new C.qa(D.b1.e3(d))],y.b)),e)
v.f.push(new C.qa(D.b1.e3(d)))
v.e=null
s.scd(v)}v=s.br()
u=v.Y_()
v.GG(!1,u)
v=s.br()
return new C.x9(A.hp,v,null)}catch(t){v=B.a9(t)
if(v instanceof C.vH){x=v
return new C.x9(A.KY,null,x)}else if(y.L.b(v)){w=v
return new C.x9(A.KZ,null,w)}else throw t}},
x9:function x9(d,e,f){this.a=d
this.b=e
this.c=f},
xa:function xa(d,e){this.a=d
this.b=e},
ap9(d){if(d<1)throw B.c(B.b4("glog("+d+")",null))
return $.afo()[d]},
ail(d){for(;d<0;)d+=255
for(;d>=256;)d-=255
return $.aiT()[d]},
aAn(){var x,w=new Uint8Array(256)
for(x=0;x<8;++x)w[x]=D.e.HM(1,x)
for(x=8;x<256;++x)w[x]=(w[x-4]^w[x-5]^w[x-6]^w[x-8])>>>0
return w},
aAo(){var x,w=new Uint8Array(256)
for(x=0;x<255;++x)w[$.aiT()[x]]=x
return w},
aBK(d){var x,w=d<<10>>>0
for(x=w;C.ol(x)-C.ol(1335)>=0;)x=(x^D.e.vM(1335,C.ol(x)-C.ol(1335)))>>>0
return((w|x)^21522)>>>0},
aBL(d){var x,w=d<<12>>>0
for(x=w;C.ol(x)-C.ol(7973)>=0;)x=(x^D.e.vM(7973,C.ol(x)-C.ol(7973)))>>>0
return(w|x)>>>0},
ol(d){var x
for(x=0;d!==0;){++x
d=d>>>1}return x}},B,D,A,E
a.setFunctionNamesIfNecessary([C])
C=a.updateHolder(c[6],C)
B=c[0]
D=c[2]
A=c[11]
E=c[8]
C.x4.prototype={
q(d,e,f){return B.a_(B.G("cannot change"))},
h(d,e){return(D.e.yH(this.a[D.e.ck(e,8)],7-D.e.cr(e,8))&1)===1},
gl(d){return this.b},
sl(d,e){B.a_(B.G("Cannot change"))},
kd(d,e,f){var x
for(x=0;x<f;++x)this.Ms((D.e.OI(e,f-x-1)&1)===1)},
Ms(d){var x=this,w=D.e.ck(x.b,8),v=x.a
if(v.length<=w)v.push(0)
if(d)v[w]=(v[w]|D.e.jw(128,D.e.cr(x.b,8)))>>>0;++x.b},
$iH:1,
$ip:1,
$iv:1}
C.O6.prototype={}
C.qa.prototype={
gl(d){return this.b.length},
no(d,e){var x,w,v
for(x=this.b,w=x.length,v=0;v<w;++v)e.kd(0,x[v],8)}}
C.vH.prototype={
i(d){return"QrInputTooLongException: "+this.c},
$ibK:1}
C.a0B.prototype={
h(d,e){return this.a[e]},
gl(d){return this.a.length},
cf(d,e){var x,w,v,u,t,s,r,q=this.a,p=q.length,o=e.a,n=o.length,m=new Uint8Array(p+n-1)
for(x=0;x<p;++x)for(w=0;w<n;++w){v=x+w
u=m[v]
t=q[x]
if(t<1)B.a_(B.b4("glog("+t+")",null))
s=$.afo()
t=s[t]
r=o[w]
if(r<1)B.a_(B.b4("glog("+r+")",null))
m[v]=(u^C.ail(t+s[r]))>>>0}return C.Hn(m,0)},
M0(d){var x,w,v,u=this.a,t=u.length,s=d.a,r=s.length
if(t-r<0)return this
x=C.ap9(u[0])-C.ap9(s[0])
w=new Uint8Array(t)
for(v=0;v<t;++v)w[v]=u[v]
for(v=0;v<r;++v){u=w[v]
t=s[v]
if(t<1)B.a_(B.b4("glog("+t+")",null))
w[v]=(u^C.ail($.afo()[t]+x))>>>0}return C.Hn(w,0).M0(d)}}
C.a0y.prototype={
Uc(d,e){var x,w,v,u,t=this
B.ah6(t.a,1,40,"typeNumber")
B.amd(t.b,A.CW,"errorCorrectLevel",null)
for(x=t.c,w=t.d,v=y.u,u=0;u<x;++u)w.push(B.a6(x,null,!1,v))},
cK(d,e){var x
if(d>=0){x=this.c
x=x<=d||e<0||x<=e}else x=!0
if(x)throw B.c(B.b4(""+d+" , "+e,null))
x=this.d[d][e]
x.toString
return x},
yE(d,e){var x,w,v,u,t,s,r,q,p,o,n,m,l
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
Y_(){var x,w,v,u
for(x=0,w=0,v=0;v<8;++v){this.GG(!0,v)
u=C.aB6(this)
if(v===0||x>u){w=v
x=u}}return w},
a2M(){var x,w,v,u,t
for(x=this.c-8,w=this.d,v=8;v<x;++v){u=w[v]
if(u[6]!=null)continue
u[6]=(v&1)===0}for(t=8;t<x;++t){u=w[6]
if(u[t]!=null)continue
u[t]=(t&1)===0}},
a2L(){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=A.Eg[this.a-1]
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
a2O(d){var x,w,v,u,t,s=C.aBL(this.a)
for(x=this.d,w=this.c,v=!d,u=0;u<18;++u){t=v&&(D.e.jw(s,u)&1)===1
x[D.e.ck(u,3)][D.e.cr(u,3)+w-8-3]=t}for(u=0;u<18;++u){t=v&&(D.e.jw(s,u)&1)===1
x[D.e.cr(u,3)+w-8-3][D.e.ck(u,3)]=t}},
a2N(d,e){var x,w,v,u,t,s,r=C.aBK((this.b<<3|e)>>>0)
for(x=this.d,w=this.c,v=w-15,u=!d,t=0;t<15;++t){s=u&&(D.e.jw(r,t)&1)===1
if(t<6)x[t][8]=s
else if(t<8)x[t+1][8]=s
else x[v+t][8]=s}for(t=0;t<15;++t){s=u&&(D.e.jw(r,t)&1)===1
if(t<8)x[8][w-t-1]=s
else{v=15-t-1
if(t<9)x[8][v+1]=s
else x[8][v]=s}}x[w-8][8]=u},
a0f(d,e){var x,w,v,u,t,s,r,q,p,o=this.c,n=o-1
for(x=this.d,w=n,v=-1,u=7,t=0;w>0;w-=2){if(w===6)--w
for(;!0;){for(s=0;s<2;++s){r=w-s
if(x[n][r]==null){q=t<d.length&&(D.e.yH(d[t],u)&1)===1
if(C.aB9(e,n,r))q=!q
x[n][r]=q;--u
if(u===-1){++t
u=7}}}n+=v
if(n<0||o<=n){n-=v
p=-v
v=p
break}}}},
GG(d,e){var x,w,v=this
v.yE(0,0)
x=v.c-7
v.yE(x,0)
v.yE(0,x)
v.a2L()
v.a2M()
v.a2N(d,e)
x=v.a
if(x>=7)v.a2O(d)
w=v.e
v.a0f(w==null?v.e=C.aAm(x,v.b,v.f):w,e)}}
C.Ho.prototype={}
C.a_N.prototype={
Ez(d,e){var x=e!=null?"FinderPatternPosition."+e.b:"any"
return"QrCodeElement."+d.b+":"+x},
a56(d,e,f,g){if(f===A.ew)this.a.push(e)
else this.b.q(0,this.Ez(f,g),e)},
Jv(d,e,f){return this.a56(d,e,f,null)},
u8(d,e){if(d===A.ew)return D.c.gI(this.a)
else return this.b.h(0,this.Ez(d,e))},
a7z(d){return this.u8(d,null)}}
C.x6.prototype={
ai(){return new C.O8(D.l)}}
C.O8.prototype={
H(d,e){var x=this,w="_validationResult",v=C.axv(x.a.c,1,-1)
x.e=v
if(B.b(v,w).a===A.hp)x.d=B.b(x.e,w).b
else x.d=null
return new E.w0(new C.aaS(x),null)},
a1E(d,e,f){var x,w,v=null,u=this.d
u.toString
this.a.toString
x=u.a
w=new C.x8(x,u.b,v,!0,e,v,A.xM,A.xL,u,new C.a_N(B.a([],y.H),B.w(y.N,y.Z)),v)
B.cB($,"_calcVersion")
w.ch=x
w.a_B()
this.a.toString
return new C.AJ(f,D.a_,A.jk,B.jr(v,v,v,w,D.q),"qr code",v)},
Xl(d,e,f){var x,w,v=null,u=this.a
u.toString
x=B.a3(v,v,D.i,v,v,v,v,v,v,v,v,v,v)
u=u.z
w=u==null?new B.X(D.e.G(1/0,e.a,e.b),D.e.G(1/0,e.c,e.d)).gfo():u
this.a.toString
return new C.AJ(w,D.a_,A.jk,x,"qr code",v)}}
C.AJ.prototype={
H(d,e){var x=this,w=null,v=x.c
return B.bT(w,w,B.a3(w,new B.fl(x.e,x.f,w),D.i,x.d,w,w,w,v,w,w,w,w,v),!1,w,w,!1,!1,w,w,w,w,x.r,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w,w)}}
C.x8.prototype={
a_B(){var x,w,v,u,t="FinderPatternPosition.",s=this.cy,r=B.aE()
r=r?B.b6():new B.aY(new B.b1())
r.scO(0,D.af)
s.Jv(0,r,A.ew)
r=B.aE()
r=r?B.b6():new B.aY(new B.b1())
r.scO(0,D.af)
s.Jv(0,r,A.KV)
for(x=0;x<3;++x){w=A.ET[x]
r=B.aE()
r=r?B.b6():new B.aY(new B.b1())
r.scO(0,D.R)
v=s.b
u=t+w.b
v.q(0,"QrCodeElement.finderPatternOuter:"+u,r)
r=B.aE()
r=r?B.b6():new B.aY(new B.b1())
r.scO(0,D.R)
u=t+w.b
v.q(0,"QrCodeElement.finderPatternInner:"+u,r)
r=B.aE()
r=r?B.b6():new B.aY(new B.b1())
r.scO(0,D.af)
u=t+w.b
v.q(0,"QrCodeElement.finderPatternDot:"+u,r)}},
aJ(a7,a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=this,a3=null,a4="_pixelSize",a5="_innerContentSize",a6="_inset"
if(a8.gfo()===0){B.bJ("[QR] WARN: width or height is zero. You should set a 'size' value or nest this painter in a Widget that defines a non-zero size")
return}x=a8.gfo()
w=a2.Q
v=w.c
u=new C.aag(v,x,0)
t=(v-1)*0
s=D.d.MS((x-t)/v*2)/2
B.cB($,a4)
u.d=s
s=B.b(s,a4)*v+t
B.cB($,a5)
u.e=s
s=B.b(s,a5)
B.cB($,a6)
u.f=(x-s)/2
a2.xk(A.fv,a7,u)
a2.xk(A.fw,a7,u)
a2.xk(A.jq,a7,u)
r=a2.cy.a7z(A.ew)
r.say(0,D.m)
for(x=v-7,q=a3,p=q,o=0;o<v;++o)for(n=o<7,m=o>=x,l=0;l<v;++l){s=l<7
k=s&&n
j=s&&m
i=l>=x&&n
if(k||j||i)continue
h=w.cK(l,o)?r:a3
if(h==null)continue
p=B.b(u.f,a6)+o*(B.b(u.d,a4)+0)
q=B.b(u.f,a6)+l*(B.b(u.d,a4)+0)
s=a2.a_t(o,l,v)
g=s?0.5:0
s=a2.a_u(o,l,v)
f=s?0.5:0
a7.c6(0,new B.u(p,q,p+(B.b(u.d,a4)+g),q+(B.b(u.d,a4)+f)),h)}x=a2.r
if(x!=null){w=x.gaM(x)
v=x.gaO(x)
e=a2.a2j(a8,new B.X(w,v),a3)
w=e.a
v=(a8.a-w)/2
s=e.b
d=(a8.b-s)/2
a0=B.aE()
h=a0?B.b6():new B.aY(new B.b1())
h.sLD(!0)
h.spp(D.fu)
a0=x.gaM(x)
a1=x.gaO(x)
a7.iJ(x,D.B.Lr(new B.X(a0,a1),new B.u(0,0,a0,a1)),D.B.Lr(e,new B.u(v,d,v+w,d+s)),h)}},
a_u(d,e,f){var x=e+1
if(x>=f)return!1
return this.Q.cK(x,d)},
a_t(d,e,f){var x=d+1
if(x>=f)return!1
return this.Q.cK(e,x)},
xk(d,e,f){var x,w,v,u,t,s,r,q,p,o,n,m,l="_pixelSize",k="_inset",j=7*B.b(f.d,l)+6*f.c-B.b(f.d,l),i=B.b(f.d,l)/2,h=B.b(f.f,k)+B.b(f.e,"_innerContentSize")-(j+i)
if(d===A.fv)x=new B.k(B.b(f.f,k)+i,B.b(f.f,k)+i)
else{w=f.f
x=d===A.fw?new B.k(B.b(w,k)+i,h):new B.k(h,B.b(w,k)+i)}w=this.cy
v=w.u8(A.KS,d)
v.toString
v.sh1(B.b(f.d,l))
v.say(0,D.m)
u=w.u8(A.KT,d)
u.toString
u.sh1(B.b(f.d,l))
u.say(0,new B.z(16777215))
t=w.u8(A.KU,d)
t.say(0,D.m)
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
a2j(d,e,f){var x=0.25*d.gfo()/e.ga9f()
return new B.X(x*e.a,x*e.b)},
ef(d){var x,w=this,v="_calcVersion"
if(d instanceof C.x8){if(w.c===d.c)if(B.b(w.ch,v)===B.b(d.ch,v))if(w.Q===d.Q)if(w.r==d.r)x=!w.y.k(0,d.y)||!w.z.k(0,d.z)
else x=!0
else x=!0
else x=!0
else x=!0
return x}return!0}}
C.aag.prototype={}
C.ny.prototype={
i(d){return"QrCodeElement."+this.b}}
C.ph.prototype={
i(d){return"FinderPatternPosition."+this.b}}
C.a0A.prototype={
i(d){return"QrEyeShape."+this.b}}
C.a0z.prototype={
i(d){return"QrDataModuleShape."+this.b}}
C.Hm.prototype={
gv(d){return(B.eX(A.KX)^D.e.gv(4278190080))>>>0},
k(d,e){var x
if(e==null)return!1
if(e instanceof C.Hm){x=D.m.k(0,D.m)
return x}return!1}}
C.Hl.prototype={
gv(d){return(B.eX(A.KW)^D.e.gv(4278190080))>>>0},
k(d,e){var x
if(e==null)return!1
if(e instanceof C.Hl){x=D.m.k(0,D.m)
return x}return!1}}
C.x9.prototype={}
C.xa.prototype={
i(d){return"QrValidationStatus."+this.b}}
var z=a.updateTypes([])
C.aaS.prototype={
$2(d,e){var x,w="_validationResult",v=this.a
if(B.b(v.e,w).a!==A.hp)return v.Xl(d,e,B.b(v.e,w).c)
x=v.a.z
if(x==null)x=new B.X(D.e.G(1/0,e.a,e.b),D.e.G(1/0,e.c,e.d)).gfo()
v.a.toString
v=v.a1E(d,null,x)
return v},
$S:371};(function inheritance(){var x=a.mixin,w=a.inheritMany,v=a.inherit
w(B.I,[C.O6,C.qa,C.vH,C.a0B,C.a0y,C.Ho,C.a_N,C.aag,C.Hm,C.Hl,C.x9])
v(C.x4,C.O6)
v(C.x6,B.V)
v(C.O8,B.a4)
v(C.aaS,B.kR)
v(C.AJ,B.as)
v(C.x8,B.p6)
w(B.zH,[C.ny,C.ph,C.a0A,C.a0z,C.xa])
x(C.O6,B.F)})()
B.tA(b.typeUniverse,JSON.parse('{"x4":{"F":["B"],"v":["B"],"H":["B"],"p":["B"],"F.E":"B"},"vH":{"bK":[]},"x6":{"V":[],"h":[]},"O8":{"a4":["x6"]},"AJ":{"as":[],"h":[]},"x8":{"ag":[]}}'))
var y=(function rtii(){var x=B.T
return{L:x("bK"),S:x("o<v<n>>"),Q:x("o<v<B?>>"),H:x("o<lh>"),b:x("o<qa>"),J:x("o<Ho>"),t:x("o<n>"),Z:x("lh"),N:x("m"),T:x("v<n>?"),u:x("B?")}})();(function constants(){var x=a.makeConstList
A.KW=new C.a0z(0,"square")
A.xL=new C.Hl()
A.KX=new C.a0A(0,"square")
A.xM=new C.Hm()
A.jk=new B.aF(10,10,10,10)
A.fv=new C.ph(0,"topLeft")
A.jq=new C.ph(1,"topRight")
A.fw=new C.ph(2,"bottomLeft")
A.CW=B.a(x([1,0,3,2]),y.t)
A.DY=B.a(x([6,18]),y.t)
A.DZ=B.a(x([6,22]),y.t)
A.E1=B.a(x([6,26]),y.t)
A.E7=B.a(x([6,30]),y.t)
A.Ed=B.a(x([6,34]),y.t)
A.E_=B.a(x([6,22,38]),y.t)
A.E0=B.a(x([6,24,42]),y.t)
A.E2=B.a(x([6,26,46]),y.t)
A.E6=B.a(x([6,28,50]),y.t)
A.E8=B.a(x([6,30,54]),y.t)
A.Ec=B.a(x([6,32,58]),y.t)
A.Ee=B.a(x([6,34,62]),y.t)
A.E3=B.a(x([6,26,46,66]),y.t)
A.E4=B.a(x([6,26,48,70]),y.t)
A.E5=B.a(x([6,26,50,74]),y.t)
A.E9=B.a(x([6,30,54,78]),y.t)
A.Ea=B.a(x([6,30,56,82]),y.t)
A.Eb=B.a(x([6,30,58,86]),y.t)
A.Ef=B.a(x([6,34,62,90]),y.t)
A.HF=B.a(x([6,28,50,72,94]),y.t)
A.HG=B.a(x([6,26,50,74,98]),y.t)
A.HH=B.a(x([6,30,54,78,102]),y.t)
A.HI=B.a(x([6,28,54,80,106]),y.t)
A.HJ=B.a(x([6,32,58,84,110]),y.t)
A.HK=B.a(x([6,30,58,86,114]),y.t)
A.HL=B.a(x([6,34,62,90,118]),y.t)
A.Fp=B.a(x([6,26,50,74,98,122]),y.t)
A.Fq=B.a(x([6,30,54,78,102,126]),y.t)
A.Fr=B.a(x([6,26,52,78,104,130]),y.t)
A.G8=B.a(x([6,30,56,82,108,134]),y.t)
A.Gj=B.a(x([6,34,60,86,112,138]),y.t)
A.Gu=B.a(x([6,30,58,86,114,142]),y.t)
A.GF=B.a(x([6,34,62,90,118,146]),y.t)
A.Ei=B.a(x([6,30,54,78,102,126,150]),y.t)
A.Ej=B.a(x([6,24,50,76,102,128,154]),y.t)
A.Ek=B.a(x([6,28,54,80,106,132,158]),y.t)
A.El=B.a(x([6,32,58,84,110,136,162]),y.t)
A.Em=B.a(x([6,26,54,82,110,138,166]),y.t)
A.En=B.a(x([6,30,58,86,114,142,170]),y.t)
A.Eg=B.a(x([D.fT,A.DY,A.DZ,A.E1,A.E7,A.Ed,A.E_,A.E0,A.E2,A.E6,A.E8,A.Ec,A.Ee,A.E3,A.E4,A.E5,A.E9,A.Ea,A.Eb,A.Ef,A.HF,A.HG,A.HH,A.HI,A.HJ,A.HK,A.HL,A.Fp,A.Fq,A.Fr,A.G8,A.Gj,A.Gu,A.GF,A.Ei,A.Ej,A.Ek,A.El,A.Em,A.En]),y.S)
A.ET=B.a(x([A.fv,A.jq,A.fw]),B.T("o<ph>"))
A.D0=B.a(x([1,26,19]),y.t)
A.D_=B.a(x([1,26,16]),y.t)
A.CZ=B.a(x([1,26,13]),y.t)
A.D1=B.a(x([1,26,9]),y.t)
A.D5=B.a(x([1,44,34]),y.t)
A.D4=B.a(x([1,44,28]),y.t)
A.D3=B.a(x([1,44,22]),y.t)
A.D2=B.a(x([1,44,16]),y.t)
A.D7=B.a(x([1,70,55]),y.t)
A.D6=B.a(x([1,70,44]),y.t)
A.De=B.a(x([2,35,17]),y.t)
A.Dd=B.a(x([2,35,13]),y.t)
A.CX=B.a(x([1,100,80]),y.t)
A.Dg=B.a(x([2,50,32]),y.t)
A.Df=B.a(x([2,50,24]),y.t)
A.DI=B.a(x([4,25,9]),y.t)
A.CY=B.a(x([1,134,108]),y.t)
A.Dh=B.a(x([2,67,43]),y.t)
A.GQ=B.a(x([2,33,15,2,34,16]),y.t)
A.H0=B.a(x([2,33,11,2,34,12]),y.t)
A.Di=B.a(x([2,86,68]),y.t)
A.DL=B.a(x([4,43,27]),y.t)
A.DK=B.a(x([4,43,19]),y.t)
A.DJ=B.a(x([4,43,15]),y.t)
A.Dj=B.a(x([2,98,78]),y.t)
A.DM=B.a(x([4,49,31]),y.t)
A.Hb=B.a(x([2,32,14,4,33,15]),y.t)
A.Hm=B.a(x([4,39,13,1,40,14]),y.t)
A.Db=B.a(x([2,121,97]),y.t)
A.Fs=B.a(x([2,60,38,2,61,39]),y.t)
A.FD=B.a(x([4,40,18,2,41,19]),y.t)
A.FO=B.a(x([4,40,14,2,41,15]),y.t)
A.Dc=B.a(x([2,146,116]),y.t)
A.FZ=B.a(x([3,58,36,2,59,37]),y.t)
A.G2=B.a(x([4,36,16,4,37,17]),y.t)
A.G3=B.a(x([4,36,12,4,37,13]),y.t)
A.G4=B.a(x([2,86,68,2,87,69]),y.t)
A.G5=B.a(x([4,69,43,1,70,44]),y.t)
A.G6=B.a(x([6,43,19,2,44,20]),y.t)
A.G7=B.a(x([6,43,15,2,44,16]),y.t)
A.DG=B.a(x([4,101,81]),y.t)
A.G9=B.a(x([1,80,50,4,81,51]),y.t)
A.Ga=B.a(x([4,50,22,4,51,23]),y.t)
A.Gb=B.a(x([3,36,12,8,37,13]),y.t)
A.Gc=B.a(x([2,116,92,2,117,93]),y.t)
A.Gd=B.a(x([6,58,36,2,59,37]),y.t)
A.Ge=B.a(x([4,46,20,6,47,21]),y.t)
A.Gf=B.a(x([7,42,14,4,43,15]),y.t)
A.DH=B.a(x([4,133,107]),y.t)
A.Gg=B.a(x([8,59,37,1,60,38]),y.t)
A.Gh=B.a(x([8,44,20,4,45,21]),y.t)
A.Gi=B.a(x([12,33,11,4,34,12]),y.t)
A.Gk=B.a(x([3,145,115,1,146,116]),y.t)
A.Gl=B.a(x([4,64,40,5,65,41]),y.t)
A.Gm=B.a(x([11,36,16,5,37,17]),y.t)
A.Gn=B.a(x([11,36,12,5,37,13]),y.t)
A.Go=B.a(x([5,109,87,1,110,88]),y.t)
A.Gp=B.a(x([5,65,41,5,66,42]),y.t)
A.Gq=B.a(x([5,54,24,7,55,25]),y.t)
A.CS=B.a(x([11,36,12]),y.t)
A.Gr=B.a(x([5,122,98,1,123,99]),y.t)
A.Gs=B.a(x([7,73,45,3,74,46]),y.t)
A.Gt=B.a(x([15,43,19,2,44,20]),y.t)
A.Gv=B.a(x([3,45,15,13,46,16]),y.t)
A.Gw=B.a(x([1,135,107,5,136,108]),y.t)
A.Gx=B.a(x([10,74,46,1,75,47]),y.t)
A.Gy=B.a(x([1,50,22,15,51,23]),y.t)
A.Gz=B.a(x([2,42,14,17,43,15]),y.t)
A.GA=B.a(x([5,150,120,1,151,121]),y.t)
A.GB=B.a(x([9,69,43,4,70,44]),y.t)
A.GC=B.a(x([17,50,22,1,51,23]),y.t)
A.GD=B.a(x([2,42,14,19,43,15]),y.t)
A.GE=B.a(x([3,141,113,4,142,114]),y.t)
A.GG=B.a(x([3,70,44,11,71,45]),y.t)
A.GH=B.a(x([17,47,21,4,48,22]),y.t)
A.GI=B.a(x([9,39,13,16,40,14]),y.t)
A.GJ=B.a(x([3,135,107,5,136,108]),y.t)
A.GK=B.a(x([3,67,41,13,68,42]),y.t)
A.GL=B.a(x([15,54,24,5,55,25]),y.t)
A.GM=B.a(x([15,43,15,10,44,16]),y.t)
A.GN=B.a(x([4,144,116,4,145,117]),y.t)
A.CU=B.a(x([17,68,42]),y.t)
A.GO=B.a(x([17,50,22,6,51,23]),y.t)
A.GP=B.a(x([19,46,16,6,47,17]),y.t)
A.GR=B.a(x([2,139,111,7,140,112]),y.t)
A.CV=B.a(x([17,74,46]),y.t)
A.GS=B.a(x([7,54,24,16,55,25]),y.t)
A.Dk=B.a(x([34,37,13]),y.t)
A.GT=B.a(x([4,151,121,5,152,122]),y.t)
A.GU=B.a(x([4,75,47,14,76,48]),y.t)
A.GV=B.a(x([11,54,24,14,55,25]),y.t)
A.GW=B.a(x([16,45,15,14,46,16]),y.t)
A.GX=B.a(x([6,147,117,4,148,118]),y.t)
A.GY=B.a(x([6,73,45,14,74,46]),y.t)
A.GZ=B.a(x([11,54,24,16,55,25]),y.t)
A.H_=B.a(x([30,46,16,2,47,17]),y.t)
A.H1=B.a(x([8,132,106,4,133,107]),y.t)
A.H2=B.a(x([8,75,47,13,76,48]),y.t)
A.H3=B.a(x([7,54,24,22,55,25]),y.t)
A.H4=B.a(x([22,45,15,13,46,16]),y.t)
A.H5=B.a(x([10,142,114,2,143,115]),y.t)
A.H6=B.a(x([19,74,46,4,75,47]),y.t)
A.H7=B.a(x([28,50,22,6,51,23]),y.t)
A.H8=B.a(x([33,46,16,4,47,17]),y.t)
A.H9=B.a(x([8,152,122,4,153,123]),y.t)
A.Ha=B.a(x([22,73,45,3,74,46]),y.t)
A.Hc=B.a(x([8,53,23,26,54,24]),y.t)
A.Hd=B.a(x([12,45,15,28,46,16]),y.t)
A.He=B.a(x([3,147,117,10,148,118]),y.t)
A.Hf=B.a(x([3,73,45,23,74,46]),y.t)
A.Hg=B.a(x([4,54,24,31,55,25]),y.t)
A.Hh=B.a(x([11,45,15,31,46,16]),y.t)
A.Hi=B.a(x([7,146,116,7,147,117]),y.t)
A.Hj=B.a(x([21,73,45,7,74,46]),y.t)
A.Hk=B.a(x([1,53,23,37,54,24]),y.t)
A.Hl=B.a(x([19,45,15,26,46,16]),y.t)
A.Hn=B.a(x([5,145,115,10,146,116]),y.t)
A.Ho=B.a(x([19,75,47,10,76,48]),y.t)
A.Hp=B.a(x([15,54,24,25,55,25]),y.t)
A.Hq=B.a(x([23,45,15,25,46,16]),y.t)
A.Hr=B.a(x([13,145,115,3,146,116]),y.t)
A.Hs=B.a(x([2,74,46,29,75,47]),y.t)
A.Ht=B.a(x([42,54,24,1,55,25]),y.t)
A.Hu=B.a(x([23,45,15,28,46,16]),y.t)
A.CT=B.a(x([17,145,115]),y.t)
A.Hv=B.a(x([10,74,46,23,75,47]),y.t)
A.Hw=B.a(x([10,54,24,35,55,25]),y.t)
A.Ft=B.a(x([19,45,15,35,46,16]),y.t)
A.Fu=B.a(x([17,145,115,1,146,116]),y.t)
A.Fv=B.a(x([14,74,46,21,75,47]),y.t)
A.Fw=B.a(x([29,54,24,19,55,25]),y.t)
A.Fx=B.a(x([11,45,15,46,46,16]),y.t)
A.Fy=B.a(x([13,145,115,6,146,116]),y.t)
A.Fz=B.a(x([14,74,46,23,75,47]),y.t)
A.FA=B.a(x([44,54,24,7,55,25]),y.t)
A.FB=B.a(x([59,46,16,1,47,17]),y.t)
A.FC=B.a(x([12,151,121,7,152,122]),y.t)
A.FE=B.a(x([12,75,47,26,76,48]),y.t)
A.FF=B.a(x([39,54,24,14,55,25]),y.t)
A.FG=B.a(x([22,45,15,41,46,16]),y.t)
A.FH=B.a(x([6,151,121,14,152,122]),y.t)
A.FI=B.a(x([6,75,47,34,76,48]),y.t)
A.FJ=B.a(x([46,54,24,10,55,25]),y.t)
A.FK=B.a(x([2,45,15,64,46,16]),y.t)
A.FL=B.a(x([17,152,122,4,153,123]),y.t)
A.FM=B.a(x([29,74,46,14,75,47]),y.t)
A.FN=B.a(x([49,54,24,10,55,25]),y.t)
A.FP=B.a(x([24,45,15,46,46,16]),y.t)
A.FQ=B.a(x([4,152,122,18,153,123]),y.t)
A.FR=B.a(x([13,74,46,32,75,47]),y.t)
A.FS=B.a(x([48,54,24,14,55,25]),y.t)
A.FT=B.a(x([42,45,15,32,46,16]),y.t)
A.FU=B.a(x([20,147,117,4,148,118]),y.t)
A.FV=B.a(x([40,75,47,7,76,48]),y.t)
A.FW=B.a(x([43,54,24,22,55,25]),y.t)
A.FX=B.a(x([10,45,15,67,46,16]),y.t)
A.FY=B.a(x([19,148,118,6,149,119]),y.t)
A.G_=B.a(x([18,75,47,31,76,48]),y.t)
A.G0=B.a(x([34,54,24,34,55,25]),y.t)
A.G1=B.a(x([20,45,15,61,46,16]),y.t)
A.e7=B.a(x([A.D0,A.D_,A.CZ,A.D1,A.D5,A.D4,A.D3,A.D2,A.D7,A.D6,A.De,A.Dd,A.CX,A.Dg,A.Df,A.DI,A.CY,A.Dh,A.GQ,A.H0,A.Di,A.DL,A.DK,A.DJ,A.Dj,A.DM,A.Hb,A.Hm,A.Db,A.Fs,A.FD,A.FO,A.Dc,A.FZ,A.G2,A.G3,A.G4,A.G5,A.G6,A.G7,A.DG,A.G9,A.Ga,A.Gb,A.Gc,A.Gd,A.Ge,A.Gf,A.DH,A.Gg,A.Gh,A.Gi,A.Gk,A.Gl,A.Gm,A.Gn,A.Go,A.Gp,A.Gq,A.CS,A.Gr,A.Gs,A.Gt,A.Gv,A.Gw,A.Gx,A.Gy,A.Gz,A.GA,A.GB,A.GC,A.GD,A.GE,A.GG,A.GH,A.GI,A.GJ,A.GK,A.GL,A.GM,A.GN,A.CU,A.GO,A.GP,A.GR,A.CV,A.GS,A.Dk,A.GT,A.GU,A.GV,A.GW,A.GX,A.GY,A.GZ,A.H_,A.H1,A.H2,A.H3,A.H4,A.H5,A.H6,A.H7,A.H8,A.H9,A.Ha,A.Hc,A.Hd,A.He,A.Hf,A.Hg,A.Hh,A.Hi,A.Hj,A.Hk,A.Hl,A.Hn,A.Ho,A.Hp,A.Hq,A.Hr,A.Hs,A.Ht,A.Hu,A.CT,A.Hv,A.Hw,A.Ft,A.Fu,A.Fv,A.Fw,A.Fx,A.Fy,A.Fz,A.FA,A.FB,A.FC,A.FE,A.FF,A.FG,A.FH,A.FI,A.FJ,A.FK,A.FL,A.FM,A.FN,A.FP,A.FQ,A.FR,A.FS,A.FT,A.FU,A.FV,A.FW,A.FX,A.FY,A.G_,A.G0,A.G1]),y.S)
A.KS=new C.ny(0,"finderPatternOuter")
A.KT=new C.ny(1,"finderPatternInner")
A.KU=new C.ny(2,"finderPatternDot")
A.ew=new C.ny(3,"codePixel")
A.KV=new C.ny(4,"codePixelEmpty")
A.hp=new C.xa(0,"valid")
A.KY=new C.xa(1,"contentTooLong")
A.KZ=new C.xa(2,"error")
A.a6=new B.t(!0,D.m,null,null,null,null,14,D.y,null,null,null,null,null,null,null,null,null,D.h,null,null,null,null,null,null,null)})();(function lazyInitializers(){var x=a.lazyFinal
x($,"aG8","afo",()=>C.aAo())
x($,"aFP","aiT",()=>C.aAn())})()}
$__dart_deferred_initializers__["KA+CCF5jkCp5nbGJEx4vNs4aYdY="] = $__dart_deferred_initializers__.current
