import { envVar } from "@/config/envVar";
import { ofetch } from "ofetch";

const apiClient = ofetch.create({
  baseURL: envVar.BACKEND_BASE_URL,
  credentials: "include",
});
export default apiClient;
