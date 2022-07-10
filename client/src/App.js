
import './App.css';
import Home from './components/pages/Home';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataProvider } from './GlobalState';
import Header from './components/Header';



function App() {
  return (
    <div className="App">
      <DataProvider >
    <Header/>
     <Home/>
        

     <ToastContainer
          position="top-left"
          autoClose={1000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          />



          </DataProvider>
    </div>
  );
}

export default App;
