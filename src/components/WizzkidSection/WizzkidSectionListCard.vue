<template>
  <div class="card">
    <img
      class="card-img-top rounded-circle"
      src="https://randomuser.me/api/portraits/lego/2.jpg"
      alt="wizzkid profile picture"
    />
    <div class="card-body">
      <h5 class="card-title">{{ wizzkid.name }}</h5>
      <p class="card-text">{{ wizzkid.role }}</p>
      <p class="card-text">Phone: {{ wizzkid.phone }}</p>
      <p class="card-text">Email: {{ wizzkid.email }}</p>
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
<style >
</style>