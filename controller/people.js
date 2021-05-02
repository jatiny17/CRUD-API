const data = require("../data.js");

const getData = (req, res) => {
    res.status(200).json({ status: true, data: data.people });
}

const addData = (req, res) => {
    const name = req.body.name;

    if (name) {
        return res.status(201).json({ success: true, person: name });
    }
    res.status(401).json({ success: false, msg: "Please provide proper input" });
}

const updateData = (req, res) => {
    const name = req.body.name;
    const id = req.params.id;

    console.log(id, name);

    if (!name) {
        res.status(401).json({ success: false, msg: "Please provide proper input" });
    }

    const person = data.people.find((person) => {
        return person.id === parseInt(id);
    })

    if (!person) {
        return res.status(401).json({ success: false, msg: `No record with id : ${id} found` });
    }

    const newData = data.people.map((person) => {
        if (person.id === parseInt(id)) {
            person.name = name;
        }

        return person;
    })

    res.status(201).json({ success: true, person: newData });
}

const deleteData = (req, res) => {
    const id = req.params.id;
    console.log(id);

    const person = data.people.find((person) => {
        return person.id === parseInt(id);
    })

    if (!person) {
        return res.status(401).json({ success: false, msg: `No record with id : ${id} found` });
    }

    const newData = data.people.filter((person) => {
        if (person.id !== parseInt(id))
            return person;
    })

    res.status(201).json({ success: true, person: newData });
}

module.exports = { getData, addData, updateData, deleteData };