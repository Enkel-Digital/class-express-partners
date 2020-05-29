<template>
  <v-content class="settings">
    <!-- Add a loader banner showing the update process and notify user if failed. -->

    <v-list>
      <v-subheader>
        Account Details
      </v-subheader>

      <v-list-group>
        <template v-slot:activator>
          <v-icon class="pr-8">mdi-account-circle</v-icon>
          <v-list-item-title class="text-left">
            Profile Photo
          </v-list-item-title>
        </template>

        <v-list-item>
          <v-list-item-title class="text-center"> </v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group>
        <template v-slot:activator>
          <v-icon class="pr-8">mdi-account</v-icon>

          <v-list-item-title class="text-left">
            Username
          </v-list-item-title>
        </template>

        <v-list-item>
          <v-list-item-title class="text-center"> </v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group>
        <template v-slot:activator>
          <v-icon class="pr-8">mdi-email</v-icon>

          <v-list-item-title class="text-left">
            Email Address
          </v-list-item-title>
        </template>

        <v-list-item>
          <v-list-item-title class="text-center"> </v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group>
        <template v-slot:activator>
          <v-icon class="pr-8">mdi-key-variant</v-icon>

          <v-list-item-title class="text-left">
            Password
          </v-list-item-title>
        </template>

        <v-list-item>
          <v-list-item-title class="text-center"> </v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group>
        <template v-slot:activator>
          <v-icon class="pr-8">mdi-cellphone</v-icon>
          <v-list-item-title class="text-left">
            Contact Number
          </v-list-item-title>
        </template>

        <v-list-item>
          <v-list-item-title class="text-center"> </v-list-item-title>
        </v-list-item>
      </v-list-group>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-subheader colors="orange">
        Notifications
      </v-subheader>

      <div
        class="ma-1 pa-0 ms-4"
        v-ripple
        @click="
          settings.notifications.mobileNotification = !settings.notifications
            .mobileNotification
        "
      >
        <v-checkbox
          v-model="settings.notifications.mobileNotification"
          readonly
          color="indigo darken-3"
          label="Mobile notifications"
          class="black-text"
        ></v-checkbox>
      </div>

      <div
        class="ma-1 pa-0 ms-4"
        v-ripple
        @click="
          settings.notifications.emailNotification = !settings.notifications
            .emailNotification
        "
      >
        <v-checkbox
          v-model="settings.notifications.emailNotification"
          readonly
          color="indigo darken-3"
          label="Email notifications"
          class="black-text"
        ></v-checkbox>
      </div>
    </v-list>

    <v-divider></v-divider>

    <v-list>
      <v-subheader>
        Support
      </v-subheader>

      <v-list-item ripple>
        Visit our F.A.Q page
        <v-spacer />
        <v-icon>mdi-chevron-right</v-icon>
      </v-list-item>

      <v-list-item ripple>
        Request for Support
        <v-spacer />
        <v-icon>mdi-chevron-right</v-icon>
      </v-list-item>

      <!-- Opens as a dropdown menu with our contact number and email -->
      <v-list-item ripple>
        Contact us
        <v-spacer />
        <v-icon>mdi-chevron-right</v-icon>
      </v-list-item>

      <!-- Direct to website with this content -->
      <v-list-item ripple>
        <span
          style="text-align: left; color: rgba(0, 0, 0, 0.6);"
          v-html="`Terms & Conditions`"
        ></span>
        <v-spacer />
        <v-icon>mdi-chevron-right</v-icon>
      </v-list-item>

      <!-- Direct to website with this content -->
      <v-list-item ripple>
        <span style="color: rgba(0, 0, 0, 0.6);">Privacy Policy</span>
        <v-spacer />
        <v-icon>mdi-chevron-right</v-icon>
      </v-list-item>
    </v-list>

    <v-list>
      <v-list-item @click="logout" ripple style="background-color: #ededed;">
        Logout
      </v-list-item>
    </v-list>
  </v-content>
</template>

<script>
/**
 * @todo https://vuetifyjs.com/en/components/expansion-panels/
 * @todo Use this https://vuetifyjs.com/en/components/lists/#expansion-lists for some of the nested settings
 *      Or perhaps use a diff view with nested routes.
 */

import logout from "@/controllers/logout";
import { mapState } from "vuex";

export default {
  name: "settings",
  data() {
    // Use JSONify since the values in state are all JSONifyable without any complex structures.
    const settings = JSON.parse(
      JSON.stringify(this.$store.state.settings.settings)
    );

    return {
      // settingsChanged: false,
      settings,
    };
  },
  watch: {
    settings: {
      deep: true,
      handler() {
        console.log("settings changed");
        this.$store.dispatch("settings/updateSettings", this.settings);
      },
    },
  },
  methods: {
    logout,
  },
};
</script>

<style scoped>
.black-text /deep/ label {
  color: black;
}
</style>
