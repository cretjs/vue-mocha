import Vue from 'vue'
import '@/mockjs'
import HelloWorld from '@/components/HelloWorld'
// describe 测试套件
// it 测试case
describe('HelloWorld.vue', () => {
    before(()=>{
        // let mockjs = require('@/mockjs')
    })
    it('should render correct contents', () => {
        const Constructor = Vue.extend(HelloWorld)
        const vm = new Constructor().$mount()
        expect(vm.$el.querySelector('.hello h1').textContent)
            .to.equal('Welcome to Your Vue.js App');
    
    })
    
    // 挂载元素并返回已渲染的文本的工具函数
    function getRenderedText () {
        const Constructor = Vue.extend(HelloWorld)
        const vm = new Constructor().$mount()
        return vm
    }
    it('should data correct1', (done) => {
        let vm = getRenderedText()
        vm.handleData({code:200})
        Vue.nextTick(() => {
            expect(vm.$el.querySelector('.hello h1').textContent)
                .to.equal('success');
            done()
        })
    })
    //测试方法
    it('should data correct2', (done) => {
        let vm = getRenderedText()
        vm.handleData({code:400})
        Vue.nextTick(() => {
            expect(vm.$el.querySelector('.hello h1').textContent)
                .to.equal('Welcome to Your Vue.js App');
            done()
        })
    })
    it('should data correct3', (done) => {
        let vm = getRenderedText()
        Vue.nextTick(() => {
            expect(vm.$el.querySelector('.hello-mocha h1').textContent)
                .to.equal('Welcome to Your Mocha App');
            done()
        })
    })
    //测试异步
    it('should data correct4', async () => {
        let vm = getRenderedText()
        let pro = await vm.getData();
        expect(vm.$el.querySelector('.hello h1').textContent)
            .to.equal('success');
    })
     //测试点击
     it('should data correct5', (done) => {
        let vm = getRenderedText()
        vm.$el.querySelector('.hello h2').click()
        Vue.nextTick(() => {
            expect(vm.$el.querySelector('.hello h1').textContent)
                .to.equal('click');
            done()
        })
    })
  
})
