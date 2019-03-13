import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import * as serviceWorker from './serviceWorker';

import Header from "./Header"
import Body from "./Body"
// import Footer from "./Footer"

const  tag1 = <div>
<Header />
<Body name="Rajashekar Ryada"
designation ="Technical Lead"
skills="Android ,Java, Kotlin , React JS"
phone="+5213320866670"
about="Passionate Developer" />
{/* <Footer/> */}
</div>


ReactDOM.render(tag1, document.getElementById('root'));

// serviceWorker.unregister();
