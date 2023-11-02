// import { ref, computed } from 'vue';
// import { defineStore } from 'pinia';
// import { Joi } from 'joi';
// export const useValidationStore = defineStore('validation', () => {
//     const values = ref({});
//     const errors=ref({});
//     const isValid=ref(false);
//     const emailSchema = Joi.string().email();
//     function setInitValues(initValues) {
//         values.value=initValues;
       
//       };
//     function handleChange (e, schema) {
//         const { name, value } = e.target;
//         values.value={...values.value, [name]:value};
//       const result =schema.validate(value);
//       if(result.error) errors.value={...errors.value, [name]: result.error.message};
//       isValid.value = e.target.closest("form").checkValidity();
//     }
   
//     function resetForm (newValues = {}, newErrors = {}, newIsValid = true)  {
//             values.value= newValues;
//             errors.value = newErrors;
//             isValid.value = newIsValid;
          
//     }
//     return { values, errors, isValid, setInitValues, handleChange, resetForm }
//   })
