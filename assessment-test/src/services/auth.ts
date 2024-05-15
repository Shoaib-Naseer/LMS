import { post } from "../utils/api-client";

interface LoginReqBody {
  username: string;
  password: string;
}

export const userLogin = async (reqBody: LoginReqBody) => {
  const response = await post(
    `/people/auth/login`,
    reqBody,
    {
      headers: {},
    },
    false,
  );
  return response;
};
