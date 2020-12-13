<template>
  <div>
    <Notification />
    <router-view></router-view>
  </div>
</template>

<script>
import Notification from "@/components/notification/Notification";
export default {
  name: "App",
  components: { Notification },
};
</script>
