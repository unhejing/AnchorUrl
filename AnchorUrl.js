//url锚点跳转
function transTab(num) {
	var tab = location.hash; //获取url中"#"符后的字串
	//获取num个tab的class类存放在tabs中,tabs[1]=>tab1
	var tabs = new Array();
	for(var v = 1; v < num+1; v++){
		tabs[v] = new Array()
		tabs[v] = document.getElementsByClassName('tab'+v);
	}

	for(var k = 1; k < num+1; k++){
		if(tab == "#tab"+k){
		 	for(var i = 0;i< tabs[k].length; i++){
		 		//获取tab1,tab2..的属性
		 		var classTabs = new Array();
		 		//tabs[k]添加属性active
		 		try {
		 			for(var m = 0; m < num; m++){
			 			classTabs[k] = new Array();
			 			
			 			classTabs[k][m] = tabs[k][m].getAttribute("class");
			 			// alert("获取前classTab["+k+"]["+m+"]="+classTabs[k][m]);
			 			classTabs[k][m] = classTabs[k][m].concat(" active");
			 			tabs[k][m].setAttribute("class", classTabs[k][m]);
			 			// alert("获取后classTab["+k+"]["+m+"]="+classTabs[k][m]);
			 		}
		 		} catch(e) {
		 			// statements
		 			console.log(e);
		 		}
		 		
		 		try {
		 			//除tabs[k]的class删除active属性
			 		for(var p = 1; p < num+1; p++){
			 			for(var q = 0;q < num;q++){
			 				if(p !== k){
			 					classTabs[p] = new Array();
					 			classTabs[p][q] = tabs[p][q].getAttribute("class");
					 			// classTabs[p][q] = classTabs[p][q].concat(" active");
				 				classTabs[p][q] = classTabs[p][q].replace("active","");
				 				// alert(classTabs[p][q]);
				 				tabs[p][q].setAttribute("class", classTabs[p][q]);
				 			}
			 			}
			 			
			 		}
		 		} catch(e) {
		 			// statements
		 			console.log(e);
		 		}
		 		

		 	}
		}
	}
}