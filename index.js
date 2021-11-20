let n = Number(prompt('Enter n for calculations'));

console.log('77.');
// // a)
// console.log(`a) ${2**n}`); - прошлое дз

function pow(n) {
	let result = 1;
	for(let i = 0; i < n; i++) {
		result *= 2;
	}
	return result;
}
console.log(`a) ${pow(n)}`);

// // б)
// let factorial = 1;
// for(let i = 1; i <= n; i++) {
// 	factorial *= i;
// }
// console.log(`б) ${factorial}`); - прошлое дз

function factorial(n) {
	let result = 1;
	for(let i = 1; i <= n; i++) {
		result *= i;
	}
	return result;
}
console.log(`б) ${factorial(n)}`);


// // в)
// let total = 1;
// let p = 1;

// for(let i = 1; i <= n; i++) {
// 	p = 1 + (1 / (i**2));
// 	total *= p;
// }
// total = Math.floor(total * 100) / 100;
// console.log(`в) ${total}`); - прошлое дз

function fraction(n) {
	let result = 1;
	for(let i = 1; i <= n; i++) {
		result *= 1 + (1 / (i**2));
	}
	result = Math.floor(result * 100) / 100;
	return result;
}
console.log(`в) ${fraction(n)}`);


// // г)
// let sin = 0;
// let sumSin = 0;

// for(let i = 1; i <= n; i++) {
// 	sin += Math.sin(i);
// 	sumSin += 1 / sin;
// }
// sumSin = Math.floor(sumSin * 100) / 100;
// console.log(`г) ${sumSin}`); - прошлое дз


function sumSin(n) {
	let result = 0;
	let sin = 0;
	for(let i = 1; i <= n; i++) {
		sin += Math.sin(i);
		result += 1 / sin;
	}
	result = Math.floor(result * 100) / 100;
	return result;
}
console.log(`г) ${sumSin(n)}`);

// //д)
// let sqrt = 0;
// let a = 2;

// for(let i = 1; i <= n; i++) {
// 	sqrt = Math.sqrt(a + sqrt);
// }

// sqrt = Math.floor(sqrt * 100) / 100;
// console.log(`д) ${sqrt}`); - прошлое дз


function sqrt(n) {
	let result = 0;
	let a = 2;
	for(let i = 1; i <= n; i++) {
		result = Math.sqrt(result + a);
	}
	result = Math.floor(result * 100) / 100;
	return result;
}
console.log(`д) ${sqrt(n)}`);


let x = Number(prompt('Введите x'));
let y = Number(prompt('Введите y'));
let z = Number(prompt('Введите z'));

console.log('33.');

// //a)

// if (x > y) {
// 	console.log(`a) Большее число x: ${x}`);
// } else {
// 	console.log(`a) Большее число y: ${y}`);
// } - прошлое дз

function compareMax(x, y) {
	if (x > y) {
		return x;
	} else if (x < y) {
		return y;
	}
}
console.log(`a) Большее число: ${compareMax(x, y)}`);
// //б)
// if (x > y) {
// 	console.log(`б) Меньшее число y: ${y}`);
// } else {
// 	console.log(`б) Меньшее число x: ${x}`);
// } - прошлое дз

function compareMin(x, y) {
	if (x < y) {
		return x;
	} else if (x > y) {
		return y;
	}
}
console.log(`б) Меньшее число: ${compareMin(x, y)}`);


// //в)
// if (x > y) {
// 	console.log(`в) Большее число x: ${x}`);
// 	console.log(`   Меньшее число y: ${y}`);
// } else {
// 	console.log(`в) Большее число y: ${y}`);
// 	console.log(`   Меньшее число x: ${x}`);
// }

function compareMaxMin(compareMax, compareMin) {
	let result = `в) Большее число: ${compareMax(x,y)}, меньшее число: ${compareMin(x,y)}`;
	return result;
}
console.log(compareMaxMin(compareMax, compareMin));



console.log('34.');

// //а)
// if (x >= y && x >= z) {
// 	console.log(`а) Большее число x: ${x}`);
// } else if (y >= x && y >= z) {
// 	console.log(`а) Большее число y: ${y}`);
// } else {
// 	console.log(`а) Большее число z: ${z}`);
// }

function compareArrayMax(...array) {
	let maxValue = Number.MIN_VALUE;
	for(let i = 0; i < array.length; i++) {
		if(array[i] > maxValue) {
			maxValue = array[i];
		}
	}
	return maxValue;
}
console.log(`a) Большее из всех чисел: ${compareArrayMax(x, y, z)}`);


// //б)

// if (x >= y && x >= z) {
// 	console.log(`б) Большее число x: ${x}`);
// 	if (y > z) {
// 		console.log(` Меньшее число z: ${z}`);
// 	} else {
// 		console.log(` Меньшее число y: ${y}`);
// 	}
// } else if (y >= x && y >= z) {
// 	console.log(`б) Большее число y: ${y}`);
// 	if (x > z) {
// 		console.log(` Меньшее число z: ${z}`);
// 	} else {
// 		console.log(` Меньшее число x: ${x}`);
// 	}
// } else {
// 	console.log(`б) Большее число z: ${z}`);
// 	if (x > y) {
// 		console.log(` Меньшее число y: ${y}`);
// 	} else {
// 		console.log(` Меньшее число x: ${x}`);
// 	}
// }

function compareArrayMin(...array) {
	let minValue = Number.MAX_VALUE;
	for(let i = 0; i < array.length; i++) {
		if(array[i] < minValue) {
			minValue = array[i];
		}
	}
	return minValue;
}

function compareArrayMinMax(compareArrayMin, compareArrayMax) {
	let result = `б) Меньшее из всех чисел: ${compareArrayMin(x, y, z)}, большее из всех чисел: ${compareArrayMax(x, y, z)}`;
	return result;
}
console.log(compareArrayMinMax(compareArrayMin, compareArrayMax));

// console.log('35.');

// //а)
// if((x + y + z) > (x * y * z)) {
// 	console.log(`Cумма чисел больше их произведения: ${(x + y + z)}`);
// } else if ((x * y * z) > (x + y + z)){
// 	console.log(`Произведение чисел больше их суммы: ${(x * y * z)}`);
// }
function compareSumMultiplie(x, y, z) {
	if ((x + y + z) > (x * y * z)) {
		return (x + y + z);
	}
	return (x * y * z);
}
console.log(compareSumMultiplie(x, y, z));

// //б)

// if ((((x + y + z/2) + 1) ** 2) > (((x * y * z) + 1) ** 2)) {
// 	console.log(`Второе выражение (((x * y * z) + 1) ** 2)) меньше чем первое (((x + y + z/2) + 1) ** 2): ${((x * y * z) + 1) ** 2}`);
// } else if ((((x * y * z) + 1) ** 2) > (((x + y + z/2) + 1) ** 2)) {
// 	console.log(`Первое выражение (((x + y + z/2) + 1) ** 2) меньше чем второе (((x * y * z) + 1) ** 2): ${((x + y + z/2) + 1) ** 2}`);
// }

function compareExpressions(x, y, z) {
	if ((((x + y + z/2) + 1) ** 2) > (((x * y * z) + 1) ** 2)) {
		return (((x + y + z/2) + 1) ** 2);
	}
	return (((x * y * z) + 1) ** 2);
}
console.log(compareExpressions(x, y, z));