import PropTypes from 'prop-types'
import Button from './Button'


const Header = ({title}) => {
    const onClick=() =>{
        console.log('Yamete kudasai')
    }
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button onClick={onClick} color='green' text='hello' />
        </header>
    )
}
Header.defaultProps= {
    title:'Task Tracker',
}

Header.propTypes= {
    title: PropTypes.string.isRequired,
}

//                     CSS in js
// const headingStyle= {
//     color: 'red', backgroundColor: 'black'
// }


export default Header
