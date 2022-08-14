import './App.scss';
import Button from './Button/Button';
import Menu from './Header/Header';
import Main from './Main/Main';
import Nav from './Nav-menu/Nav';


function App() {
  const menuHeader = ["Home", "Contact", "Location", "About Us"];
  return (
    <div className="wrapper">
      <header className="App-header">
        <div className="header-menu">
        {menuHeader.map((el, index) => (
              <Menu
                key = {index}
                name = {el}/>
            ))}
        </div>
        <Button nameButton = "Sign Up"/>
      </header>
      <main className="content-main">
        <Main/>
        <Nav/>
      </main>
    </div>
  );
}

export default App;
