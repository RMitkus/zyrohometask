# Zyro Home Task

## Task

- Use or create API with 5000+ records
- Use any framework to represent forementioned data
- On header click data sorted descending/ascending
- Add pagination
- Add function to see all data at once
- Clicked row respresented elsewhere in the screen
- Strong concern on performance

## Implementation

### Backend
- Node.js (express) server
- mongoDB database (mongoose)
- Data from https://data.gov.lt/dataset/laikomu-gyvunu-augintiniu-duomenys

### Frontend
- React - create-react-app
- Redux for state management
- Small touches of Material-UI (pagination)


## For use

- npm i at root and frontend folders
- .env file requires
> NODE_ENV = development

> PORT = 5000

> MONGO_URI = 'mongodb+srv://<user>:<password>@<yourdb>.xmsme.mongodb.net/<yourdb>'
