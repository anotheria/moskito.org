<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import IconLogo from '../icons/IconLogo.vue'
import AppHeaderDrawer from './AppHeaderDrawer.vue'

defineProps({
  pageName: {
    type: String,
    required: true,
  },
})

const isMounted = ref(false)
const { y } = useWindowScroll()

const drawerVisible = ref(false)

onMounted(() => {
  isMounted.value = true
})

const isScrolled = computed(() => isMounted.value && y.value > 50)

const logoSize = computed(() => {
  return isScrolled.value ? 40 : 50
})
</script>

<template>
  <div class="header header--fixed" :class="{ 'header--scrolled': isScrolled }">
    <div class="container header__container">
      <div class="header__logo logo">
        <a href="/" class="logo__link">
          <IconLogo class="logo__image transition-all" viewBox="0 0 400 402.7" :width="logoSize" :height="logoSize" />
          <span class="logo__text">
            <b class="logo__name">MoSKito</b>
            <span class="logo__page-name">{{ pageName }}</span>
          </span>
        </a>
      </div>

      <slot />

      <button
        class="header__drawer-button"
        aria-label="Open navigation menu"
        :aria-expanded="drawerVisible"
        title="Toggle navigation menu"
        @click="drawerVisible = !drawerVisible"
        @keydown.enrter="drawerVisible = !drawerVisible"
        @keydown.space="drawerVisible = !drawerVisible"
      >
        <i class="pi pi-equals" style="font-size: 2rem"></i>
      </button>
    </div>
  </div>

  <Drawer v-model:visible="drawerVisible" header="MoSKito" position="right">
    <AppHeaderDrawer />
  </Drawer>
</template>

<style scoped lang="scss">
.header {
  color: #ffffff;
  padding: 20px 0;
  z-index: 1001;

  transition: all 0.3s;

  &--fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    color: #000000;
  }

  &--scrolled {
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
    padding: 10px 0;
  }

  &__container {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  &__drawer-button {
    color: #ffffff;
    opacity: 0.5;
    transition: all 0.3s;
    outline: none;

    .header--scrolled & {
      color: black;
    }

    &:hover,
    &:focus {
      opacity: 1;
    }
  }
}

.logo {
  color: white;

  .header--scrolled & {
    color: black;
  }

  &__link {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__name {
    font-size: 21px;
    line-height: 25px;
    font-weight: 400;

    .header--scrolled & {
      font-size: 18px;
      line-height: 20px;
    }
  }

  &__page-name {
    font-size: 21px;
    line-height: 25px;
    font-weight: 300;

    .header--scrolled & {
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__text {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

@media (max-width: 992px) {
  .logo {
    &__text {
      display: none;
    }
  }
}

@media (max-width: 876px) {
  .logo {
    &__text {
      display: flex;
    }
  }
}

@media (max-width: 576px) {
  .logo {
    &__text {
      display: none;
    }
  }
}
</style>

<style lang="scss">
.p-button-text.p-button-secondary.p-drawer-close-button {
  color: #ffffff;
}
</style>
