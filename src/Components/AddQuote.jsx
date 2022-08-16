import { useState, useEffect } from "react";

export default function AddQuote({ quote }, { author }) {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formSubmitted === "true") {
      alert("Quote submitted!");
    }
    else {
      console.log(errorMessage)
    }
  };

  const formSubmit = (e) => {
    e.preventDefault();
    if (!validForm) {
      setErrorMessage("Not a valid form");
      return;
    }
    setErrorMessage("");
    fetch("https://inspirational-quotes-cc.web.app/add-quote", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((results) => results.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
    setFormSubmitted(true);
    setErrorMessage("");
    setValidForm(true);
  };
  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form);

  return (
    <>
      <p>This is where we will add new quotes</p>
      <form onSubmit={formSubmit}>
        <label>Feel free to share your favorite quote!</label>
        <br />
        <input
          type="text"
          name="text"
          placeholder="Add quote here"
          value={quote}
          onChange={updateForm}
        ></input>
        <input
          type="author"
          name="author"
          placeholder="Add Author here"
          value={author}
          onChange={updateForm}
        ></input>
        {/* check if type or htmltype */}
        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    </>
  );
}
