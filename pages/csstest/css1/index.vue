<template>
    <!--https://www.w3schools.com/css/-->
    <div>

        <div style=' border-style:dotted'>
            heeepefje
        </div>
        <p>This property specifies what kind of border to display:</p>

        <p class="dotted">A dotted border.</p>
        <p class="dashed">A dashed border.</p>
        <p class="solid">A solid border.</p>
        <p class="double">A double border.</p>
        <p class="groove">A groove border.</p>
        <p class="ridge">A ridge border.</p>
        <p class="inset">An inset border.</p>
        <p class="outset">An outset border.</p>
        <p class="none">No border.</p>
        <p class="hidden">A hidden border.</p>
        <p class="mix">A mixed border.</p>
    </div>
</template>

<script>
export default {
  layout: "barMenu",
}
</script>

<style scoped>
.dotted {
    border-style: dotted;
}
.dashed {
    border-style: dashed;
}
.solid {
    border-style: solid;
}
.double {
    border-style: double;
}
.groove {
    border-style: groove;
}
.ridge {
    border-style: ridge;
}
.inset {
    border-style: inset;
}
.outset {
    border-style: outset;
}
.none {
    border-style: none;
}
.hidden {
    border-style: hidden;
}
.mix {
    border-style: dotted dashed solid double;
}
</style>
