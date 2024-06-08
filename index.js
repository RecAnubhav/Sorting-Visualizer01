const container = document.querySelector(".data-container");

// function to generate bars 
function generatebars(num = 20) {

	//for loop to generate 20 bars 
	for (let i = 0; i < num; i += 1) {

		// To generate random values from 1 to 100 
		const value = Math.floor(Math.random() * 100) + 1;

		// To create element "div" 
		const bar = document.createElement("div");

		// To add class "bar" to "div" 
		bar.classList.add("bar");

		// Provide height to the bar 
		bar.style.height = `${value * 3}px`;

		// Translate the bar towards positive X axis 
		bar.style.transform = `translateX(${i * 30}px)`;

		// To create element "label" 
		const barLabel = document.createElement("label");

		// To add class "bar_id" to "label" 
		barLabel.classList.add("bar_id");

		// Assign value to "label" 
		barLabel.innerHTML = value;

		// Append "Label" to "div" 
		bar.appendChild(barLabel);

		// Append "div" to "data-container div" 
		container.appendChild(bar);
	}
}



generatebars();


function generate() {
	window.location.reload();
}


function disable() {
	 
	document.getElementById("Button1").disabled = true;
	document.getElementById("Button1").style.backgroundColor = "#d8b6ff";

	 
	document.getElementById("btn").disabled = true;
	document.getElementById("btn").style.backgroundColor = "#d8b6ff";
}



function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function (event) {
	if (!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}








// selection sort
async function SelectionSort(delay = 300) {
	document.getElementsByClassName("head").innerHTML="Selection Sort Visualizer";
	let bars = document.querySelectorAll(".bar");
	
	var min_idx = 0;
	for (var i = 0; i < bars.length; i += 1) {

		// Assign i to min_idx 
		min_idx = i;

		
		bars[i].style.backgroundColor = "darkblue";
		for (var j = i + 1; j < bars.length; j += 1) {

		
			bars[j].style.backgroundColor = "red";

			
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 300)
			);

	
			var val1 = parseInt(bars[j].childNodes[0].innerHTML);

			
			var val2 = parseInt(bars[min_idx].childNodes[0].innerHTML);

		
			if (val1 < val2) {
				if (min_idx !== i) {

				 
					bars[min_idx].style.backgroundColor = "rgb(24, 190, 255)";
				}
				min_idx = j;
			}
			else {

				// Provide skyblue color to the jth bar 
				bars[j].style.backgroundColor = " rgb(24, 190, 255)";
			}
		}

		// To swap ith and (min_idx)th bar 
		var temp1 = bars[min_idx].style.height;
		var temp2 = bars[min_idx].childNodes[0].innerText;
		bars[min_idx].style.height = bars[i].style.height;
		bars[i].style.height = temp1;
		bars[min_idx].childNodes[0].innerText = bars[i].childNodes[0].innerText;
		bars[i].childNodes[0].innerText = temp2;

		// To pause the execution of code for 300 milliseconds 
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 300)
		);

		// Provide skyblue color to the (min-idx)th bar 
		bars[min_idx].style.backgroundColor = " rgb(24, 190, 255)";

		// Provide lightgreen color to the ith bar 
		bars[i].style.backgroundColor = " rgb(49, 226, 13)";
	}

	// To enable the button "Generate New Array" after final(sorted) 
	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";

	// To enable the button "Selection Sort" after final(sorted) 
	document.getElementById("btn").disabled = false;
	document.getElementById("btn").style.backgroundColor = "#6f459e";
}




 


// Bubble Sort
async function BubbleSort(delay = 300) {
	document.querySelector(".head").innerText = "Bubble Sort Visualizer";
	let bars = document.querySelectorAll(".bar");
	// Assign 0 to min_idx 
	for (var i = 0; i < bars.length; i += 1) {

		

	
		for (var j = 0; j < bars.length - i - 1; j += 1) {

			
			bars[j].style.backgroundColor = "red";
			bars[j + 1].style.backgroundColor = "darkblue";


		
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 300)
			);

		
			let val1 = parseInt(bars[j].childNodes[0].innerHTML);

			
			var val2 = parseInt(bars[j + 1].childNodes[0].innerHTML);

		
			if (val1 > val2) {
				temp1 = bars[j].style.height;
				temp2 = bars[j].childNodes[0].innerHTML;
				bars[j].style.height = bars[j + 1].style.height;
				bars[j + 1].style.height = temp1;
				bars[j].childNodes[0].innerHTML = bars[j + 1].childNodes[0].innerHTML;
				bars[j + 1].childNodes[0].innerHTML = temp2;
			}


		}

		
		bars[bars.length - i - 1]
			.style.backgroundColor = "green";
	}
	document.getElementById("Button1").disabled = false;
		document.getElementById("Button1").style.backgroundColor = "#6f459e";

		
		document.getElementById("btn").disabled = false;
		document.getElementById("btn").style.backgroundColor = "#6f459e";
}



//Insertion Sort/

async function insertionSort(delay = 600) {
	document.querySelector(".head").innerText = "Insertion Sort Visualizer";
	let bars = document.querySelectorAll(".bar");
	bars[0].style.backgroundColor = "lightgreen"
	for (let i = 1; i < bars.length; i++) {
		let key = parseInt(bars[i].childNodes[0].innerHTML);
		var barval = document.getElementById("insert");


		barval.innerHTML =
			`<h3>Element Selected is :${key}</h3>`;
		bars[i].style.backgroundColor = "yellow";
		let height = bars[i].style.height;

		let j = i - 1;
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 1000)
		);
		
		while (j >= 0 && parseInt(bars[j].childNodes[0].innerHTML) > key) {
			bars[j].style.backgroundColor = "red";
			bars[j + 1].style.height = bars[j].style.height;
			bars[j + 1].childNodes[0].innerText =
				bars[j].childNodes[0].innerText;

			j = j - 1;
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, 600)
			);
			for (var k = i; k >= 0; k--) {
				bars[k].style.backgroundColor = " rgb(49, 226, 13)";
			}

		}
		bars[j + 1].style.height = height;
		bars[j + 1].childNodes[0].innerHTML = key;
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, 600)
		);
		bars[i].style.backgroundColor = " rgb(49, 226, 13)";



	}

	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";

	
	document.getElementById("btn").disabled = false;
	document.getElementById("btn").style.backgroundColor = "#6f459e";
}





                                                          //// Quick Sort

let count_container = document.getElementById("count");
function generate_idx() { 
	for (var i = 0; i < 20; i++) { 
		// Creating element div 
		var bars2 = document.createElement("div"); 

		// Add kiya hu class 'block2' to div 
		bars2.classList.add("block2"); 

		// Adding style to div 
		bars2.style.height = 
		`${20}px`; 
		bars2.style.transform = 
		`translate(${i * 30}px)`; 

		//adding indexes 
		var bars_label2 = 
		document.createElement("label"); 
		bars_label2.classList.add("block_id3"); 
		bars_label2.innerText = i; 

		// Appending created elements to index.html 
		bars2.appendChild(bars_label2); 
		count_container.appendChild(bars2); 
	} 
	} 

async function hoare_partition(l, r, delay = 700) {
	var bars =
		document.querySelectorAll(".bar");
	var pivot =
		Number(bars[l].childNodes[0].innerHTML);
		

	var i = l - 1;
	var j = r + 1;

	while (true) {
		
		//jb left most wala element greater ho
		// or equal ho pivot ke
		do {
			i++;
			if (i - 1 >= l) bars[i - 1].style.backgroundColor = "red";
			bars[i].style.backgroundColor = "yellow";
			//To wait for 700 milliseconds 
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
		} while (Number(bars[i].childNodes[0].innerHTML) < pivot);

		// jb right most wala element greater ho
		// or equal ho pivot ke 
		do {
			j--;
			if (j + 1 <= r) bars[j + 1].style.backgroundColor = "green";
			bars[j].style.backgroundColor = "yellow";
			//To wait for 700 milliseconds 
			await new Promise((resolve) =>
				setTimeout(() => {
					resolve();
				}, delay)
			);
		} while (Number(bars[j].childNodes[0].innerHTML) > pivot);

		// jb dono pointer met karenge 
		if (i >= j) {
			for (var k = 0; k < 20; k++) bars[k].style.backgroundColor = "#6b5b95";
			return j;
		}

		//swapping ith and jth element 
		var temp1 = bars[i].style.height;
		var temp2 = bars[i].childNodes[0].innerText;
		bars[i].style.height = bars[j].style.height;
		bars[j].style.height = temp1;
		bars[i].childNodes[0].innerText = bars[j].childNodes[0].innerText;
		bars[j].childNodes[0].innerText = temp2;
		//To wait for 700 milliseconds 
		await new Promise((resolve) =>
			setTimeout(() => {
				resolve();
			}, delay)
		);
	}
}

// Asynchronous QuickSort function 
async function QuickSort(l, r, delay = 100) {
	document.querySelector(".head").innerHTML="Quick Sort Visualizer";
	// QuickSort Algorithm 
	if (l < r) {
		//Storing the index of pivot element after partition 
		var pivot_idx = await hoare_partition(l, r);
		//Recursively calling quicksort for left partition 
		await QuickSort(l, pivot_idx);
		//Recursively calling quicksort for right partition 
		await QuickSort(pivot_idx + 1, r);
	}
	document.getElementById("Button1").disabled = false;
	document.getElementById("Button1").style.backgroundColor = "#6f459e";

	// To enable the button "insertion Sort" after final(sorted) 
	document.getElementById("btn").disabled = false;
	document.getElementById("btn").style.backgroundColor = "#6f459e";
}

// ///       mergeSort
// async function merge(start,end){
// 	let mid = (start+end)/2;
// 	let leftlength=mid-start+1;
// 	let rightlength=end-mid;
// 	let k=start;
// 	for(let i=0;i<leftlength;i++){
// 		bars[i].style.height=bars[k].style.height;
// 		bars[i].childNodes[0].innerHTML=bars[i].chil
// 	}

// }


// function mergeSort(start,end,delay =300){
// let bars=document.querySelectorAll(".bar");
// let mid = (start+end)/2;
// mergeSort(start,mid,delay=300);
// mergeSort(mid+1,end,delay=300);
// merge(start,end);

// }




