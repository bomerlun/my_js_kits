/// 这里面就是封装我们的常用的代码的js代码
; var kits = {};
// 封装一个获取指定区间的随机整数的方法
kits.randomInt = function (n, m) {
  return Math.floor(Math.random() * (m - n + 1) + n);
};
// 20190715


//封装一个ajax构造函数（类）

/**
 * @author colombo
 * @date 2019-07-22
 * @description 封装好的ajax的方法
 * @param {object || null} options
 * @example options {
  *    type : 请求方式 - get||post
  *    url : 请求地址
  *    data : 携带的数据，要求是  键=值&键=值 的形式
  *    callback : 请求成功的回调函数
  *      接收一个参数，这个参数是一个返回的结果，是一个字符串
  * }
  */
function ajax(options) {
  options = options || {};
  options.type = options.type || 'get';
  options.url = options.url || '';
  options.data = options.data || '';
  options.callback = options.callback || function (res) {
    console.log('你的回调函数没给，我们不建议这样干');
    console.log(res);
  };

  let xhr = new XMLHttpRequest();
  // 如果是get请求，把数据拼接在url的后面的
  if (options.type === 'get') {
    options.url += '?' + options.data;
  };
  xhr.open(options.type, options.url);
  // 如果是post请求， 把数据放在send的里面，在之前还要设置请求头
  if (options.type === 'post') {
    // 先设置请求头
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send(options.data);
  } else {
    xhr.send();
  }
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        // 请求成功
        options.callback(xhr.responseText);
      };
    };
  };
};




// /**
//  * @author colombo
//  * @data 2019-07-22
//  * @description ajax的构造函数（类）
//  * @param {object||null}options
//  * @example option{
//  *   type:请求方式-get||post;
//  *   url:请求地址；
//  *   data:携带的数据，要求是 键=值&键=值 的形式；
//  *   callback:请求成功的回调函数，接收一个参数，这个参数是一个返回的结果，是一个字符串
//  * }
//  */

// function ajax(options){
//   options=options||{};
//   options.type=options.type||"get";
//   options.url=options.url||"";
//   options.data=options.data||"";
//   options.callback=options.callback||function(res){
//     console.log("你的回调函数没给，不建议这样");
//     Console.length(res);
//   }

//   let xhr=new XMLHttpRequest();
//   if(options.type==="get"){
//     options.url+="?"+options.data;
//   };
//   xhr.open(options.type,options.url);
//   if(options.type==="post"){
//     xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
//     xhr.send(options.data);
//   }esls{
//     xhr.send();
//   }
//   xhr.onreadystatechange=function(){
//     if(xhr.readyState===4){
//       if(xhr.status===200){
//         options.callback(xhr.responseText);
//       };
//     };
//   };
// };