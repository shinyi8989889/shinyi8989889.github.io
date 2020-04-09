
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
	alert("111");
	var data = $.getJSON(target,
	{
		tags: "mount rainier",
		tagmode: "any",
		format: "json"
	});
	
	alert("222");
	//成功得到資料
	data.success(function( msg ) {
		alert("333");
	});
	
	//取得資料失敗
	data.error(function( msg ) {
		alert("444");
		$("#idCarTotal").text("fail");
		//$("#result").html("fail getting data");
	});

}

ajaxCallJsonp("https://pss-ya167.sites.ichenparking.com.tw/space/api/get_site_space_info");

