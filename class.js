class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD'
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}
const aamir = new Support('Aamir Khan', 'Delhi');
const salman = new Support('Salman Khan', 'Dubai');
const shahrukh = new Support('SRK', 'Chennai');
const saif = new Support('Nobab', 'bangkok');
aamir.startSession();
salman.startSession();
shahrukh.startSession();
saif.startSession();
console.log(aamir, salman, shahrukh, saif);