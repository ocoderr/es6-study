class Animal{
    constructor(){
        this.name = 'animal';
    }
    getName(){
        return this.name;
    }

}

class Cat extends Animal{
    constructor(){
        super();
        this.name = 'cat';
    }
}


let animal = new Animal('animal test');
console.log(animal.getName());

let cat = new Cat();
console.log(cat.getName());


