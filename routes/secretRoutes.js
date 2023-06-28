import { HTTP_CODE } from "../utils/statusCodes.js"

function secret (req, res) {
    res.status(HTTP_CODE.OK).json("Secret Code")
}

export default secret