function firstNonRepeatedChar(str) {
 // Write your code here
	let arr = [0];
	for(let i=0;i<str.length;i++){
		let index =str.charCodeAt(i)-97;
		if(arr[index] == undefined) arr[index] = 1;
		else
		arr[index]++;
	}

	let result ='';

	for(let i=0;i<str.length;i++){
		let index =str.charCodeAt(i)-97;
		if(arr[index] === 1){
			result=str.charAt(i);
			break;
		}
	}
	console.log(result);
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
