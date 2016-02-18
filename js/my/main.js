(function($){
  // Caption
  var qrcode = new QRCode(document.getElementById("qrcode"), {
  width : 100,
  height : 100
});
  
  $.ajax({
  	url: 'http://dwz.cn/create.php',
  	type: 'POST',
  	data: {
  		url: window.location.href
  	},
  	success: function(data){
       console.log(data);
       qrcode.makeCode(data);     
  	}
  })
  // qrcode.makeCode("http://loveyoghurt.xyz");
})(jQuery);
