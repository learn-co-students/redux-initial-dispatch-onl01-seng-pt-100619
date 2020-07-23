let state //1. We declare but do not assign state - UNDEFINED

function changeState(state = {count: 0}, action){ //4. default argument changes state to 0
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default: //5. default executes because type is @@INIT
        return state; //6. State is 0 and passed back to dispatch function
    }
  }

function dispatch(action){ 
    state = changeState(state, action) //3. Calls initial function (reducer) with 2 local variables (action defined below)
    render()//7. Renders 0 in HTML
}

function render(){
    document.body.textContent = state.count
}

dispatch({ type: '@@INIT' }) //2. Calls dispatch function with action = @@INIT 
