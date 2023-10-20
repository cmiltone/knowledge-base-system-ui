<template>
  <v-container>
    <h1 class="mx-auto my-6 text-center" style="max-width: 356px;">
      Knowledge Base System
    </h1>
    <h3 class="mx-auto my-6 text-center" style="max-width: 300px;">Sign Up</h3>
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-form v-model="valid" @submit.prevent="retister">
        <v-text-field
          v-model="fullName"
          label="Full Name"
          :rules="getRules('Full Name')"
          placeholder="Enter your name"
          prepend-inner-icon="mdi-account-outline"
          variant="outlined"
        />

        <v-text-field
          v-model="email"
          type="email"
          label="Email"
          :rules="getRules('Email')"
          density="compact"
          placeholder="Enter Email address"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
        />

        <v-text-field
          v-model="phone"
          label="Phone Number"
          :rules="getRules('Phone Number')"
          placeholder="Enter Phone Number"
          prepend-inner-icon="mdi-phone-outline"
          variant="outlined"
        />

        <v-text-field
          v-model="password"
          label="Password"
          :rules="getRules('Password')"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          @click:append-inner="visible = !visible"
        />

        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
          type="submit"
        >
          Sign Up
        </v-btn>

      </v-form>

      <v-card-text class="text-center">
        <router-link
          class="text-blue text-decoration-none"
          to="/login"
        >
          Sign in <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script lang="ts">
export default {
  name: 'Register',
  data: () => ({
    visible: false,
    valid: false,
    fullName: '',
    email: '',
    phone: '',
    password: '',
    passwordConfirmation: '',
  }),
  methods: {
    getRules(field: string) {
      return [
        (v: string) => !!v || `${field} is required`
      ]
    },
    retister() {
      if (!this.valid) return;
    }
  }
}
</script>
