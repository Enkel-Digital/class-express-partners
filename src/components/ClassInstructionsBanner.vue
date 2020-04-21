<template>
  <v-card>
    <!-- <v-toolbar flat>
      <v-toolbar-title>My Document</v-toolbar-title>
      <v-spacer></v-spacer>
      <div>
        <v-switch v-model="sticky" label="Sticky Banner" hide-details></v-switch>
      </div>
    </v-toolbar>-->
    <v-banner single-line :sticky="sticky">
      Click a class card to view more details!
      <template v-slot:actions="{ dismiss }">
        <v-btn text color="blue accent-4" @click="dismiss">Dismiss</v-btn>
      </template>
    </v-banner>
  </v-card>
</template>

<script>
export default {
  name: "class-instructions-banner",
  data: () => ({
    sticky: false
  })
};
</script>
