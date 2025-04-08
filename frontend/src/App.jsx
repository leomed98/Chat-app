import './App.css'

import Home from "./pages/home/Home";


function App() {
  return (
    <div className=' p-4 h-screen flex items-center justify-center'>
      <Home />  {/* Render the Login component */}
      {/* Uncomment the line below if you want to render the SignUp component */}
      
    </div>
  );
}

export default App;
