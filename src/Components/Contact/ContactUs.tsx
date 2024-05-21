import "./ContactUs.css";

const ContactUs: React.FC = () => {
  return (
    <>
      <div className="ContactheroContainer">
        <img
          className="AboutheroImage"
          src="https://pinnacleoilandgas.com/wp-content/uploads/2021/03/11-Banner.jpg"
          alt=""
        />
        <div className="AboutheroText">
          <h3 className="AboutheroIntro">Contact Us</h3>

        </div>
      </div>

      <div className="GetInTouchContainer">
      <div className="GetInTouchWrapper">
        <div className="GetInTouchLeft">
          <div className="GetInTouchLeftWrapper">
            <h1 className="GetInTouchTitle">Get In Touch</h1>
            <p className="GetInTouchParagraphs"></p>
            <p className="GetInTouchParagraphs"></p>
            <p className="GetInTouchParagraphs"></p>
          </div>
        </div>
        <div className="GetInTouchRight">
          <div className="GetInTouchRightWrapper">
            <div className="GetInTouchInputContainer">
              <input
                type="text"
                placeholder="First Name"
                className="GetInTouchInput"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="GetInTouchInput"
              />
            </div>
            <div className="GetInTouchInputContainer">
              <input
                type="text"
                placeholder="Email"
                className="GetInTouchInput"
              />
              <input
                type="text"
                placeholder="Subject"
                className="GetInTouchInput"
              />
            </div>
            <textarea
              className="GetInTouchTextArea"
              placeholder="Type Your Message Here..."
              name=""
              id=""
            ></textarea>
            <p className="submit">Submit</p>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default ContactUs;
