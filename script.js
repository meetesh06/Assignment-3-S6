function findMaxSequence (a) {
	var answer = [];
	for (var i = 0; i < 5; i++) {
		if (a.length > 5){
			console.log("This Function supports upto 5 values max");
		}
		console.log("value of i is ", i);
		if (i == 0) {
			if (a[0] == a[1]) {
				console.log("a[0] == a[1], should be deleted");
				a[1] = "deleted";
			}
			if (a[0] == a[2]) {
				console.log("a[0] == a[2], should be deleted");
				a[2] = "deleted";
			}
			if (a[0] == a[3]) {
				console.log("a[0] == a[3], should be deleted");
				a[3] = "deleted";
			}
			if (a[0] == a[4]) {
				console.log("a[0] == a[4], should be deleted");
				a[4] = "deleted";
			}
		}
		if (i == 1) { 
			if (a[1] == "deleted") {
				console.log(a[1] + " deletion code works");
				continue;
			} else {
				console.log("a[1] was not deleted");
				if (a[1] == a[0]) {
					console.log("a[1] == a[0], should be deleted");
					a[0] = "deleted";
				}
				if (a[1] == a[2]) {
					console.log("a[1] == a[2], should be deleted");
					a[2] = "deleted";
				}
				if (a[1] == a[3]) {
					console.log("a[1] == a[3], should be deleted");
					a[3] = "deleted";
				}
				if (a[1] == a[4]) {
					console.log("a[1] == a[4], should be deleted");
					a[4] = "deleted";
				}
			}
		}
		
		if (i == 2) { 
			if (a[2] == "deleted") {
				console.log(a[2] + " deletion code works");
				continue;
			} else {
				console.log("a[2] was not deleted");
				if (a[2] == a[0]) {
					console.log("a[2] == a[0], should be deleted");
					a[0] = "deleted";
				}
				if (a[2] == a[1]) {
					console.log("a[2] == a[1], should be deleted");
					a[1] = "deleted";
				}
				if (a[2] == a[3]) {
					console.log("a[2] == a[3], should be deleted");
					a[3] = "deleted";
				}
				if (a[2] == a[4]) {
					console.log("a[2] == a[4], should be deleted");
					a[4] = "deleted";
				}
			}
		}

		if (i == 3) { 
			if (a[3] == "deleted") {
				console.log(a[3] + " deletion code works");
				continue;
			} else {
				console.log("a[3] was not deleted");
				if (a[3] == a[0]) {
					console.log("a[3] == a[0], should be deleted");
					a[0] = "deleted";
				}
				if (a[3] == a[1]) {
					console.log("a[3] == a[1], should be deleted");
					a[1] = "deleted";
				}
				if (a[3] == a[2]) {
					console.log("a[3] == a[2], should be deleted");
					a[2] = "deleted";
				}
				if (a[3] == a[4]) {
					console.log("a[3] == a[4], should be deleted");
					a[4] = "deleted";
				}
			}
		}

		if (i == 4) { 
			if (a[4] == "deleted") {
				console.log(a[4] + " deletion code works");
				continue;
			} else {
				console.log("a[4] was not deleted");
				if (a[4] == a[0]) {
					console.log("a[4] == a[0], should be deleted");
					a[0] = "deleted";
				}
				if (a[4] == a[1]) {
					console.log("a[4] == a[1], should be deleted");
					a[1] = "deleted";
				}
				if (a[4] == a[2]) {
					console.log("a[4] == a[2], should be deleted");
					a[2] = "deleted";
				}
				if (a[4] == a[3]) {
					console.log("a[4] == a[3], should be deleted");
					a[3] = "deleted";
				}
			}
		}
	}
	a = a.sort();
	console.log(a);
	console.log(answer);
	for (i = 0; i < 5; i++) {
		if (a[i] == "deleted") {
			console.log("deleted detected");
			a.splice(i, 10);
			break;
		}
	}
	console.log(a);
}

// var skip0 = false;
// var skip1 = false;
// var skip2 = false;
// var skip3 = false;
// var skip4 = false;

// var id1_0 = false;
// var id1_1 = false;
// var id1_2 = false;
// var id1_3 = false;
// var id1_4 = false;

// var id2_0 = false;
// var id2_1 = false;
// var id2_2 = false;
// var id2_3 = false;
// var id2_4 = false;

// var id3_0 = false;
// var id3_1 = false;
// var id3_2 = false;
// var id3_3 = false;
// var id3_4 = false;

// var answer = [];

// function findMaxSequence (a) {

// 	answer.push(a[0]);

// 	for (var i = 0; i <= 5; i++) {
// 		if (i == 0){
// 			if (a[0] == a[1]) {
// 				console.log("a[0] is equal to a[1]");
// 				skip1 = true;
// 				} else {
// 					if ( a[1] == a[2]) {
// 						console.log("a[1] is equal to a[2]");
// 						skip2 = true;	
// 					} 
// 					if ( a[1] == a[3]){
// 						console.log("a[1] is equal to a[3]");
// 						skip3 = true;
// 					}  
// 					if ( a[1] == a[4]){
// 						console.log("a[1] is equal to a[4]");
// 						skip4 = true;
// 					}
// 					answer.push(a[1]);
// 				}
// 		}
// 		if (i == 1){
// 			if (skip1 == true) {
// 			console.log("skipping i = 1");
// 			break;
// 			} else {
// 				if (a[1] == a[2]) {
// 				console.log("a[1] is equal to a[2]");
// 				skip2 = true;
// 				} else {
// 					if ( a[2] == a[3]) {
// 						console.log("a[2] is equal to a[3]");
// 						skip3 = true;	
// 					} 
// 					if ( a[2] == a[4]){
// 						console.log("a[2] is equal to a[4]");
// 						skip4 = true;
// 					}  
// 					if ( a[2] == a[0]){
// 						console.log("a[2] is equal to a[0]");
// 						skip0 = true;
// 						id1_0 = true;
// 					} 
// 					if (id1_0 == false) {
// 						answer.push(a[2]);
// 					}
// 				}
// 			}
// 		}
// 		if (i == 2){
// 			if (skip2 == true) {
// 			console.log("skipping i = 2");
// 			break;
// 			} else {
// 				if (a[2] == a[3]) {
// 				console.log("a[2] is equal to a[3]");
// 				skip3 = true;
// 				} else {
// 					if ( a[3] == a[4]) {
// 						console.log("a[3] is equal to a[4]");
// 						skip4 = true;	
// 					} 
// 					if ( a[3] == a[0]) {
// 						console.log("a[3] is equal to a[0]");
// 						skip0 = true;
// 						id2_0 = true;	
// 					} 
// 					if ( a[3] == a[1]) {
// 						console.log("a[3] is equal to a[1]");
// 						skip1 = true;
// 						id2_1 = true	
// 					} 
// 					if (id2_0 == false && id2_1 == false)
// 						answer.push(a[3]);
// 				}
// 			}
// 		}
// 		if (i == 3){
// 			if (skip3 == true) {
// 			console.log("skipping i = 3");
// 			break;
// 			} else {
// 					if ( a[4] == a[0]) {
// 						console.log("a[4] is equal to a[0]");
// 						skip4 = true;
// 						id3_0 = true;	
// 					} 
// 					if ( a[4] == a[1]) {
// 						console.log("a[3] is equal to a[0]");
// 						skip0 = true;	
// 						id3_1 = true;
// 					} 
// 					if ( a[4] == a[2]) {
// 						console.log("a[3] is equal to a[1]");
// 						skip1 = true;
// 						id3_2 = true;	
// 					} 
// 					if (id3_0 == false && id3_1 == false && id3_2 == false) 
// 						answer.push(a[4]);
// 			}
// 		}
// 		if (i == 4) {
// 			answer.push(a[4]);
// 		}
// 	}
		
// 	console.log(answer.sort());
// 	skip1 = false;
// 	skip2 = false;
// 	skip3 = false;
// 	skip4 = false;
// 	answer = [];
// }

// WORKING CODES 

// [FOR 3 VALUES]

// var skip1 = false;
// var skip2 = false;
// var answer = [];
// function findMaxSequence (a) {
// 	for (var i = 0; i < a.length; i++) {
// 		if (i == 0) {
// 			answer.push(a[0]);
// 			if (a[0] == a[1]) {
// 				skip1 = true;
// 			} else if (a[1] == a[2]) {
// 				answer.push(a[1]);
// 				skip2 = true;
// 			} else {
// 				answer.push(a[1]);
// 			}

// 			if (a[0] == a[2]) {
// 				skip2 = true;
// 			} else if ( skip2 == true ) {
// 				break;
// 			} else {
// 				answer.push(a[2]);
// 			}
// 		}
// 	}
// 	console.log(answer.sort());
// 	skip1 = false;
// 	skip2 = false;
// 	answer = [];
// }