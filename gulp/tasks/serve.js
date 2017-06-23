var http = require('http');
var fs = require('fs');
var qs = require('querystring');

module.exports = function(){
  $.gulp.task('serve',function(){
    $.browserSync.init({
      open: false,
      server:'./build',
      middleware: [
        accept
      ]
    });
    $.browserSync.watch('./build',$.browserSync.reload);
  });
};



function accept(req, res,next) {
	let a = req.url;


  if (req.method == 'POST') {
  	data="";
    req.on('data', function(chunk) {
    	data+=chunk;
      console.log("Received body data:");
      console.log(chunk.toString());
    });

    console.log(a);
    console.log(req.method);
    req.on('end', function() {
      // empty 200 OK response for now
      res.writeHead(200, "OK", {'Content-Type': 'text/html'});
      res.end();
    });
    return;
  }

  if (a == '/?link=comments&comments_page=5') {
		var ads = {
			items:[]
		};
    console.log(ads);
    res.end(JSON.stringify(ads));
    return;
	}

	if (a == '/?link=comments&comments_page=1') {
		var ads = {
			items:[{
					mark:5,
					name: 'Марина Кроткина',
					text: 'Компанию рекомендую!!! Сделали заказ быстро и качественно!!! Все очень понравилось!!!'
				},{
					mark:5,
					name: 'Сергей Коновалов',
					text: 'Круто'
				},{
					mark:4,
					name: 'Костинтин Константинов',
					text: 'Прижка нормуль удобная есть все что нужно советую'
				}],
			pagesLength:6
		};

    res.end(JSON.stringify(ads));
    return;
	}
	if (a == '/?link=comments&comments_page=2') {
		var ads = {
			items:[{
					mark:2,
					name: 'RehjgfnrbyAAAAAAA',
					date: '02.05.2011 22:34:11',
					text: 'Лесистый лес Идет туда, где есть березы и ягоды. Два раза. Три. Пять. Ага, вот оно.'
				},{
					mark:5,
					name: 'RehjgfnrbyAAAAAAA',
					date: '02.05.2011 22:34:11',
					text: 'Угрюмый вой и майки из принтбар по скидке.'
				},{
					mark:3,
					name: 'RehjgfnrbyAAAAAAA',
					date: '02.05.2011 22:34:11',
					text: 'Угрым ташкор Умдурингизнинг Идет туда, где есть березы и ягоды. Два раза. Три. Пять. Ага, вот оно.'
				}],
			pagesLength:6
		};

        res.end(JSON.stringify(ads));
		return;
	}
	if (a == '/?link=comments&comments_page=3') {
		var ads = {
			items:[{
					mark:2,
					name: 'Ильюшин Дима',
					date: '02.05.2011 22:34:11',
					text: 'Угрым ташкор Умдурингизнинг Идет туда, где есть березы и ягоды. Два раза. Три. Пять. Ага, вот оно.'
				},{
					mark:2,
					name: 'Ильюшин Дима',
					date: '02.05.2011 22:34:11',
					text: 'Угрым ташкор Умдурингизнинг Идет туда, где есть березы и ягоды. Два раза. Три. Пять. Ага, вот оно.'
				},{
					mark:3,
					name: 'Ильюшин Дима',
					date: '02.05.2011 22:34:11',
					text: 'Угрым ташкор Умдурингизнинг Идет туда, где есть березы и ягоды. Два раза. Три. Пять. Ага, вот оно.'
				}],
			pagesLength:6
		};

        res.end(JSON.stringify(ads));
		return;
	}
	if (a == '/?link=comments&comments_page=4') {
		var ads = {
			items:[{
					mark:4,
					name: 'RehjgfnrbyAAAAAAA',
					date: '02.05.2011 22:34:11',
					text: 'Угрым ташкор Умдурингизнинг Идет туда, где есть березы и ягоды. Два раза. Три. Пять. Ага, вот оно.'
				},{
					mark:5,
					name: 'RehjgfnrbyAAAAAAA',
					date: '02.05.2011 22:34:11',
					text: 'Угрым ташкор Умдурингизнинг Идет туда, где есть березы и ягоды. Два раза. Три. Пять. Ага, вот оно.'
				},{
					mark:4,
					name: 'RehjgfnrbyAAAAAAA',
					date: '02.05.2011 22:34:11',
					text: 'Угрым ташкор Умдурингизнинг Идет туда, где есть березы и ягоды. Два раза. Три. Пять. Ага, вот оно.'
				}],
			pagesLength:6
		};

        res.end(JSON.stringify(ads));
		return;
	}
	if (a == '/?link=comments&comments_page=5') {
		var ads = {
			items:[{
					mark:2,
					name: 'RehjgfnrbyAAAAAAA',
					date: '02.05.2011 22:34:11',
					text: 'Угрым ташкор Умдурингизнинг Идет туда, где есть березы и ягоды. Два раза. Три. Пять. Ага, вот оно.'
				},{
					mark:5,
					name: 'RehjgfnrbyAAAAAAA',
					date: '02.05.2011 22:34:11',
					text: 'Угрым ташкор Умдурингизнинг Идет туда, где есть березы и ягоды. Два раза. Три. Пять. Ага, вот оно.'
				},{
					mark:3,
					name: 'RehjgfnrbyAAAAAAA',
					date: '02.05.2011 22:34:11',
					text: 'Угрым ташкор Умдурингизнинг Идет туда, где есть березы и ягоды. Два раза. Три. Пять. Ага, вот оно.'
				}],
			pagesLength:6
		};

        res.end(JSON.stringify(ads));
		return;
	}if (a == '/?link=comments&comments_page=6') {
		var ads = {
			items:[{
					mark:2,
					name: 'RehjgfnrbyAAAAAAA',
					date: '02.05.2011 22:34:11',
					text: 'Угрым ташкор Умдурингизнинг Идет туда, где есть березы и ягоды. Два раза. Три. Пять. Ага, вот оно.'
				}],
			pagesLength:6
		};

        res.end(JSON.stringify(ads));
		return;
	}

    	return next();

}
