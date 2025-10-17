import ButtonPrimary from "components/Button/ButtonPrimary";
import React from "react";
import { useModalStore } from "store/modal.store";

const ButtonSubmit = ({ disabled, isLoading, ...props }) => {
  const { action } = useModalStore();

  const title = {
    CREATE: "Create",
    VIEW: "Update",
  };

  return (
    <ButtonPrimary
      type={"submit"}
      disabled={disabled || isLoading}
      className={"w-full"}
      {...props}
    >
      {!isLoading ? (
        `${title[action]} Task`
      ) : (
        <div className="flex items-center gap-x-2 text-center justify-center">
          Submitting <Spinner />
        </div>
      )}
    </ButtonPrimary>
  );
};

export default ButtonSubmit;
