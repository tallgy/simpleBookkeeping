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