import { Email } from '@/components/Email';
import { GridBox } from '@/components/GridBox';
import { Phone } from '@/components/Phone';
import { TextSelection } from '@/components/TextSelection';
import React from 'react'
import { Control, FieldValues, DeepMap, FieldError } from 'react-hook-form';

interface TextItem {
    name: string;
    placeholder: string;
}

interface DeliveryAddressFormProps {
    fname: TextItem;
    lname: TextItem;
    house_no: TextItem;
    house_name: TextItem;
    city: TextItem;
    state: TextItem;
    zip: TextItem;
    phone: TextItem;
    email:TextItem;
    control: Control<FieldValues>;
    errors: DeepMap<FieldValues, FieldError>;
}

export const DeliveryAddressForm: React.FC<DeliveryAddressFormProps> = ({ fname, lname, zip, email, house_no, control, errors, house_name, city, state, phone }) => {
    return (
        <>
            <GridBox columns={2} gap={5} className='DeliveryAddressForm sm:grid pt-5'>
            <GridBox.GridItem columnMerge={1}>
                    <TextSelection name={fname.name} placeholder={fname.placeholder} control={control} errors={errors} required={true} />
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1}>
                    <TextSelection name={lname.name} placeholder={lname.placeholder} control={control} errors={errors} required={true} />
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1}>
                    <TextSelection name={house_no.name} placeholder={house_no.placeholder} control={control} errors={errors} required={true} />
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1}>
                    <TextSelection name={house_name.name} placeholder={house_name.placeholder} control={control} errors={errors} required={true} />
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1}>
                    <TextSelection name={city.name} placeholder={city.placeholder} control={control} errors={errors} required={true} />
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1}>
                    <TextSelection name={state.name} placeholder={state.placeholder} control={control} errors={errors} required={true} />
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1}>
                    <TextSelection name={state.name} placeholder={state.placeholder} control={control} errors={errors} required={true} />
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1}>
                    <TextSelection name={zip.name} placeholder={zip.placeholder} control={control} errors={errors} required={true} />
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1}>
                    <Phone name={phone.name} placeholder={phone.placeholder} control={control} errors={errors}  />
                </GridBox.GridItem>
                <GridBox.GridItem columnMerge={1}>
                    <Email name={email.name} placeholder={email.placeholder} control={control} errors={errors}  />
                </GridBox.GridItem>
            </GridBox>
        </>
    )
}
