import type { Response } from "express";
import { IApiResponse } from "../../interfaces/api-response.interface";
import { HTTP_STATUS } from "../constants/http.status.codes";

class ApiResponse {
  static ok<T>(
    res: Response,
    message: string,
    status: number = HTTP_STATUS.OK,
    data?: T
  ): Response {
    const response: IApiResponse<T> = {
      success: true,
      message,
      data,
    };

    return res.status(status).json(response);
  }

  static create<T>(
    res: Response,
    message: string,
    status: number = HTTP_STATUS.CREATED,
    data?: T
  ): Response {
    const response: IApiResponse<T> = {
      success: true,
      message,
      data,
    };

    return res.status(status).json(response);
  }

  static noResponse(
    res: Response,
    status: number = HTTP_STATUS.NO_CONTENT
  ): Response {
    return res.status(status).send();
  }
}

export default ApiResponse;
