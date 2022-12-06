import React from 'react';
import './contact.css';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import full from '../../../assets/images/full.jpeg'

const SERVICE_ID = "service_9x9qzba";
const TEMPLATE_ID = "contact_form";
const USER_ID = "user_w7fuIoW9wFCVew5Q4ULw6";

function Contact() {
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Message Sent Successfully'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  // const handleChange = (e) => {
  //     setToSend({ ...toSend, [e.target.name]: e.target.value });
  // };


  return (
    <div>

      <div className="contact">

        <Form onSubmit={handleOnSubmit}>
          <Form.Field
            id='form-input-control-email'
            control={Input}
            label='Email'
            name='user_email'
            placeholder='Email…'
            required
            icon='mail'
            iconPosition='left'
            className="contact-form"

          />
          <Form.Field
            id='form-input-control-last-name'
            control={Input}
            label='Name'
            name='user_name'
            placeholder='Name…'
            required
            icon='user circle'
            iconPosition='left'
            className="contact-form"
          />
          <Form.Field
            id='form-input-control-company-name'
            control={Input}
            label='Company'
            name='company_name'
            placeholder='Company...'
            required
            icon='user circle'
            iconPosition='left'
            className="contact-form"
          />
          <Form.Field
            id='form-textarea-control-opinion'
            control={TextArea}
            label='Message'
            name='message'
            placeholder='Message…'
            required
            className="contact-form"
          />
          <Button type='submit' color='green'>Submit</Button>
        </Form>
      </div>
    </div>

  );
}
export default Contact;