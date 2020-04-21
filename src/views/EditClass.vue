<template>
  <v-content id="AllClasses">
    <v-container>
      <div align="left">
        <v-btn text color="primary" @click="$router.push({ name: 'all-classes'})">Back</v-btn>
      </div>

      <v-form ref="form" v-model="valid" lazy-validation>
        <v-text-field
          prepend-icon="mdi-loupe"
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="Class Name"
          required
        ></v-text-field>
        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="Enquiry Email"
          prepend-icon="mdi-email"
          required
        ></v-text-field>
        <li>INSERT CALENDAR HERE</li>
        <v-select
          v-model="select"
          :items="items"
          :rules="[v => !!v || 'Item is required']"
          label="Class Timing"
          prepend-icon="mdi-calendar-clock"
          required
        ></v-select>

        <!-- <v-checkbox
          v-model="checkbox"
          :rules="[v => !!v || 'You must agree to continue!']"
          label="Do you agree?"
          required
        ></v-checkbox>-->

        <v-file-input
          :rules="rules"
          v-model="files"
          color="blue accent-4"
          accept="image/png, image/jpeg, image/bmp"
          counter
          label="Class Image Input"
          multiple
          placeholder="Select your files"
          prepend-icon="mdi-paperclip"
          :show-size="1000"
        >
          <template v-slot:selection="{ index, text }">
            <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>{{ text }}</v-chip>

            <span
              v-else-if="index === 2"
              class="overline grey--text text--darken-3 mx-2"
            >+{{ files.length - 2 }} File(s)</span>
          </template>
        </v-file-input>
        <v-btn :disabled="!valid" color="success" class="mr-4" @click="validate">Validate</v-btn>

        <v-btn color="error" class="mr-4" @click="reset">Reset Form</v-btn>

        <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn>
      </v-form>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data: () => ({
    rules: [
      value =>
        !value ||
        value.size < 2000000 ||
        "Avatar size should be less than 2 MB!"
    ],
    files: [],
    valid: true,
    name: "",
    nameRules: [
      v => !!v || "Name is required",
      v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    email: "",
    emailRules: [
      v => !!v || "E-mail is required",
      v => /.+@.+\..+/.test(v) || "E-mail must be valid"
    ],
    select: null,
    items: ["9am-10am", "10am-12pm", "12pm-2pm", "2pm-4pm", "4pm-6pm"],
    checkbox: false
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style scoped>
#class-image-container {
  /*
    General height guidelines for the image loaded
    Max height is used to prevent the image being used to be too big
    Min height ensures image will not collapse on itself into the height of the back button
  */
  /* max-height: 80vh; */
  min-height: 100%;
}

/* Move image up to upper corners of screen, so back button is overlayed on top */
#class-image {
  display: block;
  position: absolute;
  top: 0vh;
  right: 0vw;

  /* Map image to height of entire parent div container */
  height: 100%;
}

#reviews-card {
  text-align: left;
}
</style>
