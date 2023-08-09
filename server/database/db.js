import mongoose from 'mongoose';
export const Connection = async (username,password) => {
    
    const URL = `mongodb+srv://${username}:${password}@flipkart-clone.ft2doqc.mongodb.net/?retryWrites=true&w=majority`
    try {
        //useUnifiedTopology False by default. Set to true to opt in to using the MongoDB driver's new connection management engine. 
        //useNewUrlParser allow users to fall back to the old parser if they find a bug in the new parser.
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;