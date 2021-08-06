import { useState, useContext } from "react"
import { Button, Row, Col, Modal, ModalHeader, ModalBody, ModalFooter, Input } from "reactstrap"

const SidebarComponent = () => {

    const [posting, setPosting] = useState('')
    const [topic, setTopic] = useState('1')
    const [err, setErr] = useState(false)

    //popup modal
    const [postingModal, setPostingModal] = useState(false)
    const [logoutModal, setLogoutModal] = useState(false)

    const handleSelect = (select) => {
        setTopic(select)
    }


    const handleSubmit = () => {
        alert('OKE')
    }
    return (
        <div className='sidebar'>
            <div className='logo_app'>SOPIC</div>
            <div className='desc_app'>Share Your Idea</div>
            <div className='profile'>
                <p className='name'>profile</p>
                <br/>
                <Row className='desc'>
                    <p>Welcome Back <b>USER 1</b>
                    <br/>
                    let share more ideas
                    </p>
                </Row>
            </div> 

            <Row>
                <Button className='btn_post'
                onClick={()=>setPostingModal(true)}
                >Posting</Button>
            </Row>

            <Row>
                <Button className='btn_logout'
                // onClick={()=>}
                >Log Out</Button>
            </Row>
            


        {/* Popup Posting */}
        <Modal isOpen={postingModal} toggle={() => setPostingModal(!postingModal)}>
            <ModalHeader>USER 1 , what do you wanna post</ModalHeader>
            <ModalBody>
                <Row>
                    <Col md={2}>
                        <p><h4>Topic</h4></p>
                    </Col>
                    <Col md={10}>
                        <Input type='select' name='select' onChange={(e)=> handleSelect(e.target.value)}>
                            <option> 1 </option>
                            <option> 2 </option>
                            <option> 3 </option>
                        </Input>
                    </Col>
                </Row>
                <hr/>
                <Input type='textarea' style={{height:'150px'}} value={posting} onChange={(e)=>setPosting(e.target.value)}/>
                <div style={{
                    fontSize:'10pt',
                    color: `${posting.length > 100 ? 'red' : 'gray'}`,
                    float: 'right'
                }}>
                    {`${posting.length > 100 ? 'character more than 100' : 100 - posting.length}`}
                </div>
            </ModalBody>
            <ModalFooter>
                <span>
                    <Button onClick={() => setPostingModal(false)}>Cancel</Button>
                    <Button onClick={() => handleSubmit()}>Post it</Button>
                </span>
            </ModalFooter>
        </Modal>


        </div>
    )
}

export default SidebarComponent