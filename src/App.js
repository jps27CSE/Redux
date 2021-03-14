import store from './store';
import {bugAdded} from './actions';
function App() {

const unsubcribe=  store.subscribe (()=>{
    console.log("Store Changed !", store.getState())
  })

  store.dispatch(bugAdded("Bug 1"))

  unsubcribe()

  console.log(store.getState())

  return (
    <div className="App">
       <h1>Hello World</h1>
    </div>
  );
}

export default App;
