<template>
  <v-container fluid>
    <v-row dense>
      <v-col v-for="classItem in classes" :key="classItem.id" :cols="classItem.flex">
        <v-card>
          <v-img
            :src="classItem.src"
            class="white--text align-end"
            gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
            height="200px"
          >
            <v-card-title v-text="classItem.name"></v-card-title>
          </v-img>

          <v-card-actions>
            <v-btn
              text
              color="primary"
              @click="$router.push({ name: 'class', params: { classID: classItem.id } })"
            >View</v-btn>
            <v-btn
              text
              color="primary"
              @click="$router.push({ name: 'edit-class', params: { classID: classItem.id } })"
            >Edit</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "class-cards",
  data() {
    return {
      //   search: "",
      classes: [
        {
          id: 0,
          name: "Basic guitar",
          src:
            "https://tmw.com.sg/wp-content/uploads/2019/10/how-to-sharpen-your-guitar-skills-by-taking-classes-870x460.jpg",
          flex: 6
        },
        {
          id: 1,
          name: "Intermediate guitar",
          src:
            "https://tmw.com.sg/wp-content/uploads/2019/10/how-to-sharpen-your-guitar-skills-by-taking-classes-870x460.jpg",
          flex: 6
        },
        {
          id: 2,
          name: "Advance guitar",
          src:
            "https://pickupmusic.com/wp-content/uploads/2020/01/Ichka-web-3-1775x2048.jpg",
          flex: 6
        },
        {
          id: 3,
          name: "Kid's Baking",
          src:
            "https://d14peyhpiu05bf.cloudfront.net/uploads/2018/08/shutterstock_563342329.jpg",
          flex: 6
        },
        {
          id: 4,
          name: "Advanced Baking",
          src: "https://www.preadiinternational.com/img/blogs/1545804056.jpg",
          flex: 6
        },
        {
          id: 5,
          name: "Traditional Nonya Kueh",
          src:
            "https://bakersbrewstudio2.shopcadacdn.com/sites/files/bakersbrewstudio2/productimg/202001/BBS_0010_3.jpg",
          flex: 6
        }
      ]
    };
  }
};
</script>