import React, { useState } from 'react'

export const Form = (props) => {
    const {dato, setDato} = props
    const [message, setMessage] = useState('')
    const [messagepassword, setMessagePassword] = useState('')
   
    const handleChange = (e) =>{
       
        setDato({...dato, [e.target.name]: e.target.value}, console.log(dato))

        if(e.target.name === 'firstname' || e.target.name === 'lastname')
        {
            validLarge(e.target.value.length, 2);
        }
        if(e.target.name === 'email')
        {
            validLarge(e.target.value.length, 5);
        }
        
        if(e.target.name === 'password' || e.target.name === 'confirmpassword'){
            validLarge(e.target.value.length, 8);
            
        }
        if(e.target.name === 'password'){
            if(e.target.value !== dato.confirmpassword) {
                setMessagePassword("error")
            } else {
                setMessagePassword("")
            }
        }

        if(e.target.name === 'confirmpassword'){
            if(e.target.value !== dato.password) {
                setMessagePassword("error")
            } else {
                setMessagePassword("")
            }
        }
        

    }

    const valiPassword = () => {
        if(dato.password !== dato.confirmpassword){ 
            console.log(dato)
            setMessagePassword("error")
        } else {
            setMessagePassword("")
        }
    }
  
    
    const validLarge = (l,n) => {
        if(l > 0 && l <= n){ setMessage(`debe tener un mínimo de ${n} caracteres`)}else {setMessage('')
        }
    }
    
    return (
        <div>
            <form action="">
                
            <div>
            <div>{message}</div>
            <div>{messagepassword}</div>
                <label>Nombre
                    <input type="text" name="firstname" onChange={handleChange}/>
                </label>
            </div>
            <div>
                <label>Apellido
                <input type="text" name="lastname" onChange={handleChange}/>
                </label>
            </div>
            <div>
                <label>Email
                <input type="text" name="email" onChange={handleChange}/>
                </label>
            </div>
            <div>
                <label>Password
                <input type="text" value={dato.password} name="password" onChange={handleChange}/>
                </label>
            </div>
            <div>
                <label>Confirm Password
                <input type="text" value={dato.confirmpassword} name="confirmpassword" onChange={handleChange}/>
                </label> 
            </div>
            </form>
        </div>
    )
}
