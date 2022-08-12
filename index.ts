let str: string = "Hola Mundo!";

console.log(typeof str);

type Person = {
	name: string;
	age: number;
};

function hello(obj: Person): string {
	return `Hola ${obj.name}. Tu edad es ${obj.age}.`;
}

console.log(hello({ name: "Mauricio", age: 33 }));
console.log(typeof hello({ name: "Mauricio", age: 33 }));

const arr: (number | string)[] = [1, 2, 3, 4, 5, "seis", "siete", "ocho"];
