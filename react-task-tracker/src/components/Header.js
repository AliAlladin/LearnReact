import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    function onClick(){
        console.log("Click")
    }
    
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button color='green' text='Add' onClick={onClick}></Button>
        </header>
    )
}

// CSS in JS
// const headingStyle = {
//     color:'red', 
//     backgroundColor:'blue'
// }

Header.defaultProps = {
    title : "Task Tracker"
}

Header.propTypes = {
    title : PropTypes.string.isRequired
}

export default Header
