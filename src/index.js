import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import About from './Components/About';
import How from './Components/How';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

console.log(Router);



/*ReactDOM.render(<App />, document.getElementById("root"));*/
ReactDOM.render((
    <Router>
        <Switch>
            <Route exact path='/' component={App} />
            <Route path='/about' component={About} />
            <Route path='/howitworks' component={How} />
        </Switch>
    </Router>

), document.getElementById('root'));
registerServiceWorker();
//<App />