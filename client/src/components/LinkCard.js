import React from 'react';

const LinkCard = ({link}) => {
    return (
        <>
            <h2>Сылка</h2>
            <p>
                Ваша ссылка:{' '}
                <a href={link.to} target="_blank" rel="noopener norefferer">
                    {link.to}
                </a>
            </p>
            <p>
                Откуда ссылка:{' '}
                <a href={link.to} target="_blank" rel="noopener norefferer">
                    {link.from}
                </a>
            </p>
            <p>
                Количество кликов по ссылке: <strong>{link.clicks}</strong>
            </p>
            <p>
                Дата создания: <strong>{new Date(link.date).toLocaleDateString()}</strong>
            </p>
        </>
    );
};

export default LinkCard;
