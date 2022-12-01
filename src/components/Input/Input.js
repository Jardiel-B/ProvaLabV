import "./Input.css"

const Input = (props) =>{

    const onInput = (e) => {
        props.onInput(e.target.value)
    }

    return(
        <div className="input">
            <input value={props.valor} type={props.tipo} onChange={onInput} placeholder={props.placeholder} />
            <button>Procurar</button>
        </div>
    );
}

export default Input;