export const handleSuccess = (res, message, data) => {
  res.status(200).json({
    success: true,
    message,
    data,
  });
};

export const handleError = (res, error) => {
  console.log(error);
  res.status(500).json({
    success: false,
    message: error.message || "Internal server error",
  });
};
