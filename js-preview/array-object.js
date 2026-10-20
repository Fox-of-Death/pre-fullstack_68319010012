// อาร์เรย์ และ ออบเจคต์

// Array
const students = ["Earth", "Tho", "silapakorn", "Ood", "Matus"];

console.log(`ก. ทั้งหมด ${students}`);
console.log(`ข. คนแรก ${students[0]}`);
students.push("Mang");
console.log(`ค. หลังเพิ่มข้มมูลใหม่ทำการแสดงผลลัพธ์ที่อัพเดด ${students} จำนวนรายชื่อ ${students.length} คน`);

// Object
const student = {
    id: 101,
    name: "Ice",
    age: "18",
    major: "Information Techonlogy",
};
console.log(`Name ${student.name}`);
console.log(`Majer ${student.major}`);

// Array and Object

const studentList = [
    {id: 101, name: "Ice", age: 20, major: "IT"},
    {id: 101, name: "Ice", age: 19, major: "IT Roblox"},
    {id: 101, name: "Ice", age: 30, major: "IT PUBG"},
];

// map : แปลงทุกตัว ให้ได้ array ใหม่ในปีนี้
const names = studentList.map((s) => `ชื่อ ${s.name} อายุ ${s.age} แผนก ${s.major}`);
console.log(`ข้อมูลที่ใช้การ map : ${names}`)