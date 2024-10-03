import express, { Request, Response } from 'express';

import { single, multiple } from '../middlewares/upload.middleware';
import cloudinary from '../utils/cloudinary';
import * as dotenv from 'dotenv';

dotenv.config();

const cloud_name = process.env.CLOUDINARY_CLOUD_NAME;
const api_key = process.env.CLOUDINARY_API_KEY;
const api_secret = process.env.CLOUDINARY_API_SECRET;
console.log('process', cloud_name, api_key, api_secret);

cloudinary.config({
  cloud_name,
  api_key,
  api_secret,
});

export const handleUpload = async (file: string) => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(
      file,
      {
        resource_type: 'auto',
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      }
    );
  });
};

const api = express.Router();

api.get('/upload/single', single, (req: Request, res: Response) => {
  const { file } = req;
  console.log('file', file);

  res.json('Hello World');
});
api.get('/upload/multiple', multiple, (req: Request, res: Response) => {
  const { files } = req;

  res.json('Berhasil');
});

export default api;
