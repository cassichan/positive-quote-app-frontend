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
    <main>
      <h2>Quotes...</h2>
      <p>
        A lot of us have a favorite or two.
        <br />
        <br /> Some poetic line that lingers with us, that tugs on our
        heartstrings, and that we can call upon to lift us up when we need
        strength.
        <br /> <br />
        <br />
        The purpose of this website is to provide a space where people can share
        and read some quotes to lift the human spirit, in good times and bad
        times.
      </p>
      <br />
      <br />
      <br />
      <form onSubmit={formSubmit}>
        <label>
          <h3>Feel free to share your favorite quote!</h3>
        </label>
        <br />
        <input
          type="text"
          name="body"
          placeholder="Add quote here"
          value={form.body}
          onChange={updateForm}
        ></input>
        <input
          type="text"
          name="author"
          placeholder="Add Author here"
          value={form.author}
          onChange={updateForm}
        ></input>
        <button onClick={formSubmit} type="submit">
          Submit
        </button>
      </form>
      <img
        src="https://cdn.pixabay.com/photo/2021/01/04/17/37/cats-5888277_1280.png"
        alt="A drawing of three cats holding a blank notebad"
      ></img>
    </main>
  );
}
