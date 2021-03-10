import Header from './features/header/Header';
import SidebarNav from './features/Nav/SidebarNav';
import Footer from './features/footer/Footer';

import HomeContent from './features/home/HomeContent';
import TodoApp from './features/todoApp/components/TodoApp';
import WeatherApp from './features/weather/components/WeatherApp';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

const styles = {
  app: {
    display: 'grid',
    gridTemplateRows: 'auto 1fr auto',
    minHeight: '100vh'
  },
  main: {
    height: '100%',
    padding: '10px 0 10px',
  },
  mainContent: {
    display: 'flex',
    height: '100%'
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
    <div style={styles.app} className="App">
      <Router>
        <Header />
        <main style={styles.main} className='main'>
          <div style={{ height: '100%' }} className='container main__container'>
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
                  <Route exact path='/weather'>
                    <WeatherApp />
                  </Route>
                </Switch>
              </div>
            </div>
          </div>
        </main>
      </Router>
      <Footer />
    </div>
  );
};

export default App;
