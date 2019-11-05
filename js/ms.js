var tim=1;
setInterval("tim++",100);
var autourl=new Array();
for(i=0;i<=11;i++){
autourl[i]=$('.ulList li').eq(i).find('a').attr("href");
}
function auto(url){
	var str=tim*10;
	if(url==autourl[0]){
		$('#em_1').html(str+'ms');
		$('.ulList .li01').addClass("stop")
	}
	if(url==autourl[1]){
		$('#em_2').html(str+'ms');
		$('.ulList .li02').addClass("stop")
	}
	if(url==autourl[2]){
		$('#em_3').html(str+'ms');
		$('.ulList .li03').addClass("stop")
	}
	if(url==autourl[3]){
		$('#em_4').html(str+'ms');
		$('.ulList .li04').addClass("stop")
	}
	if(url==autourl[4]){
		$('#em_5').html(str+'ms');
		$('.ulList .li05').addClass("stop")
	}
	if(url==autourl[5]){
		$('#em_6').html(str+'ms');
		$('.ulList .li06').addClass("stop")
	}
	if(url==autourl[6]){
		$('#em_7').html(str+'ms');
		$('.ulList .li07').addClass("stop")
	}
	if(url==autourl[7]){
		$('#em_8').html(str+'ms');
		$('.ulList .li08').addClass("stop")
	}
	if(url==autourl[8]){
		$('#em_9').html(str+'ms');
		$('.ulList .li09').addClass("stop")
	}
	if(url==autourl[9]){
		$('#em_10').html(str+'ms');
		$('.ulList .li10').addClass("stop")
	}
}
function run(){
	for(var i=0;i<autourl.length;i++){
		document.write("<img src="+autourl[i]+"/"+Math.random()+" width=1 height=1 onerror=auto('"+autourl[i]+"') style='display:none'>");
	}
}
run()
