<template>
  <v-content>
    <v-container>
      <div class="row">
        <ScheduleListingCard />
      </div>
    </v-container>
  </v-content>
</template>

<script>
import ScheduleListingCard from "@/components/ScheduleListingCard.vue";

export default {
  name: "schedule",
  components: {
    ScheduleListingCard
  }
};
</script>

<style scoped></style>
