<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offsset-sm3>
        <h1 class="text--secondary mb-3">Create new ad</h1>
        <v-form class="mb-3" v-model="valid" ref="form" lazy-validation>
          <v-text-field
            name="title"
            label="Ad title"
            type="text"
            v-model="title"
            :rules="[v => !!v || 'Title is required']"
            required
          ></v-text-field>
          <v-text-field
            name="description"
            label="Ad description"
            type="text"
            v-model="description"
            :rules="[v => !!v || 'Description is required']"
            multi-line
          ></v-text-field>
        </v-form>
        <v-layout class="mb-3">
          <v-flex>
            <v-btn class="warning">
              Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
            <img src="" height="100">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <img src="" height="100">
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <v-switch
              label="Ad to promp?"
              v-model="promo"
              color="primary"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <v-spacer></v-spacer>
            <v-btn
              class="success"
              @click="createAd"
              :disabled="!valid"
            >Create
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createAd() {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo
          }
        }
      }
    }
  }
</script>
