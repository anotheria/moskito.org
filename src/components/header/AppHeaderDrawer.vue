<script setup lang="ts">
const mainMenu = [
  {
    label: 'Main Menu',
    items: [
      { label: 'Essential', url: '/', target: '_self' },
      { label: 'Control', url: 'moskito-control.html', target: '_self' },
      { label: 'Central', url: 'moskito-central.html', target: '_self' },
      { label: 'Download', url: 'download.html', target: '_self' },
      { label: 'Blog', url: 'https://anotheria.net/blog/msk/', target: '_blank' },
    ],
  },
]

const items = [
  {
    label: 'Getting started',
    items: [
      {
        label: 'Step by step guide',
        url: '//blog.anotheria.net/msk/the-complete-moskito-integration-guide-step-1/',
        target: '_blank',
      },
      { label: 'Integration guide', url: '//www.moskito.org/integration.html', target: '_blank' },
      { label: 'Nightly build', url: 'http://newest.moskito.org/moskito', target: '_blank' },
      { label: 'Download', url: '//www.moskito.org/download.html', target: '_blank' },
    ],
  },
  {
    label: 'Support',
    items: [
      { label: 'Free and Commercial Support', url: 'http://www.moskito.org/moskito-support.html', target: '_blank' },
    ],
  },
  {
    label: 'Resources',
    items: [
      { label: 'Documentation', url: 'https://confluence.opensource.anotheria.net/display/MSK/', target: '_blank' },
      {
        label: 'Change log',
        url: 'https://confluence.opensource.anotheria.net/display/MSK/Change+Log',
        target: '_blank',
      },
      { label: 'Maven', url: 'http://search.maven.org/#search%7Cga%7C1%7Cmoskito', target: '_blank' },
      { label: 'Blog', url: '//anotheria.net/blog/msk/log', target: '_blank' },
      { label: 'Presentations', url: '//speakerdeck.com/dvayanu/', target: '_blank' },
    ],
  },
  {
    label: 'Apps (Barbecue)',
    items: [
      {
        label: 'MoSKito UI',
        url: 'https://itunes.apple.com/de/app/moskito-ui/id531387262?l=en&mt=8',
        target: '_blank',
      },
      {
        label: 'MoSKito Control',
        url: 'https://itunes.apple.com/de/app/msk-control/id688838411?l=en&mt=8',
        target: '_blank',
      },
    ],
  },
]
</script>

<template>
  <nav class="menu" aria-label="Main Navigation">
    <ul class="menu__list">
      <li v-for="(category, index) in mainMenu" :key="index" class="menu__main-item menu__item">
        <span class="menu__category">{{ category.label }}</span>
        <ul class="menu__sublist">
          <li v-for="(subItem, subIndex) in category.items" :key="subIndex" class="menu__subitem">
            <a :href="subItem.url" :target="subItem.target" class="menu__link">
              {{ subItem.label }}
            </a>
          </li>
        </ul>
      </li>

      <li v-for="(category, index) in items" :key="index" class="menu__item">
        <span class="menu__category">{{ category.label }}</span>
        <ul class="menu__sublist">
          <li v-for="(subItem, subIndex) in category.items" :key="subIndex" class="menu__subitem">
            <a :href="subItem.url" :target="subItem.target" class="menu__link">
              {{ subItem.label }}
            </a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss" scoped>
.menu {
  &__list {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  &__item {
    margin-bottom: 1rem;
  }

  &__main-item {
    display: none;

    @media (max-width: 876px) {
      display: block;
    }
  }

  &__category {
    font-weight: 500;
    font-size: 1.2rem;
    display: block;
    margin-bottom: 15px;
  }

  &__sublist {
    list-style-type: none;
  }

  &__subitem {
    margin-bottom: 0.5rem;
    padding-left: 40px;
    position: relative;

    &::before {
      content: '';
      width: 20px;
      height: 1px;
      background-color: #999;
      position: absolute;
      top: 50%;
      left: 0;
    }
  }

  &__link {
    text-decoration: none;
    font-size: 14px;
    display: block;
    margin-bottom: 5px;
    color: #999;
    transition: all 0.3s;

    &:hover {
      color: #fff;
    }
  }
}
</style>
