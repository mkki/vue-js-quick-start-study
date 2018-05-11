class Person {
    constructor(name, tel, address) {
        this.name = name;
        this.tel = tel;
        this.address = address;

        if (Person.count) {
            Person.count++;
        } else {
            Person.count = 1;
        }
    }

    static getPersonCount() {
        return Person.count;
    }

    toString() {
        return `name=${this.name}, tel=${this.tel}, address=${this.address}`
    }
}