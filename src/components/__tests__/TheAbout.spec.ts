import { describe, it, expect, afterEach, beforeEach, vi } from "vitest";

import { flushPromises, mount } from "@vue/test-utils";
import TheAbout from "../TheAbout.vue";
import { AboutService } from "../../service/about-service";

vi.mock("@/service/about-service", () => {
    const AboutService = vi.fn();
    AboutService.prototype.getAboutFromServer = vi.fn();

    return { AboutService };
});

describe("TheAbout", () => {
    let service: any;

    beforeEach(() => {
        service = new AboutService();
    });

    afterEach(() => {
        vi.clearAllMocks();
    });

    it("renders properly", async () => {
        service.getAboutFromServer.mockResolvedValueOnce({
            body: "About from Vitest"
        });

        const wrapper = mount(TheAbout, {});
        await flushPromises();
        expect(wrapper.text()).toContain("About from Vitest");
    });
});
