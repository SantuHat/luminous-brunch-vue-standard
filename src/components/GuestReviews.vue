<!-- eslint-disable vue/valid-v-for -->
<!-- eslint-disable no-mixed-spaces-and-tabs -->
<!-- eslint-disable no-tabs -->
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
          img: 'data:image/png;base64,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',
          title: '陳嘉明',
          content:
            '他們的線上預約系統非常方便，讓我能在繁忙的日程中輕鬆安排用餐時光。用餐環境也非常優雅。讓我感受到了真正的歐式風情。'
        },
        {
          img: 'data:image/png;base64,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',
          title: '張曉春',
          content:
            '這個預約系統的使用介面非常簡單，讓我能夠輕鬆預定所需的服務。一切都清晰明瞭，不需要花太多時間就能完成預約流程。'
        },
        {
          img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAADxJJREFUWEedmAlwXdV5x3/nbu++/T3ti+VFsoTkRQYvODZeMAFscMCsNhAKgUKSSewkhHbaplnaTJM2mSGEDgwpCdvQToBQlxAHCAk4qcNmDEbeY1lGWJZk7U96+7tb59xnJ5itwJ15b97Teffqd/7nf77zfZ9IpVIen+TyBALFv1Og+u+e5+F5KoriAh4ejj/u4YL4ZP9GfFxACSM8FSHEe6bleSBfQnh/HpfQ/iSE8IFd7I8lx0cGlGAK2oc+XMK8H/ipm06NuZ79kUE/AqBEMz7erKVaJ5V7N9w7H+R4pfLyf8j14YCuhqIoSLd90CWd5lpgWSqK6tF9aISahjhVVTrvdMG7lS371cN1HVDLXn2/6wMBrYKKqkrDgyr3wGmQEljwxt5jPPe/O+nu68HyXFzbImYaJCIRFnUu4NILVqIZbnkrvcuzpwAdB0rFEoHwxwB0ShqeK1BU4cMpijjNW8Lz+NvvP8wT2/8L4Xp4/pK66FqQeCRBbTKJoWvk1QRXXriOz12yHE04p89R7m5fQQ/L8sjm8sST7/X4exTcc/CP1Cfaicdq0AOaDyZ35Tshf7HtJf7uzn/Gcx08z8bzHBlL/C2sqzq1lbVYrotmBPG0COsWruLbX9/ki/hOb8rPUkHbB8wxNjFCy+yG06Q8DfDtgSM88duHGJpUuea8K+mcvQhNlwvkoaplFTNphzXXf46R1HEfTnrIUJUynKISUT3iAZ2cp5JM1rGvv5/6ae384EubWb28oxwXpXKOi2NDJpMilRpkcHQ/w2MDdC64kJnTZv8Z8jTA67/xeTTFYGS8yIXLV3LjRdcSjYbRtL8s8+/+cICbv3kreC7ToxEunjePZZ2LQNVImgamWwChYukmarSeu597lte7B9n5+N24ojwRCVjK2+TyeaayI0QCFThugRMnDvH6kTe4YeOW9wJufeEZtv7m14ym0rieTige5jMrV3DtmquJhAL+FvGEy/BokSVXXsCS+gSXLVlGa/N8YtEqQtE4AUWA66AbGopuYiN4budL/PCprXQ9uRVFdfwDRaqXS2c4PnCQN468SFXyDFrrZpFJZ+gbPsq8uUtoaGoqB/hTJ8l139zC/OmNvHV8iGNDk3hCIxQN8KWrbmThrDZKhSyTOYuK2HTW3LCe71y+lopgjIa6NsxQFEMP+EusaALDDMqDD2EYvrK333sPN2+6nhWfavO96toOmak0E2NDjE4exyp67Dv6Bh3Ni9AVg6ncOOeet+4vgD/f/kte2vU8y1pmsqf3OG/3T+FgUCw6JGpibFg8n2mhRo6MjNFat4qbvnsT37lsPUlDpzJRTyRRTzhShaoqCM/FMAMI6Qv5XQi+99BP6Vh4FrdcfSme62JZFrlMHrtUoljK4VqCE6NDtLV0+NGgf/AgkYogjU3tZQU3fOMLvrFNBXI5B1WAZQs/tk2rT7K0aSZ1WjVuPEnMbOe6b93IZzvPYHFLK5NeENQIs2sbqY2FMIXH7t4etnW9iVPMsX71OkZT40waOluuvxbF97PceIJSseiHGdfxQwATY+P0T7zFkb5dRA1Yf/FmxB9ee8X7+/t+SNgQhDWddFqgKw4ly8IMRbh69XnMm9ZCbUUD4ViC0VSRcz67gc8vm88LfzpOZSxCqZhDdTy+vGoFzdUxfvnSi/TmbRY1z2LZwlVoNc3sO/AmZ9eGiK9ciyYVEFAqlSjkSwhP8U/6l/f+lsde2MZbfcPUmQr/8NVvI+7f+rD3PzuepTqh01rdQtZyiaoB5jXMIVZRyfz2TrTAyWNLCAb3Heb8r9zKl9ecTf/oOEePD1EMhMlnM5x/Ris3X3I19/zn3WSKDptWrKJ2VgehaW3kDu3EbGnHq2mkZGWx7QwKNm8d38+x4UG6R6aYzI34tnrx1R6mVZp896ubEc9s3+r9+sWnybl5VrWvoqmymYgwScZqMCImVbXV+Gt+8nr53p/yaNfLdNTFUVyPvT3HCKGS0QLMb2rmmo23kh84zFhqglAkSWJGK4qMi0d2o01vx6uswJVpmZVHeFNMpfvJZKd49egeTENlbCrDMzv2c8myRjZddAvi9u9t9i5fspSDw92c034lsVgVuXyWquoadFNHyNAhXyev3ld3s/2/7yMdNJg7Yz411S24jkPv0QPkCznWXnoDdmYce3IMO18kUluLVlmBk0mRi9WiRyKAhetkcKwxctkRXEdlfGqY0Ykh0lmLXQcPEg1YbPz0csQ37/iSd1HnYtKlHNXRM6mvm43teUSTUXR5irxDPZ/RFjz+o3+jb/IY82bMo6Wpk3xmku7eA2h6gOWrPkPAVLH6DzPQ/SqhSIzKjmUI2+WobqIFDSbSx/CYIihgKlfEEVWUiravw1Q6z/bXn6elVuOWdeci1n5hvbegvYaoplEoxFnctpjWaUtJJGLE4gEUTTn9kPfg5Sef4JWd24kFwzSEk5RyWd4aT3F4+AQbOmYxraGZyvYVZCd6SQY1jEQd9776B47liyiqTa4wzBmNFZw5vRnb1fnTwCj7eo9haBAKBhmZGOBr6z9Nx8yViHNuPNeLxEwqjSD9oznaZ9awfsFVVJjVNNRXUVldgaLrvniKDL6Og1Ky6O7p5tmnHka1ihihKjKOR51momRSLJrXzlQgSteBg1xy/nno8RruePqnHByfoG1mI2fPbqEmXk1lrIaJ1CBvD/fRn0lhmgbHRkaJKQpfvOhmFMVCrLl5jReLBTE9naFUjmQ8QoVhMgududEoq84+F6NtBZri+moKoeLKYOsJnnnqUTKDPVRE4jz4+12cM206F156BYlwHc7UFMEKE9VOsX8sy47upxhM5WhMJFi1YAmYBo7nMjY6SCafJhqPEQuF6R/qY/DEEBectYRkyEZsuv0CzxIKwlGYmLCZkYiwuK4FayJLo+bRNHsRs5esJWx4KLrM1+SGcSh5Krf9x/3UThxkVk0dQhgMHU+xeFYHcd2ioXM+RmU9TjHPT7b9imxDJ7VTf2TO7Bba2xfjei5TUwMcG+hh79u9TBamWD2vhTPq2gmFIphmEis7gPj5Uz/znvz94+gITqRKLGtq4ML2z7C/5xCv7T/IzJbZXL76SqKlPtSISTgYIxiIsP3tUW781+/TmVRIKDbndXYSFirJSJz62hnUNLZiJJN4mQnue/JR/v3NfrZccSmrW1Ui0Ti2lSVoWfSe6OWh7S+jKUX+6fPXEwnWE4lUoIgAjgpi29MPeDt2PMH5M2ZRdAroaojGhos5MjTMi3v3Mq+5lfa2s0joJeK19WjBEJprc8e233DvY48gXIu2RJBKQ7B67hzap7ViqIJSIUdVdT3Tm5q55xcP8fOeFNGKGWxYXIVS6GVVcw3N05eQyo2y9fXtbFixmOlN52LbJTw3j6yECo6NOLTvNW/P7x9k3eovUsyOYTkWlhtlZPQER3sOkEzWUt+ykNqGWoqFAn/qPeTXGLfc/TCpiWEcq0DINGgMeER0FUNRaI0ZnNc5myVnrkE1onznkQf41dFhMrbJBWs3EO3dwearLmfmtBlMZMfoG9pNR9sCQhVtOIVxbCeL49g44ZpyspDv7yYSb8JF+EFXnuie4/nVnKw5FEMHXcPKFXizayfbu/Zx79PP47lFUFSsbJqQoTInYVIb1plbGeSypZ1UzVyOa9vc/JP7eGM4jWfGmDlnBd2vP4NiOQQTNVyw9FPUhmWPosTctjNYUZ9Dd0coRRqpaFtXBsyODGLn87iWjSxTg+EK1EAIzdDxXA/blR0BQSFf5JU9Xdz52KP0jaco5LIYRoBCwULBwrOLnFVfyV91NnJORzuJhrn09R7isp88StGMkrchWDGDxmSEYz17KOVSKHoQVw2g6gEUXP5l00oumZEmOP8KtOqOvySsR197FU010HUTUNFCQSLJShRV9bOOXNHmuV1dfOvOH+A6RRRNJ5ioopDJIFSFoBlB1U2ymTTTGyo5uyLGXy+eye/29/CznYfJGSEmskUSyenEkhFGjuzy7SHzPyHhRLm/o2o6v/nHa2hdc+3pGXV6sJ/JgQEURfePHZmbx2tqsTF45Nnn2bZrFz1HDiArHRkikJWcESEcTeCUCshyw5Vpk2aihxL+md4/2E9AV0gmq8lnJwkEdP/kaGxsYu/ObT6AaxXLh4ARANdFFQpbbrqB22687nRA+W3b0/czkS9huREOHDrG60cG6e3v9wsaYVv+A+SMJY0sOeXhaUarfNXT2UmioZCfdgXMEIFQjMrqOlITaYxAgHQmRyJZQUAolAppTpw4ipXPlAt61/a9LBsFfuKx43fvX9XJI2flVbfiqdK05WJcpuh+Z8Cvfz3/u8x/VUX1lZQtmGCsGssp+eq5LoR0hWw2RUDTcGUqqmgEDZNgJIpqRLBLeQYHuv0Cq9ybOdlcEYLH7rqDT5214P0B5V+v/srt7Nzdhet5KFIpKb8ol4rl6lwK6aL47TRZfbroRghhhIjGE8jpmMEgphagWMiRnhxHMzSK+SK6GaSpoZnU1ChDxw/jSEAZNYSHKlSWLjyTR++644ML91MjGzd/jVe69vpQfqiRHQEksMBxXYRQ/M+yaJfjrmsTTdZQKMlWhk08HqdkCxyhUlVVQzaXxS5aBMxIOVsZOEwhPeIvr7SKUTuHzdds4msbV58Gd1rZ+e6RjVtu45U3u8pG9X1S7v35Gp7yodyBpzqrUslQFC0QwbaK6LqBZsglVwnFK7ALeULhEMFIkqNdL5Qnd7Kns/TMBfzinrveA/ehgHJwk4Ts2vPnG+UqSz/KKC/KLa9yZ1fgKys9ZYTiCCPse9EqZAgHTRwhqKqoIV+wSVRWc3T/H323yJWQfnv87h+/L9z/Cyh/8PLuN7luy9dxZSHmwwjkNpHeEbJQ95da7mxpTscHDYQT2KhEIglsW6b3tt/tqmuYQX9/H5mJPhTP4/G772LZwrM+EO4jAZ66+8cPPMSP7n/Qn7V0pny3HQdV1cobynfpqc0EuhkB1fB7PXLUMA3CRpCJ9DhfuOpi/uaWmz4U7NTgR2gBn/6cOx94iB8/8LC/ROWYKFVVfV9KQL+HI7tXnoemBdCDccLhGPFYko1rV7D5uis+EtgnBjx1o1z6V3Z3+bvwrgcf8UF94JOX59jcdustqFqA5QvPZMn8OR8L7NSP/w/ikN/dSigHzAAAAABJRU5ErkJggg==',
          title: '林文忠',
          content:
            '這個預約系統提供了豐富的預約選項，使我能夠按照我的需求進行定制。無論是不同的服務類型還是時間選擇，都能滿足我的個性化需求。'
        },
        {
          img: 'data:image/png;base64,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',
          title: '李麗',
          content:
            '他們的預約系統的用戶介面非常直覺，讓我在短時間內就能理解和使用。每個步驟都清晰可見，使得預約變得非常簡單而且沒有繁瑣的步驟。'
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
              <li><img src="${i.img}" alt="#" class="coad-img"></li>
              <li><div class="card-name">${i.title}</div></li>
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
@media (max-width: 992px) {
  .carousel-item {
    margin-right: 100%;
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
.cord-img {
  width: 100%;
  -o-object-fit: cover;
     object-fit: cover;
}

.card ul {
  margin-top: 10px;
  padding-inline-start: none;
  margin-bottom: 0;
}
.card ul li {
  display: flex;
  align-items: center;
  margin-right: 10px;
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
