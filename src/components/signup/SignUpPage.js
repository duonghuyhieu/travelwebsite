import React from 'react'
import './SignUpPage.css'

function SignUpPage() {
  const [params, setParams] = React.useState({email: '', password:'', confirmPassword:''})
  const [errors, setErros] =  React.useState({errEmail: "", errPassword: "", errConfirmPassword : ""})
  const  {email, password, confirmPassword} = params; 
  const { errEmail, errPassword, errConfirmPassword} = errors

  const handleOnChange = (e) => {
    setParams( prev => ({...prev, [e.target.id]: e.target.value}))
  }

  const handleValidate = () => {
    let result = true;
    const regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(!email.match(regexEmail)) {
      result = false;
      setErros(prev => ({...prev, errEmail: "Invalid Email"}))
    } else {setErros(prev => ({...prev, errEmail: ""}))}

    if(password.trim().length < 8)  {
      result = false;
      setErros(prev => ({...prev, errPassword: "Invalid password"}))
    } else { setErros(prev => ({...prev, errPassword: ""}))}

    if (password != confirmPassword){
      result = false
      setErros(prev => ({...prev, errConfirmPassword: "Password don't match"}))
    }else { setErros(pre => ({...pre, errConfirmPassword: ""}))}

    return result
  }

  const handleSubmit = () => {
    console.log(params)
    if(handleValidate()) {
      console.log('signup')
    } else { return}
  }
  return (
    <div className='signup__wrap'>
      <h3> Welcome to </h3>
      <h1> TRAVEL</h1>
      <div className='signup__select signup__row'>
        <div className='signup__box signup__select__signin' >
          <p>Sign up</p>
        </div>
          <div className='signup__box' >
            <p>Sign in</p>
          </div>
        </div>
        <div className='signup__form signup__col'>
          <label>Email <span>*</span></label>
          <input onChange={handleOnChange} id="email" placeholder='Enter email'></input>
          { errEmail && <span>{errEmail}</span>}
        </div>
        <div className='signup__form signup__col'>
          <label>Password <span>*</span></label>
          <input type='password' onChange={handleOnChange} id='password' placeholder='Enter password'></input>
          { errPassword && <span>{errPassword}</span>}
        </div>
        <div className='signup__form signup__col'>
          <label>Confirm password <span>*</span></label>
          <input type='password' onChange={handleOnChange} id='confirmPassword' placeholder='Confirm password'></input>
          { errConfirmPassword && <span>{errConfirmPassword}</span>}
        </div>
        {/* <p className='signup__passwordretrieval'>Password retrieval</p> */}
        <button onClick={handleSubmit} className='signup__btn'>Sign up<i className='fas fa-sign-in-alt'></i></button>
        <p className='signup__or'>Or</p>
        <div className='signup__siwith'>
          <div className='signup__box signup__facebook'><i className='fab fa-facebook'></i> Continue with Facebook</div>
          <div className='signup__box signup__google'><i className="fab fa-google"></i> Continue with Google</div>
        </div>
    </div>
  )
}

export default SignUpPage
