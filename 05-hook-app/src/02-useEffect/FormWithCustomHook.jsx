//import { useEffect } from 'react';
import { useForm } from '../hooks/useForm';
//import { Message } from './Message';

export const FormWithCustomHook = () => {
    const { formState, onInputChange, onResetForm, userName, email, password} = useForm({
        userName: '',
        email: '',
        password: ''
    });

    //const { userName, email, password } = formState;


/* 
    useEffect(() => {
        console.log('FormState Changed');
    }, []);//[formState] is the dependency array, if formState changes, useEffect will be executed

    useEffect(() => {
        console.log('Email Changed');
    }, [email]);//[formState] is the dependency array, if formState changes, useEffect will be executed

    useEffect(() => {
        console.log('FormState Changed');
    }, [formState]);//[formState] is the dependency array, if formState changes, useEffect will be executed

 */

    return (
        <>
            <h1>Formulario Con Custom Hook</h1>
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

            <input
                type="password"
                className="form-control mt-2"
                placeholder="password"
                name="password"
                value={password}
                onChange={onInputChange}
            />
{/* 
            {
                (userName === 'strider2') && <Message />
            } */
            
            <button className='btn btn-primary mt-2' onClick={onResetForm}>Reset</button>
            
            }
        </>
    )
}
