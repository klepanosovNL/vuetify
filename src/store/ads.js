export default {
  state: {
    ads: [
      {
        title: 'First ad',
        description: 'description',
        promo: false,
        imageSrc: 'https://v1.vuetifyjs.com/static/doc-images/carousel/planet.jpg',
        id: '1'
      },
      {
        title: 'Second ad',
        description: 'description',
        promo: true,
        imageSrc: 'https://v1.vuetifyjs.com/static/doc-images/carousel/bird.jpg',
        id: '2'
      },
      {
        title: 'Third ad',
        description: 'description',
        promo: true,
        imageSrc: 'https://v1.vuetifyjs.com/static/doc-images/carousel/sky.jpg',
        id: '3'
      }
    ]
  },
  mutations: {
    createAd (state, payload) {
      state.ads.push(payload)
    }
  },
  actions: {
    createAd ({commit}, payload) {
      payload.id = 'someID'
      commit('createAd', payload)
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
