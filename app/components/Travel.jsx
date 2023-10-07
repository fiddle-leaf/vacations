export default function Travel() {
  return (
    <div>
      <h4>Departure</h4>
      <div>
        <div>
          <label htmlFor="ticketNo">
            Ticket Number:&nbsp;
            <input type="text" name="ticketNo" id="ticketNo" />
          </label>
          <label htmlFor="destination-datetime">
            Departure Datetime:&nbsp;
            <input
              type="datetime-local"
              name="destination-datetime"
              id="datetime"
            />
          </label>
        </div>
        <div>
          <label htmlFor="destination">
            Destination:&nbsp;
            <input type="text" name="destination" id="destination" />
          </label>
          <label htmlFor="arrival-datetime">
            Arrival Datetime:&nbsp;
            <input
              type="datetime-local"
              name="arrival-datetime"
              id="datetime"
            />
          </label>
        </div>
      </div>
      <h4>Return</h4>
      <div>
        <div>
          <label htmlFor="ticketNo">
            Ticket Number:&nbsp;
            <input type="text" name="ticketNo" id="return" />
          </label>
          <label htmlFor="same">
            <input type="checkbox" name="same" id="same" />
            Same as before
          </label>
        </div>
        <label htmlFor="return-datetime">
          Return Datetime:&nbsp;
          <input type="datetime-local" name="return-datetime" id="datetime" />
        </label>
      </div>
      <div></div>
    </div>
  );
}
