/*!
 *  FluidVids.js v2.1.0
 *  Responsive and fluid YouTube/Vimeo video embeds.
 *  Project: https://github.com/toddmotto/fluidvids
 *  by Todd Motto: http://toddmotto.com
 *
 *  Copyright 2013 Todd Motto. MIT licensed.
 */
window.Fluidvids=function(a,b){"use strict";var c,d,e=b.head||b.getElementsByTagName("head")[0],f=".fluidvids-elem{position:absolute;top:0px;left:0px;width:100%;height:100%;}.fluidvids{width:100%;position:relative;}",g=function(a){return c=new RegExp("^(https?:)?//(?:"+d.join("|")+").*$","i"),c.test(a)},h=function(a){var c=b.createElement("div"),d=a.parentNode,e=100*(parseInt(a.height?a.height:a.offsetHeight,10)/parseInt(a.width?a.width:a.offsetWidth,10));d.insertBefore(c,a),a.className+=" fluidvids-elem",c.className+=" fluidvids",c.style.paddingTop=e+"%",c.appendChild(a)},i=function(){var a=b.createElement("div");a.innerHTML="<p>x</p><style>"+f+"</style>",e.appendChild(a.childNodes[1])},j=function(a){var c=a||{},e=c.selector||"iframe";d=c.players||["www.youtube.com","player.vimeo.com"];for(var f=b.querySelectorAll(e),j=0;j<f.length;j++){var k=f[j];g(k.src)&&h(k)}i()};return{init:j}}(window,document);