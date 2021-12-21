<template>
  <div class="card">
    <img
      class="card-img-top rounded-circle"
      src="https://randomuser.me/api/portraits/lego/2.jpg"
      alt="wizzkid profile picture"
    />
    <div class="card-body">
      <h5 class="card-title">{{ wizzkid.name }}</h5>
      <p class="card-text">Developer</p>
      <p class="card-text">Phone: 864737326</p>
      <p class="card-text">Email: edgaras@gmail.com</p>
      <a href="#" class="btn btn-primary">View Profile</a>
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