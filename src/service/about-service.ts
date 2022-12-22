import { Axios } from "axios";
import type { About } from "@/type/about";
import { getAppConfig } from "@/config/provider";

export class AboutService {
    private axios = new Axios({
        baseURL: getAppConfig().service.aboutServerAddress
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
