<template>
  <div>
    <ProfileNavBar />
    <Share />
  </div>
</template>

<script>
//导入导航子组件
import ProfileNavBar from './childComponents/ProfileNavBar'

import Share from 'components/common/share/Share'

export default {
    components:{
      ProfileNavBar,
      Share
    }
}
</script>