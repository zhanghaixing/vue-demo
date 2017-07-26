var goodsList = [{
			name:"ipad",
			infomation:"平板电脑",
			price:3200,
			count:0,
			isCheck:false
		},{
			name:"iphone 7",
			infomation:"苹果手机",
			price:3200,
			count:0,
			isCheck:false
		},{
			name:"mac pro",
			infomation:"苹果电脑",
			price:3200,
			count:0,
			isCheck:false
		}
		]
		var app = new Vue({
			el:"#app",
			data:{
				goodsList:goodsList,
				isCheckAll:false,
				deledData:[],
				addData:[]
			},
			//计算属性不必在事件中调用时时侦听数据的变化
			computed:{
				totalMoney:function(){
					var	totalMoney = 0 ;
					this.goodsList.forEach(function(value,index){
						if(value.isCheck){
							totalMoney += value.count * value.price
						}
					})
					return totalMoney
				}
			},
			methods:{
				computed:function(item,type){
					if(type==-1){
						item.count--
					}else{
						item.count++
					}
					if(item.copunt<0){
						item.count = 0 
					}
				},
				filter:function(e,item){
					if(/\D/.test(e.target.value) || e.taget.value<1){
						item.count = 1
						console.log(item.count)
					}
				},
				isCheck:function(item){
					item.isCheck = ! item.isCheck;
					if(item.isCheck&&this.isCheckAll){
						isCheckAll = false
					}else{
						var isCheckAllFalg = true;
						this.goodsList.forEach(function(value,index){
							if(!value.isCheck){
								isCheckAllFalg = false
							}
						})
						if(isCheckAllFalg){
							isCheckAll = true
						}
					}
				},
				checkall:function(){
					this.isCheckAll = ! this.isCheckAll;
					if(this.isCheckAll){
						this.goodsList.forEach(function(value,index){
							value.isCheck = true
						})
					}else{
						this.goodsList.forEach(function(value,index){
							value.isCheck = false
						})
					}
				},
				removeItem:function(index){
					this.deledData=this.deledData.concat(this.goodsList.splice(index,1))
				},
				// 重置数据
				recovery:function(){
					this.goodsList=this.goodsList.concat(this.deledData)
					this.deledData = [];
				},
				addData:function(){
					this.addData.push(object)
					this.goodsList = this.goodsList.concat(this.addData)
				}
			}
			
		})