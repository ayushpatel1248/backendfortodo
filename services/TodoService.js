const Todo = require('../model/Todo');

const TodoServices = {}

TodoServices.add = async (name) => {
    console.log("here")
    try {
        console.log(name)
        let nameAdded = await Todo.create(name);
        return {
            status: "OK",
            msg: "Item added to cart successfully",
            data: nameAdded
        }
    } catch (err) {
        return {
            status: 500,  
            msg: "Server error",
            data: err.message || err
        }
    }
}

TodoServices.view = async () => {
    console.log("view")
    try {
        let all = await Todo.find({});
        return {
            status: "OK",
            msg: "all item list",
            data: all
        }
    } catch (err) {
        return {
            status: 500,  
            msg: "Server error",
            data: err.message || err
        }
    }
}

TodoServices.delete = async (id) => {
    console.log("Deleting Todo with ID:", id);
    try {
        const deletedTodo = await Todo.findByIdAndDelete(id);
        
        if (!deletedTodo) {
            return {
                status: 404,
                msg: "Todo not found",
                data: null
            };
        }

        return {
            status: "OK",
            msg: "Todo item deleted successfully",
            data: deletedTodo
        };
    } catch (err) {
        return {
            status: 500,
            msg: "Server error",
            data: err.message || err
        };
    }
}

TodoServices.edit = async (_id, updatedData) => {
    console.log("Editing Todo with ID", _id);
    try {
        const updatedTodo = await Todo.findOneAndUpdate({_id}, updatedData, { new: true });
        
        if (!updatedTodo) {
            return {
                status: 404,
                msg: "Todo not found",
                data: null
            };
        }

        return {
            status: "OK",
            msg: "Todo item updated successfully",
            data: updatedTodo
        };
    } catch (err) {
        return {
            status: 500,
            msg: "Server error",
            data: err
        };
    }
};



module.exports = TodoServices;
