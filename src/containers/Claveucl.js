import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

// FDR para MTT



class Claveucl extends React.Component {
    constructor() {
        super();
        this.state = {
            render: false //Set render state to false
        }
    }

    componentDidMount() {
        console.log('dasd');
        setTimeout(function () { //Start the timer
            this.setState({ render: true }) //After 1 second, set render to true
        }.bind(this), 10000)
    }


    render() {
        let renderContainer = false //By default don't render anything
        if (this.state.render) { //If this.state.render == true, which is set to true by the timer.
            renderContainer = <div>Look at me! I'm content!</div> //Add dom elements

        }
        return (
            <div className="loader-view">
                <CircularProgress />
                <CircularProgress />
                <CircularProgress />
            </div>
            
        )
    }
}



export default Claveucl;
