function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}

function getOutput(){
	return document.getElementById("output-value").innerText;
}

function printOutput(num){
	if(num==""){
		document.getElementById("output-value").innerText=num;
	}
	else{

	 document.getElementById("output-value").innerText=getFormattedFunction(num);
	}
}

//"," hatavnya sathi .toLocaleString("en");
function getFormattedFunction(num){
	if(num=="-"){//Negative value asel tr delete vhayla
		return "";
	}
	var n=Number(num);
	var value = n.toLocaleString("en");
	return value;
}

function reverseNumberFormat(num){
 	return Number(num.replace(/,/g,''));
	}

var operator = document.getElementsByClassName("operator");
for(var i=0;i<operator.length;i++){
	operator[i].addEventListener('click',function(){
		if(this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			var 
			output=reverseNumberFormat(getOutput()).toString();
			if(output){//if output has a value
				output=output.substr(0,output.length-1);
				printOutput(output);
			}
		}
		else{
			var output=getOutput();
			var history=getHistory();

			//History mdhla laast operator change karaycha asel tr
			if(output=="" && history!=""){
				if(isNaN(history[history.length-1])){
					history=history.substr(0,history.length-1);
				}
			}
			if(output!="" || history!=""){
				//condition?true:false;
				output= output==""?output:reverseNumberFormat(output);
				history=history+output;
				if(this.id=="="){
					var result=eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					//Operator History mdhe jate aani Output empty set krte
					history=history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
	});
}

var number = document.getElementsByClassName("number");
for(var i=0;i<number.length;i++){
	number[i].addEventListener('click',function(){
		//alert("The number clicked:"+this.id);
		var output=reverseNumberFormat(getOutput());
		if(output!=NaN){
			output=output+this.id;
			printOutput(output);
		}
	});
}
//printOutput("7878787878");

