import FormCreate from "./components/FormAccount/FormCreate";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import "./reset.css";
import "./app.scss";
function App() {
  return (
    <div>
      <Header />
      <main className="wrapperMain">
        <Login />
        <hr className="line" />
        <FormCreate />
      </main>
    </div>
  );
}

export default App;
