export const state = () => ({
  list: [],
  current: 0
})

export const mutations = {
  pick (state, id) {
    state.current = id
  }
}

export const getters = {
  current: state => {
    return state.current
  }
}