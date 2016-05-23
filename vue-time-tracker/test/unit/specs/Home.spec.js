import Vue from 'vue'
import Home from 'src/components/Home'

describe('Hello.vue', () => {



  it('should render correct contents', () => {
    const vm = new Vue({
      template: '<div><home></home></div>',
      components: { Home }
    }).$mount()

    
    expect(vm.$el.querySelector('.jumbotron h1').textContent).to.contain('Vue Time Tracker')
    expect(vm.$el.querySelector('.jumbotron p strong').textContent).to.contain('Get started by')
    expect(vm.$el.querySelector('.jumbotron p strong a').textContent).to.contain('creating a time entry')
  })
})
