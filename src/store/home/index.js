const home = {
    state: {
        count: 0,
		selFruitList: []
    },
    mutations: {
        increment(state, data) {
			state.count += data;
		},
		reduce(state, data) {
			state.count -= data;
		},
		selFruitList(state, data) {
			state.selFruitList = data
		}
    },
    actions: {
        ac_increment({commit}, data) {
			commit('increment', data);
		},
		ac_reduce({commit}, data) {
			commit('reduce', data)
		},
		ac_selFruitList({commit}, data) {
			commit('selFruitList', data)
		}
    }
};

export default home;
