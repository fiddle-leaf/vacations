import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";
import { useState } from "react";
import Travel from "../components/Travel";
import AddOns from "../components/AddOns";

//`action` fx handles the request.
export const action = async ({ request }) => {
  const form = await request.formData();
  console.log(Object.fromEntries(form));
  return redirect("/vacations");
};

export default function NewVacation() {
  const [transport, setTransport] = useState({
    mode: "",
  });

  function handleChange(e) {
    setTransport.mode({ [e.target.value]: e.target.value });
    console.log(e.target.name);
  }
  return (
    <article>
      <h2>New Vacation</h2>
      <Form
        method="POST"
        onSubmit={(e) => {
          const response = confirm("Please confirm new vacation submission.");
          !response ? e.preventDefault : null;
        }}
      >
        <div className="header">
          <span>
            <label htmlFor="name">
              Vacation Name:&nbsp;
              <input type="text" name="name" id="name" />
            </label>
          </span>
          <span>
            <label htmlFor="name">
              Vacation Budget:&nbsp;$
              <input type="number" name="budget" id="budget" />
            </label>
          </span>
        </div>
        <div className="boy">
          <h3>Transportation Details</h3>
          <div>
            <label htmlFor="">
              <input
                type="radio"
                name="mode"
                id="airplane"
                value="airplane"
                onChange={handleChange}
                checked={transport.mode === "airplane"}
              />
              Airplane
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="mode"
                id="bus"
                value="bus"
                onChange={handleChange}
                checked={transport.mode === "bus"}
              />
              Bus
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="mode"
                id="train"
                value="train"
                onChange={handleChange}
                checked={transport.mode === "train"}
              />
              Train
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="mode"
                id="car"
                value="car"
                onChange={handleChange}
                checked={transport.mode === "car"}
              />
              Car
            </label>
            <label htmlFor="">
              <input
                type="radio"
                name="mode"
                id="other"
                value="other"
                onChange={handleChange}
                checked={transport.mode === "other"}
              />
              Other
            </label>
          </div>
        </div>
        <Travel />
        <div>
          <h3>Add Ons</h3>
          <AddOns />
        </div>
        <div>
          <input type="submit" value="Create New Vacation" />
        </div>
      </Form>
    </article>
  );
}
