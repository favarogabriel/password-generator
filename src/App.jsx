import { useRef, useState } from "react";

const App = () => {
    const employeeNameInput = useRef('');
    const [password, setPassword] = useState('');

    function createPassword() {
        let password = '';
        let randomIndexText = 0;
        let symbols = ['@', '!', '#', '%', '$'];

        for(let i = 0; i < 4; i++) {
            randomIndexText = Math.floor(Math.random() * (employeeNameInput.current.value.length - 1));
            i > 0 ? password += employeeNameInput.current.value[randomIndexText].toLowerCase() : password += employeeNameInput.current.value[randomIndexText].toUpperCase();
        }

        password += symbols[Math.floor(Math.random() * symbols.length)];
        password += Math.floor(Math.random() * 9999);

        return password;
    }

    return (
        <>
            <h1>Gerador de senhas</h1>
            <label htmlFor="employeeName">Primeiro nome do colaborador</label><br />
            <input type="text" id="employeeName" ref={employeeNameInput}/><br />
            <div className="passwordDiv">
                <button onClick={() => setPassword(createPassword())}>Gerar senha</button>
                <span id="generatedPassword" 
                onClick={() => {
                    navigator.clipboard.writeText(password)
                }}
                >{password}</span>
            </div> 
        </>
    )
}

export default App;