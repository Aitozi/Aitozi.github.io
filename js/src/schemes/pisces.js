// build time:Tue Jan 21 2020 22:52:54 GMT+0800 (China Standard Time)
$(document).ready(function(){var n=$(".header-inner");var r=$("#sidebar");var e=function(){return n.height()+CONFIG.sidebar.offset};var i=function(n){return r.css({"margin-top":n})};var a=window.matchMedia("(min-width: 991px)");i(e()).show();a.addListener(function(n){if(n.matches){i(e())}})});
//rebuild by neat 