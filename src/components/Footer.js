const Footer = ({length}) =>{
    // const date = new Date();

    return(
        <footer>
            {/* <h1>copyright &copy; {date.getFullYear()}</h1> */}
            <h1>{
                `Todos: ${length}`
                }</h1>
        </footer>
    )
}

export default Footer;