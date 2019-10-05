import React from 'react';
import { Pages, Navigation, Header } from './components'
import Fullpage from '@ap.cx/react-fullpage';

import './App.css';

const App = () => (
    <Fullpage>
        <Navigation />
        <Header />
        <Pages />
    </Fullpage>
);


export default App;
