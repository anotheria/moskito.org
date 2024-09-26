<script setup lang="ts">
defineProps({
  text: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
})

const tooltipDt = {
  background: '#ffffff',
  color: '#000000',
}

const tooltipPt = {
  text: 'text-center text-sm',
}
</script>

<template>
  <div>
    <div v-if="position === 'bottom'" v-tooltip.bottom="{ value: text, dt: tooltipDt, pt: tooltipPt }">
      <slot />
    </div>

    <div v-if="position === 'top'" v-tooltip.top="{ value: text, dt: tooltipDt, pt: tooltipPt }">
      <slot />
    </div>

    <div v-if="position === 'left'" v-tooltip.left="{ value: text, dt: tooltipDt, pt: tooltipPt }">
      <slot />
    </div>

    <div v-if="position === 'right'" v-tooltip.right="{ value: text, dt: tooltipDt, pt: tooltipPt }">
      <slot />
    </div>
  </div>
</template>
