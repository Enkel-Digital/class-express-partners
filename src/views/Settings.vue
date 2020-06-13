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
          <v-list-item-title class="text-center">
            <v-avatar size="200">
              <img alt="Avatar" :src="user.imageSrc" />
            </v-avatar>
            <v-card-actions>
              <v-row justify="space-around" class="mt-2">
                <v-btn color="grey lighten-2" class="mb-4">
                  <v-icon left>mdi-camera-plus</v-icon>Change image
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group v-model="closeUsername" :close-on-content-click="false">
        <template v-slot:activator>
          <v-icon class="pr-8">mdi-account</v-icon>

          <v-list-item-title class="text-left">
            Username
          </v-list-item-title>
        </template>

        <v-list-item>
          <v-list-item-title class="text-center">
            <v-card class="mx-auto mb-4" max-width="600" outlined>
              <v-col cols="12" sm="8">
                <v-text-field
                  type="text"
                  v-model="user.name"
                  label="Username"
                  clearable
                ></v-text-field>
              </v-col>
              <v-card-actions>
                <v-btn color="primary" text>Save Changes</v-btn>
                <v-btn text @click="closeUsername = false">Cancel</v-btn>
              </v-card-actions>
            </v-card>
          </v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group v-model="closeEmailAddress" :close-on-content-click="false">
        <template v-slot:activator>
          <v-icon class="pr-8">mdi-email</v-icon>

          <v-list-item-title class="text-left">
            Email Address
          </v-list-item-title>
        </template>

        <v-list-item>
          <v-list-item-title class="text-center">
            <v-card class="mx-auto mb-4" max-width="600" outlined>
              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="user.email"
                  label="Current Email"
                  readonly
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="8">
                <v-text-field
                  type="email"
                  label="Enter New Email"
                  clearable
                ></v-text-field>
              </v-col>
              <v-card-actions>
                <v-btn color="primary" text>Verify Email</v-btn>
                <v-btn text @click="closeEmailAddress = false">Cancel</v-btn>
              </v-card-actions>
            </v-card>
          </v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group v-model="closePassword" :close-on-content-click="false">
        <template v-slot:activator>
          <v-icon class="pr-8">mdi-key-variant</v-icon>

          <v-list-item-title class="text-left">
            Password
          </v-list-item-title>
        </template>

        <v-list-item>
          <v-list-item-title class="text-center">
            <v-card class="mx-auto mb-4" max-width="600" outlined>
              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="currentPassword"
                  :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required]"
                  :type="show1 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Current Password"
                  value=""
                  prepend-icon="mdi-lock"
                  @click:append="show1 = !show1"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="newPassword"
                  :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]"
                  :type="show2 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Enter New Password"
                  value=""
                  prepend-icon="mdi-lock"
                  hint="At least 8 characters"
                  counter
                  @click:append="show2 = !show2"
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="reNewPassword"
                  :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min, rules.passwordMatch]"
                  :type="show3 ? 'text' : 'password'"
                  name="input-10-1"
                  label="Re-enter New Password"
                  value=""
                  prepend-icon="mdi-lock"
                  hint="At least 8 characters"
                  counter
                  @click:append="show3 = !show3"
                ></v-text-field>
              </v-col>
              <v-card-actions>
                <v-btn color="primary" text>Change Password</v-btn>
                <v-btn text @click="closePassword = false">Cancel</v-btn>
              </v-card-actions>
            </v-card>
          </v-list-item-title>
        </v-list-item>
      </v-list-group>

      <v-list-group
        v-model="closeContactNumber"
        :close-on-content-click="false"
      >
        <template v-slot:activator>
          <v-icon class="pr-8">mdi-cellphone</v-icon>
          <v-list-item-title class="text-left">
            Contact Number
          </v-list-item-title>
        </template>

        <v-list-item>
          <v-list-item-title class="text-center">
            <v-card class="mx-auto mb-4" max-width="600" outlined>
              <v-col cols="12" sm="8">
                <v-text-field
                  v-model="number"
                  label="Number"
                  readonly
                ></v-text-field>
              </v-col>

              <v-col cols="12" sm="8">
                <v-text-field
                  type="tel"
                  :rules="numberRules"
                  label="Enter New Number"
                  clearable
                ></v-text-field>
              </v-col>
              <v-card-actions>
                <v-btn color="primary" text>Verify Number</v-btn>
                <v-btn text @click="closeContactNumber = false">Cancel</v-btn>
              </v-card-actions>
            </v-card></v-list-item-title
          >
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
      closeUsername: false,
      closeEmailAddress: false,
      closePassword: false,
      closeContactNumber: false,
      number: "12345678",
      numberRules: [(v) => (v && v.length == 8) || "Number is invalid"],
      show1: false,
      show2: false,
      show3: false,
      password: "Password",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 8 || "Min 8 characters",
        passwordMatch: () =>
          this.newPassword === this.reNewPassword || "Password must match",
      },
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
  computed: mapState(["user"]),
};
</script>

<style scoped>
.black-text /deep/ label {
  color: black;
}
</style>
