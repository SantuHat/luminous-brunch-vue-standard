<template>
    <section class="section" id="section--5">
      <div class="bg h-100">
        <div class="container">
          <div
            class="row carousel slide py-11"
            id="carouselExampleControls"
            data-bs-ride="carousel"
          >
            <div
              class="col-md-2 d-flex align-items-center justify-content-center col-sm-12"
            >
              <div class="text m-b">
                <h3>顧客評論</h3>
                <div>
                  <ul class="d-flex justify-content-between">
                    <li class="arrow-left" id="previous">
                      <a
                        href="#"
                        class=""
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="prev"
                        role="button"
												@click.prevent="previousPage"
                      >
                        <span class="visually-hidden">Previous</span>
                        <img src="/Vector.png" alt="" />
                      </a>
                    </li>
                    <li class="arrow-right" id="next">
                      <a
                        href="#"
                        class=""
                        type="button"
                        data-bs-target="#carouselExampleControls"
                        data-bs-slide="next"
                        role="button"
												@click.prevent="nextPage"
                      >
                        <span class="visually-hidden">Next</span>
                        <img src="/Vector-right.png" alt="" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="carousel-item d-flex" id="course-section" ref="courseSection" style="max-width: 1000px;">
						</div>
          </div>
          <div class="d-flex justify-content-center booking pb-10">
          <RouterLink to="/menuview/menulist?category=salad" type="button" class="btn btn-primary">
            立即訂餐
          </RouterLink>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  data () {
    return {
      Guest: [
        {
          img: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE5fHxodW1hbnxlbnwwfHwwfHx8MA%3D%3D',
          title: '陳嘉明',
          content:
            '他們的線上訂餐系統非常方便，讓我能在繁忙的日程中輕鬆安排用餐時光。用餐環境也非常優雅。讓我感受到了真正的歐式風情。'
        },
        {
          img: 'https://media.istockphoto.com/id/1492705965/photo/young-woman-with-pink-hair-in-bright-magenta-sweatshirt-bucket-hat-and-flower-stickers-on-her.webp?b=1&s=170667a&w=0&k=20&c=wrTzfSfJlmlK8wOB0Vs3N46MFDnWlfVC2Dk2SCqDUbA=',
          title: '張曉春',
          content:
            '這個訂餐系統的使用介面非常簡單，讓我能夠輕鬆預定所需的服務。一切都清晰明瞭，不需要花太多時間就能完成預約流程。'
        },
        {
          img: 'https://media.istockphoto.com/id/1660002064/photo/man-in-a-cafe-with-i-voted-sticker.webp?b=1&s=170667a&w=0&k=20&c=T6JgqQg3Sm896hTJy3U8h825vE2Yv8WuALeBtPBWgF4=',
          title: '林文忠',
          content:
            '這個訂餐系統提供了豐富的預約選項，使我能夠按照我的需求進行點餐。都能滿足我的個性化需求。'
        },
        {
          img: 'https://plus.unsplash.com/premium_photo-1682095829263-596d331f6326?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8SGVhZCUyMHN0aWNrZXJ8ZW58MHx8MHx8fDA%3D',
          title: '李麗',
          content:
            '他們的訂餐系統的用戶介面非常直覺，讓我在短時間內就能理解和使用。每個步驟都清晰可見，使得訂餐變得非常簡單而且沒有繁瑣的步驟。'
        }
      ],
      currentPage: 0
    }
  },
  methods: {
    render () {
      let str = ''
      this.Guest
        .filter((item, index) => this.currentPage === index || this.currentPage + 1 === index)
        .forEach(i => {
          str += `<div class="card m-6">
            <ul class="d-flex">
              <li class=""coad-li><img src="${i.img}" alt="#" class="coad-img"></li>
              <li class=""coad-li><div class="card-name">${i.title}</div></li>
            </ul>
            <div class="card-body">
              <div class="star-box d-flex">
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
                <div class="star"></div>
              </div>
              <p>${i.content}<p>
            </div>
          </div>`
        })
      this.$refs.courseSection.innerHTML = str
    },
    previousPage () {
      if (this.currentPage === 0) {
        return
      }
      this.currentPage--
      this.render()
    },
    nextPage () {
      if (this.currentPage === this.Guest.length - 1) {
        return
      }
      this.currentPage++
      this.render()
    }
  },
  mounted () {
    this.render()
  }
}
</script>

<style>
.carousel-item {
  margin-right: 0%;
}
@media (max-width: 992px) {
  .carousel-item {
    margin-right: 10px;
    align-items: center;
    overflow-x: hidden;
    scroll-snap-type: x mandatory;
  }
  .carousel-item > div {
    flex: 0 0 auto;
    width: 100%;

  }
}

.bg {
  background-color: #f4e9e2;
}

.text h3 {
  color: #461b09;
}
@media (max-width: 992px) {
  .m-b {
    margin-bottom: 1rem;
  }
}
.card {
  border: 1px solid black;
  border-radius: 5px;
  width: auto;
}
@media (max-width: 992px) {
  .m-6 {
    margin: 0.5rem !important
  }
}
.coad-img {
  width: 55%;
  height: 50px;
  /* -o-object-fit: cover; */
     object-fit: cover;
     border-radius: 60%;
}
.card ul {
  margin-top: 10px;
  padding-inline-start: none;
  margin-bottom: 0;
}
.card ul li {
  display: flex;
  align-items: center;
}

.card-body {
  display: block;
  padding: 0px 1rem 1rem 1rem;
}

.star-box {
  margin-bottom: 10px;
}

.star {
  margin-right: 5px;
  width: 20px;
  height: 20px;
  background-color: #f1a42e;
  -webkit-clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
          clip-path: polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%);
}

.col-md-2 ul {
  padding-left: 0rem;
}

.booking button {
  background-color: #693b28;
  color: #fbfbfb;
}
.booking button:hover {
  background-color: #b58a78;
  color: #fbfbfb;
}
</style>
