import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  useRouteMatch,
  useParams
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import Contact from './components/Contact';
//import NavbarTest from './components/NavbarTest';
import React, { useState } from 'react';

function HandleGreeting({ call, message}) {
  return(
    <div>
      <button onClick={call} className="btn btn-primary" type="button">Reresh</button>
      <p>{message}! My name is Luis and I am a Software Devloper. My interest in technology is rooted in the ability build projects that help others.</p>
      <p>Whether that means helping people on their business goals or being entertained in their leisure time, software applications can enable this.</p>

      <p>Some of the technologies I have used in my experience include:</p>
      <ul>
        <li>Java</li>
        <li>MySQL</li>
        <li>Azure</li>
      </ul>
    </div>
  )
}
function Home(){
  const [isMorning, setGreeting] = useState(false);

  let view = isMorning ?
    <HandleGreeting call={() => setGreeting(false)} message="Good morning"/> :
    <HandleGreeting call={() => setGreeting(true)} message="Hello"/>;
  return (
    <div>
      <h1>Home Page</h1><hr />
      {view}
    </div>
  )
}

function Work(){
  return <div><h1>Work Experience</h1><hr /></div>
}


export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.wrapperRef = React.createRef();
  }
  render() {return (

    <Router>
      <div id="wrapper" ref={this.Ref}>
        <div id="sidebar-wrapper">
          <Navbar wrapper={this.wrapperRef}/>
        </div>
        <div id="page-content">
          <div className="container-fluid">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/projects" component={Projects}/>
              <Route path="/work">
                <Work />
              </Route>
              <Route path="/contact">
                <Contact />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>

  );}
}