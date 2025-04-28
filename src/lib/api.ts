import axios from "axios";
import { PostFormData } from "../types";

const BASE_URL = import.meta.env.VITE_API_URL;

export const fetchPosts = () => axios.get(BASE_URL);
export const createPost = (data: PostFormData) => axios.post(BASE_URL, data);
export const updatePost = (id: number, data: PostFormData) => axios.patch(`${BASE_URL}${id}/`, data);
export const deletePost = (id: number) => axios.delete(`${BASE_URL}${id}/`);
