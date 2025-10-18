import Label from "components/Form/Label";
import React, { useState } from "react";
import TextDisplay from "components/TextDisplay";
import ButtonEditDetail from "pages/Tasks/components/Action/ButtonEditDetail";

const EditLayout = ({ label, value, children, required = false }) => {
  const [isEdit, setIsEdit] = useState(false);

  const editToggle = (e) => {
    e.preventDefault();
    setIsEdit(!isEdit);
  };

  return (
    <div>
      <Label>
        {label} {isEdit && required && <span className="text-red-500">*</span>}
      </Label>
      <div className="flex gap-x-2 justify-between">
        {!isEdit ? <TextDisplay>{value}</TextDisplay> : <>{children}</>}
        <ButtonEditDetail onClick={editToggle} isEdit={isEdit} />
      </div>
    </div>
  );
};

export default EditLayout;
