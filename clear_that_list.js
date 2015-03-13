function treatColumns(){
		var total = 12, i, winW = $(window).width();
		
		function columns(num, col){
			$("ul, ol").each(function(){
				$(this).children("li.col-"+col+"-"+num).each(function(idx, itm){
					var item = $(itm), x = 12/num;
					if((idx) % x == 0 && idx > 0){
						//console.log(idx+" >>",idx+1, x, item.index())
						item.css("clear","both");
					}else{
						item.css("clear","none");
					}
				});
			});				
		}

		if(winW < 768){
			for(i=1; i <= total;i++)
				columns(i, "xs");
		}else if(winW >= 768 && winW < 992){
			for(i=1; i <= total;i++)
				columns(i, "sm");
		}else if(winW >= 992 && winW < 1199){
			for(i=1; i <= total;i++)
				columns(i, "md");
		}else if(winW >= 1200){
			for(i=1; i <= total;i++)
				columns(i, "lg");
		}
	}
