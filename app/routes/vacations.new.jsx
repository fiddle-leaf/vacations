import { redirect } from "@remix-run/node";
import { Form } from "@remix-run/react";

//`action` fx handles the request.
export const action = async ({ request }) => {
  const form = await request.formData();
  console.log(Object.fromEntries(form));
  return redirect("/vacations");
};

export default function NewVacation() {
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
        <div className="form-header">
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
        <div>
          <input type="submit" value="Create New Vacation" />
        </div>
      </Form>
    </article>
  );
}
