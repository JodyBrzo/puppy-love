const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MicrochipSchema = new Schema({
  date: {type: Date, required: true},
  chipId: {type: Number, required: true},
  notes: {type: String}
});

const OwnerSchema = new Schema({
  firstName: {type: String},
  lastName: {type: String},
  phone: {type: Number},
  email: {type: String},
  street: {type: String},
  city: {type: String},
  region: {type: String},
  postal: {type: String},
  country: {type: String},
});

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

const MilkSupplimentSchema = new Schema({
  date: {type: Date, required: true},
  supplimentName: {type: String, required: true},
  amount: {type: Number, required: true},
  notes: {type: String}
});

const VaccinieSchema = new Schema({
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
  mother: {type: String, required: true},
  father: {type: String, required: true},
  birthDate: {type: Date, required: true},
  deceasedDate:{type: Date, required: false},
  microchip: [{type: MicrochipSchema}],
  owner: [{type: OwnerSchema}],
  temp: [{type: TempSchema}],
  weight: [{type: WeightSchema}],
  furDescription: [{type: FurDescriptionSchema}],
  umbilicus: [{type: UmbilicusSchema}],
  eyes: [{type: EyesSchema}],
  ears: [{type: EarsSchema}],
  nails: [{type: NailsSchema}],
  medication: [{type: MedicationSchema}],
  milkSuppliment: [{type: MilkSupplimentSchema}],
  vaccinie: [{type: VaccinieSchema}],
  vetCheck: [{type: VetCheckSchema}],
  notes: [{type: NotesSchema}]
});

const Puppy = mongoose.model("Puppy", PuppySchema);
module.exports = Puppy;