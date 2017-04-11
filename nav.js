	var width = $(window).width();//宽度
	$(document).ready(function($) {
		for(var i = 0;i<=200;i++ ){//创建小方块的数量
			$(".nav_li ul").after('<div class="a" id="a'+i+'"></div>');	
		}
		change();
		function change(){
			for(var i= 0;i<=200;i++ ){
			var top       = parseInt(50*Math.random());//小球X位置
			var left      = parseInt(width*Math.random());//小球Y位置
			var transform = parseInt(360*Math.random());
			$("#a"+i).css({transform:'rotate('+transform+'deg)',
				top:top,
				left:left,
				transition:'0.5s',
				width:i/60+'px',
				height:i/60+'px',
				background:"#ddd"
				});
			}
		}


		var nav_li=$(".nav_li ul li");
		
		$(".nav_li ul li").hover(function(){
			a   = $(this).find("a").offset();//获取当前元素的位移
			b   = $(this).next().find("a").offset(); 
			wid = $(this).width();
			console.log(wid/2)
			for (var i = 0; i <=200; i++) {
					$("#a"+i).css({transform:'rotate(0deg)',
						top:a.top+26,
						left:a.left+(i*0.5),
						right:0,
						bottom:0,
						width:'2px',
						height:'2px',
						background:"#ddd"
						});
			}
		},function(){
			change();
	    });
	});