import { Axios } from "axios";
import type { About } from "@/type/about";

export class AboutService {
    private axios = new Axios({
        baseURL: "https://something-that-work.free.beeceptor.com"
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
