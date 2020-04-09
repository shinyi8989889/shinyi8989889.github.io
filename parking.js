
function getNowDateString()
{
	var date = new Date();

	var yy = date.getFullYear();
	var MM = date.getMonth()+1;
	MM = MM<10?"0"+MM:MM;
	var dd = date.getDate();
	dd = dd<10?"0"+dd:dd;
	
	var hh = date.getHours();
	hh = hh<10?"0"+hh:hh;
	var mm = date.getMinutes();
	mm = mm<10?"0"+mm:mm;
	var ss = date.getSeconds();
	ss = ss<10?"0"+ss:ss;


	return yy+"/"+MM+"/"+dd+" "+hh+":"+mm+":"+ss;	
}

function ajaxCallJsonp(target){
	
	var data = $.getJSON(target,
	{
		tags: "mount rainier",
		tagmode: "any",
		format: "json"
	});

	//成功得到資料
	data.success(function( msg ) {
		/*
		$("#idLeftParking").html(
			"<table border='1' style='text-align:center;'><tr><td></td><td>總車位數</td><td>剩餘車位數</td></tr>"+
			"<tr><td>汽車</td><td>"+msg.car.total+"</td><td style='color:red;'>"+msg.car.remain+"</td></tr>"+
			"<tr><td>機車</td><td>"+msg.motor.total+"</td><td style='color:red;'>"+msg.motor.remain+"</td></tr><tr><td colspan='3'>更新時間："+getNowDateString()+"</td></tr></table>"
		);
		*/
		var d = msg;
		$("#idCarTotal").html(d.car.total);
		$("#idCarLeft").html(d.car.remain);
		$("#idCarUpdateTime").html(getNowDateString());

		$("#idMotTotal").html(d.motor.total);
		$("#idMotLeft").html(d.motor.remain);
		$("#idMotUpdateTime").html(getNowDateString());
	});
	
	//取得資料失敗
	data.error(function( msg ) {
		$("#idCarTotal").text("fail");
		//$("#result").html("fail getting data");
	});

}

ajaxCallJsonp("https://pss-ya167.sites.ichenparking.com.tw/space/api/get_site_space_info");

