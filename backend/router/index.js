const router = require("express").Router();
const user = require("./user/User");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: 유저 추가 수정 삭제 조회
 */
router.use("/user", user);
/**
 * @swagger
 * tags:
 *   name: Test
 *   description: Test
 */

module.exports = router;
