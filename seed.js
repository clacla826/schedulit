const {
  User,
  Appointment,
  Property,
  Service,
  UnavailableTime
} = require("./server/db/models");
const db = require("./server/db/db");

const users = [
  {
    id: 1,
    firstName: "Claudia",
    lastName: "Baik",
    isSuperAdmin: true,
    isAdmin: true,
    phone: "646-599-1305",
    email: "claudiabaik@gmail.com",
    password: "claudia"
  },
  {
    id: 2,
    firstName: "Luca",
    lastName: "Sforza",
    isSuperAdmin: false,
    isAdmin: true,
    phone: "347-247-1305",
    email: "lensitStudio@gmail.com",
    password: "luca"
  },
  {
    id: 3,
    firstName: "Josie",
    lastName: "Realtor",
    isSuperAdmin: false,
    isAdmin: false,
    phone: "123-123-1305",
    email: "josie@mail.com",
    password: "josie"
  },
  {
    id: 4,
    firstName: "John",
    lastName: "Realtor",
    isSuperAdmin: false,
    isAdmin: false,
    phone: "334-234-1305",
    email: "john@mail.com",
    password: "john"
  }
];

const services = [
  {
    id: 1,
    name: "HDR Photography",
    image:
      "https://static1.squarespace.com/static/5b40e053b27e3921344845d6/5b44f9690e2e726e6d17db68/5b44f998758d46a260494159/1531247060197/lensitIconsWHsm-17.png?format=300w",
    price: 0.1,
    description:
      "The Real Estate HDR photography technique starts off with several images with varying highlight, mid-tone, and shadow details, thus expanding the overall light range of each set of exposures.",
    isAvailable: "true"
  },
  {
    id: 2,
    name: "3D Tour",
    image:
      "https://static1.squarespace.com/static/5b40e053b27e3921344845d6/5b44f9690e2e726e6d17db68/5b44f998575d1f3762b7d532/1531496955939/lensitIconsWHsm-18.png?format=300w",
    price: 0.15,
    description:
      "Matterport 3D Showcase is a better real estate virtual tour: an immersive, 360º virtual experience that engages buyers, delights sellers, and wins you listings. Immersive 3D experiences so real, they're like being there! Matterport 3D Showcase is unlike any other real estate virtual tours.",
    isAvailable: "true"
  },
  {
    id: 3,
    name: "Floor Plan",
    image:
      "https://static1.squarespace.com/static/5b40e053b27e3921344845d6/5b44f9690e2e726e6d17db68/5b44f99aaa4a99db499f2489/1531247153639/lensitIconsWHsm-19.png?format=300w",
    price: 50,
    description:
      "A real estate floor plan is a drawing to scale that shows the property as seen from above. It shows the relationship between rooms and spaces and the overall layout of the property.",
    isAvailable: "true"
  },
  {
    id: 4,
    name: "Video Tour",
    image:
      "https://static1.squarespace.com/static/5b40e053b27e3921344845d6/5b44f9690e2e726e6d17db68/5b44f99aaa4a99db499f2489/1531247153639/lensitIconsWHsm-19.png?format=300w",
    price: 0.16,
    description:
      "Providing full motion, high definition, narrated video tours to the real estate industry",
    isAvailable: "true"
  },
  {
    id: 5,
    name: "Virtual Staging",
    image:
      "https://static1.squarespace.com/static/5b40e053b27e3921344845d6/5b44f9690e2e726e6d17db68/5b44f99a352f53e9173549c6/1531247184844/lensitIconsWHsm-22.png?format=300w",
    price: 50,
    description:
      "Virtual staging services make the most of your real estate marketing budget by helping prospective buyers visualize the potential of an empty home and increase your closing.",
    isAvailable: "true"
  },
  {
    id: 6,
    name: "Aerial Video/Photography",
    image:
      "https://static1.squarespace.com/static/5b40e053b27e3921344845d6/5b44f9690e2e726e6d17db68/5b44f99a575d1f3762b7d559/1531269320055/lensitIconsWHsm-23.png?format=300w",
    price: 400,
    description:
      "Real Estate Aerial Photography and video by drone. Lensit team can help to photograph your real estate property using our Professional Aerial Video and Photography",
    isAvailable: "true"
  },
  {
    id: 7,
    name: "Property Web Site",
    image:
      "https://static1.squarespace.com/static/5b40e053b27e3921344845d6/5b44f9690e2e726e6d17db68/5b44f99b8a922d18775a127d/1531247263070/lensitIconsWHsm-24.png?format=300w",
    price: 0,
    description:
      "Single Property Websites plus an entire suite of marketing tools designed to help real estate agents market their properties online. (available for 6 months)",
    isAvailable: "true"
  },
  {
    id: 8,
    name: "Pofessional Branding",
    image:
      "https://static1.squarespace.com/static/5b40e053b27e3921344845d6/5b44f9690e2e726e6d17db68/5b44f99b03ce64cf6cdfb9ad/1531496934975/lensitIconsWHsm-25.png?format=300w",
    price: 0,
    description:
      "Self branding is undeniably important and Lensit Design team can help you achieve your personal brand image that you always dreamed of. Our services include headsots, intro video, logo design, websites, and more. Contact us for a quote.",
    isAvailable: "true"
  }
];

const properties = [
  {
    id: 1,
    address: "350 Warren St",
    city: "Jersey City",
    state: "NJ",
    zip: 07302,
    buildingType: 'Apartment',
    size: 1680,
    bedrooms: 2,
    bathrooms: 2,
    bookerId: 3
  },
  {
    id: 2,
    address: "62 Morris St",
    city: "Jersey City",
    state: "NJ",
    zip: 07302,
    buildingType: 'Commercial Building',
    size: 3223,
    bedrooms: 0,
    bathrooms: 2,
    bookerId: 4
  },
  {
    id: 3,
    address: "297 Montgomery St",
    city: "Jersey City",
    state: "NJ",
    zip: 07302,
    buildingType: 'House',
    size: 2300,
    bedrooms: 3,
    bathrooms: 2,
    bookerId: 4
  },
  {
    id: 4,
    address: "1500 Washington St",
    city: "Hoboken",
    state: "NJ",
    zip: 07030,
    buildingType: 'Apartment',
    size: 980,
    bedrooms: 1,
    bathrooms: 1.5,
    bookerId: 3
  }
];

const appointments = [
  {
    id: 1,
    photographer: "Luca Sforza",
    date: '2018-07-22',
    startTime: '10:00',
    finishTime: '11:00',
    status: 'Booked',
    price: null,
    paid: false,
    paymentOption: 'Credit',
    serviceIds: [1,2,3],
    bookerId: 3,
    propertyId: 1
  },
  {
    id: 2,
    photographer: "Luca Sforza",
    date: '2018-07-24',
    startTime: '15:00',
    finishTime: '16:00',
    status: 'Booked',
    price: 600,
    paid: false,
    paymentOption: 'Credit',
    serviceIds: [1,4,5],
    bookerId: 4,
    propertyId: 2
  },
  {
    id: 3,
    photographer: "Luca Sforza",
    date: '2018-07-23',
    startTime: '15:00',
    finishTime: '16:00',
    status: 'Booked',
    price: 800,
    paid: false,
    paymentOption: 'Credit',
    serviceIds: [1,3,4],
    bookerId: 4,
    propertyId: 3
  }
];

const unavailableTimes = [
  {
    id: 1,
    date: '2018-07-29',
    startTime: '15:00',
    finishTime: '16:00',
    userId: 2
  },
  {
    id: 2,
    date: '2018-07-30',
    startTime: '09:00',
    finishTime: '16:00',
    userId: 2
  }
];

function buildingUsers() {
  return Promise.all(users.map(user => User.create(user)));
}

function buildingServices() {
  return Promise.all(services.map(service => Service.create(service)));
}

function buildingProperties() {
  return Promise.all(properties.map(property => Property.create(property)));
}

function buildingAppointments() {
  return Promise.all(appointments.map(appointment => Appointment.create(appointment)));
}

function buildingUnavailableTimes() {
  return Promise.all(unavailableTimes.map(unavailableTime => UnavailableTime.create(unavailableTime)));
}

function seed() {
  return buildingUsers()
    .then(() => buildingServices())
    .then(() => buildingProperties())
    .then(() => buildingAppointments())
    .then(() => buildingUnavailableTimes());
}

console.log("Syncing Database baby");

db.sync({ force: true })
  .then(() => {
    console.log("Seeding database");
    return seed();
  })
  .then(() => console.log("Seeding Successful"))
  .catch(err => {
    console.error("Error while seeding");
    console.error(err.stack, err);
  })
  .finally(() => {
    db.close();
    return null;
  });
