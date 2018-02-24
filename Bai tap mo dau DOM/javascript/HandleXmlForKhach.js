		function LoadXML(){//connect to xml file
			var http=new XMLHttpRequest();
			http.open("GET","xml/Du_lieu.xml",false);
			http.send();
			var httpDoc=http.responseXML;
			x=httpDoc.getElementsByTagName("Mat_hang");
		}

		function GetData(i,MS){//get data from xml file and match them
			name=x[i].getAttribute('Ten');
			cost=x[i].getAttribute('Don_gia_Ban');
			document.getElementById(MS).innerHTML=name + "<br>"+cost+" VND";
		}

		function SetDataToWeb(){//set data to web
			LoadXML();
			var array= ["name_1","name_2","name_3","name_4","name_5","name_6","name_7","name_8","name_9","name_10","name_11","name_12","name_13","name_14","name_15","name_01","name_02","name_03","name_04","name_05","name_06","name_07","name_08","name_09","name_010","name_011","name_012","name_013","name_014","name_015"];
			for(var i=0;i<array.length;i++){
				GetData(i,array[i]);
			}
		}
		
		SetDataToWeb();//run program	