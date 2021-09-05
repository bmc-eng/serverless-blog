import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function PostForm(){

    const [titleText, setTitleText] = useState("");
    const [bodyText, setBodyText] = useState("");

    function handleSubmit(event){
        // Function to handle sending the information to AWS
        
    }

    return(
        <div className='form-body'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Post Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Post Title" 
                        onChange={(event)=> setTitleText(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Post Body</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3}
                        onChange={(event) => setBodyText(event.target.value)} />
                </Form.Group>
            </Form>
            
            <div className='form-buttons'>
                <Button variant="primary" size="lg" onClick={handleSubmit}>Submit Post</Button>{' '}
                <Button variant="secondary" size="lg" onClick={handleSubmit}>Clear Form</Button>
            </div>
        </div>
    )
}

export default PostForm
