import React, {useState} from 'react';
import axios from 'axios';

const projectID = '3486d372-526c-4c9f-b801-4ce8ea39525b'

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const authObject = {'Project-ID': projectID, 'User-Name': username, 'User-Secret': password}

        try {
            await axios.get('https://api.chatengine.io/chats', {headers: authObject});

            localStorage.setItem('username', username);
            localStorage.setItem('password', password);

            window.location.reload();
            setError('');
        } catch (error) {
            setError('Oops, incorrect credentials.')

        }
    }

    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title">Chat Application</h1>
                <form onSubmit={handleSubmit}>
                    <input className="input" placeholder="Username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required/>
                    <input className="input" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                </form>
                <h2 className="error">{error}</h2>
            </div>
        </div>
    )
}

export default LoginForm;
