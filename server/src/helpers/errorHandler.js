export const errorHandler = (res, customMessage) => {
  console.error(customMessage);

  res.status(500).json({
    status: false,
    code: 500,
    message: customMessage,
  });
};
