import React, { Component, PropTypes } from 'react'

//State is when the component can change itself.
//props only get passed down from parents - if the parents control it, its a pure component
//just a function and prop types.

//this component wont need state, because its never changing itself, its a dumb component -
//we give the parent component state, basically this component just holds onto whether its
//working or not - the props are giveb from the parent.

//this should usually be a function (cause no state) - but this is good to start.

//Lifecycle = hook methods; these get called at certain lifecycle points
//Mounting = when it appears in the DOM (when it appers in the page)
//componentWillMount = initialization; before its on the page - so can't change color or shit, not on page
//componentDidMount = as soon as its on the page - useful for server stuff eg request tasks from server.


const styles = {
  container: {
    width: 500,
    height: 300,
    border: '5px solid grey',
    display: 'flex',
    justifyContent: 'center',
    alignItems:'center',
  },
  label: {
    fontSize: 32,
  },
}


//This is the skeleton
export default class WorkingBanner extends Component {
  //Make it static because it wants to just be for the class.
  static propTypes = {
    isWorking: PropTypes.bool.isRequired
  }


  render() {
    return(
      <div style ={styles.container}>
        <p style ={styles.label}>{this.props.isWorking ? 'WORKING' : 'NOT WORKING'}</p>
      </div>
    )
  }


}
