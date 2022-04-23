import "../Contact/styles.css";
import { ThankYouH1, ThankYouContainer } from "./thankYouElements";

const ThankYou = () => {
  return (
    <>
      <ThankYouContainer id="contact">
        <ThankYouH1 className="line-1 anim-typewriter">
          Thank you! <br></br> We'll be in touch soon.
        </ThankYouH1>
      </ThankYouContainer>
    </>
  );
};

export default ThankYou;
