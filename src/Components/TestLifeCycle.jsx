import React from 'react';

class testLifeCycle extends React.Component {
    state = { name: ""}
    constructor(props){
        super(props)

        this.state = {

        }
        console.log("The constructor has been invoked")
    }
    render() {
        console.log("The component has been rendered") //each and every time the componenet mounting and element updating 
        return (
            <div className="my-5">
                
            </div>
        );
    }

    componentDidMount = async () => { //local version of the window.onload access to the state and props
        console.log("The component has been mounted")

        this.setState({
            name: "Strive School"
        })
    }

    componentDidUpdate //It's the part that invoke our updates after rendering the update

    componentWillUnmount //before being removed from the page

}

export default testLifeCycle;