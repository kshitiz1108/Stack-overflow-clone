//index.js
import express from 'express'
import mongoose, { connect } from 'mongoose'
import rateLimit from 'express-rate-limit';
import dotenv from "dotenv";
import cors from 'cors'
import Userroutes from '../server/routes/users.js'
import questionroutes from '../server/routes/Questions.js'
import answerRoutes from '../server/routes/Answers.js'
import subscriptionroutes from '../server/routes/Subscription.js'
import { Configuration, OpenAIApi } from 'openai';
import bodyParser from 'body-parser';
import ChatBotroutes from '../server/routes/chatbot.js'
import otpRoutes from '../server/routes/otpController.js'



dotenv.config();
const app = express();
app.use(cors());
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
  });

app.use(express.json({limit:'30mb', extended:'true' }));
app.use(apiLimiter);
app.use(express.urlencoded({limit:'30mb', extended:'true' }));
app.use(bodyParser.json());



app.get('/' ,(req,res) => {
    res.send("This is a stackoverflow clone API")
})

app.use('/user' , Userroutes)
app.use('/questions' , questionroutes)
app.use('/answer' , answerRoutes)
// app.use('/api' , ChatBotroutes )
app.use("/api", otpRoutes);
app.use('/api', subscriptionroutes);


const PORT = process.env.PORT || 5000

const connectionurl = process.env.CONNECTION_URL

mongoose.connect(connectionurl,{useNewUrlParser: true , useUnifiedTopology: true})
.then(() => app.listen(PORT, () => {console.log(`Port running on ${PORT}`)}))
.catch((err) => console.log(err.message))



