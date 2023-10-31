import './style.css'

export default function Botao(props){
    return(
        <section className='btns'>
            <button className={props.cor}  onClick={props.onClick}>{props.nome}</button>
        </section>
    );
}