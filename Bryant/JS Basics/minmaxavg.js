function minmaxavg (x) {
	var min = x[0];
	var max = x[0];
	var avg=0;
	for(var i=0;i<x.length;i++){
		if(x[i]<min){
			min=x[i];
		}
	}
	for(var i=0;i<x.length;i++){
		if(x[i]>max){
			max=x[i];
		}
	}
	for(var i=0;i<x.length;i++){
		sum=sum+x[i];
	}
	avg=sum/x.length;
	console.log("The minimum is ", min, ", The maximum is ", max, ", The average is ", avg, "."  )
}
