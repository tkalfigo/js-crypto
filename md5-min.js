md5=function(f,i){function j(d,c){return(d>>f)+(c>>f)+((c=(d&i)+(c&i))>>f)<<f|c&i}for(var n=[],k=0;64>k;)n[k]=0|4294967296*Math.abs(Math.sin(++k));return function(d){for(var c,h,g,a,l=[],d=unescape(encodeURIComponent(d)),b=d.length,m=[c=1732584193,h=-271733879,~c,~h],e=0;e<=b;)l[e>>2]|=(d.charCodeAt(e)||128)<<8*(e++%4);l[d=(b+8>>6)*f+14]=8*b;for(e=0;e<d;e+=f){for(b=m.slice(a=0);64>a;){var i=g=b[3],k=c=b[1];g=j(j(b[0],[c&(h=b[2])|~c&g,g&c|~g&h,c^h^g,h^(c|~g)][b=a>>4]),j(n[a],l[[a,5*a+1,3*a+5,7*a][b]%f+e]));b=[7,12,17,22,5,9,14,20,4,11,f,23,6,10,15,21][4*b+a++%4];b=[i,j(k,g<<b|g>>>32-b),c,h]}for(a=4;a;)m[--a]=j(m[a],b[a])}for(d="";32>a;)d+=(m[a>>3]>>4*(1^a++&7)&15).toString(f);return d}}(16,65535);
