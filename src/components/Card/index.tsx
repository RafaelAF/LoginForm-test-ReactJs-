import { ChangeEvent, useState } from "react";



const CreateAc = () =>{

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataBase, setDatabase] = useState([])

    const handleName = (e: ChangeEvent<HTMLInputElement>) =>{
        setName(e.target.value)
    }
    const handleEmail = (e: ChangeEvent<HTMLInputElement>) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e: ChangeEvent<HTMLInputElement>) =>{
        setPassword(e.target.value)
    }

    const createAccount = (e: SubmitEvent) =>{
        e.preventDefault()
        if(name == '' || email == '' || password == ''){
            alert('Preencha todos os campos!')
        }else{
            console.log(`Conta criada Nome: ${name} Email: ${email} Senha: ${password}`)
            setName('')
            setEmail("")
            setPassword('')
        }
    }
 
    return (
        <div className="bg-white w-full py-[100px] px-8 flex flex-col text-center md:w-3/4  lg:w-2/5 rounded">
            <h1 className="text-3xl font-bold text-blue-800 mb-4">Create Account</h1>
            <input required onChange={handleName} value={name}  placeholder="Name " className="p-4 bg-neutral-300 rounded my-2" type="text" name="" id="" />
            <input required onChange={handleEmail} value={email} placeholder="Email"  className="p-4 bg-neutral-300 rounded my-2" type="email" name="" id="" />
            <input required onChange={handlePassword} value={password} placeholder="Password"  className="p-4 bg-neutral-300 rounded my-2" type="password" name="" id="" />
            <div className="grid grid-cols-2 gap-x-3 mt-5">
                <button onClick={createAccount} className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-l from-cyan-500 to-blue-500 text-white font-normal rounded-xl py-2">SING UP</button>
                <button className="bg-neutral-300 text-neutral-500 font-normal hover:bg-neutral-200 hover:text-neutral-800 rounded-xl py-2">SING IN</button>
            </div>
        </div>
    );
}

export default CreateAc