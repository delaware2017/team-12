Vue.use(VueFormular, {
  showClientErrorsInStatusBar: true,
  sendOnlyDirtyFields:true
    //layout:'form-horizontal'
});

new Vue({
  el: "#app",
  methods:{
  	resetForm: function() {
    	this.$refs.form.childrenOf('form').forEach(function(field) {
      	field.reset();
      })
    }
  },
  data: {
    validation: {
      rules: {
        first_name: {
          required: true,
          min: 4
        },
        last_name: {
          required: true,
          min: 4
        },
        age: {
          between: [0, 120]
        },
        about: {
          max: 200
        },
        smaller_than_age: {
          smallerThan: 'age'
        },
        graduation_date: {
          greaterThan: 'birth_date'
        },
        married_years: {
          requiredIf: 'married',
          min: 0
        }
      }
    },
    pets: [{
        id: 1,
        text: 'Dog'
      }, {
        id: 2,
        text: 'Cat'
      }, {
        id: 3,
        text: 'Parrot'
      }, {
        id: 4,
        text: 'Hamster'
      }

    ],
    cars: [{
        id: 1,
        text: 'Mazda'
      }, {
        id: 2,
        text: 'Honda'
      }, {
        id: 3,
        text: 'Nissan'
      }, {
        id: 4,
        text: 'Alpha Romeo'
      }

    ],
    fruits: [{
        id: '1',
        text: 'Grapes'
      }, {
        id: '2',
        text: 'Apple'
      }, {
        id: '3',
        text: 'Orange'
      }, {
        id: '4',
        text: 'Lemon'
      }

    ],
    motorbikes: [{
        id: 1,
        text: 'Honda'
      }, {
        id: 2,
        text: 'Suzuki'
      }, {
        id: 3,
        text: 'Kawassaki'
      }, {
        id: 4,
        text: 'Yamaha'
      }

    ]

  }
});
