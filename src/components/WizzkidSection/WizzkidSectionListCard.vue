<template>
  <div class="card bg-white">
    <div class="card-body text-center">
      <img
        :src="
          wizzkid.picture
            ? '/images/blank-profile-picture.png'
            : '/images/blank-profile-picture.png'
        "
        class="rounded-circle mb-3 img-fluid"
        style="height: 150px; width: 150px"
        alt=""
      />
      <h4 class="card-title mb-1">{{ wizzkid.name }}</h4>
      <p class="card-text lead">{{ wizzkid.role }}</p>
      <router-link
        :to="{ name: 'WizzkidDetails', params: { id: wizzkid.id } }"
        class="
          btn btn-outline-dark
          rounded-pill
          btn-sm
          px-3
          py-2
          stretched-link
        "
      >
        <i class="bi bi-box-arrow-up-right pe-2"></i>
        <span class="">View Profile</span>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    wizzkid: Object,
  },
};
</script>
<style scoped>
#wizzkids img {
  margin-top: -50px;
}
.card:hover {
  box-shadow: 0 0 11px rgba(33, 33, 33, 0.2);
}
</style>