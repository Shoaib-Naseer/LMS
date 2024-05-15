import { get } from "../utils/api-client";

export const getSchools = () => {
  return get(`/dashboard/query/viewSchoolWithNames`);
};

export const querySchools = (date: string) => {
  console.log("🚀 ~ querySchools ~ date:", date);
  return get(`/dashboard/query/querySchoolFeedbackByDate?today=${date}`);
};
