// Create the Dog class constructor
class Dog {
		//give it expected parameters
		constructor(name, age, breed, color) {
				//set those equal to the instance
				this.name = name;
				this.age = age;
				this.breed = breed;
				this.color = color;
				this.energyLevel = 0;
				this.barkLevel = 10;
	}

		// Pat method 5 times
		pat() {
		//increment energy
		this.energyLevel++
		//decrement bark
		this.barkLevel--;
		//log out the dog's info
		console.log(`this dog's name is ${this.name}, age is ${this.age}, breed is ${this.breed}, current energy is ${this.energyLevel}, current bark is ${this.barkLevel}.`);
	}
}

// Create Marty
const marty = new Dog('Marty', 6, 'Mutt', 'Brown');

// Pat him 5 times
marty.pat();
marty.pat();
marty.pat();
marty.pat();
marty.pat();

// document.querySelector("#list-container").innerHTML = "hello"
