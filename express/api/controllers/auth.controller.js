const httpStatus = require('http-status');

/**
 * ログイン
 */
exports.login = (req, res, next) => {
  try {
    return res.status(httpStatus.OK).json({
      "auth_token": "ABCDEF01234567",
      "code": "test1",
      "name": "佐藤",
      "assigned_boxes: `B_INSPECTION`": [
        "Hello, world!"
      ]
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * ログアウト
 */
exports.logout = (req, res, next) => {
  try {
    res.status(httpStatus.NO_CONTENT).send();
  } catch (error) {
    return next(error);
  }
};

