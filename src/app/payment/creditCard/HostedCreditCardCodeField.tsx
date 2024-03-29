import React, { useCallback, useMemo, Fragment, FunctionComponent } from 'react';

import { TranslatedString } from '../../locale';
import { FormField, TextInputIframeContainer } from '../../ui/form';
import { IconHelp, IconLock } from '../../ui/icon';
import { TooltipTrigger } from '../../ui/tooltip';

import CreditCardCodeTooltip from './CreditCardCodeTooltip';

export interface HostedCreditCardCodeFieldProps {
    appearFocused: boolean;
    id: string;
    name: string;
}

const HostedCreditCardCodeField: FunctionComponent<HostedCreditCardCodeFieldProps> = ({
    appearFocused,
    id,
    name,
}) => {
    const renderInput = useCallback(() => (<>
        <TextInputIframeContainer
            additionalClassName="has-icon"
            appearFocused={ appearFocused }
            id={ id }
        />

        <IconLock />
    </>), [id, appearFocused]);

    const labelContent = useMemo(() => (
        <Fragment>
            <TranslatedString id="payment.credit_card_cvv_label" />

            <TooltipTrigger
                placement="top-start"
                tooltip={ <CreditCardCodeTooltip /> }
            >
                <span className="has-tip">
                    <IconHelp />
                </span>
            </TooltipTrigger>
        </Fragment>
    ), []);

    return (
        <FormField
            additionalClassName="form-ccFields-field--ccCvv"
            input={ renderInput }
            labelContent={ labelContent }
            name={ name }
        />
    );
};

export default HostedCreditCardCodeField;
