
import './App.css';
import Dictionary from "./Dictionary.js";


function App() {
  return (
    <div className="App">
      <div className='container'> 
      <header className="App-header">
       <h1 >
             Dictionary App
          </h1>
      <main>
      <Dictionary defaultKeyword="Sunset"/>
      </main>
      </header>
      <br/>
      <footer className='text-center'>
        <small>
          <a href='https://github.com/sweetjosie/react-dictionary' target="_blank" rel="noreferrer" >Open Source </a>
          coded by 
          <a href='https://stellar-toffee-0a15c6.netlify.app/' target="_blank" rel="noreferrer" > Josie Maia</a>
          </small> 
        </footer>
    </div>
    </div>
  );
}

export default App;
