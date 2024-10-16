const uploadToCloudinary = (fileBuffer) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: "auto",
        folder: "print_jobs",
        use_filename: true,
        unique_filename: true,
      },
      (error, result) => {
        if (error) {
          reject(error);
        } else {
          resolve(result);
        }
      },
    );
    uploadStream.end(fileBuffer);
  });
};

module.exports = uploadToCloudinary;
