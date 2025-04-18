import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"
import { asyncHandler } from "../utils/asyncHandler.js"


const healthcheck = asyncHandler(async (req, res) => {

    return res
        .status(200)
        .json({ status: 200, data: {}, message: "OK" })
    //TODO: build a healthcheck response that simply returns the OK status as json with a message
})

export {
    healthcheck
}
