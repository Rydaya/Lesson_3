let n = Number(prompt('Enter n for calculations'));

console.log('77.');
// // a)
console.log(`a) ${2**n}`);

// б)
let factorial = 1;
for(let i = 1; i <= n; i++) {
	factorial *= i;
	
}
console.log(`б) ${factorial}`);

// в)
let total = 1;
let p = 1;

for(let i = 1; i <= n; i++) {
	p = 1 + (1 / (i**2));
	total *= p;
}
total = Math.floor(total * 100) / 100;
console.log(`в) ${total}`);

// г)
let sin = 0;
let sumSin = 0;

for(let i = 1; i <= n; i++) {
	sin += Math.sin(i);
	sumSin = sumSin + 1 / sin;
}
sumSin = Math.floor(sumSin * 100) / 100;
console.log(`г) ${sumSin}`);

//д)
let sqrt = 0;
let a = 2;

for(let i = 1; i <= n; i++) {
	sqrt = Math.sqrt(a + sqrt);
}

sqrt = Math.floor(sqrt * 100) / 100;
console.log(`д) ${sqrt}`);

let x = Number(prompt('Введите x'));
let y = Number(prompt('Введите y'));
let z = Number(prompt('Введите z'));

console.log('33.');
//a)

if (x > y) {
	console.log(`a) Большее число x: ${x}`);
} else {
	console.log(`a) Большее число y: ${y}`);
}

//б)
if (x > y) {
	console.log(`б) Меньшее число y: ${y}`);
} else {
	console.log(`б) Меньшее число x: ${x}`);
}

//в)
if (x > y) {
	console.log(`в) Большее число x: ${x}`);
	console.log(`   Меньшее число y: ${y}`);
} else {
	console.log(`в) Большее число y: ${y}`);
	console.log(`   Меньшее число x: ${x}`);
}

console.log('34.');

//а)
if (x >= y && x >= z) {
	console.log(`а) Большее число x: ${x}`);
} else if (y >= x && y >= z) {
	console.log(`а) Большее число y: ${y}`);
} else {
	console.log(`а) Большее число z: ${z}`);
}

//б)
if (x >= y && x >= z) {
	console.log(`б) Большее число x: ${x}`);
	if (y > z) {
		console.log(` Меньшее число z: ${z}`);
	} else {
		console.log(` Меньшее число y: ${y}`);
	}
} else if (y >= x && y >= z) {
	console.log(`б) Большее число y: ${y}`);
	if (x > z) {
		console.log(` Меньшее число z: ${z}`);
	} else {
		console.log(` Меньшее число x: ${x}`);
	}
} else {
	console.log(`б) Большее число z: ${z}`);
	if (x > y) {
		console.log(` Меньшее число y: ${y}`);
	} else {
		console.log(` Меньшее число x: ${x}`);
	}
}

console.log('35.');

//а)
if((x + y + z) > (x * y * z)) {
	console.log(`Cумма чисел больше их произведения: ${(x + y + z)}`);
} else if ((x * y * z) > (x + y + z)){
	console.log(`Произведение чисел больше их суммы: ${(x * y * z)}`);
}

//б)

if ((((x + y + z/2) + 1) ** 2) > (((x * y * z) + 1) ** 2)) {
	console.log(`Второе выражение (((x * y * z) + 1) ** 2)) меньше чем первое (((x + y + z/2) + 1) ** 2): ${((x * y * z) + 1) ** 2}`);
} else if ((((x * y * z) + 1) ** 2) > (((x + y + z/2) + 1) ** 2)) {
	console.log(`Первое выражение (((x + y + z/2) + 1) ** 2) меньше чем второе (((x * y * z) + 1) ** 2): ${((x + y + z/2) + 1) ** 2}`);
}