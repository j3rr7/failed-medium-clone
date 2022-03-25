import React from 'react'
import { IncomingForm } from 'formidable'
import { promises as fs } from 'fs'


// NOTE: 
// npm install mv
// npm install formidable

var mv = require('mv');

export const config = {
  api:{
    bodyParser: false,
  }
}

export default async (req, res) => {
  const data = await new Promise((resolve, reject) => {
    const form  = new IncomingForm();

    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      
      // console.log(fields, files);
      // console.log(files.file.filepath);

      var oldPath = files.file.filepath;
      var newPath = `./public/uploads/${files.file.originalFilename}`;
      mv(oldPath, newPath, function(err){
        if(err) throw err;
      });
      res.status(200).json({fields, files}) 
    });

  })
}


