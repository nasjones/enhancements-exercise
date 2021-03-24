/* Write an ES2015 Version */
let createInstructor = (firstName, lastName) => ({
	firstName,
	lastName,
});

/* Write an ES2015 Version */
let favoriteNumber = 42;

let instructor = {
	firstName: "Colt",
	[favoriteNumber]: "That is my favorite!",
};

/* Write an ES2015 Version */
instructor = {
	firstName: "Colt",
	sayHi() {
		return "Hi!";
	},
	sayBye() {
		return this.firstName + " says bye!";
	},
};

let createAnimal = (species, sound, speak) => ({
	species,
	[sound]() {
		console.log(speak);
	},
});

const d = createAnimal("dog", "bark", "Woooof!");
// {species: "dog", bark: ƒ}
d.bark(); //"Woooof!"

const s = createAnimal("sheep", "bleet", "BAAAAaaaa");
// {species: "sheep", bleet: ƒ}
s.bleet(); //"BAAAAaaaa"
