import React, { memo, FunctionComponent } from 'react';

import { IconCardAmex, IconCardCB, IconCardDinersClub, IconCardDiscover, IconCardJCB, IconCardMada, IconCardMaestro, IconCardMastercard, IconCardUnionPay, IconCardVisa, IconSize } from '../../ui/icon';

export interface CreditCardIconProps {
    cardType?: string;
}

const CreditCardIcon: FunctionComponent<CreditCardIconProps> = ({
    cardType,
}) => {
    const iconProps = {
        additionalClassName: 'cardIcon-icon',
        size: IconSize.Medium,
        testId: `credit-card-icon-${cardType || 'default'}`,
    };

    switch (cardType) {
    case 'american-express':
        return <IconCardAmex { ...iconProps } />;

    case 'cb':
        return <IconCardCB { ...iconProps } />;

    case 'diners-club':
        return <IconCardDinersClub { ...iconProps } />;

    case 'discover':
        return <IconCardDiscover { ...iconProps } />;

    case 'jcb':
        return <IconCardJCB { ...iconProps } />;

    case 'mada':
        return <IconCardMada { ...iconProps } />;

    case 'maestro':
        return <IconCardMaestro { ...iconProps } />;

    case 'mastercard':
        return <IconCardMastercard { ...iconProps } />;

    case 'unionpay':
        return <IconCardUnionPay { ...iconProps } />;

    case 'visa':
        return <IconCardVisa { ...iconProps } />;

    default:
        return <div className="cardIcon-icon cardIcon-icon--default icon icon--medium" />;
    }
};

export default memo(CreditCardIcon);
