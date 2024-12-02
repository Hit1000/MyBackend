const Todo = require("../models/Todo");


exports.getTodo = async(req, res) => {
    try {
        //fetch all todos from database
        const todos = await Todo.find({});

        res.status(200).json({
            success: true,
            data: todos,
            message: "all todos are there"
        });
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Error fetching todos"
        })
    }
}

exports.getTodoById = async(req, res) => {
    try {
        //fetch all todos from database
        const id = req.params.id;
        const todo = await Todo.findById(id);

        //given data not found 
        if(!todo){
            return res.status(404).json({
                success: false,
                message: "no todo is founded"
            })
        }
        res.status(200).json({
            success: true,
            data: todo,
            message: "todo is there"
        });
        
    } catch (error) {
        console.log(error);
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Error fetching todos"
        })
    }
}