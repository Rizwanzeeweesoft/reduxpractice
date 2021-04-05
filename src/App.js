
import './assets/css/App.css';
import {Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import Header from "./Header"
import Form from "./components/Form";
import FormEdit from './components/FormEdit';
function App() {
  return (
   
      <div className="App">
       <Header/>
       <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Home" component={Home}/>
          <Route exact path="/form" component={Form}/>
          <Route exact path="/edit-user/:id" component={FormEdit}/>
          

        </Switch>
        
      </div>
    
  );
}

export default App;
