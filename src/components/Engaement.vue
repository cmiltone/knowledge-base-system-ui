<template>
  <v-row>
    <v-col cols="10">
      <v-textarea v-model="message" label="Comment" placeholder="Share your views here..."></v-textarea>
    </v-col>
    <v-col cols="2">
      <v-btn color="blue" icon="mdi-send" @click="addComment"/> &nbsp;
      <!-- <v-btn variant="flat" color="red" title="Like" icon="mdi-thumb-up" /> -->
    </v-col>
  </v-row>
  <h4 class="likes" @click="like">{{ engagement.likes.length + ` ${'Like'}${engagement.likes.length > 1 ? 's': ''}`}}</h4>
  <div class="likers">
    <div v-for="like in engagement.likes" :key="like._id">{{`~ ${like.user.fullName}`}}</div>
    <!-- , ${readableDate(like.createdAt ?? '', 'MMM Do, YYYY h:mmA')} -->
  </div>
  <h4>Comments: </h4>
  <v-list lines="two">
    <v-list-item
      v-for="item in engagement.comments"
      :key="item._id"
      :title="item.message"
      :subtitle="`~ ${item.user.fullName}`"
    ></v-list-item>
    <!-- , ${readableDate(item.createdAt ?? '', 'MMM Do, YYYY h:mmA')} -->
  </v-list>
</template>

<script lang="ts">
import { PropType } from "vue";
import { createNamespacedHelpers } from 'vuex';

import { Engagement } from "@/types/article";
import { readableDate } from '@/util/filters';

import engageStoreModule from '@/store/modules/engagement';

const {
  mapActions: engageActions,
} = createNamespacedHelpers('ENGAGE');

export default {
  name: "CommentList",
  props: {
    engagement: {
      type: Object as PropType<Engagement>,
      required: true
    }
  },
  data: () => ({
    message: '',
  }),
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    readableDate,
    ...engageActions(['createEngagement']),
    like() {
      this.createEngagement({
        articleId: this.engagement.article,
        likes: [{
          user: this.user._id,
        }]
      }).then((data) => { if (data) this.$emit('saved', data)})
    },
    addComment() {
      if (this.message)
      this.createEngagement({
        articleId: this.engagement.article,
        comments: [{
          user: this.user._id,
          message: this.message,
        }]
      }).then((data) => { if (data) this.$emit('saved', data)})
    }
  },
  beforeCreate() {
      if (!this.$store.hasModule('ENGAGE')) {
        this.$store.registerModule('ENGAGE', engageStoreModule)
      }
  },
  beforeUnmount() {
    this.$store.unregisterModule('ENGAGE');
  }
}
</script>

<style>
.likes {
  text-decoration: underline;
  color: blue;
  cursor: pointer;
}

.likes:hover + .likers {
  display: block;
}

.likers {
  display: none;
  position: absolute;
  z-index: 1000;
  background: #ccc;
  border-radius: 10px;
  padding: 5px;
}
</style>