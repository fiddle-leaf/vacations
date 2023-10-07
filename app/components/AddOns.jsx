export default function AddOns() {
  return (
    <div>
      <h4>Costs</h4>
      <div>
        <div>
          <label htmlFor="hotel">
            <input type="checkbox" name="hotel" id="hotel" />
            Hotel Stay:&nbsp;$
            <input type="number" name="cost" id="cost" />
          </label>
        </div>
        <div>
          <label htmlFor="car-rental">
            <input type="checkbox" name="car-rental" id="car-rental" />
            Car Rental:&nbsp;$
            <input type="number" name="cost" id="cost" />
          </label>
        </div>
        <div>
          <label htmlFor="activities">
            <input type="checkbox" name="activities" id="activities" />
            Activities:&nbsp;$
            <input type="number" name="cost" id="cost" />
          </label>
        </div>
      </div>
      <h4>To-do List(s)</h4>
      <div>
        <span>
          <label htmlFor="to-do">
            <input type="checkbox" name="" id="" />
            <input type="text" name="" id="" />
          </label>
        </span>
        <span>
          <input type="button" value="add" />
        </span>
      </div>

      <label htmlFor="notes">
        <h4>Notes</h4>
      </label>
      <div>
        <textarea name="notes" id="notes" cols="30" rows="10"></textarea>
      </div>
    </div>
  );
}
