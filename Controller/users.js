const fs = require('fs');
const usersData = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
const users = usersData.users;
exports.createUser = (req, res) => {
    try{
        const data = req.body;
        if(data){
            const success = users.push(data);
            res.status(201).json({"success": "Data Inserted"});
        }
    } catch(err){
        console.log("err", err);
        res.status(400).json({"message": "Not inserted"});

    }
}
exports.getAllusers = (req, res) => {
    console.log(req.method)
    try{
        res.status(200).json({"success": users});
    }
    catch(err){
        console.log("err", err);
        res.status(202).json({"message": "Not Found"});
    }
}
exports.getUser = (req, res) => {
    try {
        const id = +req.params.id;
        const findUser = users.find(u => u.id === id);
        res.status(200).json({"success": findUser})
    } catch(err){
        console.log("err", err);
        res.status(400).json({"message": "Not Found"})
    }
}
exports.replaceUser = (req, res) => {
    try {
        const id = +req.params.id;
        if(id !== -1){
            const findIndex = users.find(u => u.id === id);
            const success = users.splice(findIndex, 1, {id: id, ...req.body});
            res.status(200).json({"success": "Data Updated"});
        }
    } catch(err){
        console.log("err", err);
        res.status(400).json({"message": "Not Update"})
    }
}
exports.updateUser = (req, res) => {
    try{
        const id = +req.params.id;
        const data = req.body;
        if(id !== -1){
            const findIndex = users.find(u => u.id === id);
            const existingUser = users[findIndex];
            const updateUser = users.splice(findIndex, 1, {...existingUser, ...data})
            res.status(200).json({"success": updateUser});
        }

    } catch(err){
        console.log("err", err);
        res.status(400).json({"message": "Not Updated"});
    }
}
exports.deleteUser = (req, res) => {
    try{
        const id = +req.params.id;
        const findIndex = users.find(id => u.id === id);
        const deleteUser = users.splice(findIndex, 1);
        if(deleteUser){
            res.status(200).json({"success": "Data Deleted"})
        }

    } catch(err) {
        console.log("err", err);
        res.status(400).json({"message": "Not Delete"});
    }
}