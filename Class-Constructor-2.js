class Car 
{   constructor(name, year)
    {   this.name = name;
        this.year = year;
    }

    run(speed)
    { console.log(`${this.name} in invented ${this.year}. Drive ${speed}.`)}
}

const bmw = new Car ('BMW', 1999);
const audi = new Car ('Audi', 2000);

bmw.run(`99 km per hour.`);
audi.run(`100 km per hour.`);