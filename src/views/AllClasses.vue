<template>
  <v-content id="AllClasses">
    <v-container>
      <!-- <div></div> -->
      <ClassInstructionsBanner />
      <br />
      <v-card>
        <v-card-title>
          All owned classes
          <v-spacer></v-spacer>
          <v-text-field append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
        </v-card-title>
        <v-card-actions>
          <ClassCards />
        </v-card-actions>
      </v-card>
    </v-container>
  </v-content>
</template>

<script>
import ClassInstructionsBanner from "@/components/ClassInstructionsBanner.vue";
import ClassCards from "@/components/ClassCards.vue";
export default {
  name: "AllClasses",
  components: {
    ClassInstructionsBanner,
    ClassCards
  },
  beforeMount() {
    // Using beforeMount hook to ensure this is ran again even if component is cached when navigating
    // Request store to get and populate all classes of partner
    // this.$store.dispatch("classes/getAllClasses");
  },
  computed: {}
};
</script>

