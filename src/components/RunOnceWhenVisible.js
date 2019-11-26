import { Component } from 'react';
 
class RenderOnceWhenVisible extends Component {
    state = {
        show: true,
        output: null
    }

    render(){
        if (this.state.show === true && this.props.isVisible) {
            this.setState({
                show: false
            });
        }

        if (this.props.isVisible && this.state.show) {
            this.setState({
                output: this.props.children
            })
        }
       
        return this.state.output;
    }
}

export default RenderOnceWhenVisible;
