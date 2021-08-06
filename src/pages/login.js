import { Button } from "reactstrap"
import { useState, useEffect } from "react"
import { Row, Col,Input, Label, FormFeedback } from "reactstrap"
import '../stlyes/login.css'

const LoginPage = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [err, setErr] = useState ({
        email : false,
        password : false,
        retypePassword : false
    })
    const[retypePassword, setRetypePassword] = useState('')

    console.log(
        {email},
        {password}
    )

    const handleSubmit = async () => {
        let {valid} = await validate()
        console.log(valid)
        if(valid) {
            alert('success')
        } else {
            alert('failed')
        }
    }

    const validate = async () => {
        let errEmail = !email.match(/\S+@\S.\S+/) || email.length === 0 ? true : false

        let errPass = password.length === 0 ? true : false

        let errRetypePassword = retypePassword !== password ? true : false 

        setErr({
            email : errEmail,
            password : errPass,
            retypePassword : errRetypePassword
        })

        console.log(errEmail,errPass)

        let valid = errPass || errEmail ? false : true
        return ({valid})
    } 

    return (
        <div className='login'>
            <Row className='navbar'>
                <Col xs={7} sm={10} md={7} className='app_name_header'>
                    SOSPIC
                </Col>
                <Col xs={5} sm={2} md={5} className='btn_redirect'>
                    <a href='/register'>Register</a>
                </Col>
            </Row>

            <Row>
                <Col className='wording' md={6}>
                    <Row className='desc_1'>
                        Welcome to your playground community
                    </Row>
                    <Row className='desc_2'>
                        Explore and get many topics!!
                    </Row>
                </Col>

                <Col className='form' md={6}>
                    <Row className='title'>
                        Sign In
                    </Row>
                    <Col className='col_field'>
                        <Label>Email</Label>
                        <Input
                        type='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        invalid={err.email}
                        />
                        <FormFeedback>{err.email && 'format email tidak sesuai'}</FormFeedback>
                    </Col>
                    <Col className='col_field'>
                        <Label>Password</Label>
                        <Input
                        type='password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        invalid={err.password}
                        />
                        <FormFeedback> {err.password && 'password tidak boleh kosong'}</FormFeedback>
                    </Col>
                    <Col className='col_field'>
                        <Label>Re-type Password</Label>
                        <Input
                        type='password'
                        value={retypePassword}
                        onChange={(e) => setRetypePassword(e.target.value)}
                        invalid={err.retypePassword}
                        />
                        <FormFeedback> {err.retypePassword && 'password tidak sama'}</FormFeedback>
                    </Col>
                    <Row>
                        <Button className='button_login'onClick = {() => handleSubmit()}>Sign In</Button>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}


export default LoginPage