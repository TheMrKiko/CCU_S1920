import React from 'react';
import { Pages, Header } from './components'
import ReactFullpage from '@fullpage/react-fullpage';

import './App.css';

const App = () => (
    <div className="App">
        <Header />
        <ReactFullpage
            navigation
            licenseKey={'bDP5kpT?i1'}
            sectionsColor={['#ffffff', '#000000']}
            render={() => (
                <Pages />
            )}
        />
    </div>
);


export default App;
