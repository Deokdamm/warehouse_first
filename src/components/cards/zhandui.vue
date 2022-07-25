<template>
    <div style="margin: 0px 10px 10px 0px;">
        <div class="card">
            <a :href="href"><img :src="img" alt=""></a>
            <p>{{ name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: "",
        href: "",
        img: ""
    },
    methods: {
        // linkDownload(url) {
        //     window.open(url, '_blank') // 新窗口打开外链接
        // }

    }
}
</script>

<style>
img {
    width: 120px;
    display: block;
    margin: 0 auto;
    margin-top: 5px;
}

p {
    font-size: 24px;
    color: #999;
    font-weight: 700;
    width: 100%;
    text-align: center;
    margin-top: 6px;
}

.card {
    box-shadow: 0 4px 6px #e6e6e6;
    border: 2px solid #fff;
    background-color: #fff;
    width: 280px;
    height: 180px;

}
</style>