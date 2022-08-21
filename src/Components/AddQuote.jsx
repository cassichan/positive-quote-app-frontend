import { useState, useEffect } from "react";
import "../Styles/AddQuote.css";

export default function AddQuote() {
  const [form, setForm] = useState({});
  const [validForm, setValidForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (form?.body && form?.author) {
      setValidForm(true);
    } else {
      setValidForm(false);
    }
  }, [form]);

  async function formSubmit(e) {
    e.preventDefault();
    if (!validForm) {
      setErrorMessage("Not a valid form");
      return;
    }
    setErrorMessage("");
    try {
      const results = await fetch(
        "https://inspirational-quotes-cc.web.app/add-quote",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      );
      console.log(results);
      const data = await results.json();
      console.log(data);
      setFormSubmitted(true);
      setErrorMessage("");
      setValidForm(true);
      // setForm(form)
      console.log("Form:", form);
    } catch (error) {
      console.error(error);
      setErrorMessage(
        "There was an error submitting your quote. Please try again later." +
          error.toString()
      );
    }
  }

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  console.log(form);
  return (
    <section className="add-quote-main">
      <p>
        <h2>Share your favorite quote below!</h2>
        <h3>We would love to hear from you.</h3>
      </p>
      <div id="form-container">
        <img className="post-quote-img"
          src="https://cdn.pixabay.com/photo/2021/01/04/17/37/cats-5888277_1280.png"
          alt="A drawing of three cats holding a blank notebad"
        ></img>
        <form className="floating-form" onSubmit={formSubmit}>
          <label>Post a quote:</label>
          <br />
          <input
            type="text"
            name="body"
            placeholder="Add quote here"
            value={form.body}
            onChange={updateForm}
          ></input>
          <br />
          <input
            type="text"
            name="author"
            placeholder="Add Author here"
            value={form.author}
            onChange={updateForm}
          ></input>
          <br />
          <button onClick={formSubmit} type="submit">
            Submit
          </button>
        </form>
      </div>
      <br />
      <br />
    </section>
  );
}
