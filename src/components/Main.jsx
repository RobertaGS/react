import Comments from './Comments';
import Contacts from './Contacts'
import Couter from './Couter';
import Posts from "./Posts";
import Users from './Users';

function Main() {
    return (
        
        <div>
            <Couter/>
            <Users/>
            <Comments/>
            <Posts />
            <Contacts name={"Jolita"}
                email={"Jolita@gmail.com"}
                age={18}/>
        </div>
    )
}

export default Main