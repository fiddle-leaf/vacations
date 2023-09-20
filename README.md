# Plan Your Vacation

MERN app Vacation Planner using user authentication via login/signup page and SPA (Single-page App) structure implementing MongoDB & Express.

- Set flight details and destination
- Add extra items: hotel, car-rental, amentities, breakfast, etc
- Drag and drop feature for 'vacation items'
- Notes section saves to database

## Technology Used

- React.js via `create-react-app`
- React-Router for SPA structure
- MongoDB
- Express server
- JTWebToken & BCrypt
- Morgan for debugging
- Normalize.css

## Getting Started

- Visit Page Link, login, and add flight details

## Bugs

- Using React-scripts@4.0.3 to allow proxy to server.js due to error: `Invalid options object. Dev Server has been initialized using an options object that does not match the API schema. - options.allowedHosts[0] should be a non-empty string.` when running `npm start` for React UI.
  - Workaround was to downgrade React-scripts from 5.0.1

## Future Enhancements

- Use redux store to save universal
- Change static pages to dynamic information for flight, add-ons, to-dos, and notes
