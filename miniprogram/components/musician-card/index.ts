// components/musician-card/index.ts
Component({
  /**
   * 组件的属性列表
   */
  options: {
    styleIsolation: 'isolated'
  },
  properties: {
    item: {
      type: Object,
      value: () => null
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onTab() {
      console.log(this.properties.item)
      this.triggerEvent('click', this.properties.item)
    }
  }
})
