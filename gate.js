
(function(){
  var PASS_KEY = "cc_preview_pass_ok";
  if (location.pathname.endsWith("access.html")) return;
  if (!sessionStorage.getItem(PASS_KEY)) {
    sessionStorage.setItem("cc_preview_target", location.pathname.replace(/^\//,''));
    location.href = "access.html";
  }
})();
