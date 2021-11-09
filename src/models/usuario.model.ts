import mongoose from 'mongoose';

mongoose.connect(`${process.env.MONGO_LOCAL_URI}`);
