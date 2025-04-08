import MessageContainer from '../../components/messages/MessageContainer';
import Sidebar from '../../components/sidebar/Sidebar';

const Home = () => {
     return (
        <div className='flex sm:h-[450px] md:h-[580px] rounded-lg overflow-hidden bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-'>
    <Sidebar/> 
       <MessageContainer/>
    </div>

    );
}; 



export default Home;