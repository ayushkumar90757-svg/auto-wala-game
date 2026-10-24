(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ir="160",Uo=0,xr=1,Fo=2,vr=0,Xa=1,qa=2,rn=3,vn=0,Lt=1,Xt=2,gn=0,ti=1,Mr=2,Sr=3,Er=4,No=5,Rn=100,Oo=101,Bo=102,yr=103,Tr=104,Go=200,zo=201,ko=202,Ho=203,Ks=204,Zs=205,Vo=206,Wo=207,Xo=208,qo=209,Yo=210,Ko=211,Zo=212,$o=213,jo=214,Jo=0,Qo=1,ec=2,$i=3,tc=4,nc=5,ic=6,sc=7,Ya=0,rc=1,ac=2,_n=0,oc=1,cc=2,lc=3,hc=4,dc=5,uc=6,Ka=300,ii=301,si=302,$s=303,js=304,ss=306,Ln=1e3,qt=1001,Js=1002,bt=1003,wr=1004,ps=1005,Gt=1006,fc=1007,xi=1008,xn=1009,pc=1010,mc=1011,sr=1012,Za=1013,pn=1014,mn=1015,vi=1016,$a=1017,ja=1018,Dn=1020,gc=1021,Yt=1023,_c=1024,xc=1025,In=1026,ri=1027,vc=1028,Ja=1029,Mc=1030,Qa=1031,eo=1033,ms=33776,gs=33777,_s=33778,xs=33779,br=35840,Ar=35841,Rr=35842,Cr=35843,to=36196,Lr=37492,Pr=37496,Dr=37808,Ir=37809,Ur=37810,Fr=37811,Nr=37812,Or=37813,Br=37814,Gr=37815,zr=37816,kr=37817,Hr=37818,Vr=37819,Wr=37820,Xr=37821,vs=36492,qr=36494,Yr=36495,Sc=36283,Kr=36284,Zr=36285,$r=36286,no=3e3,Un=3001,Ec=3200,yc=3201,io=0,Tc=1,zt="",vt="srgb",cn="srgb-linear",rr="display-p3",rs="display-p3-linear",ji="linear",et="srgb",Ji="rec709",Qi="p3",On=7680,jr=519,wc=512,bc=513,Ac=514,so=515,Rc=516,Cc=517,Lc=518,Pc=519,Jr=35044,Qr="300 es",Qs=1035,an=2e3,es=2001;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const St=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ms=Math.PI/180,ts=180/Math.PI;function Mi(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(St[s&255]+St[s>>8&255]+St[s>>16&255]+St[s>>24&255]+"-"+St[e&255]+St[e>>8&255]+"-"+St[e>>16&15|64]+St[e>>24&255]+"-"+St[t&63|128]+St[t>>8&255]+"-"+St[t>>16&255]+St[t>>24&255]+St[n&255]+St[n>>8&255]+St[n>>16&255]+St[n>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function Dc(s,e){return(s%e+e)%e}function Ss(s,e,t){return(1-t)*s+t*e}function ea(s){return(s&s-1)===0&&s!==0}function er(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function di(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Rt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Ve{constructor(e=0,t=0){Ve.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ke{constructor(e,t,n,i,r,o,a,c,l){ke.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],d=n[2],m=n[5],_=n[8],g=i[0],p=i[3],u=i[6],S=i[1],x=i[4],y=i[7],R=i[2],A=i[5],b=i[8];return r[0]=o*g+a*S+c*R,r[3]=o*p+a*x+c*A,r[6]=o*u+a*y+c*b,r[1]=l*g+h*S+f*R,r[4]=l*p+h*x+f*A,r[7]=l*u+h*y+f*b,r[2]=d*g+m*S+_*R,r[5]=d*p+m*x+_*A,r[8]=d*u+m*y+_*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,d=a*c-h*r,m=l*r-o*c,_=t*f+n*d+i*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=f*g,e[1]=(i*l-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(h*t-i*c)*g,e[5]=(i*r-a*t)*g,e[6]=m*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Es.makeScale(e,t)),this}rotate(e){return this.premultiply(Es.makeRotation(-e)),this}translate(e,t){return this.premultiply(Es.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Es=new ke;function ro(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ns(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Ic(){const s=ns("canvas");return s.style.display="block",s}const ta={};function _i(s){s in ta||(ta[s]=!0,console.warn(s))}const na=new ke().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ia=new ke().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),wi={[cn]:{transfer:ji,primaries:Ji,toReference:s=>s,fromReference:s=>s},[vt]:{transfer:et,primaries:Ji,toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[rs]:{transfer:ji,primaries:Qi,toReference:s=>s.applyMatrix3(ia),fromReference:s=>s.applyMatrix3(na)},[rr]:{transfer:et,primaries:Qi,toReference:s=>s.convertSRGBToLinear().applyMatrix3(ia),fromReference:s=>s.applyMatrix3(na).convertLinearToSRGB()}},Uc=new Set([cn,rs]),Ke={enabled:!0,_workingColorSpace:cn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Uc.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=wi[e].toReference,i=wi[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return wi[s].primaries},getTransfer:function(s){return s===zt?ji:wi[s].transfer}};function ni(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ys(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bn;class ao{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bn===void 0&&(Bn=ns("canvas")),Bn.width=e.width,Bn.height=e.height;const n=Bn.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ns("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=ni(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ni(t[n]/255)*255):t[n]=ni(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Fc=0;class oo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fc++}),this.uuid=Mi(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ts(i[o].image)):r.push(Ts(i[o]))}else r=Ts(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ts(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ao.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Nc=0;class Pt extends oi{constructor(e=Pt.DEFAULT_IMAGE,t=Pt.DEFAULT_MAPPING,n=qt,i=qt,r=Gt,o=xi,a=Yt,c=xn,l=Pt.DEFAULT_ANISOTROPY,h=zt){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Nc++}),this.uuid=Mi(),this.name="",this.source=new oo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(_i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===Un?vt:zt),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ka)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ln:e.x=e.x-Math.floor(e.x);break;case qt:e.x=e.x<0?0:1;break;case Js:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ln:e.y=e.y-Math.floor(e.y);break;case qt:e.y=e.y<0?0:1;break;case Js:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return _i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===vt?Un:no}set encoding(e){_i("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===Un?vt:zt}}Pt.DEFAULT_IMAGE=null;Pt.DEFAULT_MAPPING=Ka;Pt.DEFAULT_ANISOTROPY=1;class tt{constructor(e=0,t=0,n=0,i=1){tt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],h=c[4],f=c[8],d=c[1],m=c[5],_=c[9],g=c[2],p=c[6],u=c[10];if(Math.abs(h-d)<.01&&Math.abs(f-g)<.01&&Math.abs(_-p)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+g)<.1&&Math.abs(_+p)<.1&&Math.abs(l+m+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,y=(m+1)/2,R=(u+1)/2,A=(h+d)/4,b=(f+g)/4,k=(_+p)/4;return x>y&&x>R?x<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(x),i=A/n,r=b/n):y>R?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=A/i,r=k/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=b/r,i=k/r),this.set(n,i,r,t),this}let S=Math.sqrt((p-_)*(p-_)+(f-g)*(f-g)+(d-h)*(d-h));return Math.abs(S)<.001&&(S=1),this.x=(p-_)/S,this.y=(f-g)/S,this.z=(d-h)/S,this.w=Math.acos((l+m+u-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Oc extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new tt(0,0,e,t),this.scissorTest=!1,this.viewport=new tt(0,0,e,t);const i={width:e,height:t,depth:1};n.encoding!==void 0&&(_i("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===Un?vt:zt),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Gt,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},n),this.texture=new Pt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps,this.texture.internalFormat=n.internalFormat,this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new oo(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Oc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class co extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Bc extends Pt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=bt,this.minFilter=bt,this.wrapR=qt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Si{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],h=n[i+2],f=n[i+3];const d=r[o+0],m=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=_,e[t+3]=g;return}if(f!==g||c!==d||l!==m||h!==_){let p=1-a;const u=c*d+l*m+h*_+f*g,S=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const R=Math.sqrt(x),A=Math.atan2(R,u*S);p=Math.sin(p*A)/R,a=Math.sin(a*A)/R}const y=a*S;if(c=c*p+d*y,l=l*p+m*y,h=h*p+_*y,f=f*p+g*y,p===1-a){const R=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=R,l*=R,h*=R,f*=R}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],h=n[i+3],f=r[o],d=r[o+1],m=r[o+2],_=r[o+3];return e[t]=a*_+h*f+c*m-l*d,e[t+1]=c*_+h*d+l*f-a*m,e[t+2]=l*_+h*m+a*d-c*f,e[t+3]=h*_-a*f-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(i/2),f=a(r/2),d=c(n/2),m=c(i/2),_=c(r/2);switch(o){case"XYZ":this._x=d*h*f+l*m*_,this._y=l*m*f-d*h*_,this._z=l*h*_+d*m*f,this._w=l*h*f-d*m*_;break;case"YXZ":this._x=d*h*f+l*m*_,this._y=l*m*f-d*h*_,this._z=l*h*_-d*m*f,this._w=l*h*f+d*m*_;break;case"ZXY":this._x=d*h*f-l*m*_,this._y=l*m*f+d*h*_,this._z=l*h*_+d*m*f,this._w=l*h*f-d*m*_;break;case"ZYX":this._x=d*h*f-l*m*_,this._y=l*m*f+d*h*_,this._z=l*h*_-d*m*f,this._w=l*h*f+d*m*_;break;case"YZX":this._x=d*h*f+l*m*_,this._y=l*m*f+d*h*_,this._z=l*h*_-d*m*f,this._w=l*h*f-d*m*_;break;case"XZY":this._x=d*h*f-l*m*_,this._y=l*m*f-d*h*_,this._z=l*h*_+d*m*f,this._w=l*h*f+d*m*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],d=n+a+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>f){const m=2*Math.sqrt(1+n-a-f);this._w=(h-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>f){const m=2*Math.sqrt(1+a-n-f);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+h)/m}else{const m=2*Math.sqrt(1+f-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+i*l-r*c,this._y=i*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-i*a,this._w=o*h-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),h=Math.atan2(l,a),f=Math.sin((1-t)*h)/l,d=Math.sin(t*h)/l;return this._w=o*f+this._w*d,this._x=n*f+this._x*d,this._y=i*f+this._y*d,this._z=r*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(t*Math.cos(i),n*Math.sin(r),n*Math.cos(r),t*Math.sin(i))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sa.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sa.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),h=2*(a*t-r*i),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=i+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ws.copy(this).projectOnVector(e),this.sub(ws)}reflect(e){return this.sub(ws.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(At(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ws=new P,sa=new Si;class Ei{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(kt.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(kt.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kt.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kt):kt.fromBufferAttribute(r,o),kt.applyMatrix4(e.matrixWorld),this.expandByPoint(kt);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bi.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bi.copy(n.boundingBox)),bi.applyMatrix4(e.matrixWorld),this.union(bi)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,kt),kt.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ui),Ai.subVectors(this.max,ui),Gn.subVectors(e.a,ui),zn.subVectors(e.b,ui),kn.subVectors(e.c,ui),ln.subVectors(zn,Gn),hn.subVectors(kn,zn),En.subVectors(Gn,kn);let t=[0,-ln.z,ln.y,0,-hn.z,hn.y,0,-En.z,En.y,ln.z,0,-ln.x,hn.z,0,-hn.x,En.z,0,-En.x,-ln.y,ln.x,0,-hn.y,hn.x,0,-En.y,En.x,0];return!bs(t,Gn,zn,kn,Ai)||(t=[1,0,0,0,1,0,0,0,1],!bs(t,Gn,zn,kn,Ai))?!1:(Ri.crossVectors(ln,hn),t=[Ri.x,Ri.y,Ri.z],bs(t,Gn,zn,kn,Ai))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kt).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kt).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Qt[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Qt[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Qt[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Qt[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Qt[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Qt[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Qt[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Qt[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Qt),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Qt=[new P,new P,new P,new P,new P,new P,new P,new P],kt=new P,bi=new Ei,Gn=new P,zn=new P,kn=new P,ln=new P,hn=new P,En=new P,ui=new P,Ai=new P,Ri=new P,yn=new P;function bs(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){yn.fromArray(s,r);const a=i.x*Math.abs(yn.x)+i.y*Math.abs(yn.y)+i.z*Math.abs(yn.z),c=e.dot(yn),l=t.dot(yn),h=n.dot(yn);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}const Gc=new Ei,fi=new P,As=new P;class as{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Gc.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;fi.subVectors(e,this.center);const t=fi.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(fi,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(As.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(fi.copy(e.center).add(As)),this.expandByPoint(fi.copy(e.center).sub(As))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const en=new P,Rs=new P,Ci=new P,dn=new P,Cs=new P,Li=new P,Ls=new P;class lo{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,en)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=en.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(en.copy(this.origin).addScaledVector(this.direction,t),en.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Rs.copy(e).add(t).multiplyScalar(.5),Ci.copy(t).sub(e).normalize(),dn.copy(this.origin).sub(Rs);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Ci),a=dn.dot(this.direction),c=-dn.dot(Ci),l=dn.lengthSq(),h=Math.abs(1-o*o);let f,d,m,_;if(h>0)if(f=o*c-a,d=o*a-c,_=r*h,f>=0)if(d>=-_)if(d<=_){const g=1/h;f*=g,d*=g,m=f*(f+o*d+2*a)+d*(o*f+d+2*c)+l}else d=r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d=-r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;else d<=-_?(f=Math.max(0,-(-o*r+a)),d=f>0?-r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l):d<=_?(f=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(f=Math.max(0,-(o*r+a)),d=f>0?r:Math.min(Math.max(-r,-c),r),m=-f*f+d*(d+2*c)+l);else d=o>0?-r:r,f=Math.max(0,-(o*d+a)),m=-f*f+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Rs).addScaledVector(Ci,d),m}intersectSphere(e,t){en.subVectors(e.center,this.origin);const n=en.dot(this.direction),i=en.dot(en)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(e.min.z-d.z)*f,c=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,c=(e.min.z-d.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,en)!==null}intersectTriangle(e,t,n,i,r){Cs.subVectors(t,e),Li.subVectors(n,e),Ls.crossVectors(Cs,Li);let o=this.direction.dot(Ls),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;dn.subVectors(this.origin,e);const c=a*this.direction.dot(Li.crossVectors(dn,Li));if(c<0)return null;const l=a*this.direction.dot(Cs.cross(dn));if(l<0||c+l>o)return null;const h=-a*dn.dot(Ls);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class lt{constructor(e,t,n,i,r,o,a,c,l,h,f,d,m,_,g,p){lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,h,f,d,m,_,g,p)}set(e,t,n,i,r,o,a,c,l,h,f,d,m,_,g,p){const u=this.elements;return u[0]=e,u[4]=t,u[8]=n,u[12]=i,u[1]=r,u[5]=o,u[9]=a,u[13]=c,u[2]=l,u[6]=h,u[10]=f,u[14]=d,u[3]=m,u[7]=_,u[11]=g,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new lt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Hn.setFromMatrixColumn(e,0).length(),r=1/Hn.setFromMatrixColumn(e,1).length(),o=1/Hn.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){const d=o*h,m=o*f,_=a*h,g=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=m+_*l,t[5]=d-g*l,t[9]=-a*c,t[2]=g-d*l,t[6]=_+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*h,m=c*f,_=l*h,g=l*f;t[0]=d+g*a,t[4]=_*a-m,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=m*a-_,t[6]=g+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*h,m=c*f,_=l*h,g=l*f;t[0]=d-g*a,t[4]=-o*f,t[8]=_+m*a,t[1]=m+_*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*h,m=o*f,_=a*h,g=a*f;t[0]=c*h,t[4]=_*l-m,t[8]=d*l+g,t[1]=c*f,t[5]=g*l+d,t[9]=m*l-_,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=g-d*f,t[8]=_*f+m,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=m*f+_,t[10]=d-g*f}else if(e.order==="XZY"){const d=o*c,m=o*l,_=a*c,g=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=d*f+g,t[5]=o*h,t[9]=m*f-_,t[2]=_*f-m,t[6]=a*h,t[10]=g*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zc,e,kc)}lookAt(e,t,n){const i=this.elements;return It.subVectors(e,t),It.lengthSq()===0&&(It.z=1),It.normalize(),un.crossVectors(n,It),un.lengthSq()===0&&(Math.abs(n.z)===1?It.x+=1e-4:It.z+=1e-4,It.normalize(),un.crossVectors(n,It)),un.normalize(),Pi.crossVectors(It,un),i[0]=un.x,i[4]=Pi.x,i[8]=It.x,i[1]=un.y,i[5]=Pi.y,i[9]=It.y,i[2]=un.z,i[6]=Pi.z,i[10]=It.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],d=n[9],m=n[13],_=n[2],g=n[6],p=n[10],u=n[14],S=n[3],x=n[7],y=n[11],R=n[15],A=i[0],b=i[4],k=i[8],M=i[12],T=i[1],G=i[5],H=i[9],Q=i[13],L=i[2],F=i[6],W=i[10],K=i[14],X=i[3],Y=i[7],$=i[11],te=i[15];return r[0]=o*A+a*T+c*L+l*X,r[4]=o*b+a*G+c*F+l*Y,r[8]=o*k+a*H+c*W+l*$,r[12]=o*M+a*Q+c*K+l*te,r[1]=h*A+f*T+d*L+m*X,r[5]=h*b+f*G+d*F+m*Y,r[9]=h*k+f*H+d*W+m*$,r[13]=h*M+f*Q+d*K+m*te,r[2]=_*A+g*T+p*L+u*X,r[6]=_*b+g*G+p*F+u*Y,r[10]=_*k+g*H+p*W+u*$,r[14]=_*M+g*Q+p*K+u*te,r[3]=S*A+x*T+y*L+R*X,r[7]=S*b+x*G+y*F+R*Y,r[11]=S*k+x*H+y*W+R*$,r[15]=S*M+x*Q+y*K+R*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],d=e[10],m=e[14],_=e[3],g=e[7],p=e[11],u=e[15];return _*(+r*c*f-i*l*f-r*a*d+n*l*d+i*a*m-n*c*m)+g*(+t*c*m-t*l*d+r*o*d-i*o*m+i*l*h-r*c*h)+p*(+t*l*f-t*a*m-r*o*f+n*o*m+r*a*h-n*l*h)+u*(-i*a*h-t*c*f+t*a*d+i*o*f-n*o*d+n*c*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],d=e[10],m=e[11],_=e[12],g=e[13],p=e[14],u=e[15],S=f*p*l-g*d*l+g*c*m-a*p*m-f*c*u+a*d*u,x=_*d*l-h*p*l-_*c*m+o*p*m+h*c*u-o*d*u,y=h*g*l-_*f*l+_*a*m-o*g*m-h*a*u+o*f*u,R=_*f*c-h*g*c-_*a*d+o*g*d+h*a*p-o*f*p,A=t*S+n*x+i*y+r*R;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=S*b,e[1]=(g*d*r-f*p*r-g*i*m+n*p*m+f*i*u-n*d*u)*b,e[2]=(a*p*r-g*c*r+g*i*l-n*p*l-a*i*u+n*c*u)*b,e[3]=(f*c*r-a*d*r-f*i*l+n*d*l+a*i*m-n*c*m)*b,e[4]=x*b,e[5]=(h*p*r-_*d*r+_*i*m-t*p*m-h*i*u+t*d*u)*b,e[6]=(_*c*r-o*p*r-_*i*l+t*p*l+o*i*u-t*c*u)*b,e[7]=(o*d*r-h*c*r+h*i*l-t*d*l-o*i*m+t*c*m)*b,e[8]=y*b,e[9]=(_*f*r-h*g*r-_*n*m+t*g*m+h*n*u-t*f*u)*b,e[10]=(o*g*r-_*a*r+_*n*l-t*g*l-o*n*u+t*a*u)*b,e[11]=(h*a*r-o*f*r-h*n*l+t*f*l+o*n*m-t*a*m)*b,e[12]=R*b,e[13]=(h*g*i-_*f*i+_*n*d-t*g*d-h*n*p+t*f*p)*b,e[14]=(_*a*i-o*g*i-_*n*c+t*g*c+o*n*p-t*a*p)*b,e[15]=(o*f*i-h*a*i+h*n*c-t*f*c-o*n*d+t*a*d)*b,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,h*a+n,h*c-i*o,0,l*c-i*a,h*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,d=r*l,m=r*h,_=r*f,g=o*h,p=o*f,u=a*f,S=c*l,x=c*h,y=c*f,R=n.x,A=n.y,b=n.z;return i[0]=(1-(g+u))*R,i[1]=(m+y)*R,i[2]=(_-x)*R,i[3]=0,i[4]=(m-y)*A,i[5]=(1-(d+u))*A,i[6]=(p+S)*A,i[7]=0,i[8]=(_+x)*b,i[9]=(p-S)*b,i[10]=(1-(d+g))*b,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Hn.set(i[0],i[1],i[2]).length();const o=Hn.set(i[4],i[5],i[6]).length(),a=Hn.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Ht.copy(this);const l=1/r,h=1/o,f=1/a;return Ht.elements[0]*=l,Ht.elements[1]*=l,Ht.elements[2]*=l,Ht.elements[4]*=h,Ht.elements[5]*=h,Ht.elements[6]*=h,Ht.elements[8]*=f,Ht.elements[9]*=f,Ht.elements[10]*=f,t.setFromRotationMatrix(Ht),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=an){const c=this.elements,l=2*r/(t-e),h=2*r/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i);let m,_;if(a===an)m=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===es)m=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=an){const c=this.elements,l=1/(t-e),h=1/(n-i),f=1/(o-r),d=(t+e)*l,m=(n+i)*h;let _,g;if(a===an)_=(o+r)*f,g=-2*f;else if(a===es)_=r*f,g=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*h,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=g,c[14]=-_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Hn=new P,Ht=new lt,zc=new P(0,0,0),kc=new P(1,1,1),un=new P,Pi=new P,It=new P,ra=new lt,aa=new Si;class os{constructor(e=0,t=0,n=0,i=os.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],h=i[9],f=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(At(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-At(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(At(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-At(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return ra.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ra,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return aa.setFromEuler(this),this.setFromQuaternion(aa,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}os.DEFAULT_ORDER="XYZ";class ho{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Hc=0;const oa=new P,Vn=new Si,tn=new lt,Di=new P,pi=new P,Vc=new P,Wc=new Si,ca=new P(1,0,0),la=new P(0,1,0),ha=new P(0,0,1),Xc={type:"added"},qc={type:"removed"};class ht extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Hc++}),this.uuid=Mi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ht.DEFAULT_UP.clone();const e=new P,t=new os,n=new Si,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new lt},normalMatrix:{value:new ke}}),this.matrix=new lt,this.matrixWorld=new lt,this.matrixAutoUpdate=ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ho,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.multiply(Vn),this}rotateOnWorldAxis(e,t){return Vn.setFromAxisAngle(e,t),this.quaternion.premultiply(Vn),this}rotateX(e){return this.rotateOnAxis(ca,e)}rotateY(e){return this.rotateOnAxis(la,e)}rotateZ(e){return this.rotateOnAxis(ha,e)}translateOnAxis(e,t){return oa.copy(e).applyQuaternion(this.quaternion),this.position.add(oa.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ca,e)}translateY(e){return this.translateOnAxis(la,e)}translateZ(e){return this.translateOnAxis(ha,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(tn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Di.copy(e):Di.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),pi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?tn.lookAt(pi,Di,this.up):tn.lookAt(Di,pi,this.up),this.quaternion.setFromRotationMatrix(tn),i&&(tn.extractRotation(i.matrixWorld),Vn.setFromRotationMatrix(tn),this.quaternion.premultiply(Vn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Xc)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(qc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),tn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),tn.multiply(e.parent.matrixWorld)),e.applyMatrix4(tn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,e,Vc),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(pi,Wc,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++){const r=t[n];(r.matrixWorldAutoUpdate===!0||e===!0)&&r.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxGeometryCount=this._maxGeometryCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){const f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),d=o(e.skeletons),m=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const c=[];for(const l in a){const h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}ht.DEFAULT_UP=new P(0,1,0);ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Vt=new P,nn=new P,Ps=new P,sn=new P,Wn=new P,Xn=new P,da=new P,Ds=new P,Is=new P,Us=new P;let Ii=!1;class Wt{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Vt.subVectors(e,t),i.cross(Vt);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Vt.subVectors(i,t),nn.subVectors(n,t),Ps.subVectors(e,t);const o=Vt.dot(Vt),a=Vt.dot(nn),c=Vt.dot(Ps),l=nn.dot(nn),h=nn.dot(Ps),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;const d=1/f,m=(l*c-a*h)*d,_=(o*h-a*c)*d;return r.set(1-m-_,_,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,sn)===null?!1:sn.x>=0&&sn.y>=0&&sn.x+sn.y<=1}static getUV(e,t,n,i,r,o,a,c){return Ii===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ii=!0),this.getInterpolation(e,t,n,i,r,o,a,c)}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,sn)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,sn.x),c.addScaledVector(o,sn.y),c.addScaledVector(a,sn.z),c)}static isFrontFacing(e,t,n,i){return Vt.subVectors(n,t),nn.subVectors(e,t),Vt.cross(nn).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vt.subVectors(this.c,this.b),nn.subVectors(this.a,this.b),Vt.cross(nn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wt.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wt.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,i,r){return Ii===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Ii=!0),Wt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}getInterpolation(e,t,n,i,r){return Wt.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Wt.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wt.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Wn.subVectors(i,n),Xn.subVectors(r,n),Ds.subVectors(e,n);const c=Wn.dot(Ds),l=Xn.dot(Ds);if(c<=0&&l<=0)return t.copy(n);Is.subVectors(e,i);const h=Wn.dot(Is),f=Xn.dot(Is);if(h>=0&&f<=h)return t.copy(i);const d=c*f-h*l;if(d<=0&&c>=0&&h<=0)return o=c/(c-h),t.copy(n).addScaledVector(Wn,o);Us.subVectors(e,r);const m=Wn.dot(Us),_=Xn.dot(Us);if(_>=0&&m<=_)return t.copy(r);const g=m*l-c*_;if(g<=0&&l>=0&&_<=0)return a=l/(l-_),t.copy(n).addScaledVector(Xn,a);const p=h*_-m*f;if(p<=0&&f-h>=0&&m-_>=0)return da.subVectors(r,i),a=(f-h)/(f-h+(m-_)),t.copy(i).addScaledVector(da,a);const u=1/(p+g+d);return o=g*u,a=d*u,t.copy(n).addScaledVector(Wn,o).addScaledVector(Xn,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const uo={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},fn={h:0,s:0,l:0},Ui={h:0,s:0,l:0};function Fs(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class He{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ke.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=Ke.workingColorSpace){return this.r=e,this.g=t,this.b=n,Ke.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=Ke.workingColorSpace){if(e=Dc(e,1),t=At(t,0,1),n=At(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Fs(o,r,e+1/3),this.g=Fs(o,r,e),this.b=Fs(o,r,e-1/3)}return Ke.toWorkingColorSpace(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=uo[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ni(e.r),this.g=ni(e.g),this.b=ni(e.b),this}copyLinearToSRGB(e){return this.r=ys(e.r),this.g=ys(e.g),this.b=ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return Ke.fromWorkingColorSpace(Et.copy(this),e),Math.round(At(Et.r*255,0,255))*65536+Math.round(At(Et.g*255,0,255))*256+Math.round(At(Et.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ke.workingColorSpace){Ke.fromWorkingColorSpace(Et.copy(this),t);const n=Et.r,i=Et.g,r=Et.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const h=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=Ke.workingColorSpace){return Ke.fromWorkingColorSpace(Et.copy(this),t),e.r=Et.r,e.g=Et.g,e.b=Et.b,e}getStyle(e=vt){Ke.fromWorkingColorSpace(Et.copy(this),e);const t=Et.r,n=Et.g,i=Et.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(fn),this.setHSL(fn.h+e,fn.s+t,fn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(fn),e.getHSL(Ui);const n=Ss(fn.h,Ui.h,t),i=Ss(fn.s,Ui.s,t),r=Ss(fn.l,Ui.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Et=new He;He.NAMES=uo;let Yc=0;class ci extends oi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Yc++}),this.uuid=Mi(),this.name="",this.type="Material",this.blending=ti,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ks,this.blendDst=Zs,this.blendEquation=Rn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new He(0,0,0),this.blendAlpha=0,this.depthFunc=$i,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jr,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=On,this.stencilZFail=On,this.stencilZPass=On,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ti&&(n.blending=this.blending),this.side!==vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Ks&&(n.blendSrc=this.blendSrc),this.blendDst!==Zs&&(n.blendDst=this.blendDst),this.blendEquation!==Rn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==$i&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jr&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==On&&(n.stencilFail=this.stencilFail),this.stencilZFail!==On&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==On&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Qe extends ci{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new He(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Ya,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dt=new P,Fi=new Ve;class Kt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=mn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return console.warn("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Fi.fromBufferAttribute(this,t),Fi.applyMatrix3(e),this.setXY(t,Fi.x,Fi.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix3(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyMatrix4(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.applyNormalMatrix(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dt.fromBufferAttribute(this,t),dt.transformDirection(e),this.setXYZ(t,dt.x,dt.y,dt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=di(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Rt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=di(t,this.array)),t}setX(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=di(t,this.array)),t}setY(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=di(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=di(t,this.array)),t}setW(e,t){return this.normalized&&(t=Rt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Rt(t,this.array),n=Rt(n,this.array),i=Rt(i,this.array),r=Rt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jr&&(e.usage=this.usage),e}}class fo extends Kt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class po extends Kt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class ft extends Kt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Kc=0;const Ot=new lt,Ns=new ht,qn=new P,Ut=new Ei,mi=new Ei,xt=new P;class Ft extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kc++}),this.uuid=Mi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ro(e)?po:fo)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ot.makeRotationFromQuaternion(e),this.applyMatrix4(Ot),this}rotateX(e){return Ot.makeRotationX(e),this.applyMatrix4(Ot),this}rotateY(e){return Ot.makeRotationY(e),this.applyMatrix4(Ot),this}rotateZ(e){return Ot.makeRotationZ(e),this.applyMatrix4(Ot),this}translate(e,t,n){return Ot.makeTranslation(e,t,n),this.applyMatrix4(Ot),this}scale(e,t,n){return Ot.makeScale(e,t,n),this.applyMatrix4(Ot),this}lookAt(e){return Ns.lookAt(e),Ns.updateMatrix(),this.applyMatrix4(Ns.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qn).negate(),this.translate(qn.x,qn.y,qn.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Ut.setFromBufferAttribute(r),this.morphTargetsRelative?(xt.addVectors(this.boundingBox.min,Ut.min),this.boundingBox.expandByPoint(xt),xt.addVectors(this.boundingBox.max,Ut.max),this.boundingBox.expandByPoint(xt)):(this.boundingBox.expandByPoint(Ut.min),this.boundingBox.expandByPoint(Ut.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new as);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Ut.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];mi.setFromBufferAttribute(a),this.morphTargetsRelative?(xt.addVectors(Ut.min,mi.min),Ut.expandByPoint(xt),xt.addVectors(Ut.max,mi.max),Ut.expandByPoint(xt)):(Ut.expandByPoint(mi.min),Ut.expandByPoint(mi.max))}Ut.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)xt.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(xt));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)xt.fromBufferAttribute(a,l),c&&(qn.fromBufferAttribute(e,l),xt.add(qn)),i=Math.max(i,n.distanceToSquared(xt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,i=t.position.array,r=t.normal.array,o=t.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],h=[];for(let T=0;T<a;T++)l[T]=new P,h[T]=new P;const f=new P,d=new P,m=new P,_=new Ve,g=new Ve,p=new Ve,u=new P,S=new P;function x(T,G,H){f.fromArray(i,T*3),d.fromArray(i,G*3),m.fromArray(i,H*3),_.fromArray(o,T*2),g.fromArray(o,G*2),p.fromArray(o,H*2),d.sub(f),m.sub(f),g.sub(_),p.sub(_);const Q=1/(g.x*p.y-p.x*g.y);isFinite(Q)&&(u.copy(d).multiplyScalar(p.y).addScaledVector(m,-g.y).multiplyScalar(Q),S.copy(m).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(Q),l[T].add(u),l[G].add(u),l[H].add(u),h[T].add(S),h[G].add(S),h[H].add(S))}let y=this.groups;y.length===0&&(y=[{start:0,count:n.length}]);for(let T=0,G=y.length;T<G;++T){const H=y[T],Q=H.start,L=H.count;for(let F=Q,W=Q+L;F<W;F+=3)x(n[F+0],n[F+1],n[F+2])}const R=new P,A=new P,b=new P,k=new P;function M(T){b.fromArray(r,T*3),k.copy(b);const G=l[T];R.copy(G),R.sub(b.multiplyScalar(b.dot(G))).normalize(),A.crossVectors(k,G);const Q=A.dot(h[T])<0?-1:1;c[T*4]=R.x,c[T*4+1]=R.y,c[T*4+2]=R.z,c[T*4+3]=Q}for(let T=0,G=y.length;T<G;++T){const H=y[T],Q=H.start,L=H.count;for(let F=Q,W=Q+L;F<W;F+=3)M(n[F+0]),M(n[F+1]),M(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,c=new P,l=new P,h=new P,f=new P;if(e)for(let d=0,m=e.count;d<m;d+=3){const _=e.getX(d+0),g=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),a.fromBufferAttribute(n,_),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),f.subVectors(i,r),h.cross(f),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)xt.fromBufferAttribute(e,t),xt.normalize(),e.setXYZ(t,xt.x,xt.y,xt.z)}toNonIndexed(){function e(a,c){const l=a.array,h=a.itemSize,f=a.normalized,d=new l.constructor(c.length*h);let m=0,_=0;for(let g=0,p=c.length;g<p;g++){a.isInterleavedBufferAttribute?m=c[g]*a.data.stride+a.offset:m=c[g]*h;for(let u=0;u<h;u++)d[_++]=l[m++]}return new Kt(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ft,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){const d=l[h],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],h=[];for(let f=0,d=l.length;f<d;f++){const m=l[f];h.push(m.toJSON(e.data))}h.length>0&&(i[c]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const h=i[l];this.setAttribute(l,h.clone(t))}const r=e.morphAttributes;for(const l in r){const h=[],f=r[l];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,h=o.length;l<h;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ua=new lt,Tn=new lo,Ni=new as,fa=new P,Yn=new P,Kn=new P,Zn=new P,Os=new P,Oi=new P,Bi=new Ve,Gi=new Ve,zi=new Ve,pa=new P,ma=new P,ga=new P,ki=new P,Hi=new P;class B extends ht{constructor(e=new Ft,t=new Qe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Oi.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const h=a[c],f=r[c];h!==0&&(Os.fromBufferAttribute(f,e),o?Oi.addScaledVector(Os,h):Oi.addScaledVector(Os.sub(t),h))}t.add(Oi)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ni.copy(n.boundingSphere),Ni.applyMatrix4(r),Tn.copy(e.ray).recast(e.near),!(Ni.containsPoint(Tn.origin)===!1&&(Tn.intersectSphere(Ni,fa)===null||Tn.origin.distanceToSquared(fa)>(e.far-e.near)**2))&&(ua.copy(r).invert(),Tn.copy(e.ray).applyMatrix4(ua),!(n.boundingBox!==null&&Tn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Tn)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],u=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let y=S,R=x;y<R;y+=3){const A=a.getX(y),b=a.getX(y+1),k=a.getX(y+2);i=Vi(this,u,e,n,l,h,f,A,b,k),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(a.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const S=a.getX(p),x=a.getX(p+1),y=a.getX(p+2);i=Vi(this,o,e,n,l,h,f,S,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const p=d[_],u=o[p.materialIndex],S=Math.max(p.start,m.start),x=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let y=S,R=x;y<R;y+=3){const A=y,b=y+1,k=y+2;i=Vi(this,u,e,n,l,h,f,A,b,k),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const _=Math.max(0,m.start),g=Math.min(c.count,m.start+m.count);for(let p=_,u=g;p<u;p+=3){const S=p,x=p+1,y=p+2;i=Vi(this,o,e,n,l,h,f,S,x,y),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function Zc(s,e,t,n,i,r,o,a){let c;if(e.side===Lt?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===vn,a),c===null)return null;Hi.copy(a),Hi.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Hi);return l<t.near||l>t.far?null:{distance:l,point:Hi.clone(),object:s}}function Vi(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Yn),s.getVertexPosition(c,Kn),s.getVertexPosition(l,Zn);const h=Zc(s,e,t,n,Yn,Kn,Zn,ki);if(h){i&&(Bi.fromBufferAttribute(i,a),Gi.fromBufferAttribute(i,c),zi.fromBufferAttribute(i,l),h.uv=Wt.getInterpolation(ki,Yn,Kn,Zn,Bi,Gi,zi,new Ve)),r&&(Bi.fromBufferAttribute(r,a),Gi.fromBufferAttribute(r,c),zi.fromBufferAttribute(r,l),h.uv1=Wt.getInterpolation(ki,Yn,Kn,Zn,Bi,Gi,zi,new Ve),h.uv2=h.uv1),o&&(pa.fromBufferAttribute(o,a),ma.fromBufferAttribute(o,c),ga.fromBufferAttribute(o,l),h.normal=Wt.getInterpolation(ki,Yn,Kn,Zn,pa,ma,ga,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:c,c:l,normal:new P,materialIndex:0};Wt.getNormal(Yn,Kn,Zn,f.normal),h.face=f}return h}class de extends Ft{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],h=[],f=[];let d=0,m=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new ft(l,3)),this.setAttribute("normal",new ft(h,3)),this.setAttribute("uv",new ft(f,2));function _(g,p,u,S,x,y,R,A,b,k,M){const T=y/b,G=R/k,H=y/2,Q=R/2,L=A/2,F=b+1,W=k+1;let K=0,X=0;const Y=new P;for(let $=0;$<W;$++){const te=$*G-Q;for(let ne=0;ne<F;ne++){const V=ne*T-H;Y[g]=V*S,Y[p]=te*x,Y[u]=L,l.push(Y.x,Y.y,Y.z),Y[g]=0,Y[p]=0,Y[u]=A>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(ne/b),f.push(1-$/k),K+=1}}for(let $=0;$<k;$++)for(let te=0;te<b;te++){const ne=d+te+F*$,V=d+te+F*($+1),j=d+(te+1)+F*($+1),re=d+(te+1)+F*$;c.push(ne,V,re),c.push(V,j,re),X+=6}a.addGroup(m,X,M),m+=X,d+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new de(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ai(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wt(s){const e={};for(let t=0;t<s.length;t++){const n=ai(s[t]);for(const i in n)e[i]=n[i]}return e}function $c(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function mo(s){return s.getRenderTarget()===null?s.outputColorSpace:Ke.workingColorSpace}const jc={clone:ai,merge:wt};var Jc=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Qc=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Nn extends ci{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Jc,this.fragmentShader=Qc,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1,clipCullDistance:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ai(e.uniforms),this.uniformsGroups=$c(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class go extends ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new lt,this.projectionMatrix=new lt,this.projectionMatrixInverse=new lt,this.coordinateSystem=an}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Ct extends go{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ts*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ms*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ts*2*Math.atan(Math.tan(Ms*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Ms*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const $n=-90,jn=1;class el extends ht{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ct($n,jn,e,t);i.layers=this.layers,this.add(i);const r=new Ct($n,jn,e,t);r.layers=this.layers,this.add(r);const o=new Ct($n,jn,e,t);o.layers=this.layers,this.add(o);const a=new Ct($n,jn,e,t);a.layers=this.layers,this.add(a);const c=new Ct($n,jn,e,t);c.layers=this.layers,this.add(c);const l=new Ct($n,jn,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===an)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===es)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class _o extends Pt{constructor(e,t,n,i,r,o,a,c,l,h){e=e!==void 0?e:[],t=t!==void 0?t:ii,super(e,t,n,i,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tl extends Fn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];t.encoding!==void 0&&(_i("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===Un?vt:zt),this.texture=new _o(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Gt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new de(5,5,5),r=new Nn({name:"CubemapFromEquirect",uniforms:ai(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Lt,blending:gn});r.uniforms.tEquirect.value=t;const o=new B(i,r),a=t.minFilter;return t.minFilter===xi&&(t.minFilter=Gt),new el(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Bs=new P,nl=new P,il=new ke;class bn{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Bs.subVectors(n,t).cross(nl.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Bs),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||il.getNormalMatrix(e),i=this.coplanarPoint(Bs).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const wn=new as,Wi=new P;class ar{constructor(e=new bn,t=new bn,n=new bn,i=new bn,r=new bn,o=new bn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=an){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],h=i[5],f=i[6],d=i[7],m=i[8],_=i[9],g=i[10],p=i[11],u=i[12],S=i[13],x=i[14],y=i[15];if(n[0].setComponents(c-r,d-l,p-m,y-u).normalize(),n[1].setComponents(c+r,d+l,p+m,y+u).normalize(),n[2].setComponents(c+o,d+h,p+_,y+S).normalize(),n[3].setComponents(c-o,d-h,p-_,y-S).normalize(),n[4].setComponents(c-a,d-f,p-g,y-x).normalize(),t===an)n[5].setComponents(c+a,d+f,p+g,y+x).normalize();else if(t===es)n[5].setComponents(a,f,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),wn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),wn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(wn)}intersectsSprite(e){return wn.center.set(0,0,0),wn.radius=.7071067811865476,wn.applyMatrix4(e.matrixWorld),this.intersectsSphere(wn)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Wi.x=i.normal.x>0?e.max.x:e.min.x,Wi.y=i.normal.y>0?e.max.y:e.min.y,Wi.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Wi)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function xo(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function sl(s,e){const t=e.isWebGL2,n=new WeakMap;function i(l,h){const f=l.array,d=l.usage,m=f.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,f,d),l.onUploadCallback();let g;if(f instanceof Float32Array)g=s.FLOAT;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)g=s.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=s.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=s.SHORT;else if(f instanceof Uint32Array)g=s.UNSIGNED_INT;else if(f instanceof Int32Array)g=s.INT;else if(f instanceof Int8Array)g=s.BYTE;else if(f instanceof Uint8Array)g=s.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:_,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version,size:m}}function r(l,h,f){const d=h.array,m=h._updateRange,_=h.updateRanges;if(s.bindBuffer(f,l),m.count===-1&&_.length===0&&s.bufferSubData(f,0,d),_.length!==0){for(let g=0,p=_.length;g<p;g++){const u=_[g];t?s.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d,u.start,u.count):s.bufferSubData(f,u.start*d.BYTES_PER_ELEMENT,d.subarray(u.start,u.start+u.count))}h.clearUpdateRanges()}m.count!==-1&&(t?s.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):s.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const h=n.get(l);h&&(s.deleteBuffer(h.buffer),n.delete(l))}function c(l,h){if(l.isGLBufferAttribute){const d=n.get(l);(!d||d.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);if(f===void 0)n.set(l,i(l,h));else if(f.version<l.version){if(f.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(f.buffer,l,h),f.version=l.version}}return{get:o,remove:a,update:c}}class ct extends Ft{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,h=c+1,f=e/a,d=t/c,m=[],_=[],g=[],p=[];for(let u=0;u<h;u++){const S=u*d-o;for(let x=0;x<l;x++){const y=x*f-r;_.push(y,-S,0),g.push(0,0,1),p.push(x/a),p.push(1-u/c)}}for(let u=0;u<c;u++)for(let S=0;S<a;S++){const x=S+l*u,y=S+l*(u+1),R=S+1+l*(u+1),A=S+1+l*u;m.push(x,y,A),m.push(y,R,A)}this.setIndex(m),this.setAttribute("position",new ft(_,3)),this.setAttribute("normal",new ft(g,3)),this.setAttribute("uv",new ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ct(e.width,e.height,e.widthSegments,e.heightSegments)}}var rl=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,al=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ol=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cl=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ll=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,hl=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,dl=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ul=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fl=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,pl=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,ml=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,gl=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_l=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xl=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,vl=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ml=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Sl=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,El=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yl=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Tl=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,bl=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Al=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Rl=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Cl=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ll=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Pl=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Dl=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Il=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ul=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Fl="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nl=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,Ol=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Bl=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Gl=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zl=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,kl=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hl=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vl=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Wl=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Xl=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ql=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yl=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Kl=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Zl=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$l=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jl=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jl=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ql=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,eh=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,th=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,nh=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ih=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sh=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rh=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ah=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,oh=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ch=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lh=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,dh=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,uh=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,fh=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ph=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mh=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gh=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_h=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,xh=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vh=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Mh=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Sh=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Eh=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,yh=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Th=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wh=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bh=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Ah=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rh=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ch=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lh=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ph=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Dh=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ih=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Uh=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Fh=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Nh=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Oh=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bh=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Gh=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zh=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,kh=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hh=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vh=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wh=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xh=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qh=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yh=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kh=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Zh=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$h=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jh=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color *= toneMappingExposure;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	return color;
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jh=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qh=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ed=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,td=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,id=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,rd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ad=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,od=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ld=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dd=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,ud=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fd=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pd=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,md=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gd=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,_d=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xd=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vd=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Md=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sd=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ed=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yd=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Td=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wd=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,bd=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ad=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rd=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cd=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ld=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pd=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dd=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Id=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ud=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fd=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Nd=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Od=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:rl,alphahash_pars_fragment:al,alphamap_fragment:ol,alphamap_pars_fragment:cl,alphatest_fragment:ll,alphatest_pars_fragment:hl,aomap_fragment:dl,aomap_pars_fragment:ul,batching_pars_vertex:fl,batching_vertex:pl,begin_vertex:ml,beginnormal_vertex:gl,bsdfs:_l,iridescence_fragment:xl,bumpmap_pars_fragment:vl,clipping_planes_fragment:Ml,clipping_planes_pars_fragment:Sl,clipping_planes_pars_vertex:El,clipping_planes_vertex:yl,color_fragment:Tl,color_pars_fragment:wl,color_pars_vertex:bl,color_vertex:Al,common:Rl,cube_uv_reflection_fragment:Cl,defaultnormal_vertex:Ll,displacementmap_pars_vertex:Pl,displacementmap_vertex:Dl,emissivemap_fragment:Il,emissivemap_pars_fragment:Ul,colorspace_fragment:Fl,colorspace_pars_fragment:Nl,envmap_fragment:Ol,envmap_common_pars_fragment:Bl,envmap_pars_fragment:Gl,envmap_pars_vertex:zl,envmap_physical_pars_fragment:Jl,envmap_vertex:kl,fog_vertex:Hl,fog_pars_vertex:Vl,fog_fragment:Wl,fog_pars_fragment:Xl,gradientmap_pars_fragment:ql,lightmap_fragment:Yl,lightmap_pars_fragment:Kl,lights_lambert_fragment:Zl,lights_lambert_pars_fragment:$l,lights_pars_begin:jl,lights_toon_fragment:Ql,lights_toon_pars_fragment:eh,lights_phong_fragment:th,lights_phong_pars_fragment:nh,lights_physical_fragment:ih,lights_physical_pars_fragment:sh,lights_fragment_begin:rh,lights_fragment_maps:ah,lights_fragment_end:oh,logdepthbuf_fragment:ch,logdepthbuf_pars_fragment:lh,logdepthbuf_pars_vertex:hh,logdepthbuf_vertex:dh,map_fragment:uh,map_pars_fragment:fh,map_particle_fragment:ph,map_particle_pars_fragment:mh,metalnessmap_fragment:gh,metalnessmap_pars_fragment:_h,morphcolor_vertex:xh,morphnormal_vertex:vh,morphtarget_pars_vertex:Mh,morphtarget_vertex:Sh,normal_fragment_begin:Eh,normal_fragment_maps:yh,normal_pars_fragment:Th,normal_pars_vertex:wh,normal_vertex:bh,normalmap_pars_fragment:Ah,clearcoat_normal_fragment_begin:Rh,clearcoat_normal_fragment_maps:Ch,clearcoat_pars_fragment:Lh,iridescence_pars_fragment:Ph,opaque_fragment:Dh,packing:Ih,premultiplied_alpha_fragment:Uh,project_vertex:Fh,dithering_fragment:Nh,dithering_pars_fragment:Oh,roughnessmap_fragment:Bh,roughnessmap_pars_fragment:Gh,shadowmap_pars_fragment:zh,shadowmap_pars_vertex:kh,shadowmap_vertex:Hh,shadowmask_pars_fragment:Vh,skinbase_vertex:Wh,skinning_pars_vertex:Xh,skinning_vertex:qh,skinnormal_vertex:Yh,specularmap_fragment:Kh,specularmap_pars_fragment:Zh,tonemapping_fragment:$h,tonemapping_pars_fragment:jh,transmission_fragment:Jh,transmission_pars_fragment:Qh,uv_pars_fragment:ed,uv_pars_vertex:td,uv_vertex:nd,worldpos_vertex:id,background_vert:sd,background_frag:rd,backgroundCube_vert:ad,backgroundCube_frag:od,cube_vert:cd,cube_frag:ld,depth_vert:hd,depth_frag:dd,distanceRGBA_vert:ud,distanceRGBA_frag:fd,equirect_vert:pd,equirect_frag:md,linedashed_vert:gd,linedashed_frag:_d,meshbasic_vert:xd,meshbasic_frag:vd,meshlambert_vert:Md,meshlambert_frag:Sd,meshmatcap_vert:Ed,meshmatcap_frag:yd,meshnormal_vert:Td,meshnormal_frag:wd,meshphong_vert:bd,meshphong_frag:Ad,meshphysical_vert:Rd,meshphysical_frag:Cd,meshtoon_vert:Ld,meshtoon_frag:Pd,points_vert:Dd,points_frag:Id,shadow_vert:Ud,shadow_frag:Fd,sprite_vert:Nd,sprite_frag:Od},se={common:{diffuse:{value:new He(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new He(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new He(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new He(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},jt={basic:{uniforms:wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new He(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:wt([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new He(0)},specular:{value:new He(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:wt([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new He(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:wt([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new He(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:wt([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:wt([se.points,se.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:wt([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:wt([se.common,se.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:wt([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:wt([se.sprite,se.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:wt([se.common,se.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:wt([se.lights,se.fog,{color:{value:new He(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};jt.physical={uniforms:wt([jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new He(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new He(0)},specularColor:{value:new He(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const Xi={r:0,b:0,g:0};function Bd(s,e,t,n,i,r,o){const a=new He(0);let c=r===!0?0:1,l,h,f=null,d=0,m=null;function _(p,u){let S=!1,x=u.isScene===!0?u.background:null;x&&x.isTexture&&(x=(u.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,c):x&&x.isColor&&(g(x,1),S=!0);const y=s.xr.getEnvironmentBlendMode();y==="additive"?n.buffers.color.setClear(0,0,0,1,o):y==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||S)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),x&&(x.isCubeTexture||x.mapping===ss)?(h===void 0&&(h=new B(new de(1,1,1),new Nn({name:"BackgroundCubeMaterial",uniforms:ai(jt.backgroundCube.uniforms),vertexShader:jt.backgroundCube.vertexShader,fragmentShader:jt.backgroundCube.fragmentShader,side:Lt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,A,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),h.material.uniforms.envMap.value=x,h.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=u.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,h.material.toneMapped=Ke.getTransfer(x.colorSpace)!==et,(f!==x||d!==x.version||m!==s.toneMapping)&&(h.material.needsUpdate=!0,f=x,d=x.version,m=s.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new B(new ct(2,2),new Nn({name:"BackgroundMaterial",uniforms:ai(jt.background.uniforms),vertexShader:jt.background.vertexShader,fragmentShader:jt.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=x,l.material.uniforms.backgroundIntensity.value=u.backgroundIntensity,l.material.toneMapped=Ke.getTransfer(x.colorSpace)!==et,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||d!==x.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,f=x,d=x.version,m=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,u){p.getRGB(Xi,mo(s)),n.buffers.color.setClear(Xi.r,Xi.g,Xi.b,u,o)}return{getClearColor:function(){return a},setClearColor:function(p,u=1){a.set(p),c=u,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,g(a,c)},render:_}}function Gd(s,e,t,n){const i=s.getParameter(s.MAX_VERTEX_ATTRIBS),r=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,h=!1;function f(L,F,W,K,X){let Y=!1;if(o){const $=g(K,W,F);l!==$&&(l=$,m(l.object)),Y=u(L,K,W,X),Y&&S(L,K,W,X)}else{const $=F.wireframe===!0;(l.geometry!==K.id||l.program!==W.id||l.wireframe!==$)&&(l.geometry=K.id,l.program=W.id,l.wireframe=$,Y=!0)}X!==null&&t.update(X,s.ELEMENT_ARRAY_BUFFER),(Y||h)&&(h=!1,k(L,F,W,K),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function d(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function m(L){return n.isWebGL2?s.bindVertexArray(L):r.bindVertexArrayOES(L)}function _(L){return n.isWebGL2?s.deleteVertexArray(L):r.deleteVertexArrayOES(L)}function g(L,F,W){const K=W.wireframe===!0;let X=a[L.id];X===void 0&&(X={},a[L.id]=X);let Y=X[F.id];Y===void 0&&(Y={},X[F.id]=Y);let $=Y[K];return $===void 0&&($=p(d()),Y[K]=$),$}function p(L){const F=[],W=[],K=[];for(let X=0;X<i;X++)F[X]=0,W[X]=0,K[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:W,attributeDivisors:K,object:L,attributes:{},index:null}}function u(L,F,W,K){const X=l.attributes,Y=F.attributes;let $=0;const te=W.getAttributes();for(const ne in te)if(te[ne].location>=0){const j=X[ne];let re=Y[ne];if(re===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(re=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(re=L.instanceColor)),j===void 0||j.attribute!==re||re&&j.data!==re.data)return!0;$++}return l.attributesNum!==$||l.index!==K}function S(L,F,W,K){const X={},Y=F.attributes;let $=0;const te=W.getAttributes();for(const ne in te)if(te[ne].location>=0){let j=Y[ne];j===void 0&&(ne==="instanceMatrix"&&L.instanceMatrix&&(j=L.instanceMatrix),ne==="instanceColor"&&L.instanceColor&&(j=L.instanceColor));const re={};re.attribute=j,j&&j.data&&(re.data=j.data),X[ne]=re,$++}l.attributes=X,l.attributesNum=$,l.index=K}function x(){const L=l.newAttributes;for(let F=0,W=L.length;F<W;F++)L[F]=0}function y(L){R(L,0)}function R(L,F){const W=l.newAttributes,K=l.enabledAttributes,X=l.attributeDivisors;W[L]=1,K[L]===0&&(s.enableVertexAttribArray(L),K[L]=1),X[L]!==F&&((n.isWebGL2?s:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](L,F),X[L]=F)}function A(){const L=l.newAttributes,F=l.enabledAttributes;for(let W=0,K=F.length;W<K;W++)F[W]!==L[W]&&(s.disableVertexAttribArray(W),F[W]=0)}function b(L,F,W,K,X,Y,$){$===!0?s.vertexAttribIPointer(L,F,W,X,Y):s.vertexAttribPointer(L,F,W,K,X,Y)}function k(L,F,W,K){if(n.isWebGL2===!1&&(L.isInstancedMesh||K.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=K.attributes,Y=W.getAttributes(),$=F.defaultAttributeValues;for(const te in Y){const ne=Y[te];if(ne.location>=0){let V=X[te];if(V===void 0&&(te==="instanceMatrix"&&L.instanceMatrix&&(V=L.instanceMatrix),te==="instanceColor"&&L.instanceColor&&(V=L.instanceColor)),V!==void 0){const j=V.normalized,re=V.itemSize,_e=t.get(V);if(_e===void 0)continue;const pe=_e.buffer,Re=_e.type,be=_e.bytesPerElement,Me=n.isWebGL2===!0&&(Re===s.INT||Re===s.UNSIGNED_INT||V.gpuType===Za);if(V.isInterleavedBufferAttribute){const Ne=V.data,I=Ne.stride,ut=V.offset;if(Ne.isInstancedInterleavedBuffer){for(let xe=0;xe<ne.locationSize;xe++)R(ne.location+xe,Ne.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=Ne.meshPerAttribute*Ne.count)}else for(let xe=0;xe<ne.locationSize;xe++)y(ne.location+xe);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let xe=0;xe<ne.locationSize;xe++)b(ne.location+xe,re/ne.locationSize,Re,j,I*be,(ut+re/ne.locationSize*xe)*be,Me)}else{if(V.isInstancedBufferAttribute){for(let Ne=0;Ne<ne.locationSize;Ne++)R(ne.location+Ne,V.meshPerAttribute);L.isInstancedMesh!==!0&&K._maxInstanceCount===void 0&&(K._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let Ne=0;Ne<ne.locationSize;Ne++)y(ne.location+Ne);s.bindBuffer(s.ARRAY_BUFFER,pe);for(let Ne=0;Ne<ne.locationSize;Ne++)b(ne.location+Ne,re/ne.locationSize,Re,j,re*be,re/ne.locationSize*Ne*be,Me)}}else if($!==void 0){const j=$[te];if(j!==void 0)switch(j.length){case 2:s.vertexAttrib2fv(ne.location,j);break;case 3:s.vertexAttrib3fv(ne.location,j);break;case 4:s.vertexAttrib4fv(ne.location,j);break;default:s.vertexAttrib1fv(ne.location,j)}}}}A()}function M(){H();for(const L in a){const F=a[L];for(const W in F){const K=F[W];for(const X in K)_(K[X].object),delete K[X];delete F[W]}delete a[L]}}function T(L){if(a[L.id]===void 0)return;const F=a[L.id];for(const W in F){const K=F[W];for(const X in K)_(K[X].object),delete K[X];delete F[W]}delete a[L.id]}function G(L){for(const F in a){const W=a[F];if(W[L.id]===void 0)continue;const K=W[L.id];for(const X in K)_(K[X].object),delete K[X];delete W[L.id]}}function H(){Q(),h=!0,l!==c&&(l=c,m(l.object))}function Q(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:H,resetDefaultState:Q,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:G,initAttributes:x,enableAttribute:y,disableUnusedAttributes:A}}function zd(s,e,t,n){const i=n.isWebGL2;let r;function o(h){r=h}function a(h,f){s.drawArrays(r,h,f),t.update(f,r,1)}function c(h,f,d){if(d===0)return;let m,_;if(i)m=s,_="drawArraysInstanced";else if(m=e.get("ANGLE_instanced_arrays"),_="drawArraysInstancedANGLE",m===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[_](r,h,f,d),t.update(f,r,d)}function l(h,f,d){if(d===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let _=0;_<d;_++)this.render(h[_],f[_]);else{m.multiDrawArraysWEBGL(r,h,0,f,0,d);let _=0;for(let g=0;g<d;g++)_+=f[g];t.update(_,r,1)}}this.setMode=o,this.render=a,this.renderInstances=c,this.renderMultiDraw=l}function kd(s,e,t){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(b){if(b==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),d=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=s.getParameter(s.MAX_TEXTURE_SIZE),_=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),g=s.getParameter(s.MAX_VERTEX_ATTRIBS),p=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),u=s.getParameter(s.MAX_VARYING_VECTORS),S=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),x=d>0,y=o||e.has("OES_texture_float"),R=x&&y,A=o?s.getParameter(s.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:p,maxVaryings:u,maxFragmentUniforms:S,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:R,maxSamples:A}}function Hd(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new bn,a=new ke,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||n!==0||i;return i=d,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){const _=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,u=s.get(f);if(!i||_===null||_.length===0||r&&!p)r?h(null):l();else{const S=r?0:n,x=S*4;let y=u.clippingState||null;c.value=y,y=h(_,d,x,m);for(let R=0;R!==x;++R)y[R]=t[R];u.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=S}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,d,m,_){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=c.value,_!==!0||p===null){const u=m+g*4,S=d.matrixWorldInverse;a.getNormalMatrix(S),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,y=m;x!==g;++x,y+=4)o.copy(f[x]).applyMatrix4(S,a),o.normal.toArray(p,y),p[y+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function Vd(s){let e=new WeakMap;function t(o,a){return a===$s?o.mapping=ii:a===js&&(o.mapping=si),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===$s||a===js)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new tl(c.height/2);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class vo extends go{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Qn=4,_a=[.125,.215,.35,.446,.526,.582],Cn=20,Gs=new vo,xa=new He;let zs=null,ks=0,Hs=0;const An=(1+Math.sqrt(5))/2,Jn=1/An,va=[new P(1,1,1),new P(-1,1,1),new P(1,1,-1),new P(-1,1,-1),new P(0,An,Jn),new P(0,An,-Jn),new P(Jn,0,An),new P(-Jn,0,An),new P(An,Jn,0),new P(-An,Jn,0)];class Ma{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){zs=this._renderer.getRenderTarget(),ks=this._renderer.getActiveCubeFace(),Hs=this._renderer.getActiveMipmapLevel(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ya(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ea(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(zs,ks,Hs),e.scissorTest=!1,qi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ii||e.mapping===si?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zs=this._renderer.getRenderTarget(),ks=this._renderer.getActiveCubeFace(),Hs=this._renderer.getActiveMipmapLevel();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Gt,minFilter:Gt,generateMipmaps:!1,type:vi,format:Yt,colorSpace:cn,depthBuffer:!1},i=Sa(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sa(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Wd(r)),this._blurMaterial=Xd(r,e,t)}return i}_compileMaterial(e){const t=new B(this._lodPlanes[0],e);this._renderer.compile(t,Gs)}_sceneToCubeUV(e,t,n,i){const a=new Ct(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(xa),h.toneMapping=_n,h.autoClear=!1;const m=new Qe({name:"PMREM.Background",side:Lt,depthWrite:!1,depthTest:!1}),_=new B(new de,m);let g=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,g=!0):(m.color.copy(xa),g=!0);for(let u=0;u<6;u++){const S=u%3;S===0?(a.up.set(0,c[u],0),a.lookAt(l[u],0,0)):S===1?(a.up.set(0,0,c[u]),a.lookAt(0,l[u],0)):(a.up.set(0,c[u],0),a.lookAt(0,0,l[u]));const x=this._cubeSize;qi(i,S*x,u>2?x:0,x,x),h.setRenderTarget(i),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===ii||e.mapping===si;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ya()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ea());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new B(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;qi(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Gs)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=va[(i-1)%va.length];this._blur(e,i-1,i,r,o)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new B(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Cn-1),g=r/_,p=isFinite(r)?1+Math.floor(h*g):Cn;p>Cn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Cn}`);const u=[];let S=0;for(let b=0;b<Cn;++b){const k=b/g,M=Math.exp(-k*k/2);u.push(M),b===0?S+=M:b<p&&(S+=2*M)}for(let b=0;b<u.length;b++)u[b]=u[b]/S;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=_,d.mipInt.value=x-n;const y=this._sizeLods[i],R=3*y*(i>x-Qn?i-x+Qn:0),A=4*(this._cubeSize-y);qi(t,R,A,3*y,2*y),c.setRenderTarget(t),c.render(f,Gs)}}function Wd(s){const e=[],t=[],n=[];let i=s;const r=s-Qn+1+_a.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-Qn?c=_a[o-s+Qn-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),h=-l,f=1+l,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,_=6,g=3,p=2,u=1,S=new Float32Array(g*_*m),x=new Float32Array(p*_*m),y=new Float32Array(u*_*m);for(let A=0;A<m;A++){const b=A%3*2/3-1,k=A>2?0:-1,M=[b,k,0,b+2/3,k,0,b+2/3,k+1,0,b,k,0,b+2/3,k+1,0,b,k+1,0];S.set(M,g*_*A),x.set(d,p*_*A);const T=[A,A,A,A,A,A];y.set(T,u*_*A)}const R=new Ft;R.setAttribute("position",new Kt(S,g)),R.setAttribute("uv",new Kt(x,p)),R.setAttribute("faceIndex",new Kt(y,u)),e.push(R),i>Qn&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Sa(s,e,t){const n=new Fn(s,e,t);return n.texture.mapping=ss,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qi(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function Xd(s,e,t){const n=new Float32Array(Cn),i=new P(0,1,0);return new Nn({name:"SphericalGaussianBlur",defines:{n:Cn,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function Ea(){return new Nn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function ya(){return new Nn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:or(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:gn,depthTest:!1,depthWrite:!1})}function or(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function qd(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===$s||c===js,h=c===ii||c===si;if(l||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new Ma(s)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||h&&f&&i(f)){t===null&&(t=new Ma(s));const d=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",r),d.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let h=0;h<l;h++)a[h]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function Yd(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?(t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance")):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const i=t(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function Kd(s,e,t,n){const i={},r=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let p=0,u=g.length;p<u;p++)e.remove(g[p])}d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(f,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(f){const d=f.attributes;for(const _ in d)e.update(d[_],s.ARRAY_BUFFER);const m=f.morphAttributes;for(const _ in m){const g=m[_];for(let p=0,u=g.length;p<u;p++)e.update(g[p],s.ARRAY_BUFFER)}}function l(f){const d=[],m=f.index,_=f.attributes.position;let g=0;if(m!==null){const S=m.array;g=m.version;for(let x=0,y=S.length;x<y;x+=3){const R=S[x+0],A=S[x+1],b=S[x+2];d.push(R,A,A,b,b,R)}}else if(_!==void 0){const S=_.array;g=_.version;for(let x=0,y=S.length/3-1;x<y;x+=3){const R=x+0,A=x+1,b=x+2;d.push(R,A,A,b,b,R)}}else return;const p=new(ro(d)?po:fo)(d,1);p.version=g;const u=r.get(f);u&&e.remove(u),r.set(f,p)}function h(f){const d=r.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:h}}function Zd(s,e,t,n){const i=n.isWebGL2;let r;function o(m){r=m}let a,c;function l(m){a=m.type,c=m.bytesPerElement}function h(m,_){s.drawElements(r,_,a,m*c),t.update(_,r,1)}function f(m,_,g){if(g===0)return;let p,u;if(i)p=s,u="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),u="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[u](r,_,a,m*c,g),t.update(_,r,g)}function d(m,_,g){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<g;u++)this.render(m[u]/c,_[u]);else{p.multiDrawElementsWEBGL(r,_,0,a,m,0,g);let u=0;for(let S=0;S<g;S++)u+=_[S];t.update(u,r,1)}}this.setMode=o,this.setIndex=l,this.render=h,this.renderInstances=f,this.renderMultiDraw=d}function $d(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function jd(s,e){return s[0]-e[0]}function Jd(s,e){return Math.abs(e[1])-Math.abs(s[1])}function Qd(s,e,t){const n={},i=new Float32Array(8),r=new WeakMap,o=new tt,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,h,f){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const _=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,g=_!==void 0?_.length:0;let p=r.get(h);if(p===void 0||p.count!==g){let F=function(){Q.dispose(),r.delete(h),h.removeEventListener("dispose",F)};var m=F;p!==void 0&&p.texture.dispose();const x=h.morphAttributes.position!==void 0,y=h.morphAttributes.normal!==void 0,R=h.morphAttributes.color!==void 0,A=h.morphAttributes.position||[],b=h.morphAttributes.normal||[],k=h.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),R===!0&&(M=3);let T=h.attributes.position.count*M,G=1;T>e.maxTextureSize&&(G=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const H=new Float32Array(T*G*4*g),Q=new co(H,T,G,g);Q.type=mn,Q.needsUpdate=!0;const L=M*4;for(let W=0;W<g;W++){const K=A[W],X=b[W],Y=k[W],$=T*G*4*W;for(let te=0;te<K.count;te++){const ne=te*L;x===!0&&(o.fromBufferAttribute(K,te),H[$+ne+0]=o.x,H[$+ne+1]=o.y,H[$+ne+2]=o.z,H[$+ne+3]=0),y===!0&&(o.fromBufferAttribute(X,te),H[$+ne+4]=o.x,H[$+ne+5]=o.y,H[$+ne+6]=o.z,H[$+ne+7]=0),R===!0&&(o.fromBufferAttribute(Y,te),H[$+ne+8]=o.x,H[$+ne+9]=o.y,H[$+ne+10]=o.z,H[$+ne+11]=Y.itemSize===4?o.w:1)}}p={count:g,texture:Q,size:new Ve(T,G)},r.set(h,p),h.addEventListener("dispose",F)}let u=0;for(let x=0;x<d.length;x++)u+=d[x];const S=h.morphTargetsRelative?1:1-u;f.getUniforms().setValue(s,"morphTargetBaseInfluence",S),f.getUniforms().setValue(s,"morphTargetInfluences",d),f.getUniforms().setValue(s,"morphTargetsTexture",p.texture,t),f.getUniforms().setValue(s,"morphTargetsTextureSize",p.size)}else{const _=d===void 0?0:d.length;let g=n[h.id];if(g===void 0||g.length!==_){g=[];for(let y=0;y<_;y++)g[y]=[y,0];n[h.id]=g}for(let y=0;y<_;y++){const R=g[y];R[0]=y,R[1]=d[y]}g.sort(Jd);for(let y=0;y<8;y++)y<_&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(jd);const p=h.morphAttributes.position,u=h.morphAttributes.normal;let S=0;for(let y=0;y<8;y++){const R=a[y],A=R[0],b=R[1];A!==Number.MAX_SAFE_INTEGER&&b?(p&&h.getAttribute("morphTarget"+y)!==p[A]&&h.setAttribute("morphTarget"+y,p[A]),u&&h.getAttribute("morphNormal"+y)!==u[A]&&h.setAttribute("morphNormal"+y,u[A]),i[y]=b,S+=b):(p&&h.hasAttribute("morphTarget"+y)===!0&&h.deleteAttribute("morphTarget"+y),u&&h.hasAttribute("morphNormal"+y)===!0&&h.deleteAttribute("morphNormal"+y),i[y]=0)}const x=h.morphTargetsRelative?1:1-S;f.getUniforms().setValue(s,"morphTargetBaseInfluence",x),f.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function eu(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,h=c.geometry,f=e.get(c,h);if(i.get(f)!==l&&(e.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Mo extends Pt{constructor(e,t,n,i,r,o,a,c,l,h){if(h=h!==void 0?h:In,h!==In&&h!==ri)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===In&&(n=pn),n===void 0&&h===ri&&(n=Dn),super(null,i,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:bt,this.minFilter=c!==void 0?c:bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const So=new Pt,Eo=new Mo(1,1);Eo.compareFunction=so;const yo=new co,To=new Bc,wo=new _o,Ta=[],wa=[],ba=new Float32Array(16),Aa=new Float32Array(9),Ra=new Float32Array(4);function li(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Ta[i];if(r===void 0&&(r=new Float32Array(i),Ta[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function pt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function mt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function cs(s,e){let t=wa[e];t===void 0&&(t=new Int32Array(e),wa[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function tu(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function nu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2fv(this.addr,e),mt(t,e)}}function iu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(pt(t,e))return;s.uniform3fv(this.addr,e),mt(t,e)}}function su(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4fv(this.addr,e),mt(t,e)}}function ru(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Ra.set(n),s.uniformMatrix2fv(this.addr,!1,Ra),mt(t,n)}}function au(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;Aa.set(n),s.uniformMatrix3fv(this.addr,!1,Aa),mt(t,n)}}function ou(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(pt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),mt(t,e)}else{if(pt(t,n))return;ba.set(n),s.uniformMatrix4fv(this.addr,!1,ba),mt(t,n)}}function cu(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function lu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2iv(this.addr,e),mt(t,e)}}function hu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3iv(this.addr,e),mt(t,e)}}function du(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4iv(this.addr,e),mt(t,e)}}function uu(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function fu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(pt(t,e))return;s.uniform2uiv(this.addr,e),mt(t,e)}}function pu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(pt(t,e))return;s.uniform3uiv(this.addr,e),mt(t,e)}}function mu(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(pt(t,e))return;s.uniform4uiv(this.addr,e),mt(t,e)}}function gu(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);const r=this.type===s.SAMPLER_2D_SHADOW?Eo:So;t.setTexture2D(e||r,i)}function _u(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||To,i)}function xu(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||wo,i)}function vu(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||yo,i)}function Mu(s){switch(s){case 5126:return tu;case 35664:return nu;case 35665:return iu;case 35666:return su;case 35674:return ru;case 35675:return au;case 35676:return ou;case 5124:case 35670:return cu;case 35667:case 35671:return lu;case 35668:case 35672:return hu;case 35669:case 35673:return du;case 5125:return uu;case 36294:return fu;case 36295:return pu;case 36296:return mu;case 35678:case 36198:case 36298:case 36306:case 35682:return gu;case 35679:case 36299:case 36307:return _u;case 35680:case 36300:case 36308:case 36293:return xu;case 36289:case 36303:case 36311:case 36292:return vu}}function Su(s,e){s.uniform1fv(this.addr,e)}function Eu(s,e){const t=li(e,this.size,2);s.uniform2fv(this.addr,t)}function yu(s,e){const t=li(e,this.size,3);s.uniform3fv(this.addr,t)}function Tu(s,e){const t=li(e,this.size,4);s.uniform4fv(this.addr,t)}function wu(s,e){const t=li(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function bu(s,e){const t=li(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Au(s,e){const t=li(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Ru(s,e){s.uniform1iv(this.addr,e)}function Cu(s,e){s.uniform2iv(this.addr,e)}function Lu(s,e){s.uniform3iv(this.addr,e)}function Pu(s,e){s.uniform4iv(this.addr,e)}function Du(s,e){s.uniform1uiv(this.addr,e)}function Iu(s,e){s.uniform2uiv(this.addr,e)}function Uu(s,e){s.uniform3uiv(this.addr,e)}function Fu(s,e){s.uniform4uiv(this.addr,e)}function Nu(s,e,t){const n=this.cache,i=e.length,r=cs(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||So,r[o])}function Ou(s,e,t){const n=this.cache,i=e.length,r=cs(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||To,r[o])}function Bu(s,e,t){const n=this.cache,i=e.length,r=cs(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||wo,r[o])}function Gu(s,e,t){const n=this.cache,i=e.length,r=cs(t,i);pt(n,r)||(s.uniform1iv(this.addr,r),mt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||yo,r[o])}function zu(s){switch(s){case 5126:return Su;case 35664:return Eu;case 35665:return yu;case 35666:return Tu;case 35674:return wu;case 35675:return bu;case 35676:return Au;case 5124:case 35670:return Ru;case 35667:case 35671:return Cu;case 35668:case 35672:return Lu;case 35669:case 35673:return Pu;case 5125:return Du;case 36294:return Iu;case 36295:return Uu;case 36296:return Fu;case 35678:case 36198:case 36298:case 36306:case 35682:return Nu;case 35679:case 36299:case 36307:return Ou;case 35680:case 36300:case 36308:case 36293:return Bu;case 36289:case 36303:case 36311:case 36292:return Gu}}class ku{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Mu(t.type)}}class Hu{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zu(t.type)}}class Vu{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Vs=/(\w+)(\])?(\[|\.)?/g;function Ca(s,e){s.seq.push(e),s.map[e.id]=e}function Wu(s,e,t){const n=s.name,i=n.length;for(Vs.lastIndex=0;;){const r=Vs.exec(n),o=Vs.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Ca(t,l===void 0?new ku(a,s,e):new Hu(a,s,e));break}else{let f=t.map[a];f===void 0&&(f=new Vu(a),Ca(t,f)),t=f}}}class Zi{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);Wu(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function La(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const Xu=37297;let qu=0;function Yu(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Ku(s){const e=Ke.getPrimaries(Ke.workingColorSpace),t=Ke.getPrimaries(s);let n;switch(e===t?n="":e===Qi&&t===Ji?n="LinearDisplayP3ToLinearSRGB":e===Ji&&t===Qi&&(n="LinearSRGBToLinearDisplayP3"),s){case cn:case rs:return[n,"LinearTransferOETF"];case vt:case rr:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Pa(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+Yu(s.getShaderSource(e),o)}else return i}function Zu(s,e){const t=Ku(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function $u(s,e){let t;switch(e){case oc:t="Linear";break;case cc:t="Reinhard";break;case lc:t="OptimizedCineon";break;case hc:t="ACESFilmic";break;case uc:t="AgX";break;case dc:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ju(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.normalMapTangentSpace||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ei).join(`
`)}function Ju(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":""].filter(ei).join(`
`)}function Qu(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ef(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ei(s){return s!==""}function Da(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ia(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tf=/^[ \t]*#include +<([\w\d./]+)>/gm;function tr(s){return s.replace(tf,sf)}const nf=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function sf(s,e){let t=Fe[e];if(t===void 0){const n=nf.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return tr(t)}const rf=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ua(s){return s.replace(rf,af)}function af(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Fa(s){let e="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function of(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Xa?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===qa?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===rn&&(e="SHADOWMAP_TYPE_VSM"),e}function cf(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case ii:case si:e="ENVMAP_TYPE_CUBE";break;case ss:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lf(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case si:e="ENVMAP_MODE_REFRACTION";break}return e}function hf(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Ya:e="ENVMAP_BLENDING_MULTIPLY";break;case rc:e="ENVMAP_BLENDING_MIX";break;case ac:e="ENVMAP_BLENDING_ADD";break}return e}function df(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function uf(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=of(t),l=cf(t),h=lf(t),f=hf(t),d=df(t),m=t.isWebGL2?"":ju(t),_=Ju(t),g=Qu(r),p=i.createProgram();let u,S,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ei).join(`
`),u.length>0&&(u+=`
`),S=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ei).join(`
`),S.length>0&&(S+=`
`)):(u=[Fa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ei).join(`
`),S=[m,Fa(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==_n?"#define TONE_MAPPING":"",t.toneMapping!==_n?Fe.tonemapping_pars_fragment:"",t.toneMapping!==_n?$u("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Zu("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ei).join(`
`)),o=tr(o),o=Da(o,t),o=Ia(o,t),a=tr(a),a=Da(a,t),a=Ia(a,t),o=Ua(o),a=Ua(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,u=[_,"precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+u,S=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===Qr?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Qr?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const y=x+u+o,R=x+S+a,A=La(i,i.VERTEX_SHADER,y),b=La(i,i.FRAGMENT_SHADER,R);i.attachShader(p,A),i.attachShader(p,b),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function k(H){if(s.debug.checkShaderErrors){const Q=i.getProgramInfoLog(p).trim(),L=i.getShaderInfoLog(A).trim(),F=i.getShaderInfoLog(b).trim();let W=!0,K=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(W=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,A,b);else{const X=Pa(i,A,"vertex"),Y=Pa(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Program Info Log: `+Q+`
`+X+`
`+Y)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(L===""||F==="")&&(K=!1);K&&(H.diagnostics={runnable:W,programLog:Q,vertexShader:{log:L,prefix:u},fragmentShader:{log:F,prefix:S}})}i.deleteShader(A),i.deleteShader(b),M=new Zi(i,p),T=ef(i,p)}let M;this.getUniforms=function(){return M===void 0&&k(this),M};let T;this.getAttributes=function(){return T===void 0&&k(this),T};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=i.getProgramParameter(p,Xu)),G},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qu++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=A,this.fragmentShader=b,this}let ff=0;class pf{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new mf(e),t.set(e,n)),n}}class mf{constructor(e){this.id=ff++,this.code=e,this.usedTimes=0}}function gf(s,e,t,n,i,r,o){const a=new ho,c=new pf,l=[],h=i.isWebGL2,f=i.logarithmicDepthBuffer,d=i.vertexTextures;let m=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function p(M,T,G,H,Q){const L=H.fog,F=Q.geometry,W=M.isMeshStandardMaterial?H.environment:null,K=(M.isMeshStandardMaterial?t:e).get(M.envMap||W),X=K&&K.mapping===ss?K.image.height:null,Y=_[M.type];M.precision!==null&&(m=i.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const $=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,te=$!==void 0?$.length:0;let ne=0;F.morphAttributes.position!==void 0&&(ne=1),F.morphAttributes.normal!==void 0&&(ne=2),F.morphAttributes.color!==void 0&&(ne=3);let V,j,re,_e;if(Y){const yt=jt[Y];V=yt.vertexShader,j=yt.fragmentShader}else V=M.vertexShader,j=M.fragmentShader,c.update(M),re=c.getVertexShaderID(M),_e=c.getFragmentShaderID(M);const pe=s.getRenderTarget(),Re=Q.isInstancedMesh===!0,be=Q.isBatchedMesh===!0,Me=!!M.map,Ne=!!M.matcap,I=!!K,ut=!!M.aoMap,xe=!!M.lightMap,Te=!!M.bumpMap,ue=!!M.normalMap,Ze=!!M.displacementMap,Le=!!M.emissiveMap,w=!!M.metalnessMap,v=!!M.roughnessMap,U=M.anisotropy>0,Z=M.clearcoat>0,q=M.iridescence>0,J=M.sheen>0,fe=M.transmission>0,ae=U&&!!M.anisotropyMap,me=Z&&!!M.clearcoatMap,we=Z&&!!M.clearcoatNormalMap,Oe=Z&&!!M.clearcoatRoughnessMap,ee=q&&!!M.iridescenceMap,Ye=q&&!!M.iridescenceThicknessMap,We=J&&!!M.sheenColorMap,Pe=J&&!!M.sheenRoughnessMap,Se=!!M.specularMap,ge=!!M.specularColorMap,Ue=!!M.specularIntensityMap,Xe=fe&&!!M.transmissionMap,st=fe&&!!M.thicknessMap,Ge=!!M.gradientMap,ie=!!M.alphaMap,C=M.alphaTest>0,oe=!!M.alphaHash,ce=!!M.extensions,Ae=!!F.attributes.uv1,Ee=!!F.attributes.uv2,$e=!!F.attributes.uv3;let je=_n;return M.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(je=s.toneMapping),{isWebGL2:h,shaderID:Y,shaderType:M.type,shaderName:M.name,vertexShader:V,fragmentShader:j,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:_e,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,batching:be,instancing:Re,instancingColor:Re&&Q.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:pe===null?s.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:cn,map:Me,matcap:Ne,envMap:I,envMapMode:I&&K.mapping,envMapCubeUVHeight:X,aoMap:ut,lightMap:xe,bumpMap:Te,normalMap:ue,displacementMap:d&&Ze,emissiveMap:Le,normalMapObjectSpace:ue&&M.normalMapType===Tc,normalMapTangentSpace:ue&&M.normalMapType===io,metalnessMap:w,roughnessMap:v,anisotropy:U,anisotropyMap:ae,clearcoat:Z,clearcoatMap:me,clearcoatNormalMap:we,clearcoatRoughnessMap:Oe,iridescence:q,iridescenceMap:ee,iridescenceThicknessMap:Ye,sheen:J,sheenColorMap:We,sheenRoughnessMap:Pe,specularMap:Se,specularColorMap:ge,specularIntensityMap:Ue,transmission:fe,transmissionMap:Xe,thicknessMap:st,gradientMap:Ge,opaque:M.transparent===!1&&M.blending===ti,alphaMap:ie,alphaTest:C,alphaHash:oe,combine:M.combine,mapUv:Me&&g(M.map.channel),aoMapUv:ut&&g(M.aoMap.channel),lightMapUv:xe&&g(M.lightMap.channel),bumpMapUv:Te&&g(M.bumpMap.channel),normalMapUv:ue&&g(M.normalMap.channel),displacementMapUv:Ze&&g(M.displacementMap.channel),emissiveMapUv:Le&&g(M.emissiveMap.channel),metalnessMapUv:w&&g(M.metalnessMap.channel),roughnessMapUv:v&&g(M.roughnessMap.channel),anisotropyMapUv:ae&&g(M.anisotropyMap.channel),clearcoatMapUv:me&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:we&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Oe&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:ee&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ye&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:We&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:Pe&&g(M.sheenRoughnessMap.channel),specularMapUv:Se&&g(M.specularMap.channel),specularColorMapUv:ge&&g(M.specularColorMap.channel),specularIntensityMapUv:Ue&&g(M.specularIntensityMap.channel),transmissionMapUv:Xe&&g(M.transmissionMap.channel),thicknessMapUv:st&&g(M.thicknessMap.channel),alphaMapUv:ie&&g(M.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(ue||U),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:Ae,vertexUv2s:Ee,vertexUv3s:$e,pointsUvs:Q.isPoints===!0&&!!F.attributes.uv&&(Me||ie),fog:!!L,useFog:M.fog===!0,fogExp2:L&&L.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:Q.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:ne,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:je,useLegacyLights:s._useLegacyLights,decodeVideoTexture:Me&&M.map.isVideoTexture===!0&&Ke.getTransfer(M.map.colorSpace)===et,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Xt,flipSided:M.side===Lt,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:ce&&M.extensions.derivatives===!0,extensionFragDepth:ce&&M.extensions.fragDepth===!0,extensionDrawBuffers:ce&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:ce&&M.extensions.shaderTextureLOD===!0,extensionClipCullDistance:ce&&M.extensions.clipCullDistance&&n.has("WEBGL_clip_cull_distance"),rendererExtensionFragDepth:h||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||n.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function u(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)T.push(G),T.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(S(T,M),x(T,M),T.push(s.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function S(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),T.alphaHash&&a.enable(18),T.batching&&a.enable(19),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),M.push(a.mask)}function y(M){const T=_[M.type];let G;if(T){const H=jt[T];G=jc.clone(H.uniforms)}else G=M.uniforms;return G}function R(M,T){let G;for(let H=0,Q=l.length;H<Q;H++){const L=l[H];if(L.cacheKey===T){G=L,++G.usedTimes;break}}return G===void 0&&(G=new uf(s,T,M,r),l.push(G)),G}function A(M){if(--M.usedTimes===0){const T=l.indexOf(M);l[T]=l[l.length-1],l.pop(),M.destroy()}}function b(M){c.remove(M)}function k(){c.dispose()}return{getParameters:p,getProgramCacheKey:u,getUniforms:y,acquireProgram:R,releaseProgram:A,releaseShaderCache:b,programs:l,dispose:k}}function _f(){let s=new WeakMap;function e(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function t(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:e,remove:t,update:n,dispose:i}}function xf(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Na(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Oa(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(f,d,m,_,g,p){let u=s[e];return u===void 0?(u={id:f.id,object:f,geometry:d,material:m,groupOrder:_,renderOrder:f.renderOrder,z:g,group:p},s[e]=u):(u.id=f.id,u.object=f,u.geometry=d,u.material=m,u.groupOrder=_,u.renderOrder=f.renderOrder,u.z=g,u.group=p),e++,u}function a(f,d,m,_,g,p){const u=o(f,d,m,_,g,p);m.transmission>0?n.push(u):m.transparent===!0?i.push(u):t.push(u)}function c(f,d,m,_,g,p){const u=o(f,d,m,_,g,p);m.transmission>0?n.unshift(u):m.transparent===!0?i.unshift(u):t.unshift(u)}function l(f,d){t.length>1&&t.sort(f||xf),n.length>1&&n.sort(d||Na),i.length>1&&i.sort(d||Na)}function h(){for(let f=e,d=s.length;f<d;f++){const m=s[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:h,sort:l}}function vf(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Oa,s.set(n,[o])):i>=r.length?(o=new Oa,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function Mf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new He};break;case"SpotLight":t={position:new P,direction:new P,color:new He,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new He,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new He,groundColor:new He};break;case"RectAreaLight":t={color:new He,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function Sf(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let Ef=0;function yf(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Tf(s,e){const t=new Mf,n=Sf(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);const r=new P,o=new lt,a=new lt;function c(h,f){let d=0,m=0,_=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let g=0,p=0,u=0,S=0,x=0,y=0,R=0,A=0,b=0,k=0,M=0;h.sort(yf);const T=f===!0?Math.PI:1;for(let H=0,Q=h.length;H<Q;H++){const L=h[H],F=L.color,W=L.intensity,K=L.distance,X=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)d+=F.r*W*T,m+=F.g*W*T,_+=F.b*W*T;else if(L.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(L.sh.coefficients[Y],W);M++}else if(L.isDirectionalLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*T),L.castShadow){const $=L.shadow,te=n.get(L);te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,i.directionalShadow[g]=te,i.directionalShadowMap[g]=X,i.directionalShadowMatrix[g]=L.shadow.matrix,y++}i.directional[g]=Y,g++}else if(L.isSpotLight){const Y=t.get(L);Y.position.setFromMatrixPosition(L.matrixWorld),Y.color.copy(F).multiplyScalar(W*T),Y.distance=K,Y.coneCos=Math.cos(L.angle),Y.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),Y.decay=L.decay,i.spot[u]=Y;const $=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,$.updateMatrices(L),L.castShadow&&k++),i.spotLightMatrix[u]=$.matrix,L.castShadow){const te=n.get(L);te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,i.spotShadow[u]=te,i.spotShadowMap[u]=X,A++}u++}else if(L.isRectAreaLight){const Y=t.get(L);Y.color.copy(F).multiplyScalar(W),Y.halfWidth.set(L.width*.5,0,0),Y.halfHeight.set(0,L.height*.5,0),i.rectArea[S]=Y,S++}else if(L.isPointLight){const Y=t.get(L);if(Y.color.copy(L.color).multiplyScalar(L.intensity*T),Y.distance=L.distance,Y.decay=L.decay,L.castShadow){const $=L.shadow,te=n.get(L);te.shadowBias=$.bias,te.shadowNormalBias=$.normalBias,te.shadowRadius=$.radius,te.shadowMapSize=$.mapSize,te.shadowCameraNear=$.camera.near,te.shadowCameraFar=$.camera.far,i.pointShadow[p]=te,i.pointShadowMap[p]=X,i.pointShadowMatrix[p]=L.shadow.matrix,R++}i.point[p]=Y,p++}else if(L.isHemisphereLight){const Y=t.get(L);Y.skyColor.copy(L.color).multiplyScalar(W*T),Y.groundColor.copy(L.groundColor).multiplyScalar(W*T),i.hemi[x]=Y,x++}}S>0&&(e.isWebGL2?s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=se.LTC_FLOAT_1,i.rectAreaLTC2=se.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=se.LTC_HALF_1,i.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=d,i.ambient[1]=m,i.ambient[2]=_;const G=i.hash;(G.directionalLength!==g||G.pointLength!==p||G.spotLength!==u||G.rectAreaLength!==S||G.hemiLength!==x||G.numDirectionalShadows!==y||G.numPointShadows!==R||G.numSpotShadows!==A||G.numSpotMaps!==b||G.numLightProbes!==M)&&(i.directional.length=g,i.spot.length=u,i.rectArea.length=S,i.point.length=p,i.hemi.length=x,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=R,i.pointShadowMap.length=R,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=R,i.spotLightMatrix.length=A+b-k,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=k,i.numLightProbes=M,G.directionalLength=g,G.pointLength=p,G.spotLength=u,G.rectAreaLength=S,G.hemiLength=x,G.numDirectionalShadows=y,G.numPointShadows=R,G.numSpotShadows=A,G.numSpotMaps=b,G.numLightProbes=M,i.version=Ef++)}function l(h,f){let d=0,m=0,_=0,g=0,p=0;const u=f.matrixWorldInverse;for(let S=0,x=h.length;S<x;S++){const y=h[S];if(y.isDirectionalLight){const R=i.directional[d];R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),d++}else if(y.isSpotLight){const R=i.spot[_];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(u),R.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),R.direction.sub(r),R.direction.transformDirection(u),_++}else if(y.isRectAreaLight){const R=i.rectArea[g];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(u),a.identity(),o.copy(y.matrixWorld),o.premultiply(u),a.extractRotation(o),R.halfWidth.set(y.width*.5,0,0),R.halfHeight.set(0,y.height*.5,0),R.halfWidth.applyMatrix4(a),R.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const R=i.point[m];R.position.setFromMatrixPosition(y.matrixWorld),R.position.applyMatrix4(u),m++}else if(y.isHemisphereLight){const R=i.hemi[p];R.direction.setFromMatrixPosition(y.matrixWorld),R.direction.transformDirection(u),p++}}}return{setup:c,setupView:l,state:i}}function Ba(s,e){const t=new Tf(s,e),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function wf(s,e){let t=new WeakMap;function n(r,o=0){const a=t.get(r);let c;return a===void 0?(c=new Ba(s,e),t.set(r,[c])):o>=a.length?(c=new Ba(s,e),a.push(c)):c=a[o],c}function i(){t=new WeakMap}return{get:n,dispose:i}}class bf extends ci{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ec,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Af extends ci{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Rf=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Cf=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Lf(s,e,t){let n=new ar;const i=new Ve,r=new Ve,o=new tt,a=new bf({depthPacking:yc}),c=new Af,l={},h=t.maxTextureSize,f={[vn]:Lt,[Lt]:vn,[Xt]:Xt},d=new Nn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:Rf,fragmentShader:Cf}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const _=new Ft;_.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new B(_,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xa;let u=this.type;this.render=function(A,b,k){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||A.length===0)return;const M=s.getRenderTarget(),T=s.getActiveCubeFace(),G=s.getActiveMipmapLevel(),H=s.state;H.setBlending(gn),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const Q=u!==rn&&this.type===rn,L=u===rn&&this.type!==rn;for(let F=0,W=A.length;F<W;F++){const K=A[F],X=K.shadow;if(X===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);const Y=X.getFrameExtents();if(i.multiply(Y),r.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/Y.x),i.x=r.x*Y.x,X.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/Y.y),i.y=r.y*Y.y,X.mapSize.y=r.y)),X.map===null||Q===!0||L===!0){const te=this.type!==rn?{minFilter:bt,magFilter:bt}:{};X.map!==null&&X.map.dispose(),X.map=new Fn(i.x,i.y,te),X.map.texture.name=K.name+".shadowMap",X.camera.updateProjectionMatrix()}s.setRenderTarget(X.map),s.clear();const $=X.getViewportCount();for(let te=0;te<$;te++){const ne=X.getViewport(te);o.set(r.x*ne.x,r.y*ne.y,r.x*ne.z,r.y*ne.w),H.viewport(o),X.updateMatrices(K,te),n=X.getFrustum(),y(b,k,X.camera,K,this.type)}X.isPointLightShadow!==!0&&this.type===rn&&S(X,k),X.needsUpdate=!1}u=this.type,p.needsUpdate=!1,s.setRenderTarget(M,T,G)};function S(A,b){const k=e.update(g);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Fn(i.x,i.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,s.setRenderTarget(A.mapPass),s.clear(),s.renderBufferDirect(b,null,k,d,g,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,s.setRenderTarget(A.map),s.clear(),s.renderBufferDirect(b,null,k,m,g,null)}function x(A,b,k,M){let T=null;const G=k.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(G!==void 0)T=G;else if(T=k.isPointLight===!0?c:a,s.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0){const H=T.uuid,Q=b.uuid;let L=l[H];L===void 0&&(L={},l[H]=L);let F=L[Q];F===void 0&&(F=T.clone(),L[Q]=F,b.addEventListener("dispose",R)),T=F}if(T.visible=b.visible,T.wireframe=b.wireframe,M===rn?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:f[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,k.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=s.properties.get(T);H.light=k}return T}function y(A,b,k,M,T){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===rn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld);const Q=e.update(A),L=A.material;if(Array.isArray(L)){const F=Q.groups;for(let W=0,K=F.length;W<K;W++){const X=F[W],Y=L[X.materialIndex];if(Y&&Y.visible){const $=x(A,Y,M,T);A.onBeforeShadow(s,A,b,k,Q,$,X),s.renderBufferDirect(k,null,Q,$,A,X),A.onAfterShadow(s,A,b,k,Q,$,X)}}}else if(L.visible){const F=x(A,L,M,T);A.onBeforeShadow(s,A,b,k,Q,F,null),s.renderBufferDirect(k,null,Q,F,A,null),A.onAfterShadow(s,A,b,k,Q,F,null)}}const H=A.children;for(let Q=0,L=H.length;Q<L;Q++)y(H[Q],b,k,M,T)}function R(A){A.target.removeEventListener("dispose",R);for(const k in l){const M=l[k],T=A.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}function Pf(s,e,t){const n=t.isWebGL2;function i(){let C=!1;const oe=new tt;let ce=null;const Ae=new tt(0,0,0,0);return{setMask:function(Ee){ce!==Ee&&!C&&(s.colorMask(Ee,Ee,Ee,Ee),ce=Ee)},setLocked:function(Ee){C=Ee},setClear:function(Ee,$e,je,gt,yt){yt===!0&&(Ee*=gt,$e*=gt,je*=gt),oe.set(Ee,$e,je,gt),Ae.equals(oe)===!1&&(s.clearColor(Ee,$e,je,gt),Ae.copy(oe))},reset:function(){C=!1,ce=null,Ae.set(-1,0,0,0)}}}function r(){let C=!1,oe=null,ce=null,Ae=null;return{setTest:function(Ee){Ee?be(s.DEPTH_TEST):Me(s.DEPTH_TEST)},setMask:function(Ee){oe!==Ee&&!C&&(s.depthMask(Ee),oe=Ee)},setFunc:function(Ee){if(ce!==Ee){switch(Ee){case Jo:s.depthFunc(s.NEVER);break;case Qo:s.depthFunc(s.ALWAYS);break;case ec:s.depthFunc(s.LESS);break;case $i:s.depthFunc(s.LEQUAL);break;case tc:s.depthFunc(s.EQUAL);break;case nc:s.depthFunc(s.GEQUAL);break;case ic:s.depthFunc(s.GREATER);break;case sc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ce=Ee}},setLocked:function(Ee){C=Ee},setClear:function(Ee){Ae!==Ee&&(s.clearDepth(Ee),Ae=Ee)},reset:function(){C=!1,oe=null,ce=null,Ae=null}}}function o(){let C=!1,oe=null,ce=null,Ae=null,Ee=null,$e=null,je=null,gt=null,yt=null;return{setTest:function(Je){C||(Je?be(s.STENCIL_TEST):Me(s.STENCIL_TEST))},setMask:function(Je){oe!==Je&&!C&&(s.stencilMask(Je),oe=Je)},setFunc:function(Je,Tt,Zt){(ce!==Je||Ae!==Tt||Ee!==Zt)&&(s.stencilFunc(Je,Tt,Zt),ce=Je,Ae=Tt,Ee=Zt)},setOp:function(Je,Tt,Zt){($e!==Je||je!==Tt||gt!==Zt)&&(s.stencilOp(Je,Tt,Zt),$e=Je,je=Tt,gt=Zt)},setLocked:function(Je){C=Je},setClear:function(Je){yt!==Je&&(s.clearStencil(Je),yt=Je)},reset:function(){C=!1,oe=null,ce=null,Ae=null,Ee=null,$e=null,je=null,gt=null,yt=null}}}const a=new i,c=new r,l=new o,h=new WeakMap,f=new WeakMap;let d={},m={},_=new WeakMap,g=[],p=null,u=!1,S=null,x=null,y=null,R=null,A=null,b=null,k=null,M=new He(0,0,0),T=0,G=!1,H=null,Q=null,L=null,F=null,W=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Y=0;const $=s.getParameter(s.VERSION);$.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec($)[1]),X=Y>=1):$.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),X=Y>=2);let te=null,ne={};const V=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),re=new tt().fromArray(V),_e=new tt().fromArray(j);function pe(C,oe,ce,Ae){const Ee=new Uint8Array(4),$e=s.createTexture();s.bindTexture(C,$e),s.texParameteri(C,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(C,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let je=0;je<ce;je++)n&&(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)?s.texImage3D(oe,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,Ee):s.texImage2D(oe+je,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ee);return $e}const Re={};Re[s.TEXTURE_2D]=pe(s.TEXTURE_2D,s.TEXTURE_2D,1),Re[s.TEXTURE_CUBE_MAP]=pe(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(Re[s.TEXTURE_2D_ARRAY]=pe(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Re[s.TEXTURE_3D]=pe(s.TEXTURE_3D,s.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),be(s.DEPTH_TEST),c.setFunc($i),Le(!1),w(xr),be(s.CULL_FACE),ue(gn);function be(C){d[C]!==!0&&(s.enable(C),d[C]=!0)}function Me(C){d[C]!==!1&&(s.disable(C),d[C]=!1)}function Ne(C,oe){return m[C]!==oe?(s.bindFramebuffer(C,oe),m[C]=oe,n&&(C===s.DRAW_FRAMEBUFFER&&(m[s.FRAMEBUFFER]=oe),C===s.FRAMEBUFFER&&(m[s.DRAW_FRAMEBUFFER]=oe)),!0):!1}function I(C,oe){let ce=g,Ae=!1;if(C)if(ce=_.get(oe),ce===void 0&&(ce=[],_.set(oe,ce)),C.isWebGLMultipleRenderTargets){const Ee=C.texture;if(ce.length!==Ee.length||ce[0]!==s.COLOR_ATTACHMENT0){for(let $e=0,je=Ee.length;$e<je;$e++)ce[$e]=s.COLOR_ATTACHMENT0+$e;ce.length=Ee.length,Ae=!0}}else ce[0]!==s.COLOR_ATTACHMENT0&&(ce[0]=s.COLOR_ATTACHMENT0,Ae=!0);else ce[0]!==s.BACK&&(ce[0]=s.BACK,Ae=!0);Ae&&(t.isWebGL2?s.drawBuffers(ce):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ce))}function ut(C){return p!==C?(s.useProgram(C),p=C,!0):!1}const xe={[Rn]:s.FUNC_ADD,[Oo]:s.FUNC_SUBTRACT,[Bo]:s.FUNC_REVERSE_SUBTRACT};if(n)xe[yr]=s.MIN,xe[Tr]=s.MAX;else{const C=e.get("EXT_blend_minmax");C!==null&&(xe[yr]=C.MIN_EXT,xe[Tr]=C.MAX_EXT)}const Te={[Go]:s.ZERO,[zo]:s.ONE,[ko]:s.SRC_COLOR,[Ks]:s.SRC_ALPHA,[Yo]:s.SRC_ALPHA_SATURATE,[Xo]:s.DST_COLOR,[Vo]:s.DST_ALPHA,[Ho]:s.ONE_MINUS_SRC_COLOR,[Zs]:s.ONE_MINUS_SRC_ALPHA,[qo]:s.ONE_MINUS_DST_COLOR,[Wo]:s.ONE_MINUS_DST_ALPHA,[Ko]:s.CONSTANT_COLOR,[Zo]:s.ONE_MINUS_CONSTANT_COLOR,[$o]:s.CONSTANT_ALPHA,[jo]:s.ONE_MINUS_CONSTANT_ALPHA};function ue(C,oe,ce,Ae,Ee,$e,je,gt,yt,Je){if(C===gn){u===!0&&(Me(s.BLEND),u=!1);return}if(u===!1&&(be(s.BLEND),u=!0),C!==No){if(C!==S||Je!==G){if((x!==Rn||A!==Rn)&&(s.blendEquation(s.FUNC_ADD),x=Rn,A=Rn),Je)switch(C){case ti:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mr:s.blendFunc(s.ONE,s.ONE);break;case Sr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Er:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case ti:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Mr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Sr:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Er:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}y=null,R=null,b=null,k=null,M.set(0,0,0),T=0,S=C,G=Je}return}Ee=Ee||oe,$e=$e||ce,je=je||Ae,(oe!==x||Ee!==A)&&(s.blendEquationSeparate(xe[oe],xe[Ee]),x=oe,A=Ee),(ce!==y||Ae!==R||$e!==b||je!==k)&&(s.blendFuncSeparate(Te[ce],Te[Ae],Te[$e],Te[je]),y=ce,R=Ae,b=$e,k=je),(gt.equals(M)===!1||yt!==T)&&(s.blendColor(gt.r,gt.g,gt.b,yt),M.copy(gt),T=yt),S=C,G=!1}function Ze(C,oe){C.side===Xt?Me(s.CULL_FACE):be(s.CULL_FACE);let ce=C.side===Lt;oe&&(ce=!ce),Le(ce),C.blending===ti&&C.transparent===!1?ue(gn):ue(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),c.setFunc(C.depthFunc),c.setTest(C.depthTest),c.setMask(C.depthWrite),a.setMask(C.colorWrite);const Ae=C.stencilWrite;l.setTest(Ae),Ae&&(l.setMask(C.stencilWriteMask),l.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),l.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),U(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?be(s.SAMPLE_ALPHA_TO_COVERAGE):Me(s.SAMPLE_ALPHA_TO_COVERAGE)}function Le(C){H!==C&&(C?s.frontFace(s.CW):s.frontFace(s.CCW),H=C)}function w(C){C!==Uo?(be(s.CULL_FACE),C!==Q&&(C===xr?s.cullFace(s.BACK):C===Fo?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Me(s.CULL_FACE),Q=C}function v(C){C!==L&&(X&&s.lineWidth(C),L=C)}function U(C,oe,ce){C?(be(s.POLYGON_OFFSET_FILL),(F!==oe||W!==ce)&&(s.polygonOffset(oe,ce),F=oe,W=ce)):Me(s.POLYGON_OFFSET_FILL)}function Z(C){C?be(s.SCISSOR_TEST):Me(s.SCISSOR_TEST)}function q(C){C===void 0&&(C=s.TEXTURE0+K-1),te!==C&&(s.activeTexture(C),te=C)}function J(C,oe,ce){ce===void 0&&(te===null?ce=s.TEXTURE0+K-1:ce=te);let Ae=ne[ce];Ae===void 0&&(Ae={type:void 0,texture:void 0},ne[ce]=Ae),(Ae.type!==C||Ae.texture!==oe)&&(te!==ce&&(s.activeTexture(ce),te=ce),s.bindTexture(C,oe||Re[C]),Ae.type=C,Ae.texture=oe)}function fe(){const C=ne[te];C!==void 0&&C.type!==void 0&&(s.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function ae(){try{s.compressedTexImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function me(){try{s.compressedTexImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function we(){try{s.texSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Oe(){try{s.texSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ee(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ye(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function We(){try{s.texStorage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Pe(){try{s.texStorage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Se(){try{s.texImage2D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function ge(){try{s.texImage3D.apply(s,arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function Ue(C){re.equals(C)===!1&&(s.scissor(C.x,C.y,C.z,C.w),re.copy(C))}function Xe(C){_e.equals(C)===!1&&(s.viewport(C.x,C.y,C.z,C.w),_e.copy(C))}function st(C,oe){let ce=f.get(oe);ce===void 0&&(ce=new WeakMap,f.set(oe,ce));let Ae=ce.get(C);Ae===void 0&&(Ae=s.getUniformBlockIndex(oe,C.name),ce.set(C,Ae))}function Ge(C,oe){const Ae=f.get(oe).get(C);h.get(oe)!==Ae&&(s.uniformBlockBinding(oe,Ae,C.__bindingPointIndex),h.set(oe,Ae))}function ie(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),n===!0&&(s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),d={},te=null,ne={},m={},_=new WeakMap,g=[],p=null,u=!1,S=null,x=null,y=null,R=null,A=null,b=null,k=null,M=new He(0,0,0),T=0,G=!1,H=null,Q=null,L=null,F=null,W=null,re.set(0,0,s.canvas.width,s.canvas.height),_e.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:be,disable:Me,bindFramebuffer:Ne,drawBuffers:I,useProgram:ut,setBlending:ue,setMaterial:Ze,setFlipSided:Le,setCullFace:w,setLineWidth:v,setPolygonOffset:U,setScissorTest:Z,activeTexture:q,bindTexture:J,unbindTexture:fe,compressedTexImage2D:ae,compressedTexImage3D:me,texImage2D:Se,texImage3D:ge,updateUBOMapping:st,uniformBlockBinding:Ge,texStorage2D:We,texStorage3D:Pe,texSubImage2D:we,texSubImage3D:Oe,compressedTexSubImage2D:ee,compressedTexSubImage3D:Ye,scissor:Ue,viewport:Xe,reset:ie}}function Df(s,e,t,n,i,r,o){const a=i.isWebGL2,c=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new WeakMap;let f;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(w,v){return m?new OffscreenCanvas(w,v):ns("canvas")}function g(w,v,U,Z){let q=1;if((w.width>Z||w.height>Z)&&(q=Z/Math.max(w.width,w.height)),q<1||v===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const J=v?er:Math.floor,fe=J(q*w.width),ae=J(q*w.height);f===void 0&&(f=_(fe,ae));const me=U?_(fe,ae):f;return me.width=fe,me.height=ae,me.getContext("2d").drawImage(w,0,0,fe,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+fe+"x"+ae+")."),me}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function p(w){return ea(w.width)&&ea(w.height)}function u(w){return a?!1:w.wrapS!==qt||w.wrapT!==qt||w.minFilter!==bt&&w.minFilter!==Gt}function S(w,v){return w.generateMipmaps&&v&&w.minFilter!==bt&&w.minFilter!==Gt}function x(w){s.generateMipmap(w)}function y(w,v,U,Z,q=!1){if(a===!1)return v;if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=v;if(v===s.RED&&(U===s.FLOAT&&(J=s.R32F),U===s.HALF_FLOAT&&(J=s.R16F),U===s.UNSIGNED_BYTE&&(J=s.R8)),v===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(J=s.R8UI),U===s.UNSIGNED_SHORT&&(J=s.R16UI),U===s.UNSIGNED_INT&&(J=s.R32UI),U===s.BYTE&&(J=s.R8I),U===s.SHORT&&(J=s.R16I),U===s.INT&&(J=s.R32I)),v===s.RG&&(U===s.FLOAT&&(J=s.RG32F),U===s.HALF_FLOAT&&(J=s.RG16F),U===s.UNSIGNED_BYTE&&(J=s.RG8)),v===s.RGBA){const fe=q?ji:Ke.getTransfer(Z);U===s.FLOAT&&(J=s.RGBA32F),U===s.HALF_FLOAT&&(J=s.RGBA16F),U===s.UNSIGNED_BYTE&&(J=fe===et?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function R(w,v,U){return S(w,U)===!0||w.isFramebufferTexture&&w.minFilter!==bt&&w.minFilter!==Gt?Math.log2(Math.max(v.width,v.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?v.mipmaps.length:1}function A(w){return w===bt||w===wr||w===ps?s.NEAREST:s.LINEAR}function b(w){const v=w.target;v.removeEventListener("dispose",b),M(v),v.isVideoTexture&&h.delete(v)}function k(w){const v=w.target;v.removeEventListener("dispose",k),G(v)}function M(w){const v=n.get(w);if(v.__webglInit===void 0)return;const U=w.source,Z=d.get(U);if(Z){const q=Z[v.__cacheKey];q.usedTimes--,q.usedTimes===0&&T(w),Object.keys(Z).length===0&&d.delete(U)}n.remove(w)}function T(w){const v=n.get(w);s.deleteTexture(v.__webglTexture);const U=w.source,Z=d.get(U);delete Z[v.__cacheKey],o.memory.textures--}function G(w){const v=w.texture,U=n.get(w),Z=n.get(v);if(Z.__webglTexture!==void 0&&(s.deleteTexture(Z.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(U.__webglFramebuffer[q]))for(let J=0;J<U.__webglFramebuffer[q].length;J++)s.deleteFramebuffer(U.__webglFramebuffer[q][J]);else s.deleteFramebuffer(U.__webglFramebuffer[q]);U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer[q])}else{if(Array.isArray(U.__webglFramebuffer))for(let q=0;q<U.__webglFramebuffer.length;q++)s.deleteFramebuffer(U.__webglFramebuffer[q]);else s.deleteFramebuffer(U.__webglFramebuffer);if(U.__webglDepthbuffer&&s.deleteRenderbuffer(U.__webglDepthbuffer),U.__webglMultisampledFramebuffer&&s.deleteFramebuffer(U.__webglMultisampledFramebuffer),U.__webglColorRenderbuffer)for(let q=0;q<U.__webglColorRenderbuffer.length;q++)U.__webglColorRenderbuffer[q]&&s.deleteRenderbuffer(U.__webglColorRenderbuffer[q]);U.__webglDepthRenderbuffer&&s.deleteRenderbuffer(U.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let q=0,J=v.length;q<J;q++){const fe=n.get(v[q]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),o.memory.textures--),n.remove(v[q])}n.remove(v),n.remove(w)}let H=0;function Q(){H=0}function L(){const w=H;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),H+=1,w}function F(w){const v=[];return v.push(w.wrapS),v.push(w.wrapT),v.push(w.wrapR||0),v.push(w.magFilter),v.push(w.minFilter),v.push(w.anisotropy),v.push(w.internalFormat),v.push(w.format),v.push(w.type),v.push(w.generateMipmaps),v.push(w.premultiplyAlpha),v.push(w.flipY),v.push(w.unpackAlignment),v.push(w.colorSpace),v.join()}function W(w,v){const U=n.get(w);if(w.isVideoTexture&&Ze(w),w.isRenderTargetTexture===!1&&w.version>0&&U.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{re(U,w,v);return}}t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+v)}function K(w,v){const U=n.get(w);if(w.version>0&&U.__version!==w.version){re(U,w,v);return}t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+v)}function X(w,v){const U=n.get(w);if(w.version>0&&U.__version!==w.version){re(U,w,v);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+v)}function Y(w,v){const U=n.get(w);if(w.version>0&&U.__version!==w.version){_e(U,w,v);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+v)}const $={[Ln]:s.REPEAT,[qt]:s.CLAMP_TO_EDGE,[Js]:s.MIRRORED_REPEAT},te={[bt]:s.NEAREST,[wr]:s.NEAREST_MIPMAP_NEAREST,[ps]:s.NEAREST_MIPMAP_LINEAR,[Gt]:s.LINEAR,[fc]:s.LINEAR_MIPMAP_NEAREST,[xi]:s.LINEAR_MIPMAP_LINEAR},ne={[wc]:s.NEVER,[Pc]:s.ALWAYS,[bc]:s.LESS,[so]:s.LEQUAL,[Ac]:s.EQUAL,[Lc]:s.GEQUAL,[Rc]:s.GREATER,[Cc]:s.NOTEQUAL};function V(w,v,U){if(U?(s.texParameteri(w,s.TEXTURE_WRAP_S,$[v.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,$[v.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,$[v.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,te[v.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,te[v.minFilter])):(s.texParameteri(w,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(w,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,s.CLAMP_TO_EDGE),(v.wrapS!==qt||v.wrapT!==qt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(w,s.TEXTURE_MAG_FILTER,A(v.magFilter)),s.texParameteri(w,s.TEXTURE_MIN_FILTER,A(v.minFilter)),v.minFilter!==bt&&v.minFilter!==Gt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),v.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,ne[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const Z=e.get("EXT_texture_filter_anisotropic");if(v.magFilter===bt||v.minFilter!==ps&&v.minFilter!==xi||v.type===mn&&e.has("OES_texture_float_linear")===!1||a===!1&&v.type===vi&&e.has("OES_texture_half_float_linear")===!1)return;(v.anisotropy>1||n.get(v).__currentAnisotropy)&&(s.texParameterf(w,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy)}}function j(w,v){let U=!1;w.__webglInit===void 0&&(w.__webglInit=!0,v.addEventListener("dispose",b));const Z=v.source;let q=d.get(Z);q===void 0&&(q={},d.set(Z,q));const J=F(v);if(J!==w.__cacheKey){q[J]===void 0&&(q[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,U=!0),q[J].usedTimes++;const fe=q[w.__cacheKey];fe!==void 0&&(q[w.__cacheKey].usedTimes--,fe.usedTimes===0&&T(v)),w.__cacheKey=J,w.__webglTexture=q[J].texture}return U}function re(w,v,U){let Z=s.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),v.isData3DTexture&&(Z=s.TEXTURE_3D);const q=j(w,v),J=v.source;t.bindTexture(Z,w.__webglTexture,s.TEXTURE0+U);const fe=n.get(J);if(J.version!==fe.__version||q===!0){t.activeTexture(s.TEXTURE0+U);const ae=Ke.getPrimaries(Ke.workingColorSpace),me=v.colorSpace===zt?null:Ke.getPrimaries(v.colorSpace),we=v.colorSpace===zt||ae===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Oe=u(v)&&p(v.image)===!1;let ee=g(v.image,Oe,!1,i.maxTextureSize);ee=Le(v,ee);const Ye=p(ee)||a,We=r.convert(v.format,v.colorSpace);let Pe=r.convert(v.type),Se=y(v.internalFormat,We,Pe,v.colorSpace,v.isVideoTexture);V(Z,v,Ye);let ge;const Ue=v.mipmaps,Xe=a&&v.isVideoTexture!==!0&&Se!==to,st=fe.__version===void 0||q===!0,Ge=R(v,ee,Ye);if(v.isDepthTexture)Se=s.DEPTH_COMPONENT,a?v.type===mn?Se=s.DEPTH_COMPONENT32F:v.type===pn?Se=s.DEPTH_COMPONENT24:v.type===Dn?Se=s.DEPTH24_STENCIL8:Se=s.DEPTH_COMPONENT16:v.type===mn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),v.format===In&&Se===s.DEPTH_COMPONENT&&v.type!==sr&&v.type!==pn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),v.type=pn,Pe=r.convert(v.type)),v.format===ri&&Se===s.DEPTH_COMPONENT&&(Se=s.DEPTH_STENCIL,v.type!==Dn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),v.type=Dn,Pe=r.convert(v.type))),st&&(Xe?t.texStorage2D(s.TEXTURE_2D,1,Se,ee.width,ee.height):t.texImage2D(s.TEXTURE_2D,0,Se,ee.width,ee.height,0,We,Pe,null));else if(v.isDataTexture)if(Ue.length>0&&Ye){Xe&&st&&t.texStorage2D(s.TEXTURE_2D,Ge,Se,Ue[0].width,Ue[0].height);for(let ie=0,C=Ue.length;ie<C;ie++)ge=Ue[ie],Xe?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ge.width,ge.height,We,Pe,ge.data):t.texImage2D(s.TEXTURE_2D,ie,Se,ge.width,ge.height,0,We,Pe,ge.data);v.generateMipmaps=!1}else Xe?(st&&t.texStorage2D(s.TEXTURE_2D,Ge,Se,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,ee.width,ee.height,We,Pe,ee.data)):t.texImage2D(s.TEXTURE_2D,0,Se,ee.width,ee.height,0,We,Pe,ee.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Xe&&st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,Se,Ue[0].width,Ue[0].height,ee.depth);for(let ie=0,C=Ue.length;ie<C;ie++)ge=Ue[ie],v.format!==Yt?We!==null?Xe?t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ge.width,ge.height,ee.depth,We,ge.data,0,0):t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Se,ge.width,ge.height,ee.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,ge.width,ge.height,ee.depth,We,Pe,ge.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Se,ge.width,ge.height,ee.depth,0,We,Pe,ge.data)}else{Xe&&st&&t.texStorage2D(s.TEXTURE_2D,Ge,Se,Ue[0].width,Ue[0].height);for(let ie=0,C=Ue.length;ie<C;ie++)ge=Ue[ie],v.format!==Yt?We!==null?Xe?t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,ge.width,ge.height,We,ge.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Se,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Xe?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ge.width,ge.height,We,Pe,ge.data):t.texImage2D(s.TEXTURE_2D,ie,Se,ge.width,ge.height,0,We,Pe,ge.data)}else if(v.isDataArrayTexture)Xe?(st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ge,Se,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ee.width,ee.height,ee.depth,We,Pe,ee.data)):t.texImage3D(s.TEXTURE_2D_ARRAY,0,Se,ee.width,ee.height,ee.depth,0,We,Pe,ee.data);else if(v.isData3DTexture)Xe?(st&&t.texStorage3D(s.TEXTURE_3D,Ge,Se,ee.width,ee.height,ee.depth),t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ee.width,ee.height,ee.depth,We,Pe,ee.data)):t.texImage3D(s.TEXTURE_3D,0,Se,ee.width,ee.height,ee.depth,0,We,Pe,ee.data);else if(v.isFramebufferTexture){if(st)if(Xe)t.texStorage2D(s.TEXTURE_2D,Ge,Se,ee.width,ee.height);else{let ie=ee.width,C=ee.height;for(let oe=0;oe<Ge;oe++)t.texImage2D(s.TEXTURE_2D,oe,Se,ie,C,0,We,Pe,null),ie>>=1,C>>=1}}else if(Ue.length>0&&Ye){Xe&&st&&t.texStorage2D(s.TEXTURE_2D,Ge,Se,Ue[0].width,Ue[0].height);for(let ie=0,C=Ue.length;ie<C;ie++)ge=Ue[ie],Xe?t.texSubImage2D(s.TEXTURE_2D,ie,0,0,We,Pe,ge):t.texImage2D(s.TEXTURE_2D,ie,Se,We,Pe,ge);v.generateMipmaps=!1}else Xe?(st&&t.texStorage2D(s.TEXTURE_2D,Ge,Se,ee.width,ee.height),t.texSubImage2D(s.TEXTURE_2D,0,0,0,We,Pe,ee)):t.texImage2D(s.TEXTURE_2D,0,Se,We,Pe,ee);S(v,Ye)&&x(Z),fe.__version=J.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function _e(w,v,U){if(v.image.length!==6)return;const Z=j(w,v),q=v.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+U);const J=n.get(q);if(q.version!==J.__version||Z===!0){t.activeTexture(s.TEXTURE0+U);const fe=Ke.getPrimaries(Ke.workingColorSpace),ae=v.colorSpace===zt?null:Ke.getPrimaries(v.colorSpace),me=v.colorSpace===zt||fe===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,v.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,v.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const we=v.isCompressedTexture||v.image[0].isCompressedTexture,Oe=v.image[0]&&v.image[0].isDataTexture,ee=[];for(let ie=0;ie<6;ie++)!we&&!Oe?ee[ie]=g(v.image[ie],!1,!0,i.maxCubemapSize):ee[ie]=Oe?v.image[ie].image:v.image[ie],ee[ie]=Le(v,ee[ie]);const Ye=ee[0],We=p(Ye)||a,Pe=r.convert(v.format,v.colorSpace),Se=r.convert(v.type),ge=y(v.internalFormat,Pe,Se,v.colorSpace),Ue=a&&v.isVideoTexture!==!0,Xe=J.__version===void 0||Z===!0;let st=R(v,Ye,We);V(s.TEXTURE_CUBE_MAP,v,We);let Ge;if(we){Ue&&Xe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,st,ge,Ye.width,Ye.height);for(let ie=0;ie<6;ie++){Ge=ee[ie].mipmaps;for(let C=0;C<Ge.length;C++){const oe=Ge[C];v.format!==Yt?Pe!==null?Ue?t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,0,0,oe.width,oe.height,Pe,oe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,ge,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,0,0,oe.width,oe.height,Pe,Se,oe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C,ge,oe.width,oe.height,0,Pe,Se,oe.data)}}}else{Ge=v.mipmaps,Ue&&Xe&&(Ge.length>0&&st++,t.texStorage2D(s.TEXTURE_CUBE_MAP,st,ge,ee[0].width,ee[0].height));for(let ie=0;ie<6;ie++)if(Oe){Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,ee[ie].width,ee[ie].height,Pe,Se,ee[ie].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ge,ee[ie].width,ee[ie].height,0,Pe,Se,ee[ie].data);for(let C=0;C<Ge.length;C++){const ce=Ge[C].image[ie].image;Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,0,0,ce.width,ce.height,Pe,Se,ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,ge,ce.width,ce.height,0,Pe,Se,ce.data)}}else{Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,0,0,Pe,Se,ee[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,0,ge,Pe,Se,ee[ie]);for(let C=0;C<Ge.length;C++){const oe=Ge[C];Ue?t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,0,0,Pe,Se,oe.image[ie]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ie,C+1,ge,Pe,Se,oe.image[ie])}}}S(v,We)&&x(s.TEXTURE_CUBE_MAP),J.__version=q.version,v.onUpdate&&v.onUpdate(v)}w.__version=v.version}function pe(w,v,U,Z,q,J){const fe=r.convert(U.format,U.colorSpace),ae=r.convert(U.type),me=y(U.internalFormat,fe,ae,U.colorSpace);if(!n.get(v).__hasExternalTextures){const Oe=Math.max(1,v.width>>J),ee=Math.max(1,v.height>>J);q===s.TEXTURE_3D||q===s.TEXTURE_2D_ARRAY?t.texImage3D(q,J,me,Oe,ee,v.depth,0,fe,ae,null):t.texImage2D(q,J,me,Oe,ee,0,fe,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ue(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,q,n.get(U).__webglTexture,0,Te(v)):(q===s.TEXTURE_2D||q>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&q<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,q,n.get(U).__webglTexture,J),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Re(w,v,U){if(s.bindRenderbuffer(s.RENDERBUFFER,w),v.depthBuffer&&!v.stencilBuffer){let Z=a===!0?s.DEPTH_COMPONENT24:s.DEPTH_COMPONENT16;if(U||ue(v)){const q=v.depthTexture;q&&q.isDepthTexture&&(q.type===mn?Z=s.DEPTH_COMPONENT32F:q.type===pn&&(Z=s.DEPTH_COMPONENT24));const J=Te(v);ue(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,J,Z,v.width,v.height):s.renderbufferStorageMultisample(s.RENDERBUFFER,J,Z,v.width,v.height)}else s.renderbufferStorage(s.RENDERBUFFER,Z,v.width,v.height);s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.RENDERBUFFER,w)}else if(v.depthBuffer&&v.stencilBuffer){const Z=Te(v);U&&ue(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,v.width,v.height):ue(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Z,s.DEPTH24_STENCIL8,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,s.DEPTH_STENCIL,v.width,v.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.RENDERBUFFER,w)}else{const Z=v.isWebGLMultipleRenderTargets===!0?v.texture:[v.texture];for(let q=0;q<Z.length;q++){const J=Z[q],fe=r.convert(J.format,J.colorSpace),ae=r.convert(J.type),me=y(J.internalFormat,fe,ae,J.colorSpace),we=Te(v);U&&ue(v)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,we,me,v.width,v.height):ue(v)?c.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,we,me,v.width,v.height):s.renderbufferStorage(s.RENDERBUFFER,me,v.width,v.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function be(w,v){if(v&&v.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(v.depthTexture).__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),W(v.depthTexture,0);const Z=n.get(v.depthTexture).__webglTexture,q=Te(v);if(v.depthTexture.format===In)ue(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(v.depthTexture.format===ri)ue(v)?c.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,q):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Me(w){const v=n.get(w),U=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!v.__autoAllocateDepthBuffer){if(U)throw new Error("target.depthTexture not supported in Cube render targets");be(v.__webglFramebuffer,w)}else if(U){v.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer[Z]),v.__webglDepthbuffer[Z]=s.createRenderbuffer(),Re(v.__webglDepthbuffer[Z],w,!1)}else t.bindFramebuffer(s.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer=s.createRenderbuffer(),Re(v.__webglDepthbuffer,w,!1);t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ne(w,v,U){const Z=n.get(w);v!==void 0&&pe(Z.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&Me(w)}function I(w){const v=w.texture,U=n.get(w),Z=n.get(v);w.addEventListener("dispose",k),w.isWebGLMultipleRenderTargets!==!0&&(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=v.version,o.memory.textures++);const q=w.isWebGLCubeRenderTarget===!0,J=w.isWebGLMultipleRenderTargets===!0,fe=p(w)||a;if(q){U.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer[ae]=[];for(let me=0;me<v.mipmaps.length;me++)U.__webglFramebuffer[ae][me]=s.createFramebuffer()}else U.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(a&&v.mipmaps&&v.mipmaps.length>0){U.__webglFramebuffer=[];for(let ae=0;ae<v.mipmaps.length;ae++)U.__webglFramebuffer[ae]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(J)if(i.drawBuffers){const ae=w.texture;for(let me=0,we=ae.length;me<we;me++){const Oe=n.get(ae[me]);Oe.__webglTexture===void 0&&(Oe.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ue(w)===!1){const ae=J?v:[v];U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let me=0;me<ae.length;me++){const we=ae[me];U.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[me]);const Oe=r.convert(we.format,we.colorSpace),ee=r.convert(we.type),Ye=y(we.internalFormat,Oe,ee,we.colorSpace,w.isXRRenderTarget===!0),We=Te(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,We,Ye,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,U.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),Re(U.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(q){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),V(s.TEXTURE_CUBE_MAP,v,fe);for(let ae=0;ae<6;ae++)if(a&&v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)pe(U.__webglFramebuffer[ae][me],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,me);else pe(U.__webglFramebuffer[ae],w,v,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);S(v,fe)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(J){const ae=w.texture;for(let me=0,we=ae.length;me<we;me++){const Oe=ae[me],ee=n.get(Oe);t.bindTexture(s.TEXTURE_2D,ee.__webglTexture),V(s.TEXTURE_2D,Oe,fe),pe(U.__webglFramebuffer,w,Oe,s.COLOR_ATTACHMENT0+me,s.TEXTURE_2D,0),S(Oe,fe)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?ae=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,Z.__webglTexture),V(ae,v,fe),a&&v.mipmaps&&v.mipmaps.length>0)for(let me=0;me<v.mipmaps.length;me++)pe(U.__webglFramebuffer[me],w,v,s.COLOR_ATTACHMENT0,ae,me);else pe(U.__webglFramebuffer,w,v,s.COLOR_ATTACHMENT0,ae,0);S(v,fe)&&x(ae),t.unbindTexture()}w.depthBuffer&&Me(w)}function ut(w){const v=p(w)||a,U=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let Z=0,q=U.length;Z<q;Z++){const J=U[Z];if(S(J,v)){const fe=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,ae=n.get(J).__webglTexture;t.bindTexture(fe,ae),x(fe),t.unbindTexture()}}}function xe(w){if(a&&w.samples>0&&ue(w)===!1){const v=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],U=w.width,Z=w.height;let q=s.COLOR_BUFFER_BIT;const J=[],fe=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=n.get(w),me=w.isWebGLMultipleRenderTargets===!0;if(me)for(let we=0;we<v.length;we++)t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let we=0;we<v.length;we++){J.push(s.COLOR_ATTACHMENT0+we),w.depthBuffer&&J.push(fe);const Oe=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Oe===!1&&(w.depthBuffer&&(q|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&(q|=s.STENCIL_BUFFER_BIT)),me&&s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ae.__webglColorRenderbuffer[we]),Oe===!0&&(s.invalidateFramebuffer(s.READ_FRAMEBUFFER,[fe]),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[fe])),me){const ee=n.get(v[we]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ee,0)}s.blitFramebuffer(0,0,U,Z,0,0,U,Z,q,s.NEAREST),l&&s.invalidateFramebuffer(s.READ_FRAMEBUFFER,J)}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let we=0;we<v.length;we++){t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.RENDERBUFFER,ae.__webglColorRenderbuffer[we]);const Oe=n.get(v[we]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ae.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+we,s.TEXTURE_2D,Oe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Te(w){return Math.min(i.maxSamples,w.samples)}function ue(w){const v=n.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function Ze(w){const v=o.render.frame;h.get(w)!==v&&(h.set(w,v),w.update())}function Le(w,v){const U=w.colorSpace,Z=w.format,q=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||w.format===Qs||U!==cn&&U!==zt&&(Ke.getTransfer(U)===et?a===!1?e.has("EXT_sRGB")===!0&&Z===Yt?(w.format=Qs,w.minFilter=Gt,w.generateMipmaps=!1):v=ao.sRGBToLinear(v):(Z!==Yt||q!==xn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",U)),v}this.allocateTextureUnit=L,this.resetTextureUnits=Q,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=X,this.setTextureCube=Y,this.rebindTextures=Ne,this.setupRenderTarget=I,this.updateRenderTargetMipmap=ut,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=Me,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=ue}function If(s,e,t){const n=t.isWebGL2;function i(r,o=zt){let a;const c=Ke.getTransfer(o);if(r===xn)return s.UNSIGNED_BYTE;if(r===$a)return s.UNSIGNED_SHORT_4_4_4_4;if(r===ja)return s.UNSIGNED_SHORT_5_5_5_1;if(r===pc)return s.BYTE;if(r===mc)return s.SHORT;if(r===sr)return s.UNSIGNED_SHORT;if(r===Za)return s.INT;if(r===pn)return s.UNSIGNED_INT;if(r===mn)return s.FLOAT;if(r===vi)return n?s.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===gc)return s.ALPHA;if(r===Yt)return s.RGBA;if(r===_c)return s.LUMINANCE;if(r===xc)return s.LUMINANCE_ALPHA;if(r===In)return s.DEPTH_COMPONENT;if(r===ri)return s.DEPTH_STENCIL;if(r===Qs)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===vc)return s.RED;if(r===Ja)return s.RED_INTEGER;if(r===Mc)return s.RG;if(r===Qa)return s.RG_INTEGER;if(r===eo)return s.RGBA_INTEGER;if(r===ms||r===gs||r===_s||r===xs)if(c===et)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===ms)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===gs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===_s)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===xs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===ms)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===gs)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===_s)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===xs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===br||r===Ar||r===Rr||r===Cr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===br)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ar)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Rr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Cr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===to)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===Lr||r===Pr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(r===Lr)return c===et?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Pr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Dr||r===Ir||r===Ur||r===Fr||r===Nr||r===Or||r===Br||r===Gr||r===zr||r===kr||r===Hr||r===Vr||r===Wr||r===Xr)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Dr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ir)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Ur)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Fr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Nr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Or)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Br)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Gr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===zr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===kr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Hr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Vr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Wr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Xr)return c===et?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===vs||r===qr||r===Yr)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(r===vs)return c===et?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===qr)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Yr)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Sc||r===Kr||r===Zr||r===$r)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(r===vs)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Kr)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zr)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$r)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Dn?n?s.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Uf extends Ct{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class it extends ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ff={type:"move"};class Ws{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new it,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new it,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new it,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n),u=this._getHandJoint(l,g);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,_=.005;l.inputState.pinching&&d>m+_?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-_&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Ff)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new it;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class Nf extends oi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,d=null,m=null,_=null;const g=t.getContextAttributes();let p=null,u=null;const S=[],x=[],y=new Ve;let R=null;const A=new Ct;A.layers.enable(1),A.viewport=new tt;const b=new Ct;b.layers.enable(2),b.viewport=new tt;const k=[A,b],M=new Uf;M.layers.enable(1),M.layers.enable(2);let T=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let j=S[V];return j===void 0&&(j=new Ws,S[V]=j),j.getTargetRaySpace()},this.getControllerGrip=function(V){let j=S[V];return j===void 0&&(j=new Ws,S[V]=j),j.getGripSpace()},this.getHand=function(V){let j=S[V];return j===void 0&&(j=new Ws,S[V]=j),j.getHandSpace()};function H(V){const j=x.indexOf(V.inputSource);if(j===-1)return;const re=S[j];re!==void 0&&(re.update(V.inputSource,V.frame,l||o),re.dispatchEvent({type:V.type,data:V.inputSource}))}function Q(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",Q),i.removeEventListener("inputsourceschange",L);for(let V=0;V<S.length;V++){const j=x[V];j!==null&&(x[V]=null,S[V].disconnect(j))}T=null,G=null,e.setRenderTarget(p),m=null,d=null,f=null,i=null,u=null,ne.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(y.width,y.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){r=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(V){l=V},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(V){if(i=V,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",Q),i.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(y),i.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const j={antialias:i.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,j),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),u=new Fn(m.framebufferWidth,m.framebufferHeight,{format:Yt,type:xn,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let j=null,re=null,_e=null;g.depth&&(_e=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,j=g.stencil?ri:In,re=g.stencil?Dn:pn);const pe={colorFormat:t.RGBA8,depthFormat:_e,scaleFactor:r};f=new XRWebGLBinding(i,t),d=f.createProjectionLayer(pe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),u=new Fn(d.textureWidth,d.textureHeight,{format:Yt,type:xn,depthTexture:new Mo(d.textureWidth,d.textureHeight,re,void 0,void 0,void 0,void 0,void 0,void 0,j),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const Re=e.properties.get(u);Re.__ignoreDepthValues=d.ignoreDepthValues}u.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),ne.setContext(i),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode};function L(V){for(let j=0;j<V.removed.length;j++){const re=V.removed[j],_e=x.indexOf(re);_e>=0&&(x[_e]=null,S[_e].disconnect(re))}for(let j=0;j<V.added.length;j++){const re=V.added[j];let _e=x.indexOf(re);if(_e===-1){for(let Re=0;Re<S.length;Re++)if(Re>=x.length){x.push(re),_e=Re;break}else if(x[Re]===null){x[Re]=re,_e=Re;break}if(_e===-1)break}const pe=S[_e];pe&&pe.connect(re)}}const F=new P,W=new P;function K(V,j,re){F.setFromMatrixPosition(j.matrixWorld),W.setFromMatrixPosition(re.matrixWorld);const _e=F.distanceTo(W),pe=j.projectionMatrix.elements,Re=re.projectionMatrix.elements,be=pe[14]/(pe[10]-1),Me=pe[14]/(pe[10]+1),Ne=(pe[9]+1)/pe[5],I=(pe[9]-1)/pe[5],ut=(pe[8]-1)/pe[0],xe=(Re[8]+1)/Re[0],Te=be*ut,ue=be*xe,Ze=_e/(-ut+xe),Le=Ze*-ut;j.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Le),V.translateZ(Ze),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const w=be+Ze,v=Me+Ze,U=Te-Le,Z=ue+(_e-Le),q=Ne*Me/v*w,J=I*Me/v*w;V.projectionMatrix.makePerspective(U,Z,q,J,w,v),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function X(V,j){j===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(j.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(i===null)return;M.near=b.near=A.near=V.near,M.far=b.far=A.far=V.far,(T!==M.near||G!==M.far)&&(i.updateRenderState({depthNear:M.near,depthFar:M.far}),T=M.near,G=M.far);const j=V.parent,re=M.cameras;X(M,j);for(let _e=0;_e<re.length;_e++)X(re[_e],j);re.length===2?K(M,A,b):M.projectionMatrix.copy(A.projectionMatrix),Y(V,M,j)};function Y(V,j,re){re===null?V.matrix.copy(j.matrixWorld):(V.matrix.copy(re.matrixWorld),V.matrix.invert(),V.matrix.multiply(j.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(j.projectionMatrix),V.projectionMatrixInverse.copy(j.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=ts*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(V){c=V,d!==null&&(d.fixedFoveation=V),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=V)};let $=null;function te(V,j){if(h=j.getViewerPose(l||o),_=j,h!==null){const re=h.views;m!==null&&(e.setRenderTargetFramebuffer(u,m.framebuffer),e.setRenderTarget(u));let _e=!1;re.length!==M.cameras.length&&(M.cameras.length=0,_e=!0);for(let pe=0;pe<re.length;pe++){const Re=re[pe];let be=null;if(m!==null)be=m.getViewport(Re);else{const Ne=f.getViewSubImage(d,Re);be=Ne.viewport,pe===0&&(e.setRenderTargetTextures(u,Ne.colorTexture,d.ignoreDepthValues?void 0:Ne.depthStencilTexture),e.setRenderTarget(u))}let Me=k[pe];Me===void 0&&(Me=new Ct,Me.layers.enable(pe),Me.viewport=new tt,k[pe]=Me),Me.matrix.fromArray(Re.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(Re.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(be.x,be.y,be.width,be.height),pe===0&&(M.matrix.copy(Me.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),_e===!0&&M.cameras.push(Me)}}for(let re=0;re<S.length;re++){const _e=x[re],pe=S[re];_e!==null&&pe!==void 0&&pe.update(_e,j,l||o)}$&&$(V,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),_=null}const ne=new xo;ne.setAnimationLoop(te),this.setAnimationLoop=function(V){$=V},this.dispose=function(){}}}function Of(s,e){function t(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function n(p,u){u.color.getRGB(p.fogColor.value,mo(s)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function i(p,u,S,x,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(p,u):u.isMeshToonMaterial?(r(p,u),f(p,u)):u.isMeshPhongMaterial?(r(p,u),h(p,u)):u.isMeshStandardMaterial?(r(p,u),d(p,u),u.isMeshPhysicalMaterial&&m(p,u,y)):u.isMeshMatcapMaterial?(r(p,u),_(p,u)):u.isMeshDepthMaterial?r(p,u):u.isMeshDistanceMaterial?(r(p,u),g(p,u)):u.isMeshNormalMaterial?r(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?c(p,u,S,x):u.isSpriteMaterial?l(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,t(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===Lt&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,t(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===Lt&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,t(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,t(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const S=e.get(u).envMap;if(S&&(p.envMap.value=S,p.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap){p.lightMap.value=u.lightMap;const x=s._useLegacyLights===!0?Math.PI:1;p.lightMapIntensity.value=u.lightMapIntensity*x,t(u.lightMap,p.lightMapTransform)}u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function c(p,u,S,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*S,p.scale.value=x*.5,u.map&&(p.map.value=u.map,t(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function l(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,t(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,t(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function h(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function f(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,p.roughnessMapTransform)),e.get(u).envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function m(p,u,S){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===Lt&&p.clearcoatNormalScale.value.negate())),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,p.specularIntensityMapTransform))}function _(p,u){u.matcap&&(p.matcap.value=u.matcap)}function g(p,u){const S=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Bf(s,e,t,n){let i={},r={},o=[];const a=t.isWebGL2?s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS):0;function c(S,x){const y=x.program;n.uniformBlockBinding(S,y)}function l(S,x){let y=i[S.id];y===void 0&&(_(S),y=h(S),i[S.id]=y,S.addEventListener("dispose",p));const R=x.program;n.updateUBOMapping(S,R);const A=e.render.frame;r[S.id]!==A&&(d(S),r[S.id]=A)}function h(S){const x=f();S.__bindingPointIndex=x;const y=s.createBuffer(),R=S.__size,A=S.usage;return s.bindBuffer(s.UNIFORM_BUFFER,y),s.bufferData(s.UNIFORM_BUFFER,R,A),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,x,y),y}function f(){for(let S=0;S<a;S++)if(o.indexOf(S)===-1)return o.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(S){const x=i[S.id],y=S.uniforms,R=S.__cache;s.bindBuffer(s.UNIFORM_BUFFER,x);for(let A=0,b=y.length;A<b;A++){const k=Array.isArray(y[A])?y[A]:[y[A]];for(let M=0,T=k.length;M<T;M++){const G=k[M];if(m(G,A,M,R)===!0){const H=G.__offset,Q=Array.isArray(G.value)?G.value:[G.value];let L=0;for(let F=0;F<Q.length;F++){const W=Q[F],K=g(W);typeof W=="number"||typeof W=="boolean"?(G.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,H+L,G.__data)):W.isMatrix3?(G.__data[0]=W.elements[0],G.__data[1]=W.elements[1],G.__data[2]=W.elements[2],G.__data[3]=0,G.__data[4]=W.elements[3],G.__data[5]=W.elements[4],G.__data[6]=W.elements[5],G.__data[7]=0,G.__data[8]=W.elements[6],G.__data[9]=W.elements[7],G.__data[10]=W.elements[8],G.__data[11]=0):(W.toArray(G.__data,L),L+=K.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,G.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(S,x,y,R){const A=S.value,b=x+"_"+y;if(R[b]===void 0)return typeof A=="number"||typeof A=="boolean"?R[b]=A:R[b]=A.clone(),!0;{const k=R[b];if(typeof A=="number"||typeof A=="boolean"){if(k!==A)return R[b]=A,!0}else if(k.equals(A)===!1)return k.copy(A),!0}return!1}function _(S){const x=S.uniforms;let y=0;const R=16;for(let b=0,k=x.length;b<k;b++){const M=Array.isArray(x[b])?x[b]:[x[b]];for(let T=0,G=M.length;T<G;T++){const H=M[T],Q=Array.isArray(H.value)?H.value:[H.value];for(let L=0,F=Q.length;L<F;L++){const W=Q[L],K=g(W),X=y%R;X!==0&&R-X<K.boundary&&(y+=R-X),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=y,y+=K.storage}}}const A=y%R;return A>0&&(y+=R-A),S.__size=y,S.__cache={},this}function g(S){const x={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(x.boundary=4,x.storage=4):S.isVector2?(x.boundary=8,x.storage=8):S.isVector3||S.isColor?(x.boundary=16,x.storage=12):S.isVector4?(x.boundary=16,x.storage=16):S.isMatrix3?(x.boundary=48,x.storage=48):S.isMatrix4?(x.boundary=64,x.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),x}function p(S){const x=S.target;x.removeEventListener("dispose",p);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),s.deleteBuffer(i[x.id]),delete i[x.id],delete r[x.id]}function u(){for(const S in i)s.deleteBuffer(i[S]);o=[],i={},r={}}return{bind:c,update:l,dispose:u}}class bo{constructor(e={}){const{canvas:t=Ic(),context:n=null,depth:i=!0,stencil:r=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;n!==null?d=n.getContextAttributes().alpha:d=o;const m=new Uint32Array(4),_=new Int32Array(4);let g=null,p=null;const u=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this._useLegacyLights=!1,this.toneMapping=_n,this.toneMappingExposure=1;const x=this;let y=!1,R=0,A=0,b=null,k=-1,M=null;const T=new tt,G=new tt;let H=null;const Q=new He(0);let L=0,F=t.width,W=t.height,K=1,X=null,Y=null;const $=new tt(0,0,F,W),te=new tt(0,0,F,W);let ne=!1;const V=new ar;let j=!1,re=!1,_e=null;const pe=new lt,Re=new Ve,be=new P,Me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ne(){return b===null?K:1}let I=n;function ut(E,D){for(let O=0;O<E.length;O++){const z=E[O],N=t.getContext(z,D);if(N!==null)return N}return null}try{const E={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${ir}`),t.addEventListener("webglcontextlost",ie,!1),t.addEventListener("webglcontextrestored",C,!1),t.addEventListener("webglcontextcreationerror",oe,!1),I===null){const D=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&D.shift(),I=ut(D,E),I===null)throw ut(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&I instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),I.getShaderPrecisionFormat===void 0&&(I.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let xe,Te,ue,Ze,Le,w,v,U,Z,q,J,fe,ae,me,we,Oe,ee,Ye,We,Pe,Se,ge,Ue,Xe;function st(){xe=new Yd(I),Te=new kd(I,xe,e),xe.init(Te),ge=new If(I,xe,Te),ue=new Pf(I,xe,Te),Ze=new $d(I),Le=new _f,w=new Df(I,xe,ue,Le,Te,ge,Ze),v=new Vd(x),U=new qd(x),Z=new sl(I,Te),Ue=new Gd(I,xe,Z,Te),q=new Kd(I,Z,Ze,Ue),J=new eu(I,q,Z,Ze),We=new Qd(I,Te,w),Oe=new Hd(Le),fe=new gf(x,v,U,xe,Te,Ue,Oe),ae=new Of(x,Le),me=new vf,we=new wf(xe,Te),Ye=new Bd(x,v,U,ue,J,d,c),ee=new Lf(x,J,Te),Xe=new Bf(I,Ze,Te,ue),Pe=new zd(I,xe,Ze,Te),Se=new Zd(I,xe,Ze,Te),Ze.programs=fe.programs,x.capabilities=Te,x.extensions=xe,x.properties=Le,x.renderLists=me,x.shadowMap=ee,x.state=ue,x.info=Ze}st();const Ge=new Nf(x,I);this.xr=Ge,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=xe.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=xe.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return K},this.setPixelRatio=function(E){E!==void 0&&(K=E,this.setSize(F,W,!1))},this.getSize=function(E){return E.set(F,W)},this.setSize=function(E,D,O=!0){if(Ge.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,W=D,t.width=Math.floor(E*K),t.height=Math.floor(D*K),O===!0&&(t.style.width=E+"px",t.style.height=D+"px"),this.setViewport(0,0,E,D)},this.getDrawingBufferSize=function(E){return E.set(F*K,W*K).floor()},this.setDrawingBufferSize=function(E,D,O){F=E,W=D,K=O,t.width=Math.floor(E*O),t.height=Math.floor(D*O),this.setViewport(0,0,E,D)},this.getCurrentViewport=function(E){return E.copy(T)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,D,O,z){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,D,O,z),ue.viewport(T.copy($).multiplyScalar(K).floor())},this.getScissor=function(E){return E.copy(te)},this.setScissor=function(E,D,O,z){E.isVector4?te.set(E.x,E.y,E.z,E.w):te.set(E,D,O,z),ue.scissor(G.copy(te).multiplyScalar(K).floor())},this.getScissorTest=function(){return ne},this.setScissorTest=function(E){ue.setScissorTest(ne=E)},this.setOpaqueSort=function(E){X=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(Ye.getClearColor())},this.setClearColor=function(){Ye.setClearColor.apply(Ye,arguments)},this.getClearAlpha=function(){return Ye.getClearAlpha()},this.setClearAlpha=function(){Ye.setClearAlpha.apply(Ye,arguments)},this.clear=function(E=!0,D=!0,O=!0){let z=0;if(E){let N=!1;if(b!==null){const le=b.texture.format;N=le===eo||le===Qa||le===Ja}if(N){const le=b.texture.type,ve=le===xn||le===pn||le===sr||le===Dn||le===$a||le===ja,ye=Ye.getClearColor(),Ce=Ye.getClearAlpha(),Be=ye.r,De=ye.g,Ie=ye.b;ve?(m[0]=Be,m[1]=De,m[2]=Ie,m[3]=Ce,I.clearBufferuiv(I.COLOR,0,m)):(_[0]=Be,_[1]=De,_[2]=Ie,_[3]=Ce,I.clearBufferiv(I.COLOR,0,_))}else z|=I.COLOR_BUFFER_BIT}D&&(z|=I.DEPTH_BUFFER_BIT),O&&(z|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ie,!1),t.removeEventListener("webglcontextrestored",C,!1),t.removeEventListener("webglcontextcreationerror",oe,!1),me.dispose(),we.dispose(),Le.dispose(),v.dispose(),U.dispose(),J.dispose(),Ue.dispose(),Xe.dispose(),fe.dispose(),Ge.dispose(),Ge.removeEventListener("sessionstart",yt),Ge.removeEventListener("sessionend",Je),_e&&(_e.dispose(),_e=null),Tt.stop()};function ie(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function C(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const E=Ze.autoReset,D=ee.enabled,O=ee.autoUpdate,z=ee.needsUpdate,N=ee.type;st(),Ze.autoReset=E,ee.enabled=D,ee.autoUpdate=O,ee.needsUpdate=z,ee.type=N}function oe(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function ce(E){const D=E.target;D.removeEventListener("dispose",ce),Ae(D)}function Ae(E){Ee(E),Le.remove(E)}function Ee(E){const D=Le.get(E).programs;D!==void 0&&(D.forEach(function(O){fe.releaseProgram(O)}),E.isShaderMaterial&&fe.releaseShaderCache(E))}this.renderBufferDirect=function(E,D,O,z,N,le){D===null&&(D=Me);const ve=N.isMesh&&N.matrixWorld.determinant()<0,ye=Lo(E,D,O,z,N);ue.setMaterial(z,ve);let Ce=O.index,Be=1;if(z.wireframe===!0){if(Ce=q.getWireframeAttribute(O),Ce===void 0)return;Be=2}const De=O.drawRange,Ie=O.attributes.position;let ot=De.start*Be,Dt=(De.start+De.count)*Be;le!==null&&(ot=Math.max(ot,le.start*Be),Dt=Math.min(Dt,(le.start+le.count)*Be)),Ce!==null?(ot=Math.max(ot,0),Dt=Math.min(Dt,Ce.count)):Ie!=null&&(ot=Math.max(ot,0),Dt=Math.min(Dt,Ie.count));const _t=Dt-ot;if(_t<0||_t===1/0)return;Ue.setup(N,z,ye,O,Ce);let Jt,nt=Pe;if(Ce!==null&&(Jt=Z.get(Ce),nt=Se,nt.setIndex(Jt)),N.isMesh)z.wireframe===!0?(ue.setLineWidth(z.wireframeLinewidth*Ne()),nt.setMode(I.LINES)):nt.setMode(I.TRIANGLES);else if(N.isLine){let ze=z.linewidth;ze===void 0&&(ze=1),ue.setLineWidth(ze*Ne()),N.isLineSegments?nt.setMode(I.LINES):N.isLineLoop?nt.setMode(I.LINE_LOOP):nt.setMode(I.LINE_STRIP)}else N.isPoints?nt.setMode(I.POINTS):N.isSprite&&nt.setMode(I.TRIANGLES);if(N.isBatchedMesh)nt.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else if(N.isInstancedMesh)nt.renderInstances(ot,_t,N.count);else if(O.isInstancedBufferGeometry){const ze=O._maxInstanceCount!==void 0?O._maxInstanceCount:1/0,hs=Math.min(O.instanceCount,ze);nt.renderInstances(ot,_t,hs)}else nt.render(ot,_t)};function $e(E,D,O){E.transparent===!0&&E.side===Xt&&E.forceSinglePass===!1?(E.side=Lt,E.needsUpdate=!0,Ti(E,D,O),E.side=vn,E.needsUpdate=!0,Ti(E,D,O),E.side=Xt):Ti(E,D,O)}this.compile=function(E,D,O=null){O===null&&(O=E),p=we.get(O),p.init(),S.push(p),O.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),E!==O&&E.traverseVisible(function(N){N.isLight&&N.layers.test(D.layers)&&(p.pushLight(N),N.castShadow&&p.pushShadow(N))}),p.setupLights(x._useLegacyLights);const z=new Set;return E.traverse(function(N){const le=N.material;if(le)if(Array.isArray(le))for(let ve=0;ve<le.length;ve++){const ye=le[ve];$e(ye,O,N),z.add(ye)}else $e(le,O,N),z.add(le)}),S.pop(),p=null,z},this.compileAsync=function(E,D,O=null){const z=this.compile(E,D,O);return new Promise(N=>{function le(){if(z.forEach(function(ve){Le.get(ve).currentProgram.isReady()&&z.delete(ve)}),z.size===0){N(E);return}setTimeout(le,10)}xe.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let je=null;function gt(E){je&&je(E)}function yt(){Tt.stop()}function Je(){Tt.start()}const Tt=new xo;Tt.setAnimationLoop(gt),typeof self<"u"&&Tt.setContext(self),this.setAnimationLoop=function(E){je=E,Ge.setAnimationLoop(E),E===null?Tt.stop():Tt.start()},Ge.addEventListener("sessionstart",yt),Ge.addEventListener("sessionend",Je),this.render=function(E,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),Ge.enabled===!0&&Ge.isPresenting===!0&&(Ge.cameraAutoUpdate===!0&&Ge.updateCamera(D),D=Ge.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,D,b),p=we.get(E,S.length),p.init(),S.push(p),pe.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),V.setFromProjectionMatrix(pe),re=this.localClippingEnabled,j=Oe.init(this.clippingPlanes,re),g=me.get(E,u.length),g.init(),u.push(g),Zt(E,D,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(X,Y),this.info.render.frame++,j===!0&&Oe.beginShadows();const O=p.state.shadowsArray;if(ee.render(O,E,D),j===!0&&Oe.endShadows(),this.info.autoReset===!0&&this.info.reset(),Ye.render(g,E),p.setupLights(x._useLegacyLights),D.isArrayCamera){const z=D.cameras;for(let N=0,le=z.length;N<le;N++){const ve=z[N];ur(g,E,ve,ve.viewport)}}else ur(g,E,D);b!==null&&(w.updateMultisampleRenderTarget(b),w.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(x,E,D),Ue.resetDefaultState(),k=-1,M=null,S.pop(),S.length>0?p=S[S.length-1]:p=null,u.pop(),u.length>0?g=u[u.length-1]:g=null};function Zt(E,D,O,z){if(E.visible===!1)return;if(E.layers.test(D.layers)){if(E.isGroup)O=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(D);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||V.intersectsSprite(E)){z&&be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(pe);const ve=J.update(E),ye=E.material;ye.visible&&g.push(E,ve,ye,O,be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||V.intersectsObject(E))){const ve=J.update(E),ye=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),be.copy(E.boundingSphere.center)):(ve.boundingSphere===null&&ve.computeBoundingSphere(),be.copy(ve.boundingSphere.center)),be.applyMatrix4(E.matrixWorld).applyMatrix4(pe)),Array.isArray(ye)){const Ce=ve.groups;for(let Be=0,De=Ce.length;Be<De;Be++){const Ie=Ce[Be],ot=ye[Ie.materialIndex];ot&&ot.visible&&g.push(E,ve,ot,O,be.z,Ie)}}else ye.visible&&g.push(E,ve,ye,O,be.z,null)}}const le=E.children;for(let ve=0,ye=le.length;ve<ye;ve++)Zt(le[ve],D,O,z)}function ur(E,D,O,z){const N=E.opaque,le=E.transmissive,ve=E.transparent;p.setupLightsView(O),j===!0&&Oe.setGlobalState(x.clippingPlanes,O),le.length>0&&Co(N,le,D,O),z&&ue.viewport(T.copy(z)),N.length>0&&yi(N,D,O),le.length>0&&yi(le,D,O),ve.length>0&&yi(ve,D,O),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Co(E,D,O,z){if((O.isScene===!0?O.overrideMaterial:null)!==null)return;const le=Te.isWebGL2;_e===null&&(_e=new Fn(1,1,{generateMipmaps:!0,type:xe.has("EXT_color_buffer_half_float")?vi:xn,minFilter:xi,samples:le?4:0})),x.getDrawingBufferSize(Re),le?_e.setSize(Re.x,Re.y):_e.setSize(er(Re.x),er(Re.y));const ve=x.getRenderTarget();x.setRenderTarget(_e),x.getClearColor(Q),L=x.getClearAlpha(),L<1&&x.setClearColor(16777215,.5),x.clear();const ye=x.toneMapping;x.toneMapping=_n,yi(E,O,z),w.updateMultisampleRenderTarget(_e),w.updateRenderTargetMipmap(_e);let Ce=!1;for(let Be=0,De=D.length;Be<De;Be++){const Ie=D[Be],ot=Ie.object,Dt=Ie.geometry,_t=Ie.material,Jt=Ie.group;if(_t.side===Xt&&ot.layers.test(z.layers)){const nt=_t.side;_t.side=Lt,_t.needsUpdate=!0,fr(ot,O,z,Dt,_t,Jt),_t.side=nt,_t.needsUpdate=!0,Ce=!0}}Ce===!0&&(w.updateMultisampleRenderTarget(_e),w.updateRenderTargetMipmap(_e)),x.setRenderTarget(ve),x.setClearColor(Q,L),x.toneMapping=ye}function yi(E,D,O){const z=D.isScene===!0?D.overrideMaterial:null;for(let N=0,le=E.length;N<le;N++){const ve=E[N],ye=ve.object,Ce=ve.geometry,Be=z===null?ve.material:z,De=ve.group;ye.layers.test(O.layers)&&fr(ye,D,O,Ce,Be,De)}}function fr(E,D,O,z,N,le){E.onBeforeRender(x,D,O,z,N,le),E.modelViewMatrix.multiplyMatrices(O.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),N.onBeforeRender(x,D,O,z,E,le),N.transparent===!0&&N.side===Xt&&N.forceSinglePass===!1?(N.side=Lt,N.needsUpdate=!0,x.renderBufferDirect(O,D,z,N,E,le),N.side=vn,N.needsUpdate=!0,x.renderBufferDirect(O,D,z,N,E,le),N.side=Xt):x.renderBufferDirect(O,D,z,N,E,le),E.onAfterRender(x,D,O,z,N,le)}function Ti(E,D,O){D.isScene!==!0&&(D=Me);const z=Le.get(E),N=p.state.lights,le=p.state.shadowsArray,ve=N.state.version,ye=fe.getParameters(E,N.state,le,D,O),Ce=fe.getProgramCacheKey(ye);let Be=z.programs;z.environment=E.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(E.isMeshStandardMaterial?U:v).get(E.envMap||z.environment),Be===void 0&&(E.addEventListener("dispose",ce),Be=new Map,z.programs=Be);let De=Be.get(Ce);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===ve)return mr(E,ye),De}else ye.uniforms=fe.getUniforms(E),E.onBuild(O,ye,x),E.onBeforeCompile(ye,x),De=fe.acquireProgram(ye,Ce),Be.set(Ce,De),z.uniforms=ye.uniforms;const Ie=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ie.clippingPlanes=Oe.uniform),mr(E,ye),z.needsLights=Do(E),z.lightsStateVersion=ve,z.needsLights&&(Ie.ambientLightColor.value=N.state.ambient,Ie.lightProbe.value=N.state.probe,Ie.directionalLights.value=N.state.directional,Ie.directionalLightShadows.value=N.state.directionalShadow,Ie.spotLights.value=N.state.spot,Ie.spotLightShadows.value=N.state.spotShadow,Ie.rectAreaLights.value=N.state.rectArea,Ie.ltc_1.value=N.state.rectAreaLTC1,Ie.ltc_2.value=N.state.rectAreaLTC2,Ie.pointLights.value=N.state.point,Ie.pointLightShadows.value=N.state.pointShadow,Ie.hemisphereLights.value=N.state.hemi,Ie.directionalShadowMap.value=N.state.directionalShadowMap,Ie.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Ie.spotShadowMap.value=N.state.spotShadowMap,Ie.spotLightMatrix.value=N.state.spotLightMatrix,Ie.spotLightMap.value=N.state.spotLightMap,Ie.pointShadowMap.value=N.state.pointShadowMap,Ie.pointShadowMatrix.value=N.state.pointShadowMatrix),z.currentProgram=De,z.uniformsList=null,De}function pr(E){if(E.uniformsList===null){const D=E.currentProgram.getUniforms();E.uniformsList=Zi.seqWithValue(D.seq,E.uniforms)}return E.uniformsList}function mr(E,D){const O=Le.get(E);O.outputColorSpace=D.outputColorSpace,O.batching=D.batching,O.instancing=D.instancing,O.instancingColor=D.instancingColor,O.skinning=D.skinning,O.morphTargets=D.morphTargets,O.morphNormals=D.morphNormals,O.morphColors=D.morphColors,O.morphTargetsCount=D.morphTargetsCount,O.numClippingPlanes=D.numClippingPlanes,O.numIntersection=D.numClipIntersection,O.vertexAlphas=D.vertexAlphas,O.vertexTangents=D.vertexTangents,O.toneMapping=D.toneMapping}function Lo(E,D,O,z,N){D.isScene!==!0&&(D=Me),w.resetTextureUnits();const le=D.fog,ve=z.isMeshStandardMaterial?D.environment:null,ye=b===null?x.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:cn,Ce=(z.isMeshStandardMaterial?U:v).get(z.envMap||ve),Be=z.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,De=!!O.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ie=!!O.morphAttributes.position,ot=!!O.morphAttributes.normal,Dt=!!O.morphAttributes.color;let _t=_n;z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(_t=x.toneMapping);const Jt=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,nt=Jt!==void 0?Jt.length:0,ze=Le.get(z),hs=p.state.lights;if(j===!0&&(re===!0||E!==M)){const Nt=E===M&&z.id===k;Oe.setState(z,E,Nt)}let rt=!1;z.version===ze.__version?(ze.needsLights&&ze.lightsStateVersion!==hs.state.version||ze.outputColorSpace!==ye||N.isBatchedMesh&&ze.batching===!1||!N.isBatchedMesh&&ze.batching===!0||N.isInstancedMesh&&ze.instancing===!1||!N.isInstancedMesh&&ze.instancing===!0||N.isSkinnedMesh&&ze.skinning===!1||!N.isSkinnedMesh&&ze.skinning===!0||N.isInstancedMesh&&ze.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&ze.instancingColor===!1&&N.instanceColor!==null||ze.envMap!==Ce||z.fog===!0&&ze.fog!==le||ze.numClippingPlanes!==void 0&&(ze.numClippingPlanes!==Oe.numPlanes||ze.numIntersection!==Oe.numIntersection)||ze.vertexAlphas!==Be||ze.vertexTangents!==De||ze.morphTargets!==Ie||ze.morphNormals!==ot||ze.morphColors!==Dt||ze.toneMapping!==_t||Te.isWebGL2===!0&&ze.morphTargetsCount!==nt)&&(rt=!0):(rt=!0,ze.__version=z.version);let Mn=ze.currentProgram;rt===!0&&(Mn=Ti(z,D,N));let gr=!1,hi=!1,ds=!1;const Mt=Mn.getUniforms(),Sn=ze.uniforms;if(ue.useProgram(Mn.program)&&(gr=!0,hi=!0,ds=!0),z.id!==k&&(k=z.id,hi=!0),gr||M!==E){Mt.setValue(I,"projectionMatrix",E.projectionMatrix),Mt.setValue(I,"viewMatrix",E.matrixWorldInverse);const Nt=Mt.map.cameraPosition;Nt!==void 0&&Nt.setValue(I,be.setFromMatrixPosition(E.matrixWorld)),Te.logarithmicDepthBuffer&&Mt.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Mt.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,hi=!0,ds=!0)}if(N.isSkinnedMesh){Mt.setOptional(I,N,"bindMatrix"),Mt.setOptional(I,N,"bindMatrixInverse");const Nt=N.skeleton;Nt&&(Te.floatVertexTextures?(Nt.boneTexture===null&&Nt.computeBoneTexture(),Mt.setValue(I,"boneTexture",Nt.boneTexture,w)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}N.isBatchedMesh&&(Mt.setOptional(I,N,"batchingTexture"),Mt.setValue(I,"batchingTexture",N._matricesTexture,w));const us=O.morphAttributes;if((us.position!==void 0||us.normal!==void 0||us.color!==void 0&&Te.isWebGL2===!0)&&We.update(N,O,Mn),(hi||ze.receiveShadow!==N.receiveShadow)&&(ze.receiveShadow=N.receiveShadow,Mt.setValue(I,"receiveShadow",N.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Sn.envMap.value=Ce,Sn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),hi&&(Mt.setValue(I,"toneMappingExposure",x.toneMappingExposure),ze.needsLights&&Po(Sn,ds),le&&z.fog===!0&&ae.refreshFogUniforms(Sn,le),ae.refreshMaterialUniforms(Sn,z,K,W,_e),Zi.upload(I,pr(ze),Sn,w)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Zi.upload(I,pr(ze),Sn,w),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Mt.setValue(I,"center",N.center),Mt.setValue(I,"modelViewMatrix",N.modelViewMatrix),Mt.setValue(I,"normalMatrix",N.normalMatrix),Mt.setValue(I,"modelMatrix",N.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Nt=z.uniformsGroups;for(let fs=0,Io=Nt.length;fs<Io;fs++)if(Te.isWebGL2){const _r=Nt[fs];Xe.update(_r,Mn),Xe.bind(_r,Mn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Mn}function Po(E,D){E.ambientLightColor.needsUpdate=D,E.lightProbe.needsUpdate=D,E.directionalLights.needsUpdate=D,E.directionalLightShadows.needsUpdate=D,E.pointLights.needsUpdate=D,E.pointLightShadows.needsUpdate=D,E.spotLights.needsUpdate=D,E.spotLightShadows.needsUpdate=D,E.rectAreaLights.needsUpdate=D,E.hemisphereLights.needsUpdate=D}function Do(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,D,O){Le.get(E.texture).__webglTexture=D,Le.get(E.depthTexture).__webglTexture=O;const z=Le.get(E);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=O===void 0,z.__autoAllocateDepthBuffer||xe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,D){const O=Le.get(E);O.__webglFramebuffer=D,O.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(E,D=0,O=0){b=E,R=D,A=O;let z=!0,N=null,le=!1,ve=!1;if(E){const Ce=Le.get(E);Ce.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(I.FRAMEBUFFER,null),z=!1):Ce.__webglFramebuffer===void 0?w.setupRenderTarget(E):Ce.__hasExternalTextures&&w.rebindTextures(E,Le.get(E.texture).__webglTexture,Le.get(E.depthTexture).__webglTexture);const Be=E.texture;(Be.isData3DTexture||Be.isDataArrayTexture||Be.isCompressedArrayTexture)&&(ve=!0);const De=Le.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[D])?N=De[D][O]:N=De[D],le=!0):Te.isWebGL2&&E.samples>0&&w.useMultisampledRTT(E)===!1?N=Le.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?N=De[O]:N=De,T.copy(E.viewport),G.copy(E.scissor),H=E.scissorTest}else T.copy($).multiplyScalar(K).floor(),G.copy(te).multiplyScalar(K).floor(),H=ne;if(ue.bindFramebuffer(I.FRAMEBUFFER,N)&&Te.drawBuffers&&z&&ue.drawBuffers(E,N),ue.viewport(T),ue.scissor(G),ue.setScissorTest(H),le){const Ce=Le.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+D,Ce.__webglTexture,O)}else if(ve){const Ce=Le.get(E.texture),Be=D||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ce.__webglTexture,O||0,Be)}k=-1},this.readRenderTargetPixels=function(E,D,O,z,N,le,ve){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Le.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ve!==void 0&&(ye=ye[ve]),ye){ue.bindFramebuffer(I.FRAMEBUFFER,ye);try{const Ce=E.texture,Be=Ce.format,De=Ce.type;if(Be!==Yt&&ge.convert(Be)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ie=De===vi&&(xe.has("EXT_color_buffer_half_float")||Te.isWebGL2&&xe.has("EXT_color_buffer_float"));if(De!==xn&&ge.convert(De)!==I.getParameter(I.IMPLEMENTATION_COLOR_READ_TYPE)&&!(De===mn&&(Te.isWebGL2||xe.has("OES_texture_float")||xe.has("WEBGL_color_buffer_float")))&&!Ie){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=E.width-z&&O>=0&&O<=E.height-N&&I.readPixels(D,O,z,N,ge.convert(Be),ge.convert(De),le)}finally{const Ce=b!==null?Le.get(b).__webglFramebuffer:null;ue.bindFramebuffer(I.FRAMEBUFFER,Ce)}}},this.copyFramebufferToTexture=function(E,D,O=0){const z=Math.pow(2,-O),N=Math.floor(D.image.width*z),le=Math.floor(D.image.height*z);w.setTexture2D(D,0),I.copyTexSubImage2D(I.TEXTURE_2D,O,0,0,E.x,E.y,N,le),ue.unbindTexture()},this.copyTextureToTexture=function(E,D,O,z=0){const N=D.image.width,le=D.image.height,ve=ge.convert(O.format),ye=ge.convert(O.type);w.setTexture2D(O,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,O.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,O.unpackAlignment),D.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,z,E.x,E.y,N,le,ve,ye,D.image.data):D.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,z,E.x,E.y,D.mipmaps[0].width,D.mipmaps[0].height,ve,D.mipmaps[0].data):I.texSubImage2D(I.TEXTURE_2D,z,E.x,E.y,ve,ye,D.image),z===0&&O.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),ue.unbindTexture()},this.copyTextureToTexture3D=function(E,D,O,z,N=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const le=E.max.x-E.min.x+1,ve=E.max.y-E.min.y+1,ye=E.max.z-E.min.z+1,Ce=ge.convert(z.format),Be=ge.convert(z.type);let De;if(z.isData3DTexture)w.setTexture3D(z,0),De=I.TEXTURE_3D;else if(z.isDataArrayTexture||z.isCompressedArrayTexture)w.setTexture2DArray(z,0),De=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,z.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,z.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,z.unpackAlignment);const Ie=I.getParameter(I.UNPACK_ROW_LENGTH),ot=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Dt=I.getParameter(I.UNPACK_SKIP_PIXELS),_t=I.getParameter(I.UNPACK_SKIP_ROWS),Jt=I.getParameter(I.UNPACK_SKIP_IMAGES),nt=O.isCompressedTexture?O.mipmaps[N]:O.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,nt.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,nt.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,E.min.x),I.pixelStorei(I.UNPACK_SKIP_ROWS,E.min.y),I.pixelStorei(I.UNPACK_SKIP_IMAGES,E.min.z),O.isDataTexture||O.isData3DTexture?I.texSubImage3D(De,N,D.x,D.y,D.z,le,ve,ye,Ce,Be,nt.data):O.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),I.compressedTexSubImage3D(De,N,D.x,D.y,D.z,le,ve,ye,Ce,nt.data)):I.texSubImage3D(De,N,D.x,D.y,D.z,le,ve,ye,Ce,Be,nt),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ie),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ot),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Dt),I.pixelStorei(I.UNPACK_SKIP_ROWS,_t),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Jt),N===0&&z.generateMipmaps&&I.generateMipmap(De),ue.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),ue.unbindTexture()},this.resetState=function(){R=0,A=0,b=null,ue.reset(),Ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return an}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===rr?"display-p3":"srgb",t.unpackColorSpace=Ke.workingColorSpace===rs?"display-p3":"srgb"}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===vt?Un:no}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===Un?vt:cn}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class Gf extends bo{}Gf.prototype.isWebGL1Renderer=!0;class cr{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new He(e),this.density=t}clone(){return new cr(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class zf extends ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class Ao extends ci{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new He(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ga=new lt,nr=new lo,Yi=new as,Ki=new P;class kf extends ht{constructor(e=new Ft,t=new Ao){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yi.copy(n.boundingSphere),Yi.applyMatrix4(i),Yi.radius+=r,e.ray.intersectsSphere(Yi)===!1)return;Ga.copy(i).invert(),nr.copy(e.ray).applyMatrix4(Ga);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let _=d,g=m;_<g;_++){const p=l.getX(_);Ki.fromBufferAttribute(f,p),za(Ki,p,c,i,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let _=d,g=m;_<g;_++)Ki.fromBufferAttribute(f,_),za(Ki,_,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function za(s,e,t,n,i,r,o){const a=nr.distanceSqToPoint(s);if(a<t){const c=new P;nr.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class $t extends Pt{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pn extends Ft{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new P,h=new Ve;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,d=3;f<=t;f++,d+=3){const m=n+f/t*i;l.x=e*Math.cos(m),l.y=e*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new ft(o,3)),this.setAttribute("normal",new ft(a,3)),this.setAttribute("uv",new ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pn(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class qe extends Ft{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const h=[],f=[],d=[],m=[];let _=0;const g=[],p=n/2;let u=0;S(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new ft(f,3)),this.setAttribute("normal",new ft(d,3)),this.setAttribute("uv",new ft(m,2));function S(){const y=new P,R=new P;let A=0;const b=(t-e)/n;for(let k=0;k<=r;k++){const M=[],T=k/r,G=T*(t-e)+e;for(let H=0;H<=i;H++){const Q=H/i,L=Q*c+a,F=Math.sin(L),W=Math.cos(L);R.x=G*F,R.y=-T*n+p,R.z=G*W,f.push(R.x,R.y,R.z),y.set(F,b,W).normalize(),d.push(y.x,y.y,y.z),m.push(Q,1-T),M.push(_++)}g.push(M)}for(let k=0;k<i;k++)for(let M=0;M<r;M++){const T=g[M][k],G=g[M+1][k],H=g[M+1][k+1],Q=g[M][k+1];h.push(T,G,Q),h.push(G,H,Q),A+=6}l.addGroup(u,A,0),u+=A}function x(y){const R=_,A=new Ve,b=new P;let k=0;const M=y===!0?e:t,T=y===!0?1:-1;for(let H=1;H<=i;H++)f.push(0,p*T,0),d.push(0,T,0),m.push(.5,.5),_++;const G=_;for(let H=0;H<=i;H++){const L=H/i*c+a,F=Math.cos(L),W=Math.sin(L);b.x=M*W,b.y=p*T,b.z=M*F,f.push(b.x,b.y,b.z),d.push(0,T,0),A.x=F*.5+.5,A.y=W*.5*T+.5,m.push(A.x,A.y),_++}for(let H=0;H<i;H++){const Q=R+H,L=G+H;y===!0?h.push(L,L+1,Q):h.push(L+1,L,Q),k+=3}l.addGroup(u,k,y===!0?1:2),u+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qe(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class is extends qe{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new is(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class lr extends Ft{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};const r=[],o=[];a(i),l(n),h(),this.setAttribute("position",new ft(r,3)),this.setAttribute("normal",new ft(r.slice(),3)),this.setAttribute("uv",new ft(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(S){const x=new P,y=new P,R=new P;for(let A=0;A<t.length;A+=3)m(t[A+0],x),m(t[A+1],y),m(t[A+2],R),c(x,y,R,S)}function c(S,x,y,R){const A=R+1,b=[];for(let k=0;k<=A;k++){b[k]=[];const M=S.clone().lerp(y,k/A),T=x.clone().lerp(y,k/A),G=A-k;for(let H=0;H<=G;H++)H===0&&k===A?b[k][H]=M:b[k][H]=M.clone().lerp(T,H/G)}for(let k=0;k<A;k++)for(let M=0;M<2*(A-k)-1;M++){const T=Math.floor(M/2);M%2===0?(d(b[k][T+1]),d(b[k+1][T]),d(b[k][T])):(d(b[k][T+1]),d(b[k+1][T+1]),d(b[k+1][T]))}}function l(S){const x=new P;for(let y=0;y<r.length;y+=3)x.x=r[y+0],x.y=r[y+1],x.z=r[y+2],x.normalize().multiplyScalar(S),r[y+0]=x.x,r[y+1]=x.y,r[y+2]=x.z}function h(){const S=new P;for(let x=0;x<r.length;x+=3){S.x=r[x+0],S.y=r[x+1],S.z=r[x+2];const y=p(S)/2/Math.PI+.5,R=u(S)/Math.PI+.5;o.push(y,1-R)}_(),f()}function f(){for(let S=0;S<o.length;S+=6){const x=o[S+0],y=o[S+2],R=o[S+4],A=Math.max(x,y,R),b=Math.min(x,y,R);A>.9&&b<.1&&(x<.2&&(o[S+0]+=1),y<.2&&(o[S+2]+=1),R<.2&&(o[S+4]+=1))}}function d(S){r.push(S.x,S.y,S.z)}function m(S,x){const y=S*3;x.x=e[y+0],x.y=e[y+1],x.z=e[y+2]}function _(){const S=new P,x=new P,y=new P,R=new P,A=new Ve,b=new Ve,k=new Ve;for(let M=0,T=0;M<r.length;M+=9,T+=6){S.set(r[M+0],r[M+1],r[M+2]),x.set(r[M+3],r[M+4],r[M+5]),y.set(r[M+6],r[M+7],r[M+8]),A.set(o[T+0],o[T+1]),b.set(o[T+2],o[T+3]),k.set(o[T+4],o[T+5]),R.copy(S).add(x).add(y).divideScalar(3);const G=p(R);g(A,T+0,S,G),g(b,T+2,x,G),g(k,T+4,y,G)}}function g(S,x,y,R){R<0&&S.x===1&&(o[x]=S.x-1),y.x===0&&y.z===0&&(o[x]=R/2/Math.PI+.5)}function p(S){return Math.atan2(S.z,-S.x)}function u(S){return Math.atan2(-S.y,Math.sqrt(S.x*S.x+S.z*S.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lr(e.vertices,e.indices,e.radius,e.details)}}class hr extends lr{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,i=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,o,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new hr(e.radius,e.detail)}}class on extends Ft{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const h=[],f=new P,d=new P,m=[],_=[],g=[],p=[];for(let u=0;u<=n;u++){const S=[],x=u/n;let y=0;u===0&&o===0?y=.5/t:u===n&&c===Math.PI&&(y=-.5/t);for(let R=0;R<=t;R++){const A=R/t;f.x=-e*Math.cos(i+A*r)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(i+A*r)*Math.sin(o+x*a),_.push(f.x,f.y,f.z),d.copy(f).normalize(),g.push(d.x,d.y,d.z),p.push(A+y,1-x),S.push(l++)}h.push(S)}for(let u=0;u<n;u++)for(let S=0;S<t;S++){const x=h[u][S+1],y=h[u][S],R=h[u+1][S],A=h[u+1][S+1];(u!==0||o>0)&&m.push(x,y,A),(u!==n-1||c<Math.PI)&&m.push(y,R,A)}this.setIndex(m),this.setAttribute("position",new ft(_,3)),this.setAttribute("normal",new ft(g,3)),this.setAttribute("uv",new ft(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new on(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class he extends ci{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new He(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new He(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=io,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Hf extends he{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new He(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new He(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new He(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class ls extends ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new He(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Vf extends ls{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.groundColor=new He(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Xs=new lt,ka=new P,Ha=new P;class dr{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new lt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ar,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ka.setFromMatrixPosition(e.matrixWorld),t.position.copy(ka),Ha.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ha),t.updateMatrixWorld(),Xs.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xs),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Xs)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Wf extends dr{constructor(){super(new Ct(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ts*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Xf extends ls{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Wf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Va=new lt,gi=new P,qs=new P;class qf extends dr{constructor(){super(new Ct(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ve(4,2),this._viewportCount=6,this._viewports=[new tt(2,1,1,1),new tt(0,1,1,1),new tt(3,1,1,1),new tt(1,1,1,1),new tt(3,0,1,1),new tt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),gi.setFromMatrixPosition(e.matrixWorld),n.position.copy(gi),qs.copy(n.position),qs.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(qs),n.updateMatrixWorld(),i.makeTranslation(-gi.x,-gi.y,-gi.z),Va.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Va)}}class Ro extends ls{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new qf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Yf extends dr{constructor(){super(new vo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Kf extends ls{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ht.DEFAULT_UP),this.updateMatrix(),this.target=new ht,this.shadow=new Yf}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Zf{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Wa(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Wa();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Wa(){return(typeof performance>"u"?Date:performance).now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ir}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ir);class $f{constructor(){this.cache=new Map}createRoadTexture(){const e="road_main";if(this.cache.has(e))return this.cache.get(e);const t=document.createElement("canvas");t.width=512,t.height=512;const n=t.getContext("2d");n.fillStyle="#22252A",n.fillRect(0,0,512,512);for(let r=0;r<2e3;r++)n.fillStyle=Math.random()>.5?"#1C1E22":"#2A2D33",n.fillRect(Math.random()*512,Math.random()*512,2,2);n.fillStyle="#FFC107",n.fillRect(16,0,8,512),n.fillRect(488,0,8,512),n.fillStyle="#FFFFFF";for(let r=0;r<512;r+=64)n.fillRect(252,r+10,8,44);const i=new $t(t);return i.wrapS=Ln,i.wrapT=Ln,this.cache.set(e,i),i}createZebraTexture(){const e="road_zebra";if(this.cache.has(e))return this.cache.get(e);const t=document.createElement("canvas");t.width=512,t.height=256;const n=t.getContext("2d");n.fillStyle="#22252A",n.fillRect(0,0,512,256),n.fillStyle="#F5F5F5";for(let r=20;r<512;r+=60)n.fillRect(r,20,36,216);const i=new $t(t);return this.cache.set(e,i),i}createKerbTexture(){const e="kerb_indian";if(this.cache.has(e))return this.cache.get(e);const t=document.createElement("canvas");t.width=256,t.height=64;const n=t.getContext("2d"),i=32;for(let o=0;o<256;o+=i)n.fillStyle=o/i%2===0?"#FFB800":"#1A1A1A",n.fillRect(o,0,i,64);const r=new $t(t);return r.wrapS=Ln,r.wrapT=Ln,this.cache.set(e,r),r}createBuildingTexture(e="orange"){const t=`bldg_${e}`;if(this.cache.has(t))return this.cache.get(t);const n=document.createElement("canvas");n.width=512,n.height=512;const i=n.getContext("2d"),r={orange:"#D97736",yellow:"#E5A93B",blue:"#3A7499",teal:"#2F8578",brick:"#A84332",cream:"#DDD2B8"};i.fillStyle=r[e]||"#D97736",i.fillRect(0,0,512,512);for(let a=0;a<4;a++){const c=50+a*115;for(let l=0;l<4;l++){const h=40+l*115;i.fillStyle="#222",i.fillRect(h,c,65,80),i.fillStyle=Math.random()>.4?"#688B9A":"#F5D77F",i.fillRect(h+4,c+4,26,32),i.fillRect(h+35,c+4,26,32),i.fillRect(h+4,c+40,26,34),i.fillRect(h+35,c+40,26,34),a>0&&l%2===0&&(i.fillStyle="#EEE",i.fillRect(h-5,c+60,28,20),i.fillStyle="#333",i.fillRect(h-2,c+65,12,10))}}const o=new $t(n);return this.cache.set(t,o),o}createShopSign(e="chai"){const t=`shop_${e}`;if(this.cache.has(t))return this.cache.get(t);const n=document.createElement("canvas");n.width=512,n.height=128;const i=n.getContext("2d"),r={chai:{bg:"#D32F2F",border:"#FFD700",title:"☕ SHARMA SPECIAL CHAI & SAMOSA",sub:"गरमा गरम कड़क चाय • नाश्ता कॉर्नर",subColor:"#FFF8E1"},sweets:{bg:"#F57C00",border:"#FFFFFF",title:"🍮 AGRAWAL MITHAI BHANDAR",sub:"शुद्ध देशी घी की जलेबी, रसगुल्ला व काजू कतली",subColor:"#FFF"},kirana:{bg:"#1976D2",border:"#FFEB3B",title:"🛒 GUPTA GENERAL & PROVISION STORE",sub:"Daily Fresh Groceries, Spices & FMCG",subColor:"#FFEB3B"},paan:{bg:"#388E3C",border:"#FFD700",title:"🌿 BANARASI PAAN MAHAL",sub:"मीठा पान • गुटखा मुक्त • कोल्ड ड्रिंक्स",subColor:"#FFF"},medical:{bg:"#00897B",border:"#E0F2F1",title:"➕ APOLLO 24x7 MEDICAL & PHARMACY",sub:"All Medicines, First Aid & Doctor Clinic",subColor:"#E0F2F1"},station:{bg:"#B71C1C",border:"#FFF",title:"🚆 CENTRAL RAILWAY TERMINAL",sub:"केंद्रीय रेलवे स्टेशन • PLATFORM 1 - 8",subColor:"#FFEB3B"},metro:{bg:"#0D47A1",border:"#64B5F6",title:"🚇 METRO STATION - LINE 1",sub:"Entry Gate 2 • Smart Card Recharge",subColor:"#FFF"}},o=r[e]||r.chai;i.fillStyle=o.bg,i.fillRect(0,0,512,128),i.strokeStyle=o.border,i.lineWidth=6,i.strokeRect(6,6,500,116),i.fillStyle="#FFFFFF",i.font="bold 24px Arial, sans-serif",i.textAlign="center",i.fillText(o.title,256,52),i.fillStyle=o.subColor,i.font="bold 18px Arial, sans-serif",i.fillText(o.sub,256,96);const a=new $t(n);return this.cache.set(t,a),a}createDecalTexture(e="hornok"){const t=`decal_${e}`;if(this.cache.has(t))return this.cache.get(t);const n=document.createElement("canvas");n.width=256,n.height=64;const i=n.getContext("2d");i.fillStyle="#111",i.fillRect(0,0,256,64),e==="hornok"?(i.fillStyle="#FFEB3B",i.font="800 20px Arial, sans-serif",i.textAlign="left",i.fillText("HORN",16,40),i.fillStyle="#D32F2F",i.beginPath(),i.arc(128,32,22,0,Math.PI*2),i.fill(),i.fillStyle="#FFFFFF",i.font="900 18px Arial, sans-serif",i.textAlign="center",i.fillText("OK",128,39),i.fillStyle="#FFEB3B",i.font="800 20px Arial, sans-serif",i.textAlign="right",i.fillText("PLEASE",240,40)):e==="aashirwad"?(i.fillStyle="#FF5722",i.font="bold 18px Arial, sans-serif",i.textAlign="center",i.fillText("★ माँ का आशीर्वाद ★",128,38)):e==="buramat"?(i.fillStyle="#FFC107",i.font="bold 16px Arial, sans-serif",i.textAlign="center",i.fillText("बुरी नज़र वाले तेरा मुँह काला 🌶️",128,38)):e==="apnatime"?(i.fillStyle="#00E676",i.font="800 20px Arial, sans-serif",i.textAlign="center",i.fillText("APNA TIME AAYEGA 🔥",128,38)):e==="king"&&(i.fillStyle="#FFD700",i.font="800 18px Arial, sans-serif",i.textAlign="center",i.fillText("👑 KING OF ROADS 👑",128,38));const r=new $t(n);return this.cache.set(t,r),r}createNumberPlateTexture(e="DL 1R AW 2026"){const t=`plate_${e}`;if(this.cache.has(t))return this.cache.get(t);const n=document.createElement("canvas");n.width=160,n.height=40;const i=n.getContext("2d");i.fillStyle="#FFD600",i.fillRect(0,0,160,40),i.strokeStyle="#000",i.lineWidth=3,i.strokeRect(2,2,156,36),i.fillStyle="#0D47A1",i.fillRect(4,4,18,32),i.fillStyle="#FFF",i.font="bold 8px Arial",i.textAlign="center",i.fillText("IND",13,24),i.fillStyle="#000",i.font="bold 16px Arial, sans-serif",i.textAlign="center",i.fillText(e,92,26);const r=new $t(n);return this.cache.set(t,r),r}createSignTexture(e="speed40"){const t=`sign_${e}`;if(this.cache.has(t))return this.cache.get(t);const n=document.createElement("canvas");n.width=128,n.height=128;const i=n.getContext("2d");i.clearRect(0,0,128,128),e==="speed40"?(i.fillStyle="#D32F2F",i.beginPath(),i.arc(64,64,60,0,Math.PI*2),i.fill(),i.fillStyle="#FFFFFF",i.beginPath(),i.arc(64,64,46,0,Math.PI*2),i.fill(),i.fillStyle="#111",i.font="900 44px Arial, sans-serif",i.textAlign="center",i.fillText("40",64,79)):e==="stop"?(i.fillStyle="#D32F2F",i.beginPath(),i.arc(64,64,58,0,Math.PI*2),i.fill(),i.fillStyle="#FFF",i.font="900 30px Arial, sans-serif",i.textAlign="center",i.fillText("STOP",64,74)):e==="nohorn"&&(i.fillStyle="#D32F2F",i.beginPath(),i.arc(64,64,60,0,Math.PI*2),i.fill(),i.fillStyle="#FFFFFF",i.beginPath(),i.arc(64,64,46,0,Math.PI*2),i.fill(),i.fillStyle="#222",i.font="36px Arial",i.textAlign="center",i.fillText("🎺",64,76),i.strokeStyle="#D32F2F",i.lineWidth=8,i.beginPath(),i.moveTo(30,30),i.lineTo(98,98),i.stroke());const r=new $t(n);return this.cache.set(t,r),r}createAutoStandSign(){const e="sign_autostand";if(this.cache.has(e))return this.cache.get(e);const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d");n.fillStyle="#FFC107",n.fillRect(0,0,512,128),n.fillStyle="#0D7B3E",n.fillRect(8,8,496,112),n.fillStyle="#FFFFFF",n.font="bold 34px sans-serif",n.textAlign="center",n.fillText("🛺 AUTO RICKSHAW STAND",256,52),n.fillStyle="#FFD54F",n.font="bold 22px sans-serif",n.fillText("RAILWAY STATION • PRE-PAID BOOTH",256,92);const i=new $t(t);return this.cache.set(e,i),i}createPlatformSign(e=1){const t=`sign_plat_${e}`;if(this.cache.has(t))return this.cache.get(t);const n=document.createElement("canvas");n.width=256,n.height=80;const i=n.getContext("2d");i.fillStyle="#0D47A1",i.fillRect(0,0,256,80),i.strokeStyle="#FFFFFF",i.lineWidth=4,i.strokeRect(4,4,248,72),i.fillStyle="#FFFFFF",i.font="bold 28px sans-serif",i.textAlign="center",i.fillText(`PLATFORM ${e}`,128,50);const r=new $t(n);return this.cache.set(t,r),r}}const Bt=new $f;class jf{constructor(e){this.scene=e,this.root=new it,this.chassis=new it,this.root.add(this.chassis),this.frontFork=new it,this.frontWheel=null,this.rearLeftWheel=null,this.rearRightWheel=null,this.headlight=null,this.headlightLight=null,this.taillightLeft=null,this.taillightRight=null,this.underglowLight=null,this.passengerMesh=null,this.mudflapDecalMesh=null,this.bodyMaterial=null,this.roofMaterial=null,this.width=1.35,this.length=2.65,this.height=1.75,this.wheelRadius=.28,this.buildModel(),this.scene.add(this.root)}buildModel(){this.bodyMaterial=new he({color:883518,metalness:.35,roughness:.45}),this.roofMaterial=new he({color:16758784,roughness:.6,metalness:.1});const e=new he({color:1710618,roughness:.7}),t=new he({color:13421772,metalness:.85,roughness:.2}),n=new Hf({color:14743546,transparent:!0,opacity:.45,roughness:.1,transmission:.9,thickness:.05}),i=new de(1.28,.12,2.3),r=new B(i,e);r.position.set(0,.28,0),r.castShadow=!0,r.receiveShadow=!0,this.chassis.add(r);const o=new de(1.26,.7,.08),a=new B(o,this.bodyMaterial);a.position.set(0,.65,-1.05),a.castShadow=!0,this.chassis.add(a);const c=new de(.06,.45,1.1),l=new B(c,this.bodyMaterial);l.position.set(-.62,.52,-.45),l.castShadow=!0,this.chassis.add(l);const h=new B(c,this.bodyMaterial);h.position.set(.62,.52,-.45),h.castShadow=!0,this.chassis.add(h);const f=new de(.85,.6,.65),d=new B(f,this.bodyMaterial);d.position.set(0,.58,.75),d.castShadow=!0,this.chassis.add(d);const m=new qe(.32,.32,.24,16,1,!1,0,Math.PI),_=new B(m,this.bodyMaterial);_.rotation.x=Math.PI/2,_.position.set(0,.36,1.05),this.frontFork.add(_);const g=new qe(.035,.035,.65,8),p=new B(g,t);p.position.set(0,.65,1.05),this.frontFork.add(p);const u=new qe(.025,.025,.7,8),S=new B(u,t);S.rotation.z=Math.PI/2,S.position.set(0,.95,.88),this.frontFork.add(S);const x=new qe(.035,.035,.12,8),y=new B(x,e);y.rotation.z=Math.PI/2,y.position.set(-.32,.95,.88),this.frontFork.add(y);const R=new B(x,e);R.rotation.z=Math.PI/2,R.position.set(.32,.95,.88),this.frontFork.add(R);const A=new qe(.015,.015,.18,6),b=new B(A,t);b.position.set(-.35,1.05,.88),b.rotation.z=-.3,this.frontFork.add(b);const k=new qe(.07,.07,.02,12),M=new B(k,e);M.rotation.x=Math.PI/2,M.position.set(-.39,1.14,.88),this.frontFork.add(M);const T=new B(A,t);T.position.set(.35,1.05,.88),T.rotation.z=.3,this.frontFork.add(T);const G=new B(k,e);G.rotation.x=Math.PI/2,G.position.set(.39,1.14,.88),this.frontFork.add(G);const H=new qe(.12,.12,.08,16),Q=new B(H,t);Q.rotation.x=Math.PI/2,Q.position.set(0,.65,1.1),this.frontFork.add(Q);const L=new Pn(.1,16),F=new Qe({color:16776928});this.headlight=new B(L,F),this.headlight.position.set(0,.65,1.145),this.frontFork.add(this.headlight),this.headlightLight=new Xf(16775620,1.6,35,Math.PI/5,.3,1),this.headlightLight.position.set(0,.65,1.2);const W=new ht;W.position.set(0,0,10),this.chassis.add(W),this.headlightLight.target=W,this.chassis.add(this.headlightLight),this.chassis.add(this.frontFork);const K=new qe(.025,.025,.8,8),X=new B(K,e);X.position.set(-.55,1.2,.45),X.rotation.x=.15,this.chassis.add(X);const Y=new B(K,e);Y.position.set(.55,1.2,.45),Y.rotation.x=.15,this.chassis.add(Y);const $=new ct(1.08,.65),te=new B($,n);te.position.set(0,1.2,.45),te.rotation.x=.15,this.chassis.add(te);const ne=new de(.015,.35,.01),V=new B(ne,e);V.rotation.z=.4,V.position.set(.08,1.15,.48),this.chassis.add(V);const j=new B(K,e);j.position.set(-.6,1.2,-1.05),this.chassis.add(j);const re=new B(K,e);re.position.set(.6,1.2,-1.05),this.chassis.add(re);const _e=new de(1.32,.14,2.05),pe=new B(_e,this.roofMaterial);pe.position.set(0,1.62,-.22),pe.castShadow=!0,this.chassis.add(pe);const Re=new de(1.28,.15,.25),be=new B(Re,this.roofMaterial);be.position.set(0,1.54,.72),be.rotation.x=.45,this.chassis.add(be);const Me=new de(.55,.22,.4),Ne=new he({color:546,roughness:.8}),I=new B(Me,Ne);I.position.set(0,.48,.25),I.castShadow=!0,this.chassis.add(I);const ut=new de(1.18,.22,.55),xe=new B(ut,Ne);xe.position.set(0,.48,-.72),xe.castShadow=!0,this.chassis.add(xe);const Te=new de(1.18,.45,.12),ue=new B(Te,Ne);ue.position.set(0,.82,-.98),this.chassis.add(ue),this.frontWheel=this.createWheel(),this.frontWheel.position.set(0,.28,1.05),this.frontFork.add(this.frontWheel),this.rearLeftWheel=this.createWheel(),this.rearLeftWheel.position.set(-.64,.28,-.75),this.chassis.add(this.rearLeftWheel),this.rearRightWheel=this.createWheel(),this.rearRightWheel.position.set(.64,.28,-.75),this.chassis.add(this.rearRightWheel);const Ze=new ct(.8,.22),Le=new he({map:Bt.createDecalTexture("hornok"),roughness:.8});this.mudflapDecalMesh=new B(Ze,Le),this.mudflapDecalMesh.position.set(0,.28,-1.1),this.mudflapDecalMesh.rotation.y=Math.PI,this.chassis.add(this.mudflapDecalMesh);const w=new ct(.48,.14),v=new Qe({map:Bt.createNumberPlateTexture("DL 1R AW 2026")}),U=new B(w,v);U.position.set(0,.52,-1.1),U.rotation.y=Math.PI,this.chassis.add(U);const Z=new de(.12,.08,.04),q=new Qe({color:10027008});this.taillightLeft=new B(Z,q),this.taillightLeft.position.set(-.5,.65,-1.09),this.chassis.add(this.taillightLeft),this.taillightRight=new B(Z,q.clone()),this.taillightRight.position.set(.5,.65,-1.09),this.chassis.add(this.taillightRight),this.underglowLight=new Ro(58879,0,4),this.underglowLight.position.set(0,.1,0),this.chassis.add(this.underglowLight),this.passengerMesh=this.buildPassengerCharacter(),this.passengerMesh.position.set(.2,.6,-.65),this.passengerMesh.visible=!1,this.chassis.add(this.passengerMesh);const J=new qe(.015,.015,1.15,6),fe=new B(J,t);fe.rotation.z=Math.PI/2,fe.position.set(0,1.74,-.6),this.chassis.add(fe);const ae=new B(J,t);ae.rotation.z=Math.PI/2,ae.position.set(0,1.74,.1),this.chassis.add(ae)}createWheel(){const e=new it,t=new qe(this.wheelRadius,this.wheelRadius,.15,18),n=new he({color:1710618,roughness:.85}),i=new B(t,n);i.rotation.z=Math.PI/2,i.castShadow=!0,e.add(i);const r=new qe(.14,.14,.16,12),o=new he({color:13421772,metalness:.7,roughness:.3}),a=new B(r,o);return a.rotation.z=Math.PI/2,e.add(a),e}buildPassengerCharacter(){const e=new it,t=new de(.35,.45,.25),n=new he({color:15094016,roughness:.7}),i=new B(t,n);i.position.y=.22,e.add(i);const r=new on(.14,12,12),o=new he({color:9262372,roughness:.8}),a=new B(r,o);a.position.y=.58,e.add(a);const c=new on(.15,10,10,0,Math.PI*2,0,Math.PI/2),l=new he({color:1118481,roughness:.9}),h=new B(c,l);return h.position.y=.62,e.add(h),e}applySkin(e){const t={delhi:{body:883518,roof:16758784},mumbai:{body:1842204,roof:16766464},ev:{body:45311,roof:58998},royal:{body:14172949,roof:16766720},bollywood:{body:15277667,roof:16771899},shadow:{body:1119771,roof:2503224}},n=t[e]||t.delhi;this.bodyMaterial&&this.bodyMaterial.color.setHex(n.body),this.roofMaterial&&this.roofMaterial.color.setHex(n.roof)}applyDecal(e){this.mudflapDecalMesh&&(this.mudflapDecalMesh.material.map=Bt.createDecalTexture(e),this.mudflapDecalMesh.material.needsUpdate=!0)}setUnderglow(e,t=58879){this.underglowLight&&(this.underglowLight.color.setHex(t),this.underglowLight.intensity=e?2.5:0)}updateVisuals(e,t,n,i=!1){this.frontFork&&(this.frontFork.rotation.y=e);const o=t*1e3/3600*n/this.wheelRadius;this.frontWheel&&(this.frontWheel.rotation.x+=o),this.rearLeftWheel&&(this.rearLeftWheel.rotation.x+=o),this.rearRightWheel&&(this.rearRightWheel.rotation.x+=o);const a=e*Math.min(1,Math.abs(t)/45)*.18;this.chassis.rotation.z+=(a-this.chassis.rotation.z)*.15;const c=i?.05:0;this.chassis.rotation.x+=(c-this.chassis.rotation.x)*.15;const l=i?16717636:7798784;this.taillightLeft&&this.taillightLeft.material.color.setHex(l),this.taillightRight&&this.taillightRight.material.color.setHex(l)}setPassengerVisible(e){this.passengerMesh&&(this.passengerMesh.visible=e)}}class Jf{constructor(e){this.rickshaw=e,this.position=this.rickshaw.root.position,this.rotation=this.rickshaw.root.rotation,this.heading=0,this.speed=0,this.speedKmh=0,this.steerAngle=0,this.steerInput=0,this.throttleInput=0,this.brakeInput=0,this.isHandbrake=!1,this.isReversing=!1,this.health=100,this.maxHealth=100,this.isDead=!1,this.onGameOver=null,this.nitro=100,this.maxNitro=100,this.isNitroActive=!1,this.specs={maxSpeedKmh:48,accelForce:10.5,brakeForce:28,reverseMaxSpeedKmh:18,steerSpeed:6.5,maxSteerAngle:.62,drag:.985,friction:.96},this.colliderRadius=1.35,this.collisionObstacles=[],this.trafficVehicles=[],this.onCollision=null}applyUpgrades(e){const t=[48,56,65,74,85],n=Math.max(1,Math.min(5,e.speed||1));this.specs.maxSpeedKmh=t[n-1];const i=Math.max(1,Math.min(5,e.accel||1));this.specs.accelForce=8.5+i*1.5;const r=Math.max(1,Math.min(5,e.brakes||1));this.specs.brakeForce=20+r*4}setInputs({steer:e,throttle:t,brake:n,handbrake:i,nitro:r}){this.steerInput=e,this.throttleInput=t,this.brakeInput=n,this.isHandbrake=i,this.isNitroActive=r&&this.nitro>5}update(e){if(this.isDead)return;e=Math.min(.05,Math.max(.001,e));const t=Math.min(1,Math.abs(this.speedKmh)/60),n=this.specs.maxSteerAngle*(1-t*.45),i=-this.steerInput*n;this.steerAngle+=(i-this.steerAngle)*Math.min(1,this.specs.steerSpeed*2.8*e);let r=1;this.isNitroActive&&this.throttleInput>0?(r=1.6,this.nitro=Math.max(0,this.nitro-25*e)):this.nitro=Math.min(this.maxNitro,this.nitro+12*e);const o=this.specs.maxSpeedKmh*(this.isNitroActive?1.3:1)/3.6,a=this.specs.reverseMaxSpeedKmh/3.6;if(this.throttleInput>0)if(this.speed>=-.5){this.isReversing=!1;const p=this.specs.accelForce*r*(1-this.speed/o*.75);this.speed+=p*this.throttleInput*e,this.speed>o&&(this.speed=o)}else this.speed+=this.specs.brakeForce*e;else this.brakeInput>0?this.speed>.8?(this.speed-=this.specs.brakeForce*this.brakeInput*e,this.speed<0&&(this.speed=0)):(this.isReversing=!0,this.speed-=this.specs.accelForce*.6*this.brakeInput*e,this.speed<-a&&(this.speed=-a)):(this.speed*=Math.pow(this.specs.drag,e*60),this.speed*=Math.pow(this.specs.friction,e*60),Math.abs(this.speed)<.08&&(this.speed=0));this.isHandbrake&&(this.speed*=Math.pow(.85,e*60));let l=this.speed/1.85*Math.tan(this.steerAngle);this.isHandbrake&&Math.abs(this.speed)>3&&(l*=1.7),this.heading+=l*e,this.rotation.y=this.heading;const h=Math.sin(this.heading)*this.speed,f=Math.cos(this.heading)*this.speed,d=this.position.x,m=this.position.z;this.position.x+=h*e,this.position.z+=f*e;const _=270;this.position.x>_&&(this.position.x=_,this.speed=-this.speed*.2),this.position.x<-_&&(this.position.x=-_,this.speed=-this.speed*.2),this.position.z>_&&(this.position.z=_,this.speed=-this.speed*.2),this.position.z<-_&&(this.position.z=-_,this.speed=-this.speed*.2),this.speedKmh=this.speed*3.6,this.checkCollisions(d,m),this.health<=0&&!this.isDead&&(this.isDead=!0,this.speed=0,this.speedKmh=0,this.onGameOver&&this.onGameOver());const g=this.brakeInput>0&&this.speed>.5||this.isHandbrake;this.rickshaw.updateVisuals(this.steerAngle,this.speedKmh,e,g)}setObstacles(e){this.collisionObstacles=e}setTrafficVehicles(e){this.trafficVehicles=e}checkCollisions(e,t){const n=this.position.x,i=this.position.z,r=this.colliderRadius;for(let o=0;o<this.collisionObstacles.length;o++){const a=this.collisionObstacles[o];if(n+r>a.minX&&n-r<a.maxX&&i+r>a.minZ&&i-r<a.maxZ){const c=Math.abs(this.speedKmh);if(this.position.x=e,this.position.z=t,this.speed=-this.speed*.35,c>15){const l=Math.min(25,Math.floor(c*.3));this.health=Math.max(0,this.health-l),this.onCollision&&this.onCollision({type:"obstacle",impactSpeed:c,damage:l})}return}}for(let o=0;o<this.trafficVehicles.length;o++){const a=this.trafficVehicles[o],c=n-a.mesh.position.x,l=i-a.mesh.position.z,h=Math.sqrt(c*c+l*l),f=r+a.radius;if(h<f){const d=Math.abs(this.speedKmh-a.speedKmh);if(this.position.x=e,this.position.z=t,this.speed=-this.speed*.4,d>10){const m=Math.min(30,Math.floor(d*.4));this.health=Math.max(0,this.health-m),this.onCollision&&this.onCollision({type:"vehicle",vehicleType:a.type,impactSpeed:d,damage:m})}return}}}reset(e=0,t=0,n=0){this.position.set(e,0,t),this.heading=n,this.rotation.y=n,this.speed=0,this.speedKmh=0,this.steerAngle=0,this.isDead=!1,this.rickshaw.chassis.rotation.set(0,0,0)}repair(){this.health=this.maxHealth,this.isDead=!1}}class Qf{constructor(e){this.scene=e,this.cityGroup=new it,this.collisionBoxes=[],this.trafficLights=[],this.landmarks={},this.streetLights=[],this.roadTexture=Bt.createRoadTexture(),this.zebraTexture=Bt.createZebraTexture(),this.kerbTexture=Bt.createKerbTexture(),this.buildCity(),this.scene.add(this.cityGroup)}buildCity(){this.buildGroundAndRoads(),this.buildMetroViaduct(),this.buildFlyover(),this.buildBuildingsAndShops(),this.buildMarketBazaar(),this.buildLandmarks(),this.buildStreetFurniture(),this.buildTreesAndProps()}buildGroundAndRoads(){const e=new ct(600,600),t=new he({color:2765373,roughness:.95}),n=new B(e,t);n.rotation.x=-Math.PI/2,n.position.y=-.05,n.receiveShadow=!0,this.cityGroup.add(n);const i=new he({map:this.roadTexture,roughness:.8});this.roadTexture.repeat.set(1,24);const r=new he({map:this.zebraTexture,roughness:.8}),o=new he({color:9479342,roughness:.85}),a=new he({map:this.kerbTexture,roughness:.8});this.kerbTexture.repeat.set(24,1);const c=new ct(22,400),l=new B(c,i);l.rotation.x=-Math.PI/2,l.position.set(0,.01,0),l.receiveShadow=!0,this.cityGroup.add(l);const h=new ct(400,20),f=i.clone();f.map=f.map.clone(),f.map.repeat.set(24,1);const d=new B(h,f);d.rotation.x=-Math.PI/2,d.position.set(0,.02,0),d.receiveShadow=!0,this.cityGroup.add(d),[-90,90].forEach(x=>{const y=new ct(300,14),R=new B(y,f);R.rotation.x=-Math.PI/2,R.position.set(0,.015,x),this.cityGroup.add(R)}),[-85,85].forEach(x=>{const y=new ct(14,300),R=new B(y,i);R.rotation.x=-Math.PI/2,R.position.set(x,.015,0),this.cityGroup.add(R)}),[{x:0,z:14,w:22,h:4,rot:0},{x:0,z:-14,w:22,h:4,rot:0},{x:14,z:0,w:4,h:20,rot:0},{x:-14,z:0,w:4,h:20,rot:0}].forEach(x=>{const y=new ct(x.w,x.h),R=new B(y,r);R.rotation.x=-Math.PI/2,R.position.set(x.x,.03,x.z),this.cityGroup.add(R)});const _=new Qe({color:16777215}),g=new Qe({color:16766464});[{x:0,z:-18,w:22,h:.9,mat:_},{x:0,z:-19.2,w:22,h:.45,mat:g},{x:0,z:18,w:22,h:.9,mat:_},{x:0,z:19.2,w:22,h:.45,mat:g},{x:-18,z:0,w:.9,h:20,mat:_},{x:-19.2,z:0,w:.45,h:20,mat:g},{x:18,z:0,w:.9,h:20,mat:_},{x:19.2,z:0,w:.45,h:20,mat:g}].forEach(x=>{const y=new B(new ct(x.w,x.h),x.mat);y.rotation.x=-Math.PI/2,y.position.set(x.x,.035,x.z),this.cityGroup.add(y)});const u=new de(.8,.35,380),S=new B(u,a);S.position.set(0,.18,0),S.castShadow=!0,this.cityGroup.add(S),this.addBoxCollider(-.4,.4,-190,190),[-13,13].forEach(x=>{const y=new de(3.5,.3,380),R=new B(y,o);R.position.set(x,.15,0),this.cityGroup.add(R);const A=new de(.3,.35,380),b=new B(A,a);b.position.set(x>0?x-1.75:x+1.75,.18,0),this.cityGroup.add(b)})}buildMetroViaduct(){const e=new he({color:7901340,roughness:.7}),t=new he({color:3622735,metalness:.6,roughness:.4}),n=new de(4.5,.8,380),i=new B(n,e);i.position.set(7,7.5,0),i.castShadow=!0,this.cityGroup.add(i);const r=new de(.15,.2,380),o=new B(r,t);o.position.set(6.2,8,0),this.cityGroup.add(o);const a=new B(r,t);a.position.set(7.8,8,0),this.cityGroup.add(a);for(let c=-175;c<=175;c+=35){if(Math.abs(c)<20)continue;const l=new qe(.7,.8,7.5,12),h=new B(l,e);h.position.set(7,3.75,c),h.castShadow=!0,this.cityGroup.add(h);const f=new de(4.2,.6,1.8),d=new B(f,e);d.position.set(7,7.2,c),this.cityGroup.add(d),this.addBoxCollider(6.2,7.8,c-.8,c+.8)}}buildFlyover(){const e=new it,t=new he({color:5533306,roughness:.65}),n=new he({color:14737632,roughness:.5}),i=new de(10,.8,140),r=new B(i,t);r.position.set(-85,5.5,0),r.castShadow=!0,e.add(r),[-4.8,4.8].forEach(o=>{const a=new de(.3,.9,140),c=new B(a,n);c.position.set(-85+o,6.2,0),e.add(c)}),[-85].forEach(o=>{const a=new de(10,.6,40),c=new B(a,t);c.position.set(o,2.7,90),c.rotation.x=-.14,e.add(c);const l=new B(a,t);l.position.set(o,2.7,-90),l.rotation.x=.14,e.add(l)}),this.cityGroup.add(e)}buildBuildingsAndShops(){const e=["orange","yellow","blue","teal","brick","cream"];let t=0;const n=["chai","sweets","kirana","paan","medical"];[{x:19,zMin:-150,zMax:150,side:"east"},{x:-19,zMin:-150,zMax:150,side:"west"}].forEach(r=>{for(let o=r.zMin;o<=r.zMax;o+=24){if(Math.abs(o)<22)continue;const a=e[Math.floor(Math.random()*e.length)],c=Bt.createBuildingTexture(a),l=new he({map:c,roughness:.85}),h=18,f=20,d=14+Math.random()*16,m=new de(f,d,h),_=new B(m,l),g=r.side==="east"?r.x+f/2:r.x-f/2;_.position.set(g,d/2,o),_.castShadow=!0,_.receiveShadow=!0,this.cityGroup.add(_),this.addBoxCollider(g-f/2,g+f/2,o-h/2,o+h/2);const p=n[t%n.length];t++;const u=Bt.createShopSign(p),S=new ct(8,2),x=new Qe({map:u}),y=new B(S,x);r.side==="east"?(y.position.set(r.x+.1,3.5,o),y.rotation.y=-Math.PI/2):(y.position.set(r.x-.1,3.5,o),y.rotation.y=Math.PI/2),this.cityGroup.add(y);const R=new de(2,.15,8.5),A=new he({color:t%2===0?13840175:1668818,roughness:.7}),b=new B(R,A);b.position.set(r.side==="east"?r.x-.8:r.x+.8,2.7,o),b.rotation.z=r.side==="east"?.2:-.2,this.cityGroup.add(b)}})}buildMarketBazaar(){const e=new it;for(let t=0;t<6;t++){const n=45+t*8,i=14.5,r=new de(2.5,.9,1.4),o=new he({color:9268835,roughness:.9}),a=new B(r,o);a.position.set(i,.45,n),e.add(a);const c=new qe(.04,.04,2.8,8),l=new B(c,new he({color:819}));l.position.set(i,1.4,n),e.add(l);const h=new is(1.6,.6,10),f=[16761095,58998,16732754,2718207],d=new he({color:f[t%f.length],roughness:.6}),m=new B(h,d);m.position.set(i,2.7,n),e.add(m);const _=new de(.8,.35,.8),g=new he({color:16750592}),p=new B(_,g);p.position.set(i,1.05,n),e.add(p),this.addBoxCollider(i-1.3,i+1.3,n-.8,n+.8)}this.cityGroup.add(e)}buildLandmarks(){const e=new it,t=new he({color:9316383,roughness:.7}),n=new he({color:16645886,roughness:.5}),i=new he({color:2171169,metalness:.7}),r=new de(64,18,16),o=new B(r,t);o.position.set(0,9,-188),e.add(o),[-30,30].forEach(Z=>{const q=new de(14,14,18),J=new B(q,t);J.position.set(Z,7,-186),e.add(J);const fe=new B(new on(2.2,12,12,0,Math.PI*2,0,Math.PI/2),n);fe.position.set(Z,14,-186),e.add(fe)});const a=new de(12,28,12),c=new B(a,t);c.position.set(0,14,-185),e.add(c);const l=new B(new Pn(2.4,24),new Qe({color:16777215}));l.position.set(0,22,-178.9),e.add(l);const h=new B(new de(.3,1.4,.05),new Qe({color:1118481}));h.position.set(0,22.4,-178.85),e.add(h);const f=new B(new de(1.8,.2,.05),new Qe({color:1118481}));f.position.set(.6,22,-178.85),e.add(f);const d=new on(5.4,16,16,0,Math.PI*2,0,Math.PI/2),m=new B(d,n);m.position.set(0,28,-185),e.add(m);const _=new de(22,7,6),g=new B(_,t);g.position.set(0,3.5,-178),e.add(g);const p=Bt.createShopSign("station"),u=new ct(18,4.5),S=new B(u,new Qe({map:p}));S.position.set(0,9.8,-174.8),e.add(S);const x=new de(14,.5,32),y=new he({color:3622735,roughness:.7}),R=new B(x,y);R.position.set(-32,6.5,-178),e.add(R),[-170,-186].forEach(Z=>{const q=new B(new qe(.25,.25,6.5,8),i);q.position.set(-32,3.25,Z),e.add(q)});const A=new B(new ct(4,1.3),new Qe({map:Bt.createPlatformSign(1)}));A.position.set(-25.2,5.2,-175),A.rotation.y=Math.PI/2,e.add(A);const b=new B(new ct(4,1.3),new Qe({map:Bt.createPlatformSign(2)}));b.position.set(-38.8,5.2,-175),b.rotation.y=-Math.PI/2,e.add(b),[-30,-34].forEach(Z=>{[-.7,.7].forEach(q=>{const J=new B(new de(.12,.15,45),new he({color:11583173,metalness:.9}));J.position.set(Z+q,.12,-180),e.add(J)})});const k=new he({color:6111287,roughness:.9});[{x:-6,z:-176},{x:6,z:-176}].forEach(Z=>{const q=new B(new de(2.5,.85,.7),k);q.position.set(Z.x,.42,Z.z),e.add(q)});const M=new he({color:1402304}),T=new B(new de(.8,.6,.5),M);T.position.set(4,.3,-176),e.add(T);const G=new ct(12,22),H=new he({color:1783851,roughness:.8}),Q=new B(G,H);Q.rotation.x=-Math.PI/2,Q.position.set(10.5,.035,-164),e.add(Q);const L=new Qe({color:16766464});for(let Z=-172;Z<=-156;Z+=5){const q=new B(new ct(8,.25),L);q.rotation.x=-Math.PI/2,q.position.set(10.5,.04,Z),e.add(q)}const F=new it,W=new B(new qe(.15,.15,5.2,8),i);W.position.set(4.5,2.6,-156);const K=new B(new qe(.15,.15,5.2,8),i);K.position.set(16.5,2.6,-156),F.add(W),F.add(K);const X=new B(new ct(12,3),new Qe({map:Bt.createAutoStandSign()}));X.position.set(10.5,4.4,-156),F.add(X),e.add(F),this.addBoxCollider(-38,38,-196,-177),this.cityGroup.add(e);const Y=new it,$=new he({color:15527921,roughness:.6}),te=new de(32,22,26),ne=new B(te,$);ne.position.set(-60,11,70),Y.add(ne);const V=new B(new de(6,1.8,.2),new Qe({color:13840175}));V.position.set(-60,18,56.8),Y.add(V);const j=new B(new de(1.8,6,.2),new Qe({color:13840175}));j.position.set(-60,18,56.8),Y.add(j),this.addBoxCollider(-76,-44,57,83),this.cityGroup.add(Y);const re=new it,_e=new qe(5.2,5.2,.45,24),pe=new B(_e,new he({color:13621468}));pe.position.set(0,.22,0),re.add(pe);const Re=new qe(4.8,4.8,.5,24),be=new he({color:3706428,roughness:.9}),Me=new B(Re,be);Me.position.set(0,.25,0),re.add(Me);const Ne=new de(2,2.5,2),I=new B(Ne,new he({color:14737632}));I.position.set(0,1.5,0),re.add(I);const ut=new qe(.35,.45,2.8,12),xe=new he({color:12951641,metalness:.7,roughness:.3}),Te=new B(ut,xe);Te.position.set(0,4.1,0),re.add(Te),this.addBoxCollider(-3.5,3.5,-3.5,3.5),this.cityGroup.add(re);const ue=new it,Ze=new he({color:3622735}),Le=new B(new de(24,8,20),Ze);Le.position.set(65,4,-60),ue.add(Le);const w=new ct(12,2.5),v=new Qe({color:16758784}),U=new B(w,v);U.position.set(65,6,-49.8),ue.add(U),this.addBoxCollider(53,77,-70,-50),this.cityGroup.add(ue),this.landmarks={railway:{name:"Central Railway Station Auto Stand",x:10,z:-164,color:16717636},chowk:{name:"Gandhi Chowk Roundabout",x:0,z:16,color:16761095},bazaar:{name:"Bapu Bazaar Market",x:16,z:60,color:16739584},hospital:{name:"Apollo 24/7 Hospital",x:-45,z:65,color:58998},metro:{name:"Metro Terminal Gate 2",x:14,z:-85,color:2718207},chai:{name:"Sharma Chai & Adda",x:-14,z:-40,color:16748800},workshop:{name:"Auto Wala Garage",x:50,z:-55,color:58879},flyover:{name:"Elevated Flyover Ramp",x:-85,z:0,color:11141375}}}buildStreetFurniture(){const e=new he({color:2503224,metalness:.6});for(let n=-170;n<=170;n+=40)Math.abs(n)<15||[-12,12].forEach(i=>{const r=new it,o=new B(new qe(.12,.15,6.5,8),e);o.position.set(i,3.25,n),r.add(o);const a=new B(new de(i>0?-2.2:2.2,.1,.1),e);a.position.set(i>0?i-1:i+1,6.4,n),r.add(a);const c=new B(new de(.8,.2,.4),new Qe({color:16775620}));c.position.set(i>0?i-2:i+2,6.3,n),r.add(c);const l=new Ro(16766287,.8,22);l.position.set(i>0?i-2:i+2,5.8,n),r.add(l),this.streetLights.push(l),this.cityGroup.add(r),this.addBoxCollider(i-.4,i+.4,n-.4,n+.4)});[{x:-11,z:-16,rot:0},{x:11,z:16,rot:Math.PI},{x:-16,z:11,rot:Math.PI/2},{x:16,z:-11,rot:-Math.PI/2}].forEach((n,i)=>{const r=new it;r.position.set(n.x,0,n.z),r.rotation.y=n.rot;const o=new B(new qe(.12,.12,5.5,8),e);o.position.y=2.75,r.add(o);const a=new de(.85,2.2,.45),c=new B(a,new he({color:1118481,roughness:.8}));c.position.set(0,4.8,0),r.add(c);const l=new de(.95,2.3,.05),h=new B(l,new he({color:16761095}));h.position.set(0,4.8,-.05),r.add(h);const f=new he({color:16717636,emissive:16717636,emissiveIntensity:2.2,roughness:.3}),d=new B(new Pn(.24,16),f);d.position.set(0,5.4,.23),r.add(d);const m=new he({color:3352064,emissive:0,emissiveIntensity:0,roughness:.3}),_=new B(new Pn(.24,16),m);_.position.set(0,4.8,.23),r.add(_);const g=new he({color:13073,emissive:0,emissiveIntensity:0,roughness:.3}),p=new B(new Pn(.24,16),g);p.position.set(0,4.2,.23),r.add(p),this.cityGroup.add(r),this.trafficLights.push({id:i,x:n.x,z:n.z,redLens:d,yelLens:_,grnLens:p,state:"green"})})}buildTreesAndProps(){const e=new he({color:6111287,roughness:.9}),t=new he({color:3046706,roughness:.8}),n=new he({color:14172949,roughness:.8});for(let i=-140;i<=140;i+=30)[-15,15].forEach((r,o)=>{const a=(i+r)%2===0,c=new it,l=new B(new qe(.2,.35,3.5,8),e);l.position.set(r,1.75,i),l.castShadow=!0,c.add(l);const h=new hr(2.2,1),f=new B(h,a?n:t);f.position.set(r,4.4,i),f.castShadow=!0,c.add(f),this.cityGroup.add(c),this.addBoxCollider(r-.4,r+.4,i-.4,i+.4)});this.buildDesiCow(1.8,12)}buildDesiCow(e,t){const n=new it;n.position.set(e,0,t),n.rotation.y=-.4;const i=new he({color:15591414,roughness:.8}),r=new he({color:2171169}),o=new B(new de(.7,.55,1.3),i);o.position.set(0,.35,0),n.add(o);const a=new B(new on(.22,8,8),i);a.position.set(0,.68,.25),n.add(a);const c=new B(new de(.35,.35,.5),i);c.position.set(0,.6,.7),n.add(c),[-.15,.15].forEach(l=>{const h=new B(new is(.05,.3,6),r);h.position.set(l,.85,.65),h.rotation.x=-.3,n.add(h)}),this.cityGroup.add(n),this.addBoxCollider(e-.6,e+.6,t-.8,t+.8)}addBoxCollider(e,t,n,i){this.collisionBoxes.push({minX:e,maxX:t,minZ:n,maxZ:i})}setNightMode(e){this.streetLights.forEach(t=>{t.intensity=e?1.4:0})}}class ep{constructor(e,t){this.scene=e,this.city=t,this.vehicles=[],this.trafficDensity="medium",this.routes=[{id:"mg_south",startX:4.5,startZ:-175,endZ:175,dx:0,dz:1,rotY:0},{id:"mg_north",startX:-4.5,startZ:175,endZ:-175,dx:0,dz:-1,rotY:Math.PI},{id:"exp_east",startX:-175,startZ:4.5,endX:175,dx:1,dz:0,rotY:Math.PI/2},{id:"exp_west",startX:175,startZ:-4.5,endX:-175,dx:-1,dz:0,rotY:-Math.PI/2}],this.spawnTraffic()}setDensity(e){this.trafficDensity=e,this.clearTraffic(),this.spawnTraffic()}clearTraffic(){this.vehicles.forEach(e=>{this.scene.remove(e.mesh)}),this.vehicles=[]}spawnTraffic(){const t={low:8,medium:16,high:26}[this.trafficDensity]||16,n=["bus","sedan","suv","truck","bike","auto"];for(let i=0;i<t;i++){const r=n[i%n.length],o=this.routes[i%this.routes.length],a=i/t+Math.random()*.05,c=this.createVehicleMesh(r);if(c.route=o,c.type=r,c.speed=7+Math.random()*5,c.baseSpeed=c.speed,c.speedKmh=c.speed*3.6,c.blockedTimer=0,o.dz!==0){const l=o.endZ-o.startZ,h=o.startZ+l*a;c.mesh.position.set(o.startX,0,h),c.mesh.rotation.y=o.rotY}else{const l=o.endX-o.startX,h=o.startX+l*a;c.mesh.position.set(h,0,o.startZ),c.mesh.rotation.y=o.rotY}this.scene.add(c.mesh),this.vehicles.push(c)}}createVehicleMesh(e){const t=new it;let n=1.6;if(e==="bus"){n=3.6;const a=Math.random()>.5?12986408:3046706,c=new he({color:a,roughness:.6}),l=new Qe({color:2503224}),h=new de(2.4,2.7,7.8),f=new B(h,c);f.position.y=1.7,f.castShadow=!0,t.add(f);const d=new de(2.42,.9,6.8),m=new B(d,l);m.position.y=2.1,t.add(m);const _=new Qe({color:16776928});[-.9,.9].forEach(g=>{const p=new B(new de(.2,.2,.1),_);p.position.set(g,.8,3.92),t.add(p)})}else if(e==="truck"){n=2.8;const o=new he({color:16088855,roughness:.7}),a=new he({color:1402304,roughness:.8}),c=new B(new de(2.1,2.2,2),o);c.position.set(0,1.45,1.8),c.castShadow=!0,t.add(c);const l=new B(new de(2.2,1.6,3.8),a);l.position.set(0,1.3,-1.1),l.castShadow=!0,t.add(l)}else if(e==="suv"){n=2;const o=new he({color:1119771,metalness:.5,roughness:.4}),a=new B(new de(1.85,1.4,4.2),o);a.position.y=1,a.castShadow=!0,t.add(a)}else if(e==="sedan"){n=1.8;const o=new he({color:15658734,metalness:.4,roughness:.5}),a=new B(new de(1.75,1.2,3.8),o);a.position.y=.85,a.castShadow=!0,t.add(a)}else if(e==="auto"){n=1.35;const o=new he({color:883518}),a=new he({color:16758784}),c=new B(new de(1.3,.6,2.2),o);c.position.y=.55,t.add(c);const l=new B(new de(1.25,.12,1.8),a);l.position.y=1.45,t.add(l)}else if(e==="bike"){n=1.1;const o=new he({color:12000284}),a=new B(new de(.5,.7,1.8),o);a.position.y=.55,t.add(a);const c=new he({color:3622735}),l=new B(new de(.4,.6,.3),c);l.position.set(0,1.15,-.1),t.add(l);const h=new B(new on(.18,10,10),new Qe({color:16771899}));h.position.set(0,1.6,-.1),t.add(h)}const i=new he({color:1710618,roughness:.9}),r=new qe(.32,.32,.22,12);return[-.8,.8].forEach(o=>{[-1.2,1.2].forEach(a=>{const c=new B(r,i);c.rotation.z=Math.PI/2,c.position.set(o,.32,a),t.add(c)})}),{mesh:t,radius:n}}update(e,t,n,i){this.vehicles.forEach(r=>{const o=r.mesh.position,a=r.route;let c=!1;a.dz!==0?i("ns")&&(a.dz>0&&o.z>-26&&o.z<-18&&(c=!0),a.dz<0&&o.z<26&&o.z>18&&(c=!0)):i("ew")&&(a.dx>0&&o.x>-26&&o.x<-18&&(c=!0),a.dx<0&&o.x<26&&o.x>18&&(c=!0));let l=1/0;for(let _=0;_<this.vehicles.length;_++){const g=this.vehicles[_];if(g===r||g.route.id!==a.id)continue;let p=1/0;a.dz>0&&g.mesh.position.z>o.z?p=g.mesh.position.z-o.z:a.dz<0&&g.mesh.position.z<o.z?p=o.z-g.mesh.position.z:a.dx>0&&g.mesh.position.x>o.x?p=g.mesh.position.x-o.x:a.dx<0&&g.mesh.position.x<o.x&&(p=o.x-g.mesh.position.x);const u=r.type==="bus"||r.type==="truck"?14:9.5;p>0&&p<u&&p<l&&(l=p,c=!0)}const h=t.x-o.x,f=t.z-o.z;let d=!1;a.dz>0&&f>0&&f<10&&Math.abs(h)<2.4&&(d=!0),a.dz<0&&f<0&&f>-10&&Math.abs(h)<2.4&&(d=!0),a.dx>0&&h>0&&h<10&&Math.abs(f)<2.4&&(d=!0),a.dx<0&&h<0&&h>-10&&Math.abs(f)<2.4&&(d=!0),d?(c=!0,r.blockedTimer+=e):r.blockedTimer=0,c?r.speed=Math.max(0,r.speed-16*e):r.speed=Math.min(r.baseSpeed,r.speed+8*e),o.x+=a.dx*r.speed*e,o.z+=a.dz*r.speed*e,r.speedKmh=r.speed*3.6;let m=!1;if(a.dz>0&&o.z>a.endZ&&(m=!0),a.dz<0&&o.z<a.endZ&&(m=!0),a.dx>0&&o.x>a.endX&&(m=!0),a.dx<0&&o.x<a.endX&&(m=!0),m){let _=1/0;for(let p=0;p<this.vehicles.length;p++){const u=this.vehicles[p];if(u===r||u.route.id!==a.id)continue;let S=0;a.dz!==0?S=Math.abs(u.mesh.position.z-a.startZ):S=Math.abs(u.mesh.position.x-a.startX),S<_&&(_=S)}const g=_<18?20-_:0;a.dz>0?o.z=a.startZ-g:a.dz<0?o.z=a.startZ+g:a.dx>0?o.x=a.startX-g:a.dx<0&&(o.x=a.startX+g),r.speed=r.baseSpeed}})}getTrafficVehicles(){return this.vehicles}}class tp{constructor(){this.ctx=null,this.masterGain=null,this.isMuted=!1,this.volume=.8,this.engineRunning=!1,this.engineOsc1=null,this.engineOsc2=null,this.engineFilter=null,this.engineGain=null,this.idleNoise=null,this.idleGain=null,this.hornActive=!1,this.hornOscs=[],this.hornGain=null,this.hornSafetyTimer=null}init(){if(this.ctx)return;const e=window.AudioContext||window.webkitAudioContext;e&&(this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(this.volume,this.ctx.currentTime),this.masterGain.connect(this.ctx.destination))}resume(){this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume()}setVolume(e){this.volume=Math.max(0,Math.min(1,e)),this.masterGain&&this.ctx&&this.masterGain.gain.setValueAtTime(this.volume,this.ctx.currentTime)}startEngine(){this.init(),!(!this.ctx||this.engineRunning)&&(this.resume(),this.engineOsc1=this.ctx.createOscillator(),this.engineOsc1.type="sawtooth",this.engineOsc1.frequency.setValueAtTime(32,this.ctx.currentTime),this.engineOsc2=this.ctx.createOscillator(),this.engineOsc2.type="square",this.engineOsc2.frequency.setValueAtTime(64,this.ctx.currentTime),this.engineFilter=this.ctx.createBiquadFilter(),this.engineFilter.type="lowpass",this.engineFilter.frequency.setValueAtTime(180,this.ctx.currentTime),this.engineFilter.Q.setValueAtTime(2.5,this.ctx.currentTime),this.engineGain=this.ctx.createGain(),this.engineGain.gain.setValueAtTime(.12,this.ctx.currentTime),this.engineOsc1.connect(this.engineFilter),this.engineOsc2.connect(this.engineFilter),this.engineFilter.connect(this.engineGain),this.engineGain.connect(this.masterGain),this.engineOsc1.start(),this.engineOsc2.start(),this.engineRunning=!0)}stopEngine(){if(this.engineRunning){try{this.engineOsc1&&(this.engineOsc1.stop(),this.engineOsc1.disconnect()),this.engineOsc2&&(this.engineOsc2.stop(),this.engineOsc2.disconnect())}catch{}this.engineRunning=!1}}updateEngine(e,t=0,n=!1){if(!this.engineRunning||!this.ctx)return;const i=this.ctx.currentTime,r=Math.abs(e),o=28+r*1.35+t*25,a=Math.min(180,Math.max(26,o));this.engineOsc1.frequency.setTargetAtTime(a,i,.08),this.engineOsc2.frequency.setTargetAtTime(a*1.85,i,.08);const c=160+r*8+t*150;this.engineFilter.frequency.setTargetAtTime(Math.min(950,c),i,.08);const l=.1+t*.08+r/80*.05;this.engineGain.gain.setTargetAtTime(Math.min(.25,l),i,.08)}playHorn(e="peepoo"){if(this.init(),!this.ctx||this.hornActive)return;this.resume(),this.hornActive=!0,this.hornSafetyTimer&&clearTimeout(this.hornSafetyTimer),this.hornSafetyTimer=setTimeout(()=>{this.stopHorn()},3500);const t=this.ctx.currentTime,n=this.ctx.createGain();if(n.gain.setValueAtTime(.001,t),n.gain.linearRampToValueAtTime(.28,t+.02),n.connect(this.masterGain),this.hornGain=n,this.hornOscs=[],e==="peepoo"){const i=this.ctx.createOscillator(),r=this.ctx.createOscillator();i.type="sawtooth",r.type="square",i.frequency.setValueAtTime(460,t),r.frequency.setValueAtTime(580,t),i.connect(n),r.connect(n),i.start(t),r.start(t),this.hornOscs=[i,r]}else if(e==="pressure")[380,480,620].forEach(r=>{const o=this.ctx.createOscillator();o.type="sawtooth",o.frequency.setValueAtTime(r,t),o.frequency.setTargetAtTime(r+20,t+.1,.05),o.connect(n),o.start(t),this.hornOscs.push(o)});else{const i=this.ctx.createOscillator();i.type="triangle",i.frequency.setValueAtTime(520,t),i.connect(n),i.start(t),this.hornOscs=[i]}}stopHorn(){if(this.hornSafetyTimer&&(clearTimeout(this.hornSafetyTimer),this.hornSafetyTimer=null),!this.hornActive||(this.hornActive=!1,!this.ctx))return;const e=this.ctx.currentTime;if(this.hornGain)try{this.hornGain.gain.setValueAtTime(this.hornGain.gain.value,e),this.hornGain.gain.linearRampToValueAtTime(1e-4,e+.04)}catch{}const t=this.hornOscs,n=this.hornGain;this.hornOscs=[],this.hornGain=null,setTimeout(()=>{if(t.forEach(i=>{try{i.stop(),i.disconnect()}catch{}}),n)try{n.disconnect()}catch{}},60)}forceSilence(){this.stopHorn(),this.stopEngine()}playCoinJingle(){if(this.init(),!this.ctx)return;this.resume();const e=this.ctx.currentTime;[523.25,659.25,783.99,1046.5].forEach((n,i)=>{const r=this.ctx.createOscillator(),o=this.ctx.createGain();r.type="sine",r.frequency.setValueAtTime(n,e+i*.07),o.gain.setValueAtTime(.2,e+i*.07),o.gain.exponentialRampToValueAtTime(.001,e+i*.07+.3),r.connect(o),o.connect(this.masterGain),r.start(e+i*.07),r.stop(e+i*.07+.35)})}playChallanSiren(){if(this.init(),!this.ctx)return;this.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sawtooth",t.frequency.setValueAtTime(800,e),t.frequency.linearRampToValueAtTime(1400,e+.15),t.frequency.linearRampToValueAtTime(800,e+.3),t.frequency.linearRampToValueAtTime(1400,e+.45),t.frequency.linearRampToValueAtTime(800,e+.6),n.gain.setValueAtTime(.22,e),n.gain.exponentialRampToValueAtTime(.001,e+.65),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.7)}playCrashBump(){if(this.init(),!this.ctx)return;this.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="triangle",t.frequency.setValueAtTime(120,e),t.frequency.exponentialRampToValueAtTime(20,e+.25),n.gain.setValueAtTime(.35,e),n.gain.exponentialRampToValueAtTime(.001,e+.25),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.3)}playNitroWoosh(){if(this.init(),!this.ctx)return;this.resume();const e=this.ctx.currentTime,t=this.ctx.createOscillator(),n=this.ctx.createGain();t.type="sine",t.frequency.setValueAtTime(200,e),t.frequency.linearRampToValueAtTime(700,e+.4),n.gain.setValueAtTime(.18,e),n.gain.exponentialRampToValueAtTime(.001,e+.45),t.connect(n),n.connect(this.masterGain),t.start(e),t.stop(e+.5)}}const at=new tp;class np{constructor(e,t){this.city=e,this.onChallanIssued=t,this.signalState="ns_green",this.timer=0,this.durations={ns_green:14,ns_yellow:3,ew_green:14,ew_yellow:3},this.redLightCooldown=0,this.speedingCooldown=0}update(e,t,n){this.timer+=e,this.redLightCooldown=Math.max(0,this.redLightCooldown-e),this.speedingCooldown=Math.max(0,this.speedingCooldown-e);const i=this.durations[this.signalState];if(this.timer>=i){switch(this.timer=0,this.signalState){case"ns_green":this.signalState="ns_yellow";break;case"ns_yellow":this.signalState="ew_green";break;case"ew_green":this.signalState="ew_yellow";break;case"ew_yellow":this.signalState="ns_green";break}this.updateVisualSignals()}this.checkRedLightViolation(t,n),this.checkSpeedingViolation(t,n)}updateVisualSignals(){const e=this.signalState==="ns_green",t=this.signalState==="ns_yellow",n=this.signalState==="ew_green",i=this.signalState==="ew_yellow";this.city.trafficLights.forEach(r=>{const o=r.id===0||r.id===1,a=o?!e&&!t:!n&&!i,c=o?t:i,l=o?e:n;r.redLens&&(r.redLens.material.color.setHex(a?16717636:2228224),r.redLens.material.emissive&&(r.redLens.material.emissive.setHex(a?16717636:0),r.redLens.material.emissiveIntensity=a?2.5:0)),r.yelLens&&(r.yelLens.material.color.setHex(c?16771584:2234368),r.yelLens.material.emissive&&(r.yelLens.material.emissive.setHex(c?16771584:0),r.yelLens.material.emissiveIntensity=c?2.5:0)),r.grnLens&&(r.grnLens.material.color.setHex(l?58998:8712),r.grnLens.material.emissive&&(r.grnLens.material.emissive.setHex(l?58998:0),r.grnLens.material.emissiveIntensity=l?2.5:0))})}getSignalStatus(e,t){const n=Math.abs(e.z)>Math.abs(e.x);let i=999,r=!1;n?Math.abs(e.x)<14&&Math.abs(e.z)<75&&(r=!0,e.z<-14?i=-18-e.z:e.z>14?i=e.z-18:i=0):Math.abs(e.z)<14&&Math.abs(e.x)<75&&(r=!0,e.x<-14?i=-18-e.x:e.x>14?i=e.x-18:i=0);let o="GREEN",a="INTERSECTION CLEAR - GO",c="sig-green";n?this.signalState==="ns_yellow"?(o="YELLOW",a="SLOW DOWN - PREPARE TO STOP",c="sig-yellow"):(this.signalState==="ew_green"||this.signalState==="ew_yellow")&&(o="RED",a="RED SIGNAL - STOP BEHIND LINE",c="sig-red"):this.signalState==="ew_yellow"?(o="YELLOW",a="SLOW DOWN - PREPARE TO STOP",c="sig-yellow"):(this.signalState==="ns_green"||this.signalState==="ns_yellow")&&(o="RED",a="RED SIGNAL - STOP BEHIND LINE",c="sig-red");const l=Math.max(0,Math.round(i)),h=r&&o!=="GREEN"&&l<45&&l>3&&t>16,f=e.x>8&&e.x<32&&e.z>30&&e.z<95,d=e.x>-70&&e.x<-30&&e.z>45&&e.z<95,m=f||d?40:60,_=t>m+3;return{approachingIntersection:r,color:o,instruction:a,distMeters:l,needBrakeHint:h,speedLimit:m,isSpeeding:_,badgeClass:c}}isRed(e){return e==="ns"?this.signalState==="ew_green"||this.signalState==="ew_yellow":this.signalState==="ns_green"||this.signalState==="ns_yellow"}checkRedLightViolation(e,t){if(this.redLightCooldown>0||Math.abs(t)<8||!(Math.abs(e.x)<11&&Math.abs(e.z)<11))return;(Math.abs(e.z)>Math.abs(e.x)?this.isRed("ns"):this.isRed("ew"))&&(this.redLightCooldown=6,at.playChallanSiren(),this.onChallanIssued&&this.onChallanIssued({type:"red_light",fine:200,msg:"🚨 TRAFFIC CHALLAN: Red Light Jumped! -₹200"}))}checkSpeedingViolation(e,t){if(this.speedingCooldown>0)return;const n=e.x>8&&e.x<32&&e.z>30&&e.z<95,i=e.x>-70&&e.x<-30&&e.z>45&&e.z<95;if((n||i)&&t>48){this.speedingCooldown=8,at.playChallanSiren();const r=n?"Bapu Bazaar Crowded Zone":"Hospital Silence Zone";this.onChallanIssued&&this.onChallanIssued({type:"speeding",fine:150,msg:`⚠️ SPEEDING CHALLAN: Over 45 km/h in ${r}! -₹150`})}}}class ip{constructor(e,t,n,i,r){this.scene=e,this.city=t,this.rickshaw=n,this.onRideComplete=i,this.onDialog=r,this.hasActiveRide=!1,this.currentPassenger=null,this.currentDestination=null,this.tripDistanceKm=0,this.tripFare=30,this.tripDurationSec=0,this.lastPosition=null,this.crashesDuringTrip=0,this.promptText=null,this.pickupZoneMesh=null,this.dropoffZoneMesh=null,this.hailingPassengerMesh=null,this.passengerProfiles=[{name:"Ramesh Uncle",avatar:"👨🏽",pickupDialog:"“Bhaiya, Railway Station jaldi chalo! Train chhoot jayegi!”",dropDialog:"“Shabash beta! Ye lo tumhara kiraya aur chai ke paise.”",destKey:"railway"},{name:"Pooja (College Student)",avatar:"👩🏽",pickupDialog:"“Bhaiya, Bapu Bazaar chaloge? Meter se hi chalna haan!”",dropDialog:"“Thank you bhaiya! Ekdum safe chalate ho aap.”",destKey:"bazaar"},{name:"Dr. Verma",avatar:"👨🏻‍⚕️",pickupDialog:"“Emergency hai bhaiya, Apollo Hospital jaldi pahunchaiye!”",dropDialog:"“Bahut badhiya! Aapne time bacha liya.”",destKey:"hospital"},{name:"Sharma Ji",avatar:"👴🏽",pickupDialog:"“Chai Adda chalo bhai, subah ki kadak chai peeni hai!”",dropDialog:"“Ye lo bhaiya, poore chhutte hain.”",destKey:"chai"},{name:"Tourist Mike",avatar:"🧔🏼",pickupDialog:"“Namaste bhaiya! Take me to Gandhi Chowk Heritage, please!”",dropDialog:"“Incredible India! Auto rickshaw ride was amazing!”",destKey:"chowk"},{name:"Sunita Aunty",avatar:"🧕🏽",pickupDialog:"“Beta, Metro Station Gate 2 chalna hai, theek se chalana.”",dropDialog:"“Jeete raho beta, khub tarakki karo!”",destKey:"metro"},{name:"Vikram Bhai (Express Passenger)",avatar:"🧳",pickupDialog:"“Bhaiya, Rajdhani Express se utra hoon, Bapu Bazaar jaldi le chalo!”",dropDialog:"“Shandar driving bhaiya! Ye lo pura kiraya aur chai paani.”",destKey:"bazaar"},{name:"Ananya (Family Traveler)",avatar:"👩🏻",pickupDialog:"“Bhaiya, luggage bohot hai, Metro Terminal Gate 2 tak safe chalana.”",dropDialog:"“Bahut shukriya bhaiya! Sabhi bag surakshit pahunch gaye.”",destKey:"metro"},{name:"Karan (Daily Commuter)",avatar:"🧑🏽",pickupDialog:"“Bhaiya, Central Railway Station chalna hai, train chhoot na jaye!”",dropDialog:"“Wah bhaiya, train time se mil gayi! Ye lo bonus tip.”",destKey:"railway"}],this.pickupSpots=[{x:10,z:-164,name:"Railway Station Auto Stand"},{x:13.5,z:-35,name:"MG Road South"},{x:-13.5,z:25,name:"MG Road North"},{x:13.5,z:85,name:"Market Crossing"},{x:-13.5,z:-110,name:"Metro Avenue"},{x:30,z:12.5,name:"Expressway East"},{x:-50,z:-12.5,name:"Hospital Approach"}],this.createMarkers(),this.spawnNextWaitingPassenger()}createMarkers(){const e=new qe(3.5,3.5,.25,24),t=new Qe({color:16766464,transparent:!0,opacity:.65,side:Xt});this.pickupZoneMesh=new B(e,t),this.pickupZoneMesh.position.set(0,.15,0),this.scene.add(this.pickupZoneMesh);const n=new qe(4,4,.25,24),i=new Qe({color:58998,transparent:!0,opacity:.7,side:Xt});this.dropoffZoneMesh=new B(n,i),this.dropoffZoneMesh.position.set(0,.15,0),this.dropoffZoneMesh.visible=!1,this.scene.add(this.dropoffZoneMesh);const r=new qe(.3,.3,30,12),o=new Qe({color:58998,transparent:!0,opacity:.45}),a=new B(r,o);a.position.y=15,this.dropoffZoneMesh.add(a),this.hailingPassengerMesh=this.buildHailingHuman(),this.scene.add(this.hailingPassengerMesh)}buildHailingHuman(){const e=new it,t=new he({color:4149685,roughness:.7}),n=new he({color:9262372,roughness:.8}),i=new B(new de(.4,.65,.25),t);i.position.y=1.1,e.add(i);const r=new de(.16,.75,.18),o=new B(r,new he({color:2171169}));o.position.set(-.1,.4,0),e.add(o);const a=new B(r,new he({color:2171169}));a.position.set(.1,.4,0),e.add(a);const c=new B(new on(.15,12,12),n);c.position.y=1.6,e.add(c);const l=new de(.1,.55,.1),h=new B(l,n);return h.position.set(.28,1.45,0),h.rotation.z=-1.1,e.add(h),e}spawnNextWaitingPassenger(){if(this.hasActiveRide)return;const e=this.pickupSpots[Math.floor(Math.random()*this.pickupSpots.length)],t=this.passengerProfiles[Math.floor(Math.random()*this.passengerProfiles.length)];this.currentPassenger={...t,pickupX:e.x,pickupZ:e.z,destination:this.city.landmarks[t.destKey]||this.city.landmarks.railway},this.pickupZoneMesh.position.set(e.x,.15,e.z),this.pickupZoneMesh.visible=!0,this.hailingPassengerMesh.position.set(e.x>0?e.x+1.2:e.x-1.2,0,e.z),this.hailingPassengerMesh.visible=!0,this.dropoffZoneMesh.visible=!1}setMissionPassenger(e,t,n){this.hasActiveRide=!1,this.rickshaw.setPassengerVisible(!1);const i=this.city.landmarks[e]||{x:13.5,z:-35},r=this.city.landmarks[t]||this.city.landmarks.railway,o=this.passengerProfiles.find(a=>a.destKey===t)||this.passengerProfiles[0];this.currentPassenger={...o,pickupX:i.x,pickupZ:i.z,destination:r},this.pickupZoneMesh.position.set(i.x,.15,i.z),this.pickupZoneMesh.visible=!0,this.hailingPassengerMesh.position.set(i.x>0?i.x+1.2:i.x-1.2,0,i.z),this.hailingPassengerMesh.visible=!0,this.dropoffZoneMesh.visible=!1}reset(){this.hasActiveRide=!1,this.currentDestination=null,this.tripDistanceKm=0,this.tripFare=30,this.tripDurationSec=0,this.crashesDuringTrip=0,this.rickshaw.setPassengerVisible(!1),this.dropoffZoneMesh&&(this.dropoffZoneMesh.visible=!1),this.spawnNextWaitingPassenger()}update(e,t,n){const i=performance.now()*.003;if(this.pickupZoneMesh&&this.pickupZoneMesh.visible){const r=1+Math.sin(i*3)*.1;this.pickupZoneMesh.scale.set(r,1,r)}if(this.dropoffZoneMesh&&this.dropoffZoneMesh.visible){const r=1+Math.sin(i*4)*.12;this.dropoffZoneMesh.scale.set(r,1,r)}if(this.promptText=null,this.hasActiveRide){if(this.tripDurationSec+=e,this.lastPosition){const l=t.x-this.lastPosition.x,h=t.z-this.lastPosition.z,f=Math.sqrt(l*l+h*h);this.tripDistanceKm+=f/1e3}this.lastPosition={x:t.x,z:t.z},this.tripFare=30+this.tripDistanceKm*15+this.tripDurationSec/6;const r=this.currentDestination,o=t.x-r.x,a=t.z-r.z,c=Math.sqrt(o*o+a*a);c<4.8?Math.abs(n)<12?(this.promptText="✅ DROPPING OFF PASSENGER...",this.completeRide()):this.promptText="🛑 BRAKE & STOP IN GREEN DROP-OFF ZONE":c<40&&(this.promptText=`📍 ARRIVING AT ${r.name.toUpperCase()} (${Math.round(c)}m)`)}else if(this.currentPassenger){const r=t.x-this.currentPassenger.pickupX,o=t.z-this.currentPassenger.pickupZ,a=Math.sqrt(r*r+o*o);a<4.2?Math.abs(n)<14?(this.promptText="🛺 BOARDING PASSENGER...",this.startRide(t)):this.promptText="🛑 SLOW DOWN TO BOARD PASSENGER":a<28&&(this.promptText=`📍 PASSENGER WAITING (${Math.round(a)}m) - STOP IN YELLOW CIRCLE`)}}startRide(e){this.hasActiveRide=!0,this.lastPosition={x:e.x,z:e.z},this.tripDistanceKm=0,this.tripFare=30,this.tripDurationSec=0,this.crashesDuringTrip=0,this.currentDestination=this.currentPassenger.destination,this.pickupZoneMesh.visible=!1,this.hailingPassengerMesh.visible=!1,this.rickshaw.setPassengerVisible(!0),this.dropoffZoneMesh.position.set(this.currentDestination.x,.15,this.currentDestination.z),this.dropoffZoneMesh.visible=!0,at.playCoinJingle(),this.onDialog&&this.onDialog({avatar:this.currentPassenger.avatar,name:this.currentPassenger.name,msg:this.currentPassenger.pickupDialog,dest:this.currentDestination.name})}recordCrash(){this.hasActiveRide&&(this.crashesDuringTrip++,this.onDialog&&this.onDialog({avatar:this.currentPassenger.avatar,name:this.currentPassenger.name,msg:"“Arrey bhaiya aaram se! Haddi-pasli todoge kya?!”",dest:this.currentDestination.name}))}completeRide(){this.hasActiveRide=!1,this.rickshaw.setPassengerVisible(!1),this.dropoffZoneMesh.visible=!1;let e=0;this.crashesDuringTrip===0?e=40+Math.floor(Math.random()*25):this.crashesDuringTrip===1&&(e=15);const t=Math.round(this.tripFare)+e;at.playCoinJingle(),this.onRideComplete&&this.onRideComplete({passenger:this.currentPassenger.name,baseFare:30,distKm:this.tripDistanceKm.toFixed(1),fare:Math.round(this.tripFare),tip:e,total:t,crashes:this.crashesDuringTrip}),this.onDialog&&this.onDialog({avatar:this.currentPassenger.avatar,name:this.currentPassenger.name,msg:this.currentPassenger.dropDialog,dest:"Completed"}),setTimeout(()=>{this.spawnNextWaitingPassenger()},3500)}getActiveDestination(){return this.hasActiveRide&&this.currentDestination?this.currentDestination:this.currentPassenger?{x:this.currentPassenger.pickupX,z:this.currentPassenger.pickupZ,name:`Passenger: ${this.currentPassenger.name}`}:null}}const Ys="autowala_save_v1";class sp{constructor(e,t,n){this.rickshaw=e,this.physics=t,this.onStateChange=n,this.state={cash:500,upgrades:{speed:1,accel:1,brakes:1,nitro:1},currentSkin:"delhi",unlockedSkins:["delhi"],currentDecal:"hornok",unlockedDecals:["hornok"],currentHorn:"peepoo",unlockedHorns:["peepoo"]},this.upgradeCatalog={speed:{name:"Engine Tuning",maxLvl:5,baseCost:300,costMult:1.6},accel:{name:"Throttle Response",maxLvl:5,baseCost:250,costMult:1.5},brakes:{name:"Disc Brakes",maxLvl:5,baseCost:200,costMult:1.5},nitro:{name:"NOS Cylinder",maxLvl:3,baseCost:500,costMult:2}},this.skinsCatalog=[{id:"delhi",name:"Delhi NCR Green & Yellow",price:0,preview:"#0D7B3E",roof:"#FFB800"},{id:"mumbai",name:"Mumbai Kaali Peeli",price:350,preview:"#1A1A1A",roof:"#FFD600"},{id:"ev",name:"Cyber EV Auto (Electric)",price:600,preview:"#00B0FF",roof:"#00E676"},{id:"royal",name:"Royal Saffron Gold",price:500,preview:"#D84315",roof:"#FFD700"},{id:"bollywood",name:"Bollywood Star Pink",price:450,preview:"#E91E63",roof:"#FFEB3B"},{id:"shadow",name:"Midnight Shadow Stealth",price:700,preview:"#11161B",roof:"#263238"}],this.decalsCatalog=[{id:"hornok",name:"HORN OK PLEASE",price:0,tag:"Traditional"},{id:"aashirwad",name:"माँ का आशीर्वाद",price:150,tag:"Devotional"},{id:"buramat",name:"बुरी नज़र वाले तेरा मुँह काला",price:150,tag:"Nazar Battu"},{id:"apnatime",name:"APNA TIME AAYEGA 🔥",price:200,tag:"Gully Boy"},{id:"king",name:"KING OF ROADS 👑",price:250,tag:"Royal"}],this.hornsCatalog=[{id:"peepoo",name:"Dual-Tone Pee-Poo",price:0,desc:"Classic Indian Rickshaw Horn"},{id:"beep",name:"Tuk-Tuk Beep",price:100,desc:"Crisp City Street Beep"},{id:"pressure",name:"High-Pitch Pressure Horn",price:250,desc:"Highway Truck Horn"}],this.loadSave(),this.applyAllToRickshaw()}loadSave(){try{const e=localStorage.getItem(Ys);if(e){const t=JSON.parse(e);this.state={...this.state,...t}}}catch(e){console.warn("Could not load save game:",e)}}saveGame(){try{localStorage.setItem(Ys,JSON.stringify(this.state)),this.onStateChange&&this.onStateChange(this.state)}catch(e){console.warn("Could not save game:",e)}}resetSave(){try{localStorage.removeItem(Ys),this.state.cash=500,this.state.upgrades={speed:1,accel:1,brakes:1,nitro:1},this.state.currentSkin="delhi",this.state.unlockedSkins=["delhi"],this.state.currentDecal="hornok",this.state.unlockedDecals=["hornok"],this.state.currentHorn="peepoo",this.state.unlockedHorns=["peepoo"],this.applyAllToRickshaw(),this.saveGame()}catch{}}addCash(e){this.state.cash=Math.max(0,this.state.cash+e),this.saveGame()}deductCash(e){this.state.cash=Math.max(0,this.state.cash-e),this.saveGame()}getUpgradeCost(e){const t=this.upgradeCatalog[e],n=this.state.upgrades[e]||1;return n>=t.maxLvl?null:Math.round(t.baseCost*Math.pow(t.costMult,n-1))}buyUpgrade(e){const t=this.getUpgradeCost(e);return t===null||this.state.cash<t?!1:(this.state.cash-=t,this.state.upgrades[e]+=1,at.playCoinJingle(),this.applyAllToRickshaw(),this.saveGame(),!0)}selectSkin(e){const t=this.skinsCatalog.find(n=>n.id===e);if(!t)return!1;if(!this.state.unlockedSkins.includes(e)){if(this.state.cash<t.price)return!1;this.state.cash-=t.price,this.state.unlockedSkins.push(e),at.playCoinJingle()}return this.state.currentSkin=e,this.applyAllToRickshaw(),this.saveGame(),!0}selectDecal(e){const t=this.decalsCatalog.find(n=>n.id===e);if(!t)return!1;if(!this.state.unlockedDecals.includes(e)){if(this.state.cash<t.price)return!1;this.state.cash-=t.price,this.state.unlockedDecals.push(e),at.playCoinJingle()}return this.state.currentDecal=e,this.applyAllToRickshaw(),this.saveGame(),!0}selectHorn(e){const t=this.hornsCatalog.find(n=>n.id===e);if(!t)return!1;if(!this.state.unlockedHorns.includes(e)){if(this.state.cash<t.price)return!1;this.state.cash-=t.price,this.state.unlockedHorns.push(e),at.playCoinJingle()}return this.state.currentHorn=e,at.playHorn(e),setTimeout(()=>at.stopHorn(),500),this.saveGame(),!0}applyAllToRickshaw(){this.rickshaw.applySkin(this.state.currentSkin),this.rickshaw.applyDecal(this.state.currentDecal),this.physics.applyUpgrades(this.state.upgrades);const e=this.state.currentSkin==="ev";this.rickshaw.setUnderglow(e,58879)}}class rp{constructor(e){this.onMissionComplete=e,this.activeMission=null,this.missionTimer=0,this.missionViolations=0,this.missions=[{id:"m1",title:"Mission 1: Chai Chowk to Railway Station",desc:"Pick up Ramesh Uncle from Chai Adda and rush to Central Railway Station before his train departs!",timeLimitSec:120,reward:350,pickupKey:"chai",destKey:"railway",requiresNoChallans:!1},{id:"m2",title:"Mission 2: Emergency at Apollo Hospital",desc:"Deliver Dr. Verma to Apollo 24/7 Hospital. Obey all traffic rules and avoid red light fines!",timeLimitSec:100,reward:450,pickupKey:"chowk",destKey:"hospital",requiresNoChallans:!0},{id:"m3",title:"Mission 3: Bapu Bazaar Market Maze",desc:"Drive into crowded Bapu Bazaar, pick up Pooja and navigate back through traffic to Metro Station Gate 2.",timeLimitSec:130,reward:550,pickupKey:"bazaar",destKey:"metro",requiresNoChallans:!1},{id:"m4",title:"Mission 4: Elevated Flyover Express",desc:"Take Foreign Tourist Mike over the high-speed Flyover bypass to Central Railway Station.",timeLimitSec:90,reward:650,pickupKey:"flyover",destKey:"railway",requiresNoChallans:!1},{id:"m5",title:"Mission 5: King of Indian Roads",desc:"Complete the ultimate test: Drive from Metro Station across the entire city to Gandhi Chowk under 75 seconds!",timeLimitSec:75,reward:1e3,pickupKey:"metro",destKey:"chowk",requiresNoChallans:!0}],this.dailyChallenges=[{id:"d1",title:"Flawless Driver",desc:"Drive for 2 minutes without breaking a single traffic rule.",reward:200,progress:0,target:120,completed:!1},{id:"d2",title:"Speedy Raju",desc:"Reach 50 km/h using NOS Nitro Booster.",reward:150,progress:0,target:50,completed:!1},{id:"d3",title:"Desi Drifter",desc:"Perform 3 handbrake slides around corners.",reward:250,progress:0,target:3,completed:!1}]}startMission(e){const t=this.missions.find(n=>n.id===e);return t?(this.activeMission={...t,timeLeft:t.timeLimitSec,step:"pickup"},this.missionTimer=0,this.missionViolations=0,this.activeMission):null}recordViolation(){this.activeMission&&this.missionViolations++}update(e,t,n){if(this.activeMission&&(this.activeMission.timeLeft-=e,this.activeMission.timeLeft<=0)){const i=this.activeMission;return this.activeMission=null,{status:"failed",reason:"Time ran out! Train/Meeting missed!",mission:i}}return this.dailyChallenges.forEach(i=>{i.completed||(i.id==="d1"?(i.progress+=e,i.progress>=i.target&&(i.completed=!0)):i.id==="d2"?t>=50&&(i.progress=50,i.completed=!0):i.id==="d3"&&n&&t>20&&(i.progress+=e*.8,i.progress>=i.target&&(i.completed=!0)))}),null}completeActiveMission(){if(!this.activeMission)return null;const e=this.activeMission;return this.activeMission=null,e.requiresNoChallans&&this.missionViolations>0?{status:"failed",reason:"Failed: Traffic violations occurred during VIP ride!",mission:e}:(this.onMissionComplete&&this.onMissionComplete(e),{status:"success",reward:e.reward,mission:e})}}class ap{constructor(e,t){this.garage=e,this.missionManager=t,this.inputs={steer:0,throttle:0,brake:0,handbrake:!1,nitro:!1},this.hudOverlay=document.getElementById("hud-overlay"),this.hudCash=document.getElementById("hud-cash"),this.hudMissionBadge=document.getElementById("hud-mission-badge"),this.hudMissionText=document.getElementById("hud-mission-text"),this.hudSpeed=document.getElementById("hud-speed"),this.hudGear=document.getElementById("hud-gear"),this.speedoFill=document.getElementById("speedo-fill"),this.hudNitroFill=document.getElementById("hud-nitro-fill"),this.hudHealthFill=document.getElementById("hud-health-fill"),this.rideCard=document.getElementById("ride-card"),this.meterFare=document.getElementById("meter-fare"),this.meterDist=document.getElementById("meter-dist"),this.rideDestName=document.getElementById("ride-dest-name"),this.dialogBubble=document.getElementById("dialog-bubble"),this.dialogAvatar=document.getElementById("dialog-avatar"),this.dialogName=document.getElementById("dialog-name"),this.dialogMsg=document.getElementById("dialog-msg"),this.navArrowContainer=document.getElementById("nav-arrow-container"),this.navArrow=document.getElementById("nav-arrow"),this.navDistLabel=document.getElementById("nav-dist-label"),this.alertBanner=document.getElementById("alert-banner"),this.alertIcon=document.getElementById("alert-icon"),this.alertText=document.getElementById("alert-text"),this.alertTimeout=null,this.hudSignalWidget=document.getElementById("hud-signal-widget"),this.sigBulbRed=document.getElementById("sig-bulb-red"),this.sigBulbYellow=document.getElementById("sig-bulb-yellow"),this.sigBulbGreen=document.getElementById("sig-bulb-green"),this.sigStatusBadge=document.getElementById("sig-status-badge"),this.sigInstruction=document.getElementById("sig-instruction"),this.sigDistLabel=document.getElementById("sig-dist-label"),this.hudActionPrompt=document.getElementById("hud-action-prompt"),this.actionPromptText=document.getElementById("action-prompt-text"),this.hudBrakeHint=document.getElementById("hud-brake-hint"),this.hudSpeedBadge=document.getElementById("hud-speed-badge"),this.minimapCanvas=document.getElementById("minimap-canvas"),this.minimapCtx=this.minimapCanvas.getContext("2d"),this.minimapCounter=0,this.mainMenu=document.getElementById("main-menu"),this.garageModal=document.getElementById("garage-modal"),this.careerModal=document.getElementById("career-modal"),this.dailyModal=document.getElementById("daily-modal"),this.howtoModal=document.getElementById("howto-modal"),this.settingsModal=document.getElementById("settings-modal"),this.pauseModal=document.getElementById("pause-modal"),this.resultModal=document.getElementById("mission-result-modal"),this.gameoverModal=document.getElementById("gameover-modal"),this.onStartGame=null,this.onResetVehicle=null,this.onToggleCamera=null,this.onToggleEnv=null,this.onToggleRain=null,this.onPlayHorn=null,this.onStopHorn=null,this.onPauseGame=null,this.onResumeGame=null,this.onRestartGame=null,this.onQuitToMenu=null,this.onGraphicsChange=null,this.keysDown={},this.bindEvents(),this.renderGarageCatalog(),this.renderMissionsList(),this.renderDailyList()}isGameplayActive(){return!this.hudOverlay.classList.contains("hidden")&&this.mainMenu.classList.contains("hidden")&&this.pauseModal.classList.contains("hidden")&&(!this.gameoverModal||this.gameoverModal.classList.contains("hidden"))}resetAllInputs(){this.keysDown={},this.touchSteer=0,this.touchThrottle=0,this.touchBrake=0,this.touchHandbrake=!1,this.touchNitro=!1,this.inputs.steer=0,this.inputs.throttle=0,this.inputs.brake=0,this.inputs.handbrake=!1,this.inputs.nitro=!1,document.querySelectorAll(".touch-btn").forEach(e=>e.classList.remove("pressed"))}bindEvents(){window.addEventListener("keydown",d=>{if(d.code==="KeyH"){!d.repeat&&this.isGameplayActive()&&this.onPlayHorn&&this.onPlayHorn();return}this.keysDown[d.code]=!0,d.code==="KeyC"&&this.isGameplayActive()&&this.onToggleCamera&&this.onToggleCamera(),d.code==="KeyR"&&this.isGameplayActive()&&this.onResetVehicle&&this.onResetVehicle(),d.code==="Escape"&&this.togglePause()}),window.addEventListener("keyup",d=>{this.keysDown[d.code]=!1,d.code==="KeyH"&&this.onStopHorn&&this.onStopHorn()}),window.addEventListener("blur",()=>{this.resetAllInputs(),this.onStopHorn&&this.onStopHorn()}),document.addEventListener("visibilitychange",()=>{document.hidden&&(this.resetAllInputs(),this.onStopHorn&&this.onStopHorn())}),this.updateInputs=()=>{let d=0,m=0,_=0;(this.keysDown.KeyA||this.keysDown.ArrowLeft)&&(d-=1),(this.keysDown.KeyD||this.keysDown.ArrowRight)&&(d+=1),(this.keysDown.KeyW||this.keysDown.ArrowUp)&&(m=1),(this.keysDown.KeyS||this.keysDown.ArrowDown)&&(_=1);const g=!!this.keysDown.Space,p=!!(this.keysDown.ShiftLeft||this.keysDown.ShiftRight);this.inputs.steer=d!==0?d:this.touchSteer;let u=m!==0?m:this.touchThrottle,S=_!==0?_:this.touchBrake;S>0?(this.inputs.brake=S,this.inputs.throttle=0):(this.inputs.brake=0,this.inputs.throttle=u),this.inputs.handbrake=g||this.touchHandbrake,this.inputs.nitro=p||this.touchNitro},this.updateKeyboardInputs=this.updateInputs,this.touchSteer=0,this.touchThrottle=0,this.touchBrake=0,this.touchHandbrake=!1,this.touchNitro=!1;const e=(d,m,_)=>{const g=document.getElementById(d);if(!g)return;let p=!1;const u=x=>{if(x&&(x.preventDefault(),g.setPointerCapture&&x.pointerId!==void 0))try{g.setPointerCapture(x.pointerId)}catch{}p||(p=!0,g.classList.add("pressed"),m())},S=x=>{x&&x.preventDefault(),p&&(p=!1,g.classList.remove("pressed"),_())};g.addEventListener("pointerdown",u),g.addEventListener("pointerup",S),g.addEventListener("pointercancel",S),g.addEventListener("pointerleave",S)};e("touch-left",()=>this.touchSteer=-1,()=>this.touchSteer=0),e("touch-right",()=>this.touchSteer=1,()=>this.touchSteer=0),e("touch-gas",()=>this.touchThrottle=1,()=>this.touchThrottle=0),e("touch-brake",()=>this.touchBrake=1,()=>this.touchBrake=0),e("touch-handbrake",()=>this.touchHandbrake=!0,()=>this.touchHandbrake=!1),e("touch-nos",()=>this.touchNitro=!0,()=>this.touchNitro=!1),e("touch-horn",()=>{this.isGameplayActive()&&this.onPlayHorn&&this.onPlayHorn()},()=>{this.onStopHorn&&this.onStopHorn()}),document.getElementById("btn-cam-toggle").addEventListener("click",()=>{this.onToggleCamera&&this.onToggleCamera()}),document.getElementById("btn-env-toggle").addEventListener("click",()=>{this.onToggleEnv&&this.onToggleEnv()}),document.getElementById("btn-weather-toggle").addEventListener("click",()=>{this.onToggleRain&&this.onToggleRain()}),document.getElementById("btn-pause").addEventListener("click",()=>{this.togglePause()});const t=document.getElementById("btn-menu-start");t&&t.addEventListener("click",()=>{this.mainMenu.classList.add("hidden"),this.hudOverlay.classList.remove("hidden"),this.onStartGame&&this.onStartGame("freeroam")}),document.getElementById("btn-menu-career").addEventListener("click",()=>{this.careerModal.classList.remove("hidden")}),document.getElementById("btn-menu-freeroam").addEventListener("click",()=>{this.mainMenu.classList.add("hidden"),this.hudOverlay.classList.remove("hidden"),this.onStartGame&&this.onStartGame("freeroam")}),document.getElementById("btn-menu-garage").addEventListener("click",()=>{this.openGarage()}),document.getElementById("btn-menu-daily").addEventListener("click",()=>{this.dailyModal.classList.remove("hidden")}),document.getElementById("btn-menu-howto").addEventListener("click",()=>{this.howtoModal.classList.remove("hidden")}),document.getElementById("btn-menu-settings").addEventListener("click",()=>{this.settingsModal.classList.remove("hidden")}),[{id:"btn-close-garage",modal:this.garageModal},{id:"btn-close-career",modal:this.careerModal},{id:"btn-close-daily",modal:this.dailyModal},{id:"btn-close-howto",modal:this.howtoModal},{id:"btn-close-howto-bottom",modal:this.howtoModal},{id:"btn-close-settings",modal:this.settingsModal},{id:"btn-save-settings",modal:this.settingsModal}].forEach(d=>{const m=document.getElementById(d.id);m&&m.addEventListener("click",()=>d.modal.classList.add("hidden"))}),document.getElementById("btn-garage-testdrive").addEventListener("click",()=>{this.garageModal.classList.add("hidden"),this.mainMenu.classList.add("hidden"),this.hudOverlay.classList.remove("hidden"),this.onStartGame&&this.onStartGame("freeroam")}),document.getElementById("btn-resume").addEventListener("click",()=>{this.pauseModal.classList.add("hidden"),this.onResumeGame&&this.onResumeGame()});const i=document.getElementById("btn-pause-restart");i&&i.addEventListener("click",()=>{this.pauseModal.classList.add("hidden"),this.onRestartGame&&this.onRestartGame()}),document.getElementById("btn-pause-garage").addEventListener("click",()=>{this.pauseModal.classList.add("hidden"),this.openGarage()}),document.getElementById("btn-pause-menu").addEventListener("click",()=>{this.pauseModal.classList.add("hidden"),this.hudOverlay.classList.add("hidden"),this.mainMenu.classList.remove("hidden"),this.onQuitToMenu&&this.onQuitToMenu()});const r=document.getElementById("btn-gameover-restart");r&&r.addEventListener("click",()=>{this.gameoverModal&&this.gameoverModal.classList.add("hidden"),this.onRestartGame&&this.onRestartGame()});const o=document.getElementById("btn-gameover-menu");o&&o.addEventListener("click",()=>{this.gameoverModal&&this.gameoverModal.classList.add("hidden"),this.hudOverlay.classList.add("hidden"),this.mainMenu.classList.remove("hidden"),this.onQuitToMenu&&this.onQuitToMenu()});const a=document.getElementById("setting-graphics");a&&a.addEventListener("change",d=>{this.onGraphicsChange&&this.onGraphicsChange(d.target.value),this.showAlert(`Graphics quality set to ${d.target.value.toUpperCase()}`,"⚙️",!0)});const c=document.getElementById("setting-traffic");c&&c.addEventListener("change",d=>{this.onTrafficChange&&this.onTrafficChange(d.target.value)});const l=document.getElementById("setting-volume");l&&l.addEventListener("input",d=>{this.onVolumeChange&&this.onVolumeChange(d.target.value/100)});const h=document.getElementById("setting-touch");h&&h.addEventListener("change",d=>{const m=document.getElementById("touch-controls");m&&(m.style.display=d.target.checked?"flex":"none")}),document.getElementById("btn-result-continue").addEventListener("click",()=>{this.resultModal.classList.add("hidden")});const f=document.querySelectorAll(".garage-tabs .tab-btn");f.forEach(d=>{d.addEventListener("click",()=>{f.forEach(_=>_.classList.remove("active")),document.querySelectorAll(".garage-content .tab-pane").forEach(_=>_.classList.remove("active")),d.classList.add("active");const m=d.getAttribute("data-tab");document.getElementById(`tab-${m}`).classList.add("active")})}),["speed","accel","brakes","nitro"].forEach(d=>{const m=document.getElementById(`btn-up-${d}`);m&&m.addEventListener("click",()=>{this.garage.buyUpgrade(d),this.updateGarageUI()})}),document.getElementById("btn-reset-save").addEventListener("click",()=>{confirm("Reset your money, garage upgrades and progress back to beginning?")&&(this.garage.resetSave(),this.updateGarageUI(),this.showAlert("Game data reset to default!","🔄",!0))})}openGarage(){this.updateGarageUI(),this.garageModal.classList.remove("hidden")}togglePause(){if(this.hudOverlay.classList.contains("hidden")||this.gameoverModal&&!this.gameoverModal.classList.contains("hidden"))return;this.pauseModal.classList.toggle("hidden")?this.onResumeGame&&this.onResumeGame():(this.resetAllInputs(),this.onPauseGame&&this.onPauseGame())}showGameOver(){this.gameoverModal&&this.gameoverModal.classList.remove("hidden"),this.resetAllInputs()}updateGarageUI(){const e=this.garage.state;document.getElementById("garage-wallet-val").innerText=`₹${e.cash}`,document.getElementById("menu-wallet-val").innerText=`₹${e.cash}`,this.hudCash.innerText=`₹${e.cash}`,["speed","accel","brakes","nitro"].forEach(t=>{const n=e.upgrades[t],i=this.garage.upgradeCatalog[t].maxLvl,r=this.garage.getUpgradeCost(t),o=document.getElementById(`lvl-${t}`),a=document.getElementById(`bar-${t}`),c=document.getElementById(`btn-up-${t}`);o&&(o.innerText=`Level ${n} / ${i}`),a&&(a.style.width=`${n/i*100}%`),c&&(r===null?(c.innerText="MAX LEVEL",c.disabled=!0):(c.innerText=`Upgrade (₹${r})`,c.disabled=e.cash<r))}),this.renderGarageCatalog()}renderGarageCatalog(){const e=this.garage.state,t=document.getElementById("skins-grid");t&&(t.innerHTML="",this.garage.skinsCatalog.forEach(r=>{const o=e.unlockedSkins.includes(r.id),a=e.currentSkin===r.id,c=document.createElement("div");c.className=`item-card ${a?"selected":""}`,c.innerHTML=`
          <div class="item-swatch" style="background: ${r.preview}; border: 3px solid ${r.roof};">🛺</div>
          <div class="item-name">${r.name}</div>
          <div class="item-price">${a?"EQUIPPED":o?"SELECT":`₹${r.price}`}</div>
        `,c.addEventListener("click",()=>{this.garage.selectSkin(r.id),this.renderGarageCatalog()}),t.appendChild(c)}));const n=document.getElementById("decals-grid");n&&(n.innerHTML="",this.garage.decalsCatalog.forEach(r=>{const o=e.unlockedDecals.includes(r.id),a=e.currentDecal===r.id,c=document.createElement("div");c.className=`item-card ${a?"selected":""}`,c.innerHTML=`
          <div class="item-swatch" style="background: #222; color: #FFB800; font-size: 14px; font-weight: 800;">${r.name}</div>
          <div class="item-name">${r.tag}</div>
          <div class="item-price">${a?"EQUIPPED":o?"SELECT":`₹${r.price}`}</div>
        `,c.addEventListener("click",()=>{this.garage.selectDecal(r.id),this.renderGarageCatalog()}),n.appendChild(c)}));const i=document.getElementById("horns-grid");i&&(i.innerHTML="",this.garage.hornsCatalog.forEach(r=>{const o=e.unlockedHorns.includes(r.id),a=e.currentHorn===r.id,c=document.createElement("div");c.className=`item-card ${a?"selected":""}`,c.innerHTML=`
          <div class="item-swatch" style="background: #111;">🎺</div>
          <div class="item-name">${r.name}</div>
          <p style="font-size: 11px; color: #888;">${r.desc}</p>
          <div class="item-price">${a?"ACTIVE":o?"USE":`₹${r.price}`}</div>
        `,c.addEventListener("click",()=>{this.garage.selectHorn(r.id),this.renderGarageCatalog()}),i.appendChild(c)}))}renderMissionsList(){const e=document.getElementById("missions-list");e&&(e.innerHTML="",this.missionManager.missions.forEach(t=>{const n=document.createElement("div");n.className="mission-card",n.innerHTML=`
        <div class="mission-info">
          <h4>${t.title}</h4>
          <p>${t.desc}</p>
          <div class="mission-rewards">
            <span>⏱️ ${t.timeLimitSec}s</span>
            <span>💰 ₹${t.reward}</span>
          </div>
        </div>
        <button class="desi-btn btn-start-mission">START RIDE 🛺</button>
      `,n.querySelector("button").addEventListener("click",()=>{this.careerModal.classList.add("hidden"),this.mainMenu.classList.add("hidden"),this.hudOverlay.classList.remove("hidden"),this.onStartGame&&this.onStartGame("mission",t.id)}),e.appendChild(n)}))}renderDailyList(){const e=document.getElementById("daily-list");e&&(e.innerHTML="",this.missionManager.dailyChallenges.forEach(t=>{const n=document.createElement("div");n.className="mission-card";const i=Math.min(100,Math.round(t.progress/t.target*100));n.innerHTML=`
        <div class="mission-info">
          <h4>${t.title}</h4>
          <p>${t.desc}</p>
          <div class="uc-progress" style="width: 200px; height: 6px; margin: 6px 0;">
            <div class="uc-progress-fill" style="width: ${i}%;"></div>
          </div>
          <div class="mission-rewards">
            <span>Progress: ${i}%</span>
            <span>💰 ₹${t.reward}</span>
          </div>
        </div>
        <span style="font-weight: 800; color: ${t.completed?"#00E676":"#FFB800"};">
          ${t.completed?"COMPLETED ✅":"IN PROGRESS ⏳"}
        </span>
      `,e.appendChild(n)}))}showAlert(e,t="🚨",n=!1){this.alertTimeout&&clearTimeout(this.alertTimeout),this.alertIcon.innerText=t,this.alertText.innerText=e,this.alertBanner.className=`alert-banner ${n?"reward-banner":""}`,this.alertBanner.classList.remove("hidden"),this.alertTimeout=setTimeout(()=>{this.alertBanner.classList.add("hidden")},4e3)}showDialog(e){this.dialogAvatar.innerText=e.avatar,this.dialogName.innerText=e.name,this.dialogMsg.innerText=e.msg,this.dialogBubble.classList.remove("hidden"),setTimeout(()=>{this.dialogBubble.classList.add("hidden")},4500)}showRideResult(e){document.getElementById("res-base-fare").innerText=`₹${e.baseFare}`,document.getElementById("res-dist").innerText=`${e.distKm} km`,document.getElementById("res-tip").innerText=`+₹${e.tip}`,document.getElementById("res-total").innerText=`₹${e.total}`,this.resultModal.classList.remove("hidden")}updateHUD(e,t,n,i,r,o,a,c,l,h=null,f=null){this.updateInputs();const d=Math.abs(Math.round(e));this.hudSpeed.innerText=d,i?(this.hudGear.innerText="R",this.hudGear.style.background="#D32F2F"):d<3?(this.hudGear.innerText="1",this.hudGear.style.background="#0D7B3E"):d<25?(this.hudGear.innerText="2",this.hudGear.style.background="#0D7B3E"):d<45?(this.hudGear.innerText="3",this.hudGear.style.background="#0D7B3E"):(this.hudGear.innerText="4",this.hudGear.style.background="#FF6F00");const m=90,_=Math.min(m,d)/m*300;if(this.speedoFill.style.strokeDasharray=`${_} 408`,this.hudNitroFill.style.width=`${n}%`,this.hudHealthFill.style.width=`${t}%`,r&&r.hasActiveRide?(this.rideCard.classList.remove("hidden"),this.meterFare.innerText=`₹${r.tripFare.toFixed(1)}`,this.meterDist.innerText=`${r.tripDistanceKm.toFixed(2)} km`,this.rideDestName.innerText=r.currentDestination.name):this.rideCard.classList.add("hidden"),o&&this.isGameplayActive()){this.navArrowContainer.classList.remove("hidden"),this.navArrowContainer.style.opacity="1";const g=o.x-a.x,p=o.z-a.z,u=Math.round(Math.sqrt(g*g+p*p));this.navDistLabel.innerText=`${u}m`;const y=-((Math.atan2(g,p)-c)*(180/Math.PI));this.navArrow.style.transform=`rotate(${y}deg)`}else this.navArrowContainer.classList.add("hidden"),this.navArrowContainer.style.opacity="0";h&&this.isGameplayActive()&&h.approachingIntersection?(this.hudSignalWidget.classList.remove("hidden"),this.sigBulbRed.classList.toggle("active",h.color==="RED"),this.sigBulbYellow.classList.toggle("active",h.color==="YELLOW"),this.sigBulbGreen.classList.toggle("active",h.color==="GREEN"),this.sigStatusBadge.innerText=`${h.color}: ${h.color==="RED"?"STOP":h.color==="YELLOW"?"SLOW":"GO"}`,this.sigStatusBadge.className=`sig-status-badge ${h.badgeClass}`,this.sigInstruction.innerText=h.instruction,this.sigDistLabel.innerText=h.distMeters>0?`Stop Line: ${h.distMeters}m`:"Inside Intersection"):this.hudSignalWidget.classList.add("hidden"),h&&this.isGameplayActive()&&h.needBrakeHint?this.hudBrakeHint.classList.remove("hidden"):this.hudBrakeHint.classList.add("hidden"),h&&this.isGameplayActive()&&h.isSpeeding?this.hudSpeedBadge.classList.remove("hidden"):this.hudSpeedBadge.classList.add("hidden"),f&&this.isGameplayActive()?(this.hudActionPrompt.classList.remove("hidden"),this.actionPromptText.innerText=f):this.hudActionPrompt.classList.add("hidden"),this.minimapCounter=(this.minimapCounter||0)+1,this.minimapCounter%3===0&&this.renderMinimap(a,c,o,l)}renderMinimap(e,t,n,i){const r=this.minimapCtx,o=this.minimapCanvas.width,a=this.minimapCanvas.height,c=o/2,l=.45;if(r.clearRect(0,0,o,a),r.save(),r.translate(c,c),r.rotate(t),r.translate(-e.x*l,-e.z*l),r.strokeStyle="#37474F",r.lineWidth=14*l,r.beginPath(),r.moveTo(0,-180*l),r.lineTo(0,180*l),r.moveTo(-180*l,0),r.lineTo(180*l,0),r.stroke(),r.lineWidth=8*l,r.beginPath(),r.moveTo(-150*l,-90*l),r.lineTo(150*l,-90*l),r.moveTo(-150*l,90*l),r.lineTo(150*l,90*l),r.stroke(),i&&i.forEach(h=>{const f=h.mesh.position.x*l,d=h.mesh.position.z*l;r.fillStyle=h.type==="bus"?"#FF5252":"#FFD54F",r.beginPath(),r.arc(f,d,2.5,0,Math.PI*2),r.fill()}),n){const h=n.x*l,f=n.z*l;r.fillStyle="#00E676",r.beginPath(),r.arc(h,f,5.5,0,Math.PI*2),r.fill()}r.restore()}}class op{constructor(){this.canvas=document.getElementById("game-canvas"),this.clock=new Zf,this.scene=new zf,this.scene.background=new He(8900331),this.scene.fog=new cr(8900331,.0035),this.renderer=new bo({canvas:this.canvas,antialias:!0,powerPreference:"high-performance"}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.25)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=vr,this.camera=new Ct(60,window.innerWidth/window.innerHeight,.1,800),this.cameraModes=["chase","far_chase","cockpit","hood"],this.currentCameraIdx=0,this.cameraMode=this.cameraModes[this.currentCameraIdx],this.gameState="menu",this.menuCameraAngle=0,this.graphicsQuality="medium",this.isNight=!1,this.isRaining=!1,this.setupLighting(),this.setupRain(),this.city=new Qf(this.scene),this.rickshaw=new jf(this.scene),this.physics=new Jf(this.rickshaw),this.physics.setObstacles(this.city.collisionBoxes),this.physics.reset(4.5,-30,0),this.traffic=new ep(this.scene,this.city),this.physics.setTrafficVehicles(this.traffic.getTrafficVehicles()),this.missionManager=new rp(e=>{this.garage.addCash(e.reward),this.ui.showAlert(`🎉 Mission Accomplished! Earned ₹${e.reward}`,"🏆",!0)}),this.garage=new sp(this.rickshaw,this.physics,e=>{this.ui&&this.ui.updateGarageUI()}),this.rules=new np(this.city,e=>{this.garage.deductCash(e.fine),this.missionManager.recordViolation(),this.ui.showAlert(e.msg,"🚨",!1)}),this.passengers=new ip(this.scene,this.city,this.rickshaw,e=>{this.garage.addCash(e.total),this.ui.showRideResult(e),this.missionManager.activeMission&&this.missionManager.completeActiveMission()},e=>{this.ui.showDialog(e)}),this.physics.onCollision=e=>{at.playCrashBump(),this.passengers.recordCrash(),e.impactSpeed>20&&(this.ui.showAlert("💥 Crash Impact! Auto Damaged: -₹40 repair","⚠️",!1),this.garage.deductCash(40))},this.physics.onGameOver=()=>{this.gameState="gameover",at.forceSilence(),at.playCrashBump(),this.ui.showGameOver(),this.ui.showAlert("💥 Auto Totaled! Repair & respawn.","🚨",!1)},this.ui=new ap(this.garage,this.missionManager),this.setupUICallbacks(),window.addEventListener("resize",()=>this.onWindowResize()),this.animate()}setupLighting(){this.ambientLight=new Vf(16777215,4473924,.7),this.scene.add(this.ambientLight),this.sunLight=new Kf(16774112,1.2),this.sunLight.position.set(60,100,40),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=1024,this.sunLight.shadow.mapSize.height=1024,this.sunLight.shadow.camera.near=10,this.sunLight.shadow.camera.far=250,this.sunLight.shadow.camera.left=-90,this.sunLight.shadow.camera.right=90,this.sunLight.shadow.camera.top=90,this.sunLight.shadow.camera.bottom=-90,this.scene.add(this.sunLight)}setupRain(){const t=new Ft,n=new Float32Array(1800*3);for(let r=0;r<1800*3;r+=3)n[r]=(Math.random()-.5)*120,n[r+1]=Math.random()*40,n[r+2]=(Math.random()-.5)*120;t.setAttribute("position",new Kt(n,3));const i=new Ao({color:9489145,size:.25,transparent:!0,opacity:.6});this.rainParticles=new kf(t,i),this.rainParticles.visible=!1,this.scene.add(this.rainParticles)}toggleDayNight(){this.isNight=!this.isNight,this.isNight?(this.scene.background.setHex(395537),this.scene.fog.color.setHex(395537),this.ambientLight.intensity=.15,this.sunLight.intensity=.1,this.rickshaw.headlightLight.intensity=3.2,this.city.setNightMode(!0),document.getElementById("btn-env-toggle").innerText="🌙"):(this.scene.background.setHex(8900331),this.scene.fog.color.setHex(8900331),this.ambientLight.intensity=.7,this.sunLight.intensity=1.2,this.rickshaw.headlightLight.intensity=0,this.city.setNightMode(!1),document.getElementById("btn-env-toggle").innerText="☀️")}toggleRain(){this.isRaining=!this.isRaining,this.rainParticles.visible=this.isRaining,document.getElementById("btn-weather-toggle").innerText=this.isRaining?"🌧️":"🌤️"}switchCamera(){this.currentCameraIdx=(this.currentCameraIdx+1)%this.cameraModes.length,this.cameraMode=this.cameraModes[this.currentCameraIdx]}setupUICallbacks(){this.ui.onStartGame=(e,t)=>{if(this.gameState="playing",at.startEngine(),e==="mission"&&t){const n=this.missionManager.startMission(t);document.getElementById("hud-mission-badge").innerText="CAREER MISSION",document.getElementById("hud-mission-text").innerText=n.title;const i=this.city.landmarks[n.pickupKey];i&&this.physics.reset(i.x>0?i.x-4:i.x+4,i.z,0),this.passengers.setMissionPassenger(n.pickupKey,n.destKey,n.title)}else document.getElementById("hud-mission-badge").innerText="FREE ROAM",document.getElementById("hud-mission-text").innerText="Drive freely & pick up roadside passengers!",this.missionManager.activeMission=null,this.passengers.reset()},this.ui.onPauseGame=()=>{this.gameState="paused",at.forceSilence()},this.ui.onResumeGame=()=>{this.gameState="playing",at.startEngine()},this.ui.onRestartGame=()=>{if(this.physics.repair(),this.missionManager.activeMission){const e=this.missionManager.activeMission,t=this.city.landmarks[e.pickupKey];this.physics.reset(t?t.x>0?t.x-4:t.x+4:4.5,t?t.z:-30,0),this.passengers.setMissionPassenger(e.pickupKey,e.destKey,e.title)}else this.physics.reset(4.5,-30,0),this.passengers.reset();this.gameState="playing",at.startEngine(),this.ui.showAlert("Auto Rickshaw Repaired & Ready!","🛺",!0)},this.ui.onQuitToMenu=()=>{this.gameState="menu",at.forceSilence(),this.physics.reset(4.5,-30,0),this.missionManager.activeMission=null},this.ui.onToggleCamera=()=>this.switchCamera(),this.ui.onToggleEnv=()=>this.toggleDayNight(),this.ui.onToggleRain=()=>this.toggleRain(),this.ui.onResetVehicle=()=>{this.physics.reset(4.5,this.physics.position.z,0),this.ui.showAlert("Auto Rickshaw Position Reset!","🛺",!0)},this.ui.onPlayHorn=()=>{this.gameState==="playing"&&at.playHorn(this.garage.state.currentHorn)},this.ui.onStopHorn=()=>{at.stopHorn()},this.ui.onTrafficChange=e=>{this.traffic.setDensity(e),this.physics.setTrafficVehicles(this.traffic.getTrafficVehicles()),this.ui.showAlert(`Traffic density set to ${e.toUpperCase()}`,"🚦",!0)},this.ui.onGraphicsChange=e=>{this.applyGraphicsSettings(e)},this.ui.onVolumeChange=e=>{at.setVolume(e)}}applyGraphicsSettings(e="medium"){this.graphicsQuality=e,e==="low"?(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1)),this.renderer.shadowMap.enabled=!1,this.sunLight&&(this.sunLight.castShadow=!1),this.traffic.setDensity("low")):e==="high"?(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=qa,this.sunLight&&(this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(1024,1024)),this.traffic.setDensity("high")):(this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,1.15)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=vr,this.sunLight&&(this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.set(512,512)),this.traffic.setDensity("medium")),this.physics.setTrafficVehicles(this.traffic.getTrafficVehicles())}updateCamera(e){const t=this.physics.position,n=this.physics.heading,i=this.physics.speed;if(this.cameraMode==="chase"){const r=5.8+Math.min(2.5,Math.abs(i)*.12),o=2.4,a=t.x-Math.sin(n)*r,c=t.z-Math.cos(n)*r,l=t.y+o;this.camera.position.x+=(a-this.camera.position.x)*Math.min(1,10*e),this.camera.position.z+=(c-this.camera.position.z)*Math.min(1,10*e),this.camera.position.y+=(l-this.camera.position.y)*Math.min(1,10*e);const h=t.x+Math.sin(n)*2,f=t.z+Math.cos(n)*2;this.camera.lookAt(h,t.y+1.2,f)}else if(this.cameraMode==="far_chase"){const o=t.x-Math.sin(n)*11,a=t.z-Math.cos(n)*11;this.camera.position.set(o,t.y+6,a),this.camera.lookAt(t.x,t.y+1,t.z)}else if(this.cameraMode==="cockpit"){this.camera.position.set(t.x,t.y+1.25,t.z+.35);const r=t.x+Math.sin(n)*12,o=t.z+Math.cos(n)*12;this.camera.lookAt(r,t.y+1.1,o)}else if(this.cameraMode==="hood"){this.camera.position.set(t.x+Math.sin(n)*1.4,t.y+.6,t.z+Math.cos(n)*1.4);const r=t.x+Math.sin(n)*15,o=t.z+Math.cos(n)*15;this.camera.lookAt(r,t.y+.6,o)}this.sunLight.position.set(t.x+50,80,t.z+40),this.sunLight.target.position.set(t.x,t.y,t.z),this.sunLight.target.updateMatrixWorld()}animate(){requestAnimationFrame(()=>this.animate());const e=Math.min(.04,this.clock.getDelta());this.ui.updateInputs();let t=null,n=null;if(this.gameState==="playing"){this.physics.setInputs(this.ui.inputs),this.physics.update(e),at.updateEngine(this.physics.speedKmh,this.ui.inputs.throttle,this.physics.isReversing),this.traffic.update(e,this.physics.position,this.physics.speedKmh,o=>this.rules.isRed(o)),this.rules.update(e,this.physics.position,this.physics.speedKmh),t=this.rules.getSignalStatus(this.physics.position,this.physics.speedKmh),this.passengers.update(e,this.physics.position,this.physics.speedKmh),n=this.passengers.promptText;const r=this.missionManager.update(e,this.physics.speedKmh,this.ui.inputs.handbrake);r&&r.status==="failed"&&this.ui.showAlert(`❌ ${r.reason}`,"⚠️",!1),this.updateCamera(e)}else if(this.gameState==="menu"){this.menuCameraAngle+=e*.25;const r=7.5,o=this.physics.position.x,a=this.physics.position.z;this.camera.position.set(o+Math.sin(this.menuCameraAngle)*r,2.5,a+Math.cos(this.menuCameraAngle)*r),this.camera.lookAt(o,1.2,a)}if(this.isRaining){const r=this.rainParticles.geometry.attributes.position,o=r.array,a=this.physics.position.x,c=this.physics.position.z;for(let l=1;l<o.length;l+=3)o[l]-=35*e,o[l]<0&&(o[l]=30+Math.random()*10,o[l-1]=a+(Math.random()-.5)*80,o[l+1]=c+(Math.random()-.5)*80);r.needsUpdate=!0}const i=this.gameState==="playing"?this.passengers.getActiveDestination():null;this.ui.updateHUD(this.physics.speedKmh,this.physics.health,this.physics.nitro,this.physics.isReversing,this.passengers,i,this.physics.position,this.physics.heading,this.traffic.getTrafficVehicles(),t,n),this.renderer.render(this.scene,this.camera)}onWindowResize(){this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}}window.addEventListener("DOMContentLoaded",()=>{new op});
