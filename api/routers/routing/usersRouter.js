const usersController = require('../../controllers/usersController')
const joiSchema = require('../../utils/joiSchema')
const validatorDTO = require('../../utils/validateMiddlewareDTO')

module.exports = (userRouter) => {

    userRouter.route('/users')
        .get(usersController.getUsers)

    userRouter.route('/user')
        .get(
            validatorDTO('body', joiSchema.getUserByEmailSchema),
            usersController.getUserByEmail
        )

}