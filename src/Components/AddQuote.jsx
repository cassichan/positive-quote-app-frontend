import { useState, useEffect } from "react";

export default function AddQuote() {
  const [form, setForm] = useState({});

  useEffect(() => {}, [form])

  
  //Using async await
  async function formSubmit(e) {
    e.preventDefault();
    try {
      const results = await fetch("api-link", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const data = results.json();
      console.log(data)
    } catch (error) {
      console.error(error);
    }
  }

  const updateForm = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  console.log(form);

  return (
    <>
      <p>This is where we will add new quotes</p>
      <form onSubmit={formSubmit}>
        <label>Feel free to share your favorite quote!</label><br/>
        <input
          type="text"
          name="text"
          placeholder="Add quote here"
          onChange={updateForm}
          value={form.text}
        ></input>
      </form>
    </>
  );
}
