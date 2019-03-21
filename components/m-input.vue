<template>
    <view class="m-input-view">
        <input :focus="focus_" v-model="realValue"  @input="onInput" class="m-input-input me-login-username-input" :placeholder="placeholder"
            :password="type==='password'&&!showPassword" @focus="onFocus" @blur="onBlur" />
        <!-- 优先显示密码可见按钮 -->
        <view v-if="clearable_&&!displayable_" class="m-input-icon">
            <m-icon :color="value.length?'#666666':'rgba(255, 255, 255, 0)'" type="clear" size="20" @click="clear"></m-icon>
        </view>
        <view v-if="displayable_" class="m-input-icon">
            <m-icon :color="showPassword?'#666666':'#cccccc'" type="eye" size="20" @click="display"></m-icon>
        </view>
    </view>
</template>

<script>
    import mIcon from './m-icon/m-icon.vue'

    export default {
        components: {
            mIcon
        },
        props: {
            /**
             * 输入类型
             */
            type: String,
            /**
             * 值
             */
            value: String,
            /**
             * 占位符
             */
            placeholder: String,
            /**
             * 是否显示清除按钮
             */
            clearable: {
                type: [Boolean, String],
                default: false
            },
            /**
             * 是否显示密码可见按钮
             */
            displayable: {
                type: [Boolean, String],
                default: false
            },
            /**
             * 自动获取焦点
             */
            focus: {
                type: [Boolean, String],
                default: false
            }
        },
        model: {
            prop: 'value',
            event: 'input'
        },
        data() {
            return {
                /**
                 * 显示密码明文
                 */
                showPassword: false,
                /**
                 * 是否获取焦点
                 */
                isFocus: false,
				/**
				 * 输入框的值
				 */
				realValue: this.value
            }
        },
        computed: {
            inputType() {
                const type = this.type
                return type === 'password' ? 'text' : type
            },
            clearable_() {
                return String(this.clearable) !== 'false'
            },
            displayable_() {
                return String(this.displayable) !== 'false'
            },
            focus_() {
                return String(this.focus) !== 'false'
            }
        },
        methods: {
            clear() {
                this.realValue = '';
				this.$emit('input', this.realValue)
            },
            display() {
                this.showPassword = !this.showPassword
            },
            onFocus() {
                this.isFocus = true
            },
            onBlur() {
                this.$nextTick(() => {
                    this.isFocus = false
                })
            },
            onInput(e) {
                this.$emit('input', e.target.value)
            }
        }
    }
</script>

<style>
    .m-input-view {
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        flex: 1;
        padding: 0 10upx;
		margin: 0 15upx;
		border-bottom: 1px solid #2196f3;
    }

    .m-input-input {
        flex: 1;
        width: 100%;
		outline:none;
    }
    
    .m-input-icon{
        width: 20px;
    }
	.me-login-username-input {
		border: none;
		background: rgba(255, 255, 255, 0);
	}
</style>
