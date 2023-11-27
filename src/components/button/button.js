import './button.css'

const takeCare = (props) => {
     alert(`Take care! Aliens are fighting for the planet. Be brave! The label of this button is ${props.label}`)
}

const Button = (props) => {
    return (
        <button 
        className="btn" 
        onClick={() => takeCare(props)}>
            {props.label}
        </button>
    )
}

Button.defaultProps = {
    label: 'Clique aqui'
}

export default Button