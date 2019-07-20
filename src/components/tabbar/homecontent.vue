<template>
  <div class="mainpage">
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" @click="selFruit(item,index)" v-for="(item, index) in fruitList" :key="index">
        <a href="javascript:;">
          <img class="mui-media-object mui-pull-left" src="">
          <div class="mui-media-body">
            {{item.name}} {{item.price}}/kg
						<span v-if="item.sel" class="selFruit mui-icon mui-icon-locked"></span>
            <p class="mui-ellipsis">{{item.intros}}</p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { getData } from './../../axios'
import { Switch } from "mint-ui";
export default {
  data() {
    return {
      fruitList: [],
      content: []
    };
  },
  methods: {
		selFruit(_data,_index) {
			console.log(_data)
			this.fruitList[_index].sel = !this.fruitList[_index].sel;
			let _selList = [];
				this.fruitList.map((item, index) => {
					if(item.sel) {
						_selList.push(item)
					}
				})
			this.$store.dispatch('ac_selFruitList', _selList);
			console.log(this.$store.state.home.selFruitList)
		}
    // jia() {
    // 		// axios
    // 		this.axios.post("http://api.komavideo.com/news/list",{pageSize:1,pageIndex:0,copyright:'osc'}).then((response) => {
    // 			console.log(response.data);
    // 			this.content = response.data
    // 		})

    // 		// 执行多个并发请求
    // 		function getUserAccount() {
    // 			  return axios.get('/user/12345');
    // 			}

    // 			function getUserPermissions() {
    // 			  return axios.get('/user/12345/permissions');
    // 			}
    // 			axios.all([getUserAccount(), getUserPermissions()])
    // 			  .then(axios.spread(function (acct, perms) {
    // 			    // 两个请求现在都执行完成
    // 			  }));

    // 		// 可以通过向 axios 传递相关配置来创建请求
    // 		axios({
    // 		  method: 'post',
    // 		  url: '/user/12345',
    // 		  data: {
    // 		    firstName: 'Fred',
    // 		    lastName: 'Flintstone'
    // 		  }
    // 		});
    // 		//  GET 请求远程图片
    // 		axios({
    // 		  method:'get',
    // 		  url:'http://bit.ly/2mTM3nY',
    // 		  responseType:'stream'
    // 		})
    // 		  .then(function(response) {
    // 		  response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
    // 		});
    // },
    // jian() {}
  },
  mounted() {
		let self = this;
    let _selList =  self.$store.state.home.selFruitList;
    getData("getFruits","get",)
      .then(response => {
        self.fruitList = response.data;
			  self.fruitList.map(item => {
			  		this.$set(item,'sel',false)
			  })
			  if(_selList && _selList.length) {
			  	self.fruitList.forEach(item=>{
			  		_selList.forEach(_item =>{
			  			if(item._id == _item._id) {
			  					this.$set(item,'sel',true)
			  			}
			  		})
			  	})
			  }
      })
    // fetch默认get请求
    // fetch('http://api.komavideo.com/news/list')
    // .then(function(response) {
    // 	  console.log(response) //请求到的数据并不是我们想象到的数据格式
    //   return response.json();
    // })
    // .then(function(myJson) {
    // 	console.log(myJson);
    // });
    // 使用fetch获取数据
    let content = { pageSize: 5, pageIndex: 2, copyright: "osdn" };
    // The actual fetch request
    // fetch('http://api.komavideo.com/news/list', {
    //   method: 'post',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(content)
    // }).then(response => {
    // 	console.log(response);
    // })

    // 使用fetch获取不存在的接口，报错
    // fetch('https://api.github.com/users/chrissycoyier/repos')
    // 	.then(response => response.json())
    // 	.then(data => console.log('data is', data))
    // 	  .catch(error => console.log('error is', error)); // 尽管没有数据返回过来 不过第二个then还是正常执行的 所以报错

    // fetch('https://api.github.com/users/chrissycoyier/repos')
    // 	.then(response => console.log(response))           // 在第一个then中打印请求未处理的数据 原因 fetch只关心从服务器发送请求和接收响应，如果响应失败我们需要抛出异常。
    // 	.then(data => console.log('data is', data))
    // 	  .catch(error => console.log('error is', error));

    // 对第一个then进行改写一下 判断ok那个属性是否ok
    // fetch('https://api.github.com/users/chrissycoyier/repos')
    // 			.then(response => {
    // 			  if (response.ok) {
    // 			    return response.json()
    // 			  } else {
    // 			    return Promise.reject('something went wrong!')
    // 			  }
    // 			})
    // 			.then(data => console.log('data is', data))
    // 		  .catch(error => console.log('error is', error));

    // 除了对第一个then中对状态的判断 也需要对数据格式进行判断然后进行对应的处理
    // fetch('https://api.github.com/users/chrissycoyier/repos')
    // 			.then(response => {
    // 			  if (response.ok) {
    // 			    let contentType = response.headers.get('content-type')

    // 				if (contentType.includes('application/json')) {
    // 				  return response.json()
    // 				  // ...
    // 				}

    // 				else if (contentType.includes('text/html')) {
    // 				  return response.text()
    // 				  // ...
    // 				}

    // 				else {
    // 				  // 其他的格式
    // 				}
    // 			  } else {
    // 			    return Promise.reject('something went wrong!')
    // 			  }
    // 			})
    // 			.then(data => console.log('data is', data))
    // 		  .catch(error => console.log('error is', error));
    // 简单的封装fetch
    // fetch('some-url')
    //   .then(handleResponse)
    //   .then(data => console.log(data))
    //   .then(error => console.log(error))

    // function handleResponse (response) {
    //   let contentType = response.headers.get('content-type')
    //   if (contentType.includes('application/json')) {
    //     return handleJSONResponse(response)
    //   } else if (contentType.includes('text/html')) {
    //     return handleTextResponse(response)
    //   } else {
    //     // Other response types as necessary. I haven't found a need for them yet though.
    //     throw new Error(`Sorry, content-type ${contentType} not supported`)
    //   }
    // }

    // function handleJSONResponse (response) {
    //   return response.json()
    //     .then(json => {
    //       if (response.ok) {
    //         return json
    //       } else {
    //         return Promise.reject(Object.assign({}, json, {
    //           status: response.status,
    //           statusText: response.statusText
    //         }))
    //       }
    //     })
    // }
    // function handleTextResponse (response) {
    //   return response.text()
    //     .then(text => {
    //       if (response.ok) {
    //         return json
    //       } else {
    //         return Promise.reject({
    //           status: response.status,
    //           statusText: response.statusText,
    //           err: text
    //         })
    //       }
    //     })
    // }
  },
  components: {}
};
</script>

<style <style lang="less" scoped>
.fruitBox {
  background: #fff;
  border-radius: 5px;
  margin: 5px;
  padding: 5px 15px;
}
.mainpage {
  margin-bottom: 60px;
	.selFruit{
		position: absolute;
		right: 16px;
		color: aqua
	}
}
</style>
