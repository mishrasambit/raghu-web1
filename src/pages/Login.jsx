import React from 'react'
import {useNavigate} from 'react-router-dom'
import {Card, Form, Stack, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'

import {signinApi} from '../redux/features/login/loginSlice';

const Login = () => {
    const [errorMessage, setErrorMessage] = React.useState(undefined)
    const dispatch = useDispatch();
    const {userData, loading, error } = useSelector(state=>state.loginReducer);
    const navigate = useNavigate()
    const doLogin = async () => {
        const formData = {
            username : "sambit",
            pasword : "sambit"
        }
        
        try{
            dispatch(signinApi(formData));
            
        }catch(err){
            console.log("error")
            console.log(err)
        }
    }
    React.useEffect(() => {
        // if isUserLoggedIn turned to true redirect to /home
        if (userData && userData.otherdata==='logged-in') { 
            navigate("/home")
        }
    }, [userData]);
    return (
        <div>
            <Card className="p-6 d-flex justify-content-center">    
                <div className="align-self-center">
                <Form className="mt-3 mb-3">
                    <Stack gap={3} className="d-flex flex-column">
                    <div>Login Form</div>
                    {errorMessage && <div>{errorMessage}</div>}
                    <Form.Control
                        type="text"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />

                    <Form.Control
                        type="password"
                        id="inputPassword5"
                        aria-describedby="passwordHelpBlock"
                    />
                    <Stack gap={3} direction="horizontal" className="d-flex flex-column justify-content-around">
                        <Button variant="primary" onClick={doLogin}>Login</Button>
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
