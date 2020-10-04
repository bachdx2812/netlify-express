const httpStatus = require('http-status');

/**
 * BOXリストを取得
 */
exports.getBoxes = (req, res, next) => {
  try {
    return res.status(httpStatus.OK).json({
      "assigned_boxes": [
        {
          "code": "B_INSPECTION_01",
          "name": "検査",
          "doctor": {
            "code": "D_01",
            "name": "佐藤"
          },
          "kind": "reception",
          "alternative_boxes": [
            "B_INSPECTION_02",
            "B_INSPECTION_03"
          ],
          "use_calling_button": true,
          "waiting_count": 1,
          "waiting_time": 16,
          "treating_count": 2
        }
      ],
      "other_boxes": [
        {
          "code": "B_INSPECTION_01",
          "name": "検査",
          "doctor": {
            "code": "D_01",
            "name": "佐藤"
          },
          "kind": "reception",
          "alternative_boxes": [
            "B_INSPECTION_02",
            "B_INSPECTION_03"
          ],
          "use_calling_button": true,
          "waiting_count": 1,
          "waiting_time": 16,
          "treating_count": 2
        }
      ]
    });
  } catch (error) {
    return next(error);
  }
};

/**
 * BOXを取得
 */
exports.getBoxByCode = (req, res, next) => {
  try {
    return res.status(httpStatus.OK).json([
      {
        "patient": {
          "code": "038667",
          "name": "サカグチ　ノリコ",
          "real_name": "坂口　紀子",
          "real_kana_name": "サカグチ　ノリコ",
          "sex": "男",
          "age": 32,
          "birthday": "1988",
          "phone_number": "0809999999",
          "contraindications": [
            {
              "at": "2020-09-27T13:03:11",
              "staff_code": "j-ito",
              "staff_name": "伊藤（純）",
              "code": "C_MYDRIN"
            }
          ],
          "patient_attributes": [
            {
              "at": "2020-09-27T13:03:11",
              "staff_code": "j-ito",
              "staff_name": "伊藤（純）",
              "code": "A_HEARING_LOSS"
            }
          ]
        },
        "visit": {
          "id": "BFD4F43B-A4B2-4D10-9C1D-D11C2BCEA4A7",
          "sequence": 2,
          "reception_number": 32,
          "status": "no_appointment",
          "appoint_date": "2020-06-12T10:10:00",
          "reception_date": "2020-06-12T10:08:32",
          "visit_memos": [
            {
              "at": "2020-09-27T13:03:11",
              "staff_code": "j-ito",
              "staff_name": "伊藤（純）",
              "memo": "Hello, world!"
            }
          ],
          "clinical_path_code": "OUTPATIENT",
          "clinical_path_name": "外来",
          "mydriasys": "R",
          "insurance": "0割",
          "current_doctor": {
            "code": "D_01",
            "name": "佐藤"
          },
          "previous_doctor": {
            "code": "D_01",
            "name": "佐藤"
          },
          "similar_name_patients": [
            "092231",
            "091122"
          ],
          "ope_schedule": "E7E465A1-A108-4400-924A-FD931B0E09BF"
        },
        "task": {
          "id": "BFD4F43B-A4B2-4D10-9C1D-D11C2BCEA4A7",
          "clinical_path_code": "Hello, world!",
          "clinical_path_name": "Hello, world!",
          "task_form_code": "Hello, world!",
          "task_form_name": "Hello, world!",
          "box_code": "Hello, world!",
          "box_name": "Hello, world!",
          "doctor_code": "Hello, world!",
          "doctor_name": "Hello, world!",
          "order": "Hello, world!",
          "status": "planned",
          "reason": "Hello, world!",
          "waiting": {
            "at": "2020-09-27T13:03:11",
            "staff_code": "j-ito",
            "staff_name": "伊藤（純）"
          },
          "treating": {
            "at": "2020-09-27T13:03:11",
            "staff_code": "j-ito",
            "staff_name": "伊藤（純）"
          },
          "completed": {
            "at": "2020-09-27T13:03:11",
            "staff_code": "j-ito",
            "staff_name": "伊藤（純）"
          },
          "omitted": {
            "at": "2020-09-27T13:03:11",
            "staff_code": "j-ito",
            "staff_name": "伊藤（純）"
          },
          "passed": {
            "at": "2020-09-27T13:03:11",
            "staff_code": "j-ito",
            "staff_name": "伊藤（純）"
          },
          "task_actions": [
            {
              "at": "2020-09-27T13:03:11",
              "staff_code": "j-ito",
              "staff_name": "伊藤（純）",
              "item_code": "T_01",
              "item_name": "ミドリンP",
              "kind": "timer",
              "action": "start",
              "duration": 1
            },
            {
              "at": "2020-09-27T13:03:11",
              "staff_code": "j-ito",
              "staff_name": "伊藤（純）",
              "item_code": "T_01",
              "item_name": "ミドリンP",
              "kind": "check",
              "action": "check"
            },
            {
              "at": "2020-09-27T13:03:11",
              "staff_code": "j-ito",
              "staff_name": "伊藤（純）",
              "item_code": "T_01",
              "item_name": "ミドリンP",
              "kind": "select",
              "action": "select",
              "choice": "Hello, world!"
            },
            {
              "at": "2020-09-27T13:03:11",
              "staff_code": "j-ito",
              "staff_name": "伊藤（純）",
              "item_code": "T_01",
              "item_name": "ミドリンP",
              "kind": "numeric",
              "action": "set",
              "value": 1
            },
            {
              "at": "2020-09-27T13:03:11",
              "staff_code": "j-ito",
              "staff_name": "伊藤（純）",
              "item_code": "T_01",
              "item_name": "ミドリンP",
              "kind": "hand_over",
              "action": "add",
              "task_hand_over": {
                "at": "2020-09-27T13:03:11",
                "staff_code": "j-ito",
                "staff_name": "伊藤（純）",
                "id": "Hello, world!",
                "source_task_id": "Hello, world!",
                "target_task_ids": [
                  "Hello, world!"
                ],
                "content_type": "text",
                "content": "Hello, world!",
                "voice_seconds": 12
              }
            },
            {
              "at": "2020-09-27T13:03:11",
              "staff_code": "j-ito",
              "staff_name": "伊藤（純）",
              "item_code": "T_01",
              "item_name": "ミドリンP",
              "kind": "order",
              "action": "add",
              "visit_id": "Hello, world!",
              "task_id": "Hello, world!"
            }
          ]
        },
        "waiting_priority": "1"
      }
    ]);
  } catch (error) {
    return next(error);
  }
};

/**
 * 待合モニタへ呼び出し指示
 */
exports.postBox = (req, res, next) => {
  try {
    res.status(httpStatus.OK).send();
  } catch (error) {
    return next(error);
  }
}

/**
 * 待ち順の優先度を更新
 */
exports.updateWaitOrderPriority = (req, res, next) => {
  try {
    res.status(httpStatus.NO_CONTENT).send();
  } catch (error) {
    return next(error);
  }
}