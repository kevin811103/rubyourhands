<template>
    <div>
        <div style=" position: absolute;left:50%;top:50%">
            <Button type="success" @click="login" size="large" icon="paper-airplane">進入</Button>
        </div>

    </div>
</template>

<script>
import packageJson from '~/package.json'
export default {
    components: {},
    mounted() {
        console.log(
            `%c rubyourhands %c Detected Version v${
                packageJson.version
            } %c`,
            'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
            'background:#2d8cf0 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
            'background:transparent'
        )

    },
    methods: {
        login(){
    this.$router.push('/TestPage')
    }
    }
    }
</script>

<style>
.one {
    border-style: solid;
    border-width: 5px;
}
</style>
