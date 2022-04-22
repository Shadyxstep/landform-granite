import React from "react";
import emailjs from "emailjs-com";
import { ContactContainer, ContactWrapper, FormContent, Form, FormH1, FormLabel, FormInput, FormMessage } from "./ContactElements";


const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      'service_mxzedcp',
      'template_p2ojx0h',
      e.target,
      'user_YAVs2oR4D4AzXCXuExwFi'
    ).then(res=>{
      console.log(res);
    }).catch(err=> console.log(err));
  }


function clearForm() {
    document.getElementById("myForm").reset();
  }

function Notif() {
  alert("Your message has been sent!");
  clearForm();
}

  return (
    <div>
      <ContactContainer id='contact'>
        <ContactWrapper>
          <FormContent>
            <Form className="form" onSubmit={sendEmail} id="myForm">
              <FormH1>Contact Us </FormH1>
              <FormLabel htmlFor="for">Name:</FormLabel>
              <FormInput type='text' name="from_name" className="form-control" required />
              <FormLabel htmlFor="for">Subject:</FormLabel>
              <FormInput type='text' name="subject" className="form-control" required />
              <FormLabel htmlFor="for">Email:</FormLabel>
              <FormInput type='email' name="user_email" className="form-control" required />
              <FormLabel htmlFor="for">Message:</FormLabel>
              <FormMessage type='textarea' name="message" className="form-control" required />
              <input type='submit'
              onSubmit={sendEmail}
              className="FormButton"
              onClick={Notif}
              style={{ border: "none", background: "#01bf71", padding: "16px", fontSize: "20px", color: "#fff", cursor: "pointer", borderRadius: "30px" }}/>
            </Form>
          </FormContent>
        </ContactWrapper>
      </ContactContainer>
    </div>
  );
};

export default Contact;
