//import dbmodul because we are writing in db
const Todo = require("../models/Todo");

// defining route handler because if this is here mean someone click of create todo button 
// dont class network on main thread 

exports.createTodo = async(req, res) => {
    try {
        // extract the title and desc from the body
        const {title, description} = req.body;

        // now create a new obj of todo and insert it in db
        const response = await Todo.create({title, description});

        // send a json response of success
        res.status(200).json({
            success: true,
            data: response,
            message: "Entry created Successfully"
        })

    } catch (error) {
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            data: "internal server error",
            message: "Error creating entry => "+error.message,
        });
    }
}