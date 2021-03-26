$(document).ready(function() {
    // For every link that has double slashes...
    $("a[href*='//']").each(
        function() {
            // and our hostname is not after the slashes...
            if (this.href.indexOf("//" + location.hostname) == -1) {
                // ... then make the link open in a new tab.
                $(this).attr('target', '_blank');
            }
        }
    );
});
function setCookie(cname,cvalue,exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}
