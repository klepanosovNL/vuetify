import * as firebase from "firebase"

class Ad {
  constructor (title,
               description,
               promo = false,
               ownerId,
               imageSrc = '',
               id = null) {
    this.title = title
    this.description = description
    this.ownerId = ownerId
    this.imageSrc = imageSrc
    this.promo = promo
    this.id = id
  }
}

export default {
  state: {
    ads: [
      // {
      //   title: 'First ad',
      //   description: 'description',
      //   promo: false,
      //   imageSrc: 'https://v1.vuetifyjs.com/static/doc-images/carousel/planet.jpg',
      //   id: '1'
      // },
      // {
      //   title: 'Second ad',
      //   description: 'description',
      //   promo: true,
      //   imageSrc: 'https://v1.vuetifyjs.com/static/doc-images/carousel/bird.jpg',
      //   id: '2'
      // },
      // {
      //   title: 'Third ad',
      //   description: 'description',
      //   promo: true,
      //   imageSrc: 'https://v1.vuetifyjs.com/static/doc-images/carousel/sky.jpg',
      //   id: '3'
      // }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    },
    loadAds (state, payload) {
      state.ads = payload
    }
  },
  actions: {
    async createAd ({commit, getters}, payload) {
      commit('clearError')
      commit('setLoading', true)

      try {
        const newAd = new Ad (
          payload.title,
          payload.description,
          getters.user.id,
          payload.imageSrc,
          payload.promo
        )

        const ad = await firebase.database().ref('ads').push(newAd)
        commit('setLoading', false)
        commit('createAd', {
          ...newAd,
          id: ad.key
        })
      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    },
    async fetchAds ({commit}) {
      commit('clearError')
      commit('setLoading', true)

      const resultAds = []

      try {
        const fbVal = await firebase.database().ref('ads').once('value')
        const ads = fbVal.val()

        Object.keys(ads).forEach(key => {
          const ad = ads[key]
          resultAds.push(
            new Ad(ad.title, ad.description, ad.ownerId, ad.imageSrc, ad.promo, key)
          )
        })

        commit('setLoading', false)

      } catch (error) {
        commit('setError', error.message)
        commit('setLoading', false)
        throw error
      }
    }
  },
  getters: {
    ads (state) {
      return state.ads
    },
    promoAds (state) {
      return state.ads.filter(ad => {
        return ad.promo
      })
    },
    myAds (state) {
      return state.ads
    },
    adById (state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId)
      }
    }
  }
}
