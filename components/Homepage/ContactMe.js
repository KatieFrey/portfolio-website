const ContactMe = () => (
  <form
    action="https://send.pageclip.co/kfZ1wO2kCgge5c1Pa1sjoV7oiIBpVaNO"
    className="pageclip-form"
    method="post"
    className="form"
  >
    <div></div>
    <div>
      <input type="text" name="name" placeholder="Name" />
      <input type="email" name="email" placeholder="Email" />
    </div>
    <div>
      <textarea type="textarea" name="message" placeholder="Message"></textarea>

      <button type="submit" className="pageclip-form__submit">
        <span>Send</span>
      </button>
    </div>
    <style jsx>{`
      .form {
        display: grid;
        grid-template-columns: 15% 33% 33%;
      }
      input,
      textarea,
      button {
        margin: 10% 0 0;
        width: 75%;

        font-family: Courier New;
        font-size: 155%;
      }
      textarea {
        width: 100%;
        height: 50%;
      }
      button {
        font-size: 175%;
        margin-top: 10%;
        width: 50%;
        height: 15%;
        float: right;
      }
    `}</style>
  </form>
);

export default ContactMe;
