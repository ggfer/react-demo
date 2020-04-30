

# Note

store放在index中，reducers、actions也拆开

## reducers

里面放各种根据action.type来做响应，用index来集合多个reduce

## index(store)

在index里面载入reducers
const store = createStore(allReducers, //后面可以加windows....用于redux dev tools)

## Provider

hook this up，<Provider><App /></Provider>这样的话App下面的就有共用的state
调用方式 const  counter = useSelector(state => state.counter)
然后就可以{counter}调用reducer里面放到store里面的各种值

## actions

上面虽然已经可以调用counter的值了，但是并没有函数介入