<template>
  <q-btn label="Sign In" icon="login" color="primary" @click="onSignInClick" />
  <q-dialog :model-value="signInDialog" v-model="signInDialog">
    <q-card  class="full-width">
      <q-card-section class="row items-center q-pb-none">
        <div class="text-h6">Welcome to MTC</div>
        <q-space />
        <q-btn v-if="signInOption" icon="arrow_back" flat round dense @click="signInOption = ''">
          <q-tooltip>Back</q-tooltip>
        </q-btn>
        <q-btn icon="close" flat round dense v-close-popup>
          <q-tooltip>Close</q-tooltip>
        </q-btn>
      </q-card-section>
      <q-card-section>
        <q-form v-if="signInOption === 'login'" class="q-gutter-md q-px-md text-center">
          <div class="text-h5">Login</div>
          <q-input v-model="loginDetails.username" :model-value="loginDetails.username" clearable outlined counter maxlength="50" label="Username">
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <q-input v-model="loginDetails.password" :model-value="loginDetails.password" clearable outlined maxlength="50" counter label="Password" :type="showPassword.loginPassword ? 'text' : 'password'">
            <template v-slot:prepend>
              <q-icon name="password" />
            </template>
            <template v-slot:append>
              <q-icon :name="showPassword.loginPassword ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="showPassword.loginPassword = !showPassword.loginPassword"/>
            </template>
          </q-input>
          <q-btn label="Login" color="primary" class="q-px-xl" @click="onLogin" />
        </q-form>
        <q-form v-else-if="signInOption === 'signUp'" class="q-gutter-md q-px-md text-center">
          <div class="text-h5">Sign Up</div>
          <q-input v-model="signUpDetails.username" :model-value="signUpDetails.username" clearable outlined counter maxlength="25" label="Username">
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-input>
          <div>
            <q-radio v-model="signUpDetails.gender" :model-value="signUpDetails.gender" val="1" label="Male" class="q-mx-md" />
            <q-radio v-model="signUpDetails.gender" :model-value="signUpDetails.gender" val="0" label="Female" class="q-mx-md" />
          </div>
          <q-select outlined v-model="signUpDetails.age" :model-value="signUpDetails.age" :options="ageOptions" label="Age" />
          <q-input v-model="signUpDetails.password" :model-value="signUpDetails.password" clearable outlined maxlength="50" counter label="Password" :type="showPassword.signUpPassword ? 'text' : 'password'">
            <template v-slot:prepend>
              <q-icon name="password" />
            </template>
            <template v-slot:append>
              <q-icon :name="showPassword.signUpPassword ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="showPassword.signUpPassword = !showPassword.signUpPassword"/>
            </template>
          </q-input>
          <q-input v-model="signUpDetails.confirmPassword" :model-value="signUpDetails.confirmPassword" clearable outlined maxlength="50" counter label="Confirm Password" :type="showPassword.signUpConfirmPassword ? 'text' : 'password'">
            <template v-slot:prepend>
              <q-icon name="password" />
            </template>
            <template v-slot:append>
              <q-icon :name="showPassword.signUpConfirmPassword ? 'visibility_off' : 'visibility'" class="cursor-pointer" @click="showPassword.signUpConfirmPassword = !showPassword.signUpConfirmPassword"/>
            </template>
          </q-input>
          <q-btn label="Sign Up" color="primary" class="q-px-xl" @click="onSignUp" />
        </q-form>
        <q-splitter v-else :model-value="splitter" v-model="splitter" class="q-my-xl">
          <template v-slot:before>
            <div class="text-center q-gutter-sm">
              <div class="text-subtitle1">Already have an account?</div>
              <q-btn label="Login" color="primary" @click="signInOption = 'login'" />
            </div>
          </template>
          <template v-slot:after>
            <div class="text-center q-gutter-sm">
              <div class="text-subtitle1">Don't have an account?</div>
              <q-btn label="Sign Up" color="primary" @click="signInOption = 'signUp'" />
            </div>
          </template>
        </q-splitter>
      </q-card-section>
      <q-card-section class="text-center">
        <div class="text-caption">Sign In to like, review, recommend and many more</div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { defineComponent, ref, onMounted, onBeforeUnmount, onUnmounted } from 'vue'
import { useQuasar } from 'quasar'
import { api } from 'boot/axios'

export default defineComponent({
  name: 'SignIn',
  setup () {
    const $q = useQuasar()

    const notifyInterval = ref(null)
    const signInDialog = ref(false)
    const loginDetails = ref({
      username: '',
      password: ''
    })
    const signUpDetails = ref({
      username: '',
      gender: '1',
      age: '18',
      password: '',
      confirmPassword: ''
    })

    onMounted(() => {
      notifyInterval.value = setInterval(() => {
        if (!signInDialog.value) {
          $q.notify({
            message: 'Sign In to like, review, recommend and many more',
            type: 'info',
            timeout: 10000,
            progress: true,
            actions: [
              {
                label: 'Sign In',
                handler: () => {
                  signInDialog.value = true
                }
              }
            ]
          })
        }
      }, 30000)
    })

    onBeforeUnmount(() => {
      clearInterval(notifyInterval.value)
    })

    onUnmounted(() => {
      clearInterval(notifyInterval.value)
    })

    const onSignUp = () => {
      if (signUpDetails.value.username && signUpDetails.value.password) {
        if (signUpDetails.value.password === signUpDetails.value.confirmPassword) {
          api.post('/signup', {
            username: signUpDetails.value.username,
            password: signUpDetails.value.password,
            gender: Number(signUpDetails.value.gender),
            age: Number(signUpDetails.value.age)
          }).then((response) => {
            if (response.data.error) {
              $q.notify({ message: response.data.error, type: 'negative' })
            } else {
              if (response.data.token) {
                $q.cookies.set('token', response.data.token)
                window.location.reload()
              } else {
                $q.notify({ message: 'Invalid username or password', type: 'negative' })
              }
            }
          }).catch(() => {
            $q.notify({ message: 'Internal server error', type: 'negative' })
          })
        } else {
          $q.notify({ message: "Password and confirm password doesn't match", type: 'negative' })
        }
      } else {
        $q.notify({ message: 'Invalid username or password', type: 'negative' })
      }
    }

    const onLogin = () => {
      if (loginDetails.value.username && loginDetails.value.password) {
        api.post('/login', {
          username: loginDetails.value.username,
          password: loginDetails.value.password
        }).then((response) => {
          if (response.data.error) {
            $q.notify({ message: response.data.error, type: 'negative' })
          } else {
            if (response.data.token) {
              $q.cookies.set('token', response.data.token)
              window.location.reload()
            } else {
              $q.notify({ message: 'Invalid username or password', type: 'negative' })
            }
          }
        })
      } else {
        $q.notify({ message: 'Invalid username or password', type: 'negative' })
      }
    }

    return {
      signInDialog,
      loginDetails,
      signUpDetails,
      splitter: ref(50),
      signInOption: ref(''),
      showPassword: ref({
        loginPassword: false,
        signUpPassword: false,
        signUpConfirmPassword: false
      }),
      onSignInClick () {
        signInDialog.value = !signInDialog.value
      },
      onSignUp,
      onLogin
    }
  },
  computed: {
    ageOptions () {
      return Array.from({ length: 100 }, (_, i) => i + 1)
    }
  }
})
</script>
