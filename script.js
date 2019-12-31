  new Vue({
    el: '#main',
    data: function () {
      return {
        decklist: '',
        currentDeck: -1
      }
    },
    computed: {
      tweets: function() {
        return (this.currentDeck >=0 ) ? this.decklist[this.currentDeck].tweets : []
      }
    },
    methods: {

    },
    created: function() {
      var vm = this
      fetch('tweets.json').then(function(response) {
        return response.json()        
      }).then(function(decklist) {
        vm.decklist =  decklist
      }).catch(function(err){
        alert('Malformed JSON data: ' + err)
      })
    }
  })
