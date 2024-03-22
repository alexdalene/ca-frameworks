import { useForm } from 'react-hook-form';

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <h1>Contact page</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            type='text'
            placeholder='First name'
            {...register('firstName', { required: true, minLength: 3 })}
          />
          {errors.firstName && <span>Please enter your first name</span>}

          <input
            type='text'
            placeholder='Last name'
            {...register('lastName', { required: true, minLength: 3 })}
          />
          {errors.lastName && <span>Please enter your last name</span>}
        </div>

        <div>
          <input type='email' placeholder='Email' {...register('email')} />
        </div>

        <input type='text' placeholder='Subject' {...register('subject')} />
        <input type='text' placeholder='Message' {...register('body')} />

        <input type='submit' />
      </form>
    </div>
  );
};

export default Contact;
