/** @jsxRuntime classic */
/** @jsx jsx */

import { jsx, ThemeProvider } from 'theme-ui';
import { Route, Switch, Redirect } from 'react-router-dom';
import PageStories from './pages/PageStories';
import PageData from './pages/PageData';
import PageGallery from './pages/PageGallery';
import NavigationBar from './components/NavigationBar';

import './assets/fonts/typography.css';
import theme from './styles/theme.js';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationBar />
      <div className='App' style={{paddingTop: '65px'}}>
        <Switch>
          <Route exact path="/" component={PageStories} />
          <Route exact path="/data" component={PageData} />
          <Route exact path="/gallery" component={PageGallery} />
          <Route component={() => <Redirect to="/" />} />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;