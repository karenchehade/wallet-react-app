import Main from "./components/main/";
import Nav from "./components/nav/";
// import { BrowserRouter as Router, Route } from 'react-router-dom'

// color to use:
//   black: 3A3B37
//   orange: FF9B26

function App() {
  return (
    // <div className='App'>
    // <Router>
    //   <Nav />
    //   <Route>
    //     <Main />
    //   </Route>
    // </Router>
    // </div>
    <>
      <Nav />
      <Main />
    </>
  );
}

export default App;
