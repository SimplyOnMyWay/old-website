var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(function(w){var vuid_assigned=false,vuid,parts,img,send_beacon_support=typeof w.navigator.sendBeacon==="function",beacon_url="https://web.archive.org/web/20210305013947/https://vimeo.com/ablincoln/vuid",j;function _getrandmax(){return 2147483647}function _rand(max,min){if(arguments.length===0){min=0;max=_getrandmax()}return Math.floor(Math.random()*(max-min+1))+min}function _microtime(get_as_float){var now=(new Date).getTime()/1e3,s=parseInt(now,10);return get_as_float?now:Math.round((now-s)*1e3)/1e3+" "+s}function _round(value,precision,mode){var m,f,isHalf,sgn;precision|=0;m=Math.pow(10,precision);value*=m;sgn=value>0|-(value<0);isHalf=value%1===.5*sgn;f=Math.floor(value);if(isHalf){value=f+(sgn>0)}return(isHalf?value:Math.round(value))/m}function _ord(string){var str=string+"",code=str.charCodeAt(0),hi,low;if(55296<=code&&code<=56319){hi=code;if(str.length===1){return code}low=str.charCodeAt(1);return(hi-55296)*1024+(low-56320)+65536}if(56320<=code&&code<=57343){return code}return code}function _generate32bitRandom(){return _round(_rand()/_getrandmax()*2147483647)}function _generateHash(string_arg){var string=string_arg.toString(),hash=1,pos,current,leftMost7;if(typeof string!=="undefined"&&string!==""){hash=0;pos=string.length-1;for(pos;pos>=0;pos--){current=_ord(string.charAt(pos));hash=(hash<<6&268435455)+current+(current<<14);leftMost7=hash&266338304;if(leftMost7){hash^=leftMost7>>21}}}return hash}function _cookie(name,value,ttl,path,domain,secure,samesite){var future_date,cookie;if(arguments.length>1){if(ttl){future_date=new Date;future_date.setDate(future_date.getDate()+ttl)}document.cookie=name+"="+encodeURIComponent(value)+(future_date?"; expires="+future_date.toGMTString():"")+(path?"; path="+path:"")+(domain?"; domain="+domain:"")+(secure?"; secure":"")+(samesite?"; samesite="+samesite:"");return true}return decodeURIComponent((("; "+document.cookie).split("; "+name+"=")[1]||"").split(";")[0])}vuid={cookie:_cookie("vuid")};if(!vuid.cookie){vuid.cookie="pl"+((_generate32bitRandom()^_generateHash(_microtime()))&2147483647).toString()+"."+((_generate32bitRandom()^_generateHash(w.navigator.userAgent)).toString()&2147483647);vuid_assigned=true}parts=w.location.hostname.split(".");if(parts.length>2){parts.shift()}_cookie("vuid",vuid.cookie,365*2,"/","."+parts.join("."),true,"None");if(vuid_assigned&&_cookie("vuid")){if(typeof w._vuid==="object"&&w._vuid.length){for(j=0;j<w._vuid.length;j++){if(typeof w._vuid[j]==="object"&&w._vuid[j].length){beacon_url+=(j===0?"?":"&")+w._vuid[j][0]+(w._vuid[j][1]?"="+w._vuid[j][1]:"")}}}if(send_beacon_support){w.navigator.sendBeacon(beacon_url)}else{img=new Image;img.src=beacon_url}}})(window);

}
/*
     FILE ARCHIVED ON 01:39:47 Mar 05, 2021 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 09:35:06 Mar 05, 2021.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  exclusion.robots: 0.107
  exclusion.robots.policy: 0.098
  RedisCDXSource: 4.32
  esindex: 0.008
  LoadShardBlock: 582.39 (6)
  PetaboxLoader3.datanode: 230.032 (7)
  CDXLines.iter: 21.857 (3)
  PetaboxLoader3.resolve: 309.144 (3)
  load_resource: 155.292
*/