<template>
  <ChatFeed class="mt-1" :showQuotedPost="$config.showRepliesOnHomepage" />
</template>

<script>
import { useEthers } from 'vue-dapp'
import ChatFeed from "../components/chat/ChatFeed.vue"

export default {
  name: "index",

  components: {
    ChatFeed
  },

  setup() {
    const { address, chainId } = useEthers()

    return { address, chainId }
  }
}
</script>