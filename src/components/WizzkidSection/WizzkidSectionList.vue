<template>
  <div class="row g-3 gy-3">
    <TheSpinner v-if="isLoading" />
    <div v-else v-for="wizzkid in wizzkids" :key="wizzkid.id" class="col-3">
      <WizzkidSectionListCard :wizzkid="wizzkid" />
    </div>
  </div>
</template>
<script>
import WizzkidSectionListCard from "./WizzkidSectionListCard.vue";
import getAllWizzkids from "@/composables/getAllWizzkids";
import { onMounted } from "vue";
import TheSpinner from "../TheSpinner.vue";
export default {
  components: { WizzkidSectionListCard, TheSpinner },
  setup() {
    const { getWizzkids, wizzkids, isLoading } = getAllWizzkids();

    onMounted(async () => {
      await getWizzkids();
    });

    return {
      wizzkids,
      isLoading,
    };
  },
};
</script>
<style>
</style>