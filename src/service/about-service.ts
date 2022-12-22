import { Axios } from "axios";
import type { About } from "@/type/about";

export class AboutService {
    private axios = new Axios({
        baseURL: import.meta.env.VITE_ABOUT_SERVICE_ADDRESS
    });

    public async getAboutFromServer(): Promise<About> {
        const { data } = await this.axios.get<string>("/about", {
            headers: {
                Accept: "application/json"
            }
        });

        return JSON.parse(data);
    }
}
