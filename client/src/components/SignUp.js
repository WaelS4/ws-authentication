import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { registerUser } from '../redux/actions/UserActions'
import { Redirect } from 'react-router-dom'

const SignUp = () => {
    const [fullName, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const dispatch = useDispatch()
    const { loading, users } = useSelector(state => state)
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(registerUser({ fullName, email, password, phone }))
    }
    return (
        <div className="col-md-5 m-auto">
            <h1>Sign Up</h1>
            {loading ? (<h1>loading ...</h1>) : users ? (<Redirect to="/login" />) : (
                <div>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>fullName</Form.Label>
                            <Form.Control type="text" placeholder="Enter fullName" value={fullName} onChange={(e) => setFullName(e.target.value)} />
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <Form.Text className="text-muted">
                                We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <Form.Label>phone</Form.Label>
                            <Form.Control type="text" placeholder="enter phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>
                </div>
            )}
        </div>
    )
}

export default SignUp
