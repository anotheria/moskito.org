<script setup lang="ts">
import { ref } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Textarea from 'primevue/textarea'
import Button from 'primevue/button'

const visible = ref(false)
const touched = ref(false)
const submitted = ref(false)

const schema = yup.object().shape({
  fName: yup.string().required('First Name is required'),
  lName: yup.string().required('Last Name is required'),
  cEmail: yup.string().email('Invalid email').required('Email is required'),
  cCompany: yup.string(),
  Note: yup.string().required('Note is required'),
})

const { handleSubmit, resetForm, errors, values, defineField } = useForm({
  validationSchema: schema,
  initialErrors: {},
})

const [fName] = defineField('fName')
const [lName] = defineField('lName')
const [cEmail] = defineField('cEmail')
const [cCompany] = defineField('cCompany')
const [Note] = defineField('Note')

const onSubmit = handleSubmit(
  async (data) => {
    // Here you would typically send the data to your server
    // console.log(data)
    submitted.value = true

    // Simulating an API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    resetForm()
    // visible.value = false
  },
  () => {
    touched.value = true
  }
)

const showModal = () => {
  visible.value = true
  touched.value = false
  submitted.value = false
}
</script>

<template>
  <div @click="showModal">
    <slot />

    <Dialog v-model:visible="visible" modal header="Free Consultation" :style="{ width: '600px' }">
      <form @submit.prevent="onSubmit" v-if="!submitted" class="modal">
        <div class="modal__fields">
          <div class="modal__field">
            <label for="fName" class="modal__label">First Name *</label>
            <InputText id="fName" v-model="fName" :invalid="touched && !!errors.fName" class="modal__input" />
            <small v-if="touched" class="modal__error">{{ errors.fName }}</small>
            &nbsp;
          </div>
          <div class="modal__field">
            <label for="lName" class="modal__label">Last Name *</label>
            <InputText id="lName" v-model="lName" :invalid="touched && !!errors.lName" class="modal__input" />
            <small v-if="touched" class="modal__error">{{ errors.lName }}</small>
            &nbsp;
          </div>
          <div class="modal__field col-span-2">
            <label for="cEmail" class="modal__label">Email *</label>
            <InputText id="cEmail" v-model="cEmail" :invalid="touched && !!errors.cEmail" class="modal__input" />
            <small v-if="touched" class="modal__error">{{ errors.cEmail }}</small>
            &nbsp;
          </div>
          <div class="modal__field col-span-2">
            <label for="cCompany" class="modal__label">Company</label>
            <InputText id="cCompany" v-model="cCompany" class="modal__input" />
          </div>
          <div class="modal__field col-span-2">
            <label for="Note" class="modal__label">Note *</label>
            <Textarea id="Note" v-model="Note" :invalid="touched && !!errors.Note" class="modal__textarea" />
            <small v-if="touched" class="modal__error">{{ errors.Note }}</small>
            &nbsp;
          </div>
        </div>
        <div class="modal__actions">
          <Button label="Close" @click="visible = false" class="modal__button modal__button--close" />
          <Button type="submit" label="Send" class="modal__button modal__button--send" />
        </div>
      </form>
      <div v-else class="modal__thank-you">
        <p><strong>Thank you.</strong> Your message has been sent.</p>
        <div class="modal__actions">
          <Button label="Close" @click="visible = false" class="modal__button modal__button--close" />
        </div>
      </div>
    </Dialog>
  </div>
</template>

<style scoped lang="scss">
.modal {
  &__fields {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0 30px;
  }

  &__field {
    margin-bottom: 15px;
  }

  &__label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }

  &__input,
  &__textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 1rem;

    &:invalid {
      border-color: red;
    }
  }

  &__error {
    color: red;
    font-size: 0.875rem;
  }

  &__actions {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  &__button {
    padding: 10px 20px;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;

    &--close {
      background-color: transparent;
      color: #666;
    }

    &--send {
      background-color: #007bff;
      color: white;
    }
  }

  &__thank-you {
    padding: 20px;
    text-align: center;

    p {
      font-size: 1.2rem;
      margin-bottom: 20px;
    }
  }
}
</style>
