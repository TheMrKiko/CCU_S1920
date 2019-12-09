import React from 'react';
import { Pages, Header } from './components'
import ReactFullpage from '@fullpage/react-fullpage';

import './App.css';

const App = () => (
    <div className="App">
        <Header />
        <ReactFullpage
            licenseKey={'bDP5kpT?i1'}
            menu={'#menu'}
            anchors={['home', 'work', 'aboutus']}
            sectionsColor={['#0E0055', '#090033', '#030011']}
            render={() => (
                <Pages />
            )}
        />
    </div>
);


export default App;
