import React, { useState } from "react";
import '../Contact/styles.css'
import {
  ContactContainer,
  ContactWrapper,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormMessage,
  ThankYouH1,
  ThankYouContainer
} from "./ContactElements";

const FORM_ENDPOINT = "https://public.herotofu.com/v1/69b9c1c0-c2ea-11ec-a557-034a17e2da28"; // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
      <ThankYouContainer>
        <ThankYouH1 className="line-1  anim-typewriter">Thank you! <br></br> We'll be in touch soon.</ThankYouH1>
      </ThankYouContainer>
      </>
    );
  }

  return (
    <div>
      <ContactContainer id="contact">
        <ContactWrapper>
          <FormH1>Contact Us</FormH1>
          <FormContent>
            <Form
              action={FORM_ENDPOINT}
              onSubmit={handleSubmit}
              method="POST"
              target="_blank"
            >
              <FormLabel htmlFor="for">Name :</FormLabel>
              <div>
                <FormInput
                  type="text"
                  placeholder="Your name"
                  name="name"
                  required
                />
              </div>
              <FormLabel htmlFor="for">Subject :</FormLabel>
              <div>
                <FormInput
                  type="text"
                  placeholder="Subject"
                  name="subject"
                  required
                />
              </div>

              <FormLabel htmlFor="for">Email :</FormLabel>
              <div>
                <FormInput type="email" placeholder="Email" name="email" required />
              </div>

              <FormLabel htmlFor="for">Message :</FormLabel>
              <div>
                <FormMessage textarea placeholder="Your message" name="message" required />
              </div>
              <div style={{padding: "10px"}}>
                <button type="submit" className="FormButton"
                style={{ border: "none", background: "#388E3C", padding: "16px", fontSize: "20px", color: "#fff", cursor: "pointer", borderRadius: "30px" }}> Send a message </button>
              </div>
            </Form>
          </FormContent>
        </ContactWrapper>
      </ContactContainer>
    </div>
  );
};

export default Contact;
