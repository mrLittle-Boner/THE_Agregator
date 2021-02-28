import Header from './features/header/Header';
import SidebarNav from './features/Nav/SidebarNav';
import HomeContent from './features/home/HomeContent';
import TodoApp from './features/todoApp/TodoApp';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const styles = {
  mainContent: {
    display: 'flex',
    marginTop: '10px'
  },
  wrapper: {
    marginLeft: '10px',
    border: '1px solid teal',
    flexGrow: '1',
    padding: '10px 5px'
  }
};

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <main className='main'>
          <div className='container main__container'>
            <div style={styles.mainContent} className="main__content">
              <SidebarNav />
              <div style={styles.wrapper} className='main__content-wrapper'>
                <Switch>
                  <Route exact path='/'>
                    <HomeContent />
                  </Route>
                  <Route exact path='/todos'>
                    <TodoApp />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>

        </main>
      </Router>
    </div>
  );
};

export default App;
