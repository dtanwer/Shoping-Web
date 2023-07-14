import express from 'express'
import cors from 'cors';
import mongoose from 'mongoose'
import multer from 'multer'
import clientRouter from './router/client.js'
import productRouter from './router/product.js'
import orderRouter from './router/order.js'
import path from 'path'
import * as url from 'url';
const app = express();
const storage = multer.diskStorage({
    destination:'./uploads/',
      // Specify the destination folder where uploaded files will be saved
    filename:  (req, file, cb)=> {
        cb(null, Date.now() + '-' + file.originalname); // Set the filename to be unique (using the current timestamp) and preserve the original filename
    }   
});
const upload = multer({ storage });
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));
app.use(express.static(path.join(__dirname,"/uploads")))
app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
    res.send('Api is working!!');
})

app.post('/uploads',upload.single('image'),(req,res)=>{
    console.log(req.file)
    const pic=req.file.filename;
    res.send(pic);
})
app.use('/auth', clientRouter)
app.use('/product', productRouter)
app.use('/order', orderRouter)
try {
    mongoose.connect('mongodb+srv://dtanwer:123123123@cluster0.fhspuw3.mongodb.net/Shoping?retryWrites=true&w=majority');
    console.log("Connected to MongoDb")
} catch (error) {
    console.log(error)
    throw error
}

app.listen(5000, () => {
    console.log('server is Working!! 5000');
})