记账的selectItem 里面使用了router路由。

        this.$router.replace({path: '/bookkeeping/addBill', query: { name: this.item}});
        query: 是传参

插槽点击事件

    最开始使用事件捕获，
    后面，使用了 props 传递方法，也可以

v-model

    是输入框的双向绑定，不是v-bind，，，


new Date().toLocaleDateString()

    获取日期 2021/1/1,string

input   日期

    初始化和格式化问题，input，date，格式为 2021-01-12，初始化可以直接value，也可以使用v-model
    问题就是， 1 要改成 01 不然会因为格式问题不行

input   单选框，

    使用同一个name，可以形成一个单选框，然后，value不同，然后使用v-model来进行赋值。
    这里有个问题，在某些情况input边框会看不到，感觉可能是手机上的px不同，然后input自带的边框比较小
      所以导致了边框左上角的看不到，这里的具体边框的设计原理不知道，应该是渲染的情况问题，出现了边框太小
      手动的出现方法是将边框设置为-值，具体原理不懂

echars  使用

    在main.js中进行定义，然后在要使用的地方的mounted hook里面进行初始化操作。
    挂载到vue的根组件里面
    legend: { show: true }, 显示按钮可以选择是否显示
    y坐标设置和x坐标的设置

