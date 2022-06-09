import Contacts from './Contacts'
import Couter from './Couter';
import Posts from "./Posts";
import ProductList from './ProductList/ProductList';
//1- ka importuoju? -> react KOMPONENTA
//2-FROM-> is kur importuoju KATALOGAS-> FILE
//geriau nerasyti ranka o parinkti is to ka meta
// ./ieskau tame paciame kataloge
// ../pakylu vienu auksteliu - vienu katalogu
// ../../ palylu dviem katalogais aukstyn

function Main() {
    return (
        
        <div>
            <ProductList/>
            <Couter/>
            {/* <Users/>
            <Comments/> */}
            <Posts />
            <Contacts name={"Jolita"}
                email={"Jolita@gmail.com"}
                age={18}/>
        </div>
    )
}

export default Main