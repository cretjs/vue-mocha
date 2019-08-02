<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2 @click="handleClick">Essential Links</h2>
        <HelloMocha/>
    </div>
</template>

<script>
    import {getData} from '@/api'
    import HelloMocha from '@/components/HelloMocha'
    export default {
        name: 'HelloWorld',
        components:{HelloMocha},
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted(){
            this.getData()
        },
        methods: {
            handleClick(){
              this.msg = 'click'
            },
            handleData(data) {
                console.log(data.code);
                if (data.code == 200) {
                    this.msg = 'success'
                }
            },
            // getData() {
            //     let that = this;
            //     that.msg = 'hello'
            // }
            async getData() {
                let that = this;
                try {
                    let response = await getData()
                    console.log(response);
                    that.handleData(response)
                    return response;
                } catch (e) {
                    console.log("Oops, error", e);
                }
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h1, h2 {
        font-weight: normal;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
