!function(e){"use strict";e.browser||(e.browser={},e.browser.mozilla=/mozilla/.test(navigator.userAgent.toLowerCase())&&!/webkit/.test(navigator.userAgent.toLowerCase()),e.browser.webkit=/webkit/.test(navigator.userAgent.toLowerCase()),e.browser.opera=/opera/.test(navigator.userAgent.toLowerCase()),e.browser.msie=/msie/.test(navigator.userAgent.toLowerCase()));var t={destroy:function(){return e(this).unbind(".maskMoney"),e.browser.msie&&(this.onpaste=null),this},mask:function(t){return this.each(function(){var n,a=e(this);return"number"==typeof t&&(a.trigger("mask"),n=e(a.val().split(/\D/)).last()[0].length,t=t.toFixed(n),a.val(t)),a.trigger("mask")})},unmasked:function(){return this.map(function(){var t,n=e(this).val()||"0",a=-1!==n.indexOf("-");return e(n.split(/\D/).reverse()).each(function(e,n){if(n)return t=n,!1}),n=(n=n.replace(/\D/g,"")).replace(new RegExp(t+"$"),"."+t),a&&(n="-"+n),parseFloat(n)})},init:function(t){return t=e.extend({prefix:"",suffix:"",affixesStay:!0,thousands:",",decimal:".",precision:2,allowZero:!1,allowNegative:!1},t),this.each(function(){var n,a=e(this);function r(){var e,t,n,r,o,i=a.get(0),s=0,l=0;return"number"==typeof i.selectionStart&&"number"==typeof i.selectionEnd?(s=i.selectionStart,l=i.selectionEnd):(t=document.selection.createRange())&&t.parentElement()===i&&(r=i.value.length,e=i.value.replace(/\r\n/g,"\n"),(n=i.createTextRange()).moveToBookmark(t.getBookmark()),(o=i.createTextRange()).collapse(!1),n.compareEndPoints("StartToEnd",o)>-1?s=l=r:(s=-n.moveStart("character",-r),s+=e.slice(0,s).split("\n").length-1,n.compareEndPoints("EndToEnd",o)>-1?l=r:(l=-n.moveEnd("character",-r),l+=e.slice(0,l).split("\n").length-1))),{start:s,end:l}}function o(e){var n="";return e.indexOf("-")>-1&&(e=e.replace("-",""),n="-"),n+t.prefix+e+t.suffix}function i(e){var n,a,r,i=e.indexOf("-")>-1&&t.allowNegative?"-":"",s=e.replace(/[^0-9]/g,""),l=s.slice(0,s.length-t.precision);return""===(l=(l=l.replace(/^0*/g,"")).replace(/\B(?=(\d{3})+(?!\d))/g,t.thousands))&&(l="0"),n=i+l,t.precision>0&&(a=s.slice(s.length-t.precision),r=new Array(t.precision+1-a.length).join(0),n+=t.decimal+r+a),o(n)}function s(e){var t,n,r=a.val().length;a.val(i(a.val())),t=a.val().length,n=e-=r-t,a.each(function(e,t){if(t.setSelectionRange)t.focus(),t.setSelectionRange(n,n);else if(t.createTextRange){var a=t.createTextRange();a.collapse(!0),a.moveEnd("character",n),a.moveStart("character",n),a.select()}})}function l(){var e=a.val();a.val(i(e))}function c(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function u(n){var o,i,l,u,v,g,f=(n=n||window.event).which||n.charCode||n.keyCode;return void 0!==f&&(f<48||f>57?45===f?(a.val((g=a.val(),t.allowNegative?""!==g&&"-"===g.charAt(0)?g.replace("-",""):"-"+g:g)),!1):43===f?(a.val(a.val().replace("-","")),!1):13===f||9===f||(!(!e.browser.mozilla||37!==f&&39!==f||0!==n.charCode)||(c(n),!0)):!!function(){var e=!(a.val().length>=a.attr("maxlength")&&a.attr("maxlength")>=0),t=r(),n=t.start,o=t.end,i=!(t.start===t.end||!a.val().substring(n,o).match(/\d/)),s="0"===a.val().substring(0,1);return e||i||s}()&&(c(n),o=String.fromCharCode(f),l=(i=r()).start,u=i.end,v=a.val(),a.val(v.substring(0,l)+o+v.substring(u,v.length)),s(l+1),!1))}function v(){setTimeout(function(){l()},0)}function g(){return(parseFloat("0")/Math.pow(10,t.precision)).toFixed(t.precision).replace(new RegExp("\\.","g"),t.decimal)}t=e.extend(t,a.data()),a.unbind(".maskMoney"),a.bind("keypress.maskMoney",u),a.bind("keydown.maskMoney",function(e){var n,o,i,l,u,v=(e=e||window.event).which||e.charCode||e.keyCode;return void 0!==v&&(o=(n=r()).start,i=n.end,8!==v&&46!==v&&63272!==v||(c(e),l=a.val(),o===i&&(8===v?""===t.suffix?o-=1:(u=l.split("").reverse().join("").search(/\d/),i=1+(o=l.length-u-1)):i+=1),a.val(l.substring(0,o)+l.substring(i,l.length)),s(o),!1))}),a.bind("blur.maskMoney",function(r){if(e.browser.msie&&u(r),""===a.val()||a.val()===o(g()))t.allowZero?t.affixesStay?a.val(o(g())):a.val(g()):a.val("");else if(!t.affixesStay){var i=a.val().replace(t.prefix,"").replace(t.suffix,"");a.val(i)}a.val()!==n&&a.change()}),a.bind("focus.maskMoney",function(){n=a.val(),l();var e,t=a.get(0);t.createTextRange&&((e=t.createTextRange()).collapse(!1),e.select())}),a.bind("click.maskMoney",function(){var e,t=a.get(0);t.setSelectionRange?(e=a.val().length,t.setSelectionRange(e,e)):a.val(a.val())}),a.bind("cut.maskMoney",v),a.bind("paste.maskMoney",v),a.bind("mask.maskMoney",l)})}};e.fn.maskMoney=function(n){return t[n]?t[n].apply(this,Array.prototype.slice.call(arguments,1)):"object"!=typeof n&&n?void e.error("Method "+n+" does not exist on jQuery.maskMoney"):t.init.apply(this,arguments)}}(window.jQuery||window.Zepto);