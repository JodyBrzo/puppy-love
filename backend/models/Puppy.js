const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TempSchema = new Schema({
  date: {type: Date, required: true},
  tempature: {type: Number, required: true},
  notes: {type: String}
});

const WeightSchema = new Schema({
  date: {type: Date, required: true},
  weight: {type: Number, required: true},
  notes: {type: String}
});

const FurDescriptionSchema = new Schema({
  date: {type: Date, required: true},
  notes: {type: String}
});

const MicrochipSchema = new Schema({
  date: {type: Date, required: true},
  chipId: {type: Number, required: true},
  notes: {type: String}
});

const UmbilicusSchema = new Schema({
  date: {type: Date, required: true},
  notes: {type: String}
});

const EyesSchema = new Schema({
  date: {type: Date, required: true},
  dateOpened: {type: Date},
  notes: {type: String}
});

const EarsSchema = new Schema({
  date: {type: Date, required: true},
  dateOpened: {type: Date},
  notes: {type: String}
});

const NailsSchema = new Schema({
  date: {type: Date, required: true},
  notes: {type: String}
});

const MedicationSchema = new Schema({
  date: {type: Date, required: true},
  medicationName: {type: String, required: true},
  doseAmount: {type: Number, required: true},
  notes: {type: String}
});

const MilkSupplementSchema = new Schema({
  date: {type: Date, required: true},
  supplimentName: {type: String, required: true},
  amount: {type: Number, required: true},
  notes: {type: String}
});

const VaccineSchema = new Schema({
  date: {type: Date, required: true},
  vacciineName: {type: String, required: true},
  dose: {type: Number, required: true},
  notes: {type: String}
});

const VetCheckSchema = new Schema({
  date: {type: Date, required: true},
  notes: {type: String}
});

const NotesSchema = new Schema({
  date: {type: Date, required: true},
  note: {type: String}
});

const PuppySchema = new Schema ({
  name: {type: String, required: true},
  gender: {
    type: String,
    enum: ['Male', 'Female'], 
    required: true
  },
  mother: {type: String, required: true},
  father: {type: String, required: true},
  birthDate: {type: Date, required: true},
  deceasedDate:{type: Date},
  microchip: {type: MicrochipSchema},
  owner: {
    firstName: {type: String},
    lastName: {type: String},
    phone: {type: Number},
    email: {type: String},
    street: {type: String},
    city: {type: String},
    region: {type: String},
    postal: {type: String},
    country: {type: String}
  },
  tempature: [{type: TempSchema}],
  weight: [{type: WeightSchema}],
  furDescription: [{type: FurDescriptionSchema}],
  umbilicus: [{type: UmbilicusSchema}],
  eyes: [{type: EyesSchema}],
  ears: [{type: EarsSchema}],
  nails: [{type: NailsSchema}],
  medication: [{type: MedicationSchema}],
  milkSuppliment: [{type: MilkSupplementSchema}],
  vaccine: [{type: VaccineSchema}],
  vetCheck: [{type: VetCheckSchema}],
  notes: [{type: NotesSchema}]
});

const Puppy = mongoose.model("Puppy", PuppySchema);
module.exports = Puppy;

//--------Sample Puppy Document--------//
// {
//   "name": "Blue",
//   "mother": "Hazel",
//   "father": "Jed",
//   "birthDate": "2021-10-18T16:15:29.394Z",
//   "deceasedDate": "",
//   "temp": [
//       {
//           "date": "2021-10-18T16:15:29.394Z",
//           "temp": "97.1",
//           "notes": "temp at time of birth"        
//       }
//   ],
//   "weight": [
//       {
//           "date": "2021-10-18T16:15:29.394Z",
//           "weight": ".75",
//           "notes": "weight at time of birth"        
//       }
//   ],
//   "furDescription": [
//       {
//           "date": "2021-10-18T16:15:29.394Z",
//           "notes": "long black curly with some white on nose"        
//       }
//   ],
//   "umbilicus": [
//       {
//           "date": "2021-10-18T16:15:29.394Z",
//           "notes": "looks good"        
//       }
//   ],
//   "eyes": [
//       {
//           "date": "2021-10-18T16:15:29.394Z",
//           "notes": "looks good"        
//       }
//   ],
//   "ears": [
//       {
//           "date": "2021-10-18T16:15:29.394Z",
//           "notes": "looks good"        
//       }
//   ]
// }

