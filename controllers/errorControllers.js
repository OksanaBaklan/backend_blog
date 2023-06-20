/** @format */

const globalTryCatchHandler = (func) => {
  return async (req, res, next) => {
    try {
      await func(req, res, next);
    } catch (error) {
      next(error);
    }
  };
  // return (req, res, next) => func(req, res, next).catch((err) => next(err));
  // new Promise().then().catch()
};

export default globalTryCatchHandler;
