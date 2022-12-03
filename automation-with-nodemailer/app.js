const nodemailer = require('nodemailer');

const app = express()
require('dotenv').config()


app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

app.get('/',(req,res)=>{
    res.status(200).send('Emailing Endpoint ready for consumption')
})


app.post('/send', async (req,res)=>{ 

const {firstName,lastName,birthDate,gender,address,email,country,postalCode,state,mobileNumber,message} = req.body


const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.USER,
    pass: process.env.PASS
  }
});

const mailOptions = {
  from: 'staunchngdev@gmail.com',
  to: 'staunchngdev@gmail.com,info@mhendersonservices.com',
  subject: 'NEW ONLINE COURSE REGISTRATION',
  text: `FIRST_NAME:    ${firstName}
  LAST_NAME:    ${lastName}
  BIRTH_DATE:    ${birthDate}
  GENDER:     ${gender}
  ADDRESS:    ${address}
  EMAIL:    ${email}
  COUNTRY:    ${country}
  POSTAL_CODE:       ${postalCode}
  STATE:    ${state}
  MOBILE_NUMBER:    ${mobileNumber}
  MESSAGE:    ${message}`
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
 console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
    // do something useful
    res.send('Registered Successfully')
  }
});

})



app.post('/receive', async (req,res)=>{ })