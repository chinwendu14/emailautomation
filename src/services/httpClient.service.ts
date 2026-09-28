import axiosClient from "@/lib/axios.lib";
import { IHttpResponse } from "../interface/httpClient.interface";
import { AxiosRequestConfig } from "axios";

export const handleGetRequest = async <T>(
  payload: string
): Promise<IHttpResponse<T>> => {
  const { data } = await axiosClient.get(payload);
  return data;
};

export const handlePostRequest = async <T, G>(
  path: string,
  payload: T,
  headers: AxiosRequestConfig = {}
): Promise<IHttpResponse<G>> => {
  const { data } = await axiosClient.post(`${path}`, payload, headers);
  return data;
};
export const handlePutRequest = async <T, G>(
  path: string,
  payload: T
): Promise<IHttpResponse<G>> => {
  const { data } = await axiosClient.put(`${path}`, payload);
  return data;
};
export const handlePatchRequest = async <T, G>(
  path: string,
  payload: T
): Promise<IHttpResponse<G>> => {
  const { data } = await axiosClient.patch(`${path}`, payload);

  return data;
};
export const handleDeleteRequest = async <T>(
  payload: string
): Promise<IHttpResponse<T>> => {
  const { data } = await axiosClient.delete(`${payload}`);
  return data;
};

// export const handleDeleteAcctRequest = async <T, G>(
//   path: string,
//   payload: T
// ): Promise<IHttpResponse<G>> => {
//   const { data } = await axiosClient.delete(`${path}`, payload);
//   return data;
// };

export const handleDeleteAcctRequest = async <T, G>(
  path: string,
  payload: T
): Promise<IHttpResponse<G>> => {
  const { data } = await axiosClient.delete<IHttpResponse<G>>(path, {
    data: payload, // ✅ pass payload inside config.data
  });
  return data;
};
