import multer from 'multer';

export const upload = multer({
  storage: multer.memoryStorage(),
  fileFilter: (req, file, cb) => {
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Sólo se permiten imágenes'));
    }
    cb(null, true);
  },
  limits: {
    fileSize: 5 * 1024 * 1024, // Límite de 5MB
  },
});