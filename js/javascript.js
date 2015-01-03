window.onload = function() {
  
  var data = { 
    'name': '小明',
    'phone': '0987654321',  
    'website': 'http://www.fashionguide.com.tw',
    'img': 'https://piposay.s3.amazonaws.com/pipo/44b226c7-5883-4bc7-9df4-18636eddb23a.png'
  };

  /* 取出id為template所包覆的所有元素 return string */ 
  var template = document.getElementById("template").innerHTML;
  
  /* call renderer function 替換特定字串*/
  html = renderer(data, template);
  /* 更新template */
  document.getElementById("main").innerHTML = html;

  /* template 替換 */
  function renderer(data,html){
    /* 取出JSON中key */
    var key = Object.keys(data);

    for(var i = 0 ; i < key.length ; i++){
      var temp = "{" + key[i] + "}";
      var reg = new RegExp(temp,"g");
      html = html.replace( reg ,data[key[i]]);
    }
      return html;
  };

  /* call getPara function 取得網址當中指定名稱的參數值 */
  var value = getPara("id");

  function getPara(key){
    var query = window.location.search.substring(1);
    var array = query.split("&");
    for(var i = 0 ; i < array.length ; i++){
      var sub_array = array[i].split("=");
      if(sub_array[0] == key){return sub_array[1]};
    }
    return false;
  }

  console.log(value);
}