import NavigationContainer from "../../containers/NavigationContainer";



const Layout = ({children}) => {
    return ( 
        <>
            <NavigationContainer />
            {children}
        </>
     );
}
 
export default Layout;