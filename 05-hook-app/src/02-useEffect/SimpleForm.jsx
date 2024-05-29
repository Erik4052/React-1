import { useState, useEffect } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setformState] = useState({
        userName: 'strider2',
        email: 'erik@google.com'
    });

    const { userName, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setformState({
            ...formState,
            [name]: value
        });
    }

    useEffect(() => {
        console.log('FormState Changed');
    }, []);//[formState] is the dependency array, if formState changes, useEffect will be executed

    useEffect(() => {
        console.log('Email Changed');
    }, [email]);//[formState] is the dependency array, if formState changes, useEffect will be executed

    useEffect(() => {
        console.log('FormState Changed');
    }, [formState]);//[formState] is the dependency array, if formState changes, useEffect will be executed



    return (
        <>
            <h1>Formulario Simple</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="userName"
                value={userName}
                onChange={onInputChange}
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="email"
                name="email"
                value={email}
                onChange={onInputChange}
            />

            {
                (userName === 'strider2') && <Message />
            }
        </>
    )
}
