<script setup lang="ts">
</script>

<template>
  <main style="height: 100vh; padding: 100px 60px">
    <div>
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
    <div>
      <h1>link</h1>
      <p><ap-link href="#">normal</ap-link></p>
      <p><ap-link href="#" disabled>disabled</ap-link></p>
      <p><ap-link href="#" hoverUnderlined>hover underlined</ap-link></p>
      <p><ap-link href="#" hoverUnderlined disabled>hover underlined disabled</ap-link></p>
      <p><ap-link href="#" underlined>underlined</ap-link></p>
      <p><ap-link href="#" underlined disabled>underlined disabled</ap-link></p>
    </div>
  </main>
</template>
