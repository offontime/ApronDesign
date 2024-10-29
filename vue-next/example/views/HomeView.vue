<script setup lang="ts">
import { ref } from 'vue'
const switchValue = ref(false)
const checkboxValue = ref(false)
const inputValue = ref('1234')
const collapseData = [
  {
    name: 'The Beauty of a Tranquil Morning',
    content: `As the first rays of the sun gently pierce through the thin veil of the morning mist, a sense of tranquility and hope fills the air. The world seems to awaken slowly, as if reluctant to break the spell of the peaceful night that has just passed.
In the garden, dewdrops glisten like tiny diamonds on the delicate petals of flowers. Each droplet is a miniature world, reflecting the soft colors of the surrounding blossoms and the clear blue of the morning sky. The gentle breeze whispers through the leaves, creating a soothing melody that dances with the fragrance of freshly bloomed roses and lavender. It is a symphony of nature, a harmonious blend of sight, sound, and scent that invigorates the soul.
A solitary bird perches on a branch, its feathers ruffled slightly by the morning breeze. It tilts its head, as if listening intently to the secrets that the wind brings. Then, with a flutter of its wings, it takes flight, soaring gracefully across the sky. Its silhouette against the backdrop of the rising sun is a picture of freedom and beauty, a reminder of the wonders that exist in the simplest of moments.
Walking along a path that winds through the meadow, the grass beneath one's feet feels soft and springy. The blades are damp with dew, and as one walks, a faint mist rises, creating an almost ethereal atmosphere. In the distance, the mountains stand tall and majestic, their peaks kissed by the golden light of the sun. They seem to be guardians of this peaceful landscape, silently watching over the passage of time.
The morning is a time of new beginnings, a chance to start afresh and embrace the possibilities that the day holds. It is a time to be still and listen to the whispers of the heart, to find inspiration in the beauty that surrounds us. In this tranquil moment, we are reminded that life is a precious gift, filled with small miracles and unending beauty, waiting to be discovered and cherished.`
  },
  {
    name: 'The Magic of a Starlit Night',
    content: `When the sun dips below the horizon and the night unfolds its velvet cloak, the sky is transformed into a breathtaking canvas of twinkling stars. The starlit night is a realm of magic and wonder, where the boundaries between reality and dreams seem to blur.
The stars, like countless diamonds scattered across the vast expanse of the universe, shine with a brilliance that is both captivating and mysterious. Some are bright and bold, while others twinkle faintly, as if playing a 捉迷藏 game with the observer. They form constellations that have told stories throughout the ages, guiding sailors on their voyages and inspiring poets to pen their verses.
Under the starlit sky, the world takes on a different hue. The landscape is bathed in a soft, silver light that casts long shadows and gives a sense of depth and stillness. A gentle breeze rustles the leaves of the trees, creating a lullaby that accompanies the quiet symphony of the night. The crickets chirp in the grass, adding their own melody to the nocturnal chorus.
Lying on a blanket in an open field, one can feel the vastness of the universe above. The stars seem so close, yet so infinitely far away, a reminder of the insignificance of our individual selves in the grand scheme of things. And yet, in that very insignificance, there is a sense of freedom and possibility. We are part of this great cosmic dance, connected to the stars and the mysteries of the universe in ways we may never fully understand.
The starlit night is a time for reflection and introspection. It is a moment to look beyond the hustle and bustle of daily life and contemplate the bigger questions - about our purpose, our dreams, and our place in the world. In the silence of the night, with only the stars as our witnesses, we can find a sense of peace and clarity that eludes us during the day.
As the night progresses and the stars continue to shine their unwavering light, we are filled with a sense of awe and wonder. The starlit night is a reminder of the beauty and magic that exists in the world, waiting to be discovered by those who are willing to look up and see. It is a gift from the universe, a source of inspiration and a sanctuary for the soul.`
  },
  {
    name: 'The Journey Within',
    content: `Life is a journey, not a destination. It is a continuous exploration of the self, a winding path filled with joys and sorrows, triumphs and setbacks, and countless opportunities for growth and discovery.
We set out on this journey with dreams in our hearts and a thirst for adventure. Along the way, we encounter new places, meet different people, and experience a kaleidoscope of emotions. Each step we take is a lesson learned, each encounter a chance to understand ourselves and the world around us better.
There are times when the road is smooth and the sun shines brightly, filling us with a sense of optimism and hope. We achieve our goals, find love and friendship, and feel a sense of accomplishment. These are the moments that make life beautiful, that give us the strength to keep moving forward.
But there are also times when the path becomes rocky and the storms of life rage. We face failures, lose loved ones, and question our purpose. These are the trials that test our resolve, that force us to dig deep within ourselves and find the courage to persevere.
In the midst of the journey, we often forget to look within. We are so focused on the external world, on achieving success and pleasing others, that we neglect the most important part of ourselves - our inner being. But it is in the stillness of our hearts, in the quiet moments of self-reflection, that we truly discover who we are.
The journey within is a journey of self-discovery and self-love. It is about learning to accept our flaws and strengths, our past and present, and embracing the unique journey that we are on. It is about finding the courage to follow our passions, to listen to the voice of our soul, and to live a life that is true to ourselves.
As we travel through life, let us not forget to take the time to explore the depths of our being. Let us cherish the moments of joy and find strength in the face of adversity. For in the end, the journey within is what truly shapes us and makes our lives meaningful. It is a journey that leads us to a place of self-awareness, peace, and fulfillment, and it is a journey that is worth taking with an open heart and a brave spirit.`
  }
]
</script>

<template>
  <div class="main-container">
    <div class="section">
      <h1>Collapse</h1>
      <div>
        <ap-collapse :data="collapseData"></ap-collapse>
      </div>
    </div>
    <div class="section">
      <h1>Carousel</h1>
      <div style="height: 500px">
        <ap-carousel :data="[
          { name: 'Wisper Classic', backImgUrl: 'https://cdn.offontime.com/images/p01.jpg' },
          { name: 'Wipser milk', backImgUrl: 'https://cdn.offontime.com/images/p03.jpg' },
          { name: 'Rider', backImgUrl: 'https://cdn.offontime.com/images/840882c28dc383c4ceb9d90ed3b47aed.JPG' }
        ]" indicator="dot" loop></ap-carousel>
      </div>
    </div>
    <div class="section">
      <h1>Input {{ inputValue }}</h1>
      <div>
        <ap-input v-model="inputValue" placeholder="输入点什么放在这里？" />
      </div>
      <div style="margin-top: 10px;">
        <ap-input v-model="inputValue" prepend="+86" allow-clear placeholder="输入您的手机号" />
      </div>
      <div style="margin-top: 10px;">
        <ap-input v-model="inputValue" append="元" placeholder="输入金额" />
      </div>
      <div style="margin-top: 10px;">
        <ap-input v-model="inputValue" type="password" allow-clear placeholder="输入密码" />
      </div>
      <div style="margin-top: 10px;">
        <ap-input v-model="inputValue" disabled />
      </div>
      <div style="margin-top: 10px;">
        <ap-input v-model="inputValue" :search="{ useIcon: true }" />
      </div>
    </div>
    <div class="section">
      <h1>Checkbox</h1>
      <div>
        <ap-space>
          <ap-checkbox v-model="checkboxValue">我已阅读并同意所有规章制度。</ap-checkbox>
          <ap-checkbox v-model="checkboxValue" disabled>我已阅读并同意所有规章制度。</ap-checkbox>
          <ap-checkbox v-model="checkboxValue" indeterminate>我已阅读并同意所有规章制度。</ap-checkbox>
          <ap-checkbox v-model="checkboxValue" indeterminate disabled>我已阅读并同意所有规章制度。</ap-checkbox>
        </ap-space>
      </div>
    </div>
    <div class="section">
      <h1>Spin</h1>
      <ap-spin :loading="true" name="spinner">
        <div style="height: 200px">
          <ap-empty></ap-empty>
        </div>
      </ap-spin>
    </div>
    <div class="section">
      <h1>Empty</h1>
      <div style="height: 200px">
        <ap-empty icon="archive" description="12321"></ap-empty>
      </div>
    </div>
    <div class="section">
      <h1>Circle Button</h1>
      <ap-space class="with-divider-space">
        <ap-circle-button isPrimary>主要按钮</ap-circle-button>
        <ap-circle-button isPrimary danger>一键登录</ap-circle-button>
        <ap-circle-button isPrimary disabled>禁用按钮</ap-circle-button>
      </ap-space>
      <ap-space class="with-divider-space">
        <ap-circle-button isMain>次级按钮</ap-circle-button>
        <ap-circle-button isMain danger>一键登录</ap-circle-button>
        <ap-circle-button isMain disabled>禁用按钮</ap-circle-button>
      </ap-space>
      <ap-space class="with-divider-space">
        <ap-circle-button>默认按钮</ap-circle-button>
        <ap-circle-button danger>一键登录</ap-circle-button>
        <ap-circle-button disabled>禁用按钮</ap-circle-button>
      </ap-space>
      <ap-space class="with-divider-space">
        <ap-circle-button isPrimary theme="halo">Halo</ap-circle-button>
        <ap-circle-button isPrimary theme="halo" danger>Halo</ap-circle-button>
        <ap-circle-button isMain theme="halo">Halo</ap-circle-button>
        <ap-circle-button isMain theme="halo" danger>Halo</ap-circle-button>
        <ap-circle-button theme="halo">Halo</ap-circle-button>
        <ap-circle-button theme="halo" danger>Halo</ap-circle-button>
      </ap-space>
      <ap-space class="with-divider-space">
        <ap-circle-button isPrimary theme="ripple">Ripple</ap-circle-button>
        <ap-circle-button isPrimary theme="ripple" danger>Ripple</ap-circle-button>
        <ap-circle-button isMain theme="ripple">Ripple</ap-circle-button>
        <ap-circle-button isMain theme="ripple" danger>Ripple</ap-circle-button>
        <ap-circle-button theme="ripple">Ripple</ap-circle-button>
        <ap-circle-button theme="ripple" danger>Ripple</ap-circle-button>
      </ap-space>
    </div>
    <div class="section">
      <h1>Timeline</h1>
      <ap-timeline>
        <ap-timeline-item label="2023/11/27">第一个时间节点</ap-timeline-item>
        <ap-timeline-item label="2023/11/28">第二个时间节点</ap-timeline-item>
        <ap-timeline-item label="2023/11/29">第三个时间节点</ap-timeline-item>
      </ap-timeline>
    </div>
    <div class="section">
      <h1>Switch</h1>
      <ap-space>
        <ap-switch v-model="switchValue" isPrimary />
        <ap-switch v-model="switchValue" size="small" disabled />
      </ap-space>
      <ap-space>
        <span>switchValue value:</span>
        <span>{{ switchValue }}</span>
      </ap-space>
    </div>
    <div clas="section">
      <h1>Divider</h1>
      <p>0</p>
      <ap-divider />
      <p>1</p>
      <ap-divider orientation="left">Text</ap-divider>
      <p>2</p>
      <ap-divider>Text</ap-divider>
      <p>3</p>
      <ap-divider orientation="right">Text</ap-divider>
      <p>4</p>
      <ap-divider orientation="center" line-style="dashed">Text</ap-divider>
    </div>
    <div class="section">
      <h1>Breadcrumb</h1>
      <div>
        <ap-breadcrumb separator=":">
          <ap-breadcrumb-item href="https://www.mitkimi.com">Vue3</ap-breadcrumb-item>
          <ap-breadcrumb-item>组件</ap-breadcrumb-item>
          <ap-breadcrumb-item>导航</ap-breadcrumb-item>
          <ap-breadcrumb-item>面包屑</ap-breadcrumb-item>
        </ap-breadcrumb>
      </div>
    </div>
    <div class="section">
      <h1>button</h1>
      <div>
        <h4>primary</h4>
        <ap-space>
          <ap-button type="primary">primary button</ap-button>
          <ap-button type="primary" danger>primary button</ap-button>
          <ap-button type="primary" disabled>primary button</ap-button>
          <ap-button type="primary" disabled danger>primary button</ap-button>
        </ap-space>
      </div>
      <div>
        <h4>main</h4>
        <ap-space>
          <ap-button type="main">main button</ap-button>
          <ap-button type="main" danger>main button</ap-button>
          <ap-button type="main" disabled>main button</ap-button>
          <ap-button type="main" disabled danger>main button</ap-button>
        </ap-space>
      </div>
      <div>
        <h4>default</h4>
        <ap-space>
          <ap-button type="default">default button</ap-button>
          <ap-button type="default" danger>default button</ap-button>
          <ap-button type="default" disabled>default button</ap-button>
          <ap-button type="default" disabled danger>default button</ap-button>
        </ap-space>
      </div>
      <div>
        <h4>dashed</h4>
        <ap-space>
          <ap-button type="dashed">dashed button</ap-button>
          <ap-button type="dashed" danger>dashed button</ap-button>
          <ap-button type="dashed" disabled>dashed button</ap-button>
          <ap-button type="dashed" disabled danger>dashed button</ap-button>
        </ap-space>
      </div>
      <div>
        <h4>text</h4>
        <ap-space>
          <ap-button type="text">text button</ap-button>
          <ap-button type="text" danger>text button</ap-button>
          <ap-button type="text" disabled>text button</ap-button>
          <ap-button type="text" disabled danger>text button</ap-button>
        </ap-space>
      </div>
      <div>
        <h4>link</h4>
        <ap-space>
          <ap-button type="link">link button</ap-button>
          <ap-button type="link" danger>link button</ap-button>
          <ap-button type="link" disabled>link button</ap-button>
          <ap-button type="link" disabled danger>link button</ap-button>
        </ap-space>
      </div>
      <div>
        <h4>size</h4>
        <ap-space>
          <ap-button type="primary">primary button</ap-button>
          <ap-button type="primary" size="small">primary button</ap-button>
        </ap-space>
      </div>
      <div>
        <h4>fluid</h4>
        <ap-space>
          <ap-button type="primary" fluid>primary button</ap-button>
        </ap-space>
      </div>
    </div>
    <div class="section">
      <h1>link</h1>
      <ap-space>
        <ap-link href="#">normal</ap-link>
        <ap-link href="#" disabled>disabled</ap-link>
        <ap-link href="#" hoverUnderlined>hover underlined</ap-link>
        <ap-link href="#" hoverUnderlined disabled>hover underlined disabled</ap-link>
        <ap-link href="#" underlined>underlined</ap-link>
        <ap-link href="#" underlined disabled>underlined disabled</ap-link>
      </ap-space>
    </div>
  </div>
</template>

<style lang="less" scoped>
.main-container {
  min-height: 100vh;
  padding: 100px 30px;
  .section {
    margin-top: 20px;
    .with-divider-space {
      margin: 40px 0;
      & > * {
        margin-right: 50px;
      }
    }
  }
}
</style>
