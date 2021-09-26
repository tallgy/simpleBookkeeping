记账的selectItem 里面使用了router路由。
        
        this.$router.replace({path: '/bookkeeping/addBill', query: { name: this.item}});
        query: 是传参

插槽点击事件

    最开始使用事件捕获，
    后面，使用了 props 传递方法，也可以