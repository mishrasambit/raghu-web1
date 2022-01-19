import React, {useReducer} from 'react'
import {useNavigate} from 'react-router-dom'
import {Card, Form, Stack, Button, Spinner} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'

import {signinApi} from '../redux/features/login/loginSlice';

const initialState = {
    username : '',
    password : ''
}

const reducer=(state, action)=>{
    switch (action.type) {
        case 'update-username':
          return {...state, username: action.payload};
        case 'update-password':
          return {...state, password: action.payload};
        default:
          throw new Error();
      }
}

const Login = () => {
    const [errorMessage, setErrorMessage] = React.useState(undefined)
    const [loginForm, formDispatch] = useReducer(reducer, initialState)
    const dispatch = useDispatch();
    const {userData, loading, error } = useSelector(state=>state.loginReducer);
    const navigate = useNavigate()
    const doLogin = async () => {
        setErrorMessage(undefined)       
        try{
            dispatch(signinApi(loginForm));            
        }catch(err){
            console.log("error")
            console.log(err)
        }
    }
    React.useEffect(() => {
        // if isUserLoggedIn turned to true redirect to /home
        if (userData && userData.otherdata==='logged-in') { 
            navigate("/home")
        }else if(error){
            setErrorMessage(error)
        }
    }, [userData, error, loading, navigate]);
    return (
        <div>
            <Card className="p-6 d-flex justify-content-center">    
                <div className="align-self-center">
                <Form className="mt-3 mb-3">
                    <Stack gap={3} className="d-flex flex-column">
                    <div>Login Form</div>
                    {errorMessage ? <div>{errorMessage}</div>: <div style={{padding:"12px"}}></div>}                 
                    <Form.Control
                        type="text"
                        id="inputUsername5"
                        aria-describedby="usernameHelpBlock"
                        onChange={(e)=>formDispatch({type: 'update-username', payload: e.target.value})}
                    />

                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                        onChange={(e)=>formDispatch({type: 'update-password', payload: e.target.value})}
                    />
                    <Stack gap={3} direction="horizontal" className="d-flex flex-column justify-content-around">
                        <Button variant="primary" onClick={doLogin} disabled={loading}>
                            {loading?<><Spinner animation="grow" size="sm"/>Trying login</>:<>Login</>}
                        </Button>
                        <Button variant="outline-secondary" >Don't have an account? Sign up.</Button>
                    </Stack>  
                </Stack>  
                {/**<Button variant="primary">Button #1</Button>**/}
                
                </Form>
                </div>
            </Card>
        </div>
    )
}

export default Login
