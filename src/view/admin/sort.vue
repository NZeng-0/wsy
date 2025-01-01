<template>
  <div class="goNameCss">{{goName}}<span @click="goIndex()"><b>X</b></span></div>
  <div class="sortFlex">
    <div class="addL"><span>username</span><input v-model="newSort.username" type="text"/></div>
    <div class="addL"><span>content</span><input v-model="newSort.content" type="text"/></div>
    <div class="addL">
      <button @click="addSort()">add</button>
    </div>
    <table>
      <tr>
        <th>username</th>
        <th>content</th>
        <th>control</th>
      </tr>
      <tr v-for="(data,index) in paginatedData" :key="index">
        <td>
          {{ data.username }}
        </td>
        <td>
          {{ data.content }}
        </td>
        <td>
          <button class="leftBtn" @click="deleteSort(index)">delete</button>
          <button class="leftBtn" style="margin-top: 2px">modify</button>
        </td>
      </tr>
    </table>
    <div class="NPBtns">
      <div class="leftBtn" @click="prevPage" :disabled="currentPage === 1">Previous</div>
      <span>Page {{ currentPage }} of {{ totalPages }}</span>
      <div class="rightBtn" @click="nextPage" :disabled="currentPage === totalPages">Next</div>
    </div>
  </div>
</template>
<script>
import {computed, onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";

export default {
  setup() {
    const tableList = ref([
      {
        username: "‌机制本",
        content: "这类剧本通常包含小游戏或互动环节，如划拳、玩骰子等，增加了游戏的趣味性和互动性，适合喜欢游戏和互动的玩家。"
      },
      {
        username: "阵营本‌",
        content: "玩家被分成不同的阵营，通过策略和团队合作来争夺胜利。这类剧本适合喜欢勾心斗角和团队合作的玩家。"
      },
      {
        username: "情感本‌",
        content: "以情感为主题，通常涉及人与人之间的复杂关系，如爱情、友情、亲情等。这类剧本适合情感细腻的玩家，也被称为“哭哭本”。"
      },
      {
        username: "‌恐怖本‌",
        content: "以恐怖和惊悚为主题，通过道具、NPC和阴森环境的渲染来带给玩家刺激和恐惧感。"
      },
      {
        username: "硬核本‌",
        content: "这以推理为主，注重严谨的时间线和逻辑推理，适合喜欢挑战高难度推理的玩家。"
      },
      {
        username: "‌还原本‌",
        content: "目的不是为了找到凶手，而是还原整个故事的真实情况。这类剧本需要玩家注意细节，综合全局线索来还原故事背景和案件。"
      }
      ,
      {
        username: "演绎本‌",
        content: "DM或NPC有表演环节，观赏性和代入感强，适合喜欢角色扮演的玩家。"
      },
      {
        username: "变格本‌",
        content: "故事背景架空，涉及穿越、灵魂、科幻等元素，需要玩家有较大的脑洞来理解和推理。"
      },
      {
        username: "本格本‌",
        content: "故事背景和作案手法在现实中可以实现且合逻辑，适合喜欢现实主义推理的玩家。"
      }
    ]);
    const pageSize = 4;
    const currentPage = ref(1);
    const goName=ref("");
    const route=useRoute();
    const router = useRouter();

    onMounted(() => {
      goName.value = route.params.toName;
      console.log(goName.value)
    })
    const paginatedData = computed(() => {
      const start = (currentPage.value - 1) * pageSize;
      const end = start + pageSize;
      return tableList.value.slice(start, end);
    })
    const newSort = ref({username: '', content: ''});
    const totalPages = computed(() => Math.ceil(tableList.value.length / pageSize));
    const prevPage = () => {
      if (currentPage.value > 1) {
        currentPage.value--;
      }
    };

    const nextPage = () => {
      if (currentPage.value < totalPages.value) {
        currentPage.value++;
      }
    };

    function addSort() {
      if (newSort.value.username && newSort.value.content) {
        tableList.value.push({...newSort.value})
        newSort.value.username = '';
        newSort.value.content = '';
      }
    }
    function deleteSort(index){
      tableList.value.splice(index,1)
    }
    function goIndex() {
      router.push({
        name: "info",
        params: {
          toName: '个人信息'
        }
      })
    }

    return {
      goIndex,
      tableList,
      paginatedData,
      currentPage,
      totalPages,
      prevPage,
      nextPage,
      newSort, addSort,deleteSort,goName

    }
  }
}
</script>
<style>
table {
  margin-top: 10px;
  border-collapse: collapse;
  width: 100%;
}

table th, table td {
  border: 1px solid #ccc;
  padding: 8px;
  /*width: 0;*/
  text-align: center;
}

.NPBtns div {
  width: 100px;
  line-height: 40px;
  background-color: darkgrey;
  text-align: center;
  margin-right: 20px;
  margin-left: 20px;

}

.NPBtns {
  display: flex;
  line-height: 40px;
  position: absolute;
  bottom: 10px;
}

.addL {
  margin-top: 20px;
}

.addL button {
  background-color: #cccccc;
  border: 0;
  border-radius: 10px;
}

.leftBtn, .rightBtn {
  border-radius: 10px;
  background-color: #cccccc;
  border: 0;
}
</style>