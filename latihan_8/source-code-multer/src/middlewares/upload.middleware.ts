import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../utils/cloudinary';

const storage = multer.memoryStorage();

// const upload = multer({
//   storage,
//   limits: {
//     fileSize: 1024 * 1024 * 5,
//   },
// });

interface Params {
  folder: string;
  allowed_formats: string[];
}

const upload = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'uploads',
    allowed_formats: ['jpeg', 'png', 'jpg'],
  } as Params,
});

// export const single = upload.single('file');
// export const multiple = upload.array('files', 10);
export const single = multer({ storage: upload }).single('file');
export const multiple = multer({ storage: upload }).array('files', 10);

export default {
  single,
  multiple,
};
