<template>
  <v-card>
    <v-card-title>Add Category</v-card-title>
    <v-card-text>
      <v-form v-model="valid" @submit.prevent="save">
        <v-text-field
         v-model="name"
         label="Name"
         placeholder="Enter category name"
         :rules="getRules('Name')"
         variant="outlined"
        />

        <v-textarea
          v-model="description"
          label="Description"
          placeholder="Enter description"
          :rules="getRules('Description')"
          variant="outlined"
        />

        <div class="text-right">
          <v-btn
            color="blue"
            variant="tonal"
            class="ma-2"
            type="submit"
          >
            Save
          </v-btn>

          <v-btn type="button" color="red" variant="tonal" class="ma-2" @click="$emit('category-saved')">Cancel</v-btn>
        </div>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { createNamespacedHelpers } from 'vuex';

import categoryStoreModule from '@/store/modules/category';
const {
  mapActions: categoryActions,
} = createNamespacedHelpers('CREATE_CATEGORY');

export default {
  name: 'CategoryForm',
  data: () => ({
    valid: false,
    name: '',
    description: '',
  }),
  methods: {
    ...categoryActions(['createCategory']),
    getRules(field: string) {
      return [
        (v: string) => !!v || `${field} is required`
      ]
    },
    save() {
      console.log("valid: ", this.valid)
      if (!this.valid) return;

      const payload = {
        name: this.name,
        description: this.description
      }

      this.createCategory(payload).then((data) => {
        if (data) this.$emit('category-saved', data);
      });
    },
  },
  beforeCreate() {
      if (!this.$store.hasModule('CREATE_CATEGORY')) {
        this.$store.registerModule('CREATE_CATEGORY', categoryStoreModule);
      }
  },
  beforeUnmount() {
    this.$store.unregisterModule('CREATE_CATEGORY');
  }
}
</script>