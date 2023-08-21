import React from 'react';
import { ItemStep, ListSteps, Progres, TextStep } from '../../Forms.styled';

export default function ListProgresSteps({stepNumber, arraySteps}) {
    return (
        <ListSteps>
            {arraySteps.map((step, index) => {
                return (
                    <ItemStep key={index}>
                        <TextStep
                            currentStep={index + 1}
                            stepNumber={stepNumber}
                        >
                            {step}
                        </TextStep>
                        <Progres
                            currentStep={index + 1}
                            stepNumber={stepNumber}
                        />
                    </ItemStep>
                );
            })}
        </ListSteps>
    );
}
