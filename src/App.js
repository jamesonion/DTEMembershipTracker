import React, {Component} from 'react'
import './Assets/css/default.min.css'
import './Assets/components/Navbar.js'
import bgimg from './Assets/img/background.png'

class App extends Component {
    render() {
        return (
            <div styles={{backgroundImage: `url(${bgimg})`}}>
                heelo
            </div>
            

        );
    }
}

export default App;