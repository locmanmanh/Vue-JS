app.component('review-list', {
  template:
    /*html*/
    `
      <div  v-if="reviews.length" class="review-container">
      <h3>Reviews:</h3>
        <ul>
          <li v-for="(review, index) in reviews" :key="index">
            <span><b>{{ review.name }}<b> </span>
            <span> gave this {{ review.rating }} stars<\span>
            <p>   &ensp;    {{ review.text }}<\p>
          </li>
        </ul>
      </div>
    `,
  props: {
    reviews: {
      type: Array,
      required: true
    }
  }
})