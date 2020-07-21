<template>
<b-col>
    <b-card
    :title = project.name 
    style = "max-width:20rem"
    class = "mb-2"
    >
    <b-card-text>{{ project.age }}</b-card-text>
    </b-card>
</b-col>
</template>

<script>
export default {
    props: ['project'],
}
</script>

<style >

</style>