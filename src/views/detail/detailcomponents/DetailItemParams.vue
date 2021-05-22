<template>
  <div v-if="Object.keys(itemParams).length !== 0" class="params-info">
    <div class="params">
      <table>
        <tr v-for="(item, index) in itemParams.rule.tables[0]" :key="index">
          <td>{{item[0]}}</td>
          <td>{{item[1]}}</td>
          <td>{{item[2]}}</td>
          <td>{{item[3]}}</td>
        </tr>
      </table>
    </div>
    <table>
      <tr v-for="(item, index) in itemParams.info.set" :key="index" class="detail-params">
        <td class="params-key">{{item.key}}</td>
        <td class="params-value">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DetailItemParams',
  props: {
    itemParams: {
      type: Object
    }
  }
}

</script>
<style scoped>
.params-info table {
  color: #8d8c8c;
  width: 100%;
  border-collapse: collapse;
}
.params-info table tr {
  height: 42px;
}
.params-info tr td {
  border-bottom: 1px solid rgba(100,100,100,.1);
}
.detail-params{
  border-bottom: 1px solid rgb(212, 210, 210);
  height: 45px;
  line-height: 45px;
}
.params-key{
  width: 95px;
  margin-left: 5px;
  color: #8d8c8c;
}
.params-value{
  margin-left: 45px;
  color: #f34b6a;
}
</style> 