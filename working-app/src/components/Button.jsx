import React, { PropTypes } from 'react'

const styles = {
  button: {
    width:50,
    height:20,
    border:'5px solid grey'
  },
}


//using => ({}) means do whatever is inside the function, thus need a return
//using => () means return straight up
const Button = ({ onClick, label }) => (
<div onclick={onClick}>
  <span>{label}</span>
</div>

)

//needs handler - wants to know when its been pressed
//And a label to change?
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
}

export default Button
