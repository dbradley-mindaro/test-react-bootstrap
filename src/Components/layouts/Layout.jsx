
import Navigation from "../Header/Navigation"
const Layout = (props) => {

    return (
        <>
        <Navigation/>
        {props.children}
        
        </>
    )
}

export default Layout;