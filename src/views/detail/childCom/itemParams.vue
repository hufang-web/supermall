<template>
	<div class="item-params" v-if="Object.keys(itemParams).length!==0">
    <div class="rulebox">
      <h2>{{itemParams.rule.key}}</h2>
      <table v-for="item in itemParams.rule.tables">
        <tr v-for="clo in item">
          <th>{{clo[0]}}</th>
          <td v-for="c in clo.length-1">
            {{clo[c]}}
          </td>
        </tr>
      </table>
    </div>
    <div class="infobox">
      <h2>{{itemParams.info.key}}</h2>
      <table>
        <tr v-for="item in itemParams.info.set">
          <th>{{item.key}}</th>
          <td>{{item.value}}</td>
        </tr>
      </table>
    </div>
	</div>
</template>
<script>
export default {
	name:'itemParams',
  props:{
    itemParams:{
      type:Object,
      default(){
        return {}
      }
    }
  }
}
</script>
<style scoped>
  .item-params{font-size:.24rem;}
  .infobox h2,.rulebox h2{font-size:.3rem;text-align:center;}
</style>
