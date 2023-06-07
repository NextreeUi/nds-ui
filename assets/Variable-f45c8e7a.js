import{r as X,j as a,B as x}from"./index-61f038e9.js";import{o,C as N,s as V,t as O,q,L as C,u as E,l as W,D as F,m as Z,z as I,R as Q}from"./index-e42883c4.js";import{d as D}from"./index-8a0f8ff1.js";const T=146,h=147,L=148,K=1,A=2,f=3,B=149,M=150,j=4,H=5,J=151,k=152,w=153,S=154,z=6,_=7,ee=8,ae=9,y=0,s=[9,10,11,12,13,32,133,160,5760,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8232,8233,8239,8287,12288],Oe=58,re=40,p=95,$e=91,c=45,te=46,b=35,le=37,U=123,ie=125,n=47,R=42,d=10,u=61,de=43;function g(e){return e>=65&&e<=90||e>=97&&e<=122||e>=161}function Y(e){return e>=48&&e<=57}function P(e){let r;return e.next==n&&((r=e.peek(1))==n||r==R)}const se=new o((e,r)=>{if(r.dialectEnabled(y)){let $;if(e.next<0&&r.canShift(w))e.acceptToken(w);else if((($=e.peek(-1))==d||$<0)&&r.canShift(k)){let t=0;for(;e.next!=d&&s.includes(e.next);)e.advance(),t++;e.next==d||P(e)?e.acceptToken(k,-t):t&&e.acceptToken(S)}else if(e.next==d)e.acceptToken(J,1);else if(s.includes(e.next)){for(e.advance();e.next!=d&&s.includes(e.next);)e.advance();e.acceptToken(S)}}else{let $=0;for(;s.includes(e.next);)e.advance(),$++;$&&e.acceptToken(S)}},{contextual:!0}),oe=new o((e,r)=>{if(P(e)){if(e.advance(),r.dialectEnabled(y)){let $=-1;for(let t=1;;t++){let l=e.peek(-t-1);if(l==d||l<0){$=t+1;break}else if(!s.includes(l))break}if($>-1){let t=e.next==R,l=0;for(e.advance();e.next>=0;)if(e.next==d){e.advance();let i=0;for(;e.next!=d&&s.includes(e.next);)i++,e.advance();if(i<$){l=-i-1;break}}else if(t&&e.next==R&&e.peek(1)==n){l=2;break}else e.advance();e.acceptToken(t?_:z,l);return}}if(e.next==n){for(;e.next!=d&&e.next>=0;)e.advance();e.acceptToken(z)}else{for(e.advance();e.next>=0;){let{next:$}=e;if(e.advance(),$==R&&e.next==n){e.advance();break}}e.acceptToken(_)}}}),ce=new o((e,r)=>{(e.next==de||e.next==u)&&r.dialectEnabled(y)&&e.acceptToken(e.next==u?ee:ae,1)}),ne=new o((e,r)=>{if(!r.dialectEnabled(y))return;let $=r.context.depth;if(e.next<0&&$){e.acceptToken(h);return}if(e.peek(-1)==d){let l=0;for(;e.next!=d&&s.includes(e.next);)e.advance(),l++;l!=$&&e.next!=d&&!P(e)&&(l<$?e.acceptToken(h,-l):e.acceptToken(T))}}),ge=new o((e,r)=>{for(let $=!1,t=0,l=0;;l++){let{next:i}=e;if(g(i)||i==c||i==p||$&&Y(i))!$&&(i!=c||l>0)&&($=!0),t===l&&i==c&&t++,e.advance();else if(i==b&&e.peek(1)==U){e.acceptToken(H,2);break}else{$&&e.acceptToken(i==re?B:t==2&&r.canShift(j)?j:M);break}}}),Qe=new o(e=>{if(e.next==ie){for(e.advance();g(e.next)||e.next==c||e.next==p||Y(e.next);)e.advance();e.next==b&&e.peek(1)==U?e.acceptToken(A,2):e.acceptToken(K)}}),me=new o(e=>{if(s.includes(e.peek(-1))){let{next:r}=e;(g(r)||r==p||r==b||r==te||r==$e||r==Oe||r==c)&&e.acceptToken(L)}}),Re=new o(e=>{if(!s.includes(e.peek(-1))){let{next:r}=e;if(r==le&&(e.advance(),e.acceptToken(f)),g(r)){do e.advance();while(g(e.next));e.acceptToken(f)}}});function G(e,r){this.parent=e,this.depth=r,this.hash=(e?e.hash+e.hash<<8:0)+r+(r<<4)}const ye=new G(null,0),Se=new N({start:ye,shift(e,r,$,t){return r==T?new G(e,$.pos-t.pos):r==h?e.parent:e},hash(e){return e.hash}}),he=V({"AtKeyword import charset namespace keyframes media supports include mixin use forward extend at-root":O.definitionKeyword,"Keyword selector":O.keyword,ControlKeyword:O.controlKeyword,NamespaceName:O.namespace,KeyframeName:O.labelName,TagName:O.tagName,ClassName:O.className,PseudoClassName:O.constant(O.className),IdName:O.labelName,"FeatureName PropertyName":O.propertyName,AttributeName:O.attributeName,NumberLiteral:O.number,KeywordQuery:O.keyword,UnaryQueryOp:O.operatorKeyword,"CallTag ValueName":O.atom,VariableName:O.variableName,SassVariableName:O.special(O.variableName),Callee:O.operatorKeyword,Unit:O.unit,"UniversalSelector NestingSelector IndentedMixin IndentedInclude":O.definitionOperator,MatchOp:O.compareOperator,"ChildOp SiblingOp, LogicOp":O.logicOperator,BinOp:O.arithmeticOperator,"Important Global Default":O.modifier,Comment:O.blockComment,LineComment:O.lineComment,ParenthesizedContent:O.special(O.name),ColorLiteral:O.color,StringLiteral:O.string,"InterpolationStart InterpolationContinue InterpolationEnd":O.meta,': "..."':O.punctuation,"PseudoOp #":O.derefOperator,"; ,":O.separator,"( )":O.paren,"[ ]":O.squareBracket,"{ }":O.brace}),ve={__proto__:null,not:58,only:58,using:169,with:179,without:179,hide:193,show:193,from:216,to:218,if:231,through:237,in:243},pe={__proto__:null,url:76,"url-prefix":76,domain:76,regexp:76,lang:90,"nth-child":90,"nth-last-child":90,"nth-of-type":90,"nth-last-of-type":90,dir:90,"host-context":90,selector:162},be={__proto__:null,"@import":146,"@include":166,"@mixin":172,"@function":172,"@use":176,"@extend":182,"@at-root":186,"@forward":190,"@media":196,"@charset":200,"@namespace":204,"@keyframes":210,"@supports":222,"@if":226,"@else":228,"@for":234,"@each":240,"@while":246,"@debug":250,"@warn":250,"@error":250,"@return":250},Pe=q.deserialize({version:14,states:"HzQ`Q+tOOO#cQ+tOOP#jOpOOO#oQ(pO'#CjOOQ#U'#Ci'#CiO$gQ.jO'#ClO%_Q#dO'#DUO&UQ(pO'#CgO&]Q)OO'#DWO&hQ#dO'#D_O&mQ#dO'#DcOOQ#U'#Fp'#FpO&rQ(pO'#FpO'jQ(nO'#DnO$gQ.jO'#DuO$gQ.jO'#EQO$gQ.jO'#ETO$gQ.jO'#EVO'oQ)OO'#EYO(^Q)OO'#E[O$gQ.jO'#E^O(kQ)OO'#EaO$gQ.jO'#EcO)VQ)OO'#EeO)bQ#dO'#EhO)gQ)OO'#EnO){Q)OO'#FOOOQ&Z'#Fo'#FoOOQ&Y'#FR'#FRO*VQ(nO'#FRQ`Q+tOOO$gQ.jO'#EpO*bQ(nO'#EtO*gQ)OO'#EwO$gQ.jO'#EzO$gQ.jO'#E|OOQ&Z'#FY'#FYO*oQ+uO'#FwO*|Q(oO'#FwQOQ#SOOP+bO#SO'#FnPOOO)CAc)CAcOOQ#i'#Cn'#CnO$gQ.jO'#CqO+pQ.wO'#CsO.YQ.^O,59WO$gQ.jO'#CxOOQ#S'#C|'#C|O.kQ(nO'#DROOQ#i'#Fq'#FqO.pQ(nO'#C{OOQ#U'#DV'#DVOOQ#U,59p,59pO%_Q#dO,59pO.uQ)OO,59rO&hQ#dO,59yO&mQ#dO,59}O'oQ)OO,5:RO'oQ)OO,5:TO'oQ)OO,5:UO'oQ)OO'#FXO/QQ(nO,59RO/]Q+tO'#DlO/dQ#TO'#DlOOQ&Z,59R,59ROOQ#U'#DY'#DYOOQ#S'#D]'#D]OOQ#U,59r,59rO/iQ(nO,59rO/nQ(nO,59rOOQ#U'#Da'#DaOOQ#U,59y,59yOOQ#S'#De'#DeO/sQ9`O,59}O/{Q.jO,5:YO0VQ.jO,5:aO1OQ.jO,5:lO1]Q.YO,5:oO1nQ.jO,5:qOOQ#U'#Cj'#CjO2dQ(pO,5:tO2qQ(pO,5:vOOQ&Z,5:v,5:vO2xQ)OO,5:vO2}Q.jO,5:xOOQ#S'#Dx'#DxO3jQ)OO'#D}O3qQ(nO'#FyO)gQ)OO'#D|O4VQ(nO'#EOOOQ#S'#Fz'#FzO/TQ(nO,5:{O1qQ.YO,5:}OOQ#d'#Eg'#EgO*VQ(nO,5;PO4[Q)OO,5;POOQ#S'#Ej'#EjO4dQ(nO,5;SO4iQ(nO,5;YO4tQ(nO,5;jOOQ&Z'#Fx'#FxOOQ&Y,5;m,5;mOOQ&Y-E9P-E9PO1]Q.YO,5;[O5SQ)OO,5;`O5XQ)OO'#F|O5aQ)OO,5;cO1]Q.YO,5;fO1qQ.YO,5;hOOQ&Z-E9W-E9WO5fQ(oO,5<cO5zQ+uO'#F[O5fQ(oO,5<cPOO#S'#FQ'#FQP6bO#SO,5<YPOOO,5<Y,5<YO6pQ.YO,59]OOQ#i,59_,59_O$gQ.jO,59aO$gQ.jO,59fO$gQ.jO'#FUO7OQ#WO1G.rOOQ#k1G.r1G.rO7WQ.oO,59dO9mQ! lO,59mO:jQ.jO'#C}OOQ#i,59g,59gOOQ#U1G/[1G/[OOQ#U1G/^1G/^O/iQ(nO1G/^O/nQ(nO1G/^OOQ#U1G/e1G/eO:tQ9`O1G/iO;_Q(pO1G/mO<RQ(pO1G/oO<uQ(pO1G/pO=iQ(pO,5;sOOQ#S-E9V-E9VOOQ&Z1G.m1G.mO=vQ(nO,5:WO={Q+uO,5:WO>SQ)OO'#D^O>ZQ.jO'#D[OOQ#U1G/i1G/iO$gQ.jO1G/iO>bQ.kO1G/tOOQ#T1G/t1G/tO*VQ(nO1G/{O?_Q+uO'#FxOOQ&Z1G0W1G0WO.pQ(nO1G0WOOQ&Z1G0Z1G0ZOOQ&Z1G0]1G0]O.pQ(nO1G0]OOQ&Z1G0`1G0`OOQ&Z1G0b1G0bOAwQ)OO1G0bOA|Q(nO1G0bOBRQ)OO1G0dOOQ&Z1G0d1G0dOBaQ.jO'#F^OBqQ(nO'#DxOB|Q(nO,5:eOCRQ(nO,5:iO)gQ)OO,5:gOCZQ)OO'#F]OCnQ(nO,5<eODPQ(nO,5:hO'oQ)OO,5:jOOQ&Z1G0g1G0gOOQ&Z1G0i1G0iOOQ&Z1G0k1G0kO*VQ(nO1G0kODhQ)OO'#EkOOQ&Z1G0n1G0nOOQ&Z1G0t1G0tOOQ&Z1G1U1G1UODvQ+uO1G0vO$gQ.jO1G0zOG`Q)OO'#FbOGkQ)OO,5<hO$gQ.jO1G0}OOQ&Z1G1Q1G1QOOQ&Z1G1S1G1SOGsQ(oO1G1}OHXQ+uO,5;vOOQ#T,5;v,5;vOOQ#T-E9Y-E9YPOO#S-E9O-E9OPOOO1G1t1G1tOOQ#i1G.w1G.wOHoQ.oO1G.{OOQ#i1G/Q1G/QOKUQ.^O,5;pOOQ#W-E9S-E9SOOQ#k7+$^7+$^OKgQ(nO1G/XOKlQ.jO'#FSOLvQ.jO'#FtON_Q.jO'#FqONfQ(nO,59iOOQ#U7+$x7+$xOOQ#U7+%T7+%TO$gQ.jO7+%TOOQ&Z1G/r1G/rONkQ#TO1G/rONpQ(pO'#FvONzQ(nO,59xO! PQ.jO'#FuO! ZQ(nO,59vO! `Q.YO7+%TO! nQ.kO'#FZO$gQ.jO'#FZO!#_Q.kO7+%`OOQ#T7+%`7+%`OOQ&Z7+%g7+%gO4tQ(nO7+%rO*VQ(nO7+%wO!$RQ(nO7+%|O)gQ)OO7+%|OOQ#d-E9[-E9[OOQ&Z7+&O7+&OO!$WQ.jO'#F{OOQ#d,5;x,5;xO$gQ.jO1G0POOQ#S1G0T1G0TOOQ#S1G0R1G0RO!$rQ(nO,5;wOOQ#S-E9Z-E9ZO!%WQ(pO1G0UOOQ&Z7+&V7+&VO!%_Q(vO'#CsO/TQ(nO'#F`O!%jQ)OO,5;VOOQ&Z,5;V,5;VO!%xQ+uO7+&bO!(bQ)OO7+&bO!(mQ.jO7+&fOOQ#d,5;|,5;|OOQ#d-E9`-E9`O1]Q.YO7+&iOOQ#T1G1b1G1bOOQ#i7+$s7+$sOOQ#d-E9Q-E9QO!)OQ.jO'#FTO!)]Q(nO,5<`O!)]Q(nO,5<`O$gQ.jO,5<`OOQ#i1G/T1G/TO!)eQ.YO<<HoOOQ&Z7+%^7+%^O!)sQ)OO'#FWO!)}Q(nO,5<bOOQ#U1G/d1G/dO!*VQ.jO'#FVO!*aQ(nO,5<aOOQ#U1G/b1G/bOOQ#U<<Ho<<HoO!*iQ.kO,5;uOOQ#e-E9X-E9XOOQ#T<<Hz<<HzOOQ&Z<<I^<<I^OOQ&Z<<Ic<<IcO)gQ)OO<<IhO!,YQ(nO<<IhO!,bQ.jO'#F_O!,uQ)OO,5<gO!-WQ.jO7+%kOOQ#S7+%p7+%pOOQ#d,5;z,5;zOOQ#d-E9^-E9^OOQ&Z1G0q1G0qOOQ&Z-E9_-E9_O!(bQ)OO<<I|O$gQ.jO,5;{OOQ&Z<<I|<<I|O$gQ.jO<<JQOOQ&Z<<JT<<JTO!-_Q.jO,5;oO!-lQ.jO,5;oOOQ#S-E9R-E9RO!-sQ(nO1G1zO!-{Q.jO1G1zOOQ#UAN>ZAN>ZO!.VQ(pO,5;rOOQ#S-E9U-E9UO!.aQ.jO,5;qOOQ#S-E9T-E9TO!.kQ(nOAN?SO/TQ(nOAN?SO!.sQ.jO,5;yOOQ#d-E9]-E9]OOQ#S<<IV<<IVP!/_Q)OO'#FaOOQ&ZAN?hAN?hO1]Q.YO1G1gO1]Q.YOAN?lOOQ#S1G1Z1G1ZO$gQ.jO1G1ZO!/dQ(nO7+'fO/TQ(nOG24nOOQ&ZG24nG24nOOQ&Z7+'R7+'ROOQ&ZG25WG25WO!/lQ.jO7+&uOOQ&ZLD*YLD*Y",stateData:"!/|~O$`OSVOSUOS$^QQ~OS]OTTOW`OX_O[ZO_ZOa]OrWO{WO!SXO!WYO!jjO!k^O!u_O!x`O!zaO!}bO#PcO#RdO#UeO#WfO#YgO#]hO#ciO#eoO#ipO#lqO#orO#qsO$[RO$gUO~O$V$kP~P`O$^xO~Or^Xr!cXt^X{^X!S^X!W^X![^X!_^X!a^X$Y^X$]^X$g^X~OS!ROTTO_!ROa!ROd{Of!ROh!ROm!OOv!QO$Z!PO$[zO$f|O~O$[!TO~Or!WO{!WO!S!XO!W!YO![!ZO!_!]O!a!`O$Y![O$]!aO$g!VO~Ot!^O~P%dO}!gO$Z!dO$[!cO~O$[!hO~O$[!jO~Or!lOr$dXt$dX{$dX!S$dX!W$dX![$dX!_$dX!a$dX$Y$dX$]$dX$g$dX~Or!lO~OTTO[ZO_ZOrWO{WO!SXO!WYO$[!qO$gUO~Od!uO!a!`O$]!aO~P'oOTTOa!|Od!xOm!zO!s!{O$[!wO!a$mP$]$mP~Oh#QOv!QO$[#PO~O$[#SO~OTTOa!|Od!xOm!zO!s!{O$[!wO~O!g$mP$_$mP~P(kO!g#WO$]#WO$_#WO~Oa#[O~Oa#]O#m$pP~O$V$kX!h$kX$X$kX~P`O!g#WO$]#WO$_#WO$V$kX!h$kX$X$kX~OU#eOV#eO$]#gO$`#eO~OR#iOPgXQgXjgXkgX$ggXTgXagXdgXmgX!ggX!sgX$[gX$]gX$_gX!agX!vgX!{gX#SgXcgXSgX_gXfgXhgXtgXvgX!dgX!egX!fgX$ZgX$fgX$VgXsgX!UgX#agX#jgX!hgX$XgX~OP#nOQ#lOj#jOk#jO$g#kO~Od#pO~Od#qO~O}#vO$Z!dO$[!cO~Ot!^O!a!`O$]!aO~O!h$kP~P`O$W$QO~Od$RO~Od$SO~O!U$TO!Y$UO~O!a!`O$]!aO~P$gOj#jOk#jO$g#kO!g$mP$]$mP$_$mP~P)gOj#jOk#jO!g#WO$_#WO$g#kO~O!a!`O!v$[O$]$YO~P0mOj#jOk#jO!a!`O$]!aO$g#kO~O!{$_O$]#WO~P0mOr!WO{!WO!S!XO!W!YO![!ZO!_!]O$Y![O$g!VO~O!g#WO$]#WO$_#WO~P1xOd$bO~P%dO!{$cO~O#S$fO$]#WO~P0mOTTOa!|Od!xOm!zO!s!{O~O$[$gO~P3XOk$jOt$kO!a$mX$]$mX!g$mX$_$mX~Od$nO~Oh$rOv!QO~O!a$sO~Ok$jO!a!`O$]!aO~O!a!`O!g#WO$]$YO$_#WO~O#`$xO~Ot$yO#m$pX~O#m${O~O!g#WO$]#WO$_#WO$V$ka!h$ka$X$ka~O!g$OX$V$OX$]$OX$_$OX!h$OX$X$OX~P`OU#eOV#eO$]%TO$`#eO~Oc%UOj#jOk#jO$g#kO~OP%ZOQ#lO~Oj#jOk#jO$g#kOPlaQlaTlaaladlamla!gla!sla$[la$]la$_la!ala!vla!{la#SlaclaSla_laflahlatlavla!dla!ela!fla$Zla$fla$Vlasla!Ula#ala#jla!hla$Xla~Oh%[Ow%[O~OS!ROTTO_!ROd{Of!ROh!ROm!OOv!QO$Z!PO$[zO$f|O~Oa%_Oc$hP~P9uO!U%bO!Y%cO~Or!WO{!WO!S!XO!W!YO$g!VO~Ot!Zi![!Zi!_!Zi!a!Zi$Y!Zi$]!Zi!g!Zi$_!Zid!Zic!Zi~P:|Ot!]i![!]i!_!]i!a!]i$Y!]i$]!]i!g!]i$_!]id!]ic!]i~P:|Ot!^i![!^i!_!^i!a!^i$Y!^i$]!^i!g!^i$_!^id!^ic!^i~P:|Ot#{a!a#{a$]#{a~P1xO!h%dO~O$X$kP~P`Oc$jP~P'oOc$iP~P$gOj#jOk#jOt%lO!d%nO!e%nO!f%nO$g#kO!g!bi$]!bi$_!bi$V!bi!h!bi$X!bi~P$gO$W$QOS$lXT$lXW$lXX$lX[$lX_$lXa$lXr$lX{$lX!S$lX!W$lX!j$lX!k$lX!u$lX!x$lX!z$lX!}$lX#P$lX#R$lX#U$lX#W$lX#Y$lX#]$lX#c$lX#e$lX#i$lX#l$lX#o$lX#q$lX$V$lX$[$lX$g$lX!h$lX!g$lX$]$lX$_$lX$X$lX~O!{%rO~Or%sO~O!g#WO#S$fO$]#WO$_#WO~O!g$oP#S$oP$]$oP$_$oP~P$gOc!lXk!lXr!nX~Or%xO~Oc%yOk$jO~Ot$PX!a$PX$]$PX!g$PX$_$PX~P)gOt$kO!a$ma$]$ma!g$ma$_$ma~Ok$jOt!pa!a!pa$]!pa!g!pa$_!pac!pa~O!h&SO#`&QO#a&QO$f&PO~O#f&UOS#diT#diW#diX#di[#di_#dia#dir#di{#di!S#di!W#di!j#di!k#di!u#di!x#di!z#di!}#di#P#di#R#di#U#di#W#di#Y#di#]#di#c#di#e#di#i#di#l#di#o#di#q#di$V#di$[#di$g#di!h#di!g#di$]#di$_#di$X#di~Oa&WOt$UX#m$UX~Ot$yO#m$pa~O!g#WO$]#WO$_#WO$V$ki!h$ki$X$ki~O!g$Oa$V$Oa$]$Oa$_$Oa!h$Oa$X$Oa~P`O$g#kOPiiQiijiikiiTiiaiidiimii!gii!sii$[ii$]ii$_ii!aii!vii!{ii#SiiciiSii_iifiihiitiivii!dii!eii!fii$Zii$fii$Viisii!Uii#aii#jii!hii$Xii~Oj#jOk#jO$g#kOP#xaQ#xa~Oc&[O~Oj#jOk#jO$g#kOS#vXT#vX_#vXa#vXc#vXd#vXf#vXh#vXm#vXs#vXt#vXv#vX$Z#vX$[#vX$f#vX~Os&`Ot&^Oc$hX~P$gOS$eXT$eX_$eXa$eXc$eXd$eXf$eXh$eXj$eXk$eXm$eXs$eXt$eXv$eX$Z$eX$[$eX$f$eX$g$eX~Or&aO~PMTOc&bO~O$X&dO~Ot&eOc$jX~P1xOc&gO~Ot&hOc$iX~P$gOc&jO~Oj#jOk#jO!U&kO$g#kO~Oj#jOk#jO$g#kOS#}XT#}X_#}Xa#}Xd#}Xf#}Xh#}Xm#}Xt#}Xv#}X!d#}X!e#}X!f#}X!g#}X$Z#}X$[#}X$]#}X$_#}X$f#}X$V#}X!h#}X$X#}X~Ot%lO!d&nO!e&nO!f&nO!g!bq$]!bq$_!bq$V!bq!h!bq$X!bq~P$gOr&qO~Oj#jOk#jOt&sO$g#kO!g$oX#S$oX$]$oX$_$oX~Ok$jOt$Pa!a$Pa$]$Pa!g$Pa$_$Pa~Oc&vO~P1xOR#iO!agX$]gX~O!h&yO#`&QO#a&QO$f&PO~O#f&{OS#dqT#dqW#dqX#dq[#dq_#dqa#dqr#dq{#dq!S#dq!W#dq!j#dq!k#dq!u#dq!x#dq!z#dq!}#dq#P#dq#R#dq#U#dq#W#dq#Y#dq#]#dq#c#dq#e#dq#i#dq#l#dq#o#dq#q#dq$V#dq$[#dq$g#dq!h#dq!g#dq$]#dq$_#dq$X#dq~O!a!`O#g&|O$]!aO~Oj#jOk#jO#a'OO#j'OO$g#kO~Oa'ROc#wXt#wX~P9uOt&^Oc$ha~Oj#jOk#jO!U'VO$g#kO~Oc#zXt#zX~P'oOt&eOc$ja~Oc#yXt#yX~P$gOt&hOc$ia~Oj#jOk#jO$g#kOS#}aT#}a_#}aa#}ad#}af#}ah#}am#}at#}av#}a!d#}a!e#}a!f#}a!g#}a$Z#}a$[#}a$]#}a$_#}a$f#}a$V#}a!h#}a$X#}a~Oc']Ok$jO~Ot$RX!g$RX#S$RX$]$RX$_$RX~P$gOt&sO!g$oa#S$oa$]$oa$_$oa~Oc'`O~P$gOs'eOc#wat#wa~P$gOr'fO~PMTOt&^Oc$hi~Ot&^Oc$hi~P$gOc#zat#za~P1xOc#yat#ya~P$gOc'hOk$jO~Oj#jOk#jO$g#kOt$Ra!g$Ra#S$Ra$]$Ra$_$Ra~O#g&|O~Ot&^Oc$hq~Oc#wqt#wq~P$gO$f$gj!_j~",goto:"7b$qPPPPPPPPPPP$rP$|%aP%tP'dPP'dP(aP'dPP'dP'd'd)b*_PPP*hPP$|+k$|P+qP+w+},T$|P,ZP$|P,aP$|P$|$|P,gP-x.[PPPPP$rPP'W'W.f'W'W'W'WP$rPP$rP$rPP$rP$rP$rPP$rP$rP$rP.i$rP.l.oPP$rP$rPPP$rPP$rPP$rP$rP$rP.r.x/O/n/|0S0Y0`0f0r0x1S1Y1`1f1l1rPPPPPPPPPPP1x1{2X3OPP5R5U5X5[5e6g6p7[7_akOPnu!`#c$Q%PsZOPbcnu!Z![!]!^!`#c$Q$R$n%P&esSOPbcnu!Z![!]!^!`#c$Q$R$n%P&ebZbc!Z![!]!^$R$n&e`[OPnu!`#c$Q%P!t!RT^_`adfors{!O!l#j#k#l#q$S$U$V$f$x${%^%c%h%l%m%x&^&a&h&s&u&|'O'Q'U'Y'f'le!|eij!m!x!z$j$k%s&q!u!RT^_`adfors{!O!l#j#k#l#q$S$U$V$f$x${%^%c%h%l%m%x&^&a&h&s&u&|'O'Q'U'Y'f'l!t!RT^_`adfors{!O!l#j#k#l#q$S$U$V$f$x${%^%c%h%l%m%x&^&a&h&s&u&|'O'Q'U'Y'f'lT&Q$s&R!u!ST^_`adfors{!O!l#j#k#l#q$S$U$V$f$x${%^%c%h%l%m%x&^&a&h&s&u&|'O'Q'U'Y'f'lQ#r!SQ%p$[R%q$_!t!RT^_`adfors{!O!l#j#k#l#q$S$U$V$f$x${%^%c%h%l%m%x&^&a&h&s&u&|'O'Q'U'Y'f'lQ#QgR$r#RQ!UUR#s!VQ!eWR#t!WQ#t!gR%a#vQ!fWR#u!WQ#t!fR%a#uQ!iXR#w!XQ!kYR#x!YQ!bVQ!tcQ$O!_Q$W!lQ$Z!nQ$]!oQ$a!sQ$o!}Q$u#UQ$v#VQ$w#ZQ$|#_Q&o%pQ&w&QQ&}&UQ'P&YQ'b&{Q'i']Q'j'cQ'k'dR'm'hSmOnUvP!`$QQ#buQ%Q#cR&Z%Pa]OPnu!`#c$Q%PR$h!xR#RgR#ThR$t#TQ#fxR%S#fQnOR#YnQ%^#qQ%h$S^&]%^%h&u'Q'U'Y'lQ&u%xQ'Q&^Q'U&aQ'Y&hR'l'fQ&_%^U'S&_'T'gQ'T&`R'g'UQ#m}R%Y#mQ&i%hR'Z&iQ&f%fR'X&fQ!_VR#}!_UuP!`$QS#au%PR%P#cQ%m$VR&m%mQ#dvQ%O#bT%R#d%OQ$l!yR%|$lQ$d!vR%t$dQ&t%vR'_&tQ&R$sR&x&RQ&T$wR&z&TQ$z#]R&X$zRyQSlOn]tPu!`#c$Q%P`VOPnu!`#c$Q%PQ!rbQ!scQ#y!ZQ#z![Q#{!]Q#|!^Q%f$RQ%}$nR'W&eQ}TQ!m^Q!n_Q!o`Q!paQ!vdQ#OfQ#ZoQ#_rQ#`sQ#h{Q#o!OQ$V!lQ%V#jQ%W#kQ%X#ll%]#q$S%^%h%x&^&a&h&u'Q'U'Y'f'lQ%j$US%k$V%mQ%v$fQ&V$xQ&Y${Q&c%cQ&l%lQ'^&sQ'c&|R'd'OR%`#qR%i$SR%g$RQwPQ$P!`R%e$QQ#XmW#cv#b#d%OQ$Z!nQ$^!pQ$`!rQ$e!vQ$p#OQ$q#QQ$v#VQ$}#`Q%o$XQ%u$dQ&O$rQ&o%pR&p%qQ!}eQ#VjR$X!mU!yej!mQ#UiQ$i!xQ$m!zQ%z$jQ%{$kQ&r%sR'[&qR%w$fR#^q",nodeNames:"⚠ InterpolationEnd InterpolationContinue Unit VariableName InterpolationStart LineComment Comment IndentedMixin IndentedInclude StyleSheet RuleSet UniversalSelector TagSelector TagName NestingSelector Interpolation SassVariableName ValueName ) ( ParenthesizedValue ColorLiteral NumberLiteral StringLiteral BinaryExpression BinOp LogicOp UnaryExpression LogicOp NamespacedValue CallExpression Callee ArgList : ... , CallLiteral CallTag ParenthesizedContent ClassSelector ClassName PseudoClassSelector :: PseudoClassName PseudoClassName ArgList PseudoClassName ArgList IdSelector # IdName ] AttributeSelector [ AttributeName MatchOp ChildSelector ChildOp DescendantSelector SiblingSelector SiblingOp Block { Declaration PropertyName Important Global Default ; } ImportStatement AtKeyword import KeywordQuery FeatureQuery FeatureName BinaryQuery UnaryQuery ParenthesizedQuery SelectorQuery selector IncludeStatement include Keyword MixinStatement mixin UseStatement use Keyword ExtendStatement extend RootStatement at-root ForwardStatement forward Keyword MediaStatement media CharsetStatement charset NamespaceStatement namespace NamespaceName KeyframesStatement keyframes KeyframeName KeyframeList Keyword Keyword SupportsStatement supports IfStatement ControlKeyword ControlKeyword Keyword ForStatement ControlKeyword Keyword EachStatement ControlKeyword Keyword WhileStatement ControlKeyword OutputStatement ControlKeyword AtRule Styles",maxTerm:170,context:Se,nodeProps:[["openedBy",1,"InterpolationStart",5,"InterpolationEnd",19,"(",70,"{"],["closedBy",20,")",63,"}"]],propSources:[he],skippedNodes:[0,6,7,128],repeatNodeCount:17,tokenData:"!!]~RyOq#rqr$jrs0jst2^tu8{uv;hvw;ywx<[xy=yyz>[z{>a{|>z|}Cm}!ODO!O!PDm!P!Q;h!Q![FW![!]GR!]!^G}!^!_H`!_!`Hw!`!aI`!a!b#r!b!cJa!c!}#r!}#OKy#O#P#r#P#QL[#Q#RLm#R#T#r#T#UMS#U#c#r#c#dNe#d#o#r#o#pNz#p#qLm#q#r! ]#r#s! n#s;'S#r;'S;=`!!V<%lO#rW#uSOy$Rz;'S$R;'S;=`$d<%lO$RW$WSwWOy$Rz;'S$R;'S;=`$d<%lO$RW$gP;=`<%l$RY$m[Oy$Rz!_$R!_!`%c!`#W$R#W#X%v#X#Z$R#Z#[)Z#[#]$R#]#^,V#^;'S$R;'S;=`$d<%lO$RY%jSwWjQOy$Rz;'S$R;'S;=`$d<%lO$RY%{UwWOy$Rz#X$R#X#Y&_#Y;'S$R;'S;=`$d<%lO$RY&dUwWOy$Rz#Y$R#Y#Z&v#Z;'S$R;'S;=`$d<%lO$RY&{UwWOy$Rz#T$R#T#U'_#U;'S$R;'S;=`$d<%lO$RY'dUwWOy$Rz#i$R#i#j'v#j;'S$R;'S;=`$d<%lO$RY'{UwWOy$Rz#`$R#`#a(_#a;'S$R;'S;=`$d<%lO$RY(dUwWOy$Rz#h$R#h#i(v#i;'S$R;'S;=`$d<%lO$RY(}S!fQwWOy$Rz;'S$R;'S;=`$d<%lO$RY)`UwWOy$Rz#`$R#`#a)r#a;'S$R;'S;=`$d<%lO$RY)wUwWOy$Rz#c$R#c#d*Z#d;'S$R;'S;=`$d<%lO$RY*`UwWOy$Rz#U$R#U#V*r#V;'S$R;'S;=`$d<%lO$RY*wUwWOy$Rz#T$R#T#U+Z#U;'S$R;'S;=`$d<%lO$RY+`UwWOy$Rz#`$R#`#a+r#a;'S$R;'S;=`$d<%lO$RY+yS!eQwWOy$Rz;'S$R;'S;=`$d<%lO$RY,[UwWOy$Rz#a$R#a#b,n#b;'S$R;'S;=`$d<%lO$RY,sUwWOy$Rz#d$R#d#e-V#e;'S$R;'S;=`$d<%lO$RY-[UwWOy$Rz#c$R#c#d-n#d;'S$R;'S;=`$d<%lO$RY-sUwWOy$Rz#f$R#f#g.V#g;'S$R;'S;=`$d<%lO$RY.[UwWOy$Rz#h$R#h#i.n#i;'S$R;'S;=`$d<%lO$RY.sUwWOy$Rz#T$R#T#U/V#U;'S$R;'S;=`$d<%lO$RY/[UwWOy$Rz#b$R#b#c/n#c;'S$R;'S;=`$d<%lO$RY/sUwWOy$Rz#h$R#h#i0V#i;'S$R;'S;=`$d<%lO$RY0^S!dQwWOy$Rz;'S$R;'S;=`$d<%lO$R~0mWOY0jZr0jrs1Vs#O0j#O#P1[#P;'S0j;'S;=`2W<%lO0j~1[Oh~~1_RO;'S0j;'S;=`1h;=`O0j~1kXOY0jZr0jrs1Vs#O0j#O#P1[#P;'S0j;'S;=`2W;=`<%l0j<%lO0j~2ZP;=`<%l0jZ2cY!SPOy$Rz!Q$R!Q![3R![!c$R!c!i3R!i#T$R#T#Z3R#Z;'S$R;'S;=`$d<%lO$RY3WYwWOy$Rz!Q$R!Q![3v![!c$R!c!i3v!i#T$R#T#Z3v#Z;'S$R;'S;=`$d<%lO$RY3{YwWOy$Rz!Q$R!Q![4k![!c$R!c!i4k!i#T$R#T#Z4k#Z;'S$R;'S;=`$d<%lO$RY4rYfQwWOy$Rz!Q$R!Q![5b![!c$R!c!i5b!i#T$R#T#Z5b#Z;'S$R;'S;=`$d<%lO$RY5iYfQwWOy$Rz!Q$R!Q![6X![!c$R!c!i6X!i#T$R#T#Z6X#Z;'S$R;'S;=`$d<%lO$RY6^YwWOy$Rz!Q$R!Q![6|![!c$R!c!i6|!i#T$R#T#Z6|#Z;'S$R;'S;=`$d<%lO$RY7TYfQwWOy$Rz!Q$R!Q![7s![!c$R!c!i7s!i#T$R#T#Z7s#Z;'S$R;'S;=`$d<%lO$RY7xYwWOy$Rz!Q$R!Q![8h![!c$R!c!i8h!i#T$R#T#Z8h#Z;'S$R;'S;=`$d<%lO$RY8oSfQwWOy$Rz;'S$R;'S;=`$d<%lO$R_9O`Oy$Rz}$R}!O:Q!O!Q$R!Q![:Q![!_$R!_!`;T!`!c$R!c!}:Q!}#R$R#R#S:Q#S#T$R#T#o:Q#o;'S$R;'S;=`$d<%lO$RZ:X^wWaROy$Rz}$R}!O:Q!O!Q$R!Q![:Q![!c$R!c!}:Q!}#R$R#R#S:Q#S#T$R#T#o:Q#o;'S$R;'S;=`$d<%lO$R[;[S!YSwWOy$Rz;'S$R;'S;=`$d<%lO$RY;mSjQOy$Rz;'S$R;'S;=`$d<%lO$RZ<OS_ROy$Rz;'S$R;'S;=`$d<%lO$R~<_WOY<[Zw<[wx1Vx#O<[#O#P<w#P;'S<[;'S;=`=s<%lO<[~<zRO;'S<[;'S;=`=T;=`O<[~=WXOY<[Zw<[wx1Vx#O<[#O#P<w#P;'S<[;'S;=`=s;=`<%l<[<%lO<[~=vP;=`<%l<[Z>OSdROy$Rz;'S$R;'S;=`$d<%lO$R~>aOc~_>hU[PjQOy$Rz!_$R!_!`;T!`;'S$R;'S;=`$d<%lO$RZ?RWjQ!_POy$Rz!O$R!O!P?k!P!Q$R!Q![Bp![;'S$R;'S;=`$d<%lO$RZ?pUwWOy$Rz!Q$R!Q![@S![;'S$R;'S;=`$d<%lO$RZ@ZYwW$fROy$Rz!Q$R!Q![@S![!g$R!g!h@y!h#X$R#X#Y@y#Y;'S$R;'S;=`$d<%lO$RZAOYwWOy$Rz{$R{|An|}$R}!OAn!O!Q$R!Q![BV![;'S$R;'S;=`$d<%lO$RZAsUwWOy$Rz!Q$R!Q![BV![;'S$R;'S;=`$d<%lO$RZB^UwW$fROy$Rz!Q$R!Q![BV![;'S$R;'S;=`$d<%lO$RZBw[wW$fROy$Rz!O$R!O!P@S!P!Q$R!Q![Bp![!g$R!g!h@y!h#X$R#X#Y@y#Y;'S$R;'S;=`$d<%lO$RZCrStROy$Rz;'S$R;'S;=`$d<%lO$RZDTWjQOy$Rz!O$R!O!P?k!P!Q$R!Q![Bp![;'S$R;'S;=`$d<%lO$RZDrW$gROy$Rz!O$R!O!PE[!P!Q$R!Q![@S![;'S$R;'S;=`$d<%lO$RYEaUwWOy$Rz!O$R!O!PEs!P;'S$R;'S;=`$d<%lO$RYEzSsQwWOy$Rz;'S$R;'S;=`$d<%lO$RZF][$fROy$Rz!O$R!O!P@S!P!Q$R!Q![Bp![!g$R!g!h@y!h#X$R#X#Y@y#Y;'S$R;'S;=`$d<%lO$RZGWUrROy$Rz![$R![!]Gj!];'S$R;'S;=`$d<%lO$RXGqS{PwWOy$Rz;'S$R;'S;=`$d<%lO$RZHSS!gROy$Rz;'S$R;'S;=`$d<%lO$RYHeUjQOy$Rz!_$R!_!`%c!`;'S$R;'S;=`$d<%lO$R^H|U!YSOy$Rz!_$R!_!`%c!`;'S$R;'S;=`$d<%lO$RZIgV![PjQOy$Rz!_$R!_!`%c!`!aI|!a;'S$R;'S;=`$d<%lO$RXJTS![PwWOy$Rz;'S$R;'S;=`$d<%lO$RXJdWOy$Rz!c$R!c!}J|!}#T$R#T#oJ|#o;'S$R;'S;=`$d<%lO$RXKT[!jPwWOy$Rz}$R}!OJ|!O!Q$R!Q![J|![!c$R!c!}J|!}#T$R#T#oJ|#o;'S$R;'S;=`$d<%lO$RXLOS!WPOy$Rz;'S$R;'S;=`$d<%lO$R^LaS!UUOy$Rz;'S$R;'S;=`$d<%lO$R[LpUOy$Rz!_$R!_!`;T!`;'S$R;'S;=`$d<%lO$RZMVUOy$Rz#b$R#b#cMi#c;'S$R;'S;=`$d<%lO$RZMnUwWOy$Rz#W$R#W#XNQ#X;'S$R;'S;=`$d<%lO$RZNXSkRwWOy$Rz;'S$R;'S;=`$d<%lO$RZNhUOy$Rz#f$R#f#gNQ#g;'S$R;'S;=`$d<%lO$RZ! PS!aROy$Rz;'S$R;'S;=`$d<%lO$RZ! bS!hROy$Rz;'S$R;'S;=`$d<%lO$R]! sU!_POy$Rz!_$R!_!`;T!`;'S$R;'S;=`$d<%lO$RW!!YP;=`<%l#r",tokenizers:[ne,me,Qe,Re,ge,se,oe,ce,0,1,2,3],topRules:{StyleSheet:[0,10],Styles:[1,127]},dialects:{indented:0},specialized:[{term:150,get:e=>ve[e]||-1},{term:149,get:e=>pe[e]||-1},{term:72,get:e=>be[e]||-1}],tokenPrec:2798}),v=E.define({name:"sass",parser:Pe.configure({props:[W.add({Block:F,Comment(e,r){return{from:e.from+2,to:r.sliceDoc(e.to-2,e.to)=="*/"?e.to-2:e.to}}}),Z.add({Declaration:I()})]}),languageData:{commentTokens:{block:{open:"/*",close:"*/"},line:"//"},indentOnInput:/^\s*\}$/,wordChars:"$-"}}),Xe=v.configure({dialect:"indented",props:[Z.add({"Block RuleSet":e=>e.baseIndent+e.unit}),W.add({Block:e=>({from:e.from,to:e.to})})]}),xe=D(e=>e.name=="VariableName"||e.name=="SassVariableName");function m(e){return new C(e!=null&&e.indented?Xe:v,v.data.of({autocomplete:xe}))}const we=()=>{const e=X.useRef(),r=X.useRef();return a.jsx(a.Fragment,{children:a.jsxs("div",{className:"layout-all",children:[a.jsxs("div",{className:"layout-title",children:[a.jsx("h1",{children:"Variable"}),a.jsxs("p",{className:"description",children:["NDS-UI는 컴포넌트의 CSS값을 변수(Variable)로 지정해놓았습니다. ",a.jsx("br",{}),"그래서 커스텀을 할 때 별도의 CSS파일을 만들어서 수정할 수 있지만 ",a.jsx("br",{}),"그냥 변수 값만 바꿔서 수정할 수 있습니다."]})]}),a.jsx("div",{className:"layout-small",children:a.jsxs("div",{className:"layout-title",children:[a.jsx("h2",{ref:e,children:"Setting"}),a.jsxs("p",{className:"description",children:["scss파일을 하나 만들어줍니다. ",a.jsx("br",{}),"'nds-ui/css/_variable.scss'에 보시면 :root 부분이 있을겁니다. ",a.jsx("br",{}),"이 :root 부분을 전체 복사해서 가져옵니다. 수정하고 싶은 부분을 수정하면 반영됩니다. ",a.jsx("br",{}),"(수정하지 않는 부분은 평소에 주석처리 해주세요)"]}),a.jsx("div",{className:"codeMirror",children:a.jsx(Q,{theme:"dark",extensions:[m({sass:!0})],value:`:root {
  // mode
  &[data-theme = "light"] {
    --set-black    : 0,0,0             ;
    --set-white    : 255,255,255       ;
    --set-primary  : 63,70,243         ;
    --primary_light: rgb(121,126,252);
    --primary_deep : rgb(10,19,225)  ;
    
    --set-secondary  : 225,20,81        ;
    --secondary_light: rgb(244,63,118);
    --secondary_deep : rgb(198,1,60)  ;
    
    --set-tertiary  : 18,170,161       ;
    --tertiary_light: rgb(38,206,196);
    --tertiary_deep : rgb(10,142,135);

    --notification: rgb(237,46,46) ;
    --success     : rgb(14,218,108);
    --warning     : rgb(252,166,0) ;
     
    --gray1-100 : #111   ;
    --gray2-100 : #222   ;
    --gray3-100 : #333   ;
    --gray4-100 : #444   ;
    --gray5-100 : #555   ;
    --gray6-100 : #666   ;
    --gray7-100 : #777   ;
    --gray8-100 : #888   ;
    --gray9-100 : #999   ;
    --graya-100 : #aaa   ;
    --grayb-100 : #bbb   ;
    --grayc-100 : #ccc   ;
    --grayd-100 : #ddd   ;
    --graye-100 : #eee   ;
    --grayf5-100: #0a0a0a;
    --grayf8-100: #070707;
  } 
  &[data-theme = "dark"] {
    background-color: rgb(0,0,0,0.8)  ;
    --set-black     : 255,255,255       ;
    --set-white     : 0,0,0             ;
    --set-primary   : 108,114,254       ;
    --primary_light : rgb(60,67,238)  ;
    --primary_deep  : rgb(137,142,255);
    
    --set-secondary  : 245,62,117        ;
    --secondary_light: rgb(226,29,88)  ;
    --secondary_deep : rgb(243,122,158);
    
    --set-tertiary  : 56,227,217        ;
    --tertiary_light: rgb(15,176,167) ;
    --tertiary_deep : rgb(149,255,249);

    --notification: rgb(250,84,84) ;
    --success     : rgb(70,233,145);
    --warning     : rgb(255,184,46);

    --gray1-100 : #eee   ;
    --gray2-100 : #ddd   ;
    --gray3-100 : #ccc   ;
    --gray4-100 : #bbb   ;
    --gray5-100 : #aaa   ;
    --gray6-100 : #999   ;
    --gray7-100 : #888   ;
    --gray8-100 : #777   ;
    --gray9-100 : #666   ;
    --graya-100 : #555   ;
    --grayb-100 : #444   ;
    --grayc-100 : #333   ;
    --grayd-100 : #222   ;
    --graye-100 : #111   ;
    --grayf5-100: #f5f5f5;
    --grayf8-100: #f8f8f8;
  }
  // font
  --font: Pretendard, sans-serif;

  // radius
  --radius: 5rem;
  // color
  --black    : rgb(var(--set-black))    ;
  --white    : rgb(var(--set-white))    ;
  --primary  : rgb(var(--set-primary))  ;
  --secondary: rgb(var(--set-secondary));
  --tertiary : rgb(var(--set-tertiary)) ;

  --disabled      : var(--grayc);
  --disabled_deep : var(--graya);

  --gray1:  rgb(var(--set-black), 0.933);
  --gray2:  rgb(var(--set-black), 0.866);
  --gray3:  rgb(var(--set-black), 0.8  );
  --gray4:  rgb(var(--set-black), 0.733);
  --gray5:  rgb(var(--set-black), 0.666);
  --gray6:  rgb(var(--set-black), 0.6  );
  --gray7:  rgb(var(--set-black), 0.533);
  --gray8:  rgb(var(--set-black), 0.466);
  --gray9:  rgb(var(--set-black), 0.4  );
  --graya:  rgb(var(--set-black), 0.333);
  --grayb:  rgb(var(--set-black), 0.266);
  --grayc:  rgb(var(--set-black), 0.2  );
  --grayd:  rgb(var(--set-black), 0.133);
  --graye:  rgb(var(--set-black), 0.066);
  --grayf5: rgb(var(--set-black), 0.04 );
  --grayf8: rgb(var(--set-black), 0.027);

  --transparent: rgb(var(--set-black), 0)  ;
  --white3     : rgb(var(--set-white), 0.8);
  --white6     : rgb(var(--set-white), 0.6);
  --white9     : rgb(var(--set-white), 0.4);
  --whitec     : rgb(var(--set-white), 0.2);

  --shadow: 0 0 8rem 0 var(--grayc);

  --backdrop : var(--gray9);

  --avatar1  : rgb(208, 23, 57)  ;
  --avatar2  : rgb(235, 104, 9)  ;
  --avatar3  : rgb(244, 180, 15) ;
  --avatar4  : rgb(22, 206, 41)  ;
  --avatar5  : rgb(22, 170, 126) ;
  --avatar6  : rgb(11, 167, 217) ;
  --avatar7  : rgb(22, 63, 206)  ;
  --avatar8  : rgb(108, 27, 210) ;
  --avatar9  : rgb(217, 11, 209) ;
  --avatar10 : rgb(128, 128, 128);

  // accordion
  --accordion-otl: 1px solid var(--grayc);
  --accordion-h : 36rem;
  --accordion-font-size: 14rem;
  --accordion-color : var(--gray6);
  --accordion-p: 0rem 10rem;
  --accordion-gap: 10rem;
  --accordion-hover: var(--grayd);

  // avatar
  --avatar-size-large     : 44rem;
  --avatar-size-medium    : 34rem;
  --avatar-size-small     : 28rem;
  --avatar-size-extraSmall: 24rem;
  
  // badge
  --badge-size: 16rem;
  --badge-size-dot: 10rem;

  // btn
  --btn-size-large     : 44rem;
  --btn-size-medium    : 34rem;
  --btn-size-small     : 28rem;
  --btn-size-extraSmall: 24rem;
  --btn-txt-large     : 14rem;
  --btn-txt-medium    : 13rem;
  --btn-txt-small     : 12rem;
  --btn-txt-extraSmall: 12rem;
  --btn-p-large     : 0 30rem;
  --btn-p-medium    : 0 20rem;
  --btn-p-small     : 0 10rem;
  --btn-p-extraSmall: 0 5rem ;
  --btn-shadow : var(--shadow);
  
  // checkbox
  --checkbox: var(--gray6);
  --checkbox-disabled : var(--gray9);
  --checkbox-size-large     : 24rem;
  --checkbox-size-medium    : 20rem;
  --checkbox-size-small     : 16rem;
  --checkbox-size-extraSmall: 14rem;
  --checkbox-ripple-size-large     : calc(var(--checkbox-size-large) * 2)     ;
  --checkbox-ripple-size-medium    : calc(var(--checkbox-size-medium) * 2)    ;
  --checkbox-ripple-size-small     : calc(var(--checkbox-size-small) * 2)     ;
  --checkbox-ripple-size-extraSmall: calc(var(--checkbox-size-extraSmall) * 2);
  
  // chip
  --chip-p-large      : 15rem;
  --chip-p-medium     : 10rem;
  --chip-p-small      : 5rem ;
  --chip-p-extraSmall : 5rem ;
  --chip-btnp-large      : 7rem;
  --chip-btnp-medium     : 5rem;
  --chip-btnp-small      : 5rem;
  --chip-btnp-extraSmall : 3rem;

  // location
  --location-gap : 5rem;
  --location-font-size: 12rem;
  --location-light: var(--gray9);
  --location-light-hover: var(--gray6);
  --location-bold: var(--black);

  // popover
  --popover-bg : var(--white);
  --popover-otl : 1px solid var(--grayc);
  --popover-z: 100;
  --popover-shadow : var(--shadow);

  // radio
  --radio: var(--gray6);
  --radio-disabled : var(--gray9);
  --radio-size-large     : 24rem;
  --radio-size-medium    : 20rem;
  --radio-size-small     : 16rem;
  --radio-size-extraSmall: 14rem;
  --radio-ripple-size-large     : calc(var(--radio-size-large) * 2)     ;
  --radio-ripple-size-medium    : calc(var(--radio-size-medium) * 2)    ;
  --radio-ripple-size-small     : calc(var(--radio-size-small) * 2)     ;
  --radio-ripple-size-extraSmall: calc(var(--radio-size-extraSmall) * 2);

  // select 
  --select-size-large     : 44rem;
  --select-size-medium    : 34rem;
  --select-size-small     : 28rem;
  --select-size-extraSmall: 24rem;
  --select-txt-large     :  14rem;
  --select-txt-medium    :  13rem;
  --select-txt-small     :  12rem;
  --select-txt-extraSmall:  12rem;
  --select-p-large     : 0 15rem;
  --select-p-medium    : 0 13rem;
  --select-p-small     : 0 11rem;
  --select-p-extraSmall: 0 9rem ;
  --select-width: 300rem;

  --select-disabled-bg : var(--grayc);
  --select-disabled-otl : var(--transparent);

  --select-option-max-h: 300rem;

  // switch
  --switch-width: 24rem;
  --switch-height: 14rem;
  --switch-btn-width: 10rem;
  --switch-btn-height: 10rem;
  --switch-padding: calc((var(--switch-height) - var(--switch-btn-height)) / 2);
  --switch-ml: calc(var(--switch-width) - (var(--switch-padding) * 2) - var(--switch-btn-width));
  --switch-unchecked : var(--gray9);
  --switch-disabled : var(--grayc);

  // table
  --table-otl       : 1px solid var(--gray9);
  --table-th-bg     : var(--graye-100);
  --table-th-color  : var(--black);
  --table-td-otlb   : 1px dashed var(--grayc);
  --talbe-td-color  : var(--gray6);
  --talbe-folding-bg: var(--grayf5);

  // textfield
  --textfield-size-large     : 44rem;
  --textfield-size-medium    : 34rem;
  --textfield-size-small     : 28rem;
  --textfield-size-extraSmall: 24rem;
  --textfield-txt-large     :  14rem;
  --textfield-txt-medium    :  13rem;
  --textfield-txt-small     :  12rem;
  --textfield-txt-extraSmall:  12rem;
  --textfield-p-large     : 0 15rem;
  --textfield-p-medium    : 0 13rem;
  --textfield-p-small     : 0 11rem;
  --textfield-p-extraSmall: 0 9rem ;
  --textfield-color: var(--gray9);
  --textfield-focus-color: var(--gray6);
  --textfield-otl: var(--grayc);
  --textfield-focus-otl: var(--gray6);
  --textfield-placeholder-color: var(--gray9);
  --textfield-focus-placeholder-color: var(--gray6);
  --textfield-read-only-bg: var(--graye);
  --textfield-disabled-bg: var(--grayc);
  --textfield-disabled-otl: var(--transparent);

  --textfield-wrap-gap : 3rem;

  --textfield-helpertext-color: var(--gray6);

  --textarea-otl: var(--grayc);
  --textarea-focus-otl: var(--gray6);
  --textarea-font-size: 12rem;
  --textarea-p: 12rem 12rem;
  
  // tooltip
  --tooltip-margin : 5rem;
  --tooltip-size-large      : 8rem 15rem;
  --tooltip-size-medium     : 5rem 10rem;
  --tooltip-size-small      : 3rem 7rem;
  --tooltip-size-extraSmall : 2rem 5rem;
  --tooltip-font-size-large      : 13rem;
  --tooltip-font-size-medium     : 12rem;
  --tooltip-font-size-small      : 11rem;
  --tooltip-font-size-extraSmall : 10rem;

  // tree
  --tree-h : 36rem;
  --tree-font-size: 14rem;
  --tree-color : var(--gray6);
  --tree-p: 0rem 10rem;
  --tree-gap: 10rem;
  --tree-hover: var(--grayd);
  --tree-detail-pl: 20rem;
  --tree-item-h : 36rem;
  --tree-item-font-size: 14rem;
  --tree-item-p: 0rem 10rem;
  --tree-item-gap: 10rem;

  // popup
  --popup-bg : var(--white);
  --popup-otl : 1px solid var(--grayc);
  --popup-z: 100;
}`})}),a.jsx("p",{className:"description flex gap10",children:"예를 들어서 Primary 컬러를 바꾸고 싶다면 --set-primary 의 값을 바꾸면 됩니다. (버튼을 눌르면 Primary 컬러가 바뀝니다.)"}),a.jsxs("div",{className:"flex gap10",children:[a.jsx(x,{className:"width100",variant:"contained",onClick:()=>{document.documentElement.style.setProperty("--set-primary","0,0,0")},children:"--set-primary : 0,0,0"}),a.jsx(x,{className:"width100",variant:"contained",onClick:()=>{document.documentElement.style.setProperty("--set-primary","63,70,243")},children:"--set-primary : 63,70,243"})]})]})}),a.jsx("div",{className:"layout-small",children:a.jsxs("div",{className:"layout-title",children:[a.jsx("h2",{ref:r,children:"Color Array"}),a.jsxs("p",{className:"description",children:["색상 또한 변수를 사용하는데, 자주 쓰는 색상은 배열로 모아놓습니다. ",a.jsx("br",{}),"크게 colors / grays / main 3가지 배열이 있습니다. ",a.jsx("br",{}),"이 배열은 컴포넌트에 사용이 되며, 나중에 해당 컴포넌트에 사용할 수 있는 색상이 무엇이 있는지 알기 위해 참고할 수 있습니다."]})]})}),a.jsx("div",{className:"layout-small",children:a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"$colors"}),a.jsx("p",{className:"description",children:"유채색과 무채색(투명도 유/무) 모두 모아놓은 배열입니다."}),a.jsx("div",{className:"codeMirror",children:a.jsx(Q,{theme:"dark",extensions:[m({sass:!0})],value:`$colors: (
  "primary" : var(--primary),
  "primary_light" : var(--primary_light),
  "primary_deep" : var(--primary_deep),
  "secondary" : var(--secondary),
  "secondary_light" : var(--secondary_light),
  "secondary_deep" : var(--secondary_deep),
  "tertiary" : var(--tertiary),
  "tertiary_light" : var(--tertiary_light),
  "tertiary_deep" : var(--tertiary_deep),
  "notification": var(--notification),
  "success": var(--success),
  "warning": var(--warning),
  "black" : var(--black),
  "gray1"  : var(--gray1) ,
  "gray2"  : var(--gray2) ,
  "gray3"  : var(--gray3) ,
  "gray4"  : var(--gray4) ,
  "gray5"  : var(--gray5) ,
  "gray6"  : var(--gray6) ,
  "gray7"  : var(--gray7) ,
  "gray8"  : var(--gray8) ,
  "gray9"  : var(--gray9) ,
  "graya"  : var(--graya) ,
  "grayb"  : var(--grayb) ,
  "grayc"  : var(--grayc) ,
  "grayd"  : var(--grayd) ,
  "graye"  : var(--graye) ,
  "grayf5" : var(--grayf5),
  "grayf8" : var(--grayf8),
  "gray1-100"  : var(--gray1-100) ,
  "gray2-100"  : var(--gray2-100) ,
  "gray3-100"  : var(--gray3-100) ,
  "gray4-100"  : var(--gray4-100) ,
  "gray5-100"  : var(--gray5-100) ,
  "gray6-100"  : var(--gray6-100) ,
  "gray7-100"  : var(--gray7-100) ,
  "gray8-100"  : var(--gray8-100) ,
  "gray9-100"  : var(--gray9-100) ,
  "graya-100"  : var(--graya-100) ,
  "grayb-100"  : var(--grayb-100) ,
  "grayc-100"  : var(--grayc-100) ,
  "grayd-100"  : var(--grayd-100) ,
  "graye-100"  : var(--graye-100) ,
  "grayf5-100" : var(--grayf5-100),
  "grayf8-100" : var(--grayf8-100),
  "white"  : var(--white) ,
  "white3" : var(--white3),
  "white6" : var(--white6),
  "white9" : var(--white9),
  "whitec" : var(--whitec),
  "transparent" : var(--transparent),
  "disabled" : var(--disabled),
  "disabled_deep" : var(--disabled_deep),
);`})})]})}),a.jsx("div",{className:"layout-small",children:a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"$grays"}),a.jsx("p",{className:"description",children:"무채색(투명도 x)만 모아놓은 배열입니다."}),a.jsx("div",{className:"codeMirror",children:a.jsx(Q,{theme:"dark",extensions:[m({sass:!0})],value:`$grays: (
  "black"  : var(--black)     ,
  "white"  : var(--white)     ,
  "gray1"  : var(--gray1-100) ,
  "gray2"  : var(--gray2-100) ,
  "gray3"  : var(--gray3-100) ,
  "gray4"  : var(--gray4-100) ,
  "gray5"  : var(--gray5-100) ,
  "gray6"  : var(--gray6-100) ,
  "gray7"  : var(--gray7-100) ,
  "gray8"  : var(--gray8-100) ,
  "gray9"  : var(--gray9-100) ,
  "graya"  : var(--graya-100) ,
  "grayb"  : var(--grayb-100) ,
  "grayc"  : var(--grayc-100) ,
  "grayd"  : var(--grayd-100) ,
  "graye"  : var(--graye-100) ,
  "grayf5" : var(--grayf5-100),
  "grayf8" : var(--grayf8-100),
);`})})]})}),a.jsx("div",{className:"layout-small",children:a.jsxs("div",{className:"layout-title",children:[a.jsx("h3",{children:"$main"}),a.jsx("p",{className:"description",children:"주요색상만 모아놓은 배열입니다."}),a.jsx("div",{className:"codeMirror",children:a.jsx(Q,{theme:"dark",extensions:[m({sass:!0})],value:`$main : (
  "primary" : var(--set-primary),
  "secondary" : var(--set-secondary),
  "tertiary" : var(--set-tertiary),
  "black" : var(--set-black),
  "white" : var(--set-white),
);`})})]})}),a.jsxs("div",{className:"layout-scroll",children:[a.jsx("p",{children:"Classes"}),a.jsx("a",{onClick:()=>{e.current.scrollIntoView()},children:" Setting "}),a.jsx("a",{onClick:()=>{r.current.scrollIntoView()},children:" Color Array "})]})]})})};export{we as default};
