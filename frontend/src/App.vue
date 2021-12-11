<template>
  <router-view @contextmenu="onContextMenu" />
</template>
<script>
import { defineComponent, onMounted } from 'vue'
import { useQuasar } from 'quasar'

export default defineComponent({
  name: 'App',
  setup () {
    const $q = useQuasar()

    onMounted(() => {
      setTimeout(() => {
        $q.notify({
          message: 'We use cookies to personalize your experience.',
          caption: 'By continuing to visit this website you agree to our use of cookies.',
          position: 'bottom-right',
          timeout: 0,
          type: 'warning',
          actions: [
            { label: 'Got It' },
            {
              label: 'Cookie Policy',
              handler: () => {
                $q.notify({
                  message: "Oops... We haven't designed a cookie policy page yet",
                  type: 'negative',
                  position: 'bottom-right'
                })
              }
            }
          ]
        })
        setTimeout(() => {
          const hour = new Date().getHours()
          if (hour > 5 && hour < 12) {
            $q.notify({ message: 'Good Morning!', color: 'light-blue', icon: 'light_mode', position: 'bottom-left' })
          } else if (hour > 11 && hour < 18) {
            $q.notify({ message: 'Good Afternoon!', color: 'amber', icon: 'light_mode', position: 'bottom-left' })
          } else if (hour > 17 && hour < 24) {
            $q.notify({ message: 'Good Evening!', color: 'deep-orange', icon: 'dark_mode', position: 'bottom-left' })
          }
          setTimeout(() => {
            $q.notify({ message: 'Have a nice day.', color: 'positive', icon: 'waving_hand', position: 'bottom-left' })
          }, 5000)
        }, 5000)
      }, 5000)
    })

    return {
      onContextMenu (e) {
        e.preventDefault()
        $q.notify({
          message: 'Context menu and user select are disabled',
          caption: 'Sorry for inconvenience!',
          type: 'info'
        })
      }
    }
  }
})
</script>
