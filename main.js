const app = require('express')();
const data = require('./students.json');
app.listen(3000, () => console.log("Server is running"));

app.get('/api/students', (req, res) => {
    res.json(data.map(v => ({
        id: v.id,
        name: `${v.first_name} ${v.last_name}`,
    }))
    );
})

app.get('/api/students/:id', (req, res) => {
    const id = req.params.id;
    const student = data.find(student => student.id === parseInt(id));
    if (student) {
        res.json(student);
    } else {
        res.status(404).send("Not found")
    }
})