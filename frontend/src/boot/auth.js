import { boot } from 'quasar/wrappers'
import { Cookies, LocalStorage } from 'quasar'
import { api } from 'boot/axios'

export default boot(({ app }) => {
  if (Cookies.has('token')) {
    const token = Cookies.get('token')
    api.post('/validate/token', {
      token: token
    }).then((response) => {
      if (response.data.validate) {
        api.defaults.headers.common = {
          Authorization: token
        }
        LocalStorage.set('user', response.data)
      } else {
        Cookies.remove('token')
        LocalStorage.remove('user')
      }
    }).catch(() => {
      Cookies.remove('token')
      LocalStorage.remove('user')
    })
  } else {
    LocalStorage.remove('user')
  }
})
