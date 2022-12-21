<script lang="ts">
    import { AboutService } from "@/service/about-service";

    export default {
        data() {
            return {
                about: "This is an about page"
            };
        },

        async mounted() {
            const resp = await new AboutService().getAboutFromServer();
            this.about = resp.body;
        }
    };
</script>

<template>
    <div class="about">
        <h1>{{ about }}</h1>
    </div>
</template>
