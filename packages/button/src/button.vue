<template>
  <button
    class="xg-button"
    :disabled="buttonDisabled || loading"
    :autofocus="autofocus"
    :type="nativeType"
    :class="[
      type ? 'xg-button--' + type : '',
      buttonSize ? 'xg-button--' + buttonSize : '',
      {
        'is-disabled': buttonDisabled,
        'is-plain': plain,
        'is-round': round
      }
    ]"
    @click="handleClick"
  >
    <i
      v-if="loading"
      class="el-icon-loading"
    />
    <i
      v-if="icon && !loading"
      :class="icon"
    />
    <span v-if="$slots.default"><slot /></span>
  </button>
</template>
<script>
  export default {
    name: 'XgButton',

    inject: {
      elForm: {
        default: ''
      },
      elFormItem: {
        default: ''
      }
    },

    props: {
      type: {
        type: String,
        default: 'default'
      },
      size: String,
      icon: {
        type: String,
        default: ''
      },
      nativeType: {
        type: String,
        default: 'button'
      },
      loading: Boolean,
      disabled: Boolean,
      plain: Boolean,
      autofocus: Boolean,
      round: Boolean,
      circle: Boolean
    },

    computed: {
      buttonSize() {
        return this.size;
      },
      buttonDisabled() {
        return this.disabled || (this.elForm || {}).disabled;
      }
    },

    methods: {
      handleClick(evt) {
        this.$emit('click', evt);
      }
    }
  };
</script>
