const boardRouter = require("express").Router();
const boardController = require("../controllers/board.controller");

/**
 * @swagger
 * paths:
 *  /api/board/read/{idx}:
 *      get:
 *          summary: '게시글 조회'
 *          description: '인덱스 값으로 게시글 조회 가능'
 *          tags: [Board API]
 *          parameters:
 *          -   in : path
 *              name: index
 *              required: true
 *              description: 게시글 인덱스
 *              schema:
 *                  type: number
 *          responses:
 *              "200":
 *                  description: Success
 *
 */
boardRouter.get("/read/:idx", boardController.read);

/**
 * @swagger
 * paths:
 *  /api/board/create:
 *      post:
 *          summary: "게시글 작성"
 *          description: "데이터 전달"
 *          tags: [Board API]
 *          requestBody:
 *              description: "게시글 데이터"
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          properties:
 *                              data:
 *                                  type: string
 *          responses:
 *              "200":
 *                  description: Success
 *
 */
boardRouter.post("/create", boardController.create);
boardRouter.put("/update", boardController.update);
boardRouter.delete("/del", boardController.del);

module.exports = boardRouter;
