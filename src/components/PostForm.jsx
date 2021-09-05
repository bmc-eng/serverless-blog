import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {v4 as uuidv4} from 'uuid';
import Amplify, {API} from 'aws-amplify';
import awsconfig from '../aws-exports';

Amplify.configure(awsconfig);

function PostForm(){

    const [titleText, setTitleText] = useState("");
    const [bodyText, setBodyText] = useState("");
    const [isSuccess, setIsSuccess] = useState(false);

    function handleSubmit(event){
        // Function to handle sending the information to AWS
        console.log("Submit button called");
        console.log(titleText);
        const date = new Date().toISOString();
        const postParams = {
            "body":{
                "id": {
                    "S": uuidv4()
                },
                "titleLink":{
                    "S":titleText
                },
                "para":{
                    "L":[
                        {
                            "M":{
                                "post":{
                                    "S": bodyText
                                }
                            }
                        }
                    ]
                },
                "bodyTrunk": {
                    "S": bodyText.substr(0,100)
                },
                "blogDate":{
                    "S": date
                },
                "title":{
                    "S": titleText
                }
            }
        };
        console.log(JSON.stringify(postParams));
        API
        .put("sendPostApi","/post",postParams)
        .then(setIsSuccess(true))
        .catch(err => console.log(err));
    }

    function handleReset(event){
        // Reset all of the values - need to implement
        
    }

    return(
        <div className='form-body'>
            <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Post Title</Form.Label>
                    <Form.Control 
                        type="text" 
                        placeholder="Enter Post Title" 
                        text={titleText}
                        onChange={(event)=> setTitleText(event.target.value)}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Post Body</Form.Label>
                    <Form.Control 
                        as="textarea" 
                        rows={3}
                        onChange={(event) => setBodyText(event.target.value)}
                    />
                </Form.Group>
            </Form>
            
            <div className='form-buttons'>
                <Button variant="primary" size="lg" onClick={handleSubmit}>Submit Post</Button>{'   '}
                <Button variant="secondary" size="lg" onClick={handleReset}>Clear Form</Button>
            </div>
            {isSuccess ? <h2>Blog Posted!</h2> : null}
        </div>
    )
}

export default PostForm
