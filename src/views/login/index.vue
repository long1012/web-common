<template>
  <el-form
    ref="formRef"
    name="custom-validation"
    :model="formState"
    v-bind="layout"
    @finish="handleFinish"
    @validate="handleValidate"
    @finishFailed="handleFinishFailed"
  >
    <el-form-item has-feedback label="Password" name="userName">
      <el-input v-model:value="formState.userName" autocomplete="off" />
    </el-form-item>
    <el-form-item has-feedback label="Confirm" name="passWord">
      <el-input v-model:value="formState.passWord" type="password" autocomplete="off" />
    </el-form-item>
    <el-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <el-button type="primary" html-type="submit" @click="onSubmit">Submit</el-button>
      <el-button style="margin-left: 10px" @click="resetForm">Reset</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
  import { defineComponent, reactive, ref } from 'vue'
  import type { FormInstance } from 'ant-design-vue'
  import AjaxAuthService from '@/service/api/auth'
  import { ILoginParams } from '@/service/api/model/authModel'
  import { useRouter } from 'vue-router'

  interface FormState {
    userName: string
    passWord: string
  }
  export default defineComponent({
    setup() {
      const formRef: any = ref<FormInstance>()
      const formState = reactive<FormState>({
        userName: '',
        passWord: ''
      })
      const router = useRouter()
      const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 }
      }
      const handleFinish = (values: FormState) => {
        console.log(values, formState)
      }
      const handleFinishFailed = (errors: any) => {
        console.log(errors)
      }
      const resetForm = () => {
        formRef.value.resetFields()
      }
      const handleValidate = (...args: any[]) => {
        console.log(args)
      }

      const onSubmit = (values: ILoginParams) => {
        AjaxAuthService.login(values).then((res) => {
          router.push({ path: '/layout', query: { loginStatus: 'true' } })
        })
      }

      return {
        formState,
        formRef,
        layout,
        onSubmit,
        handleFinishFailed,
        handleFinish,
        resetForm,
        handleValidate
      }
    }
  })
</script>

<style lang="less"></style>
