<template>
  <div>
    <!-- {{ form}} -->
    <FormFields :data="formObj" :isEdit="true">
      <template #layoutTitle> <h5>Edit Post</h5> </template>
    </FormFields>
  </div>
</template>

<script setup>
import FormFields from "@/components/Admin/Blog/FormFields";
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { db } from "@/firebase";
import { doc, getDoc } from "firebase/firestore";
// import moment from "mment";

// const today = () => {
//   return moment().format("YYYY-MM-DD, HH:mm A");
// };

const route = useRouter();
const blogId = ref("");
// const title = ref("");
// const category = ref("");
// const excerpt = ref("");
// const content = ref("");
// const status = ref("");
const formObj = ref({});

const fetchData = async (docRef) => {
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    // console.log("Document data:", docSnap.data());
    const data = docSnap.data();
    formObj.value = {
      title: data.title,
      category: data.category,
      excerpt: data.excerpt,
      content: data.content,
      status: data.status,
    };
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
};
onMounted(() => {
  blogId.value = route.currentRoute.value.params.blog_id;
  const docRef = doc(db, "blogPost", blogId.value);
  fetchData(docRef);
});
</script>

<style scoped></style>
