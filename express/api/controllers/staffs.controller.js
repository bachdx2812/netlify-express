const httpStatus = require('http-status');

/**
 * スタッフリスト取得
 */
exports.getStaffs = (req, res, next) => {
  try {
    return res.status(httpStatus.OK).json({
      "teams": [
        {
          "code": "INSPECTION",
          "name": "検査部",
          "staffs": [
            "j-ito",
            "sasaki"
          ]
        }
      ],
      "staffs": [
        {
          "code": "j-ito",
          "name": "伊藤（純）",
          "password": "Hello, world!"
        }
      ]
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * スタッフのステータスを取得
 */
exports.getStaffByCode = (req, res, next) => {
  try {
    return res.status(httpStatus.OK).json({
      "status": "active",
      "treating_patients": [
        {
          "code": req.params.staffCode,
          "name": "サカグチ　ノリコ"
        }
      ]
    });
  } catch (error) {
    return next(error);
  }
};

