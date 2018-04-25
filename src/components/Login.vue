<template>
    <v-app>
      <div class="a">
        <v-alert outline color="warning" icon="priority_high" dismissible v-model="alert" transition="scale-transition">
          登录失败！
        </v-alert>
      </div>
      <v-content>
        <v-container fluid fill-height>
          <v-layout align-center justify-center>
            <v-flex xs12 sm8 md4>
              <v-card class="elevation-12">
                <v-toolbar dark color="primary">
                  <v-toolbar-title>Login form</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-toolbar>
                <v-card-text>
                  <v-form v-model="valid" ref="form" >
                    <v-text-field v-model="username" :rules="nameRules" prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                    <v-text-field v-model="password" :rules="passwordRules" prepend-icon="lock" name="password" label="Password" id="password" type="password"></v-text-field>
                  </v-form>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="primary" @click="login" :disabled="!valid">Login</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
</template>

<script>
import { login } from '@/api/login'

export default {
  name: 'Login',
  data: () => ({
    alert: false,
    drawer: null,
    valid: true,
    username: '',
    password: '',
    nameRules: [
      v => !!v || 'Username is required'
    ],
    passwordRules: [
      v => !!v || 'Password is required'
    ]

  }),
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        login(this.username, this.password)
          .then(res => {
            if (res.data.code === '20000') {
              this.$router.push({ name: 'Main' })
            } else {
              this.alert = true
            }
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
}
</script>

<style scoped>
 .a{
   position: fixed;
   margin:0 auto;
   left:0;
   right:0;
   width:30%;
 }
</style>
