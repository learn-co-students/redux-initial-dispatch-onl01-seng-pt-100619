let state;

function changeState(state = { count: 0 }, action){
    switch (action.type) {
      case 'INCREASE_COUNT':
        return {count: state.count + 1}
      default:
        return state;
    }
  }

function dispatch(action){
    state = changeState(state, action)
    render()
}

function render(){
    document.body.textContent = state.count
}

//benefits of using @@INIT:
// 1. an initial rendering of the state
// 2. the ability to set our initial state in our reducer
dispatch({ type: '@@INIT' })
dispatch({type: 'INCREASE_COUNT'})