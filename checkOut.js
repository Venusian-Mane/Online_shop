$(document).ready(function(){
	$("#post").dblclick(function(){
		total = total+300;
		alert("R300 will be added to you total for this option");
	});
	$("#delivery").dblclick(function(){
		total = total + 600;
		alert("R600 will be added to you total for this option");
	});
});
// above is a function ive created to add a particular amount to the overall total depending on which delivery method was chosen.

function loaded() {
    if (localStorage.getItem("hasCodeRunBefore") === null) {
        localStorage.setItem("hasCodeRunBefore", true);
    } else {
        shoppingCart = JSON.parse(localStorage.getItem("bill"));
        total = JSON.parse(localStorage.getItem("total"));
        console.log(total);
    };
}
console.log(localStorage);

function checkOutTable() {
    shoppingCart.forEach(function(item) {
        let table = document.getElementById("checkTable");
        let itemRow = document.createElement("tr");
        let itemData = document.createElement("td");
        itemData.style.columnSpan = "4";
        itemData.innerHTML = item.name;
        let itemData2 = document.createElement("td");
        itemData2.innerHTML = "R"+item.price;
        table.appendChild(itemRow);
        itemRow.appendChild(itemData);
        itemRow.appendChild(itemData2);
    });
    let totalRow = document.createElement("tr");
    let tData = document.createElement("td");
    let realTotal = document.createElement("td");
    tData.innerHTML = "Total (with coupon discount and VAT)";
    total = total;
    realTotal.innerHTML = total-(total*0.1);
    let tbl = document.getElementById("checkTable");
    tbl.appendChild(totalRow);
    totalRow.appendChild(tData);
    totalRow.appendChild(realTotal);
}
// this function abovve creates a table of all the objects i the shopping cart.

$(document).ready(function(){
	$("#shipBut").click(function(){
		$("#cargoPic").animate({
			"margin-left": "1000px"
		},2000);
		$("#cargoPic").fadeOut(1000)
		alert("Your unique order number is "+Math.floor((Math.random() * 10000) + 100))
	});
});
// ive used jquery to make a chained effect to animate the cargo ship image to move all the way accross the screen and fade out
// while an alert is given telling the user theirr unique order number.

$(document).ready(function(){
	$(".dropdown").mouseenter(function(){
		$(".dropdown #list").children().slideDown("slow");
	});

	$(".dropdown").mouseleave(function(){
		$(".dropdown #list").children().slideUp("slow");
	});
});
// this is a function that have an accordion effect on the dropdown menu in the about.html page