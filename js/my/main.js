(function($){
  // Caption
  var qrcode = new QRCode(document.getElementById("qrcode"), {
  width : 100,
  height : 100
});
  qrcode.makeCode(window.location.href);
  // qrcode.makeCode("http://loveyoghurt.xyz");
})(jQuery);
