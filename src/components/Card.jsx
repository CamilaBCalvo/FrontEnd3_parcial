function Card(props){
    return(
        <>
        <h1>📚 ¡Felicitaciones! 📚</h1>
        <h2>Has ingresado un nuevo libro para el club de lectura.</h2>
        <p>Nombre del Libro: 📖 {props.libro}</p>
        <p>Nombre del Autor: 🖊️ {props.autor}</p>
        <p>Cantidad de hojas: 📄 {props.hojas}</p>
        <p>Nombre de la Editorial: 🏢 {props.editorial}</p>
        <hr />
        <p>En el caso de que tu libro salga sorteado te enterarás en el próximo newsletter.</p>
        <p>¡Nos vemos en el encuentro mensual! 🥰</p>
        </>
    )
}
export default Card