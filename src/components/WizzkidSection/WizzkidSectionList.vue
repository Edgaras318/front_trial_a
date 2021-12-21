<template>
  <div class="row g-3 gy-3">
    <div v-for="wizzkid in wizzkids" :key="wizzkid.id" class="col-3">
      <WizzkidSectionListCard :wizzkid="wizzkid" />
    </div>
  </div>
</template>
<script>
import WizzkidSectionListCard from "./WizzkidSectionListCard.vue";
import getAllWizzkids from "@/composables/getAllWizzkids";
import { onMounted } from "vue";
export default {
  components: { WizzkidSectionListCard },
  setup() {
    const { getWizzkids, wizzkids } = getAllWizzkids();

    onMounted(async () => {
      await getWizzkids();
    });

    return {
      wizzkids,
    };
  },
};
</script>
<style>
</style>