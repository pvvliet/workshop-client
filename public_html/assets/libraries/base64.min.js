/*
 * Copyright (c) 2010 Nick Galbreath
 * http://code.google.com/p/stringencoders/source/browse/#svn/trunk/javascript
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

/* base64 encode/decode compatible with window.btoa/atob
 *
 * window.atob/btoa is a Firefox extension to convert binary data (the "b")
 * to base64 (ascii, the "a").
 *
 * It is also found in Safari and Chrome.  It is not available in IE.
 *
 * if (!window.btoa) window.btoa = base64.encode
 * if (!window.atob) window.atob = base64.decode
 *
 * The original spec's for atob/btoa are a bit lacking
 * https://developer.mozilla.org/en/DOM/window.atob
 * https://developer.mozilla.org/en/DOM/window.btoa
 *
 * window.btoa and base64.encode takes a string where charCodeAt is [0,255]
 * If any character is not [0,255], then an DOMException(5) is thrown.
 *
 * window.atob and base64.decode take a base64-encoded string
 * If the input length is not a multiple of 4, or contains invalid characters
 *   then an DOMException(5) is thrown.
 */
var base64={};base64.PADCHAR="=";base64.ALPHA="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";base64.makeDOMException=function(){var e,t;try{return new DOMException(DOMException.INVALID_CHARACTER_ERR)}catch(t){var n=new Error("DOM Exception 5");n.code=n.number=5;n.name=n.description="INVALID_CHARACTER_ERR";n.toString=function(){return"Error: "+n.name+": "+n.message};return n}};base64.getbyte64=function(e,t){var n=base64.ALPHA.indexOf(e.charAt(t));if(n===-1){throw base64.makeDOMException()}return n};base64.decode=function(e){e=""+e;var t=base64.getbyte64;var n,r,i;var s=e.length;if(s===0){return e}if(s%4!==0){throw base64.makeDOMException()}n=0;if(e.charAt(s-1)===base64.PADCHAR){n=1;if(e.charAt(s-2)===base64.PADCHAR){n=2}s-=4}var o=[];for(r=0;r<s;r+=4){i=t(e,r)<<18|t(e,r+1)<<12|t(e,r+2)<<6|t(e,r+3);o.push(String.fromCharCode(i>>16,i>>8&255,i&255))}switch(n){case 1:i=t(e,r)<<18|t(e,r+1)<<12|t(e,r+2)<<6;o.push(String.fromCharCode(i>>16,i>>8&255));break;case 2:i=t(e,r)<<18|t(e,r+1)<<12;o.push(String.fromCharCode(i>>16));break}return o.join("")};base64.getbyte=function(e,t){var n=e.charCodeAt(t);if(n>255){throw base64.makeDOMException()}return n};base64.encode=function(e){if(arguments.length!==1){throw new SyntaxError("Not enough arguments")}var t=base64.PADCHAR;var n=base64.ALPHA;var r=base64.getbyte;var i,s;var o=[];e=""+e;var u=e.length-e.length%3;if(e.length===0){return e}for(i=0;i<u;i+=3){s=r(e,i)<<16|r(e,i+1)<<8|r(e,i+2);o.push(n.charAt(s>>18));o.push(n.charAt(s>>12&63));o.push(n.charAt(s>>6&63));o.push(n.charAt(s&63))}switch(e.length-u){case 1:s=r(e,i)<<16;o.push(n.charAt(s>>18)+n.charAt(s>>12&63)+t+t);break;case 2:s=r(e,i)<<16|r(e,i+1)<<8;o.push(n.charAt(s>>18)+n.charAt(s>>12&63)+n.charAt(s>>6&63)+t);break}return o.join("")}