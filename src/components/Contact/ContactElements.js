import styled from "styled-components";

export const ContactContainer = styled.div`
    min-height: 692px;
    padding: 100px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #388E3C;
    text-align: center;
    // linear-gradient(
    //    108deg,
    //    rgba(1, 147, 86, 1) 0%,
    //    rgba(10, 201, 122, 1) 100%
    //);

    @media screen and (max-width: 480px) {
        padding: 20px;
    }
`

export const ContactWrapper = styled.div`
    height: 100%;
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const FormContent = styled.div`
    height: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Form = styled.form`
    background: #101522;
    width: 600px;
    height: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 50px 32px;
    text-align: center;
    border-radius: 50px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (min-width: 1399px){
        width: 45vw;
    }

    @media screen and (max-width: 400px) {
        padding: 15px 15px;
        width: 80vw;
    }
`

export const FormH1 = styled.h1`
    margin-bottom: 30px;
    color: #fff;
    font-size: 2rem;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #fff;
    text-align: left;
`

export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 20px;
    border: none;
    border-radius: 10px;
    font-weight: 800;
    font-size: 16px;
    letter-spacing: 1.5px;
    max-width: 800px;
    width: 100%;
`

export const FormButton = styled.button`
    background: #388E3C; // #01bf71;
    padding: 16px 0;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
    justify-content: center;
    text-align: center;
    border-radius: 30px;

    &:hover {
        transition: all 0.2s ease-in-out;
        color: #01bf71;
    }
`

export const FormMessage = styled.textarea`
    width: 100%;
    height: 150px;
    margin-bottom: 20px;
    font-weight: 800;
    font-size: 16px;
    letter-spacing: 1.5px;
    padding: 5px;
    border-radius: 10px;
`

// Thank You Styling

export const ThankYouH1 = styled.h1`
    font-size: 40px;
    color: #fff;
`

export const ThankYouContainer = styled.div`
    height: 300px;
    padding: 50px;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 0;
    overflow: hidden;
    background: #388E3C;
    text-align: center;
`