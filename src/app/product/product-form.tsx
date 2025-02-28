import { useRef } from 'react';

import { BorderLine } from '@/components/border-line';
import { FormContainer } from '@/components/form-container';
import { RowContainer } from '@/components/row-container';
import { Title } from '@/components/title';
import { CustomInput } from '@/components/ui/custom-input';

export const ProductForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const click = () => {
    console.log('>>> CLICK');
  };

  return (
    <>
      <FormContainer ref={formRef} onSubmit={() => click()}>
        <RowContainer>
          <Title>Producto</Title>
        </RowContainer>
        <BorderLine />

        <CustomInput
          label="Nombre"
          type="text"
          placeholder="Nombre"
          maxLength={50}
          hasValue
          required
        />
      </FormContainer>
    </>
  );
};
