class TeamMember{
  name;
  address = "BD";
  constructor(name, address) {
    this.name = name;
    this.address = address;
  }
}


class Support extends TeamMember{
  groupSupportTime;
  constructor(name, address, time) {
    super(name, address)
    this.groupSupportTime = time;
  }
  startSession() {
    console.log(this.name, "start a support session");
  }
}

class StudentCare extends TeamMember{
  designation = 'Care Web Dev'
  buildARoutine(student) {
    console.log(this.name, 'Build a routine for', student);
  }
}
class NeptuneDev extends TeamMember {
  codeEditor;
  designation = "Neptune App Dev";
  constructor(name, address, editor) {
    super(name, address);
    this.codeEditor = editor;
  }
  releaseApp(version) {
    console.log(this.name, "release app version", version);
  }
}

const aamir = new Support("Aamir Khan", "Delhi", 11);
const salman = new Support("Salman Khan", "Dubai", 4);
const shahrukh = new Support("SRK", "Chennai", 9);
const saif = new Support("Nobab", "bangkok", 11);

const Ratna = new StudentCare('Ratna Khatun', 'Chatari');
const Fozlay = new NeptuneDev('Fozlay Rabbi', 'Binodpur', 'Android Studio');
Fozlay.releaseApp('1.4.5');
console.log(Fozlay.name);
