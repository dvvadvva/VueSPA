export const listFruitMixins = {
    data() {
      return {
        Fruits: ["apple", "mango", "orange", "melone", "banana"],
        filterCondition: ""
      };
    },
    computed: {
      filterFruits() {
        return this.Fruits.filter(el => {
          return el.match(this.filterCondition);
        });
      }
    },
    created(){
      console.log('create');
    }
  };