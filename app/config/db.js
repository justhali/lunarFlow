const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const port = process.env.PORT || 3000;
const connectDB = async() => {
    try {
        const connection = await mongoose.connect(process.env.MONGODB_URI)
        console.log('Connected to MongoDb')
        app.listen(port, () => {
            console.log(`Server is running on port http://localhost:${port}`)
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = connectDB;




