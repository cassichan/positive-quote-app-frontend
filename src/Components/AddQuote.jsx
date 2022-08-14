import { useState, useEffect } from "react";

export default function AddQuote() {
  const [form, setForm] = useState({});

  useEffect(() => {}, [form]);

  const formSubmit = (e) => {
    e.preventDefault();
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
          value={form.text}
          onChange={updateForm}
        ></input>
        <input
          type="author"
          name="author"
          placeholder="Add Author here"
          value={form.author}
          onChange={updateForm}
        ></input>
      </form>
    </>
  );
}
