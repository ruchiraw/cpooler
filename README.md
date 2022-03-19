
npm install -g pm2

pm2 start server.js --watch

https://petstore.swagger.io/

NODE_ENV=development|production|test

Development --> Testing --> Staging --> Production

## Resources

User, VehicleType, Ride etc.

e.g. user
```
{
  _id: '1234', 
  email: 'foo@bar.com', 
  passwordHash: '', 
  .....
}
```

## Main HTTP Verbs

* POST - create new resources
* GET - get resource by id or search
* PUT - update a given resource by providing the full JSON of the resource
* DELETE - deletes a given resource 

## Schemas

### users
```
{
  name: String,
  email: String,
  password: String,
  address: String,
  roles: [String] // enum 'passenger', 'driver', 'admin',
  identityCard: String // photo url
  drivingLicense: String // photo url
}
```

### vehicles
```
{
  type: String, // enum 'motorbike', 'threewheeler', 'bus', 'car', 'van', 'suv',
  passengers: Number,
  registrationCert: String // photo url
}
```

### rides
```
{
  type: String // enum 'passenger', 'driver'
  user: ObjectId,
  from: {
    lat: Number, 
    lon: Number
  },
  to: {
    lat: Number, 
    lon: Number
  },
  passengers: Number,
  time: Date
}
```

### reviews
```
{
  user: ObjectId,
  about: ObjectId,
  rating: Number,
  comment: String
}
```

## REST APIs

Base URI
- Dev - `http://localhost:3000/apis/v1`
- Prod - `https://apis.carpooler.lk/v1`

### Routes


- `POST /{model}` 
  - creates a new model

- `GET /{model}/{id}` 
  - finds the given model by id

- `GET /{model}` 
  - finds models by the given query

- `PUT /{model}/{id}` 
  - updates the given models by the id

- `DELETE /{model}/{id}` 
  - delete the given model by id

### HTTP Status Codes

200 - Found
201 - Created

404 - Not found
401 - Authentication error
400 - Client error

500 - Server error