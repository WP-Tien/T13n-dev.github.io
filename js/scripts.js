$(function() {

  // Global context
  const $nav          = $('.nav ol');
  const $menu         = $('.menu');
  const $wrapper      = $('.wrapper');
  const $band         = $('.band');
  var creNav        = '';

  $menu.on("click", function() {
    if ( $wrapper.hasClass("is-open") ) {
      $menu.removeClass("is-active");
      $wrapper.removeClass("is-open");
    } else {
      $menu.addClass("is-active");
      $wrapper.addClass("is-open");
    }
  });

  $band.each( function( value, index) {
    var name = change_alias( $(index).attr("id", trName).find("h1").text() );
    var trName =  name.replace(/\s+/g, '_');

    creNav += "<li><a href='#"+ trName +"' >" + $(index).attr("id", trName).find("h1").text() + "</a><ul>";

    $sections = $(index).find("h2");
    $sections.each( function( value, index ) { 
      
      var name = change_alias( $(index).text() );
      var trName =  name.replace(/\s+/g, '_');
      // \slà biểu thức chính cho "khoảng trắng" và glà cờ "toàn cầu", nghĩa là khớp với TẤT CẢ \s(khoảng trắng).

      creNav += "<li><a href='#"+ trName +"'>" + $(index).text() + "</a></li>";
    
    });

    creNav += "</ul></li>";

  });

  $nav.html( creNav );

  function change_alias(alias) {
    var str = alias;
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g," ");
    str = str.replace(/ + /g," ");
    str = str.trim(); 
    return str;
}


});
