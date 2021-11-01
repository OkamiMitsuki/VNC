import React from 'react';
import { useForm } from 'react-hook-form';
import CategoryBox from './CategoryBox';

export default function HookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="File" {...register("File", { required: true, min: 4, maxLength: 23, pattern: /.mp3/i })} />
      <input type="text" placeholder="Title" {...register("Title", { required: true, max: 24, min: 1 })} />
      <CategoryBox />
      <input type="text" placeholder="Tags(タグ)" {...register("Tags(タグ)", {})} />

      <input type="submit" />
    </form>
  );
}