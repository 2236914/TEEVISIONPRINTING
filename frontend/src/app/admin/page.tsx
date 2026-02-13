import { redirect } from 'next/navigation';

const page = () => {
  redirect('/admin/dashboard');
  return null;
};

export default page;
