<template>
    <div>
        <Row>
            <iCol span="12">
                <dog></dog>
            </iCol>
            <iCol span="12">
                <dog></dog>
            </iCol>
        </Row>
        <Row>
            <iCol span="24">
                <div class="test">
                    <div class="neon">
                        <span class="text" data-text="happyDog">happyDog</span>
                        <span class="gradient"></span>
                        <span class="spotlight"></span>
                    </div>
                </div>

            </iCol>

        </Row>
        <!-- <div class="container">
            <div class="dog">
                <div class="dog-head">
                    <div class="dog-ears ears-left"></div>
                    <div class="dog-ears ears-right"></div>
                    <div class="dog-eyes"></div>
                    <div class="dog-mouth">
                        <div class="dog-nose"></div>
                        <div class="dog-tongue"></div>
                    </div>
                </div>
                <div class="dog-tail"></div>
                <div class="dog-body">
                    <div class="dog-foot"></div>
                </div>
                <div class="ball"></div>
            </div>
        </div>
 -->

    </div>
</template>

<script>
// import VendorDetailModal from '~/components/detail/VendorDetailModal'
import dog from '~/components/dog'
export default {
  layout: "barMenu",
    components: {dog},
    mounted() {

    },
}
</script>

<style scoped>
.test {
    margin: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
}

.neon {
    position: relative;
    overflow: hidden;
    filter: brightness(200%);
}

.text {
    background-color: black;
    color: white;
    font-size: 180px;
    font-weight: bold;
    font-family: sans-serif;
    text-transform: uppercase;
    position: relative;
    user-select: none;
}

.text::before {
    content: attr(data-text);
    position: absolute;
    color: white;
    filter: blur(0.02em);
    mix-blend-mode: difference;
}

.gradient {
    position: absolute;
    background: linear-gradient(45deg, red, gold, lightgreen, gold, red);
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    mix-blend-mode: multiply;
}

.spotlight {
    position: absolute;
    top: -100%;
    left: -100%;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle, white, transparent 25%) center / 25% 25%,
        radial-gradient(circle, white, black 25%) center / 12.5% 12.5%;
    animation: light 5s linear infinite;
    mix-blend-mode: color-dodge;
}
@keyframes light {
    to {
        transform: translate(50%, 50%);
    }
}
</style>
