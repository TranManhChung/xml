	function LoadXML(){//connect to xml file
			var http=new XMLHttpRequest();
			http.open("GET","xml/Du_lieu.xml",false);
			http.send();
			httpDoc=http.responseXML;
			x=httpDoc.getElementsByTagName("Mat_hang");
		}

		function GetData(i,MS,DoanhThu){//get data from xml file and match them
			name=x[i].getAttribute('Ten');
			cost=x[i].getAttribute('Don_gia_Ban');
			document.getElementById(MS).innerHTML=name + "<br>"+cost+" VND<br>Doanh thu: "+DoanhThu +" VND";
		}

		function GetDate(){//get day of today
			var date=new Date();
			var day=date.getUTCDate();
			var month=date.getUTCMonth()+1;
			var year=date.getUTCFullYear();
			today=year+"-"+month+"-"+day;
		}

		var array_cost=[];
		var array_cost_temp=[];
		function CalculateCost(pos,id){
		array_cost[pos]=parseInt(array_cost[pos])+parseInt(x[pos].getAttribute('Don_gia_Ban'));
			 GetData(pos,id,array_cost[pos]);
		}

		function SetDataToWeb(){//set data to web
			LoadXML();
			GetDate();	

			var array= ["name_1","name_2","name_3","name_4","name_5","name_6","name_7","name_8","name_9","name_10","name_11","name_12","name_13","name_14","name_15","name_01","name_02","name_03","name_04","name_05","name_06","name_07","name_08","name_09","name_010","name_011","name_012","name_013","name_014","name_015"];
			for(var i=0;i<array.length;i++){
				doanhThu=0;
				y=x[i].getElementsByTagName("Danh_sach_Ban_hang")[0].getElementsByTagName("Ban_hang");
				for(var j=0;j<y.length;j++){
					if(y[j].getAttribute("Ngay")==today){
						doanhThu+=parseInt(y[j].getAttribute("Tien"));

					}
				}				
				GetData(i,array[i],doanhThu);
				array_cost[i]=doanhThu;
			}
		}

		SetDataToWeb();//run program