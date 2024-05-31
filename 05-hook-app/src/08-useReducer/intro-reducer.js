const initialState = [{
    id:1,
    todo:'Recolect the stones',
    done:false
}]


const todoReducer = (state = initialState, action) => {






    return state;
}


let todos = todoReducer();

const newTodo = {
    id:2,
    todo:'Recolect the soul stone',
    done:false
}

const addToDoAction = {
    type:'add',
    payload: newTodo
};


 todos = todoReducer(todos, addToDoAction);

console.log({state:todos});