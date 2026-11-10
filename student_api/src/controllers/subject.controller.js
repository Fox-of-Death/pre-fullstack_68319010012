const prisma = require("../prisma")

//ดึงข้อมูลรายวิชาทั้งหมด
exports.getAllSubjects = async (req, res) => {
    try {
        const search = req.query.search || "";
        const supjects = await prisma.subject.findMany({
            where: { name: { contains: search } },
            orderBy: { id: "asc" },
        });
        res.json(supjects)
    } catch {
        res.status(500).json({ message: "Error" });
    }
}

//ดึงข้อมูลรายวิชา
exports.getSubjectById = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const subject = await prisma.subject.findUnique({
            where: { id }
        })
        if (!subject) {
            return res.status(404).json({ message: 'subjects not found' })
        }
        res.json(subject)
    } catch {
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

//เพิ่มข้อมูลรายวิชา
exports.createSubject = async (req, res) => {
    try {
        const { subjectCode, name, objective, description, theoryHours, practiceHours, cradits, teacherName } = req.body;
        if (!subjectCode || !name || !objective || !description || !theoryHours || !practiceHours || !cradits || !teacherName) {
            return res.status(400).json({ message: 'please Field Information' })
        }
        const newSubject = await prisma.subject.create({
            data: { subjectCode, name, objective, description: description || Null, theoryHours: Number(theoryHours), practiceHours: Number(practiceHours), cradits: Number(cradits), teacherName }
        });
        res.status(201).json(newSubject)
    } catch {
        res.status(500).json({ message: `Internal Server Error` });
    }
}

exports.updateSubject = async (req, res) => {
    const id = Number(req.params.id)
    try {
        const { subjectCode, name, objective, description, theoryHours, practiceHours, cradits, teacherName } = req.body;
        if (!subjectCode || !name || !objective || !description || !theoryHours || !practiceHours || !cradits || !teacherName) {
            return res.status(400).json({ message: 'Please Field Information' });
        }
        const updateSubject = await prisma.subject.update({
            where: { id }, data: { subjectCode, name, objective, description: description || Null, theoryHours: Number(theoryHours), practiceHours: Number(practiceHours), cradits: Number(cradits), teacherName }
        });
        res.status(200).json(updateSubject);
    } catch {
        res.status(404).json({ message: `Subject not found ${id}` })
    }
};

exports.deleteSubject = async (req, res) => {
    const id = Number(req.params.id)
    try {
        const deleteStudent = await prisma.subject.delete({
            where: { id }
        })

        res.status(200).json({ deleteStudent, message: `Subject ${id} deleted successfully` })
    } catch {
        res.status(404).json({ message: `Subject not found ${id}` })
    }
};