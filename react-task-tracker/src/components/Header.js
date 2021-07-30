import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <button className='btn'>Add</button>
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
