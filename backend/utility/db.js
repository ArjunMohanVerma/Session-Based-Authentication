import mongoose from 'mongoose';

const dbc = mongoose
  .connect(
    process.env.MONGO_URI ||
      'mongodb+srv://arjungithub1234:Mohan12%40345@cluster0.z3qfmty.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

export default dbc;
