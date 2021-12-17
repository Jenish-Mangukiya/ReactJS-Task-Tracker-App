import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title ,onAdd ,showAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'rgb(5, 148, 17)' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
            
        </header>
    )
}

Header.defaultProps = {
    title: "Agenda Tracker",
}


Header.prototype ={
    title:PropTypes.string.isRequired,
}

//css pertiquer element in JS
/* const headingStyle ={
    color : 'red' , 
    backgroundColor:'black'
} */
export default Header
