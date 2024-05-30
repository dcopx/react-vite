import PropTypes from 'prop-types'

const mensaje = {
    message: 'Hola',
    title: 'Aea'
}

const retornaTitulo = () => {
    const { title: titulo } = mensaje
    return titulo
}

export const FirsApp = ({ nombre, edad }) => {

    return (
        <>
            <h1>{JSON.stringify(mensaje)}</h1>
            <h3>{retornaTitulo()}</h3>
            <h3>{nombre}</h3>
            <h3>{edad}</h3>
        </>
    )
}


FirsApp.propTypes = {
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number
}
