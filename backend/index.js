require('dotenv').config()
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const multer = require('multer');
const bodyParser = require('body-parser');

const Family = require('./modal/family');

const app = express();

const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors())
app.use(express.static('build'))
app.use(requestLogger)

// multer part

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads')
  },
  filename: (req, file, cb) => {
    console.log("file", file)
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

// post req. for posting family details

app.post('/api/family', upload.single('familypic'), (req, res, next) => {
  const {familyData} = JSON.parse(JSON.stringify(req.body))
  const obj = {
    date: new Date(),
    username: familyData['username'],
    spouse: familyData['spouse'],
    locations: familyData['locations'],
    birthYear: familyData['birthYear'],
    presentAddress: familyData['presentAddress'],
    familypic: {
      data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
      contentType: 'image/jpeg'
    }
  }
  Family.create(obj, (err, item) => {
    if (err) {
      console.log(err);
    }
    else {
       item.save().then(result => {
         console.log("obj saved")
       });
    }
  });
});


// get family details

app.get('/api/family', (request, response) => {
  Family.find({}).then(family => {
    response.json(family)
  })
})

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
