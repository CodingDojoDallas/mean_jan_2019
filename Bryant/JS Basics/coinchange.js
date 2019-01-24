function coinchange (x){
	x.form.dollars.value = Math.floor(x.value / 100);
	x.form.quarters.value = Math.floor((x.value % 100) / 25);
	x.form.dimes.value = Math.floor((x.value % 25) / 10);
	x.form.nickles.value = Math.floor((x.value % 10) / 5);
	x.form.pennies.value = Math.floor((x.value % 5) / 1);
	console.log( "dollars: ", dollars, " quarters: ", quarters, " dimes: ", dimes, " nickels: ", nickels, " pennies: ", pennies)
}

