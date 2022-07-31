!function(){var t,e=new Date,n=this||self,r=/^[\w+/_-]+[=]{0,2}$/,o=null;function a(t){return(t=t.querySelector&&t.querySelector("script[nonce]"))&&(t=t.nonce||t.getAttribute("nonce"))&&r.test(t)?t:""}function c(t,e){function n(){}n.prototype=e.prototype,t.i=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.h=function(t,n,r){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[n].apply(t,o)}}function i(t){return t}function l(t){if(Error.captureStackTrace)Error.captureStackTrace(this,l);else{var e=Error().stack;e&&(this.stack=e)}t&&(this.message=String(t))}function s(t,e){for(var n="",r=(t=t.split("%s")).length-1,o=0;o<r;o++)n+=t[o]+(o<e.length?e[o]:"%s");l.call(this,n+t[r])}function u(t,e){throw new s("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1))}function p(t,e){this.g=e===g?t:""}c(l,Error),l.prototype.name="CustomError",c(s,l),s.prototype.name="AssertionError",p.prototype.toString=function(){return this.g+""};var g={};function m(t){var e=document.getElementsByTagName("head")[0];e||(e=document.body.parentNode.appendChild(document.createElement("head"))),e.appendChild(t)}function f(e){var r=document,c="SCRIPT";if("application/xhtml+xml"===r.contentType&&(c=c.toLowerCase()),(c=r.createElement(c)).type="text/javascript",c.charset="UTF-8",void 0===t){r=null;var l=n.trustedTypes;if(l&&l.createPolicy){try{r=l.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch(t){n.console&&n.console.error(t.message)}t=r}else t=r}e=new p(e=(r=t)?r.createScriptURL(e):e,g);t:{try{var s=c&&c.ownerDocument,f=s&&(s.defaultView||s.parentWindow);if((f=f||n).Element&&f.Location){var d=f;break t}}catch(t){}d=null}if(d&&void 0!==d.HTMLScriptElement&&(!c||!(c instanceof d.HTMLScriptElement)&&(c instanceof d.Location||c instanceof d.Element))){if("object"==(d=typeof c)&&null!=c||"function"==d)try{var y=c.constructor.displayName||c.constructor.name||Object.prototype.toString.call(c)}catch(t){y="<object could not be stringified>"}else y=void 0===c?"undefined":null===c?"null":typeof c;u("Argument is not a %s (or a non-Element, non-Location mock); got: %s","HTMLScriptElement",y)}e instanceof p&&e.constructor===p?y=e.g:(u("expected object of type TrustedResourceUrl, got '"+e+"' of type "+("object"!=(y=typeof e)?y:e?Array.isArray(e)?"array":y:"null")),y="type_error:TrustedResourceUrl"),c.src=y,(y=c.ownerDocument&&c.ownerDocument.defaultView)&&y!=n?y=a(y.document):(null===o&&(o=a(n.document)),y=o),y&&c.setAttribute("nonce",y),m(c)}window.addEventListener&&void 0===document.readyState&&window.addEventListener("DOMContentLoaded",(function(){document.readyState="complete"}),!1),function(t){t=t.split(".");for(var e=window,n=0;n<t.length;++n)if(!(e=e[t[n]]))return!1;return!0}("google.translate.Element")||function(){var t=function(t){t=t.split(".");for(var e=window,n=0;n<t.length;++n)e=e.hasOwnProperty?e.hasOwnProperty(t[n])?e[t[n]]:e[t[n]]={}:e[t[n]]||(e[t[n]]={});return e}("google.translate._const");t._cest=e,e=void 0,t._cl=navigator.language||navigator.userLanguage,t._cuc="googleTranslateElementInit",t._cac="",t._cam="",t._ctkk="449649.3822363247";var n="translate.googleapis.com",r="https://",o=r+n;t._pah=n,t._pas=r,t._pbi=o+"/translate_static/img/te_bk.gif",t._pci=o+"/translate_static/img/te_ctrl3.gif",t._pli=o+"/translate_static/img/loading.gif",t._plla=n+"/translate_a/l",t._pmi=o+"/translate_static/img/mini_google.png",t._ps=o+"/translate_static/css/translateelement.css",t._puh="translate.google.cn",function(t){var e=document.createElement("link");e.type="text/css",e.rel="stylesheet",e.charset="UTF-8",e.href=t,m(e)}(t._ps),f(`https://translate.googleapis.com/translate_static/js/element/main_${navigator.language||navigator.userLanguage}.js`)}()}();