import React from 'react';

type PropTypes = {
  checked: boolean;
  label: string;
  name: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  disabled?: boolean;
};

const AdminToggle: React.FC<PropTypes> = ({
  label,
  onChange,
  name,
  checked,
  disabled = false,
}) => {
  return (
    <div className="flex gap-2">
      <input
        id={name}
        type="checkbox"
        className="toggle toggle-md toggle-success"
        onChange={onChange}
        name={name}
        checked={checked}
        disabled={disabled}
      />

      <p className="font-bold">{label}</p>
    </div>
  );
};

export default AdminToggle;
