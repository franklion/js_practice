window.onload = function() {
  
  /* JSON */
  var data = { 
 	'name': '小明',
	'phone': '0987654321',	
	'website': 'http://www.fashionguide.com.tw',
	'img': 'https://piposay.s3.amazonaws.com/pipo/44b226c7-5883-4bc7-9df4-18636eddb23a.png'
  };

  /* 取出id為main所包覆的所有元素 return string */
  var main = document.getElementById("main").innerHTML;  
  
  /* call renderer function 替換特定字串*/
  html = renderer(data,main);
  /* 更新template */
  document.getElementById("main").innerHTML = html

  /* template 替換 */
  function renderer(data,html){
    /* 取出JSON中key */
    var key = Object.keys(data);

    for(var i = 0 ; i < key.length ; i++){
      var temp = "{" + key[i] + "}";
      var reg = new RegExp(temp,"g");
      html = html.replace( reg ,data[key[i]])
    }
    return html;
  };
}