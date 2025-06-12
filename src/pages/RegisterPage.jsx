
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../styles/Register.scss"
const RegisterPage = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        profileImage: null,
});
    const handleChange = (e) => {
        const {name, value, files} = e.target;
        setFormData({
            ...formData,
            
            [name]: value,
            [name]: name === "profileImage" ? files[0] : value
        })
    }
    console.log(formData);

    const [passwordMatch, setpasswordMatch] = useState(true)

    useEffect(() => {
        setpasswordMatch(formData.password === formData.confirmPassword || formData.confirmPassword === "")
    })
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()

      
        try {
        const register_form = new FormData()

        for(var key in formData) {
            register_form.append(key, formData[key])

        }
        const response = await fetch("http://localhost:3001/auth/register", {
            method:"POST",
            body : register_form

        });

        console.log(response);// nemsen

        if (response.ok) {
            navigate("/login")
        }

        }catch (err){
            console.log("Registration failed", err.message)
        }
    }


    return (
        <div className='register'>
            <div className='register_content' >
                <form className='register_content_form' onSubmit={handleSubmit}>
                    <input
                        placeholder='First Name'
                        name='firstName'
                        onChange={handleChange}
                        value={formData.firstName}
                        required
                    />
                    <input
                        placeholder='Last Name'
                        name='lastName'
                        onChange={handleChange}
                        value={formData.lastName}
                        required
                    />
                    <input
                        placeholder='Email'
                        name='email'
                        type='email'
                        onChange={handleChange}
                        value={formData.email}
                        required
                    />
                    <input
                        placeholder='Password'
                        name='password'
                        type='password'
                        onChange={handleChange}
                        value={formData.password}
                        required
                    />
                    <input
                        placeholder='Confirm Password'
                        name='confirmPassword'
                        type='password'
                        onChange={handleChange}
                        value={formData.confirmPassword}
                        required
                    />

                    {!passwordMatch && (
                        <p style={{ color: "red"}}>Passwords зөрүүтэй байна!</p>
                    )}
                    <input 
                    id ="image"
                    type="file" 
                    name='profileImage' 
                    accept='image/*' 
                    style={{ display: 'none' }} 
                    onChange={handleChange}
                    required 
                    />
                    <label htmlFor='image'>
                        <img src='/assets/addImage.png' alt="add profile photo"/>
                        <p>Зураг оруулах</p>
                    </label>

                    {formData.profileImage && (
                        <img 
                        src={URL.createObjectURL(formData.profileImage)} 
                        alt="profile photo"
                        style={{maxWidth: "80px",}}
                        />
                    )}
                    <button type="submit" disabled={!passwordMatch}>Бүртгүүлэх</button>
                </form>
                <a href='/login'>Аккоунт байгаа юу? Нэвтрэх</a>
            </div>
        </div>
    )
}

export default RegisterPage