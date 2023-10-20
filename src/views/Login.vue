<template>
  <v-container>
    <h1 class="mx-auto my-6 text-center" style="max-width: 356px;">
      Knowledge Base System
    </h1>
    <h3 class="mx-auto my-6 text-center" style="max-width: 300px;">Sign In</h3>
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="448"
      rounded="lg"
    >
      <v-form v-model="valid" @submit.prevent="login">
        <div class="text-subtitle-1 text-medium-emphasis">Account</div>

        <v-text-field
          density="compact"
          placeholder="Email address or Phone Number"
          prepend-inner-icon="mdi-email-outline"
          variant="outlined"
          :rules="getRules('Email or Phone')"
        />

        <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
          Password
        </div>

        <v-text-field
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          density="compact"
          placeholder="Enter your password"
          prepend-inner-icon="mdi-lock-outline"
          variant="outlined"
          :rules="getRules('Password')"
          @click:append-inner="visible = !visible"
        />

        <v-btn
          block
          class="mb-8"
          color="blue"
          size="large"
          variant="tonal"
        >
          Log In
        </v-btn>

      </v-form>

      <v-card-text class="text-center">
        <router-link
          class="text-blue text-decoration-none"
          to="/register"
        >
          Sign up now <v-icon icon="mdi-chevron-right"></v-icon>
        </router-link>
      </v-card-text>
    </v-card>
  </v-container>
</template>
<script lang="ts">
  export default {
    data: () => ({
      visible: false,
      valid: false
    }),
    methods: {
      getRules(field: string) {
        return [
          (v: string) => !!v || `${field} is required`
        ]
      },
      login() {
        if (!this.valid) return;
      }
    }
  }
</script>