class Car 
{   constructor(name, year)
    {   this.name = name;
        this.year = year;
    }

    run()
    { console.log(`${this.name} in invented ${this.year}.`)}
}

const bmw = new Car ('BMW', 1999);
const audi = new Car ('Audi', 2000);

bmw.run();
audi.run();