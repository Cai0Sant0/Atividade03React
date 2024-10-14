
function Saudacao(props){

    let logado = props.logado

    if(logado){
        return <h1>Bem vindo, {props.nome}!</h1>
    }

}

export default Saudacao