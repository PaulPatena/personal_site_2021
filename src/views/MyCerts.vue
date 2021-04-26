<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col cols=9>
          <v-carousel
            cycle
            hide-delimiter-background
            show-arrows-on-hover
            :height="imgHeight"
          >
            <v-carousel-item
              v-for="(cert, i) in certs"
              :key="`certs-${i}`"
            >
              <v-sheet
                height="100%"
              >
                <v-row
                  class="fill-height"
                  align="center"
                  justify="center"
                >
                  <div>
                    <v-img :height="imgHeight" contain :src="`${baseUrl}/${cert}`"></v-img>
                  </div>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'MyCerts',

  data: () => ({
    baseUrl: "https://d2f64i0vuuj86y.cloudfront.net/public_images/certs",
    certs: [
      "AWSArchitect960x742.jpg",
      "AWSDeveloper960x742.jpg",
      "scrum.jpg",
      "CppTestResult2018-720x960.jpg",
      "Python3TestResult2020-720x960.jpg",
      "plusight-creds.png",
      "lbs.jpg",
      "solutions-architect-course-min.jpg",
      "nodejs.jpg",
      "react-cert-min.jpg",
      "py-web.jpg",
      "django.jpg",
      "udemy-aws-solarch-compressed.jpg",
      "web-dev2.jpg",
      "kotlin.jpg",
      "interactive-python.jpg",
      "py-fund.jpg",
      "cs.jpg",
      "estimation.jpg",
      "embed.jpg",
      "swift.jpg",
      "css.jpg",
      "html.jpg",
      "jquery.jpg",
      "js.jpg",
      "mysql.jpg",
      "php.jpg",
    ]
  }),

  computed: {
    imgHeight() {
      return `${this.$vuetify.breakpoint.height * 0.90}px`;
    },
    ...mapGetters(['getDarkMode']),
  },
}
</script>