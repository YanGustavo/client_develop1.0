import {useWatch, Control} from 'react-hook-form';

type FormValues = {
  email: string;
  password: string;
};
const IsolateReRender = ({ control }: { control: Control<FormValues> }) => {
  const email = useWatch({
    control,
    name: "email",
    defaultValue: "default"
  });

  return (
    <div>{email}</div>
    );
}

export default IsolateReRender;