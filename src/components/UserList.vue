<template>
  <v-dialog
    v-model="updatelUserDialog"
    persistent
    max-width="300"
  >
    <v-card v-if="user">
      <v-card-title>Update User</v-card-title>
      <v-card-subtitle>{{ user.fullName }}</v-card-subtitle>
      <v-card-text>
        <v-select
          v-model="status"
          :items="['active', 'inactive', 'blocked']"
          variant="outlined"
          placeholder="Select status"
          label="Status"
        />

        <v-select
          v-model="role"
          :items="['admin', 'user', 'creator']"
          variant="outlined"
          placeholder="Role"
          label="Select role"
        />
      </v-card-text>
      <v-card-actions class="text-right">
        <v-btn color="red" variant="text" @click="saveUser">Save</v-btn>
        <v-btn color="green" variant="text" @click="updatelUserDialog = false">Cancel</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
  <v-container>
    <v-row>
      <v-col cols="4">
        <h1>Users</h1>
      </v-col>
      <v-col cols="8">
        <v-text-field placeholder="Search users" prepend-icon="mdi-magnify" @keyup="searchUser"/>
      </v-col>
    </v-row>

    <v-data-table-server
      v-model:page="page"
      fixed-header
      :headers="headers"
      :items="userPage.docs"
      :items-per-page="limit"
      :items-length="userPage.totalDocs"
      :loading="loading"
      loading-text="Fetching users..."
      no-data-text="No users to display"
      class="elevation-1"
      @update:options="setOptions"
    >
      <template v-slot:[`item.createdAt`]="{ item }">
        {{ readableDate(item.createdAt, 'MMM Do, YYYY h:mmA') }}
      </template>
      <template v-slot:[`item.role`]="{ item }">
        <span class="text-capitalize">{{ item.role }}</span>
      </template>
      <template v-slot:[`item.status`]="{ item }">
        <span class="text-capitalize">{{ item.status }}</span>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <!-- <v-btn size="x-small" color="primary" :to="`/user/${item._id}`">View</v-btn> -->
        <v-btn size="x-small" color="blue" icon="mdi-pencil" title="Deactivate User" @click="update(item)" />
      </template>
    </v-data-table-server>
    <v-row justify="center">
      <v-col cols="8">
        <v-container class="max-width">
          <v-pagination
            v-model="page"
            class="my-4"
            :length="totalPages"
          ></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { createNamespacedHelpers } from 'vuex';
import { VDataTableServer } from 'vuetify/labs/VDataTable'

import { readableDate } from '@/util/filters';
import userStoreModule from '@/store/modules/user';

const {
  mapGetters: userGetters,
  mapActions: userActions,
} = createNamespacedHelpers('USER_LIST');
export default {
  name: 'UserList',
  components: { VDataTableServer },
  data: () => ({
    updatelUserDialog: false,
    user: undefined as undefined | User,
    status: '',
    role: '',
    headers: [
      {
        key: 'fullName',
        title: 'Name',
        sortable: true,
      },
      {
        key: 'email',
        title: 'Email',
      },
      {
        key: 'phoneNumber',
        title: 'Phone',
      },
      {
        key: 'role',
        title: 'Role',
      },
      {
        key: 'createdAt',
        title: 'Created On',
      },
      {
        key: 'status',
        title: 'Status',
      },
      {
        key: 'action',
        title: 'Action',
      },
    ],
    limit: 10,
    hasPrevPage: false,
    hasNextPage: false,
    page: 1,
    totalPages: 0,
    loading: false
  }),
  created() {
    this.fetchUsers()
  },
  computed: {
    ...userGetters(["userPage"]),
  },
  methods: {
    ...userActions(["fetchUserList", "updateUser"]),
    readableDate,
    searchUser(ev: InputEvent) {
      const q = (ev.target as HTMLInputElement).value;

      if (q) this.fetchUsers(`&q=${q}`);
      else this.fetchUsers();
    },
    fetchUsers(p = '') {
      this.loading = true;
      const params = `?limit=${this.limit}&page=${this.page}` + p;

      this.fetchUserList(params).then((data) => {
        if (data) {
          this.page = data.page;
          this.limit = data.limit;
          this.loading = false;
        }
      });
    },
    setOptions(opts: { page: number; itemsPerPage: number; }) {
      this.page = opts.page;
      this.limit = opts.itemsPerPage;
      this.fetchUsers();
    },
    saveUser() {
      this.updateUser({
        userId: this.user?._id,
        status: this.status,
        role: this.role,
      }).then((user) => {
        if (user) this.updatelUserDialog = false;
      })
    },
    update(user: User) {
      this.updatelUserDialog = true;
      this.status = user.status;
      this.role = user.role;
      this.user = user;
    }
  },
  beforeCreate() {
      if (!this.$store.hasModule('USER_LIST')) {
        this.$store.registerModule('USER_LIST', userStoreModule)
      }
  },
  beforeUnmount() {
    this.$store.unregisterModule('USER_LIST')
  }
}
</script>