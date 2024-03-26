import styles from "./Button.module.css"

function Button(props) {
    return (
        <>
            <button type="button" className="btn btn-secondary"> {props.name} </button>
        </>
    );
}

export default Button